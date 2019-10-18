const express = require('express');
const { uploadQuestion } = require('../controllers/adminApiController');

const router = express.Router();

router.post('/question', uploadQuestion);

module.exports = router;