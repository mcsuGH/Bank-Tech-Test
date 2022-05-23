const InputChecker = require('../lib/inputChecker');

describe('InputChecker', () => {
  beforeEach(() => {
    checker = new InputChecker()
  })

  describe('checkNumber', () => {
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

  describe('checkBalance', () => {
    it('raises an error if number exceeds balance', () => {
      expect(() => {
        checker.checkBalance(101, 100);
      }).toThrowError('Insufficient balance');
    })
  })

})
