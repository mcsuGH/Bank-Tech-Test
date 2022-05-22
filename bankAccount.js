const Transaction = require('./transaction')

class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = []
  }

  deposit(num, date) {
    this.balance += num
    this.history.push(new Transaction(date, num, null, this.balance))
  }

  withdraw(num, date) {
    this.balance -= num
    this.history.push(new Transaction(date, null, num, this.balance))
  }

  printStatement() {
    return "date || credit || debit || balance"
  }


}

module.exports = BankAccount;