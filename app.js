var express = require('express')
  , stylus = require('stylus');

var port = process.env.PORT || 3000;

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

app.get('/:word', function (req, res) {
  res.render('word', { word: req.params.word, length: req.params.word.length.toString() });
});

// Start server
var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});
