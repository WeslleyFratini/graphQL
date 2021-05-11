const { gql, ApolloServer } = require("apollo-server");

const typeDefs = gql`

  enum TipoPerfil {
    ADMIN
    NORMAL
  }

  type Perfil {
    id: Int
    descricao: TipoPerfil
  }
  type Query {
    
  }
`;
const resolvers = {
  Usuario: {
    perfil(usuario) {
      return db.perfis.find((p) => p.id === usuario.perfil);
    },
  },
  Query: {
    usuario(obj, args) {
      return db.usuarios.find((db) => db.id === args.id);
    },
    perfis() {
      return db.perfis;
    },
    usuarios: () => db.usuarios,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(( { url}) => console.log(url));