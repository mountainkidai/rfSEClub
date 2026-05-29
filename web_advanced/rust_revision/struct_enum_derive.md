# Topic 2

## Structs, Enums, and Derive Macros

---

### WHY THIS MATTERS

In backend engineering:

Everything becomes data modeling.

Your entire system is basically:

- users
- employees
- invoices
- projects
- attendance
- permissions
- reports

All represented through:

- structs
- enums

This is the backbone of operational systems.

---

### PART 1 — STRUCTS

Structs are custom data types.

Think:

“Blueprint for operational data.”

---

### BASIC STRUCT

```rust
struct Employee {
    name: String,
    salary: i32,
}
```

This creates a type called:

`Employee`

It contains:

- name
- salary

---

### CREATING INSTANCE

```rust
let employee = Employee {
    name: String::from("Aariv"),
    salary: 50000,
};
```

Now:

`employee` owns its data.

---

### ACCESSING FIELDS

```rust
println!("{}", employee.name);
println!("{}", employee.salary);
```

---

### MUTABLE STRUCT

```rust
let mut employee = Employee {
    name: String::from("Aariv"),
    salary: 50000,
};
employee.salary = 70000;
```

Important:

Rust defaults to immutability.

This prevents accidental chaos.

---

### WHY STRUCTS ARE SO IMPORTANT

Your entire backend becomes structs.

Examples:

```rust
struct User {}
struct Site {}
struct Expense {}
struct Attendance {}
struct Invoice {}
```

This is literally backend architecture.

---

### REAL AXUM EXAMPLE

Request body:

```json
{
  "name": "Bridge Site",
  "location": "Shimla"
}
```

Becomes:

```rust
#[derive(Deserialize)]
struct CreateSiteRequest {
    name: String,
    location: String,
}
```

Now Axum automatically parses JSON into Rust struct.

This is why structs matter.

---

### PART 2 — IMPL BLOCKS

Structs can have methods.

---

### EXAMPLE

```rust
struct Employee {
    name: String,
    salary: i32,
}

impl Employee {
    fn increase_salary(&mut self, amount: i32) {
        self.salary += amount;
    }

    fn display(&self) {
        println!("{} earns {}", self.name, self.salary);
    }
}
```

---

### USING METHODS

```rust
let mut employee = Employee {
    name: String::from("Aariv"),
    salary: 50000,
};
employee.increase_salary(10000);
employee.display();
```

---

### UNDERSTAND self, &self, &mut self

This is critical.

---

### `self`

Takes ownership.

```rust
fn consume(self)
```

Rare in backend systems.

---

### `&self`

Borrow immutable reference.

```rust
fn display(&self)
```

Most common.

Means:

“Read only.”

---

### `&mut self`

Mutable borrow.

```rust
fn update(&mut self)
```

Means:

“Modify object safely.”

---

### PART 3 — ENUMS

Enums are EXTREMELY important.

Most beginners underestimate them.

Enums model system states.

---

### EXAMPLE

```rust
enum ProjectStatus {
    Pending,
    Active,
    Completed,
    Cancelled,
}
```

This is MUCH better than:

```rust
status: String
```

Because now:

Invalid states become impossible.

Rust guarantees safety.

---

### WHY ELITE ENGINEERS LOVE ENUMS

Enums eliminate operational stupidity.

Without enums:

```rust
status = "actve"
```

Typo.

Production issue.

With enums:

Impossible.

Compiler protects system.

---

### USING ENUMS

```rust
let status = ProjectStatus::Active;
```

---

### MATCH STATEMENTS

Enums become powerful with `match`.

```rust
match status {
    ProjectStatus::Pending => println!("Pending"),
    ProjectStatus::Active => println!("Active"),
    ProjectStatus::Completed => println!("Completed"),
    ProjectStatus::Cancelled => println!("Cancelled"),
}
```

Rust forces handling ALL cases.

This is massive for backend reliability.

---

### REAL WORLD BACKEND EXAMPLES

```rust
enum UserRole {
    Admin,
    Supervisor,
    Employee,
    Accounts,
}

enum PaymentStatus {
    Pending,
    Paid,
    Failed,
}

enum AttendanceStatus {
    Present,
    Absent,
    HalfDay,
}
```

This is real production architecture.

---

### PART 4 — DERIVE MACROS

This is where Rust becomes practical.

You will see this everywhere:

```rust
#[derive(Debug)]
```

or

```rust
#[derive(Debug, Clone)]
```

or

```rust
#[derive(Serialize, Deserialize)]
```

---

### WHAT DOES `derive` DO?

Automatically generates functionality.

Without writing boilerplate manually.

---

### MOST IMPORTANT DERIVES

---

### `Debug`

Allows printing.

```rust
#[derive(Debug)]
struct Employee {
    name: String,
}
```

Now:

```rust
println!("{:?}", employee);
```

works.

Mandatory during development.

---

### `Clone`

Allows copying.

```rust
#[derive(Clone)]
```

Now:

```rust
let copy = employee.clone();
```

works.

Use carefully.

Do NOT abuse clone.

---

### `Serialize` + `Deserialize`

Critical for APIs.

From `serde` crate.

```rust
#[derive(Serialize, Deserialize)]
```

Used for:

- JSON request bodies
- API responses
- database serialization

This becomes daily life in Axum.

---

### `PartialEq`

Allows comparison.

```rust
#[derive(PartialEq)]
```

Now:

```rust
if status == ProjectStatus::Active
```

works.

---

### COMMON REAL BACKEND COMBO

You’ll see this constantly:

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
```

Burn this into memory.

---

### PART 5 — BACKEND THINKING

Important mindset shift.

Bad engineers think:

“How do I write Rust?”

Elite backend engineers think:

“What operational state am I modeling?”

That changes everything.

---

### EXAMPLE — ATTENDANCE SYSTEM

Instead of:

```rust
status: String
```

Think:

```rust
enum AttendanceStatus {
    Present,
    Absent,
    Leave,
    HalfDay,
}
```

Now:

- frontend safer
- backend safer
- database safer
- business logic safer

That is systems thinking.

---

### PART 6 — PRACTICE TASKS

Do ALL of these.

No shortcuts.

---

### TASK 1

Create:

```rust
struct Site {
    name: String,
    location: String,
    workers: i32,
}
```

Print values.

---

### TASK 2

Add methods:

- `add_workers()`
- `display()`

---

### TASK 3

Create enum:

```rust
enum ExpenseStatus {
    Pending,
    Approved,
    Rejected,
}
```

Use `match` statement.

---

### TASK 4

Create:

```rust
enum UserRole {
    Admin,
    Employee,
    Supervisor,
}
```

Then write:

```rust
fn can_approve(role: UserRole)
```

using `match`.

---

### TASK 5

Add derive macros:

```rust
#[derive(Debug, Clone)]
```

Print struct with:

```rust
println!("{:?}", value);
```

---

### CRITICAL MINDSET

Structs model:

Data.

Enums model:

State transitions.

This is the foundation of:

- backend architecture
- workflow systems
- permissions
- operational engineering

---

### WHAT YOU SHOULD FEEL AFTER THIS TOPIC

You should start seeing backend systems as:

State machines.

Not:

“API endpoints.”

That’s the mental transition from:

Junior engineer

to

Systems engineer.

---

### NEXT TOPIC

- `Result<T, E>`
- `Option`
- `match`
- `?`
- `if let`

This is where:

Real backend error handling begins.

And honestly:

THIS separates amateur Rust developers from production Rust engineers.
