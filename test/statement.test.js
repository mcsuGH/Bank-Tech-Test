const Statement = require('../lib/statement');

describe('Statement', () => {
  beforeEach(() => {
    statement = new Statement();
    mockTransaction = {
      date: '22/05/2022',
      credit: '500.00 ',
      debit: '',
      balance: '500.00',
    };
    mockTransaction2 = {
      date: '22/05/2022',
      credit: '',
      debit: '200.00 ',
      balance: '300.00',
    };
    array = [mockTransaction2, mockTransaction];
  })

  it('should print only the header when there are no transactions', () => {
    console.log = jest.fn();
    statement.print();

    expect(console.log).toHaveBeenCalledWith(
      'date || credit || debit || balance'
    );
  })

  it('should print out transactions formatted to 2 decimal places', () => {
    console.log = jest.fn();
    statement.print(array);
    
    expect(console.log).toHaveBeenCalledWith(
      'date || credit || debit || balance' +
        '\n22/05/2022 || || 200.00 || 300.00' +
        '\n22/05/2022 || 500.00 || || 500.00'
    );
  })
})
