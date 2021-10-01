var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};

// 1
const ninja = {
  get name() {
    return "Akiyama";
  }
};

// ninja.name(); // ini exception karena bukan cara memanggil method dengan access get, seharusnya tidak perlu tanda ()
// const name = ninja.name; //ini bukan exception karena cara aksesnya tepat
// console.log(name);

// const data = {
//   name: "Arief",
//   lastName: "Kurniawan",
//   get fullName() {
//     return this.name + " " + this.lastName;
//   }
// }
//
//
// let result = data.fullName;
// console.log(result);


// 2
function Samurai() {
  const _weapon = "katana";
  Object.defineProperty(this, "weapon", {
    get: () => _weapon
  })
}

// const samurai = new Samurai();
// console.log(samurai.weapon);


// 3
const daimyo = {
  name: "Matsu",
  clan: "Takasu",
  armySize: 10000

}

const proxy = new Proxy(daimyo, {
  get: (target, key) => {
    if (key === "clan") {
      return "Tokugawa";
    }
    if (key === "armySize") {
      return 10000;
    }
  },
  set: (target, key, value) => {
    if (key === "armySize") {
      const number = Number.parseInt(value);
      if (!Number.isNaN(number)) {
        target[key] = number;
      } else {
        target[key] = value;
      }
    }
  }
});

// pass : artinya baik secara akses objek langsung atau melalui proxy terlebih dahulu, keduanya bisa akses objek
assert(daimyo.clan === "Takasu", "Matsu of clan Takasu");
assert(proxy.clan === "Tokugawa", "Matsu of clan Tokugawa?");

// proxy.clan = "Tokugawa";
// fail : karena clan bukan lagi takasu.
assert(daimyo.clan === "Takasu", "Matsu of clan Takasu");
// pass : clan yang sekarang adalah tokugawa
assert(proxy.clan === "Tokugawa", "Matsu of clan Tokugawa?");

// console.log(daimyo);



// 4

assert(daimyo.armySize === 10000, "Matsu has 10000 men at arms");
assert(proxy.armySize === 10000, "Matsu has 10000 men at arms");
proxy.armySize = "large";
assert(daimyo.armySize === "large", "Matsu has a large army");
daimyo.armySize = "large";
assert(daimyo.armySize === "large", "Matsu has a large army");
