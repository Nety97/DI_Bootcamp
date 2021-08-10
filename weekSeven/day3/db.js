// const knex = require('knex');
// const db = knex({
//     client: 'pg',
//     connection: {
//       host : '127.0.0.1',
//       port: '5432',
//       user : 'postgres',
//       password : 'nety',
//       database : 'dvdrental'
//     }
// });

// db.select('country_id', 'city_id', 'city').from('city')// first way
// db('city')// second way
// .select('city', 'city_id')
// .where({city_id:88})
// .then(data =>{
//     console.log(data)
// })
// .catch(e => {
//     console.log(e)
// })

// chage data
// db('city')
// .where({city_id:88})
// .update({city: 'BradFords'})
// .then(data =>{
//     console.log(data)
// })
// .catch(e => {
//     console.log(e)
// })
// change and return
// db('city')
// .where({city_id:88})
// .update({city: 'BradFord'})
// .returning('*')
// .then(data =>{
//     console.log(data)
// })
// .catch(e => {
//     console.log(e)
// })
// add 1 value with insert 
// db('country')
// .insert({country:'Lalaland'})
// .returning('*')
// .then(data =>{
//     console.log(data)
// })
// .catch(e => {
//     console.log(e)
// })
// delete one element
// db('country')
// .del()
// .where({country_id:110})
// .then(data =>{
//     console.log(data)
// })
// .catch(e => {
//     console.log(e)
// })
//
