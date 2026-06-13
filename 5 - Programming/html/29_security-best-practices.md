# Security Best Practices in HTML

Security is an essential part of building web pages. Even if your page looks simple, it can still be a target for malicious users. Here are two important HTML-based security practices you should know about:

---

## Content Security Policy (CSP)

CSP is a security layer that helps prevent certain types of attacks, such as **Cross-Site Scripting (XSS)**. It works by telling the browser which sources are trusted for loading content like scripts, images, and styles.

You can add a CSP using a `<meta>` tag in your HTML `<head>` section:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self';">
```

### Explanation

* `http-equiv="Content-Security-Policy"`: This sets a rule for the browser to follow.
* `content="default-src 'self';"`: This means only allow resources from the same origin (your own domain).

You can also specify rules for scripts, images, fonts, etc. For example:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://images.example.com; script-src 'self' https://cdn.example.com">
```

This CSP policy:

* Only allows scripts from the current site and `cdn.example.com`
* Allows images from `images.example.com`

---

## Avoiding Cross-Site Scripting (XSS)

**XSS** is a type of attack where an attacker tries to inject malicious scripts into your webpage. This can happen through forms, URLs, or dynamic content.

### Best Practices to Avoid XSS

1. **Never trust user input:** Always sanitize and validate input before rendering it into the page.
2. **Use proper HTML escaping:** Display user content using functions that escape HTML tags (especially in JavaScript).
3. **Avoid `innerHTML`:** Use `textContent` or safer methods to insert text into your HTML to avoid script injection.

Example:

```javascript
// Unsafe:
div.innerHTML = userInput;

// Safe:
div.textContent = userInput;
```

---

## Summary Table

| Concept        | Description                                |
| -------------- | ------------------------------------------ |
| CSP (`<meta>`) | Limits what resources the browser can load |
| `'self'`       | Only allow resources from the same domain  |
| XSS            | Injection of malicious code into a webpage |
| `textContent`  | Safer way to insert user input into a page |
| `innerHTML`    | Risky if used with untrusted content       |
