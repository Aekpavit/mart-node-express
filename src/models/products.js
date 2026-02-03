const db = require('../config/db')


exports.getAll = () =>{
    return db.query('SELECT * FROM products') //แสดงทุกอย่างบนตาราง products
}

exports.getAllP = () => { // join กับ stock ตัวไหน quantity  < 0 จะไม่แสดง
    return db.query(`
      SELECT 
        p.id_products,
        p.name,
        p.price,
        p.type,
        p.img,
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

exports.add = (name, price, type, img) => {
    return db.query(
      'INSERT INTO products (name, price, type, img) VALUES (?,?,?,?)',
      [name, price, type, img]
    )
}

exports.editWithImage = (id, name, price, type, img) => { // แก้ไขแบบมีรูป
  return db.query(
    `UPDATE products
     SET name = ?, price = ?, type = ?, img = ?
     WHERE id_products = ?`,
    [name, price, type, img, id]
  )
}

exports.editNoImage = (id, name, price, type) => { // แก้ไขแบบไม่มีรูป
  return db.query(
    `UPDATE products
     SET name = ?, price = ?, type = ?
     WHERE id_products = ?`,
    [name, price, type, id]
  )
}


exports.addimg = (id,img) =>{
  return db.query(
    `
    UPDATE products 
    SET img = ? 
    WHERE id_products = ?
    `,[img,id]
  )
}