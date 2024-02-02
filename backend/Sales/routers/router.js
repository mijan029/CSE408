const express = require('express');
const productModel = require('../models/productModel');
const router = express.Router();
const {
    addNewProduct,
    allProducts,
    singleProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/controller');

//get all workouts
router.get('/', allProducts);

//get single workout
router.get('/:id',singleProduct);

//post a workout
router.post('/add',addNewProduct);

//delete a single workout
router.delete('/:id',deleteProduct);

//update a single workout
router.put('/:id',updateProduct);


module.exports = router;