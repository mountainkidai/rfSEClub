# Type Guards in TypeScript (Super Concise, Simple Calculator Addition)

**What Are Type Guards?**: Type guards are checks (e.g., `typeof`, `in`, custom functions) that narrow a value’s type within a code block, ensuring type-safe operations in TypeScript.  
**Why Use Type Guards?**: They prevent runtime errors by confirming a value’s type (e.g., number vs. string, or valid object) before using it.  
**Context**: A calculator to add numbers from objects, ensuring type safety with guards.

## Step 1: Basic Addition with Union

**Need**: Add numbers or strings from inputs.  
**What**: Function with union type `number | string`.  
**Code**:

```typescript
function add(a: number | string, b: number | string): number | string {
  return (a as any) + (b as any); // Unsafe
}
console.log(add(5, 3)); // 8
console.log(add("5", "3")); // "53"
```

## Step 2: Need Type Safety (Typeof Guard)

**Need**: Ensure correct addition based on type (number vs. string).  
**Solution**: Use `typeof` guard to narrow types.  
**Code**:

```typescript
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;
  throw new Error("Mismatched types");
}
console.log(add(5, 3)); // 8
console.log(add("5", "3")); // "53"
// console.log(add(5, "3")); // Throws error
```

## Step 3: Need Object Safety (In Operator Guard)

**Need**: Add numbers from a calculator object with optional properties.  
**Solution**: Use `in` operator to check properties exist.  
**Code**:

```typescript
type Calculator = { a?: number; b?: number; id?: string };
function add(calc: any): number {
  if ("a" in calc && "b" in calc) return (calc.a || 0) + (calc.b || 0);
  throw new Error("Invalid calculator");
}
console.log(add({ a: 5, b: 3 })); // 8
```

**Explanation**: `in` guard confirms a and b exist before adding.  
**Issue**: `any` is unsafe; need precise object type checking.

## Step 4: Need Custom Validation (Custom Type Guard)

**Need**: Explicitly validate a Calculator object.  
**Solution**: Use custom type guard with `obj is Calculator`.  
**Code**:

```typescript
type Calculator = { a?: number; b?: number; id?: string };
function isCalculator(obj: any): obj is Calculator {
  return "a" in obj && "b" in obj;
}
function add(calc: any): number {
  if (isCalculator(calc)) return (calc.a || 0) + (calc.b || 0);
  throw new Error("Invalid calculator");
}
console.log(add({ a: 5, b: 3 })); // 8
```

**Explanation**: Custom guard narrows `any` to `Calculator` for safe addition.  
**Issue**: Need to use only a and b, ignoring id.

## Step 5: Need Focused Properties (Pick for Inputs)

**Need**: Use only a and b from Calculator, ignoring id.  
**Solution**: Use `Pick<Calculator, "a" | "b">` to create a focused type.  
**Code**:

```typescript
type Calculator = { a?: number; b?: number; id?: string };
type InputsOnly = Pick<Calculator, "a" | "b">;
function isCalculator(obj: any): obj is InputsOnly {
  return "a" in obj && "b" in obj;
}
function add(calc: any): number {
  if (isCalculator(calc)) return (calc.a || 0) + (calc.b || 0);
  throw new Error("Invalid calculator");
}
const inputs: InputsOnly = { a: 5, b: 3 }; // No id needed
console.log(add(inputs)); // 8
```

**Explanation**: `Pick` creates `InputsOnly` with just a and b, simplifying input validation.  
**Why Use Pick Instead of Calculator Directly?**:  
**Problem**: Using `Calculator` directly allows `id`, which is irrelevant for addition, and could require `id` in stricter contexts, causing errors.  
**Solution**: `Pick<Calculator, "a" | "b">` ensures only a and b are needed, making the function flexible and focused.  
**Example**: `const calc: Calculator = { a: 5, b: 3 };` might fail in strict mode if `id` is required, but `InputsOnly` avoids this.

## Step 6: Need Instance Checking (Instanceof Guard)

**Need**: Handle class-based calculator objects.  
**Solution**: Use `instanceof` guard to check class type.  
**Code**:

```typescript
class CalculatorClass {
  constructor(
    public a: number,
    public b: number,
  ) {}
}
function add(calc: any): number {
  if (calc instanceof CalculatorClass) return calc.a + calc.b;
  if (isCalculator(calc)) return (calc.a || 0) + (calc.b || 0);
  throw new Error("Invalid calculator");
}
const classCalc = new CalculatorClass(5, 3);
console.log(add(classCalc)); // 8
```

**Explanation**: `instanceof` narrows `calc` to `CalculatorClass` for safe class-based addition.  
**Why Type Guards Matter**: Narrow types to prevent errors in calculator operations, ensuring safe addition.
