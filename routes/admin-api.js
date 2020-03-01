const express = require('express');
const { uploadQuestion, createCoupons } = require('../controllers/adminApiController');

const router = express.Router();

router.post('/question', uploadQuestion);

router.post('/credit', createCoupons)

module.exports = router;