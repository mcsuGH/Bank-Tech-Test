const TransactionHistory = require('./transactionHistory');
const Statement = require('./statement');
const InputChecker = require('./inputChecker');

class BankAccount {
  constructor(history = new TransactionHistory(), statement = new Statement(), checker = new InputChecker()) {
    this.balance = 0;
    this.history = history;
    this.statement = statement;
    this.checker = checker;
  }

  deposit(num) {
    this.checker.checkNumber(num);
    this.balance += num;
    this.history.recordDeposit(num, this.balance);
    this.getBalance();
  }

  withdraw(num) {
    this.checker.checkNumber(num);
    this.checker.checkBalance(num, this.balance);
    this.balance -= num;
    this.history.recordWithdraw(num, this.balance);
    this.getBalance();
  }

  printStatement() {
    this.statement.print(this.history.log);
  }

  // private methods

  getBalance() {
    console.log(`Balance: £${this.balance.toFixed(2)}`);
  }
}

module.exports = BankAccount;
