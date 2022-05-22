const Transaction = require('./transaction')

describe("Transaction", () => {
  it("should have the date the transaction was made", () => {
    transaction = new Transaction("22-05-2022");
    expect(transaction.date).toEqual("22-05-2022");
  })
})