const { authPlugins } = require('mysql2')
const products = require('../models/products')
const stock = require('../models/stock')

exports.addProduct = async (req, res) => {
  const { name, price, type } = req.body
  const img = null

  try {
    const [result] = await products.add(name, price, type, img)
    const product_id = result.insertId
    await stock.create(product_id, 1)

    res.json({
      id: product_id,
      name,
      price,
      type
    })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}

exports.getAllImage = async (req,res) =>{
  try{
     const [result] = await  products.getAllimg()
     res.json(result)
  }catch(err){
    res.status(500).json({err : err.message})
  }
}
exports.getProducts = async (req,res)=>{
    try{
        const [result] =  await products.getAll()
        res.json(result)
    }catch(err){
        res.status(500).json({err : err.message})
    }
}
exports.gethaveProducts = async (req,res)=>{
    try{
        const [result] =  await products.getAllP()
        res.json(result)
    }catch(err){
        res.status(500).json({err : err.message})
    }
}

// by ID
exports.getProductsID = async (req,res)=>{
    try{
        
        const id = req.params.id
        const [result] = await products.getById(id)
        if (result.length === 0) {
            return res.status(404).json({ message: "product not found" })
        }
        res.json(result)
    }catch(err){
        res.status(500).json({err : err.message})
    }
}

// ลบ
exports.deleteProdcut = async (req,res)=>{
    try{
        const id = req.params.id
        const [result] =  await products.delete(id)
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "cant't delete // data not found" })
        }
        res.json({status : "finish"})
    }catch(err){
        res.status(500).json({err : err.message })

    }
}


exports.editProduct = async (req, res) => {
    try {
      const { id } = req.params
      const { name, price, type } = req.body
  
      let img = null
      if (req.file) {
        img = '/uploads/' + req.file.filename
        await products.editWithImage(id, name, price, type, img) // model editWithImage
      } else {
        await products.editNoImage(id, name, price, type)// model editNoImage
      }
      res.json({name : name,price : price, type : type ,img : img})
    } catch (err) {
      res.status(500).json({ err: err.message })
    }
  }


exports.uploadImg = async (req, res) => {
    const { id } = req.params
  
    const img = req.file
      ? `/uploads/${req.file.filename}`
      : null
  
    try {
      await products.addimg(id, img)
      res.json({ img })
    } catch (err) {
      res.status(500).json({ err: err.message })
    }
  }


exports.getImage = async (req,res) =>{
  const {id} = req.params
  try {
    const [result] = await products.getimg(id)
    if(result.length === 0 ) return res.status(500).json({err : "not found !"})
    res.json({result : result}) 
  }catch(err){
    res.status(500).json({err : err.message})
  }
}



exports.secrthByid = async (req,res) =>{
    let {keyword} = req.query 
    const searchTerm = `${keyword}`
  try{
    const [result] = await products.search(searchTerm)
    res.json({serach : result})
  }catch(err){
    res.status(500).json({err : err.message})
  }
}