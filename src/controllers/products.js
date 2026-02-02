const products = require('../models/products')



exports.getProducts = async (req,res)=>{
    try{
        const [result] =  await products.getAll()
        res.json(result)
    }catch(err){
        res.status(500).json({err : err.message})
    }
}


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

exports.addProduct = async (req,res)=>{
    try{
        const{ name, price, type } = req.body
        const [result] = await products.add(name, price, type )
        res.json({name : name,price : price, type : type})
    }catch(err){
        res.status(500).json({err : err.message})
    }
}