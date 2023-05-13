const path = require('path');

const express = require('express');

const dashboardController = require('../controllers/dashboard');

const router = express.Router();

router.get('/admin',dashboardController.getAdmin);

router.get('/fabrication',dashboardController.getFabrication);

router.post('/fabrication',dashboardController.postFabrication);

router.get('/assembly',dashboardController.getAssembly);

router.get('/sub-assembly',dashboardController.getSubAssembly);


module.exports=router;