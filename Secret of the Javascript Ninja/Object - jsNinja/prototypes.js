// testing
var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};


let yoshi = {
  skulk: true
};

let hattori = {
  sneak: true
};

let kuma = {
  creep: true
};

// assert("skulk" in yoshi, "Yoshi can skulk");
// assert(!("sneak" in yoshi), "Yoshi cannot sneak");
// assert(!("creep" in yoshi), "Yoshi cannot creap");

// melakukan pewarisan sifat dari hattori ke yoshi
// sehingga sifat hattori bisa diturunkan ke yoshi
// Object.setPrototypeOf(kuma, yoshi);
//
// assert("creep" in kuma, "Now yoshi can creep");
// console.log(yoshi.creep);
//
// Object.setPrototypeOf(yoshi, hattori);
// assert("sneak" in hattori, "Now yoshi can sneak");
// console.log(yoshi.sneak);
// console.log(kuma.skulk);


// function Ninja() {}
// Ninja.prototype.swingSword = function() {
//   return true;
// }

// menghasilkan informasi tidak ada instansiasi
// const ninja1 = new Ninja();
// assert(ninja1 === undefined, "No instance of Ninja created. ");

// menghasilkan informasi ada instansiasi
// const ninja2 = new Ninja();
// assert(ninja2 && ninja2.swingSword && ninja2.swingSword(),
//   "Instance exists and method is callable.");



// instance properties
// instance method
// function Ninja() {
//   this.swung = false;
//   this.swingSword = function() {
//     return !this.swung;
//   }
// }

// prototype method
// Ninja.prototype.swingSword = function() {
//   return this.swung;
// }


// test, manakah yang didahulukan ?
// const ninja = new Ninja();
// assert(ninja.swingSword(), "Called the instance Method, not the prototype method. ");
// assert(typeof ninja === "object", 'ninja adalah objek');
// assert(ninja instanceof Ninja, "ninja terbentuk dari constructor Ninja");
// assert(ninja.constructor === Ninja, "objek ninja terbentuk oleh fungsi Ninja");

// instantiating a new objext using a reference to constructor
// const ninja2 = new ninja.constructor();

//
// assert(ninja2 instanceof ninja, "It's a Ninja!");
// assert(ninja !== ninja2, "But not the same Ninja!");

// Inheritance
// function Person() {}
// Person.prototype.dance = function() {};

// function Ninjas() {}
// Ninjas.prototype = {
//   dance: Person.prototype.dance
// }
//
// Ninjas.prototype = new Person();
// const ninjas = new Ninjas();

// assert(ninjas instanceof Person, "... and the Person Prototype");



// achieving inheritance with properties

function Person() {}
Person.prototype.dance = function() {};

function Ninja() {}
Ninja.prototype = new Person();

Object.defineProperty(Ninja.prototype, "constructor", {
  enumerable: false,
  value: Ninja,
  writeable: true
})


const Ninjas = new Ninja();

assert(ninja.constructor === Ninja, "Connection from ninja instances to Ninja constructor reestablished!");

for (let prop in Ninja.prototype) {
  assert(prop === "dance", "The only enumerable property is dance!");
}
// assert(Ninjas instanceof Ninja, "ninja receives functionality from the Ninja prototype");
// assert(Ninjas instanceof Person, "... and the Person prototype");
// assert(Ninjas instanceof Object, "... and the Object prototype");
// assert(typeof Ninjas.dance === "function", "... and can dance");


// configuring properties
// var ninja = {};
// ninja.name = "Yoshi";
// ninja.weapon = "kusarigama";
//
// Object.defineProperty(ninja, "sneaky", {
//   configurable: false,
//   enumerable: false,
//   value: true,
//   writeable: true
// })
//
//
// assert("sneaky" in ninja, "we can access the new property");
//
// for (let prop in ninja) {
//   assert(prop !== undefined, "An enumerate property: " + prop);
//   console.log(prop);
// }
