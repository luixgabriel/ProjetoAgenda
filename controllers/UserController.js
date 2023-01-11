class User {
    async teste (req,res){
        res.render('index.ejs')
    }
}

module.exports = new User()