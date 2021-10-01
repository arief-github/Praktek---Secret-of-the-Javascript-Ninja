var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

function report(desc, value) {
  return desc, value;
}

const emperor = {
  name: "Kamui"
};

const representative = new Proxy(emperor, {
  get: (target, key) => {
    return key in target ? target[key] : "Don't bother the emperor!";
  },
  set: (target, key, value) => {
    target[key] = value;
  }
});

emperor.nickname = "heyo"
console.log(representative.Nickname);

// akses objek biasa
// assert(emperor.name === "Kamui", "The emperor name is Kamui")
// console.log(emperor.name);


// assert(representative.name === "Kamui", "we can get the name property through a proxy");
// console.log(representative.name);


// assert(emperor.nickname === undefined, "the emperor doesnt have a nickname");
// console.log(emperor.nickname);

// assert(representative.nickname === "Dont bother the emperor", "the proxy jumps in when we make inproper requests")

// representative.nickname = "Tenno"
// assert(representative.nickname === "Tenno", "The emperor now has a nickname");


// console.log(representative);



// using proxies for logging : akses objek secara indirect dengan proxy
function makeLoggable(target) {
  return new Proxy(target, {
    get: (target, property) => {
      return target[property];
    },
    set: (target, property, value) => {
      target[property] = value;
    }
  })
}

let ninja = {
  name: "yoshi"
}

ninja = makeLoggable(ninja);


// assert(ninja.name === "yoshi", "our ninja yoshi")
// ninja.weapon = "sword";
// assert(ninja.weapon === "sword", "has a weapon");



// using proxies for measuring performance : akses ke function di re-route ke Proxy
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

isPrime = new Proxy(isPrime, {
  apply: (target, thisArg, args) => {
    console.time("isPrime");
    const result = target.apply(thisArg, args);
    console.timeEnd("isPrime");
    return result;
  }
});

// isPrime(1299827);


// using proxies to autopopulating properties
function Folder() {
  return new Proxy({}, {
    get: (target, property) => {
      if (!(property in target)) {
        target[property] = new Folder();
      }
      return target[property];
    }
  });
}

const rootFolder = new Folder();

// try {
//   rootFolder.ninjaDir.firstNinjaDir.ninjaFile = "yoshi.txt";
//   console.log("An exception wasnt raised");
// } catch (e) {
//   console.log("An exception has occured");
// }


// Proxies for negative array (read array from back)
function createNegativeArrayProxy(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }
  return new Proxy(array, {
    get: (target, index) => {
      index = +index;
      return target[index < 0 ? target.length + index : index];
    },
    set: (target, index, val) => {
      index = +index;
      return target[index < 0 ? target.length + index : index] = val;
    }
  });
}
// checking performance : comparing access array : direct to array vs direct to proxy
function measure(items) {
  const startTime = new Date().getTime();
  for (let i = 0; i < 500000; i++) {
    items[0] === "Yoshi";
    items[1] === "Kuma";
    items[2] === "Hattori";
  }
  return new Date().getTime() - startTime;
}
const ninjas = ["Yoshi", "Kuma", "Hattori"];
// ninjas.push("alkemis");
// console.log(ninjas);
const proxiedNinjas = createNegativeArrayProxy(ninjas);
// assert(proxiedNinjas[2] === "Hattori", "true and read from back");
// assert(typeof ninjas[-1] === "undefined", "items cannot be accessed throgh negative indexes on an array");

console.log("indirect are round", Math.round(measure(proxiedNinjas)), "times slower");
console.log("direct are round", Math.round(measure(ninjas)), "times slower");
