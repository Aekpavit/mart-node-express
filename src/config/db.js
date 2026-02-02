const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user : "root",
    password : "",
    database : "mart"
})

module.exports = db

