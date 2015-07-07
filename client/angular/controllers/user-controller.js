myAppModule.controller('userController', function ($scope, $routeParams, userFactory){

	userFactory.getUsers_genre($routeParams.id, function (data) {
		$scope.users_genre = data;
	})

	playlistFactory.getGenre($routeParams.id, function (data) {
		$scope.genre = data;
	});




	$scope.addPlaylist = function (){
		playlistFactory.addPlaylist($scope.newPlaylist, $routeParams.id, function (data) {
			$scope.playlists = data;
			$scope.newPlaylist = {};
		})
	}
})
