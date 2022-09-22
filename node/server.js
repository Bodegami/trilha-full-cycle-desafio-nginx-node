const express = require("express")
const bodyParser = require("body-parser")
const peopleRoutes = require("./routes/people.js")
const { createTable } = require("./repository/connection.js")
const PORT = process.env.PORT || 3000


var app = express()
app.use(bodyParser.json())

app.use("/", peopleRoutes)

app.listen(PORT, () => {
    createTable();
    console.log("Tabela people criada com sucesso!")
});