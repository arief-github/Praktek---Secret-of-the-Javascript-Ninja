var assert = (value, description) => {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
}


// defining getters and setters with Object.defineProperty
// function NinjaHattori() {
//
//   let _skillLevel = 0;
//
//   Object.defineProperty(this, 'skillLevel', {
//     get: () => {
//       return _skillLevel;
//     },
//     set: value => {
//       _skillLevel = value;
//     }
//   });
// }
// instance
// const skill = new NinjaHattori();
// assert(typeof skill._skillLevel === "undefined", `we cannot access a 'private' property`);
// console.log(skill._skillLevel);



// validating property value assignments with setters
function Ninja() {
  let _skillLevel = 0;

  Object.defineProperty(this, 'skillLevel', {
    get: () => _skillLevel,
    // validasi nilai yang masuk
    set: value => {
      if (!Number.isInteger(value)) {
        throw new TypeError("Skill level should be a number");
      }
      _skillLevel = value;
    }
  });
}

// const ninja = new Ninja();
// ninja.skillLevel = 10;
// console.log(ninja.skillLevel);

// error handling
// try {
//   ninja.skillLevel = "okey";
//   console.log("hasil sukses ditangani try");
//   console.log("tidak terdapat masalah");
// } catch (e) {
//   console.log("error ditangani catch");
//   console.log("Setting a non integer value throws an exception");
// }



// defining computed properties
// const shogun = {
//   name: "Yoshiaki",
//   clan: "Ashikaga",
//   get fullTitle() {
//     return this.name + " " + this.clan;
//   },
//   set fullTitle(value) {
//     const segments = value.split(" ");
//     this.name = segments[0];
//     this.clan = segments[1];
//   }
// }
//
//
// shogun.name = "Aitakata"
// shogun.clan = "Uchiha"
// console.log(shogun.fullTitle);
// assert(shogun.clan === "Uchiha", "Our clan is Ashikaga");

// method getter and setter pada object literal
let p = {
  x: 1.0,
  y: 1.0,
  // r merupakan accessor method
  // method get ini dipanggil tanpa menggunakan parameter, disebut read only

  get r() {
    return Math.hypot(this.x, this.y);
  },

  // method set ini dipanggil dengan parameter, disebut write only
  set r(newValue) {
    let oldValue = Math.hypot(this.x, this.y);
    let ratio = newValue / oldValue;
    this.x *= ratio;
    this.y *= ratio;
  },
  get theta() {
    return Math.atan2(this.x, this.y);
  }
}

// cara panggil get
// console.log(p.r);
// cara panggil setters
// p.x = 2.0;
// p.y = 2.0;
// console.log(p.r);

// inheritance
// let q = Object.create(p);
// q.x = 3;
// q.y = 4;
// console.log(q.r);


// const serialnum = {
//   _n: 0,
//   get next() {
//     return this._n++;
//   },
//   set next(n) {
//     if (n > this._n) {
//       this._n = n;
//     } else {
//       throw new Error("serial number can only be set to a larger value");
//     }
//   }
// };
//
// for (let i = 0; i <= 10; i++) {
//   console.log(serialnum.next);
// }
//
// serialnum.next = 9;
// console.error(serialnum.next);

// const random = {
//   get octet() {
//     return Math.floor(Math.random() * 10);
//   },
//   get uint16() {
//     return Math.floor(Math.random() * 100);
//   },
//   get int16() {
//     return Math.floor(Math.random() * 100) - 70
//   }
// }
//
//
// console.log(random.octet);
