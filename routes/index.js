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


router.get('/blog', function(req, res) {
  res.json({
    text: 'Send blog page!'
  });
});

router.get('/api/users/:number', function(req, res) {
    var a = {
        "id": 1,
        "name": "Joe",
        "age": 18
    };
    var b = {
        "id": 2,
        "name": "John",
        "age": 22
    };

    if (req.params.number == 1) {
        res.json(a);
    } else if (req.params.number == 2) {
        res.json(b);
    } else {
        res.send('NOT FOUND');
    }
});

router.get('/hell', function(req, res) {
    res.send(req.query);}
);

router.get('/DB', function(req, res) {
    var returnStr = connectDB();
    res.send('--------' + returnStr + '--------');}
);

function connectDB(){
  var mysql = require('mysql')
  var returnDate;
  var connection = mysql.createConnection({
    host     : 'expresswebappsserver.database.windows.net::1433',
    user     : 'ericlam01@expresswebappsserver.database.windows.net',
    password : 'eE852456',
    database : 'localdb'
  });

  connection.connect()

  connection.query('SELECT * FROM User', function (err, rows, fields) {
    if (err) throw err

    returnDate = rows[0].solution + '!!!';
  })

  connection.end()

  return returnDate;
}

module.exports = router;
