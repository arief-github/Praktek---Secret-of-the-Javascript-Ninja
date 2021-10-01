// function test
let report = (value) => value;

var assert = (value, description) => {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
}


// function Ninja(level) {
//   this.skillLevel = level;
// }
//
// const ninja = new Ninja(100);
// ninja.skillLevel = 20;
// ninja.skillLevel = "hanzo";
// console.log(ninja);


// using getters and setters to guard private properties
function Ninja() {
  let skillLevel;

  // getter : control access to our private skillLevel variable
  this.getSkillLevel = () => {
    // report("Getting skill level value");
    return skillLevel
  }

  // setter : controls the values we can assign to skillLevel
  this.setSkillLevel = value => {
    skillLevel = value;
  };
}


// const ninja = new Ninja();
ninja.setSkillLevel(100);
assert(ninja.getSkillLevel() === 100, "our ninja is at level 100!");


// defining getters and setters
// pada object literal
const ninjaCollection = {
  ninjas: ["Yoshi", "Kuma", "Hattori"],
  // getter
  get firstNinja() {
    return this.ninjas[0];
  },
  // setter
  set firstNinja(value) {
    this.ninjas[0] = value;
  }
}

assert(ninjaCollection.firstNinja === "Yoshi", "Yoshi is the first ninja");
// first log
// console.log(ninjaCollection.firstNinja);

ninjaCollection.firstNinja = "Hachi";

assert(ninjaCollection.firstNinja === "Hachi" && ninjaCollection.ninjas[0] === "Hachi",
  "Now hachi is the first ninja");

// second log
// console.log(ninjaCollection.firstNinja);



// object literal
// let p = {
//   x: 1.0,
//   y: 1.0,
//   get r() {
//     return Math.hypot(this.x, this.y);
//   },
//   set r(newValue) {
//     let oldValue = Math.hypot(this.x, this.y);
//     let ratio = newValue / oldValue;
//     this.x *= ratio;
//     this.y *= ratio;
//   },
//   get theta() {
//     return Math.atan2(this.y, this.x);
//   }
// };


// getter and setter pada es6 classes
class NinjaCollection {
  constructor() {
    this.ninjas = ["yoshi", "kuma", "hattori"];
  }
  // read property
  get firstNinja() {
    return this.ninjas[0];
  }
  // set property
  set firstNinja(value) {
    this.ninjas[0] = value;
  }
}


// instance
const ninjaCollections = new NinjaCollection();
// call get
console.log(ninjaCollections.firstNinja);
// call set
ninjaCollections.firstNinja = "halpers"
console.log(ninjaCollections.firstNinja);


class MyClass {
  constructor() {
    this.names_ = [];
  }
  set name(value) {
    this.names_.push(value);
  }

  get name() {
    return this.names_[this.names_.length - 1];
  }
}


// const identic = new MyClass();
// identic.name = "Sarah";
// console.log(identic.name);
