myAppModule.factory('genreFactory', function ($http) { 
	var factory = {};
	var genres = [];
	var genre = {};
	var leaderboard_genre = [];

factory.addUser_info = function(data){

	factory.user_id = data._id;
	factory.user_name = data.name;

			
		}

	// $http.post('/add_user', {user_name: 'Mike'}).success(function(output){
	// 	console.log(output);
	// })

	factory.getGenres = function (callback) {
		$http.get('/get_genres').success(function (output) {
			genres = output;
			callback(genres);
		})
	}

	factory.addGenre = function (info, callback) {
		$http.post('/add_genre', info).success(function (res) {
			genres.push(res)
			callback(genres)
		})
	}


	factory.getGenre = function (id, callback) {
		$http.get('/get_genre/' + id).success(function (output) {
			// console.log(output);
			genre = output;
			callback(genre);
		})

	}


	factory.addPlaylist = function (info, genre_id, callback) {
		if(!info){
			alert('Please fill out all fields');
			return;
		}
		info.user_id = factory.user_id;
		info.user_name = factory.user_name;
		$http.post('/add_playlist/'+genre_id, info).success(function (res) {

			console.log(res)
			if(res.error){
				alert(res.error);
			}
			else{
				genre.playlists.push(res)
				callback(genre);
			}
		})
	}

	factory.addLike = function(playlist_id, info, callback) {
		var info = {};
		info.user_id = factory.user_id;
		info.user_name = factory.user_name;
		$http.post('/like_playlist/'+playlist_id, info).success(function (res) {
			// console.log(res);
			callback(res);
		})
	}




	factory.getLeaderboard_genre = function (id, callback) {
		$http.get('/get_leaderboard_genre/' +id).success(function (output) {
			console.log('leaderboard info', output);
			// console.log(output[0][1]);
			leaderboard_genre = output;
			callback(leaderboard_genre);
		})
	}





	return factory;
});