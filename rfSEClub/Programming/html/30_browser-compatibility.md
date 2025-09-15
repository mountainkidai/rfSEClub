# Browser Compatibility in Web Development

Different browsers (like Chrome, Firefox, Safari, Edge) interpret and support HTML, CSS, and JavaScript in slightly different ways. Making sure your website works across all major browsers is known as ensuring **browser compatibility**.

---

## Key Concepts

### 1. Feature Detection

Instead of checking for specific browsers, it's better to check if a browser supports a particular feature. This is called **feature detection**.

Example using JavaScript:

```javascript
if ('geolocation' in navigator) {
  // Safe to use Geolocation API
} else {
  // Provide a fallback or inform the user
}
```

This helps avoid errors in older browsers that don't support newer features.

---

### 2. Polyfills

**Polyfills** are JavaScript code snippets (or libraries) that add missing features to older browsers. They "fill in" the gap so your code still works.

For example, `Array.prototype.includes()` may not be supported in older browsers. You can include a polyfill to provide this functionality:

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.includes"></script>
```

This will automatically load the polyfill only for browsers that need it.

---

### 3. Progressive Enhancement

**Progressive enhancement** is a strategy that starts with a basic, functional version of your website and then adds advanced features only if the browser supports them.

Steps:

* Start with clean, semantic HTML that works everywhere
* Add CSS for layout and design
* Use JavaScript to enhance interaction, but don’t rely on it for core functionality

This way, your site is still usable even in older browsers.

---

## Summary Table

| Term                    | Meaning                                                    |
| ----------------------- | ---------------------------------------------------------- |
| Feature Detection       | Checks if a browser supports a feature                     |
| Polyfill                | JavaScript code that adds missing features to old browsers |
| Progressive Enhancement | Builds a solid base first, then adds features gradually    |
