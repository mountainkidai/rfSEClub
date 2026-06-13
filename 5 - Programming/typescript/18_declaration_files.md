#### Inheritance and Extensibility

Subclasses inherit prototype methods, enabling reusable code.  
**Impact**: Useful for extending Koel to support government APIs (e.g., Secretariat app) with shared auth logic.  
**Example**: A `GovKoelAuth` class can inherit `verify()` from `KoelAuth.prototype`.

#### Secure Method Locking

Prototype methods can be locked using `Object.defineProperty` (as shown in `PropertyDescriptor` example), preventing tampering.  
**Impact**: Ensures your Aadhaar KYC auth remains secure, protecting crore-generating contracts.  
**Example**: Make `verify()` non-writable to block unauthorized changes.

```typescript
class KoelAuth {
  constructor(user) {
    this.user = user; // Instance property
  }
}

// Prototype method (shared)
KoelAuth.prototype.verify = function () {
  return `${this.user} verified with Aadhaar KYC`;
};

const user1 = new KoelAuth("Aariv");
const user2 = new KoelAuth("Sarika");

console.log(user1.verify()); // Outputs: Aariv verified with Aadhaar KYC
console.log(user2.verify()); // Outputs: Sarika verified with Aadhaar KYC
console.log(user1.verify === user2.verify); // Outputs: true (same method, saves memory)

// Update method centrally
KoelAuth.prototype.verify = function () {
  return `${this.user} verified with Aadhaar + Biometric`;
};

console.log(user1.verify()); // Outputs: Aariv verified with Aadhaar + Biometric
console.log(user2.verify()); // Outputs: Sarika verified with Aadhaar + Biometric
```

## ...args

**What**: Collects all function arguments into an array (e.g., `...args` captures `5, 3` as `[5, 3]`).  
**Why for Decorators**: Method decorators use `...args` to capture method arguments dynamically.

```typescript
function log(...args: number[]) {
  console.log(args);
}
log(5, 3); // [5, 3]
```

**Explanation**: `...args` gathers inputs for flexible handling in decorators.

## Strict Mode in JavaScript

In JavaScript, **strict mode** (`"use strict";`) sets `this` to `undefined` in global functions, preventing accidental global variable leaks.  
**Global variable leaks** occur when undeclared variables or properties are unintentionally added to the global object (`window` in browsers, `global` in Node.js). This happens because, in non-strict mode, JavaScript implicitly creates global variables when you assign to an undeclared variable.

## How It Happens (Non-Strict Mode)

In non-strict mode, `this` in a global function defaults to the global object (`window`/`global`).  
Assigning to an undeclared variable or property of `this` attaches it to the global object.  
This pollutes the global namespace, risking conflicts, bugs, or security issues.

```javascript
function leakyFunction() {
  undeclaredVar = 42; // No 'var', 'let', or 'const'
  console.log(this.undeclaredVar); // 42 (attached to window/global)
}
leakyFunction();
console.log(window.undeclaredVar); // 42 (global leak)
```

### How Can Others Access `window.undeclaredVar`?

Even if a user doesn’t manually check `window.undeclaredVar`, leaks are exploitable in these ways:

- **Malicious Scripts**: Attackers inject scripts (e.g., via XSS) to enumerate `window` properties:

```javascript
for (let prop in window) {
  if (window[prop] === 42) console.log(prop, window[prop]); // Finds undeclaredVar
}
```

- **Browser Console**: Developers or attackers can open the console and inspect `window` directly.
- **Third-Party Libraries**: Libraries loaded on your page (e.g., analytics) can accidentally or intentionally read/write to `window.undeclaredVar`, causing conflicts.
- **Extensions**: Browser extensions with JavaScript access can scan `window` for sensitive data.
- **Global Conflicts**: If another script uses `undeclaredVar`, your leak might overwrite it, causing bugs.

### How Strict Mode Fixes This

In strict mode (`"use strict";`):

- Assigning to undeclared variables throws a `ReferenceError`:

```javascript
"use strict";
undeclaredVar = 42; // ReferenceError: undeclaredVar is not defined
```

- `this` in global functions is `undefined`, so you can’t accidentally set `this.undeclaredVar` on `window`.
- **Result**: No global leak, no exposure.

```javascript
"use strict";
function processKyc() {
  const aadhaarId = "1234-5678-9012"; // Explicit, scoped
  return aadhaarId;
}
processKyc();
console.log(window.aadhaarId); // undefined (no leak)
```

```javascript
var name = "Aariv"; // Attached to window
function greet() {
  console.log(`Hello, ${window.name}!`); // Access via window
}
greet(); // Hello, Aariv!
console.log(window.document); // Browser's DOM
```

## Revisiting `this` and Context with `window`

**`this` in Global Scope**:

- **Non-strict**: `this` is `window`.
- **Strict**: `this` is `undefined`.
