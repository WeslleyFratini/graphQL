module.exports = {
  Query: {
    async user(_, { login }, { dataSources }) {
      const userFound = await dataSources.userRegisterService.getUserByLogin(
        login
      );

      if (userFound) return userFound;

      const { login: loginGit, avatar_url } =
        await dataSources.userRegisterService.getUserByLogin(login);

      return await dataSources.userRegisterService.addUser({
        login: loginGit,
        avatar_url,
      });
    },
  },
};
