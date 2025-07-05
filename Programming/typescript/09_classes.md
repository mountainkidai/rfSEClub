# Classes
## Step 1: Basic Class for Addition
**Need**: A calculator to add two numbers (e.g., scores).  
**What**: A basic class with a method to add numbers.  
**Why**: Organizes addition logic in a reusable blueprint.

```typescript
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
```

## Step 2: Add Properties (Need for Data)
**Need**: Store a calculator ID and value (e.g., a fixed score).  
**What**: Add id and value properties with access modifiers.  
**Why**: Tracks calculator-specific data securely.

```typescript
class Calculator {
  private id: string; // Only class can access
  readonly value: number; // Can’t change after set
  public name: string; // Anyone can access

  constructor(id: string, name: string, value: number) {
    this.id = id;
    this.name = name;
    this.value = value;
  }

  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator("calc1", "MyCalc", 100);
console.log(calc.add(5, 3)); // 8
console.log(calc.name); // "MyCalc"
// console.log(calc.id); // Error: private
// calc.value = 200; // Error: readonly
```

## Step 3: Need for Shared Base Value (Add Abstract Class)
**Need**: Add a base number (e.g., 10) to every addition, shared across multiple calculators.  
**What**: Create an abstract base class with a shared base property.  
**Why**: Avoids duplicating base in every calculator.

```typescript
abstract class BaseCalc {
  protected base: number; // Accessible to subclasses

  constructor(base: number) {
    this.base = base;
  }
}

class Calculator extends BaseCalc {
  private id: string;
  readonly value: number;
  public name: string;

  constructor(id: string, name: string, value: number, base: number) {
    super(base); // Call parent’s constructor
    this.id = id;
    this.name = name;
    this.value = value;
  }

  add(a: number, b: number): number {
    return a + b + this.base; // Use inherited base
  }
}

const calc = new Calculator("calc1", "MyCalc", 100, 10);
console.log(calc.add(5, 3)); // 18 (5 + 3 + 10)
```

**Explanation**: BaseCalc provides base, inherited by Calculator via extends, with protected allowing access.

## Step 4: Need for super
**Need**: Ensure base is set properly in BaseCalc when creating Calculator.  
**What**: Use super(base) to call BaseCalc’s constructor.  
**Why**: Initializes parent’s base before child properties, required for inheritance.

```typescript
abstract class BaseCalc {
  protected base: number;

  constructor(base: number) {
    this.base = base;
  }
}

class Calculator extends BaseCalc {
  private id: string;
  readonly value: number;
  public name: string;

  constructor(id: string, name: string, value: number, base: number) {
    super(base); // Must call parent’s constructor
    this.id = id;
    this.name = name;
    this.value = value;
  }

  add(a: number, b: number): number {
    return a + b + this.base;
  }
}

const calc = new Calculator("calc1", "MyCalc", 100, 10);
console.log(calc.add(5, 3)); // 18
```

**Explanation**: super(base) sets BaseCalc’s base, ensuring Calculator can use it.

## Step 5: Need for Consistent Total (Add Abstract Method)
**Need**: Ensure every calculator has a getTotal method for its value plus base.  
**What**: Add an abstract method in BaseCalc, forcing subclasses to implement it.  
**Why**: Guarantees all calculators provide a total consistently.

```typescript
abstract class BaseCalc {
  protected base: number;

  constructor(base: number) {
    this.base = base;
  }

  abstract getTotal(): number; // Must be implemented
}

class Calculator extends BaseCalc {
  private id: string;
  readonly value: number;
  public name: string;

  constructor(id: string, name: string, value: number, base: number) {
    super(base);
    this.id = id;
    this.name = name;
    this.value = value;
  }

  add(a: number, b: number): number {
    return a + b + this.base;
  }

  getTotal(): number {
    return this.value + this.base; // Implement abstract method
  }
}

const calc = new Calculator("calc1", "MyCalc", 100, 10);
console.log(calc.add(5, 3)); // 18
console.log(calc.getTotal()); // 110 (100 + 10)
```

## Step 6: Need for Method Consistency (Add Interface)
**Need**: Guarantee add method has correct types across all calculators.  
**What**: Add Adder interface to enforce add method signature.  
**Why**: Ensures type-safe addition logic.

```typescript
interface Adder {
  add(a: number, b: number): number;
}

abstract class BaseCalc {
  protected base: number;

  constructor(base: number) {
    this.base = base;
  }

  abstract getTotal(): number;
}

class Calculator extends BaseCalc implements Adder {
  private id: string;
  readonly value: number;
  public name: string;

  constructor(id: string, name: string, value: number, base: number) {
    super(base);
    this.id = id;
    this.name = name;
    this.value = value;
  }

  add(a: number, b: number): number {
    return a + b + this.base;
  }

  getTotal(): number {
    return this.value + this.base;
  }
}

const calc = new Calculator("calc1", "MyCalc", 100, 10);
console.log(calc.add(5, 3)); // 18
console.log(calc.getTotal()); // 110
console.log(calc.name); // "MyCalc"
```

**Explanation**: implements Adder ensures Calculator’s add method follows the interface’s type rules.

## Why Each Feature?
**Class**: Blueprints calculator with add method.  
**Properties (private, readonly, public)**: Securely stores ID, locks value, exposes name.  
**Abstract Class**: Shares base across calculators, avoids duplication.  
**Super**: Sets up parent’s base before child properties.  
**Abstract Method**: Forces consistent getTotal implementation.  
**Interface**: Ensures add has correct types.

