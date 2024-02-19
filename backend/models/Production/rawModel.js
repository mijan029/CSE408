const mongoose = require('mongoose')

const rawSchema = new mongoose.Schema(
    {
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

const rawModel = mongoose.model('rawModel',rawSchema)

module.exports = rawModel