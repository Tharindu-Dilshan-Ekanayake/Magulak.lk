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
    last_name:{
        type: String,
        required: true
    },
    job:{
        type: String,
        required: true
    },
    birthday:{
        type: String,
        required: true
    }
    
})
const Add = mongoose.model('add', addSchema);
module.export = Add;