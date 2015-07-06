var mongoose= require('mongoose');
var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var customerController = {}

customerController.add_user = function(req, res){
   var user = new User({username: req.body.username});
 
  user.save(function(err, room){
    if(err){
      console.log('something went wrong');
    }
    else{
      console.log('successfully added a user!');
      console.log(req.body.username)
      res.json(room);   //     request.body.name
   // request.body.age;
    }
  })
}

customerController.add_question = function(req, res){
  console.log(req.body.user);
  if (req.body.question.length < 10)
  {
    res.json({error: 'Must be at least 10 characters'})
  }
  else{
   var question = new Question({question: req.body.question, user: req.body.user, description: req.body.description, date: req.body.date  });
 
  question.save(function(err, room){
    if(err){
      console.log('something went wrong');
    }
    else{
      console.log('successfully added a user!');
      console.log(req.body.username)
      res.json(room);   //     request.body.name
   // request.body.age;
    }
  })
}
}

customerController.add_answer = function(req, res){

  console.log(req.body.question_id, req.body.answer, req.body.details, req.body.date, req.body.user);
  if (req.body.answer.length < 5)
  {
    res.json({error: 'Must be 5 characters'})
  }
  else{
   
  Question.update({_id: req.body.question_id}, {$push: {answers : {answer: req.body.answer,
   details: req.body.details, date: req.body.date, username: req.body.user, likes: []}}}, function(err, user){
    if(err){
      console.log('something went wrong');
   res.end();
    }
    else{
    console.log('successfully added a user hi!');
      res.json(user);

    }
  })
}
}

  customerController.add_like = function(req, res){
   
Question.findOne({_id: req.body.question_id}, function(err, these_users){

if(err){
      console.log('something went wrong');
    }
else{
var index;
for (var i = 0; i<these_users.answers; i++)
{
  if ( these_users.answers[i]._id == req.body.answer_id )
  {index = i;
    break;}
}

these_users.answers[index].likes.push(req.body.user_id);
 

}


}

)}

customerController.all_questions = function(req, res){
  Question.find({}, function(err, these_users){

  if(err){
      console.log('something went wrong');
    }
  else{
    console.log(these_users);

      res.json(these_users);


  }})


}

customerController.all_answers = function(req, res){
  Question.find({_id: req.params.id}, function(err, these_users){

  if(err){
      console.log('something went wrong');
    }
  else{
    console.log(these_users);

      res.json(these_users);


  }})


}






customerController.add = function(req, res){
	 var customer = new Customer({name: req.body.name, date: req.body.date});
 
  customer.save(function(err, room){
    if(err){
      console.log('something went wrong');
    }
    else{
      console.log('successfully added a user!');
      console.log(req.body.name, req.body.date)
      res.json(room);   //     request.body.name
   // request.body.age;
    }
  })
}
customerController.show = function(req, res){
	Customer.find({}, function(err, these_users){

	if(err){
      console.log('something went wrong');
    }
	else{
		console.log(these_users);

      res.json(these_users);


	}})
}
customerController.delete_customer = function(req, res){
	  Customer.remove({_id: req.body.id}, function(err, these_users){
  	if(err){
  		console.log('error')
  	}
  	else{
  		res.end();
  	}
  })
}
customerController.add_order = function(req, res){
	 var order = new Order({customer: req.body.customer, date: req.body.date, quantity: req.body.quantity, product: req.body.quantity});
 
  order.save(function(err, room){
    if(err){
      console.log('something went wrong');
    }
    else{
      console.log('successfully added a user!');
     
      res.json(room);   //     request.body.name
   // request.body.age;
    }
  })
}
customerController.show_orders = function(req, res){
	Order.find({}, function(err, these_users){

	if(err){
      console.log('something went wrong');
    }
	else{
		console.log(these_users);

      res.json(these_users);


	}})


}


module.exports = customerController;