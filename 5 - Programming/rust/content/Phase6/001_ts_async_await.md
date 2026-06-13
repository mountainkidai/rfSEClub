# JavaScript Async Guide - **Pizza Shop to Phunsuk Ledger** 🍕➡️🏔️

## **Table of Contents**

## **1. Callbacks - Callback Hell** 😱

**Pizza Shop**: Give phone number, waiter calls later.

```javascript
function orderPizza(callback) {
  setTimeout(() => callback("🍕 Pizza ready!"), 1000);
}

orderPizza((pizzaCallback) => {
  console.log(pizzaCallback); // "🍕 Pizza ready!"
});
```

**Callback Hell** (3 orders):

```javascript
// ❌ OLD WAY - NESTED HELL
function orderPizza(callback) {
  setTimeout(() => callback("🍕 Pizza!"), 1000);
}

function orderDrink(callback) {
  setTimeout(() => callback("🥤 Coke!"), 800);
}

function orderFries(callback) {
  setTimeout(() => callback("🍟 Fries!"), 1200);
}

// PYRAMID OF DOOM
orderPizza((pizza) => {
  console.log(pizza);

  orderDrink((drink) => {
    console.log(drink);

    orderFries((fries) => {
      console.log(fries);
      console.log("✅ All done!"); // SO UGLY!
    });
  });
});

// OUTPUT:
// 🍕 Pizza!
// 🥤 Coke!
// 🍟 Fries!
// ✅ All done!
```

**Phunsuk Problem**:

```javascript
db.hotels.toArray((hotels) => {
  db.users.get(1, (user) => {
    db.bookings.add({...}, (id) => {
      console.log("Booked!");  // NESTED HELL 😭
    });
  });
});
```

---

## \*\*2. Promises

# **Promise Object - COMPLETE Explanation** 🎁

## **What is a Promise?**

```javascript
const myPromise = new Promise((resolve) => {
  resolve("Pizza!");
});

console.log(myPromise);
// OUTPUT: Promise { <pending> }
//         ↑↑↑↑↑↑↑ This is a Promise object!
```

---

## **Promise = Container with 3 States**

```
┌─────────────────────────────────────┐
│         PROMISE OBJECT              │
├─────────────────────────────────────┤
│  State 1: PENDING (⏳ waiting)      │
│  State 2: FULFILLED (✅ done!)     │
│  State 3: REJECTED (❌ failed!)    │
└─────────────────────────────────────┘
```

---

## **State 1: PENDING**

```javascript
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    // resolve not called yet
  }, 1000);
});

console.log(myPromise);
// Promise { <pending> }
//          ↑↑↑↑↑↑↑↑↑
// Still waiting, not resolved!
```

---

## **State 2: FULFILLED (✅)**

```javascript
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Pizza!"); // ← State changes to FULFILLED
  }, 1000);
});

// After 1 second:
console.log(myPromise);
// Promise { "Pizza!" }
//          ↑↑↑↑↑↑↑
// FULFILLED with value "Pizza!"
```

---

## **State 3: REJECTED (❌)**

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("No pizza!"); // ← State changes to REJECTED
  }, 1000);
});

// After 1 second:
console.log(myPromise);
// Promise { <rejected> "No pizza!" }
//          ↑↑↑↑↑↑↑↑↑
// REJECTED with error "No pizza!"
```

---

## **Promise Constructor - What's Inside?**

```javascript
new Promise((resolve, reject) => {
  //           ↑      ↑
  //        Anonymous function with 2 parameters!
  //
  // resolve = function to call when SUCCESS
  // reject  = function to call when FAILURE
});
```

### **resolve() Function**

```javascript
function orderPizza() {
  return new Promise((resolve) => {
    resolve("🍕 Pizza!");
    //      ↑ Send this value to .then()
  });
}

orderPizza().then((pizza) => {
  console.log(pizza); // Receives "🍕 Pizza!"
});
```

### **reject() Function**

```javascript
function orderPizza() {
  return new Promise((resolve, reject) => {
    reject("🍕 Kitchen fire!");
    //    ↑ Send this error to .catch()
  });
}

orderPizza().catch((error) => {
  console.log(error); // Receives "🍕 Kitchen fire!"
});
```

---

## **Promise Object Structure**

```javascript
const promise = new Promise((resolve, reject) => {
  // ANONYMOUS FUNCTION BODY
  // You write code here
  // When done: call resolve(value)
  // When error: call reject(error)
});

// THEN the promise object has properties:
// promise.[[PromiseState]] = "pending" | "fulfilled" | "rejected"
// promise.[[PromiseResult]] = value | error | undefined
// promise.then() = method to attach callback
// promise.catch() = method to attach error callback
```

---

## **Visual: Promise Lifecycle**

```
TIME 0ms:
┌──────────────────────────────────┐
│ new Promise((resolve, reject) => {│
│   // Anonymous function here     │
│   // resolve/reject are ready    │
│ })                              │
├──────────────────────────────────┤
│ State: PENDING                   │
│ Result: undefined                │
└──────────────────────────────────┘

TIME 1000ms (resolve called):
┌──────────────────────────────────┐
│ resolve("Pizza!")                │
├──────────────────────────────────┤
│ State: FULFILLED                 │
│ Result: "Pizza!"                 │
│ .then() triggered!               │
└──────────────────────────────────┘
```

---

```ts
new Promise((resolve) => {
  resolve("🍕 Pizza!");
  //     ↑↑↑↑↑↑↑↑↑↑↑
  // Sends "Pizza" somewhere...
}).then((pizza) => {
  //      ↑↑↑↑↑
  // Receives it here!
  console.log(pizza); // "🍕 Pizza!"
});
```

## **Step-by-Step: Full Pizza Example**

```javascript
// STEP 1: Create Promise
console.log("1. Creating promise...");
const pizzaPromise = new Promise((resolve, reject) => {
  console.log("2. Inside anonymous function");

  setTimeout(() => {
    console.log("3. Timer fired! Resolving...");
    resolve("🍕 Pizza ready!");
    // Promise state: PENDING → FULFILLED
  }, 1000);
});

