const express = require('express')
const Router = express.Router();
const mysqlConnection = require("../repository/connection.js")
const { geradorNome } = require('gerador-nome')  

Router.get("/", (req, res) => {
    let nomeAleatorio = geradorNome()
    mysqlConnection.query(`INSERT INTO people(name) VALUES('${nomeAleatorio}')`, (err) => {
        if(!err) {
            console.log(`Inserido com sucesso: ${nomeAleatorio}`)
        }
        else {
            console.log(`Falha ao inserir o nome: ${nomeAleatorio}`)
        }
    })


    mysqlConnection.query("SELECT * FROM people", (err, rows) => {
        if(!err) {
            let listOfNames = new Array();
            let results = Object.values(JSON.parse(JSON.stringify(rows)));
            results.forEach((result) => listOfNames.push(result['name']))

            let response = `<h1>Full Cycle Rocks!</h1> <h2>Lista de nomes:</h2> <p>${listOfNames}</p>`

            res.send(response)
        }
        else {
            console.log("Failed to retrieve data...")
        }
    })
})

module.exports = Router;