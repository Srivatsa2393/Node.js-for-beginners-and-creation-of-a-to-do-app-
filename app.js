//console.log('hey ninjas');

//GLOBAL OBJECTS

// setTimeout(function(){
//   console.log("3 seconds delay");
// }, 3000);

// var time = 0;
// var timer = setInterval(function(){
//   time += 2;
//   console.log(time, "seconds have passed");
//   if(time > 7){
//     clearInterval(timer);
//   }
// },2000);

// console.log(__dirname);
// console.log(__filename);

//FUNCTION EXPRESSIONS
//normal function statement
// function sayHi(){
//   console.log('Hi Sivi take care of your parents');
// }
// sayHi();

// function callMe(func){
//   func();
// }
//
// //function expression
// var sayBye = function(){
//   console.log('I hope youre doing well');
// }
// //sayBye();
// callMe(sayBye);

//modules and require
// var stuff = require('./stuff');
//
// console.log(stuff.counter(['Srivi','Srigi','Geetha']));
// console.log(stuff.adder(7,2));
// console.log(stuff.adder(stuff.pi,32));

//Event module
// var events = require('events');

// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);
// });
//
// myEmitter.emit('someEvent','The event has been triggered');


// var events = require('events');
// var util = require('util');
//
// var Person = function(name){
//   this.name = name;
// }
//
// util.inherits(Person,events.EventEmitter);
//
// var srivi = new Person("Srivatsa");
// var srigi = new Person("Srigandha");
// var geetha = new Person("Geetha");
// var people = [srivi, srigi, geetha];
//
// people.forEach(function(person){
//   person.on('speak', function(mssg){
//     console.log(person.name + " said :" + mssg);
//   });
// });
//
// srivi.emit('speak','Hey dude coming to play football');
// srigi.emit('speak','Coming to a hangover');
// geetha.emit('speak','I love my son');

///*READING AND WRITING FILES*/
// var fs = require('fs'); //typical naming convention for requiring modules
//syncronous reading and writng
// var readMe = fs.readFileSync('readMe.txt', 'utf8');
//console.log(readMe);
// fs.writeFileSync('writeMe.txt', readMe);

/*Asyncronous reading and writing*/
// fs.readFile('readMe.txt', 'utf8', function(err, data){
//   //console.log(data);
//   fs.writeFile('writeMe.txt', data);
// });
//console.log('I love my parents');

/*Creating or removing directories*/
// var fs = require('fs');
// fs.unlink('writeMe.txt');//deleting a file

//Creating a directory syncronously or Asyncronously.
//syncronous creation
// fs.mkdirSync('stuff');

//syncronous deletion
// fs.rmdirSync('stuff');

//Asyncronous creation
 // fs.mkdir('stuff',function(){
 //   fs.readFile('readMe.txt','utf8',function(err, data){
 //     fs.writeFile('./stuff/writeMe.txt', data);
 //   });
 // });

//Asyncronous deletion
// fs.unlink('./stuff/writeMe.txt', function(){
//   fs.rmdir('stuff');
// });


/*CREATING A SERVER*/

// var http = require('http');
//
// var server = http.createServer(function(req, res){
//   console.log('the request was made ' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   //end the response and send it to the browser
//   res.end('Hey Ninjas');
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('yeah people, now listening to port 3000');

/*READABLE STREAMS*/

// var http = require('http');
// var fs = require('fs');
//
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//
// myReadStream.on('data', function(chunk){
//   console.log('new chunks are received');
//   console.log(chunk);
// });

/*WRITABLE STREAMS*/

// var http = require('http');
// var fs = require('fs');
//
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
//
// myReadStream.on('data', function(chunk){
//   console.log('new chunks are received:');
//   myWriteStream.write(chunk);
// });

/*PIPES*/

// var http = require('http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
//
// myReadStream.pipe(myWriteStream);

