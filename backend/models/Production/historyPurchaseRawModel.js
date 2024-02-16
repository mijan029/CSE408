const mongoose = require('mongoose')

const historyPurchaseRawSchema = mongoose.Schema(
    {
        purchaseDate: {
            type: Date,
            default: Date.now
        },
        rawMaterials: [
            {
                name:{
                    type: String,
                    required: true
                },
                price:{
                    type: Number,
                    required: true
                },
                amountAdded:{
                    type: Number,
                    required: true
                },
            },
        ]

    },
    {
        timestamps: true
    }
)

const historyPurchaseRawModel = mongoose.model('historyPurchaseRawModel',historyPurchaseRawSchema)

module.exports = historyPurchaseRawModel