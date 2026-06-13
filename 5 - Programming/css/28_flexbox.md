# CSS Flexbox

Flexbox (Flexible Box Layout) is a powerful layout system in CSS designed to arrange elements in one direction—either as a row or a column. It provides control over alignment, spacing, and ordering of elements within a container.

---

## Flex Container

To start using Flexbox, define a flex container with `display: flex`.

```css
.container {
  display: flex;
}
```

### Flex Direction

Controls the direction of flex items inside the container.

```css
.container {
  flex-direction: row; /* default */
  /* or column, row-reverse, column-reverse */
}
```

### Gap

Adds spacing between items (like margin but easier).

```css
.container {
  gap: 20px;
}
```

### Justify Content

Aligns items along the **main axis** (horizontal in row, vertical in column).

```css
.container {
  justify-content: center; /* space-between, space-around, space-evenly, flex-start, flex-end */
}
```

### Align Items

Aligns items along the **cross axis** (perpendicular to main axis).

```css
.container {
  align-items: center; /* stretch, flex-start, flex-end, baseline */
}
```

### Flex Wrap

Allows items to wrap to the next line if they overflow.

```css
.container {
  flex-wrap: wrap; /* or nowrap, wrap-reverse */
}
```

---

## Flex Items

The children of a flex container can be individually styled.

### Flex Grow

Defines how much an item should grow to fill extra space.

```css
.item {
  flex-grow: 1;
}
```

A value of 1 means the item can grow. 0 means it won’t grow.

### Flex Shrink

Defines how much an item should shrink if space is tight.

```css
.item {
  flex-shrink: 1;
}
```

A value of 1 allows shrinking. 0 prevents shrinking.

### Flex Basis

Defines the initial size of the item **before** growing or shrinking.

```css
.item {
  flex-basis: 200px;
}
```

### Shorthand: Flex

You can combine grow, shrink, and basis in one line:

```css
.item {
  flex: 1 1 200px;
}
```

### Order

Controls the visual order of items.

```css
.item {
  order: 2; /* lower values come first */
}
```

### Align Self

Overrides the `align-items` value for a specific item.

```css
.item {
  align-self: flex-end; /* or auto, flex-start, center, stretch */
}
```

---

## Summary

Flexbox is a robust tool for building one-dimensional layouts. It makes it easy to:

* Distribute space between items
* Align items in both axes
* Control how items grow, shrink, and wrap
