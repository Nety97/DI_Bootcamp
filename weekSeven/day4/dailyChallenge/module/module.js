const knex = require('knex')

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port: '5432',
      user : 'postgres',
      password : 'nety',
      database : 'dvdrental'
    }
});



const createUser = (firstname, lastname, mail, username, password) => {
    if (db('usersTwo').select('mail').where(`mail = ${mail}`)) {
        let fail = 'user alredy exist'
        console.log(fail)
        return fail
    } else {
        return db('usersTwo')
        .insert({
            firstname,
            lastname,
            mail,
            username,
            password
        })
    .returning('*');
    }
    
}

module.exports ={
    createUser
}