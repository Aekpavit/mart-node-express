const products = require('../models/products')



exports.getProducts = async (req,res)=>{
    try{
        const [rows] =  await products.getAll()
        res.json(rows)
    }catch(err){
        res.status(500).json({err : err.message})
    }
}


exports.getProductsID = async (req,res)=>{
    try{
        const id = req.params.id
        const [rows] = await products.getById(id)
        res.json(rows)
    }catch(err){
        res.status(500).json({err : err.message})
    }
}


exports.deleteprodcut = async (req,res)=>{
    try{
        const id = req.params.id
        const [rows] =  await products.delete(id)
        res.json(rows)
    }catch(err){
        res.status(500).json({err : err.message })

    }
}