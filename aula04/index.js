const { ApolloServer, gql } = require("apollo-server");

/**
 * Scalar Types
 * Int
 * Float
 * String
 * Boolean
 * ID
 */

const typeDefs = gql`
  type Query {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
  }
`;

const resolvers = {
  Query: {
    idade() {
      return 33;
    },
    salario() {
      return 3000.0;
    },
    nome() {
      return "Weslley";
    },
    ativo() {
      return true;
    },
    id() {
      return 11112;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
