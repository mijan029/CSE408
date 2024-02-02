const productModel = require('../models/productModel')
const mongoose = require('mongoose')

// Add a new product 
const addNewProduct = async (req, res) => {
    const {category, name, price} = req.body
    try{
        const newProduct = await productModel.create({category, name, price})
        res.status(200).json(newProduct)
    }catch{
        res.status(400).json({error : error.message})
    }
    console.log("I received")
}


// get all products
const allProducts = async (req,res)=>{
    const all = await productModel.find();
    if(!all){
        return res.status(400).json({error:"There is no product in the table right now"});
    }
    //res.status(400).json("successful")
    console.log("Here i am")
    res.status(200).json(all);
};


// get a single product
const singleProduct = async (req,res)=>{
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }


    const single = await productModel.findById(id);
    
    if (!single) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(single);
};

// delete a product
const deleteProduct = async (req,res)=>{
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }


    const single = await productModel.findByIdAndDelete(id);
    
    if (!single) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(single);
};

// Update a product
const updateProduct = async (req,res)=>{
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }

    const single = await productModel.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!single) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(single);
};


module.exports = {
    addNewProduct,
    allProducts,
    singleProduct,
    deleteProduct,
    updateProduct
}