function addFive(num) {
  return num + 5;
}

function addFiveConditional(num) {
  return num % 2 === 0 ? num + 5 : num + 3;
}

exports.addFive = addFive;
exports.addFiveConditional = addFiveConditional;