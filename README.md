# Bank Tech Test
For a practice tech test, I have been tasked to create a Bank system that allows people to deposit money, withdraw money and print their bank statement.\
\
The program will be ran in Node but will not need to have a Command Line Interface. The focus of the project is to practice OO design and TDD skills and the project will be completed solo with self-reviews done to reflect and improve upon my own code.

## Instructions
Clone this repository using `git clone https://github.com/mcsuGH/Bank-Tech-Test.git`\
\
Run `npm install` to install any dependencies then run `jest` to run the tests for the code.

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

## Resources used
```
https://stackoverflow.com/questions/49096093/how-do-i-test-a-jest-console-log
https://jestjs.io/docs/es6-class-mocks
```
used the above to mock console.log
used the above to mock Transaction class