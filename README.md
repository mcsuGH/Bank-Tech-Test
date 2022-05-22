# Bank Tech Test
For a practice tech test, I have been tasked to create a Bank Account system that allows people to deposit money, withdraw money and print their bank statement.\
\
The program will be ran in Node but will not need to have a Command Line Interface. The focus of the project is to practice OO design and TDD skills and the project will be completed solo with self-reviews done to reflect and improve upon my own code.

## Instructions
Clone this repository using `git clone https://github.com/mcsuGH/Bank-Tech-Test.git`\
\
Run `npm install` to install any dependencies then run `jest` to run the tests for the code. To check for test coverage, run the command `jest --coverage`.\
\
To use the program, whilst in the main directory in the terminal, run `node` to open up Node, then use the command `const BankAccount = require('./bankAccount')`. Create a new account using `account = new BankAccount();` then use the functions `deposit(num, date)` and `withdraw(num, date)` with `num` being the amount and date being a string in the format DD/MM/YYYY such as `'22/05/2022'`. After finishing your transactions, use the command `printStatement()` to display your bank statement inside your terminal.

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
![Screenshot](https://i.imgur.com/ItsUeyz.png)
![Screenshot](https://i.imgur.com/8NC0R0C.png)
As can be seen above, there is 100% test coverage and the program works according to the specification above with all the user stories satisfied. I approached this task following a TDD process, always writing tests first and then writing code to pass those tests to ensure high test coverage. I followed the SRP by separating my methods when I realised they were responsible for doing more than one thing (such as splitting my deposit method to the current deposit method aswell as a new method used to record the transaction).\
\
I initially started with writing all the code inside the same code file but it became apparent early on from writing tests that a Transaction class would be needed so I ended up with two classes - Bank Account class and Transaction class. I considered creating a Statement class too to print out the bank statements but it didn't seem necessary as the method used to print it still seemed concise and there was no need for any variables for printing out the statement so there didn't seem to be a need for splitting it off into a new class.\
\
I considered a few edge cases that were not part of the spec such as not allowing overdrafts (which led to the introduction of a balance check when withdrawing money) and also to check that when depositing and withdrawing, the amount would be a valid monetary amount. I raised errors according to these situations so that accounts can still keep working as per normal even after a action that would raise an error - previously, these actions could break the program (such as when entering a string in place of the amount, the balance would become NaN, or Not a Number).\
\
I used Jest for testing, Prettier to format my code and attempted to use ESLint as a linter - however, there would be many clashes between ESLint and Prettier (for example, ESLint would raise problems for using `""` instead of `''`, but Prettier would use `""`). ESLint also would raise problems with a few other issues that would end up breaking the tests/code (such as using `!==` instead of `!=` for my inequality when checking decimal places). As a result, I opted against using ESLint to lint my code and just stuck with using Prettier to format it instead.

## Resources used
```
https://stackoverflow.com/questions/49096093/how-do-i-test-a-jest-console-log
https://jestjs.io/docs/es6-class-mocks
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
```
used the above to mock console.log\
used the above to mock Transaction class\
used the above to check for valid input on numbers