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

const addTo = (userId, tableN, todoArr, progressArr, doneArr, res) => {
    // console.log(todoArr);
    return db.transaction(trx => {
        trx('tables')
        .select('data_table')
        .where({user_id: userId})
        .andWhere({table_name: tableN})
        .returning('data_table')
        .then(data_tableF => {
            let userTable = data_tableF[0]
            let currentTable = userTable.data_table?.data_table || userTable.data_table
            // let {table:currentTable} = userTable.data_table
            // console.log(data_tableF);
            // console.log(data_table);
            // console.log(currentTable);
            // console.log(todoArr, progressArr, doneArr);
            let {toDo, inProgress, done} = currentTable.table
            // console.log(progressArr);
            toDo = [...todoArr]
            inProgress = [...progressArr]
            done = [...doneArr]
            console.log("hh",toDo);
            const jsonTwo = {tableName: tableN, table: {
                toDo: [...toDo],
                inProgress: [...inProgress],
                done: [...done]
            }}
            JSON.stringify(jsonTwo)
            return trx('tables')
            .where({user_id: userId})
            .andWhere({table_name: tableN})
            .update({data_table: jsonTwo})
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