const dayOneMethods = require('./index');
const addFive = dayOneMethods.addFive;
const addFiveConditional = dayOneMethods.addFiveConditional;
const sayHi = dayOneMethods.sayHi;
const pushToArray = dayOneMethods.pushToArray;

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

  it('returns a value', () => {
    expect(addFiveConditional(2)).not.toBeUndefined();
  })
})

describe('sayHi', () => {
  it('greets a persons with his/her name, if name is known', () => {
    expect(sayHi('David')).toMatch(/hi david!/i)
  })

  it('greets a person with unknown name as "stranger"', () => {
    expect(sayHi()).toMatch(/stranger/i);
  })
})

describe('pushToArray', () => {
  it('adds items to an array and returns the right length', () => {
    const myArray = [];
    pushToArray(myArray, 1);
    pushToArray(myArray, 2);
    pushToArray(myArray, 3);

    expect(myArray).toHaveLength(3);
  })

  it('adds items to an array and returns the right members', () => {
    const myArray = [];
    pushToArray(myArray, 1);
    pushToArray(myArray, 2);
    pushToArray(myArray, 3);

    expect(myArray).toEqual([1, 2, 3]);
  })

  it('adds items to an array and contains the right members', () => {
    const myArray = [];
    pushToArray(myArray, 'bread');
    pushToArray(myArray, 'salad');
    pushToArray(myArray, 'pasta');

    expect(myArray).toContain('bread');
    expect(myArray).toContain('pasta');
    expect(myArray).toContain('salad');
  })
})