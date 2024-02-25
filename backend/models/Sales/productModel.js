const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
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
        inStock:{
            type: Number,
            required: true
        },

    },
    {
        timestamps: true
    }
) 

const productModel = mongoose.model('productModel',productSchema)

module.exports = productModel