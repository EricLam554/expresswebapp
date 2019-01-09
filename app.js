var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Send root!')
});

app.get('/about', function(req, res) {
    res.send('Send about page!')
});

app.get('/about/about-me', function(req, res) {
    res.send('Send about-me page!')
});

app.get('/blog', function(req, res) {
  res.json({
    text: 'Send blog page!'
  });
});

app.get('/api/users/:number', function(req, res) {
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

app.get('/hell', function(req, res) {
    res.send(req.query);}
);

app.listen(process.env.PORT || 1337, function () {
  console.log('Example app listening on port 3000!');
});

// ctrl + c to stop
process.on('SIGINT', function() {
    process.exit();
});
















// var express = require('express')
// var app = express()
//
// var requestTime = function (req, res, next) {
//   req.requestTime = Date.now()
//   next()
// }
//
// app.use(requestTime)
//
// app.get('/user/:id', function(req, res) {
//   res.send('user ' + req.params.id);
// });
//
// app.listen(3000)




// var express = require('express');
// var app = express();
//
// // GET method route
// app.get('/', function (req, res) {
//   res.send('GET request to the homepage');
// });
//
// // POST method route
// app.post('/', function (req, res) {
//   res.send('POST request to the homepage');
// });
//
// /*
// There is a special routing method, app.all(),
// used to load middleware functions at a path for all HTTP request methods.
// For example, the following handler is executed for requests to the route “/secret”
// whether using GET, POST, PUT, DELETE, or any other HTTP request method supported in the http module.
// */
// app.all('/secret', function (req, res, next) {
//   res.send('Accessing the secret section ...');
//   console.log('Accessing the secret section ...');
//   nextFun(); // pass control to the next handler
// });
//
// function nextFun(){
//   console.log('next ...');
// };
//
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
//
//
// // ctrl + c to stop
// process.on('SIGINT', function() {
//     process.exit();
// });
