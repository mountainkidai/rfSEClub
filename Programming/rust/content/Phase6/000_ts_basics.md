### lets see basics in TS to understand the next concepts

# TypeScript Core Concepts (Quick Reference)

## Rust equivalent

```rust
// 1. Row type (like LedgerEntry interface)
#[derive(Debug, serde::Deserialize)]
pub struct LedgerEntry {
    pub id: u32,        // number ID
    pub hotel: String,  // hotel name
    pub amount: u64,    // price
}

// 2. Generic Table (like Dexie Table<Row, Key>)
struct Table<R, K> {
    rows: Vec<R>,      // R = LedgerEntry
    keys: Vec<K>,      // K = u32 (your number!)
}

struct AppDB {
    ledger: Table<LedgerEntry, u32>,  // ← Exact same concept!
    //         ↑RowType     ↑KeyType (number)
}

// 3. Initialize in constructor (like .stores())
impl AppDB {
    fn new() -> Self {
        let ledger = Table {
            rows: Vec::new(),
            keys: vec![1, 2, 3]  // u32 number keys
        };
        AppDB { ledger }
    }
}

```

## 1. Types (The Foundation)

```typescript
let name: string = "John"; // Must be string
let age: number = 30; // Must be number
let isActive: boolean = true; // true/false only
```

**`: type` = Type annotation** - tells TypeScript what data to expect.

## 2. Interfaces (Object Blueprints)

```typescript
interface LedgerEntry {
  id: number;
  hotel: string;
  amount: number;
}
```

**Defines object shape**: `{ id: number, hotel: string, amount: number }`

## 3. TypeScript extends

```ts
// 1. Base interface (basic user)
interface User {
  name: string;
  email: string;
}

// 2. Extend = inherit + add new fields
interface Admin extends User {
  role: string; // NEW property
  canDelete: boolean; // NEW property
}

// 3. Admin gets EVERYTHING from User + extras
const admin: Admin = {
  name: "John", // From User
  email: "john@phunsuk.com", // From User
  role: "superadmin", // From Admin
  canDelete: true, // From Admin
};
```

## 3. Generics `<T>` (Type Variables)

```ts
// ❌ Must write separate functions
function printString(data: string) {
  console.log(data);
}
function printNumber(data: number) {
  console.log(data);
}
function printBoolean(data: boolean) {
  console.log(data);
}
```

```ts
// ✅ ONE function works with ANY type
function print<T>(data: T) {
  console.log(data);
}

// Use with different types:
print<string>("Shimla"); // T = string
print<number>(4500); // T = number
print<boolean>(true); // T = boolean
```

```ts
// WITHOUT ! (but needs workaround)
class Car {
  engine: string = ""; // Default empty string
}

const myCar = new Car();
myCar.engine = "V8";
console.log(myCar.engine); // "V8" ✅ WORKS!
```

```ts
// WITH !
class Car {
  engine!: string; // No default needed
}

const myCar = new Car();
myCar.engine = "V8";
console.log(myCar.engine); // "V8" ✅ WORKS!
```

```ts
// WITHOUT ! → COMPILER ERROR ❌
class Car {
  engine: string; // ERROR: "No initializer AND not set in constructor"
  // TypeScript stops you here!
}

const myCar = new Car();
myCar.engine = "V8";
```

### super()

#### Think Like This

```text
Animal = Basic pet (HAS name)
Dog = Animal + extra (HAS name + breed)
```

### WITHOUT super() = BROKEN DOG ❌

```ts
class Dog extends Animal {
  constructor(name, breed) {
    // Forgot Animal part!
    this.breed = breed;
  }
}
new Dog("Buddy", "Labrador"); // ERROR! name never set!
```
