const mongoose = require('mongoose');

const productModel = require('../../models/Sales/productModel')


const createProduct = async (req, res) => {
    try {
        const newProduct = await productModel.create(req.body)
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

const getAllProducts = async (req, res) => {
    try {
        const all = await productModel.find();
        res.status(200).json(all)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

const getProductById = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }
    const single = await productModel.findById(id);
    if (!single) {
        return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(single);

}

const updateProduct = async (req, res) => {
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

const deleteProduct = async (req, res) => {
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

module.exports = { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct }