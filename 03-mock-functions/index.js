function myMapFn(inputArray, callbackFn, resultArray = [], step = 0,) {
  if(step === inputArray.length) return resultArray;
  else {
    const currentMember = inputArray[step];
    const result = resultArray.concat(callbackFn(currentMember));
    return myMapFn(inputArray, callbackFn, result, step + 1);
  }
}

exports.myMapFn = myMapFn;