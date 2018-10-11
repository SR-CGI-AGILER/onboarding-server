var mysql = require('mysql');
// let names = [];
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sys'
});

connection.connect();

module.exports = {
    connection
}