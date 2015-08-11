myAppModule.factory('playlistFactory', function ($http) { 
	var factory = {};
	var playlists = [];

factory.addUser_info = function(data){

	factory.user_id = data._id;
	factory.user_name = data.name;

			
		}

	factory.getPlaylists = function (genre_id, callback) {
		$http.get('/get_playlist'+genre_id).success(function (output) {
			playlists = output;
			// console.log('ordered playlists', playlists)
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