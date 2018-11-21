const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const questRoutes = require('./routes/quests');
// const carRoutes = require('./routes/car');

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
})
.then(() => {
    console.log('Connnected to database!');
})
.catch(() => {
    console.log('Database connection failed!');
});

mongoose.set('useCreateIndex', true);

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});

app.use('/api/quests/', questRoutes);
// app.use('/api/car', carRoutes);

module.exports = app;
