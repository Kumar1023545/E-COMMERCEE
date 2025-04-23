const express = require('express')
const router = express.Router();
const { createProduct, getProduct, getProducts, deleteProduct} = require('../Controllers/Product.controllers')


router.post('/',createProduct);

router.get('/',getProducts);

router.get('/:id',getProduct);

router.delete('/:id',deleteProduct)

module.exports=router;