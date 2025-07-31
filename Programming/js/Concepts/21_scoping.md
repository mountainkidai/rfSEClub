# JavaScript Scoping

**Scope** refers to where in your code variables can be accessed or used. It defines the “visibility” of variables — which parts of the code can see or use them.

## Key Concepts and Syntax

### 1. Function Scope

Variables declared inside a function are only accessible within that function.

```js
function showMessage() {
  let message = "Hello";
  console.log(message);
}

showMessage(); // Output: Hello
// console.log(message); // Error: message is not defined
```

### 2. Block Scope

Variables declared with `let` or `const` inside `{}` (curly braces) can only be used inside that block.

```js
{
  let blockVar = 10;
  const name = "Ravi";
  console.log(blockVar); // 10
}

// console.log(blockVar); // Error: blockVar is not defined
```

Note: `var` is not block scoped. It is function scoped.

```js
{
  var test = "I am accessible outside this block";
}
console.log(test); // Output: I am accessible outside this block
```

### 3. Scope Chain

If a variable is not found in the current scope, JavaScript looks up in the outer scopes.

```js
let a = 5;

function outer() {
  let b = 10;

  function inner() {
    let c = 15;
    console.log(a, b, c); // 5 10 15
  }

  inner();
}

outer();
```

Here:

* `c` is found inside `inner()`
* `b` is found in `outer()`
* `a` is found in the global scope

### 4. Lexical Scoping

In JavaScript, functions remember the scope in which they were defined, not the scope in which they are called.

```js
function outer() {
  let outerVar = "outer";

  return function inner() {
    console.log(outerVar); // outer
  };
}

const myFunc = outer();
myFunc();
```

The `inner` function still has access to `outerVar`, because it remembers the scope in which it was created.
