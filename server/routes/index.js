const router = require('express').Router();

router.use('/user', require('./addUser'));

module.exports = router

