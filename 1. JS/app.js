// Mock Interview Questions

//! [ 1 ] Closure definition and example

// Definition : Closure is a feature in javascript where inner-function can access variables of it's outer-function,
//              event after outer-function execution is finished.

// Simple Explanation : In Simple words,
//                      When a function remembers the variables of it's parent-function, that is called closure.

// Code example :
// Example - 1 : Result : 1,2,3. Becasue : we are calling outer-function one-time
// function outerFunction() {
//   let count = 0;

//   function innterFunction() {
//     count++;
//     console.log(count);
//   }

//   return innterFunction;
// }

// const count = outerFunction();

// count();
// count();
// count();

// Example - 2 : Result : 1,1,1. Becasue : we are calling outer-function every-time
// function outerFunction() {
//   let count = 0;

//   function innterFunction() {
//     count++;
//     console.log(count);
//   }

//   return innterFunction;
// }

// outerFunction()();
// outerFunction()();
// outerFunction()();

// Real-life Code Example :
// function bankAccount() {
//   let balance = 1000;

//   return {
//     deposit(amount) {
//       balance += amount;
//       console.log("Balance:", balance);
//     },
//     withdraw(amount) {
//       balance -= amount;
//       console.log("Balance:", balance);
//     },
//   };
// }

// const account = bankAccount();

// account.deposit(500); // Balance: 1500
// account.withdraw(300); // Balance: 1200

// function bankAccount() {
//   let balance = 1000;

//   return {
//     deposite(amount) {
//       balance += amount;
//       console.log(balance);
//     },
//     withdraw(amount) {
//       balance -= amount;
//       console.log(balance);
//     },
//   };
// }

// const account = bankAccount();

// account.deposite(1000);
// account.withdraw(700);

//! [ 2 ] Promise : ( 2 Parts of promise )

//  1] Simple Example
// const myPromise = new Promise((resolve, reject) => {
//   let result = false;

//   if (result) {
//     resolve("Promise success.");
//   } else {
//     reject("Promise not fullfilled.");
//   }
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 2]
// function orderFood() {
//   return new Promise((resolve, reject) => {
//     let restaurantOpen = true;

//     if (restaurantOpen) {
//       resolve("Food delivered");
//     } else {
//       reject("Order cancelled");
//     }
//   });
// }

// orderFood()
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));

//! [ 3 ] this keyword

// const user = {
//   name: "Mehul",
//   age: 27,
//   showDetails: function () {
//     console.log(`${this.name} is ${this.age} year old.`);
//   },
// };

// user.showDetails();

//! [ 6 ] Memoization

// function memoization() {
//   const cache = {};

//   return function (num) {
//     if (cache[num]) {
//       return cache[num];
//     }

//     console.log("Calculating...");
//     cache[num] = num + 10;
//     return cache[num];
//   };
// }

// const sum = memoization();

// console.log(sum(5));
// console.log(sum(15));
// console.log(sum(15));
