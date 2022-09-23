const express = require('express')
const Router = express.Router();
const { insertPerson, findAll } = require("../repository/connection.js")

Router.get("/", async (req, res) => {
    await insertPerson();
    await findAll(res);
})

module.exports = Router;