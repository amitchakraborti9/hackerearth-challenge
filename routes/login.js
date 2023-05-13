const path = require('path');

const express = require('express');

const loginController = require('../controllers/login');

const router = express.Router();

router.get('/', loginController.getHomepage);

router.post('/role',loginController.postRole);

module.exports=router;