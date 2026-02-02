const db = require('../config/db')


exports.getAll = () =>{
    return db.query('SELECT p.id_products,p.name,p.price, p.type, s.quantity FROM products p JOIN stock s ON p.id_products = s.product_id')
}


exports.getAllP = () => {
    return db.query(`
      SELECT 
        p.id_products,
        p.name,
        p.price,
        p.type,
        s.quantity
      FROM products p
      JOIN stock s ON p.id_products = s.product_id
      WHERE s.quantity > 0
    `)
}


exports.getById = (id) =>{
    return db.query('SELECT * FROM products WHERE id_products = ?',[id])
} 


exports.delete = (id)=>{
    return db.query('DELETE FROM products WHERE id_products = ?',[id])
}

exports.add = (name, price, type) =>{
    return db.query('INSERT INTO products(name,price,type)VALUES (?,?,?)',[name, price, type])
}

exports.edit = (id,name, price, type) =>{
    return db.query(`UPDATE products
                     SET name = ? ,
                         price = ? ,
                         type = ? 
                     WHERE id_products = ?
    `,[id,name, price, type])
}