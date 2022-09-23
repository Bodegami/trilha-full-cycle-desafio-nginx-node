const express = require('express')
const Router = express.Router();
const { connectionDB, insertPerson } = require("../repository/connection.js")

Router.get("/", async (req, res) => {
    const mysqlConnection = await connectionDB();
    insertPerson()

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