const Transaction = require('./transaction')

class BankAccount {
  constructor(transaction = Transaction) {
    this.balance = 0;
    this.history = [];
    this.transaction = transaction;
  }

  deposit(num, date) {
    this.#checkErrors(num)
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
    this.history.unshift(new this.transaction(date, Number(num).toFixed(2) + " ", "", Number(this.balance).toFixed(2)))
  }

  #recordWithdraw(num, date) {
    this.history.unshift(new this.transaction(date, "", Number(num).toFixed(2) + " ", Number(this.balance).toFixed(2)))
  }

  #checkErrors(num) {
    if (typeof num != "number") {
      throw "Please enter a valid amount"
    } else if (num.toFixed(2) != num) {
      throw "Please enter a valid amount"
    } else if (num < 0) {
      throw "Please enter a valid amount"
    }
  }
}

module.exports = BankAccount;