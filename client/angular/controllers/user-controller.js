myAppModule.controller('userController', function ($scope, $routeParams, userFactory){

	userFactory.getCurrentUser(function (data) {
		$scope.current_id = data;
	})

	userFactory.getUser($routeParams.id, function (data) {
		$scope.user = data;
	})

	// playlistFactory.getGenre($routeParams.id, function (data) {
	// 	$scope.genre = data;
	// });




	$scope.addPlaylist = function (){
		playlistFactory.addPlaylist($scope.newPlaylist, $routeParams.id, function (data) {
			$scope.playlists = data;
			$scope.newPlaylist = {};
		})
	}
})
