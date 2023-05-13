const path = require('path');

const express = require('express');

const dashboardController = require('../controllers/dashboard');

const router = express.Router();

router.get('/admin',dashboardController.getAdmin);

module.exports=router;