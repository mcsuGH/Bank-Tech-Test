const moment = require('moment');

class Transaction {
  constructor(deposit, withdraw, balance, date = moment().format('DD/MM/YYYY')) {
    this.date = date;
    this.credit = deposit;
    this.debit = withdraw;
    this.balance = balance;
  }

}

module.exports = Transaction;
