var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://test:test@ds129459.mlab.com:29459/todo');

//Create a schema i.e this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

//Create a modal
var Todo = mongoose.model('Todo', todoSchema);
// var itemOne = Todo({item: 'go to bootcamp'}).save(function(err){
//   if (err) throw err;
//   console.log('item saved');
// });



// var data = [{item: 'get milk'},{item: 'go play football'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function(app){


  app.get('/todo',function(req,res){
    //get data from mongodb and pass it to the view
    Todo.find({}, function(err,data){
      if (err) throw err;
      res.render('todo',{todos: data});
    });

  });


  app.post('/todo', urlencodedParser, function(req,res){
    //get data from the view and add it to mongodb
    var newTodo = Todo(req.body).save(function(err,data){
      if (err) throw err;
      res.json(data);
    });
    // data.push(req.body);
    //res.json(data);
  });


  app.delete('/todo/:item',function(req,res){
    //delete the requested item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
      if (err) throw err;
      res.json(data);
    });
    // data = data.filter(function(todo){
    //   return todo.item.replace(/ /g, '-') !== req.params.item;
    // });
    // res.json(data);
  });

};
