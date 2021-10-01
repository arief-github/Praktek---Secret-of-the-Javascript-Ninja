const fetch = require("node-fetch");
const assert = require("assert");
// jangan menggunakan nesting untuk promise, gunakan chaining
// teknik chaining promise

// fetch(documentURL)
//
//   .then(response => response.json)
//
//   .then(document => {
//     return render(document);
//   })
//
//   .then(rendered => {
//     cacheInDatabase(rendered)
//   })
//
//   .catch((err) => {
//     handle(error);
//   });


// fetch('ninja.json')
//   .then(response => {
//     return response.json();
//   })
//   .then(profile => {
//     displayUserProfile(profile)
//   })
//
// fetch().then().then()
