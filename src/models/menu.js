const db = require('../config/db')


exports.getAllmenu = () =>{
   return  db.query('SELECT * FROM menu')
}


exports.getMenu = (id) =>{
    return db.query('SELECT * FROM menu WHERE id_menu = ?',[id])
}


exports.deleteMenu = (id) =>{
    return db.query('DELETE menu FROM WHERE id_menu = ?',[id])
}


exports.addMenu = (name,price,img,id) =>{
    return db.query('INSERT INTO menu(name_menu,price_menu,img) WHERE id_menu =?',[name,price,img,id])
}

exports.updateMenu = (name,price,img,id) =>{
    return db.query('UPDATE menu SET name_menu =? ,price_menu =?,img =? WHERE id_menu =?',[name,price,img,id])
}


exports.seacrhMenu = (key) =>{
    return db.query(
        'SELECT * FROM products WHERE LOWER(name_menu) LIKE ? ORDER BY name ASC',
        [`%${key.toLowerCase()}%`]
      )
}
