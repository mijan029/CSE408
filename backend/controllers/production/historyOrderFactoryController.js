const historyReqOrderModel = require('../../models/Production/historyOrderFactoryModel');

const createRequestOrder = async (req, res) => {
    try {
        const newOrder = await historyReqOrderModel.create(req.body);
        res.status(200).json(newOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllRequestOrders = async (req, res) => {
    const { startDate, endDate } = req.query;

    let query = {};

    if (startDate && endDate) {
        query = {
        approveDate: {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
        },
        };
    }

    console.log("BAlla");

    try {
        const orders = await historyReqOrderModel.find(query);
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
    const { startDate, endDate } = req.query;


    try {
        let query = {};
        if(startDate && endDate) {
            query = {
            approveDate: {
                $gte: new Date(startDate), 
                $lte: new Date(endDate), 
            },
            };

        }else{
            query = {
                _id: req.params.id
            }
        }

        console.log(query);
        
        //const result = await HistoryRecord.deleteMany(query);
        const deletedHistory = await historyReqOrderModel.deleteMany(query);
        if (!deletedHistory) {
            return res.status(400).json({ message: 'Purchase history not found' });
        }
        res.status(200).send(); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {getRequestOrderById, createRequestOrder, deleteRequestOrder,
                    getAllRequestOrders, updateRequestOrder}