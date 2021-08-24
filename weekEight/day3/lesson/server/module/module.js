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


const consultCountries = () => {
    // let a = {name:'nety', lastname: 'wahnich'}
    // return a 
    return db.select().from('country')
}
const consultCities = (num) => {
    return db.select().from('city').where('country_id', num.id )
}

module.exports ={

    consultCountries,
    consultCities
}