myAppModule.factory('userFactory', function ($http) { 
	var factory = {};
	factory.user_id = '559c6ef9d1ffa00f6fc124ff'
	factory.user_name = 'mike';


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






	return factory;
});