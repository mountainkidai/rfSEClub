# Advanced Types (One-Liners, Simple Calculator Addition)

**Evolving a calculator program, adding advanced types as needs arise, each explained in one line.**

## Step 1: Basic Addition

**Need**: Add numbers.  
**Code**:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3)); // 8
```

**Explanation**: Simple function adds numbers.  
**Issue**: Can’t handle varied input/output types (e.g., string concatenation).

## Step 2: Conditional Types

**Need**: Return type based on input (number → number, string → string).  
**Solution**: Use conditional type `T extends number ? number : string`.  
**Code**:

```typescript
type AddResult<T> = T extends number ? number : string;
function add<T extends number | string>(a: T, b: T): AddResult<T> {
  if (typeof a === "number" && typeof b === "number")
    return (a + b) as AddResult<T>;
  if (typeof a === "string" && typeof b === "string")
    return (a + b) as AddResult<T>;
  throw new Error("Mismatched types");
}
console.log(add<number>(5, 3)); // 8 (type: number)
console.log(add<string>("5", "3")); // "53" (type: string)
// console.log(add<number>(5, "3")); // Error: Type mismatch
```

**Explanation**: Conditional type picks number or string based on input.  
**Issue**: Need to transform calculator properties.

## Step 3: Mapped Types

**Need**: Make calculator input properties (e.g., a, b) optional for flexible usage.  
**Solution**: Use `Partial<T>` to make all properties optional.  
**Code**:

```typescript
type Calculator = { a: number; b: number };
type OptionalCalc = Partial<Calculator>;
type AddResult<T> = T extends number ? number : string;
function add<T extends number | string>(a: T, b: T): AddResult<T> {
  if (typeof a === "number" && typeof b === "number")
    return (a + b) as AddResult<T>;
  if (typeof a === "string" && typeof b === "string")
    return (a + b) as AddResult<T>;
  throw new Error("Mismatched types");
}
const calc: OptionalCalc = { a: 5 }; // b optional
console.log(add(calc.a || 0, calc.b || 0)); // 5 (0 for missing b)
```

**Explanation**: `Partial<Calculator>` allows a or b to be omitted, using defaults in add.  
**Issue**: Need to select or exclude specific calculator properties.

## Step 4: Pick and Omit

**Need**: Use only certain properties (e.g., a, b) or exclude others (e.g., id).  
**Solution**: Use `Pick` to select properties and `Omit` to exclude them.  
**Code**:

```typescript
type Calculator = { a: number; b: number; id: string };
type JustInputs = Pick<Calculator, "a" | "b">;
type NoId = Omit<Calculator, "id">;
const inputs: JustInputs = { a: 5, b: 3 };
console.log(add(inputs.a, inputs.b)); // 8
```

**Explanation**: `Pick` grabs a, b; `Omit` excludes id for focused calculator data.  
**Issue**: Need to define specific operation types (e.g., "add", "subtract").

## Step 5: Need for Operation Types (Template Literal Types)

**Need**: Restrict calculator operations to specific strings (e.g., "add", "subtract").  
**Solution**: Use template literal type for operation names.  
**Code**:

```typescript
type Operation = "add" | "subtract";
type Calculator = { a: number; b: number };
type InputsOnly = Pick<Calculator, "a" | "b">;
function calc(op: Operation, inputs: InputsOnly): number {
  if (op === "add") return (inputs.a || 0) + (inputs.b || 0);
  if (op === "subtract") return (inputs.a || 0) - (inputs.b || 0);
  throw new Error("Invalid operation");
}
const inputs: InputsOnly = { a: 5, b: 3 };
console.log(calc("add", inputs)); // 8
console.log(calc("subtract", inputs)); // 2
```

**Explanation**: Template literal type restricts `op` to "add" or "subtract" for safe operations.  
**Why Advanced Types Matter**: Enable precise, flexible calculator data and operation handling, reducing errors.
