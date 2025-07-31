# CSS Display Types

The `display` property tells the browser how to show an element—should it take up the whole line, sit next to other items, or act like a box

---

## Why is `display` important?

Think of every element on your webpage (like a paragraph, image, button, etc.) as a building block. The `display` type defines **how those blocks behave**:

* Should they stack on top of each other like books?
* Should they sit side-by-side like seats in a row?
* Should they act like text characters inside a sentence?

Now let’s go through the common types:

---

## 1. `block`

**Think of it like a box that takes the full row.**

* Always starts on a **new line**.
* Takes up **100% width** by default.
* You can set its `width`, `height`, `padding`, and `margin`.

### Real-World Use

Paragraphs, divs, headers—all these use `block` by default.

### Example

```html
<div style="display: block; background: lightblue;">Block Element</div>
<div style="display: block; background: lightgreen;">Another Block</div>
```

These appear one below the other.

---

## 2. `inline`

**Think of it like a word inside a sentence.**

* Sits **next to other elements** on the same line.
* Takes up **only as much width** as needed.
* **Cannot** use `width` and `height`.
* Only left/right `margin` or `padding` works.

### Real-World Use

`<span>`, `<a>`, and `<strong>` tags are inline by default.

### Example

```html
<span style="display: inline; background: yellow;">Inline Text</span>
<span style="display: inline; background: pink;">More Inline</span>
```

These sit beside each other like text.

---

## 3. `inline-block`

**Think of it as a mini box that fits in a sentence.**

* Behaves like `inline` (sits in line),
* But **allows you to set width, height, padding, and margin** like a `block` element.

### Real-World Use

Useful when you want side-by-side boxes that are still inline but need spacing and sizing.

### Example

```html
<div style="display: inline-block; width: 150px; height: 100px; background: orange; margin-right: 10px;">Box 1</div>
<div style="display: inline-block; width: 150px; height: 100px; background: lightcoral;">Box 2</div>
```

These boxes sit side-by-side but still keep their size and spacing.

---

## 4. `flex`

**Think of it like a row of flexible boxes.**

* Lets children elements align in a row or column.
* Automatically adjusts spacing and alignment.
* Makes responsive layout easier.

### Real-World Use

Used to create flexible rows or columns of items that adjust to screen size.

### Example

```html
<div style="display: flex; gap: 10px;">
  <div style="background: lightblue; padding: 10px;">Flex 1</div>
  <div style="background: lightgreen; padding: 10px;">Flex 2</div>
</div>
```

Items line up in a row and adjust automatically.

---

## 5. `grid`

**Think of it like a table with rows and columns.**

* Lets you place items in cells of a grid.
* You control rows, columns, spacing, and position.

### Real-World Use

Used for complex layouts like web pages with sidebars, headers, footers.

### Example

```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
  <div style="background: lavender;">Grid 1</div>
  <div style="background: mistyrose;">Grid 2</div>
</div>
```

Creates a 2-column grid layout.

---

## 6. `none`

**Think of it as hiding the element completely.**

* The element is not displayed at all.
* It won’t take up space on the page.

### Real-World Use

Used when you want to hide something temporarily, like a dropdown menu.

### Example

```html
<div style="display: none;">You can't see me</div>
```

This element is invisible and takes up no space.

---

## Summary Table

| Display Type   | Starts New Line | Respects Width/Height | Sits Inline | Can Be a Layout Tool |
| -------------- | --------------- | --------------------- | ----------- | -------------------- |
| `block`        | Yes             | Yes                   | No          | No                   |
| `inline`       | No              | No                    | Yes         | No                   |
| `inline-block` | No              | Yes                   | Yes         | No                   |
| `flex`         | No              | Yes                   | Yes         | Yes                  |
| `grid`         | No              | Yes                   | Yes         | Yes                  |
| `none`         | No              | No                    | No          | No (hidden)          |
