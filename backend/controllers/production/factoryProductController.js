const productModel = require('../../models/Production/factoryProductModel')
const mongoose = require('mongoose')

// Add a new product 
const addNewProduct = async (req, res) => {
    try{
        const newProduct = await productModel.create(req.body)
        res.status(200).json(newProduct)
    }catch(error){
        res.status(400).json({error : "Please fill all the field with approprite values"})
    }
    console.log("I received")
};


// get all products
const allProducts = async (req,res)=>{
    //console.log("hiii")
    const all = await productModel.find()
    if(!all){
        return res.status(400).json({error: 'There is no product in the table right now'});
    }
    //res.status(400).json("successful")
    //console.log("Here i am")
    res.status(200).json(all)
};


// get a single product
const singleProduct = async (req,res)=>{
    const id = req.params.id;
    console.log("hii")
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
    
    console.log("Ashce eikhane?")
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
    updateProduct,
}
