const mysql = require("mysql")

const config = ({
    host: 'db',
    user: 'root',
    password: 'example',
    database: 'nodedb'
});
const mysqlConnection = mysql.createConnection(config);

mysqlConnection.connect((err) => {
    if(!err) {
        console.log("Connected!")
    }
    else {
        console.log("Connection failed..")
        console.log(err.message)
    }
})

module.exports = mysqlConnection;