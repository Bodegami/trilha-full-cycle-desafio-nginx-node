const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'example',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config)

const insertPerson = `INSERT INTO people(name) VALUES('Gabriel')`
connection.query(insertPerson)

let selectPeople = `SELECT * FROM people`;
//let pessoas = []

connection.end()

let nomes = new Array();
nomes.push(findAll(selectPeople));



app.get('/', (req, res) => {

    res.send(`<h1>Lista de nomes:</h1></br> <h1>${nomes.toString()}</h1>`)
    //selectQuery(selectPeople, res);
    //selectQuery(selectPeople, res);
    //res.send(`<h1>Full Cycle 3!!!</h1></br> <h1>Pessoas: ${selectQuery(sql, res)}`)
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})





function selectQuery(sqlQry, res) {
    const connection = mysql.createConnection(config);

    connection.query(sqlQry, (error, results, fields) => {
        if(error) 
          res.json(error);
        else
          var lista = new Array();
          //lista.push(Object.values(results))
          //console.log(lista)
          console.log('lista recebendo o results..')

          const result = Object.values(JSON.parse(JSON.stringify(results)));
          result.forEach((v) => lista.push(v['name']))
          console.log(lista.length)
          console.log(lista)
          //console.log(lista.forEach((p) => p))
          //console.log(result)
          //result.forEach((v) => console.log(v['name']));   --------- works!


          let response = `<h1>Full Cycle 3.0</h1></br> <p>${lista}</p>`
          res.send(response);
          console.log(typeof(results))
        connection.end();
        console.log('executou!');
    });
    //connection.end()
}


function findAll(sqlQry) {
    const connection = mysql.createConnection(config);
    let lista = new Array();

    connection.query(sqlQry, (error, results) => {
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



