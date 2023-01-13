const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')



const contatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''},
    tel: {type: String, required: false, default: '' }, 
    criadoEm: {type: String, required: false, default: Date.now()}
    
})

const contatoModel = mongoose.model('Contato', contatoSchema)



class Contato {
    constructor(errors){
        this.errors = []
   }

   async getContatos(contatos){
        var contatos = await contatoModel.find().sort({criadoEm: -1})
        return contatos
   }

   async register(nome,sobrenome,email,tel){
        await this.validate(nome,sobrenome,email,tel)
        if(this.errors.length > 0){
            return 
        }else{
            var contato = await contatoModel.create({nome:nome, sobrenome: sobrenome, email: email, tel: tel})
        if(contato){
            return contato
        }
            return
        }

        
   }


   async validate(nome, sobrenome, email,tel ){
    if(this.errors.length > 0){
        this.errors = []
    }
    
    if(email && !validator.isEmail(email)){
        this.errors.push('E-mail inválido.')
    }
    if(!nome){
        this.errors.push('Digite um nome.')
    }

    if(!email && !tel){
        this.errors.push('Pelo menos um contato precisa ser enviado.')
    }

}

    async findByid(id){
        var user = await contatoModel.findById(id)
        return user
    }

    async edit(id,nome,sobrenome,email,tel){
        await this.validate(nome,sobrenome,email,tel)
        if(this.errors.length > 0){
            return 
        }else{
            var contato = await contatoModel.findByIdAndUpdate(id, {nome:nome, sobrenome:sobrenome,email: email, tel: tel}, {new: true})
            return contato
        }
        return
    }

    
}
   

module.exports = new Contato()