const axios = require('axios');
const myFunctions = require('./index');
const myMapFn = myFunctions.myMapFn;

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