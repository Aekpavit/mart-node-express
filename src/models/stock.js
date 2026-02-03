const db = require('../config/db')


exports.getStock = () =>{
    return db.query(`SELECT s.id_stock, p.id_products,p.name,s.quantity  FROM stock s JOIN products p ON s.product_id = p.id_products;` )
} 

exports.getStockByid = (product_id) =>{
    return db.query('SELECT s.id_stock, p.id_products,p.name,s.quantity FROM stock s JOIN products p ON s.product_id = p.id_products WHERE  id_stock = ?',[product_id])
}


exports.updateStock = (product_id,quantity) =>{
    return db.query('UPDATE stock SET quantity = ? WHERE id_stock = ?',[quantity,product_id])
}


exports.create = (product_id, quantity) => {
    return db.query('INSERT INTO stock (product_id, quantity) VALUES (?, ?)',[product_id, quantity])
}