var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + " - " + description);
}


const ninjas = ["Kuma", "Hattori", "Yagyu"];
const samurai = ["Hattori", "Oda", "Tomoe"];

// set bisa menyatukan dua array
const warriors = new Set([...ninjas, ...samurai]);


console.log(warriors.has("Oda"));



const hasOdd = [1, 3, 5, 7, 9];
const hasEven = [2, 4, 6, 8, 10];

const isUnionNumber = new Set([...hasOdd, ...hasEven]);
isUnionNumber.add(11);
