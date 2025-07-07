# JavaScript Curriculum for RFSE Open-Source Project

## Module 1: JavaScript Basics

1. **Print Statement**: Using `console.log` for output.
2. **Variables**: Declaring with `let`, `const`, `var`; variable mutation.
3. **Primitive Types**: Numbers, Strings, Boolean, Undefined, Null, Symbol (intro), Empty Strings.
4. **Type Coercion**: Implicit type conversion, real-world examples.
5. **Static vs. Dynamic Typing**: Conceptual differences, pros/cons.
6. **Operators**: Assignment (`=`, `+=`, `-=`, `*=`, `/=`), Arithmetic (`+`, `-`, `*`, `/`, `%`, `**`), Logical (`&&`, `||`, `!`), Increment/Decrement (`++`, `--`).
7. **Truthy & Falsy Values**: Values evaluating to `false`: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
8. **Equality vs. Identity**: `==` vs. `===`, `Object.is()`.
9. **Control Statements**: `if`, `if-else`, `else-if`, `switch`.
10. **Loops**: `for`, `while`, `do-while`.
11. **Jumping Statements**: `break`, `continue`.
12. **Arrays**: Basic usage, methods (`push`, `pop`, `shift`, `unshift`).
13. **Built-in Math Functions**: `Math.round`, `Math.floor`, `Math.random`, etc.
14. **Template Literals**: Interpolation, multi-line strings, tagged templates.
15. **Regular Expressions**: Basic syntax, methods (`test`, `match`, `replace`), use cases (e.g., validation).
16. **JSON**: `JSON.parse`, `JSON.stringify`, error handling, API usage.

## Module 2: Intermediate JavaScript

1. **Objects**: Object literals, property access, initializing objects, methods.
2. **Function Types**: Regular (named) functions, function expressions, anonymous functions, arrow functions.
3. **First-Class Functions**: Functions as arguments, returning functions.
4. **Callback Functions**: Basic usage, passing variables/arrays/objects.
5. **IIFE (Immediately Invoked Function Expression)**: Syntax, use cases (e.g., avoiding global scope pollution).
6. **Scoping**: Function scope vs. block scope, scope chain, lexical scoping.
7. **Hoisting**: Behavior of `var`, `let`, `const`, function declarations vs. expressions.
8. **Closures**: Creating closures, practical examples (e.g., data privacy).
9. **Method Borrowing**: `call`, `bind` methods.
10. **Modern Array Methods**: `map`, `filter`, `find`, `reduce`, `forEach`, `some`, `every`, `flat`, `flatMap`, `at`.
11. **Event Basics (Browser)**: `addEventListener`, event propagation (bubbling/capturing), event object, `preventDefault`, `stopPropagation`.
12. **Short-Circuiting**: Using `&&` and `||` for control flow.
13. **Error Handling (Synchronous)**: `try...catch`, throwing custom errors, error object properties.
14. **JavaScript Modules**: `import`, `export`, default vs. named exports, CommonJS vs. ES Modules, dynamic imports.
15. **API Overview**: Native JS APIs, Web Browser APIs (DOM, `fetch`, `localStorage`), Node.js APIs (filesystem, `http`, `process`).

## Module 3: Advanced JavaScript

1. **Asynchronous JavaScript**: Sync vs. async theory, synchronous vs. asynchronous execution, event-driven architecture.
2. **Callbacks**: Nested callbacks, "Callback Hell," drawbacks, alternatives.
3. **Promises**: States (pending, fulfilled, rejected), `.then`, `.catch`, `.finally`, `Promise.all`, `Promise.race`.
4. **Async/Await**: `async` functions, `await` keyword, `try...catch` for errors, sequential vs. parallel async.
5. **Timers & Scheduling**: `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`.
6. **JS Runtime / Event Loop**: Call stack, Web/Node.js APIs, callback queue, event loop, microtasks vs. macrotasks, `queueMicrotask`.
7. **File Read (Node.js Callbacks)**: Reading files with callbacks, error handling.
8. **Debouncing & Throttling**: Optimizing search inputs, scroll handlers, etc.
9. **AbortController**: Canceling `fetch` requests.
10. **ES6+ Features**: Destructuring (arrays/objects), rest/spread operators, block scope, enhanced string methods.
11. **Optional Chaining & Nullish Coalescing**: `?.`, `??`, use cases (e.g., safe property access).
12. **Set and Map**: Storing unique values, key-value data, use cases.
13. **Hashmaps**: Using objects and `Map` for key-value storage.
14. **Iterators and Generators**: `for...of`, iterable protocol, `function*`, `yield`, async generators.
15. **BigInt**: Syntax (`123n`), operations, use cases (e.g., financial calculations).
16. **this Keyword Nuances**: Behavior in different contexts (global, object, arrow functions).
17. **Object-Oriented Programming (OOP)**: Prototypes, constructors, `class` syntax, `extends`, `super`, method overriding, static properties/methods.
18. **Private Class Fields**: `#field`, private methods, encapsulation.
19. **Getters and Setters**: Property access control, use cases.
20. **Proxy and Reflect**: Intercepting operations, `Reflect` API, use cases (e.g., validation).
21. **Internationalization (Intl)**: `Intl.DateTimeFormat`, `Intl.NumberFormat`, `Intl.Collator`.
22. **Memory Management**: Garbage collection, memory leaks, `WeakMap`, `WeakSet`.
23. **Web APIs (Expanded)**: `sessionStorage`, `IndexedDB`, Geolocation, Canvas, Web Workers, Intersection Observer, Clipboard API.
24. **Service Workers**: Lifecycle (`install`, `activate`), caching, push notifications.
25. **Performance Optimization**: Lazy loading, memoization, minimizing reflows/repaints.
26. **Security Basics**: XSS prevention, CSRF basics, secure API design.
27. **Testing Basics**: Unit testing (Jest/Mocha), mocking, TDD overview.
28. **TypeScript Basics**: Type annotations, interfaces, integration with JS.
29. **Node.js-Specific Topics**: `EventEmitter`, streams, child processes.
30. **WebAssembly (WASM) Integration**: Loading WASM modules, use cases (e.g., Rust integration).
31. **Browser Compatibility**: Polyfills, transpilers (Babel), feature detection, Browser Compatibility Data (BCD).
