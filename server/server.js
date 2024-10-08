require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// Initialize the app before using it
const app = express();

console.log("hii mfkr", process.env.REACT_A);

mongoose
  .connect(process.env.REACT_APP_MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database not connected', err));

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cookieParser());

//router
app.use('/add', require('./routes/advertisementRoute'))
app.use('/user', require('./routes/userRoute'))


const port = 8000;
// Starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

