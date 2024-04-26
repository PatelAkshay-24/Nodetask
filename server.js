// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');
const accountRoutes = require('./src/routes/accountRoutes');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
connectDB();

app.use('/user', userRoutes);
app.use('/account', accountRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
