class InputChecker {
  
  checkNumber(num) {
    if (typeof num !== 'number') {
      throw 'Please enter a valid amount';
    }
  }

}

module.exports = InputChecker;
