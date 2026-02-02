const express = require('express');
const router = express.Router();
const productController = require('../controllers/products')


router.get('/products',productController.getProducts)
router.get('/products/:id',productController.getProductsID)
router.delete('/products/:id',productController.deleteProdcut)
router.post('/products',productController.addProduct)


module.exports = router