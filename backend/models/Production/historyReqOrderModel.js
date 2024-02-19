const mongoose = require('mongoose')

const historyReqOrderSchema = mongoose.Schema(
    {
        requestDate: {
            type: Date,
            default: Date.now
        },
        approveDate: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ['Requested', 'Sent', 'Approved', 'Successful', 'Canceled'],
            required: true
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

const historyReqOrderModel = mongoose.model('historyReqOrderModel',historyReqOrderSchema)

module.exports = historyReqOrderModel