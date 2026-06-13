# Generics (Super Concise, Simple Calculator Addition)

**Explanation**: Generics in TypeScript allow reusable code with flexible types, like a calculator that adds numbers or concatenates strings, defined at usage time. Key features:

- **Generic Functions**: Functions with type parameters (e.g., `<T>`).
- **Generic Interfaces**: Interfaces with type placeholders.
- **Generic Classes**: Classes with flexible types.
- **Constraints**: Limit types (e.g., `<T extends number>`).
- **Default Types**: Set fallback types (e.g., `<T = number>`).

**Evolution of Simple Calculator Program**: We’ll build on a basic calculator, adding generics step-by-step as needs arise, starting simple and growing, explaining each in one line.

## Step 1: Basic Function for Addition

**Need**: Add two numbers.  
**What**: Simple function to add numbers.  
**Code**:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3)); // 8
```

**Explanation**: Basic function adds numbers, but limited to numbers.  
**Issue**: Can’t add strings (e.g., concatenate "5" + "3" = "53").

## Step 2: Add Union Type

**Need**: Support adding strings (concatenation).  
**Solution**: Use union type `number | string` to handle both.  
**Code**:

```typescript
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;
  throw new Error("Mismatched types");
}
console.log(add(5, 3)); // 8
console.log(add("5", "3")); // "53"
// console.log(add(5, "3")); // Error at runtime
```

**Explanation**: Union type allows numbers or strings, with checks to avoid mismatches.  
**Issue**: `add(5, "3")` compiles but throws at runtime; return type (`number | string`) is vague.

## Step 3: Need for Type Flexibility (Generic Function)

**Need**: Ensure same input/output types (e.g., number → number, string → string).  
**Solution**: Use generic type `<T>` for flexible, type-safe addition.  
**Code**:

```typescript
function add<T>(a: T, b: T): T {
  return (a as any) + (b as any); // Unsafe, temporary
}
console.log(add<number>(5, 3)); // 8
console.log(add<string>("5", "3")); // "53"
// console.log(add<number>(5, "3")); // Error: "3" not number
```

**Explanation**: `<T>` ensures `a`, `b`, and return are the same type, set at call time.  
**Issue**: `T` allows any type (e.g., boolean), causing unsafe addition.

## Step 4: Need for Type Safety (Constraint)

**Need**: Restrict to types supporting addition (number, string).  
**Solution**: Add constraint `T extends number | string`.  
**Code**:

```typescript
function add<T extends number | string>(a: T, b: T): T {
  return (a as any) + (b as any); // Still unsafe
}
console.log(add<number>(5, 3)); // 8
console.log(add<string>("5", "3")); // "53"
// console.log(add<boolean>(true, false)); // Error: boolean not allowed
```

**Explanation**: Constraint limits `T` to number or string, preventing invalid types.  
**Issue**: Function is standalone; we need a reusable calculator structure.

## Step 5: Need for Structured Logic (Generic Interface)

**Need**: Define a calculator with a typed add method.  
**Solution**: Create generic interface `Calculator<T>`.  
**Code**:

```typescript
interface Calculator<T> {
  add(a: T, b: T): T;
}

function add<T extends number | string>(a: T, b: T): T {
  return (a as any) + (b as any);
}

const calc: Calculator<number> = { add };
console.log(calc.add(5, 3)); // 8
```

**Explanation**: Generic interface ensures `add` method uses same type `T` for inputs/output.  
**Issue**: Interface alone doesn’t store state (e.g., a base value).

## Step 6: Need for State (Generic Class)

**Need**: A calculator class with a base value for addition.  
**Solution**: Create generic class `Adder<T>` with state.  
**Code**:

```typescript
interface Calculator<T> {
  add(a: T, b: T): T;
}

class Adder<T extends number | string> implements Calculator<T> {
  base: T;
  constructor(base: T) {
    this.base = base;
  }
  add(a: T, b: T): T {
    return (a as any) + (b as any);
  }
}

const numCalc = new Adder<number>(10);
console.log(numCalc.add(5, 3)); // 18 (5 + 3 + 10)
const strCalc = new Adder<string>("base");
console.log(strCalc.add("5", "3")); // "base53"
```

**Explanation**: Generic class stores `base` and uses `T` for type-safe addition.  
**Issue**: Must specify `<number>` or `<string>` every time.

## Step 7: Need for Simplicity (Default Type)

**Need**: Default to `number` if type isn’t specified.  
**Solution**: Add default type `T = number`.  
**Code**:

```typescript
interface Calculator<T> {
  add(a: T, b: T): T;
}

class Adder<T extends number | string = number> implements Calculator<T> {
  base: T;
  constructor(base: T) {
    this.base = base;
  }
  add(a: T, b: T): T {
    return (a as any) + (b as any);
  }
}

const calc = new Adder(10); // Defaults to number
console.log(calc.add(5, 3)); // 18
const strCalc = new Adder<string>("base");
console.log(strCalc.add("5", "3")); // "base53"
```

**Explanation**: Default `T = number` simplifies usage for number-based calculators.
