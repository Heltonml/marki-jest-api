const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env'
});

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = app.listen(PORT, () => {
    console.info(`🚀🚀🚀 The Server is running on port 🚀🚀🚀 ${PORT} 🚀🚀🚀`);
});

app.get('/', (req, res, next) => {
    res.status(200).json({ message: 'Hello api jest test...' });
});

module.exports = app;
