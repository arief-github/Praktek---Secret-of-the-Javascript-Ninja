let m = new Map();
// memasang objek , (key, value)
m.set("one", 1);
m.set("two", 2);
m.set("three", 3);

// menghapus objek
// m.delete("three");
// mengambil key
// let iterate = m.get("two");
// let clear = m.clear();

// console.log(m.clear);

// chaining
let n = new Map().set("one", 1).set("two", 2).set("three", 3);
let iterate = n.get("two");

// console.log(iterate);

let obj1 = {
  name: "luck"
}

let obj2 = {
  name: "ocra"
}

let obj3 = {
  name: "callahan"
}

let hasMap = new Map();
hasMap.set(obj1, {
  vehicle: "Car"
});
console.log(hasMap.has(obj2));
