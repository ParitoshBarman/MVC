const express = require('express');
const router = express.Router();

// Import the controller
const homeController = require('../controllers/homeController');

// Define the home route
router.get('/', homeController.homePage);

module.exports = router;
