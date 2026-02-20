# **GENERICS (WHY T EXISTS, FROM FIRST PRINCIPLES)**

Traits say **what is allowed**.

Generics say **who it works for**.

Together → clean, flexible, zero-cost code.

---

## **FIRST PRINCIPLE (THE ROOT TRUTH)**

> **The same logic should work for many concrete types**

> **without copying code or losing safety.**

Bad options other languages take:

- copy-paste

- inheritance

- runtime casting

- any / Object

Rust says: **be precise and reusable at compile time**.

That is generics.

---

## **WHAT A GENERIC REALLY IS**

```
fn identity<T>(value: T) -> T {
    value
}
```

Meaning:

```
"For ANY concrete type T,
this function works exactly the same."
```

Important:

- T is **not dynamic**

- compiler replaces T with real types

- zero runtime cost

---

## **STEP 1 --- WHY NOT JUST WRITE MULTIPLE FUNCTIONS?**

Without generics:

```
fn id_i32(x: i32) -> i32 { x }
fn id_string(x: String) -> String { x }
fn id_bool(x: bool) -> bool { x }
```

This is dumb.

Generics solve this:

```
fn id<T>(x: T) -> T {
    x
}
```

---

## **STEP 2 --- GENERICS ARE PLACEHOLDERS, NOT TYPES**

```
fn takes<T>(x: T) {
    // what can I do with x?
}
```

Answer: **nothing**, unless constrained.

Because compiler says:

> "I don't know what T can do."

So this fails:

```
fn bad<T>(x: T) {
    x.len(); // ❌ unknown
}
```

---

## **STEP 3 --- TRAIT BOUNDS (THE KEY)**

You must **limit** what T can be.

```rs
fn good<T: AsRef<str>>(x: T) {
    println!("{}", x.as_ref());
}
```

Meaning:

```rs
T can be ANY type
AS LONG AS it implements AsRef<str>
```

This is how generics + traits work together.

```rs
fn print_text<T: AsRef<str>>(text: T) {
    println!("You said: {}", text.as_ref());
}

fn main() {
    print_text("hello");           // Works! (&str)
    print_text(String::from("hi")); // Works! (String)
    let s = String::from("world");
    print_text(&s);                // Works! (&String)
}
```

---

```rs
fn print_text<T: AsRef<str>>(text: T) {

    println!("You said: {}", text.as_ref());
    }

fn main() {
print_text("hello"); // Works! (\&str)
print_text(String::from("hi")); // Works! (String)
let s = String::from("world");
print_text(\&s); // Works! (\&String)
}
```

in this tell me what AsRef doing and as_ref()?

**`AsRef<str>`** = Gatekeeper: "Only let in types that **promise** they can give me `&str`"

**`as_ref()`** = The promise being **kept**: Actually **gives** you the `&str`

## In Your Code

```rs
print_text("hello")              // 1. AsRef says "✅ &str can do it"
                                 // 2. as_ref() says "&str here you go"

print_text(String::from("hi"))   // 1. AsRef says "✅ String can do it"
                                 // 2. as_ref() says "Here's &str from inside String"
```

## Step-by-Step

```
1. Compiler checks: Does T implement AsRef<str>?
   - &str? YES ✓
   - String? YES ✓
   - &String? YES ✓

2. Function runs: text.as_ref()
   - &str.as_ref()  → returns itself (&str)
   - String.as_ref() → returns &str pointing to String's data
```

**Picture:**

```text
          AsRef<str>?     as_ref()
"hello" ──✅ YES─────────► "&hello"
String   ──✅ YES─────────► "&hi" (borrows String data)
```

```text
          text holds this:       as_ref() gives this:
┌──────────────┐                ┌──────────┐
│ &str         │ ──as_ref()───► │ &str     │ ──► println!
├──────────────┤                └──────────┘
│ String       │ ──as_ref()───► │ &str     │
│ (owns data)  │     ↓          │ (borrows)│
└──────────────┘     │          └──────────┘
                     │ address to data
```

**One function. Three inputs. Magic glue = AsRef + as_ref().** 🚀

