const contatoModel = require("../models/contatoModel")



class Home {
    async teste (req,res){
        const contatos = await contatoModel.getContatos()
        res.render('index.ejs', {contatos: contatos})
    }
}

module.exports = new Home()