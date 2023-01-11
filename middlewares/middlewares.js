exports.Message = (req,res,next)=>{
    res.locals.errors = req.flash(('errors'))
    // res.local.success = req.flash(('success'))
   
    next()
}


       


