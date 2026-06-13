# Multi-Column Layout in CSS

Multi-column layout allows you to display content in multiple columns, similar to how newspapers or magazines layout text. It’s useful for creating visually balanced blocks of content, especially for longer paragraphs.

---

## column-count

This property defines how many columns the content should be split into.

```css
.article {
  column-count: 3;
}
```

This means the content inside `.article` will flow into 3 columns.

* **Note:** The browser will automatically balance the height of the columns so they line up evenly, unless restricted by other styles.

---

## column-gap

Defines the space between each column.

```css
.article {
  column-count: 3;
  column-gap: 30px;
}
```

This adds 30px of space between each column, making the layout easier to read.

---

## column-rule

This adds a visual line between the columns (like a border between them).

```css
.article {
  column-count: 3;
  column-gap: 30px;
  column-rule: 1px solid #ccc;
}
```

* `1px` is the thickness of the rule.
* `solid` is the style of the line.
* `#ccc` is the color of the line.

This helps clearly separate the columns visually.

---

## Example: Complete Multi-Column Style

```css
.article {
  column-count: 2;
  column-gap: 20px;
  column-rule: 1px dashed gray;
  padding: 10px;
}
```

This would:

* Split the content into 2 columns.
* Add 20px space between them.
* Add a dashed gray line as a divider.

---

## Responsive Tip

You can combine multi-column layout with media queries:

```css
@media (max-width: 600px) {
  .article {
    column-count: 1;
  }
}
```

This makes the layout stack into a single column on small screens.

---

## Summary

* `column-count`: Number of columns to divide content into.
* `column-gap`: Spacing between those columns.
* `column-rule`: Divider between columns.

This layout method is great for text-heavy sections to improve readability and visual balance.
