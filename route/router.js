const express = require('express');
// const whois = require('whois');
const router = express.Router();
const UserController = require('../Controller/UserController');
// const adminController = require('../controller/adminController');

router.get('/', UserController.getIndex);
router.get('/kamar', UserController.getKamar);

// router.get('/admin', adminController.getLoginPage);
// router.post('/admin/login', adminController.postLogin);
// router.get('/dashboard', adminController.getDashboardPage);
// router.get('/lp', adminController.lpku);
// router.get('/lp1', adminController.lp1);
// router.get('/lp2', adminController.lp2);
// router.get('/lp3', adminController.lp3);
// router.get('/lp4', adminController.lp4);
// router.get('/lp5', adminController.lp5);
// router.get('/lp6', adminController.lp6);
// router.get('/lp7', adminController.lp7);
// router.get('/lp8', adminController.lp8);
// router.get('/lp9', adminController.lp9);
// router.get('/panel', adminController.panel);
// router.get('/admin/logout', adminController.logout);

module.exports = router;