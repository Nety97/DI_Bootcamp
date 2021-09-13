const knex = require('knex')

const db = knex({
    client: 'pg',
    connection:{
        host: process.env.DB_HOST,
        user:'postgres',
        password:'nety',
        database: 'tasks'
    }
});

const createUser = (name, email, hash) =>{
    return db('users').insert({username: name, email: email, password: hash}).returning('user_id')
}

const checkUser = (email) => {
    return db('users').select('user_id', 'username','email', 'password').where({email: email})
}

module.exports = {
    createUser,
    checkUser
}