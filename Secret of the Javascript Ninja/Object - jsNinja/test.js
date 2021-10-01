var assert = function(value, description) {
  var result = value ? "pass" : "fail";
  console.log(result + ' - ' + description);
};


try {
  console.log("baris ini dieksekusi");
  // throw new Error("whoops");
} catch (err) {
  console.log("baris ini tidak dieksekusi");
} finally {
  console.log("...selalu dieksekusi");
  console.log("melakukan pembersihan disini");
}
