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
    console.log("date || credit || debit || balance")
    this.history.forEach((transaction) => {
      console.log(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`)
    })
  }


}

module.exports = BankAccount;