var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res) {
    res.send('Send about page!')
});

router.get('/about/about-me', function(req, res) {
    res.send('Send about-me page!')
});

module.exports = router;
