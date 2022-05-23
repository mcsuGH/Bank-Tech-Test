const BankAccount = require('./bankAccount');

describe("Feature Test", () => {
  it('test to see all the functions work as intended', () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000, '10/01/2023')
    bankAccount.deposit(2000, '13/01/2023')
    bankAccount.withdraw(500, '14/01/2023')
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
