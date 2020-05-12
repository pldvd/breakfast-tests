function addFive(num) {
  return num + 5;
}

function addFiveConditional(num) {
  return num % 2 === 0 ? num + 5 : num + 3;
}

function sayHi(name) {
  return name ? `Hi ${name}!` : 'Hello, Stranger';
}

function pushToArray(array, item) {
  array.push(item);
}

exports.addFive = addFive;
exports.addFiveConditional = addFiveConditional;
exports.sayHi = sayHi;
exports.pushToArray = pushToArray;