function myMapFn(inputArray, callbackFn, resultArray = [], step = 0,) {
  if(step === inputArray.length) return resultArray;
  else {
    const currentMember = inputArray[step];
    const result = resultArray.concat(callbackFn(currentMember));
    return myMapFn(inputArray, callbackFn, result, step + 1);
  }
}

function counterReducer(action, counter = 0, ) {
  switch(action.type) {
    case 'increment': 
      return counter + 1;
    case 'decrement': 
      return counter - 1;
    case 'add':
      return counter + action.amount;
    case 'subtract':
      return counter - action.amount;
    default:
      return counter;
  }
}

exports.myMapFn = myMapFn;
exports.counterReducer = counterReducer;