class Statement {
  constructor () {
    this.header = "date || credit || debit || balance"
  }

  print () {
    console.log(this.header);
  }


}

module.exports = Statement;
