const Transaction = require('./transaction');
const Statement = require('./statement');

class BankAccount {
  constructor(transaction = Transaction, statement = new Statement()) {
    this.balance = 0;
    this.history = [];
    this.transaction = transaction;
    this.statement = statement;
  }

  getBalance() {
    console.log(`Balance: £${this.balance.toFixed(2)}`);
  }

  deposit(num, date) {
    this.#checkNumber(num);
    this.balance += num;
    this.#recordDeposit(num, date);
    this.getBalance();
  }

  withdraw(num, date) {
    this.#checkErrors(num);
    this.balance -= num;
    this.#recordWithdraw(num, date);
    this.getBalance();
  }

  printStatement() {
    this.statement.print(this.history);
  }

  // private methods

  #recordDeposit(num, date) {
    this.history.unshift(
      new this.transaction(
        date,
        `${Number(num).toFixed(2)} `,
        '',
        Number(this.balance).toFixed(2)
      )
    );
  }

  #recordWithdraw(num, date) {
    this.history.unshift(
      new this.transaction(
        date,
        '',
        `${Number(num).toFixed(2)} `,
        Number(this.balance).toFixed(2),
      ),
    );
  }

  #checkErrors(num) {
    this.#checkNumber(num);
    this.#checkBalance(num);
  }

  #checkNumber(num) {
    if (typeof num !== 'number') {
      throw 'Please enter a valid amount';
    } else if (num.toFixed(2) != num) {
      throw 'Please enter a valid amount';
    } else if (num < 0) {
      throw 'Please enter a valid amount';
    }
  }

  #checkBalance(num) {
    if (num > this.balance) {
      throw 'Insufficient balance';
    }
  }
}

module.exports = BankAccount;