console.log("4. Promise created");
console.log(pizzaPromise); // Promise { <pending> }

// STEP 2: Attach .then()
pizzaPromise.then((pizza) => {
  console.log("5. .then() called!");
  console.log(pizza); // "🍕 Pizza ready!"
});

console.log("6. Code finished");

// OUTPUT:
// 1. Creating promise...
// 2. Inside anonymous function
// 4. Promise created
// Promise { <pending> }
// 6. Code finished
// [1 second waits...]
// 3. Timer fired! Resolving...
// 5. .then() called!
// 🍕 Pizza ready!
```

---

## **Promise vs Normal Value**

```javascript
// NORMAL VALUE
const x = 5;
console.log(x); // 5 (immediate!)

// PROMISE (delayed)
const pizzaPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Pizza"), 1000);
});
console.log(pizzaPromise); // Promise { <pending> }
//                          NOT "Pizza" yet!

// To get value from promise:
pizzaPromise.then((pizza) => {
  console.log(pizza); // "Pizza" (after 1 second)
});
```

---

## **Promise Properties (Hidden)**

```javascript
const myPromise = new Promise((resolve) => {
  resolve("Success!");
});

// You can't directly access these, but they exist:
// myPromise.[[PromiseState]] = "fulfilled"
// myPromise.[[PromiseResult]] = "Success!"

// Access through methods:
myPromise.then((result) => {
  console.log(result); // "Success!"
});
```

---

## **Phunsuk Ledger - Promise Object**

```javascript
// Create Promise
const bookingPromise = db.bookings.add({
  hotel_id: 1,
  guest: "John",
  amount: 5000,
});

console.log(bookingPromise);
// Promise { <pending> }
//          ↑↑↑↑↑↑↑↑↑
// Database operation not done yet!

// Attach .then()
bookingPromise.then((bookingId) => {
  console.log(`Booking created: ${bookingId}`);
  // After database saves: Promise becomes FULFILLED
  // bookingId = 1 (database ID)
});

// After database operation completes:
// Promise { 1 }
//          ↑
// FULFILLED with booking ID 1
```

---

## **TL;DR - Promise is**

```
✅ An OBJECT that holds a value (or error)
✅ With 3 possible states (PENDING, FULFILLED, REJECTED)
✅ Created with anonymous function (resolve, reject)
✅ resolve() = "Success! Here's the value"
✅ reject() = "Error! Something went wrong"
✅ .then() = "When fulfilled, do this"
✅ .catch() = "When rejected, do this"
```

| Feature        | Promise .then()                 | Async/Await                 |
| -------------- | ------------------------------- | --------------------------- |
| Syntax         | promise.then(value => ...)      | const value = await promise |
| When it waits  | No wait - continues immediately | Waits at await              |
| Code flow      | Callback runs later             | Looks synchronous           |
| Error handling | .catch()                        | try/catch                   |
| Readability    | ❌ Nested hell possible         | ✅ Reads like normal code   |
| Multiple steps | .then().then().then()           | await, await, await         |

### promise then

```ts
console.log("1. Start");

promise.then(() => {
  console.log("2. Pizza ready!");
});

console.log("3. Continue shopping");
// Code NEVER pauses - continues immediately!

// OUTPUT:
// 1. Start
// 3. Continue shopping  ← IMMEDIATE!
// [1 second later]
// 2. Pizza ready!       ← LATER!
```

### await and async

```text
RULE #1: async → BEFORE function name
RULE #2: await → BEFORE Promise (INSIDE async function only)
```

```ts
// Create the promise (simulates pizza making)
function makePizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍕 Hot pizza ready!");
    }, 1000); // 1 second delay
  });
}

// Complete async/await example
async function orderPizza() {
  console.log("1. Start");

  const pizza = await makePizza(); // ← THIS makes it wait!
  console.log("2. Pizza ready!");
  console.log("3. Continue shopping");
  console.log("4. Eat pizza:", pizza);
}

console.log("🚀 Calling orderPizza()");
orderPizza();
console.log("✅ Function call finished!");
```

```text
🚀 Calling orderPizza()
1. Start
[1 SECOND PAUSE HERE ↑]
2. Pizza ready!
3. Continue shopping
4. Eat pizza: 🍕 Hot pizza ready!
✅ Function call finished!
```

```ts
// TEST 1: .then() - NO WAIT
console.log("=== .then() ===");
console.log("1");
new Promise((r) => setTimeout(r, 1000)).then(() => console.log("2"));
console.log("3");
// 1, 3, [1s] 2

// TEST 2: async + .then() - NO WAIT
console.log("=== async + .then() ===");
async function test1() {
  console.log("1");
  new Promise((r) => setTimeout(r, 1000)).then(() => console.log("2"));
  console.log("3");
}
test1();
// 1, 3, [1s] 2

// TEST 3: async + await - WAITS
console.log("=== async + await ===");
async function test2() {
  console.log("1");
  await new Promise((r) => setTimeout(r, 1000));
  console.log("2");
  console.log("3");
}
test2();
// 1, [1s] 2, 3
```
