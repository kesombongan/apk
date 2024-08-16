const express = require('express');
const router = express.Router();
const  UserController = require('../controller/UserController');

router.get('/', UserController.getIndexPage);
router.get('/webhook', UserController.webhook);

module.exports = router;
