# Mock Interview Questions

## ( 1 ) 'Closure' definition and example

### **Definition** :

- Closure is a Javacript feature, where inner-function can access variables of it's outer-function, <br>even after the outer-functon has finished execution.

### **Simple Meaning** :

- In Simple words -<br> **When a function remembers variables of it's parent-function, that is called closure,**<br>

- **Even if the outer function already executed,<br>
  the inner-function still has access to those variables.**

JavaScript does this because functions form a lexical scope.

### **Usecase** :

- Closures are commonly used in data hiding, counters, and maintaining state in Javascript.

### **Example with Code** :

**Note :** Here we are **calling outer-function only one-time** thats why we are getting increasing values like 1,2,3. ✅

```
function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
    console.log(count);
  }

  return innerFunction;
}

const counter = outerFunction();

counter(); // 1
counter(); // 2
counter(); // 3

```

**Note :** If we call **outer-function every-time & than call inner-function** so we get in result 1,1,1. ❌

```
function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
    console.log(count);
  }

  return innerFunction;
}

outerFunction()(); // 1
outerFunction()(); // 1
outerFunction()(); // 1

```

- Example Explanation ( Interview Friendly )
  - **outerFunction** has a variable called count
  - **innerFunction** uses that count variable
  - **outerFunction** returns innerFunction
  - Even after **outerFunction** is finished,
    **innerFunction** still remembers the **count** variable<br>
    This happens because of closure.<br><br>
    So every time we call counter(),<br>
    it updates the same count value.

### This is not closure ❌

```
let count = 0;

function increment() {
  count++;
}
```

- value yaad rehti hai ✔️
- page refresh pe chali jaati hai ✔️
- lekin closure nahi hai ❌ (global variable hai)

### This is closure ✅

```
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const inc = outer();
```

- count outer function ka variable hai
- inner function usko yaad rakhta hai
- outer function khatam ho chuka hai<br>
  👉 YEHI closure hai

### **Followup Questions** :

### FQ - 1 : Why do we need closures in Javascript ?

- We need closure to preserve data & maintain state in JavaScript.
- Closure help us to remember varaibles, even after function is executed.
- They are mainly used for :
  - Data hiding
  - Counters
  - Callbacks and event handlers

### FQ - 2 : What are the advantages of closure ?

- Data Privacy ( variables cannot be accessed directly )
- State management without global variables.
- Cleaner and more secure code.

### FQ - 3 : Can closure cause memory issues ?

- Yes, if closures are not handle properly,<br>
  they can cause memory leaks because variables are kept in memory even when they are no longer needed.
- So we should avoid unnecessary closures.

### **Real-Life Example**

- Bank Account Balance

```
function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log("Balance:", balance);
    }
  };
}

const account = bankAccount();

account.deposit(500);   // Balance: 1500
account.withdraw(300);  // Balance: 1200
```

**Explanation** (Interview Style)

- balance is a private variable
- It cannot be accessed directly
- deposit and withdraw remember balance
- This is possible because of closure

### Closure in React (VERY IMPORTANT)

Q - 1 : Where closures are used in React?<br>
Ans : Closures commanly used in <br>

- useState
- useEffect
- Event handlers
- setTimeout / setInterval

Q - 2 : Real life Example :

#### - Closure gives old value

```
function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>+</button>;
}
```

- ❗ Problem (Closure Issue)<br>
- Because of closure,
  handleClick may use **old value** of count.

#### - Correct Way (Functional Update)

```
function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  return <button onClick={handleClick}>+</button>;
}
```

✅ Explanation

- React keeps previous state in closure
- prevCount always gives latest value
- This avoids stale closure problem

## ( 2 ) 'Promises' definition and example

### **Definition** :

- A Promise is an object in javascript,<br> that represents eventual completation or failure of an asynchronous operation.

### **Simple Meaning** :

- In Javascript some tasks are asynchronous,<br>
  like :
  - API Calls,
  - Fetching-data,
  - timers<br>
    it takes time
