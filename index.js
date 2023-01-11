var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var router = require("./routes/routes")
var ejs = require('ejs')
var mongoose = require('mongoose')
require('dotenv').config()
const {Message} = require('./middlewares/middlewares')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require("connect-flash")

const sessionOptions = session({
    secret: '122124',
    store: MongoStore.create({ mongoUrl: process.env.MONGOURL }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})



mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log('conectado ao banco')
})


app.use(sessionOptions)
app.use(flash())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(Message)
app.use("/",router);
// app.use(express.static('public'));
app.set('view engine', 'ejs')



app.listen(8688,() => {
    console.log("Servidor rodando")
});
