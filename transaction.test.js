const Transaction = require('./transaction')

describe("Transaction", () => {
  it("should have the date the transaction was made", () => {
    transaction = new Transaction("22-05-2022", 500, null);
    expect(transaction.date).toEqual("22-05-2022");
  })

  it("should know how much money was deposited", () => {
    transaction = new Transaction("22-05-2022", 500, null);
    expect(transaction.credit).toEqual(500);
  })
  
  it("should know how much money was withdrawn", () => {
    transaction = new Transaction("22-05-2022", null, 200);
    expect(transaction.debit).toEqual(200);
  })

  it("should know how the balance after the transaction", () => {
    transaction = new Transaction("22-05-2022", null, 200, 1000);
    expect(transaction.balance).toEqual(1000);
  })
})