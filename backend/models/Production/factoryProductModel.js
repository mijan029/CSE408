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
        inStock:{
            type: Number,
            required: true
        },
 

    },
    {
        timestamps: true
    }
)

factoryProductModel = mongoose.model('factoryProductModel', schema)
module.exports = factoryProductModel