- A Promise helps us to handle these tasks properly by giving three states
  - Pending (Operation is in progress)
  - Fulfilled (Operation completed successfully)
  - Rejected (Operation failed)

### **Example with Code** :

```
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data fetched successfully");
  } else {
    reject("Something went wrong");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

✅ Explanation (Interview Friendly)

- new Promise creates a promise
- resolve is called when task is successful
- reject is called when task fails
- .then() handles success
- .catch() handles error

### **Real-life Example** :

🎯 Example: Online Food Order

When you order food online:

- Order placed → Pending
- Food delivered → Fulfilled
- Order cancelled → Rejected

```
function orderFood() {
  return new Promise((resolve, reject) => {
    let restaurantOpen = true;

    if (restaurantOpen) {
      resolve("Food delivered");
    } else {
      reject("Order cancelled");
    }
  });
}

orderFood()
  .then(message => console.log(message))
  .catch(error => console.log(error));
```

### **Followup Questions** :

### FQ - 1 : Why do we use Promises?

- We use promises to handle asynchronous operations in a clear way and to avoid callback hell.
- Promises make code
  - more redable
  - more maintable
  - easier to debug

### FQ - 2 : What is the diffrence between Promise and Callback ?

- Callbacks can lead-to(cause) nested code and callback hell.
- Promises provide chaining using .then(), <br>
  which makes code cleaner and more maintainable.

### FQ - 3 : What are the states of a Promise ?

- A Promise has three stats :
  1. Pending
  2. Fulfilled
  3. Rejected

### **Promise in React (VERY IMPORTANT)** :

- Promises are mostly used in React for :
  - API Call
  - Data fetching
  - Async operation inside useEffect

```
useEffect(() => {
  fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);
```

## ( 3 ) What do u know about 'this' keyword

### **Definition** :

- **'this'** keyword **refers to the object** that is executing current function.

### **Real world example** :

```
const user = {
  name: "Mehul",
  age: 25,
  showDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  }
};

user.showDetails();
```

### **Followup Questions** :

### FQ - 1 : What is the value of this in arrow function ?

- Arrow functions **dont't have thier own this**<br>
  **they take this from thier parent scope**.<br>
  ( But it not take this value from 'Object' if object is
  parent scope )

### FQ - 2 : What is 'this' value in normal function ?

- in a normal function, 'this' depends on, how the function is called.
- in browser, it refers to 'window'.
- in node.js, it give us 'undefined'
- in Object, it refers to 'object'

### FQ - 3 : How can we manually set this value?

- We can control 'this' using:
  - call()
  - apply()
  - bind()

### **'this' in React (VERY IMPORTANT)** :

- in functional components, **'this'** is not used.
- in class components, **'this'** refers to the component instance

## ( 4 ) Pure components

### **Definition** :

- A Pure Components is a React-Component that re-renders only when its prop/state change.

### **Simple Meaning** :

- Pure Components automatically checks old and new props/state

### **Example** :

**Component** : (re-render every-time (depends on parents state/prop))

```
function Child({ name }) {
  console.log("Child rendered");
  return <h2>{name}</h2>;
}
```

**Pure Compoennt** : ( re-render only when it's state/props change )

- Convert : Component into Pure-Component using = React.memo

```
const Child = React.memo(({ name }) => {
  console.log("Child rendered");
  return <h2>{name}</h2>;
});
```

### **Followup Questions** :

### FQ - 1 : Component v/s PureComponent ?

- Components re-render every time (its depend on parent)
- Pure-Component re-render only when its state/prop change.

### FQ - 2 : What is Shallow comparison ?

- Shallow comparison checks only first-level values, not deep objects.

## ( 5 ) HOC (Higher Order Component)

### **Definition** :

- A Higher Order Component is a function that takes Component as a input and returns a inhenced Component.

### **Simple Explanation** :

- Instead of writing same code in many components,<br>
  we wrap components with an HOC

### Example :

```
import React from "react";

function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please login</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

function Dashboard() {
  return <h2>Dashboard Page</h2>;
}

