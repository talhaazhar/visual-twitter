var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'index.html'), {
    title: 'Home'
  });
});

router.get('/main', function(req, res){
    res.sendFile(path.join(__dirname, '../views', 'viewer.html'), {
    title: 'About'
  });
});


module.exports = router;