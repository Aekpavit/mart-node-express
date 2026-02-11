const menu = require("../models/menu");

exports.getAllmenu = async (req, res) => {
  try {
    const [result] = await menu.getAllmenu();
    res.json(result);
  } catch (err) {
    res.status(500).json({ err: err.massage });
  }
};

exports.getMenu = async (req, res) => {
  const {id} = req.params
  try {
    const [result] = await menu.getMenu(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ err: err.massage });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ err: err.massage });
  }
};

exports.addMenu = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ err: err.massage });
  }
};

exports.updateMenu = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ err: err.massage });
  }
};

exports.seacrhMenu = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ err: err.massage });
  }
};
