const dayOneMethods = require('./index');
const addFive = dayOneMethods.addFive;
const addFiveConditional = dayOneMethods.addFiveConditional;

describe('addFive', () => {
  it('adds five', () => {
    expect(addFive(6)).toEqual(11);
  })

  it('returns a truthy value', () => {
    expect(addFive(6)).toBeTruthy();
  })

  it('doesn`t return a falsy value', () => {
    expect(addFive(6)).not.toBeFalsy();
  })
})

describe('addFiveConditional', () => {
  it('adds five to even input', () => {
    expect(addFiveConditional(2)).toBe(7);
  })

  it('adds three to odd input', () => {
    expect(addFiveConditional(3)).toBe(6);
  })
})