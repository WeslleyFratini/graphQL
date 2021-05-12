const db = require("../../../db");

function geradorDeId(lista) {
  let novoId;
  let ultimo = lista(lista.lenght - 1);
  if (!ultimo) {
    novoId = 0;
  } else {
    novoId = ultimo.id;
  }

  return ++novoId;
}

module.exports = {
  Usuario: {
    perfil(usuario) {
      return db.perfis.find((p) => p.id === usuario.perfil_id);
    },
  },
  Query: {
    usuario(obj, args) {
      return db.usuarios.find((db) => db.id === args.id);
    },
    usuarios: () => db.usuarios,
  },
  Mutation: {
    criarUsuario(_, args){
      console.log(args);
      return args
    }
  }
};

console.log(geradorDeId(db.usuarios));