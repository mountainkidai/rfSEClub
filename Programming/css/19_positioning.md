# CSS Positioning

CSS positioning controls how elements are placed on the page. There are five main types of positioning and one helper property: `z-index`. Here's how they work:

---

## `static` (Default Positioning)

This is the default position of every element. It means the element is placed in the normal document flow.

```css
.element {
  position: static;
}
```

* You can't move it using `top`, `right`, `bottom`, or `left`.
* Most elements use this unless you change it.

---

## `relative`

Moves the element **relative to its normal position**.

```css
.element {
  position: relative;
  top: 10px;
  left: 20px;
}
```

* The element still takes up space in the layout.
* It can be shifted using `top`, `left`, `right`, or `bottom`.

---

## `absolute`

Moves the element **relative to the nearest positioned ancestor** (i.e., a parent with `position: relative`, `absolute`, or `fixed`).

```css
.container {
  position: relative;
}
.child {
  position: absolute;
  top: 10px;
  left: 10px;
}
```

* If no ancestor is positioned, it will be placed relative to the `body`.
* It does **not** reserve space in layout—it’s taken out of normal flow.

---

## `fixed`

The element is positioned **relative to the browser window**, not the document.

```css
.element {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

* It stays in place even if you scroll.
* Great for sticky navbars, buttons, or footers.

---

## `sticky`

Combines `relative` and `fixed`. It behaves like `relative` until it hits a scroll threshold, then becomes `fixed`.

```css
.element {
  position: sticky;
  top: 0;
}
```

* Useful for sticky headers that stay visible while scrolling.
* Requires a scrollable container.

---

## `z-index`

Controls the **stacking order** of overlapping elements.

```css
.element1 {
  z-index: 1;
}
.element2 {
  z-index: 2;
}
```

* Higher `z-index` values are shown on top.
* Only works on positioned elements (`relative`, `absolute`, etc.).

---

## Summary Table

| Position Type | Affects Layout? | Scrolls With Page? | Needs Ancestor? |
| ------------- | --------------- | ------------------ | --------------- |
| `static`      | Yes             | Yes                | No              |
| `relative`    | Yes             | Yes                | No              |
| `absolute`    | No              | Yes                | Yes (optional)  |
| `fixed`       | No              | No                 | No              |
| `sticky`      | Yes (then No)   | No (when sticky)   | No              |

---

## Example

```html
<div class="container">
  <div class="box static">Static</div>
  <div class="box relative">Relative</div>
  <div class="box absolute">Absolute</div>
  <div class="box fixed">Fixed</div>
  <div class="box sticky">Sticky</div>
</div>
```
