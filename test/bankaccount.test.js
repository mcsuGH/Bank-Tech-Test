const BankAccount = require('../lib/bankAccount');
const TransactionHistory = require('../lib/transactionHistory');
const Statement = require('../lib/statement');
const InputChecker = require('../lib/inputChecker');

jest.mock('../lib/transactionHistory');
jest.mock('../lib/statement');
jest.mock('../lib/inputChecker');

describe('BankAccount', () => {
  beforeEach(() => {
    TransactionHistory.mockClear();
    Statement.mockClear();
    InputChecker.mockClear();
    mockHistory = new TransactionHistory();
    mockStatement = new Statement();
    mockChecker = new InputChecker();
    bankAccount = new BankAccount(mockHistory, mockStatement, mockChecker);
  });

  describe('getBalance', () => {
    it('should let you check the balance in your bank account', () => {
      expect(bankAccount.getBalance()).toEqual(0);
    });
  });

  describe('deposit', () => {
    it('should let you deposit money into your bank account', () => {
      bankAccount.deposit(500);

      expect(bankAccount.getBalance()).toEqual(500);
    });

    it('should let you see the balance after deposit', () => {
      console.log = jest.fn();
      bankAccount.deposit(500);

      expect(console.log).toHaveBeenCalledWith('Balance: £500.00');
    });

    it('balance does not change if the input is not a number', () => {
      bankAccount.checker.checkNumber.mockImplementationOnce(() => {
        throw "Please enter a valid amount"
      })

      expect(() => {
        bankAccount.deposit('bob');
      }).toThrowError('Please enter a valid amount');
      expect(bankAccount.getBalance()).toEqual(0);
    });

    it('balance does not change if the number has more than 2 decimals', () => {
      bankAccount.checker.checkNumber.mockImplementationOnce(() => {
        throw "Please enter a valid amount"
      })

      expect(() => {
        bankAccount.deposit(500.123);
      }).toThrowError('Please enter a valid amount');
      expect(bankAccount.getBalance()).toEqual(0);
    });

    it('balance does not change if the input is negative', () => {
      bankAccount.checker.checkNumber.mockImplementationOnce(() => {
        throw "Please enter a valid amount"
      })

      expect(() => {
        bankAccount.deposit(-1);
      }).toThrowError('Please enter a valid amount');
      expect(bankAccount.getBalance()).toEqual(0);
    });
  });

  describe('withdraw', () => {
    it('should let you withdraw money from your bank account', () => {
      bankAccount.deposit(500);
      bankAccount.withdraw(100);

      expect(bankAccount.getBalance()).toEqual(400);
    });

    it('should let you see the balance after withdraw', () => {
      bankAccount.deposit(500);
      console.log = jest.fn();
      bankAccount.withdraw(200);

      expect(console.log).toHaveBeenCalledWith('Balance: £300.00');
    });

    it('balance does not change if the input is not a number', () => {
      bankAccount.deposit(500);
      bankAccount.checker.checkNumber.mockImplementationOnce(() => {
        throw "Please enter a valid amount"
      })

      expect(() => {
        bankAccount.withdraw('bob');
      }).toThrowError('Please enter a valid amount');
      expect(bankAccount.getBalance()).toEqual(500);
    });

    it('balance does not change if the input has more than 2 decimals', () => {
      bankAccount.deposit(500);
      bankAccount.checker.checkNumber.mockImplementationOnce(() => {
        throw "Please enter a valid amount"
      })

      expect(() => {
        bankAccount.withdraw(0.123);
      }).toThrowError('Please enter a valid amount');
      expect(bankAccount.getBalance()).toEqual(500);
    });

    it('balance does not change if the input is negative', () => {
      bankAccount.deposit(500);
      bankAccount.checker.checkNumber.mockImplementationOnce(() => {
        throw "Please enter a valid amount"
      })

      expect(() => {
        bankAccount.withdraw(-1);
      }).toThrowError('Please enter a valid amount');
      expect(bankAccount.getBalance()).toEqual(500);
    });

    it('balance does not change if there is a insufficient balance', () => {
      bankAccount.deposit(500);
      bankAccount.checker.checkNumber.mockImplementationOnce(() => {
        throw "Insufficient balance"
      })

      expect(() => {
        bankAccount.withdraw(501);
      }).toThrowError('Insufficient balance');
      expect(bankAccount.getBalance()).toEqual(500);
    });
  });

  describe('printStatement', () => {
    it('should print out the header when there are no transactions', () => {
      bankAccount.statement.print.mockImplementationOnce(() => {
        console.log('date || credit || debit || balance');
      })
      console.log = jest.fn();
      bankAccount.printStatement();

      expect(console.log).toHaveBeenCalledWith(
        'date || credit || debit || balance',
      );
    });

    it('should print with latest transactions shown first', () => {
      bankAccount.statement.print.mockImplementationOnce(() => {
        console.log(  
          'date || credit || debit || balance' +
          '\n22/05/2022 || || 200.00 || 300.00' +
          '\n22/05/2022 || 500.00 || || 500.00',
        );
      });
      console.log = jest.fn();
      bankAccount.printStatement();
      
      expect(console.log).toHaveBeenCalledWith(
        'date || credit || debit || balance' +
          '\n22/05/2022 || || 200.00 || 300.00' +
          '\n22/05/2022 || 500.00 || || 500.00'
      );
    });
  });
});
