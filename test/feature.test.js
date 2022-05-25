const BankAccount = require('../lib/bankAccount');
const MockDate = require('mockdate')

describe("Feature Tests", () => {
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

  it('test to see all the inputChecker is working as intended with the app', () => {
    const bankAccount = new BankAccount();

    // Checking that inputChecker will raise error and not change balance when user input is invalid
    expect(() => {
      bankAccount.deposit(-100)
    }).toThrowError('Please enter a valid amount, the number cannot be negative');

    expect(() => {
      bankAccount.deposit(1.234);
    }).toThrowError('Please enter a valid amount, there must be at most 2 decimals');

    expect(() => {
      bankAccount.withdraw('bob');
    }).toThrowError('Please enter a valid amount, you must enter a number');

    expect(() => {
      bankAccount.withdraw(2501);
    }).toThrowError('Insufficient balance');

    MockDate.set('2023-01-10')
    bankAccount.deposit(1000)
    MockDate.set('2023-01-13')
    bankAccount.deposit(2000)
    MockDate.set('2023-01-14')
    bankAccount.withdraw(500)
    console.log = jest.fn();
    bankAccount.printStatement();

    // Checking that inputChecker has blocked the initial transactions and only taken the valid ones
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance" +
        "\n14/01/2023 || || 500.00 || 2500.00" +
        "\n13/01/2023 || 2000.00 || || 3000.00" +
        "\n10/01/2023 || 1000.00 || || 1000.00"
    );
  })
})
