# **OWNERSHIP AT API BOUNDARIES (HOW TO NEVER FIGHT THE BORROW CHECKER)**

## **FIRST PRINCIPLE (THE ROOT TRUTH)**

> **Functions are contracts about ownership.**

Every function answers ONE question:

> **Who owns the data before, during, and after this call?**

Rust forces you to answer this **explicitly**.

---

## **THE 3 OWNERSHIP MODES (BURN THIS IN)**

Every parameter is **exactly one** of these:

1.  **T** → _I take ownership_

2.  **&T** → _I read, you keep ownership_

3.  **&mut T** → _I temporarily control mutation_

There is no 4th option.

---

## STEP 1 --- TAKING OWNERSHIP T

```
fn create_user(username: String) {
    println!("Creating user {}", username);
}
```

### **What this means**

```rs
Caller gives ownership to function
Function may drop it
Caller CANNOT use it again
```

```rs
let name = String::from("aariv");
create_user(name);
// println!("{}", name); ❌ ERROR --- moved
```

### **When to use this**

✔ Data must be:

- stored

- transformed

- sent elsewhere

- consumed

**Auth example:**

- creating user

- hashing password

- storing tokens

---

## STEP 2 --- BORROWING READ-ONLY

```rs
fn validate_username(username: &String) -> bool {
    username.len() >= 3
}
```

### **Meaning**

```
Function reads
Caller keeps ownership
No mutation allowed
```

```
let name = String::from("aariv");
validate_username(&name);
println!("{}", name); // ✅ still valid
```

### **Rule**

> **Borrow when you don't need to own.**

Most validation functions should borrow.

---

## **STEP 3 --- BORROWING MUTABLE &mut T**

```rs
fn normalize_username(username: &mut String) {
    username.make_ascii_lowercase();
}
```

```rs
let mut name = String::from("AARIV");
normalize_username(&mut name);
println!("{}", name); // "aariv"
```

### **Critical rule**

> **Only ONE mutable borrower at a time.**

Rust prevents:

- data races

- inconsistent state

---

## **STEP 4 --- RETURNING OWNERSHIP (THE ESCAPE HATCH)**

```rs
fn hash_password(pw: String) -> String {
    format!("hashed({})", pw)
}
```

Pattern:

```rs
Take → Transform → Return
```

This is **the cleanest design**.

---

## **STEP 5 --- THE GOLDEN RULE (PRINT THIS)**

> **If a function returns owned data,**

> **it should usually take owned data.**

Bad:

```rs
fn bad(pw: &String) -> String {
    format!("hashed({})", pw)
}
```

Good:

```rs
fn good(pw: String) -> String {
    format!("hashed({})", pw)
}
```

Why?

- simpler signatures

- no lifetimes

- fewer borrows

---

## **STEP 6 --- API BOUNDARY PATTERN (THE AUTH STANDARD)**

### **❌ WRONG (borrow hell)**

```
fn login(username: &str, password: &str) -> &str {
    // impossible
}
```

Why wrong?

- returning reference tied to inputs

- lifetime mess

- auth needs owned data

---

### **✅ RIGHT (OWNERSHIP FLOWS)**

```
fn login(username: String, password: String) -> Result<Session, AuthError> {
    let hashed = hash_password(password);
    let session = create_session(username, hashed);
    Ok(session)
}
```

```
Inputs owned → outputs owned
No lifetime annotations
No borrow checker fights
```

---

## **STEP 7 --- BORROW ONLY AT THE EDGES**

Auth system structure:

```
HTTP request  → owned
Validation    → borrow
Transformation → own
Storage       → own
Response      → own
```

### **Example**

```
fn handle_login(req: LoginRequest) -> LoginResponse {
    validate(&req);               // borrow
    let session = authenticate(req); // move
    LoginResponse { session }
}
```

This is **professional Rust**.

---

## **STEP 8 --- STRUCT DESIGN RULE (VERY IMPORTANT)**

### **❌ BAD (lifetime leaks everywhere)**

```
struct Login<'a> {
    username: &'a str,
    password: &'a str,
}
```

### **✅ GOOD (OWNED DATA)**

```
struct Login {
    username: String,
    password: String,
}
```

Rule:

> **Application structs should own data.**

> **Borrowing structs are for libraries only.**

Koel = application → OWN.

---

## **STEP 9 --- WHEN YOU SHOULD USE REFERENCES IN APIs**

Only when:

- zero-copy performance matters

- short-lived

- read-only

Examples:

- parsing

- validation

- formatting

```
fn is_valid_email(email: &str) -> bool {
    email.contains('@')
}
```

---

## **STEP 10 --- WHY THIS MAKES LIFETIMES DISAPPEAR**

Because:

```
Ownership = clear drop point
No shared responsibility
No "how long does this live?"
```

Lifetimes exist mainly to support borrowing.

Own → no lifetimes.

---

## **🔒 DESIGN INVARIANTS (NON-NEGOTIABLE)**

1.  **Public APIs prefer ownership**

2.  **Borrow internally, briefly**

3.  **Return owned values**

4.  **Avoid references in structs**

5.  **If lifetimes appear → redesign**

---

## **AUTH-SPECIFIC CHECKPOINT (ANSWERED)**

1.  Why should login APIs take String not &str?

    → Auth owns credentials, not caller.

2.  Why do owned structs simplify systems?

    → No lifetime propagation.

3.  When do lifetimes appear in auth code?

    → When borrowing across boundaries (usually a design smell).
