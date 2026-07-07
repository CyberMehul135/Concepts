// Mock Interview Questions

//! [ 1 ] Closure

//? Example - 1 :
//? ( a ) Result : 1,2,3. Becasue : we are calling outer-function one-time

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

//? ( b ) Result : 1,1,1. Becasue : we are calling outer-function every-time

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

//? Example - 2 : Real-life Code Example :

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
//     getBalance() {
//       return balance; // copy return not actual state
//     },
//   };
// }

// const account = bankAccount();

// account.deposit(500); // Balance: 1500
// account.withdraw(300); // Balance: 1200
// console.log(account.getBalance());

//! [ 2 ] Promise : ( 2 Parts of promise )

//? Example - 1 :
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

//? Example - 2 :
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

//! [ 7 ] Promise Methods

// const p1 = Promise.resolve(10);
// const p2 = Promise.reject("Error");
// const p3 = Promise.resolve(12);

// Promise.any([p1, p2, p3])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const p1 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("Success 1"), 1000),
// );

// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Success 2"), 2000),
// );

// Promise.race([p1, p2])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(console.log("Resolve ho gaya 1")), 2000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(console.log("Resolve ho gaya 2")), 1000);
// });

// Promise.race([p1, p2])
//   .then((result) => console.log("result : ", result))
//   .catch((error) => console.log("error : ", error));

// console.log(p1);
// console.log(p2);