export default withAuth(Dashboard);
```

### **Followup Questions** :

### FQ - 1 : Why do we use HOC ?

- We use HOC to reuse logic, keep code clean and follow DRY principle

### FQ - 2 : Is HOC a JavaScript or React concept ?

- HOC is a React-pattern based on Javascript higher-order functions.

### FQ - 3 : HOC vs Custom Hooks ?

- HOC wraps a component
- Custom Hooks shares logic without wrapping component

## ( 6 ) Memoization in JS

### **Definition** :

- Memoization is an optimization technique<br> where we store result of a function so that repeted calls with the same input return saved result instead of recalculating.

### **Simple Explanation** :

-

### **Example** :

```
function memoizedSum() {
  const cache = {};

  return function (num) {
    if (cache[num]) {
      return cache[num];
    }

    console.log("Calculating...");
    cache[num] = num + 10;
    return cache[num];
  };
}

const sum = memoizedSum();

console.log(sum(5)); // Calculating... 15
console.log(sum(5)); // 15 (from cache)
```

### **Followup Questions** :

### FQ - 1 : Why do we use memoization ?

- To improve performance and avoid unneccesary recalculations.

### FQ - 2 : Is memoization related to closure ?

- Yes, Memoization uses closure to remember cached values.

### FQ - 3 : Where is memoization used in React ?

- In React memoization used with :
  - React.memo
  - useMemo
  - useCallback

## ( 7 ) Different Promise Methods

### **Definition** :

- Promise methos are built-in functions used to <br>handle multiple promises or control their execution

### **Example** : ( Most Common Promises )

**1 ] Promise.all()**

- If One promise reject - all reject.

```
 const p1 = Promise.resolve(10);
 const p2 = Promise.resolve(20);
 const p3 = Promise.resolve(30);

 Promise.all([p1, p2, p3])
   .then((result) => console.log(result)) // [10, 20, 30]
   .catch((error) => console.log(error));
```

**2 ] Promise.any()** : ( **Usecase** : Timeout Handling )

- The Promise that complete first ( resolve / reject ), get its result

  ```
  const p1 = new Promise((reject) =>
  setTimeout(() => reject("P1 Solve"), 2000)
  );

  const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("P2 Rejected"), 1000)
  );

  Promise.any([p1, p2])
  .then(result => console.log(result))
  .catch(error => console.log(error));

  ```

**3 ] Promise.race()**

- The Promise that resolve first ( resolve ), get its result

  ```
  const p1 = new Promise((reject) =>
  setTimeout(() => reject("Error 1"), 1000)
  );

  const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Success 2"), 2000)
  );

  Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(error => console.log(error));

  ```

**4 ] Promise.allSettled()**

- Shows outcome of all Promises.( resolve / reject)

### **Followup Questions** :

### FQ - 1 : Difference between Promise.all and Promise.allSettled ?

- Promise.all() fails if any promise fails.
- Promise.allSettled always returns of all promises

### FQ - 2 : When do we use Promise.race() ?

- When we need fastest response, like API timeout

### FQ - 3 : Which Promise method never fails fast ?

- Promise.allSettled()

## ( 8 ) Async / Await

### **Definition** :

- Async Await is a Javascript syntax, <br/> which is used to handle promises in a synchronous looking way.

### **Simple Explanation** :

- async await makes asynchronous code easy read & understand
- It allows us to write promise based code without using .then() & .catch() chains.

### **Example** :

```
const getProducts = async () => {
    try {
        const res = await fetch('https://dummyjson.com/products?delay=1000');
        const data = await res.json()
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
    }
}

