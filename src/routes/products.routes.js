const express = require('express');
const router = express.Router();

const productController = require('../controllers/products')
const stockController = require('../controllers/stock')
const upload = require('../config/upload');
const { route } = require('./main.routes');

router.get('/productsk',productController.secrthByid)
router.get('/products', productController.getProducts)
router.get('/producth', productController.gethaveProducts)
router.get('/products/:id', productController.getProductsID)
router.delete('/products/:id', productController.deleteProdcut)

router.post('/products',upload.single('img'),productController.addProduct)
router.put('/products/:id',upload.single('img'),productController.editProduct)

router.put('/productimg/:id',upload.single('img'),productController.uploadImg)
router.get('/productimg/:id',productController.getImage)
router.get('/productimg',productController.getAllImage)


router.get('/stock', stockController.getAllStock)
router.get('/stock/:id', stockController.getStock)
router.put('/stock/:id',stockController.updateQuantity)

module.exports = router
