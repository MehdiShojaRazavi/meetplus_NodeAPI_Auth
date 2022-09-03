const express = require('express');
const router = express.Router();
const usersRoute = require('./users/index');

router.get('/', (erq, res, next) => {
  return res.json({message: 'Home route'});
});

router.use('/users', usersRoute);

module.exports = router;

