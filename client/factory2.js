myApp.factory('factory2', function($http){
	var factory = {};
	var orders = [];
	factory.addUsername = function(data){
		factory.username = data;
		
	}
	factory.getOrders = function(callback){


	$http.get('/all_orders').success(function(output){
			
			
			orders = output;
			console.log('all my customers', factory.customers);
			callback(output);
		})

		
		
	}
	factory.addOrders = function(info){
		
	
	$http.post('/add_order', {customer: info.customer, date: info.date, product: info.product, quantity: info.quantity})
	.success(function(output){
			console.log('add_order', output)
			orders.push({customer: info.customer, product: info.product, quantity: info.quantity, date: info.date});
		}

			);

	}

	return factory;
})
