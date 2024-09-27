const mongoose = require('mongoose');
const addSchema = new mongoose.Schema({

    user_id:{
        type: String,
        required: true
    },
    first_name:{
        type: String,
        required: true
    },
    mid_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    job:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    height:{
        type: String,
        required: true
    },
    paid:{
        default: false,
        type: Boolean
    },
    pro:{
        default: false,
        type: Boolean
    }
    
    
},{timestamps: true})
const Add = mongoose.model('add', addSchema);
module.exports = Add;