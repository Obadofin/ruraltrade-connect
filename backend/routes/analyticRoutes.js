const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

// overview - allow admin or any authenticated user (change if you want admin-only)
router.get('/overview', verifyToken, analyticsController.getOverview);

// sales by artisan - for admin and artisans (artisans can see their own on frontend filter)
router.get('/sales-by-artisan', verifyToken, requireRole('admin'), analyticsController.salesByArtisan);

module.exports = router;
