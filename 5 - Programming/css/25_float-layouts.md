# CSS Float Layouts

Before modern layout systems like Flexbox and Grid, developers used the `float` property to create multi-column or side-by-side layouts. While it's less common today for full layouts, understanding floats is still useful, especially for working with older code or aligning images with text.

---

## Float

The `float` property allows an element to be taken out of the normal document flow and positioned to the left or right of its container.

### Syntax

```css
.element {
  float: left; /* or right */
}
```

### Example

```css
.image {
  float: left;
  margin-right: 10px;
}
```

This makes the image float to the left, and any text beside it will wrap around it.

---

## Clear

When an element is floated, the elements that come after it might wrap around it. To prevent this, use the `clear` property.

### Syntax

```css
.clearfix {
  clear: both;
}
```

* `clear: left` – clears only left floats
* `clear: right` – clears only right floats
* `clear: both` – clears both sides

A common technique is to add a clearing element after floated items to prevent layout issues.

---

## Legacy Layout Technique

Using `float` for layout involved creating columns by floating containers:

```css
.left-column {
  float: left;
  width: 70%;
}
.right-sidebar {
  float: right;
  width: 30%;
}
```

But this method had many issues:

* Parent containers collapse because floated children are taken out of the normal flow.
* Requires clearfix hacks to fix layout collapsing.
* Not very flexible for responsive designs.

---

## Limitations of Float Layouts

* Elements must be cleared to prevent overlap.
* Difficult to vertically center elements.
* Layouts often break on small screens unless carefully managed.
* Requires more effort to align items compared to Flexbox or Grid.

---

## Modern Alternatives

Today, most layout needs are handled with:

* **Flexbox** – for 1D layouts (row or column)
* **CSS Grid** – for 2D layouts (rows and columns)

Float is still useful for specific cases like wrapping text around images or aligning small elements.
