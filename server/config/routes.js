
var customers = require("../controllers/customers.js");
module.exports = function(app){

	app.post("/add", function(req, res){
customers.add(req, res);
});

		app.post("/add_user", function(req, res){
customers.add_user(req, res);
});

		app.post("/add_question", function(req, res){
customers.add_question(req, res);
});

				app.post("/add_answer", function(req, res){
customers.add_answer(req, res);
});

				app.post("/add_like", function(req, res){
customers.add_like(req, res);
});

	app.get("/all_questions", function(req, res){
  customers.all_questions(req, res);
});

	app.get("/all_answers/:id", function(req, res){
  customers.all_answers(req, res);
});

	app.get("/all_customers", function(req, res){
  customers.show(req, res);
});

	app.post("/delete", function(req, res){

  customers.delete_customer(req, res);
 

})

	app.post("/add_order", function(req, res){
customers.add_order(req, res);
});

console.log(customers);
	app.get("/all_orders", function(req, res){
  customers.show_orders(req, res);
});	
}


	



