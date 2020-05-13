const asyncFunctions = require('./index.js');
const getResource = asyncFunctions.getResource;

describe('getResource', () => {
  
  it('fetches the users array', () => {
    return getResource('https://jsonplaceholder.typicode.com/users')
      .then(data => expect(data).toHaveLength(10));
  })
})
