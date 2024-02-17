const historyReqOrderModel = require('../../models/Production/historyReqOrderModel');

const createRequestOrder = async (req, res) => {
    try {
        const newOrder = await historyReqOrderModel.create(req.body);
        res.status(200).json(newOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllRequestOrders = async (req, res) => {
    try {
        const orders = await historyReqOrderModel.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRequestOrderById = async (req, res) => {
    try {
        const order = await historyReqOrderModel.findById(req.params.id);
        if (!order) {
            return res.status(400).json({ message: 'Request order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateRequestOrder = async (req, res) => {
    try {
        const updatedOrder = await historyReqOrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(400).json({ message: 'Request order not found' });
        }
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteRequestOrder = async (req, res) => {
    try {
        const deletedOrder = await historyReqOrderModel.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Request order not found' });
        }
        res.status(200).send(); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {getRequestOrderById, createRequestOrder, deleteRequestOrder,
                    getAllRequestOrders, updateRequestOrder}