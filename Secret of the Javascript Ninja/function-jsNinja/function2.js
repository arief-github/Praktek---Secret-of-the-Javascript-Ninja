var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

// function whoAmI() {
//   'use strict'
//   return this;
// }
//
// function whoAmI2() {
//   return this;
// }
//
//
//
// assert(whoAmI() === window, "Window?");
// assert(whoAmI2() === window, "Window?");



var ninja1 = {
  whoAmI: function() {
    return this;
  }
};

var ninja2 = {
  whoAmI2: ninja1.whoAmI
}

var id = ninja2.whoAmI;

assert(ninja1.whoAmI() === ninja1, "ninja1?");
assert(ninja2.whoAmI() === ninja1, " ninja1 again?");
assert(identify() === ninja1, "ninja1 again?");
assert(ninja1.whoAmI.call(ninja2) === ninja2, "ninja2 here?");
