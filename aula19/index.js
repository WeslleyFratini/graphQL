const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const GitHubService = require("./src/services/GitHub.service");
const UserRegisterService = require("./src/services/UserRegisterService");

const server = new ApolloServer({
  ...graphql,
  dataSources: () => ({
    gitHubService: GitHubService,
    userRegisterService: UserRegisterService,
    tasksService: TasksRegisterService
  }),
});

server.listen().then(({ url }) => console.log(url));
