const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
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
        quantity:{
            type: Number,
            required: true
        },
        isAdded:{
            type: Boolean,
            required: false
        }

    },

    {
        timestamps: true
    }
) 

module.exports = new mongoose.model('productModel', schema)