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
  try {
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.seacrhMenu = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
