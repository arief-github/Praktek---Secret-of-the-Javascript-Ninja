var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};
// iterating array using foreach

// const ninjas = ["Yagyu", "Kuma", "Hattori"];

// difficult to read
// for (let i = 0; i < ninjas.length; i++) {
//   assert(ninjas[i] !== null, ninjas[i]);
// }



// const ninjas = ["Yagyu", "Kuma", "Hattori"];
//

// easier to read
// ninjas.forEach(ninja => {
//   assert(ninja !== null, ninja)
// });

// let data = [1, 2, 3, 4, 5],
//   sum = 0;
// Compute the sum of the elements of the array
// data.forEach(data => {
//   assert(data !== null, data);
//   sum += data;
// });

// mapping arrays

// const ninjas1 = [{
//     name: "Yuki",
//     weapon: "samurai"
//   },
//   {
//     name: "akanji",
//     weapon: "shuriken"
//   },
//   {
//     name: "hattori",
//     weapon: "hands"
//   }
// ];
//
// const identity = [];
// const weapons = [];
//
// ninjas1.forEach(value => {
//   identity.push(value.name);
//   weapons.push(value.item);
// });
//
// console.log(weapons.length);

// const isNinjas = [{
//     name: "Yoshi",
//     weapon: "shuriken"
//   },
//   {
//     name: "Yagyu",
//     weapon: "katana"
//   },
//   {
//     name: "Kuma",
//     weapon: "wakizashi"
//   }
// ];
//
// const weapons = isNinjas.map(ninja => ninja.weapon);
// const name = isNinjas.map(ninja => ninja.name);
// console.log(name.length);


// testing array with every and some
const ninjas2 = [{
    name: "Yagyu",
    weapon: "shuriken"
  },
  {
    name: "Yoshi"
  },
  {
    name: "Kuma",
    weapon: "wakizashi"
  }

]


// every : checking all, return true if checking all array is correct
const allNinjasAreNamed = ninjas2.every(ninja => "name" in ninja);
const allNinjasAreArmed = ninjas2.every(ninja => "weapon" in ninja);
console.log([allNinjasAreNamed, allNinjasAreArmed]);

// some : checking at least one, then itll return true
const someNinjasAreNamed = ninjas2.some(ninja => "name" in ninja);
const someNinjasAreArmed = ninjas2.some(ninja => "weapon" in ninja);
console.log([someNinjasAreArmed, someNinjasAreNamed]);
