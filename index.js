var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var router = require("./routes/routes")
var ejs = require('ejs')
var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://luixgabriel:ufcd2013@myfirstserver.dxw2otd.mongodb.net/test").then(()=>{
    console.log('conectado ao servidor')
})
 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/",router);
// app.use(express.static('public'));
app.set('view engine', 'ejs')


app.listen(8688,() => {
    console.log("Servidor rodando")
});
