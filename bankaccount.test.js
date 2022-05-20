const BankAccount = require('./bankaccount');

describe("BankAccount", () => {
  describe("Balance", () => {
    it('should let you check the balance in your bank account', () => {
      bankAccount = new BankAccount();
      expect(bankAccount.balance).toEqual(0);
    })
  })

  describe("Deposit", () => {
    it('should let you deposit money into your bank account', () => {
      bankAccount = new BankAccount();
      bankAccount.deposit(500);
      expect(bankAccount.balance).toEqual(500);
    })
  })
})