getProducts()
```

### **Followup Questions** :

### FQ - 1 : What does async keyword do?

- It makes a function that always return a promise.

### FQ - 2 : Can we use await without async?

- No, await can be used only inside async function
- Exceptions : <br/>
  (1) JS : < script type="module"> <br/>
  (2) Nodejs : change file extension = .js to .mjs

### FQ - 3 : Difference between async/await and .then()?

- async await makes code more redable & easy to debug compare to .then() chains.

## ( 9 ) Event Loop

### **Definition** :

- The Event Loop is a JavaScript machanism <br/>
  that allows JavaScript to perform non-blocking asynchronous operations even though JavaScript is single-threded.

### **Simple Explanation** :

- JavaScript can do only one task at a time because it is single-threaded.

- But sometimes a task takes time, like:
  - Fetching data from an API
  - Waiting for a timer (setTimeout)
  - Reading a file

- If JavaScript waited for these tasks to finish, the whole application would freeze.

- So JavaScript sends these long-running tasks to the browser (or Node.js). When they finish, they are placed in a queue.

- The Event Loop checks:
  - "Is the Call Stack empty?"
  - If yes, it takes the next task from the queue and puts it into the Call Stack.

- This process keeps the application responsive.

### **Example** :

1 ]

```
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);

console.log("End");
```

Output

```
Start
End
Inside setTimeout
```

2 ]

```
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Output

```
A
C
B
```

### **Followup Questions** :

### FQ - 1 : Is JavaScript single-threaded?

- Yes. JavaScript is single-threaded because it has only one Call Stack and executes one task at a time.

### FQ - 2 : Why do we need the Event Loop?

- We need the Event Loop to handle asynchronous tasks without blocking the execution of synchronous code.

### FQ - 3 : Does setTimeout(0) execute immediately?

- No. It first goes to the Callback Queue, and the Event Loop executes it only after the Call Stack becomes empty.

### FQ - 4 : Who executes asynchronous tasks?

- The browser's Web APIs (or Node.js APIs) handle asynchronous tasks. The Event Loop only moves completed callbacks to the Call Stack.

## ( 10 ) Hoisting

### **Definition** :

- Hoisting is JavaScript's behavior <br>where variable and function declarations are moved to the top of their scope before the code is executed.

- However, only the declaration is hoisted, not the initialization (value assignment).

### **Simple Explanation** :

- Before JavaScript starts executing your code, it first scans the code and remembers all variable and function declarations.

- You can think of it like this:
  - Declaration → JavaScript knows the variable or function exists.
  - Initialization → The value is assigned later when that line executes.

- That's why we say:
  - Declarations are hoisted, but initializations are not.

### **Example** :

1 ] Variables - var, let, const

( I ) Var

```
console.log(name);

var name = "Mehul";
```

- Output

```
undefined
```

- Why? Js Internally Treats it like this

```
var name;          // Declaration is hoisted

console.log(name); // undefined

name = "Mehul";    // Initialization happens here
```

( II ) let, Const

```
console.log(age);

let age = 25;
```

- Output

```
ReferenceError: Cannot access 'age' before initialization
```

- Why?
  - let is also hoisted, but it stays in a special phase called the Temporal Dead Zone (TDZ) until its declaration line is executed.

  - So you cannot access it before initialization.

2 ] Functions

( I ) Function Declaration

```
greet();

function greet() {
    console.log("Hello");
}
```

- Output

```
Hello
```

- Why?
  - Function declarations are fully hoisted, so you can call them before they are written in the code.
  - JavaScript treats it like this:

```
function greet() {
  console.log("Hello");
}

greet();
```

( II ) Function Expression

```
greet();

var greet = function () {
    console.log("Hello");
};
```

- Output

```
TypeError: greet is not a function
```

- Why?
  - Only the variable declaration is hoisted:

```
var greet;

greet(); // greet is undefined

greet = function () {
    console.log("Hello");
};
```

- Since greet is undefined at the time of the call, JavaScript cannot execute it as a function.

### **Followup Questions** :

### FQ - 1 : What is hoisted in JavaScript?

- Variable declarations and function declarations are hoisted. Initializations are not.

### FQ - 2 : Is let hoisted?

- Yes. let is hoisted, but it cannot be accessed before initialization because of the Temporal Dead Zone (TDZ).

### FQ - 3 : Is const hoisted?

- Yes. Like let, const is hoisted but stays in the Temporal Dead Zone until its declaration is executed.

### FQ - 4 : Which function is fully hoisted?

- Only function declarations are fully hoisted.

### FQ - 5 : Why does var return undefined instead of an error?

- Because during hoisting, var is automatically initialized with undefined.
