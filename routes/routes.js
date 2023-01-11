var express = require("express");
var app = express();
var router = express.Router();
var UserControler = require('../controllers/UserController')


router.get('/', UserControler.teste)




module.exports = router;