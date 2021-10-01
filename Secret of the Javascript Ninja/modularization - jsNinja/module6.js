var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

function sayHi(){
  return "Hello"
}

assert(typeof sayHi === "function" && typeof sayHello === "undefined",
"within the module we can access only sayHi")

export {sayHi as sayHello}
