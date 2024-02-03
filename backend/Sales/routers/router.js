const express = require('express');
//const { productModel, saleModel, receiveModel, orderModel } = require('../models/productModel')
const router = express.Router();
const {
    addNewProduct,
    allProducts,
    singleProduct,
    deleteProduct,
    updateProduct,
    addSale,
    singleSale,
    deleteSale,
    allSale,
    addReceive,
    singleReceive,
    deleteReceive,
    allReceive,
    addOrder,
    singleOrder,
    deleteOrder,
    allOrder
} = require ('../controllers/controller');


//get all products
router.get('/', allProducts);

//get single product
router.get('/:id',singleProduct);

//post a product
router.post('/add',addNewProduct);

//delete a single product
router.delete('/:id',deleteProduct);

//update a single product
router.put('/:id',updateProduct);

//get all sale
router.get('/history/sale', allSale);

//get a sale
router.get('/history/sale/:id', singleSale);

//post a sale
router.post('/sale/add', addSale);

//delete a sale
router.delete('/sale/:id', deleteSale);

//get all receive
router.get('/history/receive', allReceive);

//get a receive
router.get('/history/receive/:id', singleReceive);

//post a receive
router.post('/receive/add',addReceive);

//delete a receive
router.delete('/receive/:id',deleteReceive);

//get all order
router.get('/history/order', allOrder);

//get an order
router.get('/history/order/:id', singleOrder);

//post an order
router.post('/order/add',addOrder);

//delete an order
router.delete('/order/:id',deleteOrder);

module.exports = router;