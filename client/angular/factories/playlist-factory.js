myAppModule.factory('playlistFactory', function ($http) { 
	var factory = {};
	var playlists = [];



	factory.getPlaylists = function (genre_id, callback) {
		$http.get('/get_playlist'+genre_id).success(function (output) {
			playlists = output;
			callback(playlists);
		})
	}

	factory.addPlaylist = function (info, genre_id, callback) {

		$http.post('/add_playlist/'+genre_id, info).success(function (res) {
			playlists.push(res);
			callback(playlists);
		})
	}

	return factory;
});