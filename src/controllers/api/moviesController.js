const DB = require('../../database/models')
const Op = DB.Sequelize.Op

const moviesController = {

    list: (req, res) => {
        DB.Movie.findAll()
        .then(movies =>{
            return res.status(200).json({
                meta: {
                    total: movies.length,
                    status: 200,
                    url: "api/movies"
                },
                data: movies
            })

        })
    },
    store: (req, res) => {
        DB.Movie.create(req.body)
        .then(movie =>{
            return res.status(200).json({
                data: movie,
                status: 200
            })
        })
    },
    destroy: (req, res) => {
        DB.Movie
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            return res.json(response)
        })
    }

}

module.exports = moviesController