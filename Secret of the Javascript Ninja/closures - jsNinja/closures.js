// function testing
var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

// closure
// kemampuan sebuah fungsi untuk mengakses dan memanipulasi variable yang berada di luar fungsi
const outerValue = 'ninja';

function outerFunction() {
  // assert(outerValue === 'ninja', 'i can see him')
  console.log(outerValue);
}

// outerFunction()


// fungsi terdalam bahkan bisa mengakses variabel yang terluar sekalipun
let outVal = 'samurai';
let later;

function outFunction() {
  var innerValu = 'Hatorri'

  function innerFunction() {
    // access outer variabel
    assert(outVal === 'samurai', 'i can see samurai')
    assert(innerValu === 'Hatorri', 'i can see her')
  }
  // access outer variabel and then use it
  later = innerFunction;
}

// outFunction()
// later()

// approximate private variabel / no direct access to it
function Ninjas() {
  // variabel disimpan dan dikembalikan pada f.expression dan tidak bisa diakses di luar fungsi
  var feints = 0;
  this.getFeints = function() {
    return feints;
  }
  this.feint = function() {
    feints++;
  }
}

// invoke as constructor
var ninja1 = new Ninjas();
ninja1.feint();

// assert(ninja1.feints === undefined, 'And the private data is inacessible to us')
// assert(ninja1.getFeints() === 1, 'Were able to access the internal feint count')

var ninja2 = new Ninja();
// assert(ninja2.getFeints() === 0, 'The second ninja object gets its own feints variable');

// console.log(ninja2.getFeints());



// closure and callback
function animateIt(elId) {
  var elem = document.getElementById(elId)
  var tick = 0;
  var timer = setInterval(function() {
    if (tick < 100) {
      elem.style.left = elem.style.top = tick + "px"
      tick++;
    } else {
      clearInterval(timer);
      assert(tick === 100,
        "Tick accessed via closure");
      assert(elem, 'Element also accessed via closure')
      assert(timer, 'Timer reference also obtained via closure.')
    }
  }, 10);
}

// animateIt('box1')


// execution context
// function skulk(ninja) {
//   report(ninja + 'skulking')
// }
//
// function report(message) {
//   console.log(message);
// }
//
// skulk('Yosha')


// code nesting
// var ninja = 'Muyoshi';
//
// function skulking() {
//   var action = 'skulking'
//
//   function reporting() {
//     let report = 3;
//
//     for (let i = 0; i < report; i++) {
//       console.log(ninja + " " + action + " " + i);
//     }
//
//   }
//   reporting();
// }

// skulking()


// how to declare Function
// f. declaration

function createDeclare() {
  console.log('You call the declare function');

}

// f. expression
let createExp = function() {
  console.log('You call the Expression function');
}

// f. on object
let Obj = {
  name: 'Arief',
  class: function() {
    console.log('You call the Method function');
  }
}

// function constructor
function MakeName() {
  console.log('You call the Function Constructor');
  console.log(this);
}

// function with parameters
function makeHandleOfThis(left, right) {
  return left + right + 2;
}


// function with rest parameters
function makeHandleWithRest(...c) {
  let num = 0;
  for (let arr of c) {
    num += arr;
  }
  return num;
}

function max(first = -infinity, ...rest) {
  let maxValue = first;
  for (let nilai of rest) {
    if (nilai > maxValue) {
      maxValue = nilai
    }
  }
  return maxValue;
}

// default parameters
function defaultingTheValue(a, b = 20) {
  return a + b;
}
// invoking Function : with function name

// 1. f dec invoke
// createDeclare()

// 2. f. expression invoke : with variable name
// createExp()

// 3. method invoke : with variable name that contain its object
// Obj.class();

// 4. Constructor invoke : with keyword new

// let newInstance = new MakeName();
// console.log(newInstance);

// 5. Invoke function with parameters : must have arguments for passing/invoking it
// console.log(makeHandleOfThis(10, 20));


// 6. Invoke function that contain rest parameters : must contain for of loop
// console.log(makeHandleWithRest(10, 20, 30, 40, 900));
// console.log(max(10, 20, 40));


// 7. Invoke the default parameters
// console.log(defaultingTheValue(makeHandleOfThis(1, 1)));


// go on to closure
var ninja = 'Muyarama';

