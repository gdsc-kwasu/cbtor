const express = require('express');
const router = express.Router();
const { loadCreditToWallet } = require('../controllers/walletController');

/*
* Ensure an authenticated user is making request to
*  the endpoints listed here.
* */
router.use((req, res, next) => {
    if (!req.user)
        return res.redirect('/login');
    next();
});

//router.get('/wallet', );
router.post('/wallet', loadCreditToWallet);

module.exports = router;
