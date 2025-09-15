# CSS Positioning

CSS positioning is used to control **where** elements appear on a webpage. It allows you to move elements around or make them stick in place, depending on how you want them to behave.

We use positioning when:

* We want an element to move or float to a specific place.
* We want an element to stay fixed on screen while scrolling.
* We want layers or popups to appear on top of others.
* We want sticky headers, menus, or floating buttons.

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

**Why use it?**
Useful when you want to slightly move something from its original spot without breaking the layout.

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

* If no ancestor is positioned, it will be placed relative to the `<body>`.
* It does **not** reserve space in layout—it’s taken out of normal flow.

**Why use it?**
Great for creating tooltips, pop-ups, or placing elements exactly where you want.

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

**Why use it?**
For elements that must stay visible all the time, like a floating chat button.

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

**Why use it?**
Great for keeping headings visible when scrolling through long pages.

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

Each positioning type is used based on the layout behavior you want to achieve.
