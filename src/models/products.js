const db = require('../config/db')



exports.getAll = () =>{
    return db.query('SELECT * FROM products')
}


exports.getById = (id) =>{
    return db.query('SELECT * FROM products WHERE id_products = ?',[id])
} 


exports.delete = (id)=>{
    return db.query('DELETE FROM products WHERE id_products = ?',[id])
}