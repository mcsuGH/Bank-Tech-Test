const BankAccount = require('./bankaccount');

describe("BankAccount", () => {
  describe("balance", () => {
    it('should let you check the balance in your bank account', () => {
      bankAccount = new BankAccount();
      expect(bankAccount.balance).toEqual(0);
    })
  })

  describe("history", () => {
    it('should let you check the transaction history', () => {
      bankAccount = new BankAccount();
      expect(bankAccount.history).toEqual([]);
    })

    it('transaction history should be updated after a deposit', () => {
      bankAccount = new BankAccount();
      bankAccount.deposit(500, '22-05-2022');
      expect(bankAccount.history.length).toEqual(1);
    })

    it('transaction history should be updated after a withdraw', () => {
      bankAccount = new BankAccount();
      bankAccount.deposit(500, '22-05-2022');
      bankAccount.withdraw(500, '22-05-2022');
      expect(bankAccount.history.length).toEqual(2);
    })
  })

  describe("deposit", () => {
    it('should let you deposit money into your bank account', () => {
      bankAccount = new BankAccount();
      bankAccount.deposit(500, '22-05-2022');
      expect(bankAccount.balance).toEqual(500);
    })
  })

  describe("withdraw", () => {
    it('should let you withdraw money from your bank account', () => {
      bankAccount = new BankAccount();
      bankAccount.deposit(500, '22-05-2022');
      bankAccount.withdraw(100, '22-05-2022');
      expect(bankAccount.balance).toEqual(400);
    })
  })

  describe("printStatement", () => {
    it('should print out a bank statement', () => {
      bankAccount = new BankAccount();
      expect(bankAccount.printStatement()).toMatch("date || credit || debit || balance")
    })
  })
})