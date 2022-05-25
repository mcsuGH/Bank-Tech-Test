# Bank Tech Test
For a practice tech test, I have been tasked to create a Bank Account system that allows people to deposit money, withdraw money and print their bank statement.\
\
The program will be ran in Node but will not need to have a Command Line Interface. The focus of the project is to practice OO design and TDD skills and the project will be completed solo with self-reviews done to reflect and improve upon my own code.

## Instructions
Clone this repository using `git clone https://github.com/mcsuGH/Bank-Tech-Test.git`\
\
Run `npm install` to install any dependencies then run `npm run test` to run the tests for the code which will also give you the code coverage.\
\
To use the program, whilst in the main directory in the terminal, run `node` to open up Node, then use the command `const BankAccount = require('./lib/bankAccount')`. Create a new account using `const account = new BankAccount();` then use the functions `account.deposit(num)` and `account.withdraw(num)` with `num` being the amount in GBP (entering `1` is equivalent to £1). After finishing your transactions, use the command `account.printStatement()` to display your bank statement inside your terminal.\
\
Example of my code running:
![Screenshot](https://i.imgur.com/20e3gUN.png)

## Specification
### Requirements
* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria
**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## User Stories from Specification
```
As a Client,
So that my money can be stored safely,
I would like to be able to deposit my money

As a Client,
So that I can use my money,
I would like to be able to withdraw my money

As a Client,
So that I can check the money in my account,
I would like to be able to print a bank statement 

As a Client,
So that I can see what happened to my money,
The statement should include the dates of when deposits and withdrawals were made aswell as the balance remaining

As a Client,
So that I can easily check the latest updates on my account,
The statement should show the most recent actions first

Possible Edge Cases:
As the Bank,
So that my customers do not overdraft,
I would like the customers to not be able to withdraw more money than they have

As the Bank,
So that my customers have valid balances,
I would like the customers to only be able to put in valid user inputs
```

## Approach
![Screenshot](https://i.imgur.com/MeuTbyy.png)
![Screenshot](https://i.imgur.com/ji9JrgU.png)
As can be seen above, there is 100% test coverage and the program works according to the specification above with all the user stories satisfied. I approached this task following a TDD process, always writing tests first and then writing code to pass those tests to ensure high test coverage. I followed the SRP by separating my methods when I realised they were responsible for doing more than one thing (such as splitting my deposit method to the current deposit method aswell as a new method used to record the transaction). I applied SRP also to my classes (made a TransactionHistory class to hold Transactions, and also made a InputChecker class to check for invalid user inputs).\
\
I initially started with writing all the code inside the same code file but it became apparent early on from writing tests that a Transaction class would be needed so I ended up with two classes - Bank Account class and Transaction class. I considered creating a Statement class too to print out the bank statements but initially I thought it didn't seem necessary as the method used to print it still seemed concise and there was no need for any variables for printing out the statement so there didn't seem to be a need for splitting it off into a new class. After self reviewing my code, I decided to make the Statement class after all to abide by SRP better.\
\
I considered a few edge cases that were not part of the spec such as not allowing overdrafts (which led to the introduction of a balance check when withdrawing money) and also to check that when depositing and withdrawing, the amount would be a valid monetary amount. I raised errors according to these situations so that accounts can still keep working as per normal even after a action that would raise an error - previously, these actions could break the program (such as when entering a string in place of the amount, the balance would become NaN, or Not a Number). These edge cases have both been tested and accounted for in my program as can be seen above in the pictures.\
\
The Transaction class I originally made ended up being redundant after making the TransactionHistory class and as a result, I removed the Transaction class and instead just created objects within the TransactionHistory class similar to what Transaction was. This allowed me to reduce the complexity of the program and reduce the number of classes from 5 down to 4.\
\
I used Jest for testing, Prettier to format my code and attempted to use ESLint as a linter - however, there would be many clashes between ESLint and Prettier (for example, ESLint would raise problems for using `""` instead of `''`, but Prettier would use `""`). ESLint also would raise problems with a few other issues that would end up breaking the tests/code (such as using `!==` instead of `!=` for my inequality when checking decimal places). As a result, I opted against using ESLint to lint my code and just stuck with using Prettier to format it instead.

## Possible Future Actions/Improvements


## Resources used
```
https://stackoverflow.com/questions/49096093/how-do-i-test-a-jest-console-log
https://jestjs.io/docs/es6-class-mocks
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
https://www.npmjs.com/package/mockdate
```
used the above to mock console.log\
used the above to mock Transaction class\
used the above to check for valid input on numbers\
used the above to mock date on test