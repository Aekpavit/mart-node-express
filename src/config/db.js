const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user : "root",
    password : "",
    database : "mart"
})





db.connect(err=>{
    if(err){
        console.log("Database connection failed", err);
    }else{
        console.log("Database connected successfully");
    }
})