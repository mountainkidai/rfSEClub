# CSS Display Types

The `display` property in CSS controls how elements are visually presented on the page. Common values include `block`, `inline`, and `inline-block`. Understanding these helps in building layouts correctly.

---

## `block`

* Takes up the **full width** of its parent container.
* Always starts on a **new line**.
* You can set **width**, **height**, **margin**, and **padding**.

### Example

```html
<div style="display: block; background: lightblue;">Block Element</div>
<div style="display: block; background: lightgreen;">Another Block</div>
```

These elements stack vertically.

---

## `inline`

* Takes up **only as much width** as its content.
* Flows **in line** with surrounding text.
* **Cannot** set `width` or `height`.
* Only horizontal `margin`/`padding` has effect.

### Example

```html
<span style="display: inline; background: yellow;">Inline Text</span>
<span style="display: inline; background: pink;">More Inline</span>
```

These elements sit next to each other like words.

---

## `inline-block`

* Behaves like `inline` (flows with text), **but** allows setting `width`, `height`, `padding`, and `margin`.
* A mix of both `inline` and `block` behaviors.

### Example

```html
<div style="display: inline-block; width: 150px; height: 100px; background: orange; margin-right: 10px;">Box 1</div>
<div style="display: inline-block; width: 150px; height: 100px; background: lightcoral;">Box 2</div>
```

Boxes appear side by side but respect dimensions and spacing.

---

## Summary

| Display Type | Starts New Line | Respects Width/Height | Sits Inline |
| ------------ | --------------- | --------------------- | ----------- |
| block        | Yes             | Yes                   | No          |
| inline       | No              | No                    | Yes         |
| inline-block | No              | Yes                   | Yes         |
