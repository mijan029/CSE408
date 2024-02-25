const mongoose = require('mongoose')

const historyOrderSchema = mongoose.Schema(
    {
        orderDate: {
            type: Date,
            default: Date.now
        },
        approveDate: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ['Ordered', 'Approved', 'Successful', 'Cancelled', 'Rejected'],
            required: true
        },
        branch_id: { 
            type: String,
            required: true
        },
        Materials: [
            {
                id: {
                    type: String,
                    required: true,    
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
                orderAmount:{
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

const historyReqOrderModel = mongoose.model('historyOrderSchema',historyOrderSchema)

module.exports = historyReqOrderModel