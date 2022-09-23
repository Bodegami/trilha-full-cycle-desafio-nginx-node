const mysql = require("mysql");
const { geradorNome } = require('gerador-nome');

const config = ({
    host: 'db',
    user: 'root',
    password: 'example',
    database: 'nodedb'
});

async function connectionDB() {
    if(global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    };
     
    const connection = await mysql.createConnection(config);
    console.log('Conectado ao DB!');
    global.connection = connection;
    return connection;
};

async function createTable() {
    const connection = await connectionDB();
    const sql = 'CREATE TABLE IF NOT EXISTS people(id int auto_increment primary key, name varchar(255) );';
    await connection.query(sql);
};

async function insertPerson() {
    const connection = await connectionDB();
    const person = geradorNome();
    const sql = `INSERT INTO people(name) VALUES('${person}');`;
    console.log(`Inserido o nome no banco: ${person}`);
    return await connection.query(sql);
};

async function findAll(res){
    const connection = await connectionDB();
    connection.query('SELECT * FROM people;', (err, rows) => {
        if(!err) {
            let resposta = `<h1>Full Cycle Rocks!</h1> <ol>`;

            let results = Object.values(JSON.parse(JSON.stringify(rows)));
            results.forEach(result => resposta = `${resposta}<li>${result.name}</li>`);

            resposta = `${resposta}</ol>`;

            res.send(resposta);
        }
        else {
            console.log("Fail to retrieve data..");
        }
    });
};

module.exports = { createTable, insertPerson, findAll, connectionDB };