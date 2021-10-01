// 2
function Ninja() {}
Ninja.prototype.talk = function() {
  return "Hello";
};

// 3
Ninja.message = "Hey";

const ninja = new Ninja();
const a1 = ninja.talk();
const a2 = ninja.message;
// console.log(a1, a2);


// 4
// first fragment
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//
//   this.getFullName = function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
//
// let call = new Person("Lizard", "Guan")

// second fragment
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//
//   Person.prototype.getFullName = function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// let call = new Person("Marijn", "Haverbeke");
// console.log(call.getFullName());


// 7
// instance of bekerja dengan mengecek suatu objek, apakah terinstansiasi pada fungsi constructor yang benar atau tidak

// 8 Es-5 version
