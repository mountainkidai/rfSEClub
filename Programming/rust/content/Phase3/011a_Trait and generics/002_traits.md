# **TRAITS (CONTRACTS, NOT OOP MAGIC)**

Forget interfaces, inheritance, polymorphism for a moment.

We start from **first principles**.

---

## **FIRST PRINCIPLE (THE ROOT TRUTH)**

> **Different things can behave the same way.**

Examples from real life:

- PhonePe, GPay, Paytm → all can _"make payment"_

- Passwords, OTPs, OAuth → all can _"authenticate"_

- Postgres, Redis, Memory → all can _"store users"_

We need a way to say:

> "I don't care _what_ you are ---

> I only care _what you can do_."

That is a **trait**.

---

## **WHAT A TRAIT REALLY IS**

> **A trait is a behavioral contract.**

Not data.

Not memory.

Not inheritance.

Just **capability**.

---

## **STEP 1 --- THE SMALLEST TRAIT POSSIBLE**

```
trait Greeter {
    fn greet(&self);
}
```

Meaning:

```
Any type that wants to be a Greeter
MUST implement greet()
```

---

## **STEP 2 --- IMPLEMENTING A TRAIT**

```
struct User {
    name: String,
}

impl Greeter for User {
    fn greet(&self) {
        println!("Hello {}", self.name);
    }
}
```

Now this is valid:

```
let u = User { name: "Aariv".to_string() };
u.greet();
```

### **Key insight**

- User did not change shape

- No inheritance

- Trait is **added behavior**

---

## **STEP 3 --- WHY THIS IS NOT OOP INHERITANCE**

OOP:

- "User _is a_ Greeter"

- carries hierarchy

Rust:

- "User _can_ greet"

- no hierarchy

- no shared memory

Traits = **capabilities**, not identity.

---

## **STEP 4 --- USING TRAITS AS FUNCTION CONTRACTS**

This is where power starts.

```
fn say_hello<T: Greeter>(thing: T) {
    thing.greet();
}
```

Or shorter:

```
fn say_hello(thing: impl Greeter) {
    thing.greet();
}
```

Meaning:

```rs
I accept ANY type
as long as it implements Greeter
```

This is **dependency inversion**.

---

## **STEP 5 --- WHY AUTH NEEDS TRAITS (CRITICAL)**

Auth has interchangeable components:

- password hashing

- token signing

- user storage

You do NOT want this:

```rs
fn login(db: PostgresDb, hasher: BcryptHasher) { }
```

That hard-wires everything.

Instead:

```rs
trait UserRepo {
    fn find_user(&self, username: &str) -> Option<User>;
}

trait PasswordHasher {
    fn verify(&self, raw: &str, hash: &str) -> bool;
}
```

Now login becomes:

```rs
fn login(
    repo: &impl UserRepo,
    hasher: &impl PasswordHasher,
) -> Result<(), AuthError> {
    // logic only
    Ok(())
}
```

🔥 This is **clean architecture**.

### complete example

```rs
use std::fmt;

// Simple User struct
#[derive(Debug, Clone)]
struct User {
    id: u32,
    username: String,
    password_hash: String,
}

// Errors
#[derive(Debug)]
enum AuthError {
    UserNotFound,
    InvalidPassword,
}

// MARKER: UserRepo trait
trait UserRepo {
    fn find_user(&self, username: &str) -> Option<User>;
}

// MARKER: PasswordHasher trait
trait PasswordHasher {
    fn verify(&self, raw_password: &str, stored_hash: &str) -> bool;
}

// MARKER: Login function - pure logic!
fn login(repo: &impl UserRepo, hasher: &impl PasswordHasher, username: &str, password: &str) -> Result<User, AuthError> {
    let user = repo.find_user(username).ok_or(AuthError::UserNotFound)?;
    if !hasher.verify(password, &user.password_hash) {
        return Err(AuthError::InvalidPassword);
    }
    Ok(user)
}

// Real implementations
struct PostgresRepo; // Pretend this connects to Postgres
impl UserRepo for PostgresRepo {
    fn find_user(&self, username: &str) -> Option<User> {
        // Fake DB lookup
        if username == "alice" {
            Some(User { id: 1, username: username.to_string(), password_hash: "$2b$12$Kixmo2H6.a5gP7A1XzPzuO".to_string() })
        } else {
            None
        }
    }
}

struct BcryptHasher;
impl PasswordHasher for BcryptHasher {
    fn verify(&self, raw: &str, hash: &str) -> bool {
        // Fake bcrypt verify (use bcrypt crate in real)
        hash == "$2b$12$Kixmo2H6.a5gP7A1XzPzuO" && raw == "password123"
    }
}

// Test mocks
struct MockRepo;
impl UserRepo for MockRepo {
    fn find_user(&self, username: &str) -> Option<User> {
        Some(User { id: 999, username: username.to_string(), password_hash: "mock_hash".to_string() })
    }
}

struct MockHasher;
impl PasswordHasher for MockHasher {
    fn verify(&self, _raw: &str, _hash: &str) -> bool { true } // Always passes for tests
}

fn main() {
    let postgres_repo = PostgresRepo;
    let bcrypt = BcryptHasher;

    // Real login
    match login(&postgres_repo, &bcrypt, "alice", "password123") {
        Ok(user) => println!("✅ Login success: {:?}", user),
        Err(e) => println!("❌ Login failed: {:?}", e),
    }

    // Wrong password
    match login(&postgres_repo, &bcrypt, "alice", "wrong") {
        Ok(_) => println!("Unexpected success"),
        Err(e) => println!("✅ Failed as expected: {:?}", e),
    }

    // Test with mocks
    let mock_repo = MockRepo;
    let mock_hasher = MockHasher;
    let test_user = login(&mock_repo, &mock_hasher, "testuser", "whatever").unwrap();
    println!("🧪 Test login: {:?}", test_user);
}
```

