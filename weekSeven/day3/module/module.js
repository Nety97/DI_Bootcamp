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

const getAllCountries = () =>{
    return db('country').select('country_id', 'country')
}

const createUser = (username, password) => {
    return db('users')
    .insert({
        username,
        password
    })
    .returning('*');
}

module.exports ={
    countries: getAllCountries,
    createUser
}