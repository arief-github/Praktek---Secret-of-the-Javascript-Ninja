// resolving promise
const assert = require('assert');

function report(value) {
  return console.log(value);
}

// function assert(value, description) {
//   var result = value ? "pass" : "fail";
//   console.log(result + ' - ' + description);
// }

function equal(integer) {
  return console.log(integer);
}

function deepEqual(integer) {
  return console.log(integer);
}
// function assert(value, desc) {
//   var li = document.createElement('li');
//   li.className = value ? "pass" : "fail";
//   li.appendChild(document.createTextNode(desc));
//   document.getElementById('results').appendChild(li);
// }
// window.onload = function() {
//   assert(true, "The test suite is running");
//   assert(false, "fail!");
// };

// report('at code start');

// delay 500 ms untuk eksekusi resolve
var ninjaDelayedPromise = new Promise((resolve, reject) => {
  report('ninjaDelayedPromise executor');
  setTimeout(() => {
    report("Resolving ninjaDelayedPromise");
    resolve('hatori');
    // reject('fukuyama');
  }, 1000);
});

// assert(ninjaDelayedPromise !== null, "After creating ninjaDelayedPromise");

// method then dipasang sebagai callback function yang akan dipanggil jika proses terpenuhi
ninjaDelayedPromise.then(ninja => {
  // assert(ninja === 'hatori', 'ninjaDelayedPromise resolved handled with hatori');
});

const ninjaImmidiatePromise = new Promise((resolve, reject) => {
  report('ninjaImmidiatePromise executor. immidiate resolve');
  resolve('Yoshi');
});

ninjaImmidiatePromise.then(ninja => {
  // assert(ninja === 'Yoshi', 'ninjaImmidiatePromise resolve handled with yoshi');
});

report("At code end");


// rejecting Promise
// const promise = new Promise((resolve, reject) => {
//   reject("Explicitly reject a promise");
// });
//
// promise.then(
//   () => fail("Happy path, won't be called"),
//   error => pass("A promise was Explicitly rejected")
// );


// source : impatient program
// resolve is used for delivering result
// reject is used for delivering an error
// function addSync(x, y) {
//   return new Promise((resolve, reject) => {
//     if (x === undefined || y === undefined) {
//       reject(Error => "Must have 2 parameters")
//     } else {
//       resolve(x + y);
//     }
//   })
// }
//
// const print = addSync(10, 10)
// console.log(print);

// concurrentcy tip
// function expression
const asyncFunc1 = () => Promise.resolve('one');
const asyncFunc2 = () => Promise.resolve('two');

// asyncFunc2()
//   .then(result1 => {
//     equal(result1, 'one');
//     return asyncFunc1();
//   })
//   .then(result2 => {
//     equal(result2, 'two');
//   });

// Promise.all([asyncFunc1(), asyncFunc2()])
//   .then(arr => {
//     deepEqual(arr, ['one', 'two']);
//   });

// concurrentcy tip
// function sequentialThen() {
//   return asyncFunc1()
//     .then(r1 => asyncFunc2().then(r2 => [r1, r2]));
// }
//
// function sequentialAll() {
//   const p1 = asyncFunc1();
//   const p2 = p1.then(() => asyncFunc2());
//   return Promise.all([p1, p2]);
// }
//
// const p = sequentialAll();
// console.log(p);


// combining generators and promises
// async (function*() {
//   try {
//     const ninjas = yield getJSON('data/ninja.json');
//     const missions = yield getJSON(ninjas[0].missionUrl);
//     const missionDescription = yield getJSON(missions[0].detailsUrl);
//   } catch (e) {
//     // Oh no, we weren't able to get mission details
//   }
// });
//
// function async (generator) {
//   var iterator = generator();
//
//   function handle(iteratorResult) {
//     if (iteratorResult.done) {
//       return;
//     }
//     const iteratorValue = iteratorResult.value;
//     if (iteratorValue instanceof Promise) {
//       iteratorValue.then(res => handle(iterator.next(res))
//         .catch(err => iterator.throw(err)));
//     }
//   }
// }
//
// try {
//   handle(iterator.next());
// } catch (e) {
//   iterator.throw(e);
// }


// exercise
function* EventGenerator() {
  let num = 2;
  while (true) {
    yield num;
    num += 2;
  }
}

let generator = EventGenerator();

let a1 = generator.next().value;
let a2 = generator.next().value;
let a3 = EventGenerator().next().value;
let a4 = generator.next().value;

// console.log([a1, a3]);

function* NinjaGenerator() {
  yield "Yoshi";
  return "Hattori";
  yield "Hanzo";
}

var ninjas = [];
for (let ninja of NinjaGenerator()) {
  ninjas.push(ninja);
}

// console.log(ninjas);

function* Gen(val) {
  val = yield val * 2;
  yield val;
}

// let generator2 = Gen(2).next().value;
// let af = generator2.next(3).value;
// let as = generator2.next(4).value;

// console.log(generator2);

// const promise = new Promise((resolve, reject) => {
//   resolve("Hattori");
// });
//
// promise.then(val => alert("Success: " + val)
//   .catch(e => alert("Error: " + e)));

const promise = new Promise((resolve, reject) => {
  // resolve("Hattori");
  setTimeout(() => reject("Yoshi"), 500);
});

promise.then(val => console.log("Success: " + val)).catch(err => console.log("Error: " + err));
