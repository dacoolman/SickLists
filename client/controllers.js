myApp.controller('controller1', function($scope, factory1){
	$scope.mike = false;
	$scope.customers = factory1.customers;
// 	factory1.getCustomers(function(data){
// 		$scope.customers = data
// 	})

// 	factory1.getQuestions(function(data){
// $scope.questions = data
// 	});




	
});
myApp.controller('controller2', function($scope, factory1, factory2, $routeParams){

	$scope.current_id = $routeParams.question_id
	factory2.getOrders(function(data){
		$scope.orders = data;
	});



	factory1.getAnswers($routeParams.question_id, function(data){$scope.answers = data;});

	console.log('url', $routeParams.question_id);

	$scope.add_order = function(){

		var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
today = mm+'/'+dd+'/'+yyyy;
// var data = {date: today,
// customer: $scope.hielo};
$scope.order.date = today;
console.log($scope.order.customer);
		// $scope.orders.push($scope.order);
		factory2.addOrders($scope.order)
		console.log($scope.order);


$scope.order = {};
	}



});

myApp.controller('name_collection', function($scope, factory1, factory2){
	$scope.init = function(data){
		$scope.user = data
		factory1.addUsername(data);
		factory2.addUsername(data);

	};
			
		

	
	$scope.my_test = 'Testing';
// 	factory1.getOrders(function(data){
// 		$scope.orders = data;
// 	});

// 	$scope.add_order = function(){

// 		var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; 
// var yyyy = today.getFullYear();
// today = mm+'/'+dd+'/'+yyyy;
// // var data = {date: today,
// // customer: $scope.hielo};
// $scope.order.date = today;
// console.log($scope.order.customer);
// 		// $scope.orders.push($scope.order);
// 		factory1.addOrders($scope.order)
// 		console.log($scope.order);


// $scope.order = {};
// 	}

});

myApp.controller('ask_c', function($scope, factory1, $location){
	$scope.error = false;
	$scope.submit = function(){
		factory1.add_question($scope.ask, function(data){
			$scope.error = data;
		}, function(url){
			
			$location.path(url);

		})
		$scope.ask = {};
	};
			
});

myApp.controller('answer_c', function($scope, factory1, $routeParams, $location){
		$scope.error = false;
	$scope.submit = function(){
		
		factory1.add_answer($scope.answer, $routeParams.question_id, function(){
			url = '/view2/' + $routeParams.question_id;
			$location.path(url);
		}, function(data){
			$scope.error = data;
		})
		$scope.answer = {};
	};
			

			$scope.fun = function(){
				url = '/view2/' + $routeParams.question_id;

				$location.path(url);
			}
});


//$routeParams