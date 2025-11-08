const express = require('express');
const router = express.Router();
const artisansController = require('../controllers/artisansController');

router.get('/', artisansController.getAllArtisans);
router.post('/', artisansController.addArtisan);

module.exports = router;
