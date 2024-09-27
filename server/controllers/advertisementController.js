const Add = require('../models/advertisement');

//post add
const createadd = async (req, res) => {
    try {
        const {user_id, first_name, mid_name, last_name, city, job, age, height} = req.body;
        //save new add
        const newAdd = new Add({
            user_id, 
            first_name, 
            mid_name, 
            last_name, 
            city, 
            job, 
            age, 
            height
        })
        //save
        const newAddItem = await newAdd.save();

        //send successfull massage
        res.status(200).json({
            message: 'Advertisement successfully add',
            data: newAddItem
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Internel server error'});
    }
}

//get ads where pro is true
const getproads = async (req, res) => {
    try {
        const proAds = await Add.find({pro:true});
        res. status(200).json({
            message: 'Successfully retrieved pro ads',
            data: proAds
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
 createadd,
 getproads
}