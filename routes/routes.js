var express = require("express");
var app = express();
var router = express.Router();
var HomeControler = require('../controllers/HomeController')


router.get('/', HomeControler.teste)




module.exports = router;