var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + " - " + description);
}


const ninjas = new Set(["Kuma", "Hattori", "Yagyu"]);
const samurai = new Set(["Hattori", "Ode", "Tomoe"])

const isPureNinjas = new Set(
  [...ninjas].filter(ninja => !samurai.has(ninjas))
);

assert(isPureNinjas.size === 2, "Theres only one ninja samurai");
assert(isPureNinjas.has("Kuma"), "Kuma is true ninja");
assert(isPureNinjas.has("Yagyu"), "Yagyu is a true ninja");
