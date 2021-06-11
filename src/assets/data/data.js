const food = require('./food.json');
const register = require('./register.json');
// Something more

module.exports = () => ({
  food: food,
  register: register
  // Something more
});

// start the json server by watching this file
// > json-server --watch src/assets/data/data.js
