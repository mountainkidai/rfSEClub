# Functions (Super Concise, Koel Context)

**Explanation**: TypeScript functions use type annotations for parameters and return values to ensure type safety in Koel’s Aadhaar auth system. Key features:

- **Function Types:** Define parameter and return types.
- **Optional Parameters (?)**: Parameters that can be omitted.
- **Default Parameters:** Parameters with preset values.
- **Rest Parameters (...)**: Collect multiple arguments into a typed array.
- **Function Overloading**: Function overloading in TypeScript allows a function to have multiple call signatures (input/output types) for different use cases, while sharing the same implementation.

```typescript
// Function Type: Validate Aadhaar
function validateAadhaar(aadhaar: string, strict: boolean = true): boolean {
  return strict ? aadhaar.length === 14 : aadhaar.length > 0;
}

// Optional Parameter
function getUser(aadhaar: string, token?: string): { aadhaar: string } {
  return { aadhaar };
}

// Rest Parameters
function logUsers(...aadhaars: string[]): void {
  console.log(aadhaars);
}

// Function Overloading
function processInput(input: string): string;
function processInput(input: number): number;
function processInput(input: string | number): string | number {
  return input;
}

// Usage
console.log(validateAadhaar("1234-5678-9012")); // true
console.log(getUser("1234-5678-9012")); // { aadhaar: "1234-5678-9012" }
logUsers("1234-5678-9012", "5678-9012-3456"); // ["1234-5678-9012", "5678-9012-3456"]
console.log(processInput("test")); // "test"
console.log(processInput(123)); // 123
```

**Function overloading** lets a function handle different input types with specific outputs, using multiple signatures to define valid input/output pairs. The implementation handles all cases. It’s like telling TypeScript, “This function works only for these specific types,” ensuring strict safety.

# Compile Time vs. Runtime in TypeScript (Super Concise, Koel Context)

- **Compile Time:** When TypeScript (tsc) checks types and converts .ts to .js. Catches type errors (e.g., wrong Aadhaar input) before code runs. Types (e.g., signatures) exist only here.
- **Runtime:** When compiled JavaScript runs (e.g., in Node.js). Types are erased; only logic (e.g., if checks) matters. Errors not caught at compile time can crash here.

```typescript
function add(a: string, b: string): string; // Signature
function add(a: number, b: number): number; // Signature
function add(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") return a + b;
  if (typeof a === "number" && typeof b === "number") return a + b;
  throw new Error("Wrong types");
}

add("1234-", "5678"); // Compile time: Type string, Runtime: "1234-5678"
add(1234, 5678); // Compile time: Type number, Runtime: 6912
add("1234-", 5678); // Compile-time error: No signature matches
```

## Why Signatures Help

- **Compile Time:** Signatures block invalid calls (e.g., string + number), ensuring Koel’s Aadhaar API is safe before running.
- **Runtime:** Only valid calls execute; signatures reduce errors by limiting inputs.
