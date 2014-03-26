var express = require('express');

var app = express.createServer();
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));
var movies = require('./movies');

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Movie Database'});
});

app.get('/movies', movies.list);

app.get('/movies/suggest', function(req, res) {
  res.render('suggest.ejs', {title: 'Suggest a Movie'});
});

app.post('/movies/suggest', movies.suggest);

app.get('/movies/:title', movies.single);

/* important that the default handler is coded last. */
app.get('/*', function(req, res){
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);