myAppModule.controller('userController', function ($scope, $routeParams, userFactory, playlistFactory, genreFactory){

	$scope.init = function(data){
		$scope.user = data
console.log(data);
		userFactory.addUsername(data, function(returned_data){

			$scope.current_id = returned_data._id;


		playlistFactory.addUser_info(returned_data);
		genreFactory.addUser_info(returned_data);
		});
	
	};
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
