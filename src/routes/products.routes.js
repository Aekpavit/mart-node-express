const express = require('express');
const router = express.Router();
const productController = require('../controllers/products')
const stockController = require('../controllers/stock')

router.get('/products',productController.getProducts)
router.get('/producth',productController.gethaveProducts)
router.get('/products/:id',productController.getProductsID)
router.delete('/products/:id',productController.deleteProdcut)
router.post('/products',productController.addProduct)
router.put('/products/:id',productController.editProduct)

router.get('/stock',stockController.getAllStock)
router.get('/stock/:id',stockController.getStock)

module.exports = router