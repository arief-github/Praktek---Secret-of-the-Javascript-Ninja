// testing function
var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

const ninjas = [{
    name: "Yoshi"
  },
  {
    name: "Yagyu"
  },
  {
    name: "Kuma"
  },
  {
    name: "Alche"
  }
]


// sorting alpabetikal
// console.log(ninjas.sort(function(ninja1, ninja2) {
//   if (ninja1.name < ninja2.name) {
//     return -1;
//   }
//   if (ninja1.name > ninja2.name) {
//     return 1;
//   }
//   return 0;
// }));

// shortest way
// console.log(ninjas.sort());


let a = [33, 4, 1111, 222];
console.log(a.sort());

a.sort(function(a, b) {
  return a - b;
});

console.log(a.sort((a, b) => b - a));


// sort with case sensitive
let animals = ["ant", "Bug", "cat", "Dog"];
console.log(animals.sort());
let caseSensitive = animals.sort(function(s, t) {
  let a = s.toLowerCase();
  let b = t.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
})

// console.log(caseSensitive);


// array reduce : menjumlahkan semua array menjadi satu output
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((aggregated, number) => aggregated + number, 1);
// console.log(sum);



let decimal = [1, 2, 3, 4, 5, 6];
let res = decimal.reduce((x, y) => x + y, 2);
console.log(res);
