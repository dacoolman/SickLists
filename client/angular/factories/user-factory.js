myAppModule.factory('userFactory', function ($http) { 
	var factory = {};
//
	
//

	factory.getCurrentUser = function (callback) {
		callback(factory.user_id);
	}



	factory.getUser = function (user_id, callback) {
		url =  '/get_user/' + user_id;
		$http.get(url).success(function (output) {
			console.log('user info', output);
			factory.current_user = output;
			callback(output);
		})
	}


factory.addUsername = function(data, callback){
		
		
	$http.post('/add_user', {user_name: data}).success(function(output){
		factory.user_id = output._id;
		factory.user_name = output.name;
			console.log('did i run');
			console.log('add the user', output)
			callback(output);
		
			
		}

			);

	}

			

	




	return factory;
});