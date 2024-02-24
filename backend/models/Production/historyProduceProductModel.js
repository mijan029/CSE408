const mongoose = require('mongoose')

const historyProduceProductSchema = mongoose.Schema(
    {
        produceDate: {
            type: Date,
            default: Date.now
        },
        produceList: [
            {
                id: {
                    type: String,
                    required: true
                },
                category:{
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
                produceAmount:{
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

const historyProduceProductModel = mongoose.model('historyProduceProductModel',historyProduceProductSchema)

module.exports = historyProduceProductModel