const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI

const app = express()
app.use(express.json())

const port = process.env.PORT || 5000;
mongoose.connect(db, {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=> {
        app.listen(port, ()=> console.log(`Mongodb connected and server started on ${port}`))
        .on('error', (error) => console.log(error));
        })
    .catch(err => console.log(err))