# **Browser Compatibility**

When creating websites or web apps, it is important to ensure that your code works well across different browsers (like Chrome, Firefox, Safari, and Edge) and on different devices. Browsers may interpret or support certain features differently. That's where browser compatibility becomes crucial.

---

## Vendor Prefixes

Some newer CSS features are not yet fully standardized across all browsers. In such cases, browser vendors (like Mozilla or WebKit) provide temporary support using prefixes:

* `-webkit-` for Chrome, Safari
* `-moz-` for Firefox
* `-ms-` for Internet Explorer and Edge
* `-o-` for Opera

**Example:**

```css
.example {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

This ensures that the `user-select` property works in most browsers.

---

## Feature Detection

Instead of guessing which browser supports which feature, it’s better to *detect* whether the feature is available and use it conditionally. Tools like [Modernizr](https://modernizr.com/) help detect support for features like Flexbox, CSS Grid, or ES6 JavaScript.

**Example (JavaScript):**

```js
if ('querySelector' in document) {
  // Safe to use querySelector
  document.querySelector(".my-element").style.color = "blue";
} else {
  // Provide a fallback
}
```

---

## Progressive Enhancement

This is a strategy where you start with basic functionality that works everywhere, and then *add* advanced features for browsers that support them.

Steps:

1. Write your core HTML and CSS so the content is usable in all browsers.
2. Add advanced styles (e.g., transitions, animations) that only apply if the browser supports them.
3. Add JavaScript interactions that progressively enhance the experience.

**Why it matters**: If a browser doesn’t support some feature, the rest of the page should still work and look good.

---

## Summary

* Use vendor prefixes to ensure new CSS features work across browsers.
* Use feature detection to decide whether a feature is supported.
* Follow progressive enhancement to build a solid, accessible user experience for everyone.
