myAppModule.controller('genreController', function ($scope, genreFactory){

	genreFactory.getGenres(function (data) {
		$scope.genres = data;
	});

	$scope.addUser = function (){

		genreFactory.addGenre($scope.newGenre);
		$scope.newGenre = {};
	}

	$scope.addGenre = function (){

		genreFactory.addGenre($scope.newGenre);
		$scope.newGenre = {};
	}
})