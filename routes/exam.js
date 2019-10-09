const express = require('express');
const router = express.Router();
const { getExamById } = require('../controllers/examController');

router.use((req, res, next) => {
    if (!req.user)
        return res.redirect('/login');
    next();
});

router.get('/:id', getExamById);

module.exports = router;
