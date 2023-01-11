const mongoose = require('mongoose')
const validator = require('validator')


const loginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const loginModel = mongoose.model('Login', loginSchema)



class login {
    constructor(errors){
        this.errors = []
    }
    async register(email, password){
        this.validate()
        console.log(this.errors)
        if(this.errors.length > 0){
            this.errors = []
            return {msg: "ERRO"}
            
        }
    }

    async validate(email, password){
       if(password = !String){
        this.errors.push('que porra')
       }
        if(!password.length < 3 || password.length >= 50){
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres')
        }
   
    }

}

module.exports = new login()