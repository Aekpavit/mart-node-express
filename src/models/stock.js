const db = require('../config/db')




exports.getStock = () =>{
    return db.query('SELECT * FROM stock')
} 



exports.getStockByid = (product_id) =>{
    return db.query('SELECT * FROM stock WHERE  product_id = ?',[product_id])
}


exports.updateStock = (product_id,quantity) =>{
    return db.query('UPDATE stock SET quantity = ? WHERE id_stock = ?',[quantity,product_id])
}