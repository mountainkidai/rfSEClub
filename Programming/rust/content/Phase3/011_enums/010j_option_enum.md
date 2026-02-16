# **Option<T> (ABSENCE AS A FIRST-CLASS CONCEPT)**

This is small in syntax, **huge in impact**.

Auth systems break without this.

---

## **STEP 1 --- FIRST PRINCIPLE (THE REAL PROBLEM)**

In the real world, **things are often missing**.

- User **may not** have KYC

- Session **may not** exist

- OTP **may not** be generated yet

- Token **may not** be present

Other languages use:

- null

- undefined

- None

- magic values

These cause **runtime crashes**.

Rust says: **absence must be explicit**.

---

## \*\*STEP 2 --- WHAT Option reall is?

```
enum Option<T> {
    Some(T),
    None,
}
```

That's it.

No magic. No runtime trick.

Meaning:

```
Value exists → Some(value)
Value does not exist → None
```

---

## **STEP 3 --- BASIC USAGE**

```
fn main() {
    let email: Option<String> = Some(String::from("a@b.com"));
    let phone: Option<String> = None;
}
```

Compiler knows:

- email might exist

- phone does not exist

No guessing allowed.

---

## **STEP 4 --- WHY YOU CANNOT "FORGET" TO HANDLE IT**

```
fn main() {
    let email: Option<String> = None;

    println!("{}", email);
}
```

❌ Does not compile.

Rust says:

> "Tell me what to do if it's missing."

---

## STEP 5 HANDLING Option WITH match

```rs
fn print_email(email: Option<String>) {
    match email {
        Some(e) => println!("Email: {}", e),
        None => println!("No email provided"),
    }
}
```

Both cases handled.

No crashes possible.

---

## STEP 6 ---  **if let  (SHORT FORM)**

```rs
fn print_email(email: Option<String>) {
    if let Some(e) = email {
        println!("Email: {}", e);
    } else {
        println!("No email provided");
    }
}

```

Meaning:

```
If value exists → use it
Else → do nothing
```

Good for optional logic.

---

## **STEP 7 --- **

## **unwrap()**

## ** (WHY IT EXISTS AND WHY IT'S DANGEROUS)**

```
let email = Some("a@b.com");
println!("{}", email.unwrap());
```

Works.

But:

```
let email: Option<&str> = None;
email.unwrap(); // 💥 PANIC
```

Rule:

> **unwrap() is a runtime assertion, not safety.**

Allowed:

- tests

- prototypes

- guaranteed cases

Forbidden:

- auth logic

- production paths

---

## **STEP 8 --- **

## **Option**

## ** + STRUCTS (VERY COMMON)**

```
struct User {
    id: u64,
    email: Option<String>,
    phone: Option<String>,
}
```

Meaning:

```
User exists
Some fields may not
```

This models reality perfectly.

---

## **STEP 9 Option REFERENCES (LIFETIME SAFE)**

```rs
fn main() {
    println!("{:?}", first_char("abc"));  // Some('a')
    println!("{:?}", first_char(""));     // None
}

```

Meaning:

```
If string is empty → None
Else → Some(character)
```

No dangling. No crashes.

---

## **STEP 10 --- WHY **Option** IS CRITICAL FOR AUTH**

Auth examples:

```
Option<Session>
Option<UserId>
Option<Otp>
Option<KycStatus>
Option<Subscription>
```

Auth code becomes:

```
If exists → proceed
If not → deny / ask / create
```

No undefined behavior.

---

## STEP 11 --- Option VS EMPTY STRING (IMPORTANT)

❌ Bad:

```
email: String // empty string = "missing"?
```

✅ Good:

```
email: Option<String>
```

Rule:

> **Absence is NOT a value.**

> **It's a state.**

---

## **STEP 12 --- HOW THIS PREVENTS BUGS**

Without Option:

```
Forgot to check null → crash at 2 AM
```

With Option:

```
Compiler forces handling → no crash
```

This is **design-time correctness**.

---

## **🔒 DESIGN INVARIANT**

> **If something can be missing in reality,**

> **it must be Option<T> in code.**

---

## **✅ CHECKPOINT (ANSWERED)**

1.  **What problem does** **Option<T>** **solve?**

    → It makes absence explicit and impossible to ignore.

2.  **Why is** **Option** **better than** **null\*\***?\*\*

    → Compiler forces handling; no runtime crashes.

3.  **Why is** **unwrap()** **dangerous?**

    → It panics at runtime instead of being handled safely.

---
