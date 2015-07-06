myAppModule.factory('genreFactory', function ($http) { 
	var factory = {};
	var genres = [];

	factory.getGenres = function (callback) {
		$http.get('/get_genre').success(function (output) {
			genres = output;
			callback(genres);
		})
	}

	factory.addGenre = function (info, callback) {
		$http.post('/add_genre', info).success(function (res) {
			console.log(res);
			genres.push(res);
			callback(genres);
		})
	}

	return factory;
});