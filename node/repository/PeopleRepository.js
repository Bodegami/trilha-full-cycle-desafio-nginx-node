import mysql from 'mysql';
import * as randomNames from 'gerador-nome';

const config = ({
    host: 'db',
    user: 'root',
    password: 'example',
    database: 'nodedb'
});

//const mysql = require('mysql');
//const connection = mysql.createConnection(config)


export function createPersona() {
    let nome = randomNames.geradorNome()
    const connection = mysql.createConnection(config);
    const insertPerson = `INSERT INTO people(name) VALUES('${nome}')`

    connection.query(insertPerson, (error, results) => {
        if(error) 
          console.log(`Error: ${error.message}`);
        else
          console.log(`Inserido pessoa: ${nome} com sucesso!`)
          connection.end();
    });
}



export function findAllPersons() {
    const connection = mysql.createConnection(config);
    const selectPeople = `SELECT * FROM people`;
    let lista = new Array();

    connection.query(selectPeople, (error, results) => {
        if(error) 
          console.log(`Error: ${error.message}`);
        else
          console.log('lista recebendo o results..')

          const result = Object.values(JSON.parse(JSON.stringify(results)));
          result.forEach((v) => lista.push(v['name']))
          
          console.log(`Convertendo resposta para lista: ${lista.toString()}`)
          connection.end();
    });
    return lista;
}