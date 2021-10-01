var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + " - " + description);
}


// 1. it will be return undefined
const samurai = ["oda", "Tomoe"];
console.log(samurai[3]);


// add two item , front or back, checking length, and pop item
const ninja = [];
ninja.push("Yoshi");
ninja.unshift("Hattori");
ninja.pop();
console.log(ninja.length === 1);

// delete with splice
const sam = [];
sam.push("Oda");
sam.unshift("Tomoe");
sam.splice(1, 0, "Hattori", "Takeda");
console.log(sam);


// first variable check at least one matching %2 = 0, return true
// second variable check  all matching %2 = 0, return false, because 19 is != 0 when %2
const ninjas = [{
    name: "Yoshi",
    age: 18
  },
  {
    name: "Hattori",
    age: 19
  },
  {
    name: "Yagyu",
    age: 20
  }
];


const first = ninjas.some(ninja => ninja.age % 2 === 0);
const second = ninjas.every(ninja => ninja.age % 2 === 0);
console.log([first, second]);

//  the last third will not pass assertion
const samuraiClanMap = new Map();

const samurai1 = {
  name: "Toyotomi"
}
const samurai2 = {
  name: "Takeda"
}
const samurai3 = {
  name: "Akiyama"
}

const oda = {
  clan: "Oda"
}
const tokugawa = {
  clan: "Tokugawa"
}
const takeda = {
  clan: "Takeda"
}

samuraiClanMap.set(samurai1, oda);
samuraiClanMap.set(samurai2, tokugawa);
samuraiClanMap.set(samurai2, takeda);


assert(samuraiClanMap.size === 3, "There are 3 Mappings"); //this will return false
assert(samuraiClanMap.has(samurai1), "The first samurai has a mapping");
assert(samuraiClanMap.has(samurai3), "The third samurai has a mapping"); //this will return false

const crewSamurai = new Set("Toyotomi", "Takeda", "Akiyama", "Akiyama");
assert(crewSamurai.size === 4, "There are four samurai in the set"); //fail : set ignoring duplicate
crewSamurai.add("Akiyama");
assert(crewSamurai.size === 5, "There are five samurai in the set"); // fail : set ignoring duplicate

assert(crewSamurai.has("Toyotomi", "Toyotomi is in!"));
