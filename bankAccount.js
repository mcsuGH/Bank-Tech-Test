const Transaction = require('./transaction')

class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = []
  }

  deposit(num, date) {
    this.balance += num
    this.history.unshift(new Transaction(date, Number(num).toFixed(2), "", Number(this.balance).toFixed(2)))
  }

  withdraw(num, date) {
    this.balance -= num
    this.history.unshift(new Transaction(date, "", Number(num).toFixed(2), Number(this.balance).toFixed(2)))
  }

  printStatement() {
    let string = "date || credit || debit || balance"
    this.history.forEach((transaction) => {
      string += `\n${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`
    })
    console.log(string)
  }
}

module.exports = BankAccount;