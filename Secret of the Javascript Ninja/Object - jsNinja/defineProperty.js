var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

var ninja = {};

Object.defineProperty(ninja, "dance", {
  value: "Wooka",
  writeable: false //mengindikasikan bahwa property ini adalah read only
})

// ninja.dance = "pineapple";
// console.log(ninja.dance);


// Object Freeze
var obj = {
  foo: 'foo',
  bar: [1, 2, 3],
  baz: {
    foo: 'nested-foo'
  }
};


// Object.freeze(obj);
// obj.classical = "Volkswagen";


// more example
let o = {};
Object.defineProperty(o, "x", {
  value: 1,
  writeable: true,
  configurable: true
});

console.log(o.x);
console.log(Object.keys(o));

Object.defineProperty(o, 'x', {
  writeable: false
})




Object.defineProperty(o, "x", {
  value: 2
})

Object.defineProperty(o, "x", {
  set: function(value) {
    return value + value * 10;
  }
})


function Person() {}

function Ninja() {}
const ninja1 = new Ninja();

assert(ninja1 instanceof Ninja, "Our ninja is a Ninja!");
Ninja.prototype = {};
assert(!(ninja1 instanceof Ninja), "The ninja is now not a Ninja!?")
console.log(ninja1 instanceof Object);
// instanceof mengecek apakah satu objek terinisiasi
// let person = new Person()
// let ninjas = new Ninja()
//
// console.log(person instanceof Person);
