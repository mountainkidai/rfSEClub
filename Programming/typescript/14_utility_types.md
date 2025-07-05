# 14. Utility Types (Super Concise, Simple Calculator Addition)

**What Are Utility Types?**: Built-in TypeScript types that transform or manipulate other types (e.g., make properties optional, pick specific ones), enhancing flexibility for calculator data.  
**Why Use Utility Types?**: Simplify type creation for calculator objects, ensuring precise data handling without manual type definitions.  
**Evolution of Simple Calculator Program**: Building on the calculator for addition, adding utility types as needs arise, each explained in one line, with issues and solutions.

## Step 1: Basic Calculator Object

**Need**: Add numbers from a calculator object.  
**What**: Define a `Calculator` type with `a`, `b`.  
**Code**:

```typescript
type Calculator = { a: number; b: number };
function add(calc: Calculator): number {
  return calc.a + calc.b;
}
console.log(add({ a: 5, b: 3 })); // 8
```

**Explanation**: Type defines required `a`, `b` for addition.  
**Issue**: All properties must be provided, even if optional.

## Step 2: Need Optional Properties (Partial)

**Need**: Allow `a` or `b` to be optional.  
**Solution**: Use `Partial<T>` to make all properties optional.  
**Code**:

```typescript
type Calculator = { a: number; b: number };
type OptionalCalc = Partial<Calculator>;
function add(calc: OptionalCalc): number {
  return (calc.a || 0) + (calc.b || 0);
}
console.log(add({ a: 5 })); // 5 (b defaults to 0)
```

**Explanation**: `Partial` makes `a`, `b` optional, simplifying input.  
**Issue**: Need all properties required explicitly.

## Step 3: Need Required Properties (Required)

**Need**: Ensure `a`, `b` are always provided.  
**Solution**: Use `Required<T>` to make all properties required.  
**Code**:

```typescript
type Calculator = { a?: number; b?: number };
type RequiredCalc = Required<Calculator>;
function add(calc: RequiredCalc): number {
  return calc.a + calc.b;
}
console.log(add({ a: 5, b: 3 })); // 8
// console.log(add({ a: 5 })); // Error: b required
```

## Step 4: Need Subset of Properties (Pick)

**Need**: Use only `a`, `b`, ignoring extra properties like `id`.  
**Solution**: Use `Pick<T, K>` to select specific properties.  
**Code**:

```typescript
type Calculator = { a: number; b: number; id: string };
type InputsOnly = Pick<Calculator, "a" | "b">;
function add(calc: InputsOnly): number {
  return calc.a + calc.b;
}
console.log(add({ a: 5, b: 3 })); // 8
```

**Explanation**: `Pick` creates a type with only `a`, `b`.  
**Issue**: Need to exclude specific properties.

## Step 5: Need to Exclude Properties (Omit)

**Need**: Exclude `id` from `Calculator`.  
**Solution**: Use `Omit<T, K>` to remove properties.  
**Code**:

```typescript
type Calculator = { a: number; b: number; id: string };
type NoId = Omit<Calculator, "id">;
function add(calc: NoId): number {
  return calc.a + calc.b;
}
console.log(add({ a: 5, b: 3 })); // 8
```

**Explanation**: `Omit` creates a type without `id`.  
**Issue**: Need a key-value mapping for operations.

## Step 6: Need Key-Value Pairs (Record)

**Need**: Map operation names to calculator functions.  
**Solution**: Use `Record<K, T>` for key-value types.  
**Code**:

```typescript
type Operation = "add" | "subtract";
type CalcFunctions = Record<Operation, (a: number, b: number) => number>;
const operations: CalcFunctions = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};
console.log(operations.add(5, 3)); // 8
```

**Explanation**: `Record` maps operation strings to typed functions.  
**Why Utility Types Matter**: Simplify calculator type definitions, making data handling precise and flexible.

## 1. JavaScript Memory Basics (Stack and Heap)

**What**: JavaScript uses memory to store data. The stack holds execution contexts (function calls, variables), and the heap stores objects/arrays (dynamic data).  
**Why**: Execution context lives in the stack, affecting `this`. Objects (like your Koel instances) live in the heap, referenced by the stack.

```javascript
Stack                        Heap
-----                        -----
| Context: sayHi() | -----> | { name: "Aariv" } |
| Var: name       |        -----
-----
```

```javascript
var name = "Aariv"; // Stack: name points to heap object
function sayHi() {
  console.log(name);
}
sayHi(); // Stack: new context for sayHi
```

## 2. Execution Context

**What**: A "box" created when a function runs, holding its variables, `this`, and scope. The call stack manages these contexts.  
**Why**: Determines what `this` is based on how a function is called.

```javascript
Call Stack
-----
| Global Context | this: window, vars: name
|----------------|
| sayHi Context  | this: window, args: none
-----
```

```javascript
var name = "Aariv";
function sayHi() {
  console.log(this.name); // this is window
}
sayHi(); // New context on stack
```

## Global Object (window)

**What**: The browser’s global object. Global variables/functions attach to `window`. `this` defaults to `window` in global context (non-strict).  
**Why**: If `this` isn’t set, it’s `window`, which can break Koel’s auth logic.

```javascript
Heap
-----
| window: { name: "Aariv" } |
-----
Stack
-----
| Global Context | this -----> window
-----
```

```javascript
var name = "Aariv";
console.log(window.name); // Aariv
console.log(this.name); // Aariv (this is window)
```

## this Keyword

**What**: Points to the object running the function. Set by how the function is called:

- Global: `window` (non-strict) or `undefined` (strict).
- Object method: The object.
- Constructor: New instance.

```javascript
Heap
-----
| auth: { aadhaar: "1234..." } |
-----
Stack
-----
| check Context | this -----> auth
| Global Context|
-----
```

```javascript
class Koel {
  aadhaar = "1234-5678-9012";
  check() {
    console.log(this.aadhaar);
  }
}
const auth = new Koel();
auth.check(); // 1234-5678-9012 (this is auth)
```

## 6. Regular vs. Arrow Functions

**What**:

- **Regular**: `this` depends on the caller.
- **Arrow**: `this` is fixed to the scope where the function is defined.  
  **Why**: Arrow functions ensure `this` stays correct (e.g., `Pass` instance, not `window`).

```javascript
Heap
-----
| pass: { system: "Secretariat" } |
-----
Stack
-----
| check Context | this -----> pass (fixed)
| Global Context|
-----
```

````javascript
class Pass {
  system = "Secretariat";
  check = () => {
   弄

System: ```javascript
classurri = new Pass().check(); // TypeError: this is undefined, can’t access system
}
stolen(); // TypeError: this is undefined, can’t access system
````

**Explanation**: Arrow functions in `Pass` ensure `this` refers to the `Pass` instance, avoiding `undefined` issues with regular functions.  
**Example (Regular)**:

```javascript
class Pass {
  system = "Secretariat";
  check() {
    console.log(this.system);
  }
}
const stolen = new Pass().check;
stolen(); // TypeError: this is undefined, can’t access system
```

These methods were introduced to control what `this` points to when calling a function:

- `call(thisArg, ...args)`: Calls the function with `this` set to `thisArg`.
- `apply(thisArg, argsArray)`: Like `call`, but takes arguments as an array.
- `bind(thisArg)`: Creates a new function with `this` permanently set to `thisArg`.
