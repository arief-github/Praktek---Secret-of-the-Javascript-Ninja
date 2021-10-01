// penerapan modularisasi sebelum ES6
// function as modules
(function countClicks(){
  let numClicks = 0;
  document.addEventListener("click", () => {
    alert(++numClicks);
  });
})();
