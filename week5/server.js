const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require("dotenv").config({path:'../.env'});

app.use(express.json());
app.use(express.static("build"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/board', require('./route'));

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => console.log("MongoDB Connected")).catch((err)=>console.log(err));

app.set('port', process.env.PORT || port)
app.listen(app.get('port'), ()=> console.log(`listening on port ${port}`))
