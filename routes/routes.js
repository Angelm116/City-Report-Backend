var express = require('express');
var connection = require('../db.js');

var router = express.Router();


connection("host", "user", "password").connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

router.get('/map', (req, res) => {
  res.send();

});

router.post('/upload-report', (req, res) => {
  
  res.send();
});

module.exports = router;