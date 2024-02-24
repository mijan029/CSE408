const historyProduceProductModel = require('../../models/Production/historyProduceProductModel'); 

const createPurchaseHistory = async (req, res) => {
    console.log("eikhane ????")
    try {
        const newHistory = await historyProduceProductModel.create(req.body);
        res.status(200).json(newHistory);
        console.log(newHistory)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllPurchaseHistories = async (req, res) => {
    const { startDate, endDate } = req.query;

    let query = {};

    if (startDate && endDate) {
        query = {
        produceDate: {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
        },
        };
    }
    console.log(query);
    console.log("eikhane ???? produce")
    try {
        const histories = await historyProduceProductModel.find(query);
        res.status(200).json(histories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getPurchaseHistoryById = async (req, res) => {
    console.log("eikhane id ????")
    try {
        const history = await historyProduceProductModel.findById(req.params.id);
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
        const updatedHistory = await historyProduceProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedHistory) {
            return res.status(400).json({ message: 'Purchase history not found' });
        }
        res.status(200).json(updatedHistory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deletePurchaseHistory = async (req, res) => {
    console.log("eikhane delete ????")
    const { startDate, endDate } = req.query;


    try {
        let query = {};
        if(startDate && endDate) {
            query = {
            produceDate: {
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
        const deletedHistory = await historyProduceProductModel.deleteMany(query);
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