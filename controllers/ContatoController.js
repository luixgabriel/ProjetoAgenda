const contatoModel = require('../models/contatoModel')
class Contato {
    async index(req,res){
        res.render('contato', {contato: {}})
    }

    async register(req,res){
        var {nome,sobrenome,email,tel} = req.body
        try {
           var user = await contatoModel.register(nome,sobrenome,email,tel)

            if(contatoModel.errors.length > 0){
                
                req.flash('errors', contatoModel.errors)
                //SALVANDO A SESSÃO
                req.session.save(()=>{
                    return res.redirect('back')
                })
                
               return
            }

            req.flash('success', 'Contato registrado com sucesso')
                req.session.save(()=>{
                    return res.redirect(`/contatos/index/${user._id}`)
                })

              return

        } catch (error) {
            console.log(error)
            return
        }
        
        
    }

    async editIndex(req,res){
        var {id} = req.params
        if(!id){
            return res.render('404')
        }

        var contato = await contatoModel.findByid(id)
        if(!contato){
            return res.render('404')
        }

        res.render('contato',{contato})
    }

    async edit(req,res){
        var {id} = req.params
        var{nome,sobrenome,email,tel} = req.body
        if(!id){
            return res.render('404')
        }
        try {
            var contato = await contatoModel.edit(id,nome,sobrenome,email,tel)
            if(contatoModel.errors.length > 0){
                req.flash('errors', contatoModel.errors)
                req.session.save(()=>{
                    return res.redirect('back')
                })
               return
            }

            req.flash('success', 'Contato editado com sucesso')
                req.session.save(()=>{
                    return res.redirect('back')
                })

              return

        } catch (error) {
            console.log(error)
            return
        }
        
    }

    
}

module.exports = new Contato()