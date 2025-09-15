# Memory Management in JavaScript

JavaScript is a **garbage-collected language**, which means the JavaScript engine automatically allocates and frees memory during the execution of a program. But understanding **how memory works** and how to avoid common pitfalls (like memory leaks) is essential for writing efficient and reliable applications.

---

## 1. How Memory Works in JavaScript

### **Memory Lifecycle:**

1. **Allocation**: When variables or objects are created.
2. **Use**: When variables are read, modified, passed to functions, etc.
3. **Release**: When the variable is no longer needed, and the engine removes it (garbage collection).

JavaScript engine keeps track of **which variables are still reachable** and automatically frees the memory of those that are not.

---

## 2. Garbage Collection (GC)

### **What is Garbage Collection?**

It is the process of finding memory that is no longer in use and reclaiming it.

### **Reachability**

If a value is accessible or referenced by something that is accessible (like a global variable, local variable in a function that is still running, or part of an object that's still reachable), it's **reachable**.

```js
let user = { name: "Ravi" }; // user is reachable
user = null; // now the object is unreachable and will be garbage collected
```

---

## 3. Common Memory Leaks

### 1. **Global variables**

```js
function leak() {
  leakedVar = "I am global!"; // No 'var', 'let', or 'const'
}
```

* This variable stays in memory because it's unintentionally global.

### 2. **Closures that hold references**

```js
function outer() {
  let bigData = new Array(1000000).fill("data");
  return function inner() {
    console.log(bigData[0]);
  }
}
const retained = outer(); // bigData is not released
```

* `bigData` is kept alive because `inner` still references it.

### 3. **Detached DOM elements**

```js
let element = document.getElementById("myDiv");
function remove() {
  element.remove(); // removed from DOM
  // But still in memory if 'element' is referenced elsewhere
}
```

* If you keep references to removed DOM nodes, they won't be garbage collected.

---

## 4. WeakMap and WeakSet

These are special types of collections that **do not prevent garbage collection** of their keys/values.

### **WeakMap**

* Keys must be objects
* If no other reference to the key exists, it can be garbage collected.

```js
let user = { name: "Ravi" };
let map = new WeakMap();
map.set(user, "data");
user = null; // key object is garbage collected
```

### **Use Case**

* Storing private data without preventing object cleanup

### **WeakSet**

* Similar, but stores objects (not key-value pairs)

```js
let user = { name: "Ravi" };
let set = new WeakSet();
set.add(user);
user = null; // user object is garbage collected
```

---

## Summary

| Concept            | Explanation                                     |
| ------------------ | ----------------------------------------------- |
| Allocation         | Creating variables or objects                   |
| Garbage Collection | Automatic memory cleanup by JS engine           |
| Memory Leak        | Memory that should be released but isn’t        |
| WeakMap            | Allows garbage collection of unused object keys |
| WeakSet            | Similar to WeakMap but for sets of objects      |

## Problems
