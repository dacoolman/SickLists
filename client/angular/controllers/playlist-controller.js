myAppModule.controller('playlistController', function ($scope, $routeParams, genreFactory){
	genreFactory.getGenres(function (data) {
		$scope.genres = data;
		// console.log($scope.genres)
	});

	$scope.addGenre = function (){
		for(var x in $scope.genres)
		{
			if($scope.newGenre.genre_name.toLowerCase()
			 === $scope.genres[x].genre_name.toLowerCase())
			{
				alert($scope.newGenre.genre_name + ' already exists!');
				$scope.newGenre = {};
				return;
			}
		}

		genreFactory.addGenre($scope.newGenre, function(data) {
			$scope.genres = data;
			$scope.newGenre = {};
		})
	}
	genreFactory.getGenre($routeParams.id, function (data) {
		console.log('genre data', data);
		$scope.genre = data;
	});

	genreFactory.getLeaderboard_genre($routeParams.id, function (data) {
		$scope.leaderboard_genre = data;
	});

	genreFactory.getLeaderboard_all(function (data) {
		$scope.leaderboard_all = data;
	});

	$scope.addLike = function (_id){
		genreFactory.addLike(_id, $routeParams.id, function() {
			genreFactory.getGenre($routeParams.id, function(data) {
				$scope.genre = data;
			})
		})
	}

	$scope.addPlaylist = function (){
		console.log('adding playlist info', $scope.genre);
		$scope.newPlaylist.genre_name = $scope.genre.genre_name;
		genreFactory.addPlaylist($scope.newPlaylist, $routeParams.id, function (data) {
			// console.log('returned scope data', data);
			$scope.genre = data;
			$scope.newPlaylist = {};
		})
	}
})
