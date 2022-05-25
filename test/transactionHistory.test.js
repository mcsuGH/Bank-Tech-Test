const TransactionHistory = require('../lib/transactionHistory');
const Transaction = require('../lib/transaction');

jest.mock('../lib/transaction');

describe('TransactionHistory', () => {
  beforeEach(() => {
    Transaction.mockClear();
    history = new TransactionHistory(Transaction);
  })

  describe('history', () => {
    it('should have an empty history to begin with', () => {
      expect(history.getLog()).toEqual([]);
    });

    it('transaction history should be updated after a deposit', () => {
      history.recordDeposit(500);

      expect(history.log.length).toEqual(1);
    });

    it('transaction history should be updated after a withdraw', () => {
      history.recordWithdraw(500);

      expect(history.log.length).toEqual(1);
    });

    it('transaction history should show latest transactions first', () => {
      Transaction.mockImplementationOnce(() => {
        return {
          date: '23/05/2022',
          credit: 500,
          debit: '',
          balance: 500,
        }
      })
      history.recordDeposit(500);
      Transaction.mockImplementationOnce(() => {
        return {
          date: '23/05/2022',
          credit: '',
          debit: 500,
          balance: 0,
        }
      })
      history.recordWithdraw(500);
      
      expect(history.log[0]).toEqual({
        date: '23/05/2022',
        credit: '',
        debit: 500,
        balance: 0,
      });
    });
    
  });

})
