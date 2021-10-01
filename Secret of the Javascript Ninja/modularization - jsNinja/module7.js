import {sayHello} from './module6.js'

var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};
