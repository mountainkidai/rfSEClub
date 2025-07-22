# CSS Grid

CSS Grid is a powerful layout system designed to handle two-dimensional layouts with rows and columns. It allows precise control over both horizontal and vertical alignment of elements.

---

## Grid Container

To use CSS Grid, first define a container as a grid using:

```css
display: grid;
```

### grid-template-columns

Specifies the number and size of columns in the grid.

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
}
```

* `200px`: fixed width
* `1fr`: flexible fraction of remaining space

### grid-gap (or gap)

Sets spacing between grid rows and columns.

```css
.container {
  gap: 20px; /* both row and column gap */
}
```

You can also define row and column gaps separately:

```css
.container {
  row-gap: 10px;
  column-gap: 15px;
}
```

### place-items

A shorthand to align items both vertically and horizontally inside the grid cells.

```css
.container {
  place-items: center; /* aligns items in center both vertically and horizontally */
}
```

---

## Grid Items

Elements placed inside the grid container become grid items. You can control their placement and alignment.

### grid-column

Specifies which columns an item should span:

```css
.item {
  grid-column: 1 / 3; /* spans from column line 1 to 3 */
}
```

### grid-row

Specifies which rows an item should span:

```css
.item {
  grid-row: 2 / 4; /* spans from row line 2 to 4 */
}
```

### align-self

Vertically aligns a specific item within its cell.

```css
.item {
  align-self: start; /* other values: center, end, stretch */
}
```

### justify-self

Horizontally aligns a specific item within its cell.

```css
.item {
  justify-self: end; /* other values: center, start, stretch */
}
```

---

## Summary

CSS Grid makes it easier to create clean and flexible layouts by letting you define grid structures and place content precisely. It is especially useful for building complex interfaces that require control in both directions (rows and columns).
