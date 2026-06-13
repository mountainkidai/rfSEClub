# **State Management in CSS**

CSS allows you to style elements based on their current state. These states may be user-driven (like focus or checked) or application-driven (like custom data attributes). Understanding how to target these states helps in making dynamic and interactive interfaces.

---

## Pseudo-Classes for State

### `:focus`

This targets an element when it has focus, typically from keyboard navigation or mouse click.

```css
input:focus {
  outline: 2px solid blue;
  background-color: #f0f8ff;
}
```

Use it to enhance accessibility by showing which field is currently active.

### `:disabled`

This targets elements that are disabled.

```css
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

Useful for visually indicating that a user cannot interact with the button.

### `:checked`

This targets checkboxes and radio buttons that are selected.

```css
input:checked + label {
  font-weight: bold;
  color: green;
}
```

Great for changing the appearance of associated labels or other elements when an option is selected.

---

## Custom States with Data Attributes

HTML allows you to define custom states using `data-*` attributes. These can be targeted in CSS:

```html
<div data-state="active">Menu Item</div>
```

```css
div[data-state="active"] {
  background-color: #e0ffe0;
  border-left: 4px solid green;
}
```

This is useful for representing application-specific states like `loading`, `active`, `error`, etc.

---

## Use Cases

* Highlight form inputs with `:focus` to guide users.
* Grey out buttons with `:disabled` to indicate unavailable actions.
* Use `:checked` to build custom checkbox or toggle interfaces.
* Leverage `data-*` attributes for managing custom UI states from JavaScript.

---
