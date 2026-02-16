# **TRAITS (BEHAVIOR CONTRACTS, NOT OOP)**

This is where Rust lets you build **clean architecture** without inheritance, without hacks.

Auth systems _need_ this.

---

## **STEP 1 --- FIRST PRINCIPLE (WHAT PROBLEM TRAITS SOLVE)**

In real systems:

- You want **multiple implementations**

- But the **same behavior**

- Without knowing _which one_ at compile-time

Example (Auth reality):

- Password auth

- OTP auth

- OAuth auth

- Mock auth (tests)

Same **capability**, different **implementations**.

Other languages use:

- inheritance

- base classes

- virtual methods

Rust uses **traits**.

---

## **STEP 2 --- WHAT A TRAIT REALLY IS**

> **A trait is a promise that a type can perform certain actions.**

That's it.

Not:

- data

- memory

- inheritance

Just **capability**.

---

## **STEP 3 --- SIMPLE TRAIT EXAMPLE**

```
trait Greeter {
    fn greet(&self);
}
```

Meaning:

```
Any type that implements Greeter
MUST provide greet()
```

No implementation here. Only a **contract**.

---

## **STEP 4 --- IMPLEMENTING A TRAIT**

```
struct Human {
    name: String,
}

impl Greeter for Human {
    fn greet(&self) {
        println!("Hello, my name is {}", self.name);
    }
}
```

Now:

```
let h = Human { name: "Aariv".into() };
h.greet();
```

### **Rule learned**

> **Traits add behavior to types without changing their structure.**

---

## **STEP 7 --- TRAITS IN AUTH (REAL USE CASE)**

```
trait AuthProvider {
    fn authenticate(&self, user: &str, secret: &str) -> Result<u64, AuthError>;
}
```

Meaning:

```
Any auth method must:
- take credentials
- either return user_id
- or return AuthError
```

---

## **STEP 8 --- MULTIPLE IMPLEMENTATIONS (THE POWER)**

```
struct PasswordAuth;

impl AuthProvider for PasswordAuth {
    fn authenticate(&self, user: &str, secret: &str) -> Result<u64, AuthError> {
        Ok(42)
    }
}

struct OtpAuth;

impl AuthProvider for OtpAuth {
    fn authenticate(&self, user: &str, secret: &str) -> Result<u64, AuthError> {
        Ok(43)
    }
}
```

Same interface. Different logic.

---

## **STEP 9 --- STATIC DISPATCH (DEFAULT, FAST)**

- Static dispatch: Compiler generates type-specific code at compile time for max speed—no runtime cost. Here's a full example.

```rs
trait AuthProvider {
    fn authenticate(&self, user: &str, pass: &str) -> bool;
}

struct GoogleProvider;
impl AuthProvider for GoogleProvider {
    fn authenticate(&self, _user: &str, _pass: &str) -> bool {
        println!("Auth via Google");
        true
    }
}

struct DBProvider;
impl AuthProvider for DBProvider {
    fn authenticate(&self, _user: &str, _pass: &str) -> bool {
        println!("Auth via DB");
        false
    }
}

fn login<P: AuthProvider>(provider: &P) {  // Generic: P must have AuthProvider
    let _ = provider.authenticate("alice", "pass");
}

fn main() {
    let google = GoogleProvider;
    login(&google);  // Compiler: login<GoogleProvider> → inlines Google code

    let db = DBProvider;
    login(&db);      // Compiler: login<DBProvider> → inlines DB code
}

```

What happens:

- Compiler knows exact type

- Inlines code

- Zero runtime cost

This is **Rust's default**.

---

## **STEP 10 --- dyn Trait (WHEN TYPE IS UNKNOWN)**

Sometimes:

- implementation chosen at runtime

- stored in a struct

- swapped dynamically

Then:

```
fn login(provider: &dyn AuthProvider) {
    let _ = provider.authenticate("a", "b");
}
```

Meaning:

```
I don't know the concrete type
Call through a vtable
```

Slight runtime cost.

Huge flexibility.

---

## **STEP 11 --- WHEN TO USE **

## **dyn**

Use dyn when:

- storing different implementations together

- runtime configuration

- dependency injection

- tests / mocks

Avoid dyn when:

- type is known

- performance-critical paths

---

## **STEP 12 --- TRAITS + OWNERSHIP (IMPORTANT)**

```
trait Clock {
    fn now(&self) -> u64;
}
```

```
struct SystemClock;

impl Clock for SystemClock {
    fn now(&self) -> u64 {
        123456
    }
}
```

Used as:

```
fn is_expired(clock: &dyn Clock, expiry: u64) -> bool {
    clock.now() > expiry
}
```

This is **testable time logic** --- crucial for auth.

---

## **STEP 13 --- WHY TRAITS ARE PERFECT FOR AUTH**

Auth needs:

- pluggable providers

- test mocks

- clear boundaries

- no inheritance hell

Traits give:

- explicit contracts

- compiler-checked behavior

- zero-cost abstractions

---

## **🔒 DESIGN INVARIANT**

> **Data is modeled with structs & enums.**

> **Behavior is modeled with traits.**

Never mix them blindly.

---

## **✅ CHECKPOINT (ANSWERED)**

1.  **What is a trait?**

    → A behavior contract that types can implement.

2.  **Why traits instead of inheritance?**

    → No shared state, no fragile hierarchies, explicit behavior.

3.  **When to use** **dyn Trait\*\***?\*\*

    → When the concrete type is chosen at runtime.

---
