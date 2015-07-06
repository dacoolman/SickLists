var mongoose= require('mongoose');
var User = mongoose.model('User');
var homeController = {}

homeController.register = function(req, res){}

homeController.login = function(req, res){

var user = new User({name: req.body.user_name})

	user.save(function(err,data){
	if(err){
		console.log('somethign went wrong')
		res.end();
	}
	else{
		console.log(data);
		res.json(data);
	}
})

}

module.exports = homeController;