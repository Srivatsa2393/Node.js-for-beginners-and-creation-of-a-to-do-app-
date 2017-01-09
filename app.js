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
var fs = require('fs'); //typical naming convention for requiring modules
//syncronous reading and writng
// var readMe = fs.readFileSync('readMe.txt', 'utf8');
//console.log(readMe);
// fs.writeFileSync('writeMe.txt', readMe);

/*Asyncronous reading and writing*/
fs.readFile('readMe.txt', 'utf8', function(err, data){
  //console.log(data);
  fs.writeFile('writeMe.txt', data);
});
//console.log('I love my parents');
