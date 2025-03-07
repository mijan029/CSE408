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
            enum: ['Requested', 'Approved', 'Successful', 'Cancelled', 'Rejected'],
            required: true
        },
        rawMaterials: [
            {
                id: {
                    type: String,
                    required: true,    
                },
                name:{
                    type: String,
                    required: true
                },
                price:{
                    type: Number,
                    required: true
                },
                requestAmount:{
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
        },

    },
    {
        timestamps: true
    }
)

const historyReqOrderModel = mongoose.model('historyReqOrderModel',historyReqOrderSchema)

module.exports = historyReqOrderModel