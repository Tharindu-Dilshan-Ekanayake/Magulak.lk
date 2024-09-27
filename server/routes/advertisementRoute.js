const express = require('express');
const router = express.Router();
const cors = require('cors');

const { createadd, getproads } = require('../controllers/advertisementController')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.post('/createadd',createadd)
router.get('/getproadd', getproads)

module.exports = router