```text
✅ Login success: User { id: 1, username: "alice", password_hash: "$2b$12$Kixmo2H6.a5gP7A1XzPzuO" }
✅ Failed as expected: InvalidPassword
🧪 Test login: User { id: 999, username: "testuser", password_hash: "mock_hash" }
```

---

## **STEP 6 --- TRAITS DO NOT STORE DATA**

This is very important.

❌ Invalid mental model:

> "Trait is like a base class"

✅ Correct model:

> "Trait describes behavior only"

```rs

trait Bad {
name: String; // ❌ NOT ALLOWED
}
```

Traits define **functions only**.

---

## **STEP 7 --- DEFAULT IMPLEMENTATIONS**

Traits can provide defaults.

```rs

trait Logger {
fn log(&self, msg: &str) {
println!("{}", msg);
}
}
```

Types can override or reuse.

This is **code reuse without inheritance**.

---

## **STEP 8 impl Trait vs T: Trait (IMPORTANT)**

### **These are equivalent:**

```rs

fn login(repo: impl UserRepo) {}

```

```rs

fn login<T: UserRepo>(repo: T) {}

```

### **Rule of thumb**

- impl Trait → simple, readable (use this 90%)

- T: Trait → when multiple generics interact

---

## **STEP 9 --- TRAITS AS PLUGGABLE COMPONENTS (AUTH EXAMPLE)**

```rs

struct AuthService<R, H>
where
R: UserRepo,
H: PasswordHasher,
{
repo: R,
hasher: H,
}

```

This lets you do:

```rs

AuthService {
repo: PostgresRepo,
hasher: BcryptHasher,
}

```

Or in tests:

```rs

AuthService {
repo: MockRepo,
hasher: FakeHasher,
}

```

Same logic. Different behavior.

---

## **STEP 10 --- WHY TRAITS + OWNERSHIP = NO LIFETIMES**

Notice:

```

repo: R
hasher: H

```

Owned.

No borrowing.

No 'a.

No lifetime explosion.

This is **intentional design**.

---

## **STEP 11 --- WHAT dyn Trait IS (ONLY CONCEPTUAL FOR NOW)**

Two ways to use traits:

### **1. **

### **Static dispatch (default)**

```

fn login(repo: impl UserRepo)

```

- compiler knows exact type

- fast

- monomorphized

### **2. **

### **Dynamic dispatch**

```rs

fn login(repo: &dyn UserRepo)

```

- runtime lookup

- used when type is unknown at compile time

🚨 For Koel auth: **prefer static dispatch**.

We'll use dyn only when needed (later).

```rs
trait Animal { fn speak(&self); }

struct Dog;
impl Animal for Dog { fn speak(&self) { println!("Woof"); } }
struct Cat;
impl Animal for Cat { fn speak(&self) { println!("Meow"); } }

fn static_speak(a: &impl Animal) { a.speak(); }  // Compiler makes 2 versions

fn main() {
    let dog = Dog;
    let cat = Cat;

    static_speak(&dog);  // → Creates & calls: static_speak_Dog()
    static_speak(&cat);  // → Creates & calls: static_speak_Cat()

    // Prints: Woof
    //         Meow
}


```

```rs
trait Animal { fn speak(&self); }

struct Dog;
impl Animal for Dog { fn speak(&self) { println!("Woof"); } }
struct Cat;
impl Animal for Cat { fn speak(&self) { println!("Meow"); } }

fn dynamic_speak(a: &dyn Animal) { a.speak(); }  // ONE function + vtable lookup

fn main() {
    let dog = Dog;
    let cat = Cat;

    dynamic_speak(&dog);  // → vtable lookup → Dog::speak()
    dynamic_speak(&cat);  // → vtable lookup → Cat::speak()

    let animals: Vec<&dyn Animal> = vec![&dog, &cat];  // ✅ Mix any Animal!
    for a in animals { a.speak(); }

    // Prints: Woof
    //         Meow
    //         Woof
    //         Meow
}

```

**Static (`impl Trait`)**: Compiler makes a custom fast version for _each exact type_. Zero runtime cost.

**Dynamic (`dyn Trait`)**: Makes one generic version that _looks up_ the right method at runtime. Small speed cost.

## One Line Each

```rs
Static:  fn speak_Dog(), fn speak_Cat() → direct highway 🚀
Dynamic: fn speak() → phonebook lookup 📞 then call
```

```rs
Your login(&impl UserRepo): Gets login_PostgresRepo() + login_MockRepo() → FASTEST
login(&dyn UserRepo):      Gets one login() → "which repo?" → call → FLEXIBLE but slower
```

---

## **STEP 12 --- TRAITS ENABLE TESTING (THIS IS HUGE)**

```

struct FakeRepo;

impl UserRepo for FakeRepo {
fn find*user(&self, *: &str) -> Option<User> {
Some(User { name: "test".into() })
}
}

```

Now you can test login logic **without a database**.

---

## **🔒 DESIGN INVARIANTS (PRINT THIS)**

1.  Traits describe **what**, not **how**
2.  Traits have **no data**
3.  Auth logic depends on **traits, not implementations**
4.  Prefer owned generic structs
5.  Traits = testability + clean architecture

---

## **CHECKPOINT (ANSWERED)**

1.  What problem do traits solve?

    → Interchangeable behavior without coupling.

2.  Why not hard-code implementations?

    → Kills testability and flexibility.

3.  Why do traits reduce lifetime issues?

    → Ownership stays clear.

---

## **WHAT IS NOW UNLOCKED**

You can now:

- design pluggable auth components

- write testable logic

- avoid framework lock-in

---
