myAppModule.controller('playlistController', function ($scope, $routeParams, genreFactory){


	genreFactory.getGenres(function (data) {
		$scope.genres = data;
		// console.log($scope.genres)
	});

	$scope.addGenre = function (){

		genreFactory.addGenre($scope.newGenre, function(data) {
			$scope.genres = data;
			$scope.newGenre = {};
		})
	}

	genreFactory.getGenre($routeParams.id, function (data) {
		$scope.genre = data;
	});

	genreFactory.getLeaderboard_genre($routeParams.id, function (data) {
		$scope.leaderboard_genre = data;
	});


	$scope.addLike = function (_id){
		genreFactory.addLike(_id, $routeParams.id, function() {
			genreFactory.getGenre($routeParams.id, function(data) {
				$scope.genre = data;
			})
		})
	}

	$scope.addPlaylist = function (){
		genreFactory.addPlaylist($scope.newPlaylist, $routeParams.id, function (data) {
			$scope.genre = data;
			$scope.newPlaylist = {};
		})
	}
})
