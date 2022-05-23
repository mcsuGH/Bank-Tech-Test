class InputChecker {

  checkNumber(num) {
    if (typeof num !== 'number') {
      throw 'Please enter a valid amount, you must enter a number';
    } else if (num.toFixed(2) != num) {
      throw 'Please enter a valid amount, there must be at most 2 decimals';
    } else if (num < 0) {
      throw 'Please enter a valid amount, the number cannot be negative';
    }
  }

  checkBalance(num, balance) {
    if (num > balance) {
      throw 'Insufficient balance';
    }
  }
}

module.exports = InputChecker;
