myAppModule.controller('playlistController', function ($scope, $routeParams, genreFactory){

	playlistFactory.getGenre($routeParams.id, function (data) {
		$scope.genre = data;
	});

	$scope.addLike = function (_id){
		playlistFactory.addLike(_id, $routeParams.id function() {
			playlistFactory.getGenre($routeParams.id, function(data) {
				$scope.playlists = data;
			})
		})
	}


	$scope.addPlaylist = function (){
		playlistFactory.addPlaylist($scope.newPlaylist, $routeParams.id, function (data) {
			$scope.playlists = data;
			$scope.newPlaylist = {};
		})
	}
})
