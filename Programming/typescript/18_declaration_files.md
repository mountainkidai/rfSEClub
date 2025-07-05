
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
KoelAuth.prototype.verify = function() {
  return `${this.user} verified with Aadhaar KYC`;
};

const user1 = new KoelAuth("Aariv");
const user2 = new KoelAuth("Sarika");

console.log(user1.verify()); // Outputs: Aariv verified with Aadhaar KYC
console.log(user2.verify()); // Outputs: Sarika verified with Aadhaar KYC
console.log(user1.verify === user2.verify); // Outputs: true (same method, saves memory)

// Update method centrally
KoelAuth.prototype.verify = function() {
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

