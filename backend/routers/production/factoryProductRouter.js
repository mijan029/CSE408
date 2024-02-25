const express = require('express');
//const { productModel, saleModel, receiveModel, orderModel } = require('../models/productModel')
const router = express.Router();
const {
    addNewProduct,
    allProducts,
    singleProduct,
    deleteProduct,
    updateProduct,

} = require ('../../controllers/production/factoryProductController');


//get all products
router.get('/', allProducts);

//get single product
router.get('/:id',singleProduct);

//post a product
router.post('/',addNewProduct);

//delete a single product
router.delete('/:id',deleteProduct);
router.delete('/',deleteProduct);

//update a single product
router.put('/:id',updateProduct);

module.exports = router;
