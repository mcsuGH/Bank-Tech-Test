const TransactionHistory = require('../lib/transactionHistory');

describe('TransactionHistory', () => {
  beforeEach(() => {
    history = new TransactionHistory();
  })

  describe('history', () => {
    it('should have an empty history to begin with', () => {
      expect(history.history).toEqual([]);
    });
  });

})
