var express = require("express");
var app = express();
var router = express.Router();
var HomeControler = require('../controllers/HomeController')
var UserController = require('../controllers/UserController')
var ContatoController = require('../controllers/ContatoController')
const {loginRequire} = require('../middlewares/middlewares')



router.get('/', HomeControler.teste)
router.get('/user', UserController.index)
router.get('/Register', UserController.register)
router.get('/logout', UserController.logout)
router.post('/RegisterRec', UserController.registerRec)
router.post('/login', UserController.login)


router.get('/contatos', loginRequire, ContatoController.index)
router.get('/contatos/index/:id', loginRequire, ContatoController.edit)
router.post('/contatoCreate', loginRequire, ContatoController.register)





module.exports = router;