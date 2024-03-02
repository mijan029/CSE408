const mongoose = require('mongoose');

const SellSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerContact: {
        type: String,
        required: true
    },
    branch_id: {
        type: String,
        required: true
    },
    cashier_id: {
        type: String,
        required: true
    },
    sellDate: {
        type: Date,
        default: Date.now
    },
    products: [{
        id: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        sellAmount: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
        
    },
    ],
    grandTotal: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('sellModel', SellSchema);