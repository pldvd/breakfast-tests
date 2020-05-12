const dayOneMethods = require('./index');
const addFive = dayOneMethods.addFive;

describe('addFive', () => {
  it('adds five', () => {
    expect(addFive(6)).toEqual(11);
  })
})