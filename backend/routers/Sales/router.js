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
    allOrder,
    addToCart,
    removeFromCart
} = require ('../../controllers/Sales/controller');


//get all products
router.get('/', allProducts);

//get single product
router.get('/:id',singleProduct);

//post a product
router.post('/',addNewProduct);

//delete a single product
router.delete('/:id',deleteProduct);

//update a single product
router.put('/:id',updateProduct);




// add to cart
router.post('/cart/add', addToCart)
//delete from cart
router.delete('/cart/:id', removeFromCart)




//get all sale
router.get('/history/sale', allSale);

//get a sale
router.get('/history/sale/:id', singleSale);

//get all receive
router.get('/history/receive', allReceive);

//get a receive
router.get('/history/receive/:id', singleReceive);

//get all order
router.get('/history/order', allOrder);

//get an order
router.get('/history/order/:id', singleOrder);






//post a sale
router.post('/sale/add', addSale);

//get all sales
router.get('/sale/add',allSale)

//delete a sale
router.delete('/sale/:id', deleteSale);



//post a receive
router.post('/receive/add',addReceive);

//delete a receive
router.delete('/receive/:id',deleteReceive);



//post an order
router.post('/order/add',addOrder);

//delete an order
router.delete('/order/:id',deleteOrder);




module.exports = router;