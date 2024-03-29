var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + " - " + description);
}
const directory = new Map();


directory.set("Yoshi", "+81 26 6462");
directory.set("Kuma", "+81 52 2378 6462");
directory.set("Hiro", "+81 76 277 46");

for (let item of directory) {
  assert(item[0] !== null, "Key : " + item[0]);
  assert(item[1] !== null, "Value : " + item[1]);
}

for (let key of directory.keys()) {
  assert(key !== null, "Key : " + key);
  assert(directory.get(key) != null, "Value:" + directory.get(key));
}


for (var value of directory.values()) {
  assert(value !== null, "Value:" + value);
}



for (let val of directory.values()) {
  console.log("values : " + val);
}
