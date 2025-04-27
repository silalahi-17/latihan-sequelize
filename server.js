require("dotenv").config();
const express = require('express');
const router = require('./routes/index')
const app = express();
// const log = require('./middlewares/logger');
const port = process.env.port || 4000;

// app.use(log);//untuk logger
app.use(express.json())//untuk req use json
app.use(express.urlencoded({extends: true}))//pengganti body parser
app.use("/", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});