exports.Message = (req,res,next)=>{
    res.locals.errors = req.flash(('errors'))
    res.locals.success = req.flash(('success'))
    res.locals.user = req.session.user
   
    next()
}

//SEMPRE QUE EU FOR REDIRECIONAR A PAGINA É BOM QUE EU SALVE A SESSÃO ANTES
exports.loginRequire = (req,res,next)=>{
    if(!req.session.user){
        req.flash('errors', 'Você precisa estar logado para ter acesso a essa página')
        req.session.save(()=>{
            res.redirect('/user')
            return
        })
        return
    }
  
    
    next()
}



       


