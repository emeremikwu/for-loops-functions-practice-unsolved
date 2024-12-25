
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let accounts = [      ]
  for(const account of array){
    let balance = 0.0;
    for(const deposit of account.deposits ?? []){balance += deposit}
    for(const withdrawal of account.withdrawals ?? []){balance -= withdrawal}
    if(balance !== account.balance){accounts.push(account)}
  }

  return accounts;
}

import { bankAccounts } from "../data/data.js";
console.log(getClientsWithWrongBalance(bankAccounts))



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
