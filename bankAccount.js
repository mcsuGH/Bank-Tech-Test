class BankAccount {
  constructor() {
    this.balance = 0
  }

  deposit(num) {
    this.balance += num
  }

  withdraw(num) {
    this.balance -= num
  }


}

module.exports = BankAccount;