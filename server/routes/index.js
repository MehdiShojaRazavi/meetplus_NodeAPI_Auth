const express = require('express');
const router = express.Router();

router.get('/', (erq, res, next) => {
  return res.json({message: 'Home route'});
});

module.exports = router;

