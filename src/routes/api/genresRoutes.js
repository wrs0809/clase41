const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/api/genresController');

router.get('/api/genres', genresController.list);


module.exports = router;