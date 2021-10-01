var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};


// class Ninja {
//   constructor(name) {
//     this.name = name;
//   }
//   swingSword() {
//     return true;
//   }
// }
//
// var ninja = new Ninja("Yoshi")

// console.log(ninja instanceof Ninja);
// console.log(ninja.name === "Yoshi");
// console.log(ninja.swingSword());

// back to ES5 concept
// es6 class, code is more elegant , but the same concept
// function Ninja(name) {
//   this.name = name;
// }
//
// Ninja.prototype.swingSword = function() {
//   return true;
// }
//
// var ninja = new Ninja('Akanji');
// console.log(ninja);


// static methods
class Ninja {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  // method pada class harus dipanggil dengan instance
  swingSword() {
    return true;
  }

  // use keyword static to make a static method
  static compare(ninja1, ninja2) {
    return ninja1.level - ninja2.level;
  }
  // static bisa dipanggil tanpa instance
  static show() {
    return "hallo";
  }
}

// var ninja1 = new Ninja("Yoshi", 4);
// var ninja2 = new Ninja("Hattori", 3);

// assert(!("compare" in ninja1) && !("compare" in ninja2), "A ninja instance doesn't know how to compare");
// assert(Ninja.compare(ninja1, ninja2) > 0, "The Ninja class can do the comparison");
// assert(!("swingSword" in Ninja), "The Ninja class cannot swing a sword");

// inheritance
class Person {
  constructor(name) {
    this.name = name;
  }
  dance() {
    return true;
  }
}

class Ninjaa extends Person {
  constructor(name, weapon) {
    super(name);
  }
  wieldWeapon() {
    return true;
  }
}

var person = new Person("Bob");

// assert(person instanceof Person, "A person a person");
// assert(person.dance(), "A person can dance");
// assert(person.name === "Bob", "we can call it by name ");
// assert(!(person instanceof Ninja), "But its not a Ninja");
// assert(!("wieldWeapon" in person), "And it cannot wield a weapon");

var ninja = new Ninjaa("Yoshi", "Wakizashi");
assert(ninja instanceof Ninjaa, "A ninja is a ninja");
assert(ninja.wieldWeapon(), "That can wieldWeapon");
// cek ninja itu turunan dari class, instansiasi dari Person
// sehingga Ninja bisa mengakses method Person
assert(ninja instanceof Person, "also person");
assert(ninja.dance(), "And enjoys dancing");
