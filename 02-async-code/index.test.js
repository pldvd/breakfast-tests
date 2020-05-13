const asyncFunctions = require('./index.js');
const getResource = asyncFunctions.getResource;
const myPromise = asyncFunctions.myPromise;

describe('getResource', () => {
  it('fetches the users array', () => {
    return getResource('https://jsonplaceholder.typicode.com/users')
      .then(data => expect(data).toHaveLength(10));
  })
})

describe('myPromise', () => {
  it('resolves with "the number is even" if even input is passed', () => {
    return myPromise(2).then(message => {
      expect(message).toMatch(/even/i);
    })
  })

  it('rejects with reason "this is an odd number" if odd input is passed', () => {
    return myPromise(3).catch(reason => {
      expect(reason).toMatch(/odd/i);
    })
  })
})