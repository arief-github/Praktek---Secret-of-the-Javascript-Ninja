// function testing
var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

// function constructor
function Ninja() {
  var feints = 0;
  this.getFeints = function() {
    return feints;
  }
  this.feint = function() {
    feints++
  }
}

//invocation function constructor
// var ninja1 = new Ninja();
// assert(ninja1 === undefined, 'were able to access')
