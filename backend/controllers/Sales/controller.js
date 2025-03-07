const {productModel, saleModel, receiveModel, orderModel, itemModel, cartModel} = require('../../models/Sales/model')
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
    console.log("bal amar", req.query)
    const all = await productModel.find({branch_id: req.query.showroomId})
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




// CART
const addToCart = async (req, res) => {
    try {
      const { productId } = req.body;
      const cart = await cartModel.findOne(); // Assuming there's only one cart in the database
  
      // Add the product to the cart's products array
      const productObjectId = mongoose.Types.ObjectId(productId);
      
      cart.products.push(productObjectId);
      console.log("dekhi")
      await cart.save();
  
      res.status(200).json({ message: 'Product added to cart' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to add product to cart' });
    }
  };

  const removeFromCart = async (req, res) => {
    try {
      const { productId } = req.params;
      const cart = await cartModel.findOne(); // Assuming there's only one cart in the database
  
      // Remove the product from the cart's products array
      cart.products.pull(productId);
      await cart.save();
  
      res.status(200).json({ message: 'Product removed from cart' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to remove product from cart' });
    }
  };


//add a sale record
const addSale = async (req, res) => {
    /*
    
    console.log("hello1")
    let myitems=[]
    for(let i=0; i<items.length; i++){
        myitems[i]= await itemModel.create(items[i])
    }
    */
    const {customerName, customerContact, items} = req.body
    console.log("helllllllllllo")
    console.log(customerName)
    console.log(items)
    try{
        const newSale = await saleModel.create({customerName, customerContact, items})
        res.status(200).json(newSale)
    }catch(error){
        res.status(400).json({error : error.message})
    }
    //console.log("I received")
};

// get a single sale
const singleSale = async (req,res)=>{
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }


    const single = await saleModel.findById(id);
    
    if (!single) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(single);
    
};

//delete a sale record
const deleteSale = async (req,res)=>{
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }


    const single = await saleModel.findByIdAndDelete(id);
    
    if (!single) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(single);
};

//get all sale records
const allSale = async (req,res)=>{
    console.log("hello4")
    const all = await saleModel.find();
    if(!all){
        return res.status(400).json({error: "There is no product in the table right now"});
    }
    //res.status(400).json("successful")
    //console.log("Here i am")
    res.status(200).json(all);
    //console.log("hii")
};

//add a Receive record
const addReceive = async (req, res) => {
    const {items} = req.body
    try{
        const newReceive = await receiveModel.create({items})
        res.status(200).json(newReceive)
    }catch{
        res.status(400).json({error : error.message})
    }
    //console.log("I received")
};

//delete a Receive record
const deleteReceive = async (req,res)=>{
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }


    const single = await receiveModel.findByIdAndDelete(id);
    
    if (!single) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(single);
};

//get all receive records
const allReceive = async (req,res)=>{
    const all = await receiveModel.find();
    if(!all){
        return res.status(400).json({error:"There is no product in the table right now"});
    }
    //res.status(400).json("successful")
    //console.log("Here i am")
    res.status(200).json(all);
};

// get a single receive
const singleReceive = async (req,res)=>{
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }


    const single = await receiveModel.findById(id);
    
    if (!single) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(single);
};


//add an order record
const addOrder = async (req, res) => {
    const {items} = req.body
    try{
        const newOrder = await orderModel.create({items})
        res.status(200).json(newOrder)
    }catch{
        res.status(400).json({error : error.message})
    }
    //console.log("I Orderd")
};

//delete a Order record
const deleteOrder = async (req,res)=>{
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }


    const single = await orderModel.findByIdAndDelete(id);
    
    if (!single) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(single);
};

//get all Order records
const allOrder = async (req,res)=>{
    const all = await orderModel.find();
    if(!all){
        return res.status(400).json({error:"There is no product in the table right now"});
    }
    //res.status(400).json("successful")
    //console.log("Here i am")
    res.status(200).json(all);
};

// get a single order
const singleOrder = async (req,res)=>{
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }


    const single = await orderModel.findById(id);
    
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
}