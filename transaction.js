class Transaction {
  constructor(date, deposit, withdraw, balance) {
    this.date = date;
    this.credit = deposit;
    this.debit = withdraw;
    this.balance = balance;
  }
}

module.exports = Transaction;
