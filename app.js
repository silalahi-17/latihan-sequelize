const express = require('express');
const router = require('./routes')
const app = express();
const log = require('./middlewares/logger');

app.use(log);//untuk logger
app.use(express.json())//untuk req use json
app.use(express.urlencoded({extends: true}))//pengganti body parser
app.use(router);
app.use((req, res, next) => {
    res.status(404)
    res.send({
        status: 'failed',
        messege: 'Resource' + req.originalUrl + ' not found'
    })
})
app.listen(5000, () => console.log('Server: http://localhost:5000'))