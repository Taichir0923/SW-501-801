exports.main = function(req, res){
    res.render('index' , {
        pageTitle: 'en bol nuur huudas'
    })
}

exports.about = function(req, res){
    res.send('about us')
}