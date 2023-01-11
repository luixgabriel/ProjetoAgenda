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
        this.validate(email,password)

        console.log(this.errors)
        
        if(this.errors.length > 0){
            this.errors = []
            return {status: false, msg: "ERRO"}
        }else{
            try {
                var user = await loginModel.create({email: email,password: password})
                if(user){
                    return {status:true, msg:'Seu usuario foi criado com sucesso'}
                }
            } catch (error) {
                console.log(error)
                return
            }
        }

       
            
        
    }

    async validate(email, password){

        if(!validator.isEmail(email)){
            this.errors.push('E-mail inválido')
        }

   
        if(password.length < 3 || password.length > 50){
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres')
        }
          
   
    }

}

module.exports = new login()