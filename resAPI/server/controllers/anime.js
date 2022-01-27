const Anim = require('../model/anime');
class Anime {
    createAnime(req, res){
        const {title , description , thumbnail_url} = req.body;
        const anime = new Anim({
            title: title,
            description: description,
            thumbnail_url: thumbnail_url,
            userId: req.user._id
        })
        anime.save()
            .then(result => {
                res.json({
                    message: 'Amjilttai burtgelee',
                    result: result
                })
            })
            .catch(err => console.log(err))
    }

    allAnimes(req, res){
        Anim.find()
            .then(animes => {
                res.json(animes)
            })
            .catch(err => console.log(err))
    }
}

module.exports = new Anime();