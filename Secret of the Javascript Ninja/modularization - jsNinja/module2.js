// module2 bertindak sebagai import
// import {message, sayHiToNinja} from './module1.js';
var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

//
// assert(message === "Hello", "we can access the imported variable");
// assert(sayHiToNinja() === "Hello Yoshi", "we can say hi to yoshi outside the module");
// assert(typeof ninja === "undefined", "But we cannot access yoshi directly");
//
// console.log(typeof(ninja));

// import {ninja, sayHiToNinja} from "./module1.js";
//
// console.log(sayHiToNinja("Hallo"));
// console.log(typeof(ninja));


import * as module1 from './module1.js';

console.log(module1.ninja);
