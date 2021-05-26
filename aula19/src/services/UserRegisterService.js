const db = require('../db')

class UserRegisterService {
  async addUser(user){
    return await (await db('user').insert(user).returning('*'))[0]
  }
 async getUserByLogin(login){
    return await db('user').where({ login }).first()
  }
}

module.exports = new UserRegisterService()