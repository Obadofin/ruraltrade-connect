const express = require('express');
const router = express.Router();
const buyersController = require('../controllers/buyersController');

router.get('/', buyersController.getAllBuyers);
router.post('/', buyersController.addBuyer);

module.exports = router;
