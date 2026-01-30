const products = require('../models/products')



exports.getProducts = async (req,res)=>{
    try{
        const product = products.getAll
        res.json(product)
    }catch(err){
        res.status(500).json({err : err.message})
    }
}