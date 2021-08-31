const knex = require('knex')

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port: '5432',
      user : 'postgres',
      password : 'nety',
      database : 'Users'
    }
});
// check if mail alredy exists, if not create user with createUser()
const checkEmail =(val) => {
    return db('users').select('email').where({email: val}).returning('*')
}
// check if user alredy exists, if so send it to main page if not send it to register page
const checkUser = (password, mail) => {
    return db('login').select('password', 'email').where({password: password, email: mail})
}

const createUser = (name, mail) =>{ // i need to pass password too
    return db('users').insert({username: name, email: mail}).returning('*')
      
}

module.exports = {
    checkEmail,
    createUser,
    checkUser
}