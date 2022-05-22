const Transaction = require('./transaction')

class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = []
  }

  deposit(num, date) {
    this.balance += num
    this.history.push(new Transaction(date, num, "", this.balance))
  }

  withdraw(num, date) {
    this.balance -= num
    this.history.push(new Transaction(date, "", num, this.balance))
  }

  printStatement() {
    let string = "date || credit || debit || balance"
    let newestFirst = this.history.reverse()
    newestFirst.forEach((transaction) => {
      string += `\n${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`
    })
    console.log(string)
  }
}

module.exports = BankAccount;