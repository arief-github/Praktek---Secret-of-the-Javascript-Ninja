var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + " - " + description);
}
// intersection/persimpangan
// sebuah item yang dimana item a juga dimiliki oleh item b

const ninjas = new Set(["Kuma", "Hattori", "Yagyu"]);
const samurai = new Set(["Hattori", "Oda", "Tomoe"]);

const ninjasSamurai = new Set(
  // call ninjas and do the filter to samurai

  [...ninjas].filter(ninja => samurai.has(ninja))
)


// assert(ninjasSamurai.size === 1, "There's only one ninja samurai");
// assert(ninjasSamurai.has("Hattori", "Hattori in his name"));

// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([2, 3]);
// const setC = new Set([3, 4, 5, 6]);
//
//
// function intersection(setA, setB) {
//   let _intersection = new Set();
//   for (let elem of setB) {
//     if (setA.has(elem)) {
//       _intersection.add(elem);
//     }
//   }
//   return _intersection;
// }
//
//
// var result = intersection(setA, setB);
// console.log(result);
