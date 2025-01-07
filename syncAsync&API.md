# Sync vs Async Programming in JavaScript

## Synchronous Programming

JavaScript is a single-threaded language where code executes sequentially. In synchronous programming:

- Only one operation runs at a time
- Each line must complete before the next begins
- Long operations block subsequent code

### Example:

```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

### Problem with Synchronous Code:

```javascript
let lastNumber = 500000;
for (let cn = 1; cn < lastNumber; cn++) {
  console.log("current number is", cn);
}
console.log("Good Morning"); // Blocked until loop completes
```

## Asynchronous Programming

Allows parallel execution through:

- Event Loop
- Web APIs
- Callback Queue
- Callbacks

### Example:

```javascript
console.log("First");
setTimeout(() => console.log("Second"), 1000);
console.log("Third");
```

## Types of APIs

### Native JavaScript APIs

- Core language features (Array, Object, String etc.)
- Built-in objects and functions
- Promise and async/await
- JSON handling

### Web APIs

- DOM manipulation
- Fetch API
- Media controls
- Storage (localStorage)
- Graphics (Canvas, WebGL)

### Node.js APIs

- File system access
- Networking
- Streams
- OS interaction

## Event Loop Architecture

1. **Call Stack** - Tracks currently executing functions
2. **Web APIs** - Handle async operations
3. **Callback Queue** - Stores completed async callbacks
4. **Event Loop** - Checks call stack and moves callbacks

### Timer Example:

```javascript
let time = 10;
console.log("starting timer");

function printTimer() {
  if (time <= 0) {
    console.log("time up");
    clearInterval(timeInterval);
  } else {
    console.clear();
    console.log(time--);
  }
}

let timeInterval = setInterval(printTimer, 1000);
```

**Note:** The main thread must complete synchronous tasks before handling async operations, which can cause delays if sync code is computation-heavy.
