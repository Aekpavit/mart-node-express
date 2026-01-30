const db = require('../config/db')



exports.getAll = () =>{
    return db.query('SELECT * FROM products')
}