const Transaction = require('../lib/transaction');
const MockDate = require('mockdate')

describe('Transaction', () => {
  it('should have the date the transaction was made', () => {
    MockDate.set('2022-05-22')
    const transaction = new Transaction(500, '', 1000);
    expect(transaction.date).toEqual('22/05/2022');
  });

  it('should know how much money was deposited', () => {
    const transaction = new Transaction(500, '', 1000);
    expect(transaction.credit).toEqual(500);
  });

  it('should know how much money was withdrawn', () => {
    const transaction = new Transaction('', 200, 1000);
    expect(transaction.debit).toEqual(200);
  });

  it('should know how the balance after the transaction', () => {
    const transaction = new Transaction('', 200, 1000);
    expect(transaction.balance).toEqual(1000);
  });
});
