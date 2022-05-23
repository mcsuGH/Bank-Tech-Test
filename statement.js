class Statement {
  constructor () {
    this.header = "date || credit || debit || balance"
  }

  print (history = []) {
    let statement = this.header;
    history.forEach((transaction) => {
      statement += `\n${transaction.date} || ${transaction.credit}|| ${transaction.debit}|| ${transaction.balance}`;
    })
    console.log(statement);
  }
}

module.exports = Statement;