function skulk() {
  var action = 'skulking'

  function report() {
    var intro = 'Aha!'
    assert(intro === 'Aha!', 'Local');
    assert(action === 'skulking', 'Outer')
    assert(ninja === 'Muyarama', 'Global')
  }
  report()
}


// skulk()
// defining variable on javascript
// perbedaannya adalah dari mutabilty dan keterhubungan
// const
const firstConst = 'SAMURAI';
// cant be redeclare / replace value
// firstConst = 'Hatori'
assert(firstConst === 'SAMURAI', 'firstConst is samurai');

const secondConst = {};
// cant add full object ; but we can modify the object
// secondConst = {
//   na
// }
// secondConst.weapon = 'wakizashi'
// assert(secondConst.weapon === 'wakizashi', 'we can add new properties')
// console.log(secondConst);
//same thing holds for array

// const thirdConst = [];
// let arr = [1, 2, 3, 4, 5]
// assert(thirdConst.length === 0, 'No Items in our array');
// thirdConst.push(arr)
// assert(thirdConst.length === 1, 'The array has changed');
// console.log(thirdConst);

// relationship with lexical 'var'
var globalNinja = 'Yoshi';

function reportActivityVar() {
  var functionActivity = 'jumping'

  for (var i = 0; i < 3; i++) {
    // we can access 2 variabel, even within block scope
    var forMessage = globalNinja + " " + functionActivity;
    assert(forMessage === 'Yoshi jumping', 'Yoshi is jumping within the for block')
    assert(i, 'Current loop counter: ' + i)
  }
  assert(i === 3 && forMessage === 'Yoshi jumping', 'Loop variabels accessible outside of the loop ')
}

// reportActivity()


// using let and const to specify block-scoped variables
// global scope
const GLOBAL_NINJA = 'Yoshi';

function reportActivityConstLet() {
  // function scope
  const FUNCTION_ACTIVITY = 'jumping';

  for (let i = 1; i < 3; i++) {
    // block scope
    let forMessage = GLOBAL_NINJA + " " + FUNCTION_ACTIVITY;
    assert(forMessage === 'Yoshi jumping', 'Yoshi is jumping within for block')
    assert(i, 'Current loop counter:' + i)
  }

  assert(typeof i === 'undefined' && typeof forMessage === 'undefined', 'Loop variables not accessible outside the loop')
  console.log(GLOBAL_NINJA);
}
// console.log(FUNCTION_ACTIVITY);
// reportActivityConstLet();

// assert(typeof functionActivity === "undefined" &&
//   typeof i === "undefined" && typeof forMessage === "undefined",
//   "We cannot see function variables outside of a function");


// registering identifiers within lexical environment
// kemampuan javascript dalam memanggil fungsi sebelum dideklarasikan
const firstRonin = "Kiyokawa";
check(firstRonin)

function check(ronin) {
  assert(ronin === 'Kiyokawa', 'the ronin was checked')
}


const axp = 10;
checksound(axp)

function checksound(str) {
  assert(str === 10, 'passed the function')
  return str
}


// more example for topic access funtion even before its declare
// assert(typeof fun === 'function', 'fun is a function')
// assert(typeof myFunExp === 'undefined', 'we cant access function expression')
// assert(typeof myArrow === 'undefined', 'Nor arrow function')
// let arr = [1, 2, 4, 3]
// fun(arr)
//
// function fun(param) {
//   return param;
// }

// console.log(fun(arr));

// hoisting
let arr = [1, 3, 2]
// myFunExp(arr)
var myFunExp = function(param) {
  return param;
}

// console.log(myFunExp(param));
// var myArrow = (x) => x


// how closures work approximate private variables with closures
// function Constructor
function Ninja() {
  var feints = 0;
  this.getFeints = function() {
    return feints;
  }
  this.feint = function() {
    feints++;
  };
}
// invoke a function
var ninja1 = new Ninja();

// testing
assert(ninja1.feints === undefined, 'And the private data is inaccessible to us')
ninja1.feint();
assert(ninja1.getFeints() === 1, 'Were able to access the internal feint count')
var ninja2 = new Ninja()
assert(ninja2.getFeints() === 0, 'The second ninja object gets its own feints variabel')
ninja2.getFeints()
