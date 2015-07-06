myApp.factory('factory1', function($http){
	var factory = {};
	factory.customers = [];
	factory.questions = [];

	factory.addUsername = function(data){
		factory.username = data;
		console.log('factory log', factory.username);
	$http.post('/add_user', {username: factory.username}).success(function(output){
			console.log('add', output)
			factory.user_id = output._id;
			
		}

			);

	}

	factory.add_question = function(info, callback, callback2){

		
		var currenttime = new Date().getTime();
		console.log(factory.username);

		$http.post('/add_question', {question: info.question, user: factory.username, description: info.description, date: currenttime}).success(function(output){
			console.log('add', output)
			if (output.error)
				{
					
					callback(output.error);
				}
			else{
				factory.questions.push({question: info.question, answers: [], id: output._id});
				callback(false);
				url = '/view2/' + output._id;
				callback2(url);
			
		
		}
		}

			);

	}

		factory.add_answer = function(info, question_id, callback, callback2){
			
		
	
		var currenttime = new Date().getTime();

		console .log ('before db', info, question_id, factory.username, info.details, currenttime)

		$http.post('/add_answer', {question_id: question_id, user: factory.username, answer: info.answer, details: info.details, date: currenttime}).success(function(output){
			console.log('add', output)
			console.log('output', output)
			if (output.error)
			{
				
				callback2(output.error);
			}
			else{
				url = '/view2/' + question_id;
				callback();
			}
				
			// factory.questions[index].answers.push({answer: info.answer, details: info.details, likes: [], id: output.answers[answers.length-1]._id}

		}

			);

	}

			factory.add_like = function(info, question_id, answer_id){
				var index;
				var answer_index;
			for (var i = 0; i<factory.questions; i++)
			{
				if (factory.questions[i]._id == question_id)
				{
					index = i;
					break;

				}


			}
			for (var i = 0; i<factory.current_question; i++)
			{
					if (factory.current_question.answers[i]._id == answer_id)
				{
					answer_index = i;
					break;

			}
		var currenttime = new Date().getTime();

		$http.post('/add_like', {question: question_id, user_id: factory.user_id, answer_id: info._id, date: currenttime}).success(function(output){
			console.log('add', output)
			factory.questions[index].answers[answer_index].likes.push(factory.user_id);
		}

			);

	}
}


factory.getQuestions = function(callback){

		$http.get('/all_questions').success(function(output){
			
			
			factory.questions = output;
			console.log('all my questions', factory.questions);
			callback(output);
		})

	};

factory.getAnswers = function(question_id, callback){

	url = '/all_answers/' + question_id;

		$http.get(url).success(function(output){
			
			
			factory.current_question = output;
			console.log('answers', output);
			console.log('description', output[0].description, 'question', output[0].question)
			callback(output);
		})

	};



	factory.getCustomers = function(callback){

		$http.get('/all_customers').success(function(output){
			
			
			factory.customers = output;
			console.log('all my customers', factory.customers);
			callback(output);
		})

	};


	
	//factory.getCustomers();

	
	factory.addCustomers = function(info){


	

		$http.post('/add', {name: info.name, date: info.date}).success(function(output){
			console.log('add', output)
			factory.customers.push({name: info.name, date: info.date, _id: output._id});
		}

			);
		
		
	};

	return factory;
})