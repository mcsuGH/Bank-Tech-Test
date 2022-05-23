const Transaction = require('./transaction');

class TransactionHistory {
  constructor(transaction = Transaction) {
    this.log = []
    this.transaction = transaction
  }

  getLog() {
    return this.log
  }

  recordDeposit(num, balance) {
    this.log.unshift(
      new this.transaction(
        `${Number(num).toFixed(2)} `,
        '',
        Number(balance).toFixed(2)
      )
    );
  }

  recordWithdraw(num, balance) {
    this.log.unshift(
      new this.transaction(
        '',
        `${Number(num).toFixed(2)} `,
        Number(balance).toFixed(2),
      ),
    );
  }
}

module.exports = TransactionHistory;
