const rawModel = require('../../models/Production/rawModel')


const createRaw = async (req, res) => {
    try {
        const newRaw = await rawModel.create(req.body)
        res.status(200).json(newRaw);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllRaws = async (req, res) => {
    try {
        const raws = await rawModel.find();
        res.json(raws);
        console.log("hello")
        console.log(raws)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRawById = async (req, res) => {
    try {
        const raw = await rawModel.findById(req.params.id);
        if (!raw) {
            return res.status(404).json({ message: 'Raw not found' });
        }
        res.json(raw);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateRaw = async (req, res) => {
    try {
        const { name, price, inStock } = req.body;
        const raw = await rawModel.findByIdAndUpdate(req.params.id, { name, price, inStock }, { new: true });
        if (!raw) {
            return res.status(400).json({ message: 'Raw not found' });
        }
        res.json(raw);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteRaw = async (req, res) => {
    try {
        const raw = await rawModel.findByIdAndDelete(req.params.id);
        if (!raw) {
            return res.status(404).json({ message: 'Raw not found' });
        }
        res.status(200).send(); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {createRaw, getAllRaws, getRawById, updateRaw, deleteRaw}