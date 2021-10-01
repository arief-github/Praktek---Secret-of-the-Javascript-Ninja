// import all
import * as ninjaModule from './module1.js';

var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

assert(ninjaModule.message === "Hello", "we can access imported variable");
assert(ninjaModule.sayHiToNinja() === "Hello Yoshi", "we can say hi to yoshi from outside of module");
assert(typeof ninjaModule.ninja === "undefined" , "but we cannot access yoshi directly");

// import * as ninjaModule from './module1.js';
//
//
// console.log(typeof(ninjaModule.ninja) === "undefined");
