const DB = require('../../database/models')
const Op = DB.Sequelize.Op

const genresController = {

    list: (req, res) => {
        DB.Genre.findAll()
        .then(genres =>{
            return res.status(200).json({
                meta: {
                    total: genres.length,
                    status: 200,
                    url: "api/genres"
                },
                data: genres
            })

        })
    }
}

module.exports = genresController