const InputChecker = require('../lib/inputChecker');

describe('InputChecker', () => {
  beforeEach(() => {
    checker = new InputChecker()
  })

  it('raises an error if the number is not a number', () => {
    expect(() => {
      checker.checkNumber('bob');
    }).toThrowError('Please enter a valid amount');
  });
  
})
