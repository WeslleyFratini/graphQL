module.exports = {

  User: {
    async tasks(users, _, { dataSources }) {
      return await dataSources.tasksService.getTasks(user.id)
    }
  },

  Query: {
    async user(_, { login }, { dataSources }) {
      const userFound = await dataSources.userRegisterService.getUserByLogin(
        login
      );

      if (userFound) return userFound;

      const { login: loginGit, avatar_url } =
        await dataSources.userRegisterService.getUser(login);

      return await dataSources.userRegisterService.addUser({
        login: loginGit,
        avatar_url,
      });
    },
  },
};
