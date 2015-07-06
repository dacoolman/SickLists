var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost/Fullmean_Friends');
var model_path = __dirname + '/../models';
fs.readdirSync(model_path).forEach(function(file){

	if (file.indexOf('.js') > 0)
	{
		require(model_path + '/' + file);
	}
});