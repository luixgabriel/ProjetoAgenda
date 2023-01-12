const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')



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
        this.validate(email,password)
        await this.userExists(email)
        if(this.errors.length > 0){
            return {status: false, msg: "ERRO"}
        }else{
           
                
                var hash = await bcrypt.hash(password, 12)
                var user = await loginModel.create({email: email,password: hash})
                if(user){
                    return {status:true, msg:'Seu usuario foi criado com sucesso'}
                }
                
                return
            
        }

    }

    async login(email, password) {
        this.validate(email,password)

        if(this.errors.length > 0){
            return {status: false, msg: "ERRO"}
        }

        var user = await loginModel.findOne({email: email})

        if(!user){
            this.errors.push('Usuário ou senha incorreta.')
            return
        }

        if(!bcrypt.compareSync(password, user.password)){
            this.errors.push('Senha inválida')
            return
        }
                  
        return
    }

    async validate(email, password){
        if(this.errors.length > 0){
            this.errors = []
        }
        
        if(!validator.isEmail(email)){
            this.errors.push('E-mail inválido')
        }

   
        if(password.length < 3 || password.length > 50){
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres')
        }
          
   
    }

    async userExists(email){
        var user = await loginModel.findOne({email: email})
        if(user){
            this.errors.push('Esse email já está cadastrado, Digite outro.')
        }
    }

}

module.exports = new login()