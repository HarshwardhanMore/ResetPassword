const router = require('express').Router();


router.use('/user', require('./addUser'));
router.use('/user', require('./forgotPassword'));
router.use('/user', require('./resetPassword'));

module.exports = router

