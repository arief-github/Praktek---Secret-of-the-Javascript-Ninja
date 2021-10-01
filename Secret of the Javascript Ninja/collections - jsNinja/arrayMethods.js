// testing function
var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

// push : menambah sebuah item pada akhir array
// unshift : menambah item pada awal array
// pop : mengambil sebuah item pada akhir array
// shift : mengambil sebuah item pada awal array

// const ninjas = [];

// ninjas.push("Alkaline");
// ninjas.unshift("Yordan");
// ninjas.unshift("Hamada");

// ninjas.pop();
// ninjas.shift();
// console.log(ninjas[0] === "Hamada");

// naive way to remove an array items
// const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];
// delete ninjas[1];
// console.log(ninjas);


// removing and adding items at arbitary position
// const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];
// var removedItems = ninjas.splice(1, 2, "Reg", "Folding");
// console.log(removedItems);
// console.log(ninjas);

const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];

var removedItems = ninjas.splice(1, 1);

// assert(removedItems.length === 1, "Satu item telah dihapus");
// assert(removedItems[0] === "Kuma");
//
// assert(ninjas.length === 3, "Array ninja tersisa 3");
// assert(ninjas[0] === "Yagyu", "indeks 0 masih punya yagyu");
// assert(ninjas[1] === "Hattori", "Hattori menempati posisi yang kosong");
// assert(ninjas[2] === "Fuma", "Fuma turun menempati posisi 3");



removedItems = ninjas.splice(1, 2, "Mochizuki", "Yoshi", "Momochi");
console.log(removedItems);
// assert(removedItems.length === 2, "Sekarang kita mengambil 2 item");
// assert(removedItems[0] === "Hattori", "Hattori sudah dihapus");
// assert(removedItems[1] === "Fuma", "Fuma sudah dihapus");
// assert(ninjas.length === 4, "Kita sudah menambahkan 3 item baru");
// console.log(ninjas);




let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filtering = arr.filter(value => value < 5);
let mapping = filtering.map(value => value * 2);
let reducing = mapping.reduce((value, addValue) => value + addValue);
console.log(reducing);
