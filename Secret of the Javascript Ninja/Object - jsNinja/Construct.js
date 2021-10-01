// function testing
var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};


let obj = {};

var nama = "Kroto"

obj.nama = "Arief";
obj.married = false
obj.lastname = "Kurniawan";
obj.fullname = function() {
  return this.nama + this.lastname;
}
// delete obj.nama;
console.log(!obj.married);


function Ninja() {
  this.swung = false;
  this.swingSword = function() {
    return !this.swung
  }
}

Ninja.prototype.swingSword = function() {
  return this.swung;
}


Ninja.prototype = {
  pierce: function() {
    return true;
  }
}

const ninja = new Ninja();
assert(ninja.swingSword(), "Called the instance, not the prorotype method");
// console.log(ninja.swingSword());
