const Transaction = require('./transaction');
const Statement = require('./statement');
const InputChecker = require('./inputChecker');

class BankAccount {
  constructor(transaction = Transaction, statement = new Statement(), checker = new InputChecker()) {
    this.balance = 0;
    this.history = [];
    this.transaction = transaction;
    this.statement = statement;
    this.checker = checker;
  }

  getBalance() {
    console.log(`Balance: £${this.balance.toFixed(2)}`);
  }

  deposit(num) {
    this.checker.checkNumber(num);
    this.balance += num;
    this.#recordDeposit(num);
    this.getBalance();
  }

  withdraw(num) {
    this.checker.checkNumber(num);
    this.checker.checkBalance(num, this.balance);
    this.balance -= num;
    this.#recordWithdraw(num);
    this.getBalance();
  }

  printStatement() {
    this.statement.print(this.history);
  }

  // private methods

  #recordDeposit(num) {
    this.history.unshift(
      new this.transaction(
        `${Number(num).toFixed(2)} `,
        '',
        Number(this.balance).toFixed(2)
      )
    );
  }

  #recordWithdraw(num) {
    this.history.unshift(
      new this.transaction(
        '',
        `${Number(num).toFixed(2)} `,
        Number(this.balance).toFixed(2),
      ),
    );
  }
}

module.exports = BankAccount;
