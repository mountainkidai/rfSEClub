# Arrays and Tuples

**Explanation**: Arrays and tuples manage collections in TypeScript, critical for Koel’s Aadhaar data (e.g., lists of users or structured auth data).

## Arrays

- **Homogeneous**: All elements are the same type (e.g., string[] for Aadhaar numbers).
- **Dynamic length**: Add or remove elements freely (e.g., push, pop).
- **Example**: `let aadhaarList: string[] = ["1234-5678-9012"]; aadhaarList.push("5678-9012-3456");` — flexible size.

## Tuples

- **Heterogeneous**: Elements can have different types (e.g., [string, boolean] for Aadhaar + verification).
- **Fixed length**: Locked to a specific number of elements (e.g., [string, boolean] always has two).
- **Example**: `let kycRecord: [string, boolean] = ["1234-5678-9012", true];` — can’t push more.

```typescript
// type[]: List of Aadhaar numbers
let aadhaarList1: string[] = ["1234-5678-9012", "5678-9012-3456"];

// Array<type>: Same as above
let aadhaarList2: Array<string> = ["1234-5678-9012", "5678-9012-3456"];

// Usage (same for both)
aadhaarList1.push("9012-3456-7890"); // OK
aadhaarList2.push("9012-3456-7890"); // OK

// Tuple: Aadhaar and verification status
let userAuth: [string, boolean] = ["1234-5678-9012", true];

// Usage
aadhaarList1.push("9012-3456-7890"); // OK
userAuth[1] = false; // OK
// userAuth[2] = 123; // Error: Tuple has only 2 elements

// One more example
let singleTuple: [string] = ["1234-5678-9012"]; // Fixed: 1 element
// singleTuple.push("5678-9012-3456"); // Error: no push method
let array: string[] = ["1234-5678-9012"]; // Dynamic
array.push("5678-9012-3456"); // Works
```
