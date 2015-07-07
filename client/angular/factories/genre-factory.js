myAppModule.factory('genreFactory', function ($http) { 
	var factory = {};
	var genres = [];
	var genre = [];


	factory.getGenres = function (callback) {
		$http.get('/get_genres').success(function (output) {
			genres = output;
			callback(genres);
		})
	}

	factory.getGenre = function (id, callback) {
		$http.get('/get_genre/' + id).success(function (output) {
			genre = output;
			callback(genre);
		})

	}

	factory.addGenre = function (info, callback) {
		$http.post('/add_genre', info).success(function (res) {
			genres.push(res);
			callback(genres);
		})
	}

	factory.addPlaylist = function (info, genre_id, callback) {
		$http.post('/add_playlist/'+genre_id, info).success(function (res) {
			playlists.push(res);
			callback(playlists);
		})
	}

	factory.addLike = function(info, genre_id ,callback) {
		$http.post('/like_playlist/'+genre_id, {_id:info}).success(function (res) {
			callback(res);
		})
	}





	return factory;
});