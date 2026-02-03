const express = require('express');
const router = express.Router();

const productController = require('../controllers/products')
const stockController = require('../controllers/stock')
const upload = require('../config/upload')


router.get('/products', productController.getProducts)
router.get('/producth', productController.gethaveProducts)
router.get('/products/:id', productController.getProductsID)
router.post('/products',upload.single('image'),productController.addProduct)
router.put('/products/:id',upload.single('image'),productController.editProduct)
router.delete('/products/:id', productController.deleteProdcut)

router.get('/stock', stockController.getAllStock)
router.get('/stock/:id', stockController.getStock)

module.exports = router
