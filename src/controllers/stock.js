const stock = require('../models/stock')



exports.getAllStock = async (req,res) =>{
    try{
        const [result] = await stock.getStock()
        res.json(result)
    }catch(err){
        res.status(500).json({err : err.message})
    }
}


exports.getStock = async (req,res) =>{
    const { id }= req.params
    try{
        const [result] = await stock.getStockByid(id)
        if(result.length === 0) return res.status(404).json({msg : "not found!"})
            res.json(result)
    }catch(err){
        res.status(500).json({err : err.message})
    }
}



exports.create = (product_id, quantity) => {
  return db.query(
    'INSERT INTO stock (product_id, quantity) VALUES (?, ?)',
    [product_id, quantity]
  )
}