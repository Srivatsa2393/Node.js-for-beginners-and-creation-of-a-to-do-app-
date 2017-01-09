// module.exports.counter = function(array){
//   return 'There are ' + array.length + ' elements in the array';
// };
//
// module.exports.adder = function(a,b){
//   return `The sum of the given 2 numbers are ${a+b}`;
// };
//
// module.exports.pi = 3.142;

//  = counter;
// = adder;
//  = pi;

var counter = function(array){
  return 'There are ' + array.length + ' elements in the array';
};

var adder = function(a,b){
  return `The sum of the given 2 numbers are ${a+b}`;
};

var pi = 3.142;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
