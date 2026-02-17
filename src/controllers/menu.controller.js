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
  const { id } = req.params;
  try {
    const [result] = await menu.getMenu(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.deleteMenu = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await menu.deleteMenu(id);
    res.json({ suscess: true });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.addMenu = async (req, res) => {
  const { name, price, img } = req.body;
  try {
    const [result] = await menu.addMenu(name, price, img);
    res.json({ name: name, price: price, img: img });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};



exports.updateMenu = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const img = req.file ? "/uploads/" + req.file.filename : undefined;

    await menu.updateMenu(name, price, img, id);

    res.json({
      name,
      price,
      img
    });

  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};



exports.seacrhMenu = async (req, res) => {
  const key = req.query.keyword || "";
  try {
    const [row] = await menu.seacrhMenu(key);
    res.json({ youkey: key, result: row });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.count = async (req, res) => {
  try {
    const [row] = await menu.count();
    res.json({ total: row[0].total });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
