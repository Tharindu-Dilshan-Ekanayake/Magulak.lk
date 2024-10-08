const mongoose = require('mongoose');
const {hashPassword} = require('../helpers/auth')
const userSchema = new mongoose.Schema({
 fname:{
    type: String,
    required: true
 },
 lname:{
    type: String,
    required: true
 },
 email:{
    type: String,
    required: true
 },
 phone:{
    type: String,
    required: true
 },
 password:{
    type: String,
    required: true
 },
 role:{
   type: String,
   required: true
 }
})

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await hashPassword(this.password);
    }
    next();
}, { timestamps: true });

const User =  mongoose.model('user', userSchema);
module.exports = User;