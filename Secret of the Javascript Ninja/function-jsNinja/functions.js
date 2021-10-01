// function testing
var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};
// these are capabilities in function

// 1. expression function : adds a function to variable
// let substraction = function(a, b) {
//   return a * b;
// }

// let result = substraction(100, 200);

// console.log(result);

var text = ' Hallo JS! ';
// make this function return a function
// function useless(ninjaCallback) {
//   return ninjaCallback();
// }

// make this function return variabel text
// function getText() {
//   return text;
// }

// test it. make useless function giving argument the getText() as you know before
// the useless function return a function
// console.log(useless(getText) === text,
//   "The useless function works" + text);


// var store = {
//   nextId: 1,
//   cache: {},
//   add: function(fn) {
//     if (!fn.id) {
//       fn.id = this.nextId++;
//       this.cache[fn.id] = fn;
//       return true;
//     }
//   }
// };
//
// function ninja() {}
// assert(store.add(ninja), "Function was added");
// assert(!store.add(ninja), "But it was only added once");


// prime number function
// function isPrime(values) {
// membuat cache untuk menampung bilangan prima
// if (!isPrime.answers) {
//   isPrime.answers = {};
// }


// check nilai yang masuk ke cache
//   if (isPrime.answers[values] !== undefined) {
//     return isPrime.answers[values];
//   }
//
//   var prime = values !== 1;
//
//   for (var i = 2; i < values; i++) {
//     if (values % 2 === 0) {
//       prime = false;
//       break;
//     }
//
//   }
//   return isPrime.answers[values] = prime;
// }
//
// assert(isPrime(5), "5 is prime!");
// assert(isPrime.answers[5], "The answer was cached!");


// ways to defining function
// function declaration
// type 1 : body is contain return
function Samurai() {
  return "Samurai here";
}

// type2 : function can return a function
function Ninja() {
  function NinjaIsHide() {
    return "Ninja is here";
  }
  return NinjaIsHide();
}

Samurai();


//type 2 : function expression; so a function is stored to variabel
let samurai = function(a, b) {
  return a ** b;
};
let result = samurai(3, 3);

// type 3 : arrow function

// simplify expression, from this
var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// values.sort(function(val1, val2) {
//   return val1 - val2;
// });
// to this (param => expression)
values.sort((val1, val2) => val1 - val2);
var greet = name => "Greetings" + name;
// assert(greet("Oishi") === "Greetings Oishi", "Oishi is properly greeted");
// console.log(greet(" Oishi"));
// expression function
var anotherGreet = function(name) {
  return "Greetings" + name;
};
// console.log(anotherGreet("Aloha"));
// assert(anotherGreet("Oishi" === "Greetings Oishi", "Again, Oishi is properly greeted"));

let perform = ninja => "ninja" + ninja;

function skulk(ninja) {
  return "ninja" + ninja;
}
// console.log(skulk("Hatori"));
// function declaration
// function count(a, b) {
//   return a * b;
// }

// function expression
// var count = function(a, b) {
//   return a * b;
// };

// arrow function
// var count = (a, b) => a *
//   b;

// rest param
// function multiMax(first, ...remainingNumbers) {
//   var sorted = remainingNumbers.sort(function(a, b) {
//     return b - a;
//   });
//   return first * sorted[0];
// }

// rest untuk menangani beberapa argument , sisa
function sumAll(...args) { //args sebagai array yang menampung argument
  let sum = 0;

  for (let arg of args) sum += arg;
  return sum;

}

function showName(firstName, lastName, ...titles) {
  console.log(firstName + ' ' + lastName);
  console.log(titles[0]);
  console.log(titles[1]);
  console.log(titles.length);
}

// default parameters
function performAction(ninja, action = "skulking") {
  return ninja + " " + action;
}

function test(a, b, ...c) {
  let num = 0;
  for (let arg of c) num = arg;
  return num;
}

// let resulta = sumAll(10, 20, 30, 400, 421.700);
// let resultName = showName("Arief", "Kurniawan", "S.Kom", "M.ba");



// console.log(resultName);


// implicit function parameters
// arguments object

function implicitly(a, b, c) {
  // 3 argument is handle by these 3 param
  assert(a === 1, 'The value of a is 1');
  assert(b === 2, 'The value of b is 2');
  assert(c === 3, 'The value of c is 3');
  // but two remaining, we must make another assert
  assert(arguments.length === 5, 'we passed in 5 param');

  assert(arguments[0] === a, 'The first argument is assigned to a');
  assert(arguments[1] === b, 'The first argument is assigned to b');
  assert(arguments[2] === c, 'The first argument is assigned to c');
  assert(arguments[3] === 4, 'we can access fourth arg');
  assert(arguments[4] === 5, 'we can access fifth arg');
}

function handle(a, b, ...rest) {
  // expression of var
  let val = 0;
  // get refference variabel in for of variabel
  for (let argue of rest) val += argue;
  // return variabel
  return a + b, val;
}




//
// let imp = sumAll(1, 2, 3, 4, 5);
// console.log(imp);

// constructor explicitly returning object value
var puppet = {
  rules: false
};

function Emperor() {
  this.rules = true;
  return puppet;
}

var emperor = new Emperor();
// console.log(emperor === true);


// invocation with call and apply method
// A for array and C for comma
function juggle() {
  var result = 0;
  for (var n = 0; n < arguments.length; n++) {
    result += arguments[n];
  }
  this.result = result;
}

var ninja1 = {};
var ninja2 = {};
// function context | how arguments is supplied
// apply with an array of arguments
juggle.apply(ninja1, [1, 2, 3, 4]);
// call with a list of other arguments
juggle.call(ninja2, 5, 6, 7, 8);

// assert(ninja1.result === 10, 'juggled via apply');
// assert(ninja2.result === 24, 'juggled via call');


function profecy(name, profession) {
  console.log("My name is " + name + " and im a " + profession);
}
// access apply method
// profecy.apply(undefined, ["Bono", "Goalkeeper"]);
// access call method
// profecy.call(undefined, "Messi", "Striker");
// access call method with rest
// profecy.call(undefined, ...["Matthew", "ConvenienceStore"], ["lorde", "singer"])


// setting function context
function forEach(list, callback) {
  for (var n = 0; n < list.length; n++) {
    callback.call(list[n], n);
  }
}

var weapons = [{
    type: 'shuriken'
  },
  {
    type: 'katana'
  },
  {
    type: 'nunchucks'
  }
];

forEach(weapons, function(index) {
  assert(this === weapons[index],
    'Got the expected value of ' + weapons[index].type)
})

// exercise
// function sum(...a) {
//   var num = 0;
//   for (let argue of a) num += argue;
//
//   return num;
//
// }
// console.log(sum(10, 10, 20));

// function getSamurai(samurai) {
//   'use strict';
//   arguments[0] = 'Ishida';
//   return samurai;
// }
//
// function getNinja(ninja) {
//   arguments[0] = 'Fuma';
//   return ninja;
// }
//
// var samrai = getSamurai('toyotomi');
// var ninja = getNinja('Yoshi');
//
// console.log(samrai, ninja);
