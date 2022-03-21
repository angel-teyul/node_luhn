// const luhnApi = require('./luhn.js');
const luhnApiPost = require('./luhn.js');

function controllers(app) {
  // luhnApi(app);
  luhnApiPost(app);
}

module.exports = controllers;