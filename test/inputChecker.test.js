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

  it('raises an error if the number has too many decimals', () => {
    expect(() => {
      checker.checkNumber(1.234);
    }).toThrowError('Please enter a valid amount');
  });

  it('raises an error if the number is negative', () => {
    expect(() => {
      checker.checkNumber(-1);
    }).toThrowError('Please enter a valid amount');
  });
})
