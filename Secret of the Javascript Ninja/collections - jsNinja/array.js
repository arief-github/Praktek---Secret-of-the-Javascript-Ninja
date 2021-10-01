// testing function
var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

// dua cara dalam mendefinisikan array

// 1. menggunakan array literal
const ninjas = ["Kuma", "Hattori", "Yagyu"];
// 2. menggunakan constructor array
const samurai = new Array("Oda", "Tomoe");

// assert check panjang dari masing2 array
assert(ninjas.length === 3, "Terdapat 3 Ninjas");
assert(samurai.length === 2, "Terdapat 2 Ninjas");
// console.log([ninjas.length, samurai.length]);

// assert check apakah item ninja pertama sudah tepat
assert(ninjas[0] === "Kuma", "Kuma adalah ninja pertama");
// console.log(ninjas[0]);

// assert check apakah item 4 telah ditambahkan atau belum
assert(ninjas[4] === undefined, "Kita mencoba mengakses item array yang belum dibuat");
// console.log(ninjas[4]);

// assert check apakah item 4 pada array telah berhasil ditambahkan
ninjas[4] = "Ishi";
assert(ninjas[4] === "Ishi", "Item array ke 4 telah ditambahkan");
// console.log(ninjas[4]);

// assert apakah item berhasil dikurangi
// ninjas.length = 2;
// assert(ninjas[2] === undefined, "Tidak! kita kehilangan yagyu");
// console.log(ninjas);

console.log(ninjas.length)
