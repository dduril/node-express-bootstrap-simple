var movies = require('./data/movies').data;

exports.list = function(req, res){
  res.render('movies.ejs', {
    title: 'Movie Database - Movie List',
	movies: movies
  });
};

exports.single = function(req, res){
  var data = movies.filter(function (movie) {
    return (movie.url === req.params.title);
  });
  
  if (data.length > 0) {
    data = data[0];
	data.title = 'Movie Database';
	
	res.render('movie.ejs', data);
  } else {
    res.status(404).render('error.ejs', {title: 'Movie Not Found'});
  }
};

exports.suggest = function(req, res) {
  res.render('suggest_result.ejs', {
    title: 'Movie Database - Thanks!',
	name: req.body.name,
	released: req.body.released,
	runtime: req.body.runtime,
	rating: req.body.rating,
	categories: req.body.categories,
	recommendations: req.body.recommendations
  });
};
  
  
