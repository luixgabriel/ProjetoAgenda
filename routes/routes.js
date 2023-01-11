var express = require("express");
var app = express();
var router = express.Router();
var HomeControler = require('../controllers/HomeController')
var UserController = require('../controllers/UserController')


router.get('/', HomeControler.teste)
router.get('/user', UserController.index)




module.exports = router;