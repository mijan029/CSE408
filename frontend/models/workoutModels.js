const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title:{
        type: String,
        required: true

    },
    reps:{
        type: Number,
        required: true
    },
    loads:{
        type: Number,
        required: true
    }

},{
    timestamps: true
});

module.exports = new mongoose.model('workout',schema);