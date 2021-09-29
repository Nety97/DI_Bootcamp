const knex = require('knex')

const db = knex({
    client: 'pg',
    connection:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
});

const createUser = (name, email, hash) =>{
    return db('users').insert({username: name, email: email, password: hash}).returning('user_id')
}

const checkUser = (email) => {
    return db('users').select('user_id', 'username','email', 'password').where({email: email})
}

const checkTable = (userId, tableName) => {
    return db('tables').select('table_name').where({user_id: userId}).andWhere({table_name: tableName})
}
const createtable = (userId, tableName) => {
    const jsonTable = {tableName: tableName, table: {
        toDo: [],
        inProgress: [],
        done: []
    }}
    JSON.stringify(jsonTable)
    return db('tables').insert({table_name: tableName, data_table: jsonTable, user_id: userId})
}

const getUsertable = (userId) => {
    return db('tables').select('table_id', 'table_name', 'data_table').where({user_id: userId})
}

const getTableByUser = (userId, table) => {
    return db('tables').select('table_id', 'table_name', 'data_table').where({user_id: userId}).andWhere({table_name: table})
}

const addTo = (task, userId, table, res) => {
    return db.transaction(trx => {
        trx('tables')
        .select('data_table')
        .where({user_id: userId})
        .andWhere({table_name: table})
        .returning('data_table')
        .then(data_table => {
            const userTable = data_table[0]
            const {table:currentTable} = userTable.data_table?.data_table || userTable.data_table
            console.log(data_table);
            console.log(userTable);
            console.log(currentTable);
            const {toDo} = currentTable
            toDo = [...task]
            return trx('tables')
            .update(userTable)
            .where({user_id: userId})
            .andWhere({table_name: table})
            .returning('data_table')
              
        })
        .then(trx.commit)
        .catch(e => {
            console.log(e);
            trx.rollback
        })
    })
    .catch(err => {
        console.log(err);
        res.status(404).json('unable to save it')
    }) 
}


module.exports = {
    createUser,
    checkUser,
    checkTable,
    createtable,
    getUsertable,
    getTableByUser,
    addTo
}