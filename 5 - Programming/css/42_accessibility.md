# Accessibility in CSS (a11y)

Accessibility (often shortened as "a11y") ensures that websites are usable by everyone, including people with disabilities. CSS plays a key role in making interfaces readable, navigable, and operable by supporting keyboard focus styles, color contrast, and ARIA integration.

---

## ARIA Attributes

ARIA (Accessible Rich Internet Applications) attributes add semantic meaning and interaction roles that assistive technologies can understand.

### Common `aria-*` attributes

* `aria-label`: Provides a label for an element.

```html
<button aria-label="Close">&times;</button>
```

* `aria-hidden`: Hides content from screen readers.

```html
<span aria-hidden="true">★</span>
```

* `role`: Defines the type of element for assistive tech.

```html
<div role="alert">Form submission failed.</div>
```

These attributes help screen readers and other tools interpret the content meaningfully.

---

## Focus States

Focus styles indicate which element is currently focused by keyboard navigation (like using the Tab key).

```css
button:focus, a:focus {
  outline: 2px solid blue;
  outline-offset: 2px;
}
```

### Why it matters

* Users who rely on keyboard navigation need clear visual cues.
* Removing outlines entirely (e.g., `outline: none`) can harm usability unless replaced with something better.

```css
button:focus-visible {
  outline: 2px dashed blue;
}
```

---

## High Contrast & Readability

Some users use high contrast themes or screen magnifiers.

### Use sufficient color contrast

Use tools to ensure contrast ratios meet WCAG (Web Content Accessibility Guidelines):

* Normal text: 4.5:1
* Large text (18px+): 3:1

Avoid using color alone to communicate important info:

```css
.success {
  color: green;
}
.error {
  color: red;
}
```

Instead, combine with icons or labels:

```html
<span class="success">✔ Success</span>
<span class="error">✖ Error</span>
```

---

## Summary

* Use `aria-*` attributes to enhance screen reader support.
* Always show clear focus outlines for keyboard users.
* Ensure text and backgrounds have enough contrast.
* Avoid relying solely on color to convey meaning.
