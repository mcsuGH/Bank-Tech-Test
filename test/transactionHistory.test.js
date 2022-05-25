const MockDate = require('mockdate')

const TransactionHistory = require('../lib/transactionHistory');

describe('TransactionHistory', () => {
  beforeEach(() => {
    history = new TransactionHistory();
  })

  describe('recordDeposit', () => {
    it('deposits should have a date', () => {
      MockDate.set('2022-05-22')
      history.recordDeposit(500, 500);

      expect(history.getLog()[0].date).toEqual('22/05/2022');
    });

    it('deposits should have a credit', () => {
      history.recordDeposit(500, 500);

      expect(history.getLog()[0].credit).toEqual('500.00 ');
    });

    it('deposits should have a empty string for debit', () => {
      history.recordDeposit(500, 500);

      expect(history.getLog()[0].debit).toEqual('');
    });

    it('deposits should have the current balance', () => {
      history.recordDeposit(500, 500);

      expect(history.getLog()[0].balance).toEqual('500.00');
    });
  })

  describe('recordWithdraw', () => {
    it('withdraws should have a date', () => {
      MockDate.set('2022-05-22')
      history.recordWithdraw(500, 0);

      expect(history.getLog()[0].date).toEqual('22/05/2022');
    });

    it('withdraws should have a empty string for credit', () => {
      history.recordWithdraw(500, 0);

      expect(history.getLog()[0].credit).toEqual('');
    });

    it('withdraws should have a debit', () => {
      history.recordWithdraw(500, 0);

      expect(history.getLog()[0].debit).toEqual('500.00 ');
    });

    it('deposits should have the current balance', () => {
      history.recordDeposit(500, 0);

      expect(history.getLog()[0].balance).toEqual('0.00');
    });
  })

  describe('history', () => {
    it('should have an empty history to begin with', () => {
      expect(history.getLog()).toEqual([]);
    });

    it('transaction history should be updated after a deposit', () => {
      history.recordDeposit(500, 500);

      expect(history.getLog().length).toEqual(1);
    });

    it('transaction history should be updated after a withdraw', () => {
      history.recordWithdraw(500, 0);

      expect(history.log.length).toEqual(1);
    });

    it('transaction history should show latest transactions first', () => {
      MockDate.set('2022-05-22')
      history.recordDeposit(500, 500);
      history.recordWithdraw(500, 0);

      expect(history.getLog()[0]).toEqual({
        date: '22/05/2022',
        credit: '',
        debit: '500.00 ',
        balance: '0.00',
      });
    });
  });

})
