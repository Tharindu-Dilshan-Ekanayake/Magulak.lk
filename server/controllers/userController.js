const User = require('../models/user')

//post user database
const createuser = async (req, res) => {
    try {
        const {fname, lname, email, phone, password, role} =req.body;

        //check email is already taken

        //check phone is already taken
        const newUser = new User({
            fname,
            lname,
            email,
            phone,
            password,
            role
        })
        //save the user to database
        const newUserItem = await newUser.save();

        //send successful message
        res.status(200).json({
            message: 'User added successfully',
            data: newUserItem
        })

        //create database
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Internel server error'});
    }
}

module.exports = {
    createuser

}