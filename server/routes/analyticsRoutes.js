const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const { protect } = require('../middleware/authMiddleware');

// Protect these routes with the secret key middleware
const secretKeyMiddleware = (req, res, next) => {
  const secretKey = req.query.key;
  const VALID_SECRET = 'dRx78Kp2wQ9zL'; // Make sure this matches the front-end key
  
  if (secretKey !== VALID_SECRET) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  next();
};

// Analytics routes
router.get('/visitor-data', secretKeyMiddleware, analyticsController.getVisitorData);
router.get('/device-data', secretKeyMiddleware, analyticsController.getDeviceData);
router.get('/page-view-data', secretKeyMiddleware, analyticsController.getPageViewData);
router.get('/overall-stats', secretKeyMiddleware, analyticsController.getOverallStats);
router.get('/all-data', secretKeyMiddleware, analyticsController.getAllAnalyticsData);

module.exports = router; 