# Accessibility (a11y) in HTML

Accessibility in HTML means designing and coding web pages so that they are usable by everyone, including people with disabilities. This includes people using screen readers, keyboard-only navigation, or assistive devices.

---

## What is Accessibility (a11y)?

**Definition:**

* Accessibility (shortened as "a11y") is the practice of making websites usable for all people, regardless of ability.
* The "11" in a11y stands for the eleven letters between "a" and "y" in the word "accessibility."

Accessible web design ensures users with visual, auditory, cognitive, or motor impairments can interact with the site content.

**Example Tool:**

* A screen reader is software (like NVDA or VoiceOver) that reads out text and descriptions of elements on the page so that blind or visually impaired users can use the website.

---

## `aria-*` Attributes (Accessible Rich Internet Applications)

ARIA attributes help make dynamic content (like modals, tooltips, and sliders) accessible. They add extra semantic meaning that assistive technologies can use.

### Common ARIA Attributes

* `aria-label`: Adds an accessible name to elements.

  ```html
  <button aria-label="Close">X</button>
  ```

* `aria-hidden`: Hides elements from screen readers.

  ```html
  <div aria-hidden="true">Not read by screen reader</div>
  ```

* `aria-live`: Announces content changes (useful in notifications).

  ```html
  <div aria-live="polite">New message received</div>
  ```

* `aria-expanded`: Indicates whether an element is expanded or collapsed.

  ```html
  <button aria-expanded="false">Show More</button>
  ```

**Note:** ARIA should only be used when native HTML cannot express the desired behavior.

---

## `role` Attribute

The `role` attribute tells assistive technologies what type of element they are interacting with.

### Examples

* `role="button"` for custom clickable elements
* `role="navigation"` to identify a group of navigation links
* `role="dialog"` for modals or pop-up windows

```html
<div role="dialog" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Delete Item</h2>
  <p>Are you sure?</p>
</div>
```

Roles are crucial when using non-semantic elements like `<div>` or `<span>` for interactive content.

---

## Keyboard Navigation

Many users navigate websites using only a keyboard. To support them:

* Use semantic HTML elements like `<button>`, `<a>`, `<input>`, which are natively focusable.
* Use `tabindex` to control focus order:

  ```html
  <div tabindex="0">Focusable Element</div>
  ```

* Avoid removing outlines (`outline: none`) unless you provide an alternative visual indicator.
* Ensure users can tab through interactive elements in a logical order.

---

## Screen Reader Support

Screen readers convert text and ARIA information into speech or braille.
To improve screen reader usability:

* Use landmarks like `<nav>`, `<header>`, `<main>`, `<footer>`.
* Label form elements using `<label>` or `aria-label`:

  ```html
  <input type="text" id="email" aria-label="Email Address">
  ```

* Group form fields with `<fieldset>` and `<legend>`.
* Ensure headings are nested logically: `<h1>` > `<h2>` > `<h3>`.

**Helpful Tip:**

* Use a screen reader (like NVDA on Windows or VoiceOver on macOS) to test how your content is read aloud.

---

## Testing and Tools

To test accessibility:

* **Lighthouse (Chrome DevTools)**: Run an accessibility audit.
* **axe DevTools (browser extension)**: Gives specific accessibility improvement tips.
* **NVDA** (Windows) or **VoiceOver** (Mac): Try using your site with a screen reader.

These tools help identify missing labels, incorrect roles, keyboard traps, and other common issues.

---

## Summary

Making websites accessible is not just a best practice—it’s essential for inclusive design. Key accessibility tools include:

* `aria-*` attributes to describe roles and states
* `role` to clarify non-semantic elements
* Proper keyboard navigation and focus order
* Semantic HTML for screen reader support

By implementing accessibility features, you make the web better for everyone—regardless of ability or device.
