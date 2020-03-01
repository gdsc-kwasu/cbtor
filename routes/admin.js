const express = require('express');

const router = express.Router();

/*
* Ensure who is making request here is an authenticated user,
* and has administrator access
* */
router.use((req, res, next) => {
    if (!req.user && !req.user.isAdmin)
        return res.redirect('/login');
    next();
});

router.get(['/', '/courses', '/credit', '/account', '/users'], (req, res, next) => {
    res.render('admin/index', {
        title: 'CBTor Cpanel'
    })
});

module.exports = router;
