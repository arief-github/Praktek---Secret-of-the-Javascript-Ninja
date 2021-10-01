var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + " - " + description);
}

// remove duplicate arrays
// let array = [1, 1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7];
// let newSets = new Set(array);
// console.log(newSets);

// and also remove duplicate items
// creating our first set
const ninjas = new Set(["Kuma", "Hattori", "Yagyu", "Hattori"]);
// console.log(ninjas);
assert(ninjas.has("Hattori"), "Hattori is in our set");
assert(ninjas.size === 3, "There are only three ninjas in our set");
ninjas.add("Yoshi");
assert(ninjas.has("Yoshi"), "added one ninja");
assert(ninjas.size === 4, "Sekarang ukuran ninja ada 4 buah");
console.log(ninjas.has("Yoshi"));


// add new item but has the same name with existing item in collection
ninjas.add("Kuma");
assert(ninjas.size === 4, "Added ninja kuma has no effect");


for (let ninja of ninjas) {
  assert(ninja !== null, ninja);
}