## **STEP 4 --- GENERICS WITH TRAITS (AUTH CORE)**

Define behavior:

```rs
trait UserRepo {
    fn find(&self, username: &str) -> Option<String>;
}
```

Use generics:

```rs
struct AuthService<R: UserRepo> {
    repo: R,
}
```

Meaning:

```
AuthService works with ANY R
that behaves like a UserRepo
```

---

## **STEP 5 --- MULTIPLE TRAIT BOUNDS**

```
fn secure_login<T>(service: T)
where
    T: UserRepo + Send + Sync,
{
}
```

Meaning:

```
T must:
- be a UserRepo
- be safe across threads
```

This matters for async servers.

---

## **STEP 6 --- where CLAUSE (READABILITY)**

Bad:

```rs
fn f<T: A + B + C + D>(x: T) {}
```

Good:

```rs
fn f<T>(x: T)
where
    T: A + B + C + D,
{}
```

Same meaning. Cleaner logic.

---

## **STEP 7 --- impl Trait VS GENERICS (IMPORTANT)**

These look similar but are not identical.

### **Function arguments (equivalent)**

```
fn login(repo: impl UserRepo)
```

```
fn login<T: UserRepo>(repo: T)
```

Both mean:

- caller chooses type

- static dispatch

---

### **Return values (VERY DIFFERENT)**

❌ This is illegal:

```
fn repo() -> UserRepo { }
```

✅ Correct options:

```
fn repo() -> impl UserRepo { }
```

or

```
fn repo() -> Box<dyn UserRepo> { }
```

Rule:

> **You must always return a concrete size-known type.**

---

## **STEP 8 --- WHY impl Trait IN RETURNS EXISTS**

```rs
fn make_repo() -> impl UserRepo {
    InMemoryRepo {}
}
```

Meaning:

```
"I return SOME concrete type
that implements UserRepo.
You don't get to know which."
```

This:

- hides implementation

- keeps flexibility

- no heap allocation

Perfect for factories.

---

## **STEP 9 --- GENERICS IN STRUCTS (AUTH ARCHITECTURE)**

```
struct AuthService<R, H>
where
    R: UserRepo,
    H: PasswordHasher,
{
    repo: R,
    hasher: H,
}
```

This gives:

- zero runtime overhead

- compile-time safety

- no trait objects needed

This is **idiomatic Rust backend design**.

---

## **STEP 10 --- WHEN NOT TO USE GENERICS**

Do NOT use generics when:

- only one concrete type exists

- API becomes unreadable

- type parameter leaks everywhere

Rule:

> **Use generics at boundaries, not everywhere.**

---

## **STEP 11 --- GENERICS DO NOT CAUSE LIFETIMES**

Very important insight:

```
struct Service<T> {
    value: T,
}
```

No lifetimes.

Generics + ownership = safe + simple.

Lifetimes appear when **borrowing**, not when abstracting.

---

## **STEP 12 --- AUTH FLOW WITH GENERICS (FINAL SHAPE)**

```rs
fn login<R, H>(
    repo: &R,
    hasher: &H,
    username: String,
    password: String,
) -> Result<(), AuthError>
where
    R: UserRepo,
    H: PasswordHasher,
{
    let user = repo.find(&username).ok_or(AuthError::UserNotFound)?;
    if !hasher.verify(&password, &user) {
        return Err(AuthError::InvalidCredentials);
    }
    Ok(())
}
```

Clean.

Testable.

No lifetimes.

No hacks.

---

## **🔒 DESIGN INVARIANTS (NON-NEGOTIABLE)**

1. Generics are compile-time, zero-cost
2. Unbounded T can do nothing
3. Traits give power to generics
4. Prefer impl Trait for clarity

---

## **CHECKPOINT (ANSWERED)**

1.  Why can't you call methods on bare T?

    → Compiler doesn't know its capabilities.

2.  Why do traits unlock generics?

    → They define allowed behavior.

3.  Why are generics better than inheritance?

    → No runtime cost, no hierarchy, full safety.

---
