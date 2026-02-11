const menu = require("../models/menu");

exports.getAllmenu = async (req, res) => {
  try {
    const [result] = await menu.getAllmenu();
    res.json(result);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.getMenu = async (req, res) => {
  const {id} = req.params
  try {
    const [result] = await menu.getMenu(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.deleteMenu = async (req, res) => {
  const {id} = req.params
  try {
    const [result] = await menu.deleteMenu(id)
    res.json({suscess : true})
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.addMenu = async (req, res) => {
    const {name,price,img} = req.body
  try {
    const [result] = await menu.addMenu(name,price,img)
    res.json({ name : name , price : price, img:img })
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.updateMenu = async (req, res) => {
    const {name,price,img} = req.body
    const {id} = req.params
  try {
    const [result] = await menu.updateMenu(name,price,img,id)
    res.json({newname:name,newprice:price,newimg:img})
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.seacrhMenu = async (req, res) => {
    const key = req.query.keyword || ""
  try {
     const  [row] = await menu.seacrhMenu(key)
     res.json({youkey : key , result : row })
   } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
