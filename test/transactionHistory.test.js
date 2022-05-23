const TransactionHistory = require('../lib/transactionHistory');
const Transaction = require('../lib/transaction');

jest.mock('../lib/transaction');

describe('TransactionHistory', () => {
  beforeEach(() => {
    history = new TransactionHistory(Transaction);
  })

  describe('history', () => {
    it('should have an empty history to begin with', () => {
      expect(history.log).toEqual([]);
    });

    it('transaction history should be updated after a deposit', () => {
      history.recordDeposit(500);
      expect(history.log.length).toEqual(1);
    });
    
  });

})
