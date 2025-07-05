# Basic Types

**Explanation**:  
TypeScript’s basic types define variable data types for type safety.

## Key Types

- **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`
- **Any**: Allows any type, bypassing type checks (use sparingly)
- **Unknown**: Safer `any` alternative; requires type checking before use
- **Void**: For functions returning nothing
- **Never**: For functions that never return (e.g., throw errors or infinite loops)

## Example

```ts
let aadhaar: string = "1234-5678-9012";
let isVerified: boolean = false;
let userData: any = { name: "Aariv" }; // Avoid this
let unknownData: unknown = JSON.parse(data); // Safer

function logError(): void {
  console.log("Error");
}

function crash(): never {
  throw new Error("Crash");
}

```

## any in Addition Program

**What**: `any` allows any value without type checking, bypassing TypeScript’s safety.  
**Risk**: No compile-time errors, but runtime errors if types are wrong.

```ts
function addScores(a: any, b: any) {
  return a + b; // No type checks
}

let score1 = "1234"; // Aadhaar-based score (string by mistake)
let score2 = 5678;
console.log(addScores(score1, score2)); // "12345678" (string concatenation, not addition!)
```
## unknown in Addition Program

**What**: `unknown` accepts any value but requires type checking before operations, ensuring safety.  
**Benefit**: Forces validation, preventing runtime errors.

```ts
function addScores(a: unknown, b: unknown): number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // Type-safe
  }
  throw new Error("Invalid inputs");
}

let score1: unknown = JSON.parse('{"score": 1234}').score; // API response
let score2: unknown = 5678;
console.log(addScores(score1, score2)); // 6912 (if score1 is number)

```
## never in Addition Program
**What**: never is for functions that never return, like error handlers in validation. Benefit: Ensures TypeScript catches unhandled cases in logic.
```ts
function validateInput(input: unknown): number {
  if (typeof input === "number") {
    return input;
  }
  throwError(); // TypeScript knows this never returns
}

function throwError(): never {
  throw new Error("Invalid input for addition");
}

function addScores(a: unknown, b: unknown): number {
  return validateInput(a) + validateInput(b);
}

let score1 = 1234;
let score2 = "5678"; // Bad input
console.log(addScores(score1, score2)); // Throws: "Invalid input for addition"
```
- **String**: Text data, e.g., Aadhaar number as text.
- **Number**: Numeric values, e.g., user scores.
- **Boolean**: True/false, e.g., verification status.
- **Null**: Explicitly no value, e.g., missing user data.
- **Undefined**: Uninitialized value, e.g., unset token.
- **BigInt**: Large integers, e.g., transaction IDs.
- **Symbol**: Unique identifiers, e.g., auth keys.
- **Any**: Allows any value, skips type checks (unsafe, avoid).
- **Unknown**: Accepts any value but requires type checks (safer).
- **Void**: For functions returning nothing, e.g., logging.
- **Never**: For functions that never return (throws or loops).

```ts
let aadhaar: string = "1234-5678-9012";
let score: number = 100;
let isVerified: boolean = true;
let noData: null = null;
let token: undefined = undefined;
let bigId: bigint = 12345678901234567890n;
let key: symbol = Symbol("auth");

let rawData: any = { aadhaar: "1234" }; // Unsafe
let apiResponse: unknown = JSON.parse(data); // Safer

function log(): void {
  console.log("Logged");
}

function crash(): never {
  throw new Error("Invalid Aadhaar");
}

```
## Inferred Type

Inferred type in TypeScript refers to the ability of the TypeScript compiler to automatically determine the type of a variable, expression, or function return value without requiring explicit type annotations.  
This feature significantly reduces the verbosity of code while maintaining type safety.

```ts
let age = 30; // Inferred type: number
const name = "Alice"; // Inferred type: "Alice" (literal type)
