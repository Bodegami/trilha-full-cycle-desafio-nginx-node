const mysql = require("mysql")

const config = ({
    host: 'db',
    user: 'root',
    password: 'example',
    database: 'nodedb'
});


async function connectionDB() {
    const connection = await mysql.createConnection(config);
    console.log('Conectado ao banco!');
    return connection;
}

async function createTable() {
    const sql = 'CREATE TABLE IF NOT EXISTS people(id int auto_increment primary key, name varchar(255) )';
    const connection = await connectionDB();
    await connection.query(sql)
}

module.exports = { connectionDB, createTable };