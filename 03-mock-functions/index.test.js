const axios = require('axios');
const myFunctions = require('./index');
const myMapFn = myFunctions.myMapFn;
const counterReducer = myFunctions.counterReducer;

//create a mock function
const mockAdder = jest.fn(x => x + 1);

describe('myMapFn', () => {
  it('transforms an array of numbers', () => {
    const numbers = [1, 2, 3];
    const transformedArray = myMapFn(numbers, mockAdder);

    expect(transformedArray).toEqual([2, 3, 4]);

    expect(mockAdder).toHaveBeenCalledTimes(3);
    expect(mockAdder.mock.calls.length).toBe(3);

    expect(mockAdder.mock.calls[0][0]).toBe(1);
    expect(mockAdder.mock.calls[1][0]).toBe(2);
    expect(mockAdder.mock.calls[2][0]).toBe(3);

    expect(mockAdder.mock.results).toHaveLength(3);
    expect(mockAdder.mock.results[0].value).toBe(2);
    expect(mockAdder.mock.results[1].value).toBe(3);
    expect(mockAdder.mock.results[2].value).toBe(4);
  })
})

//provide mock return value for a function
const dummyFunction = jest.fn();

describe('dummyFunction', () => {
  dummyFunction.mockReturnValue({name: 'david'});
  expect(dummyFunction().name).toBe('david');
})

const dummyFunctionTwo = jest.fn();

describe('dummyFunctionTwo', () => {
  dummyFunctionTwo.mockReturnValue('hello');
  const greeting = dummyFunctionTwo();

  expect(dummyFunctionTwo).toHaveBeenCalledTimes(1);
  expect(greeting).toMatch(/hello/);
})

//mock a module
jest.mock('axios');

describe('a dummy api call', () => {
  const response = {name: 'david'};
  axios.get.mockResolvedValue({data: response});

  it('returns the dummy data', () => {
    return axios.get('https://url.com').then(response => {
      expect(response.data.name).toBe('david');
    })
  })
})

//mock function implementation
const mockGreeter = jest.fn().mockImplementation((name = 'world') => `Hello ${name}`);

describe('mockGreeter', () => {
  test('calling mockGreeter with default name value', () => {
    const message = mockGreeter();
    expect(mockGreeter.mock.calls.length).toBe(1);
    expect(mockGreeter.mock.calls[0][0]).toBe(undefined);
    expect(message).toMatch(/hello world/i);
  })

  test('calling mockGreeter with defined name', () => {
    mockGreeter.mockClear();
    const message = mockGreeter('David');
    expect(mockGreeter).toHaveBeenCalledTimes(1);
    expect(mockGreeter.mock.calls[0][0]).toMatch(/david/i);
    expect(mockGreeter).toHaveBeenCalledWith('David');
    expect(mockGreeter.mock.results[0].value).toBe('Hello David');
    expect(mockGreeter).toHaveReturnedWith('Hello David');
  })
})

describe('counter reducer', () => {
  const mockActionCreator = jest.fn();

  it('returns 0 if called with two empty object', () => {
    mockActionCreator.mockReturnValueOnce({});
    expect(counterReducer(mockActionCreator())).toBe(0);
    expect(mockActionCreator.mock.calls.length).toBe(1);
  })

  it('returns the right number when called with action.type increment', () => {
    mockActionCreator.mockReturnValueOnce({type: 'increment'});
    expect(counterReducer(mockActionCreator(), 5)).toBe(6);
    expect(mockActionCreator.mock.calls).toHaveLength(2);
  })

  it('returns the right number when called with action.type decrement', () => {
    mockActionCreator.mockReturnValueOnce({type: 'decrement'});
    expect(counterReducer(mockActionCreator())).toBe(-1);
    expect(mockActionCreator.mock.calls.length).toBeLessThan(4);
    expect(mockActionCreator.mock.calls.length).toBeGreaterThan(2);
  })
})