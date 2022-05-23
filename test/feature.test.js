const BankAccount = require('../lib/bankAccount');
const MockDate = require('mockdate')

describe("Feature Test", () => {
  it('test to see all the functions work as intended', () => {
    const bankAccount = new BankAccount();
    MockDate.set('2023-01-10')
    bankAccount.deposit(1000)
    MockDate.set('2023-01-13')
    bankAccount.deposit(2000)
    MockDate.set('2023-01-14')
    bankAccount.withdraw(500)
    console.log = jest.fn();
    bankAccount.printStatement();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance" +
        "\n14/01/2023 || || 500.00 || 2500.00" +
        "\n13/01/2023 || 2000.00 || || 3000.00" +
        "\n10/01/2023 || 1000.00 || || 1000.00"
    );
  })
})
