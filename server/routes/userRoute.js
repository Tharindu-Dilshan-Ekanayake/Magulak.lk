const express = require('express');
const router = express.Router();
const cors = require('cors');

const { createuser } = require('../controllers/userController')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.post('/createuser', createuser);

module.exports = router