const Transaction = require('./transaction');

class TransactionHistory {
  constructor(transaction = Transaction) {
    this.log = []
    this.transaction = transaction
  }

  recordDeposit(num) {
    this.log.unshift(
      new this.transaction(
        `${Number(num).toFixed(2)} `,
        '',
        Number(this.balance).toFixed(2)
      )
    );
  }

}

module.exports = TransactionHistory;
