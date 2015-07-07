myApp.factory('factory1', function($http){
	var factory = {};
	factory.customers = [];
	factory.questions = [];


//testing grounds

// like playlist:

url = '/like_playlist/' + '559b1e98ae18c5aa166b8415'

	$http.post(url, {user_id: '559b2c104a74adad250632e0'}).success(function(output){
			console.log('my likes', output)
			
			
		}

			);
//559b25a4f966b78f1ef52d71
url = '/get_user/' + '559b2c104a74adad250632e0'

$http.get(url).success(function(output){
			console.log('see user', output)
			
			
		}

			);
//get genre
url = '/get_genres';
$http.get(url).success(function(output){
			console.log('see all genre', output)
			
			
		}

			);
//get genre:

// url = '/get_genre/' + '559b0568a7eb450e03c1da7a'

// $http.get(url).success(function(output){
// 			console.log('see genre', output)
			
			
// 		}

// 			);

//add genre


		// $http.get('/get_genres').success(function(output){
		// 	console.log('see genres', output)
			
			
		// }

		// 	);

// add playlist
// url = '/add_playlist/' + '559b0568a7eb450e03c1da7a';
// 		$http.post(url, {username: 'mike', genre_name: 'reggae', playlist_name: 'Summerchill', source: 'spotify', link: 'http://www.hello.com'}).success(function(output){
// 			console.log('add', output)
			
			
// 		}

// 			);


// 		//end

	factory.addUsername = function(data){
		factory.username = data;
		
	$http.post('/add_user', {user_name: factory.username}).success(function(output){
			console.log('did i run');
			console.log('add', output)
		
			
		}

			);

	}

// 	factory.add_question = function(info, callback, callback2){

		
// 		var currenttime = new Date().getTime();
// 		console.log(factory.username);

// 		$http.post('/add_question', {question: info.question, user: factory.username, description: info.description, date: currenttime}).success(function(output){
// 			console.log('add', output)
// 			if (output.error)
// 				{
					
// 					callback(output.error);
// 				}
// 			else{
// 				factory.questions.push({question: info.question, answers: [], id: output._id});
// 				callback(false);
// 				url = '/view2/' + output._id;
// 				callback2(url);
			
		
// 		}
// 		}

// 			);

// 	}

// 		factory.add_answer = function(info, question_id, callback, callback2){
			
		
	
// 		var currenttime = new Date().getTime();

// 		console .log ('before db', info, question_id, factory.username, info.details, currenttime)

// 		$http.post('/add_answer', {question_id: question_id, user: factory.username, answer: info.answer, details: info.details, date: currenttime}).success(function(output){
// 			console.log('add', output)
// 			console.log('output', output)
// 			if (output.error)
// 			{
				
// 				callback2(output.error);
// 			}
// 			else{
// 				url = '/view2/' + question_id;
// 				callback();
// 			}
				
// 			// factory.questions[index].answers.push({answer: info.answer, details: info.details, likes: [], id: output.answers[answers.length-1]._id}

// 		}

// 			);

// 	}

// 			factory.add_like = function(info, question_id, answer_id){
// 				var index;
// 				var answer_index;
// 			for (var i = 0; i<factory.questions; i++)
// 			{
// 				if (factory.questions[i]._id == question_id)
// 				{
// 					index = i;
// 					break;

// 				}


// 			}
// 			for (var i = 0; i<factory.current_question; i++)
// 			{
// 					if (factory.current_question.answers[i]._id == answer_id)
// 				{
// 					answer_index = i;
// 					break;

// 			}
// 		var currenttime = new Date().getTime();

// 		$http.post('/add_like', {question: question_id, user_id: factory.user_id, answer_id: info._id, date: currenttime}).success(function(output){
// 			console.log('add', output)
// 			factory.questions[index].answers[answer_index].likes.push(factory.user_id);
// 		}

// 			);

// 	}
// }


// factory.getQuestions = function(callback){

// 		$http.get('/all_questions').success(function(output){
			
			
// 			factory.questions = output;
// 			console.log('all my questions', factory.questions);
// 			callback(output);
// 		})

// 	};

// factory.getAnswers = function(question_id, callback){

// 	url = '/all_answers/' + question_id;

// 		$http.get(url).success(function(output){
			
			
// 			factory.current_question = output;
// 			console.log('answers', output);
// 			console.log('description', output[0].description, 'question', output[0].question)
// 			callback(output);
// 		})

// 	};



// 	factory.getCustomers = function(callback){

// 		$http.get('/all_customers').success(function(output){
			
			
// 			factory.customers = output;
// 			console.log('all my customers', factory.customers);
// 			callback(output);
// 		})

// 	};


	
// 	//factory.getCustomers();

	
// 	factory.addCustomers = function(info){


	

// 		$http.post('/add', {name: info.name, date: info.date}).success(function(output){
// 			console.log('add', output)
// 			factory.customers.push({name: info.name, date: info.date, _id: output._id});
// 		}

// 			);
		
		
// 	};

	return factory;
})