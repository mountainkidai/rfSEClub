# HTML APIs: Modern Interactive Elements

Modern HTML introduces powerful built-in features that enhance interactivity without requiring JavaScript for simple tasks. Let’s explore a few useful HTML APIs: `<details>`, `<summary>`, and `<dialog>`.

---

## 1. `<details>` and `<summary>`: Expandable Content

These elements create a collapsible section that users can toggle open or closed.

### Example

```html
<details>
  <summary>Click to read more</summary>
  <p>This is the hidden content that appears when you expand the section.</p>
</details>
```

### How it works

* `<details>` wraps the entire block.
* `<summary>` defines the visible label.
* Clicking the `<summary>` toggles visibility of the remaining content.

This is useful for FAQs, terms and conditions, or any content you want to hide until needed.

---

## 2. `<dialog>`: Built-in Modal Window

The `<dialog>` tag lets you create a pop-up box (modal) directly in HTML.

### Example

```html
<dialog id="myDialog">
  <p>This is a dialog box!</p>
  <button onclick="document.getElementById('myDialog').close()">Close</button>
</dialog>

<button onclick="document.getElementById('myDialog').showModal()">Open Dialog</button>
```

### How it works

* Use `.show()` or `.showModal()` in JavaScript to open the dialog.
* Use `.close()` to hide it.
* The browser handles focus and background click blocking automatically.

Dialogs are great for confirmation boxes, forms, alerts, and onboarding popups.

---

## Benefits

* No need for external libraries or custom JavaScript.
* Works well with accessibility tools.
* Native behavior is consistent across browsers (where supported).
