myAppModule.controller('genreController', function ($scope, genreFactory){

	genreFactory.getGenres(function (data) {
		$scope.genres = data;
		// console.log($scope.genres)
	});

	// $scope.addUser = function (){

	// 	genreFactory.addGenre($scope.newGenre);
	// 	$scope.newGenre = {};
	// }

	$scope.addGenre = function (){

		for(var x in $scope.genres)
		{
			if($scope.newGenre.genre_name.toLowerCase() === $scope.genres[x].genre_name.toLowerCase())
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
})