var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + " - " + description);
}

const ninjaIslandMap = new Map();
// object as key
const ninja1 = {
  name: "Yoshi"
};

const ninja2 = {
  name: "Hattori"
};

const ninja3 = {
  name: "Kuma"
};

// map set method (key, value)
ninjaIslandMap.set(ninja1, {
  homeisland: "Honshu"
});

ninjaIslandMap.set(ninja2, {
  homeisland: "Hokkaido"
});

// map get method
assert(ninjaIslandMap.get(ninja1).homeisland === "Honshu", "the first mapping works");
assert(ninjaIslandMap.get(ninja2).homeisland === "Hokkaido", "the second mapping works");
// assert(ninjaIslandMap.get(ninja3).homeisland === undefined, "There is no mapping for the third ninja");

// cek size map
assert(ninjaIslandMap.size === 2, "weve created two mappings");

// checking if map has item
assert(ninjaIslandMap.has(ninja1) && ninjaIslandMap.has(ninja2),
  "we have mappings for the first two ninjas");

assert(!ninjaIslandMap.has(ninja3), "But not for third ninja!");

// delete map
ninjaIslandMap.delete(ninja1);
assert(!ninjaIslandMap.has(ninja1) && ninjaIslandMap.size === 1, "Theres no first ninja mapping anymore");


// clear map
ninjaIslandMap.clear();
assert(ninjaIslandMap.size === 0, "All mappings have been cleared");
