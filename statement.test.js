const Statement = require('./statement');

describe('Statement', () => {
  beforeEach(() => {
    statement = new Statement();
  })

  it('should print only the header when there are no transactions', () => {
    console.log = jest.fn();
    statement.print();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
  })
})