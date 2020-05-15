const myFunctions = require('./index');
const myMapFn = myFunctions.myMapFn;

const mockAdder = jest.fn(x => x + 1);

describe('myMapFn', () => {
  it('transforms an array of numbers', () => {
    const numbers = [1, 2, 3];
    const transformedArray = myMapFn(numbers, mockAdder);
    expect(transformedArray).toEqual([2, 3, 4]);
  })
})