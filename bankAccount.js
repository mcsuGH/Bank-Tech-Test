const Transaction = require('./transaction')

class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = []
  }

  deposit(num, date) {
    this.balance += num
    this.#recordDeposit(num, date)
  }

  withdraw(num, date) {
    this.balance -= num
    this.#recordWithdraw(num, date)
  }

  printStatement() {
    let statement = "date || credit || debit || balance"
    this.history.forEach((transaction) => {
      statement += `\n${transaction.date} || ${transaction.credit}|| ${transaction.debit}|| ${transaction.balance}`
    })
    console.log(statement)
  }

  // private methods

  #recordDeposit(num, date) {
    this.history.unshift(new Transaction(date, Number(num).toFixed(2) + " ", "", Number(this.balance).toFixed(2)))
  }

  #recordWithdraw(num, date) {
    this.history.unshift(new Transaction(date, "", Number(num).toFixed(2) + " ", Number(this.balance).toFixed(2)))
  }
}

module.exports = BankAccount;