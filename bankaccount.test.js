const BankAccount = require('./bankaccount');

describe("BankAccount", () => {
  describe("Balance", () => {
    it('should let you check the balance in your bank account', () => {
      bankAccount = new BankAccount();
      expect(bankAccount.balance()).toEqual(0);
    })
  })
})