// testing
function assert(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
}

// test pemahaman closures
//
// let account = 10;
//
// function getCloser(param1) {
//   let amnestic = 20;
//
//   function accessingVar(param2) {
//     let adjacent = 30;
//     console.log(account + " = this access global variabel");
//     console.log(amnestic + " = this access parent variabel");
//     console.log(param1 + " = this access parameter parents");
//     console.log(param2 + " = this access parameter local");
//     console.log(adjacent + " = this access local variable");
//   }
//
//   accessingVar(25)
// }
//
//
// let result = getCloser(15)
// console.log(result);


// working with generator functions
// function* WeaponGenerator() {
//   yield "katana"
//   yield "wakizashi"
//   yield "kusarigama"
// }
//
// for (let weapon of WeaponGenerator()) {
//   assert(weapon !== undefined, weapon)
// }


function* oneDigitPrimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

// when we invoke the generator function, we get a generator
// let primes = oneDigitPrimes()
// primes.next().value
// console.log(primes);
//print generator object

// a generator is an iterator object that iterates the yielded values

let primes = oneDigitPrimes();
//
let [res1, res2, res3] = [primes.next(), primes.next(), primes.next(), primes.done]
//
// console.log(res1, res2, res3);


function* WeaponGenerator() {
  yield 'katana';
  yield 'wakizashi';
}

const weapons = WeaponGenerator();
let [result1, result2] = [weapons.next(), weapons.next(), weapons.next()];
assert(typeof([result1, result2] === 'object' && [result1.value, result2.value] === ['katana', 'wakizashi']) && [!result1.done, !result2.done], "those value received");
// assert(typeof(result3 === 'object' && result3.value === 'undefined' && result3.done, 'there are no values'))


// latihan
// function* tonsOfNum() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
//
//
// let callGenerator = tonsOfNum();
//
// console.log(callGenerator.next());


// iterating the iterator
// create f.generator
function* weaponGenerate() {
  yield 'Machend'
  yield 'sword'
  yield 'Cockoand'
}
// create an iterator
const weaponIterator = weaponGenerate()
// let item;
// using statement while for iterating
// while (!(item = weaponIterator.next()).done) {
//   assert(item !== null, item.value)
// }

// using statement for-of for iterating
// for (let item of weaponGenerate()) {
//   assert(item !== null, item);
//   console.log(item);
// }


// generator function declaration
function* getFunc1() {
  yield 1;
}

// generator function Expression
let getFunc2 = function*() {
  yield 1;
}

// generator method definition in an object iteral
const obj = {
  * generalMethod() {
    yield 1;
  }
}

// generator method class definition
class mClass {
  * generatorMethod() {

  }
}


// examine
let location = 0;

function* locate() {
  location = 1;
  yield 'a';
  location = 2;
  yield 'b';
  location = 3;
}

let locator = locate();

// delegate yield
// function* WarriorGenerator() {
//   yield 'Sun Tzu'
//   yield* NinjaGenerator()
//   yield 'Gengshin Khan'
// }
//
// function* NinjaGenerator() {
//   yield 'Hattori'
//   yield 'yoshi'
// }
//
// for (let war of WarriorGenerator()) {
//   assert(war !== null, war)
// }

let lokasi = 0;

function* number() {
  lokasi = 0
  yield 'a'
  // delegate
  yield* numberContinue()
  lokasi = 1
  yield 'b'
  lokasi = 2
  yield 'c'
}


function* numberContinue() {
  lokasi = -0;
  yield '-a'
  lokasi = -1;
  yield '-b'
}

// for (let loc of number()) {
//   console.log(loc);
// }

// ID generator with Function Generators
function* IdGenerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}
// user iterator to request id from function generator
const idIterator = IdGenerator();

const ninja1 = {
  id: idIterator.next().value
};
const ninja2 = {
  id: idIterator.next().value
};
const ninja3 = {
  id: idIterator.next().value
};

// print test
// assert(ninja1.id === 1, "first ninja has id 1");
// assert(ninja2.id === 2, "second ninja has id 2");
// assert(ninja3.id === 3, "third ninja has id 3");

// print result
// console.log(ninja1, ninja2, ninja3);


// sending values as generator function arguments
function* NinjaGenerate(action) {
  const imposter = yield('Hatori' + action);
  assert(imposter === 'Hanzo', 'the generator has been infiltrated');
  yield("Yoshi (" + imposter + ") " + action);
}

const ninjaIterator = NinjaGenerate('skulk');
const rest1 = ninjaIterator.next();
console.log(rest1);
assert(rest1.value === 'Hatori skulk', 'Hattori is skulking');
// using next method to send value to parameter generator
const rest2 = ninjaIterator.next('Hanzo');
assert(rest2.value === 'Yoshi (Hanzo) skulk', 'We have an imposter');
