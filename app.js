var express = require('express')
  , stylus = require('stylus')
  , _ = require('lodash');

// Express config
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(stylus.middleware ({
  src: __dirname + '/views',
  dest: __dirname + '/public'
}));
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', function (req, res) {
  res.render('index');
});

//app.get('/toast', function(req, res) {
  //res.send('TOAST');
//});

// Start server
var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});
