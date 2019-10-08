const express = require('express');
const router = express.Router();
const { getExamById } = require('../controllers/examController');

router.get('/:id', getExamById);

module.exports = router;
