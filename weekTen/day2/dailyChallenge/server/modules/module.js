const knex = require('knex')
const env = require('dotenv')
env.config();
// module.exports ={
//     db: knex({
//         client: 'pg',
//         connection:{
//             host:'127.0.0.1',
//             user:'postgres',
//             password:'nety',
//             database: 'Users'
//         }
//     })
// }
// use this if have modules in different pages 

const db = knex({
    client: 'pg',
    // connection: {
    //   host : process.env.HOST,
    //   port: process.env.PORT_DB,
    //   user : process.env.USERNAME,
    //   password : process.env.PASSWORD,
    //   database : process.env.DATABASE
    // }
    connection:{
        host:'127.0.0.1',
        user:'postgres',
        password:'nety',
        database: 'Users'
    }
});
// check if mail alredy exists, if not create user with createUser()
const checkEmail =(val) => {
    return db('users').select('email').where({email: val}).returning('*')
}
// check if user alredy exists, if so send it to main page if not send it to register page
const checkUser = (password, mail) => {
    return db('login').select('*').where({ email: mail})
}

const createUser = (name, mail, hash, res) =>{ // i need to pass password too
    // return db('users').insert({username: name, email: mail}).returning('*')
    return db.transaction(trx => {
        trx('users')
        .insert({username: name, email: mail})
        .returning('user_id')
        .then(userId => {
            return trx('login')
            .insert({password: hash, email: mail, user_id: userId[0]})
            .returning('*')
            .then(user => {
                res.json({user: user[0]})
            })
        })
        .then(trx.commit)
        .catch(e => {
            console.log(e);
            trx.rollback
        })
    })
    .catch(err => {
        console.log(err);
        res.status(404).json('unable to register')
    }) 
}

module.exports = {
    checkEmail,
    createUser,
    checkUser
}