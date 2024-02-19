const historyPurchaseRawModel = require('../../models/Production/historyPurchaseRawModel'); 

const createPurchaseHistory = async (req, res) => {
    try {
        const newHistory = await historyPurchaseRawModel.create(req.body);
        res.status(200).json(newHistory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllPurchaseHistories = async (req, res) => {
    try {
        const histories = await historyPurchaseRawModel.find();
        res.json(histories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getPurchaseHistoryById = async (req, res) => {
    try {
        const history = await historyPurchaseRawModel.findById(req.params.id);
        if (!history) {
            return res.status(400).json({ message: 'Purchase history not found' });
        }
        res.status(200).json(history);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updatePurchaseHistory = async (req, res) => {
    try {
        const updatedHistory = await historyPurchaseRawModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedHistory) {
            return res.status(400).json({ message: 'Purchase history not found' });
        }
        res.status(200).json(updatedHistory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deletePurchaseHistory = async (req, res) => {
    try {
        const deletedHistory = await historyPurchaseRawModel.findByIdAndDelete(req.params.id);
        if (!deletedHistory) {
            return res.status(400).json({ message: 'Purchase history not found' });
        }
        res.status(200).send(); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {createPurchaseHistory, getPurchaseHistoryById, deletePurchaseHistory, getAllPurchaseHistories,
                    updatePurchaseHistory}