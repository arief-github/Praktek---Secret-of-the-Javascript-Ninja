import Ninja from './module4.js';
import {compareNinjas} from './module4.js';


var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};


const ninja1 = new Ninja("Yoshi");
const ninja2 = new Ninja("Hattori");

assert(ninja1 !== undefined && ninja2 !== undefined, "we can create a couple of Ninjas");
assert(!compareNinjas(ninja1, ninja2), "we can compare ninjas");
