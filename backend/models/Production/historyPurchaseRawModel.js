const mongoose = require('mongoose')

const historyPurchaseRawSchema = mongoose.Schema(
    {
        purchaseDate: {
            type: Date,
            default: Date.now
        },
        purchaseList: [
            {
                id: {
                    type: String,
                    required: true
                },
                name:{
                    type: String,
                    required: true
                },
                price:{
                    type: Number,
                    required: true
                },
                purchaseAmount:{
                    type: Number,
                    required: true
                },
                total:{
                    type: Number,
                    required: true
                }
            },
        ],

        grandTotal: {
            type: Number,
            required: true
        }

    },
    {
        timestamps: true
    }
)

const historyPurchaseRawModel = mongoose.model('historyPurchaseRawModel',historyPurchaseRawSchema)

module.exports = historyPurchaseRawModel