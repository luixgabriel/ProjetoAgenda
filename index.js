var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var router = require("./routes/routes")
var ejs = require('ejs')
 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/",router);
// app.use(express.static('public'));
app.set('view engine', 'ejs')


app.listen(8688,() => {
    console.log("Servidor rodando")
});
