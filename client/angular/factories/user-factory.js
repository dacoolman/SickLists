myAppModule.factory('genreFactory', function ($http) { 
	var factory = {};
	var user=[];
	var users_all = [];
	var users_genre = [];


	factory.


	factory.getGenres = function (callback) {
		$http.get('/get_genres').success(function (output) {
			genres = output;
			callback(genres);
		})
	}






	return factory;
});