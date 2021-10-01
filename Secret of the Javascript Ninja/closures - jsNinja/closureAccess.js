// closure adalah kemampuan innermost function untuk mengakses variabel terluar namun masih dalam function scope parent
function counter() {
  let n = 0;
  return {
    count: function() {
      return n++;
    },
    reset: function() {
      n = 0
    }
  }
}
let c = counter(),
  d = counter();
// c.count()
// d.count()
// another example from closures
const age2 = 20;

function yourAge() {
  const age = 19;

  function printAge() {
    console.log(age2 + "Should you do the best things ever");
  }
  printAge()
}
// yourAge()
// another example from closures
const varGlobal = 'Its global variable';

function functionOuter(param1) {
  const var1 = 'variable satu pada skop fungsi';

  function functionInner(param2) {
    const var2 = 'variable dua pada skop fungsi terdalam'
    // akses variabel global
    console.log(`${varGlobal}`);
    // akses variabel fungsi parent
    console.log(`${var1}`);
    // akses variabel lokal
    console.log(`${var2}`);
    // akses parameter fungsi parent
    console.log(`${param1}`);
    // akses parameter fungsi ini
    console.log(`${param2}`);
    functionInner('ini adalah inner function yang menerapkan konsep closure')
  }
}
functionOuter('ini adalah param 1')
// private variables
const getSecret = (secret) => {
  // closure happen
  return {
    get: () => secret
  }
}
// test('Closure for object privacy.', assert => {
//   const msg = '.get() should have access to the closure.';
//   const expected = 1;
//   const obj = getSecret(1);
//
//   const actual = obj.get();
//
//   try {
//     assert.ok(secret, 'This throws an error.');
//   } catch (e) {
//     assert.ok(true, `The secret var is only available
//       to privileged methods.`);
//   }
//
//   assert.equal(actual, expected, msg);
//   assert.end();
// });
// let scopes = 'global scope'
//
// function checkscope(param) {
//   let scope = 'local scope'
//
//   function access(paramp) {
//     console.log(scopes + ' accessed');
//     console.log(scope + ' accessed');
//     console.log(param + ' param variables accessed outer');
//     console.log(paramp + ' param variable accessed inner');
//   }
//
//   access(200)
// }
//
//
// let pr = checkscope(100)
// console.log(pr);
// let outerLet = 'global scope'
//
// function parent(age) {
//   let outerletfun = 'function scope'
//
//   function child(many) {
//     console.log(outerLet + ' accessed global');
//     console.log(outerletfun + ' accessed function');
//     console.log(age + ' parameter parent accessed ');
//     console.log(many + ' parameter inner accessed');
//   }
//   child(2)
// }
var bankAccount = function(initialBalance) {
  // Let's initialise the balance with the value passed as an argument
  // to the function.
  var balance = initialBalance;
  return {
    getBalance: function() {
      return balance
    },
    deposit: function(amount) {
      // Let's add the amount to what we already have in the
      //  balance.
      balance += amount;
      // Return the new balance
      return balance;
    },
    withdraw: function(amount) {
      // Check if we have enough money to withdraw all that.
      if (amount <= balance) {
        balance -= amount;
        return true;
      } else {
        return false;
      }
    }
  }
}
// var marceloAccount = bankAccount(100);
// marceloAccount.deposit(10) // 110
//
//
//
// console.log(marceloAccount.deposit(10));
// private variables are accessed through functions, not through objects
function Ninja() {
  var feints = 0;
  this.getFeints = function() {
    return feints
  }
  this.feint = function() {
    feints++;
  }
}
var ninja1 = new Ninja();
ninja1.feint();
console.log(ninja1);
var imposter = {};
imposter.getFeints = ninja1.getFeints;
assert(imposter.getFeints() === 1, "the imposter has access to the feints variable!")

let a = 100;
let b = 100;
