const moment = require('moment');

class TransactionHistory {
  constructor() {
    this.log = [];
  }

  getLog() {
    return this.log;
  }

  recordDeposit(num, balance) {
    this.log.unshift({
      date: moment().format('DD/MM/YYYY'),
      credit: `${Number(num).toFixed(2)} `,
      debit: '',
      balance: Number(balance).toFixed(2),
    });
  };

  recordWithdraw(num, balance) {
    this.log.unshift({
      date: moment().format('DD/MM/YYYY'),
      credit: '',
      debit: `${Number(num).toFixed(2)} `,
      balance: Number(balance).toFixed(2),
    });
  };
};

module.exports = TransactionHistory;
