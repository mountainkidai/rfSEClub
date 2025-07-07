# Enums: (Super Concise, Koel Context)

**Explanation**: Enums in TypeScript define a set of named constants, either numeric or string, for consistent values in Koel’s Aadhaar auth system. They improve readability and type safety.

- **Numeric Enums**: Auto-incrementing numbers (e.g., 0, 1).
- **String Enums**: Explicit string values.
- **Const Enums**: Compile-time only, erased in JavaScript output (no runtime code).

```typescript
// Numeric Enum: Verification steps
enum VerificationStep {
  Pending, // 0
  Approved, // 1
  Rejected, // 2
}

// String Enum: API status
enum ResponseStatus {
  Success = "SUCCESS",
  Error = "ERROR",
}

// Const Enum: Auth levels (no runtime code)
const enum AuthLevel {
  Basic = "BASIC",
  Admin = "ADMIN",
}

// Usage
let step: VerificationStep = VerificationStep.Approved; // 1
let status: ResponseStatus = ResponseStatus.Success; // "SUCCESS"
let level: AuthLevel = AuthLevel.Basic; // "BASIC" (inlined)
```

**Numeric/String Enums**: Generate runtime objects, useful for dynamic access (e.g., `Object.keys(VerificationStep)`).  
**Const Enums**: Erased at compile time, inlined as values (e.g., `"BASIC"`), reducing code size but no runtime object.  
**Why Use**: Numeric for ordered steps, string for explicit Aadhaar API statuses, const for static auth levels.  
**Compiled Output**:

- **Numeric/String**: JavaScript object (e.g., `VerificationStep = { Pending: 0, Approved: 1, Rejected: 2 }`).
- **Const**: No object, just inlined values (e.g., `let level = "BASIC"`).  
  **Use** `const enum` for fixed auth levels to save size, regular enums for runtime status lists.

```typescript
// Const Enum: Lightweight, compile-time only
const enum ResponseStatus {
  Success = "SUCCESS",
  Error = "ERROR",
}
let status: ResponseStatus = ResponseStatus.Success; // "SUCCESS" (inlined)
// Object.keys(ResponseStatus); // Error: No runtime object

// Regular String Enum: Runtime access
enum ResponseStatusRegular {
  Success = "SUCCESS",
  Error = "ERROR",
}
let status2: ResponseStatusRegular = ResponseStatusRegular.Success; // "SUCCESS"
console.log(Object.values(ResponseStatusRegular)); // ["SUCCESS", "ERROR"]
```
