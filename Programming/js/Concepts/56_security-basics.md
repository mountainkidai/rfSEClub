# JavaScript Security Basics

Security is critical when writing frontend or backend JavaScript. Common vulnerabilities like **XSS** and **CSRF**, and learn principles for secure API design.

---

## 1. XSS (Cross-Site Scripting)

**XSS** is when attackers inject malicious scripts into webpages viewed by other users.

### Types of XSS

* **Stored XSS**: malicious code is saved in the database.
* **Reflected XSS**: code is part of the URL/query and reflected back by the server.
* **DOM-based XSS**: script is injected via front-end JavaScript (e.g., `innerHTML`).

### Prevention

* **Escape output** in HTML, JS, or URL contexts:

  ```js
  element.textContent = userInput; // instead of innerHTML
  ```

* **Use frameworks** that auto-escape (e.g., React, Angular).
* **Avoid eval()**, `innerHTML`, `document.write()` with untrusted input.
* **Sanitize input** using libraries (like DOMPurify).

---

## 2. CSRF (Cross-Site Request Forgery)

**CSRF** tricks users into performing unwanted actions on websites they’re authenticated on.

### Example

A user is logged into `bank.com`. A malicious site sends a request like:

```html
<img src="https://bank.com/transfer?amount=1000&to=hacker" />
```

### **Prevention**

* **Use SameSite cookies**:

```http
Set-Cookie: session=abc; SameSite=Strict
```

* **Use CSRF tokens**: generate secure tokens per session and validate them.
* **Require user interaction**: like CAPTCHAs or confirm buttons.

---

## 3. Secure API Design

When building or consuming APIs, follow these practices:

### a. Authentication

* Use **OAuth 2.0** or **JWT (JSON Web Tokens)**.
* Store tokens securely (never in `localStorage` for sensitive data).

### b. Authorization

* Validate the user’s role/permissions **on every request**.

### c. Input Validation

* Always validate incoming data **on the server**.
* Use schemas (e.g., with `Joi`, `Zod`, or `express-validator`).

### d. Avoid Sensitive Info in URLs

```http
❌ /reset-password?token=abcd123
✅ Use POST requests with tokens in the body
```

### e. Rate Limiting

Prevent brute-force attacks by rate-limiting IPs with tools like `express-rate-limit`.

---

## Code Example: CSRF Token Middleware

```js
// Express example
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);

app.get('/form', (req, res) => {
  res.render('send', { csrfToken: req.csrfToken() });
});

app.post('/process', csrfProtection, (req, res) => {
  res.send('Data is being processed securely!');
});
```

---

## Summary

* XSS = attacker injects JavaScript into a page.
* CSRF = attacker makes authenticated user trigger requests.
* Use secure patterns for APIs: token auth, input validation, and rate limits.
