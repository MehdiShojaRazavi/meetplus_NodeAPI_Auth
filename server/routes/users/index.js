const express = require('express');
const router = express.Router();
const { Controller } = require('./../users/controller')

router.get('/', (req, res) => {
  res.json({
    message: 'users home page'
  })
});

router.get('/registration', (req, res) => {
  res.json({
    message: 'success'
  });
});

router.post('/registration', Controller.registration );

router.get('/account', (req, res) => {
  res.json({
    message: 'user account'
  });
}); 

module.exports = router;