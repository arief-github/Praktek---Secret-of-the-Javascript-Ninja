// testing function
var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

// find() method
const ninjas = [{
    name: "yagyu",
    weapon: "shuriken"
  },
  {
    name: "yoshi"
  },
  {
    name: "kuma",
    weapon: "wakizashi"
  }
]

const ninjaWithWakizashi = ninjas.find(ninja => {
  return ninja.weapon === "wakizashi";
})

assert(ninjaWithWakizashi.name === "kuma" && ninjaWithWakizashi.weapon === "wakizashi",
  "kuma mempunyai senjata wakizashi");

const ninjaWithShuriken = ninjas.find(ninja => {
  return ninja.weapon === "samurai"
})

// console.log(ninjaWithShuriken);

// filter
const hasNinjaWeapon = ninjas.filter(ninja => "weapon" in ninja);
// console.log(hasNinjaWeapon);


// findIndexOf and lastIndexOf
const ninjas1 = ["yagyu", "yoshi", "kuma", "yoshi"];
assert(ninjas1.indexOf("yoshi") === 1, "Yoshi pada index 1");
assert(ninjas1.lastIndexOf("yoshi") === 3, "Yoshi juga berada pada index 3");

console.log(ninjas1.lastIndexOf("yoshi"));
