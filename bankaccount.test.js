const BankAccount = require('./bankaccount');
const Transaction = require('./transaction');
jest.mock('./transaction');

describe("BankAccount", () => {
  beforeEach(() => {
    Transaction.mockClear();
    bankAccount = new BankAccount();
  })

  describe("balance", () => {
    it('should let you check the balance in your bank account', () => {
      expect(bankAccount.balance).toEqual(0);
    })
  })

  describe("history", () => {
    it('should let you check the transaction history', () => {
      expect(bankAccount.history).toEqual([]);
    })

    it('transaction history should be updated after a deposit', () => {
      bankAccount.deposit(500, '22/05/2022');
      expect(bankAccount.history.length).toEqual(1);
    })

    it('transaction history should be updated after a withdraw', () => {
      bankAccount.deposit(500, '22/05/2022');
      bankAccount.withdraw(500, '22/05/2022');
      expect(bankAccount.history.length).toEqual(2);
    })
  })

  describe("deposit", () => {
    it('should let you deposit money into your bank account', () => {
      bankAccount.deposit(500, '22/05/2022');
      expect(bankAccount.balance).toEqual(500);
    })

    it('raises an error if the number is not a number', () => {
      expect(() => {
        bankAccount.deposit('bob', '22/05/2022');
      }).toThrowError("Please enter a valid amount")
      expect(bankAccount.balance).toEqual(0);
    })

    it('raises an error if the number has too many decimals', () => {
      expect(() => {
        bankAccount.deposit(500.123, '22/05/2022');
      }).toThrowError("Please enter a valid amount")
      expect(bankAccount.balance).toEqual(0);
    })

    it('raises an error if the number is less than 0', () => {
      expect(() => {
        bankAccount.deposit(-1, '22/05/2022');
      }).toThrowError("Please enter a valid amount")
      expect(bankAccount.balance).toEqual(0);
    })
  })

  describe("withdraw", () => {
    it('should let you withdraw money from your bank account', () => {
      bankAccount.deposit(500, '22/05/2022');
      bankAccount.withdraw(100, '22/05/2022');
      expect(bankAccount.balance).toEqual(400);
    })

    it('raises an error if the number is not a number', () => {
      bankAccount.deposit(500, '22/05/2022');
      expect(() => {
        bankAccount.withdraw('bob', '22/05/2022');
      }).toThrowError("Please enter a valid amount")
      expect(bankAccount.balance).toEqual(500);
    })

    it('raises an error if the number has too many decimals', () => {
      bankAccount.deposit(500, '22/05/2022');
      expect(() => {
        bankAccount.withdraw(0.123, '22/05/2022');
      }).toThrowError("Please enter a valid amount")
      expect(bankAccount.balance).toEqual(500);
    })

    it('raises an error if the number is less than 0', () => {
      bankAccount.deposit(500, '22/05/2022');
      expect(() => {
        bankAccount.withdraw(-1, '22/05/2022');
      }).toThrowError("Please enter a valid amount")
      expect(bankAccount.balance).toEqual(500);
    })

    it('raises an error if the number is greater than the current balance', () => {
      bankAccount.deposit(500, '22/05/2022');
      expect(() => {
        bankAccount.withdraw(501, '22/05/2022');
      }).toThrowError("Insufficient balance")
      expect(bankAccount.balance).toEqual(500);
    })
  })

  describe("printStatement", () => {
    it('should print out a bank statement with just the header when there are no transactions', () => {
      console.log = jest.fn();
      bankAccount.printStatement();
      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance')
    })

    it('should print out a bank statement with transactions with the latest transactions shown first and 2 decimals shown for numbers', () => {
      Transaction.mockImplementationOnce(() => {
        return {
          date: '22/05/2022',
          credit: "500.00 ",
          debit: "",
          balance: "500.00",
        }
      })
      bankAccount.deposit(500, '22/05/2022');
      Transaction.mockImplementationOnce(() => {
        return {
          date: '22/05/2022',
          credit: "",
          debit: "200.00 ",
          balance: "300.00",
        }
      })
      bankAccount.withdraw(200, '22/05/2022');
      console.log = jest.fn();
      bankAccount.printStatement();
      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance' + '\n22/05/2022 || || 200.00 || 300.00' + '\n22/05/2022 || 500.00 || || 500.00')
    })
  })
})