// var http = require('http');
//
// var server = http.createServer(function(req, res){
//   console.log('the request was made ' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//   //var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
//   myReadStream.pipe(res);
//
//   //end the response and send it to the browser
//   //res.end('Hey Ninjas');
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('yeah people, now listening to port 3000');


/*Serving HTML pages*/
// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req,res){
//   console.log('request was made: ' + req.url);
//   res.writeHead(200,{'Content-Type': 'text/html'});
//   var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//   myReadStream.pipe(res);
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('yeah people, now listening to port 3000');

/*Serving JSON Data*/
// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req,res){
//   console.log('request was made: ' + req.url);
//   res.writeHead(200,{'Content-Type':'application/json'});
//   var myObj = {
//     name: 'Srivatsa',
//     job: 'Software Developer',
//     age: 23
//   };
//   res.end(JSON.stringify(myObj));
// });
//
// server.listen(3000,'127.0.0.1');
// console.log('yeah people, now listening to port 3000');

/*BASIC ROUTIMG*/
// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req,res){
//   console.log('request was made: ' + req.url);
//   if(req.url === '/home' || req.url === '/'){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
//   }else if(req.url === '/contact-us'){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     fs.createReadStream(__dirname + '/contact.html').pipe(res);
//   }else if(req.url === '/api/ninjas'){
//     var ninjas = [{name: 'Srivatsa', age : 23}, {name: 'Nava', age : 24}, {name: 'Badari', age : 23}];
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.end(JSON.stringify(ninjas));
//   }else{
//     res.writeHead(404,{'Content-Type':'text/html'});
//     fs.createReadStream(__dirname + '/404.html').pipe(res);
//   }
//   // res.writeHead(200,{'Content-Type':'text/plain'});
//   // res.end('feed me popcorn');
// });
//
// server.listen(3000,'127.0.0.1');
// console.log('yeah people, now listening to port 3000');

/*Package.json*/
/*Installing a package called nodemon*/


/*Introduction to Express.js*/
// var express = require('express');
//
// var app = express();
//
// app.get('/',function(req,res){
//   res.send('This is the homepage');
// });
// app.get('/contact',function(req,res){
//   res.send('This is the contact page');
// });
//
//
// app.listen(3000);

/*ROUTE PARAMETERS in Express*/

// var express = require('express');
//
// var app = express();
//
// app.get('/',function(req,res){
//   res.send('This is the homepage');
// });
// app.get('/contact',function(req,res){
//   res.send('This is the contact page');
// });
//
// app.get('/profile/:name',function(req,res){
//   res.send('You requested to see a profile with the name' + " " +req.params.name);
// });
//
// app.listen(3000);

/*Templating engines*/

// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
//
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
//
// app.set('view engine','ejs');
// //using middleware
// /*app.use('/assets',function(req,res,next){
//   console.log(req.url);
//     next();
// });*/
//
// app.use('/assets',express.static('assets'));
//
//
// app.get('/',function(req,res){
//   //res.sendFile( __dirname + '/index.html');
//   res.render('index');
// });
//
// app.get('/contact',function(req,res){
//   //res.sendFile( __dirname + '/contact.html');
//   //console.log(req.query);
//   res.render('contact', {qs: req.query});
// });
//
// app.post('/contact', urlencodedParser,function(req,res){
//   console.log(req.body);
//   res.render('contact-success', {data: req.body});
// });
//
// app.get('/profile/:name',function(req,res){
//   //res.send('You requested to see a profile with the name' + " " +req.params.name);
//   var data = {
//     age: 23,
//     job: 'developer',
//     hobbies:['football','sleeping','travelling']
//   };
//   res.render('profile', {person: req.params.name, data: data});
// });
//
// app.listen(3000);

/*PARTIAL TEMPLATES*/
/*Middelware and Static files*/
/*Query strings*/
//query string is additional data added to http request

/*Handling POST requests*/
/*for post request install body-parser*/




/*MAKING OF A TO-DO APP*/
var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//Set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');
