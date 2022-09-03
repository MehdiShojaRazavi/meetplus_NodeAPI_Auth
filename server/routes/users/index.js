const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/registeration', (req, res) => {
    res.json({
      message: 'success'
    });
  })

  router.post('/registeration', async(req, res, next) => {

  });

  return router;
};