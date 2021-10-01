var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

// iterate arrays
let arr = ["arief", "ilma", "kurniawan"];

// but its not simple to read
// for (let i = 0; i < arr.length; i++) {
//   assert(arr !== null, "array is not empty");
// }

// using forEach for easier read
// arr.forEach(item => {
//   assert(item !== null, "item contains array")
// });


// let data = [1, 2, 3, 4, 5],
//   sum = 0;
//
// data.forEach(item => {
//   sum += data;
// })

// mapping using foreach

let person = [{
    name: "Yuki",
    weapon: "samurai"
  },
  {
    name: "akanji",
    weapon: "shuriken"
  },
  {
    name: "hattori",
    weapon: "hands"
  }
]
//
// let hasWeapon = [];
// person.forEach(item => {
//   hasWeapon.push(item.weapon);
// })
//
// console.log(hasWeapon.length);


// mapping using built in map
const hasName = person.map(value => value.name)

// console.log(hasName.length);

// let a = [1, 2, 3];
// console.log(a.map(x => x * x).filter(x => x <= 4));
// console.log(a);


// every and some
const civil = [{
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
// walau masih ada sebagian data yang tidak memiliki weapon , maka some masih mengembalikkan true
const atLeastOne = civil.some(value => "weapon" in value);
// akan return false, karena tidak semua memilki weapon
const mustAllHave = civil.every(value => "weapon" in value);
// console.log(mustAllHave);

let collections = [{
  name: 'John',
  id: 123,
  marks: 98
}, {
  name: 'Wick',
  id: 115,
  marks: 75
}, {
  name: 'Comman',
  id: 107,
  marks: 30
}, {
  name: 'Keneddy',
  id: 116,
  marks: 25
}];

let filtering = collections.filter(value => value.marks < 90);
let mapping = filtering.map(value => val)
console.log(filtering);
