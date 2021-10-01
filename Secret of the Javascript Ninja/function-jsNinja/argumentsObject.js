// arguments its array
function Obj(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments[3]);
}

let print = sumRest(1, 2, 3, 4);
// better use rest parameter
function obj(...arr) {
  return arr;
}

// another form of arguments object
function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

// make it short with rest parameters
function sumRest(...arg) {
  let sum = 0;
  for (let argue of arg) sum += argue;
  return sum;
}

function infiltrate(person) {
  console.log(arguments[0] === 'gardener');
  console.log(arguments[0] === 'ninja');
}


console.log(Obj(1, 2, 3, 4, 5));
