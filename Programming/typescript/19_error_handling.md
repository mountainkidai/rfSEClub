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