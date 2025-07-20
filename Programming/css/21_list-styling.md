# CSS List Styling

Lists are commonly used in HTML, and CSS allows you to control how these lists look. The two most important properties for styling lists are `list-style-type` and `list-style-position`.

---

## `list-style-type`

This property defines what kind of marker (bullet, number, etc.) should be used for the list items.

### Common values

* `disc`: Solid circle (default for unordered lists)
* `circle`: Hollow circle
* `square`: Solid square
* `decimal`: Numbers (default for ordered lists)
* `lower-roman`: i, ii, iii, iv...
* `upper-alpha`: A, B, C...
* `none`: Removes the bullet or number entirely

### Example

```css
ul {
  list-style-type: square;
}

ol {
  list-style-type: upper-roman;
}
```

This will make an unordered list display square bullets, and an ordered list use Roman numerals.

---

## `list-style-position`

This property controls whether the bullet/number appears **inside** the content box of the list item or **outside** it.

### Values

* `outside` (default): The marker is placed to the left of the content.
* `inside`: The marker appears inside the content box (and aligns with text).

### Example

```css
ul {
  list-style-position: inside;
}
```

This can be helpful when you want tighter alignment or better visual balance.

---

## Combining with Padding

When you use `list-style-position: inside`, you often don't need extra left padding. But with `outside`, you might need to adjust padding to keep it clean.

```css
ul {
  list-style-type: disc;
  list-style-position: outside;
  padding-left: 20px;
}
```

---

## Removing List Markers Completely

Sometimes, you may want a list layout without bullets or numbers at all:

```css
ul {
  list-style-type: none;
  padding-left: 0;
}
```

This is often used for navigation menus or custom layouts.

---

## Summary

| Property              | Purpose                                      |
| --------------------- | -------------------------------------------- |
| `list-style-type`     | Controls the bullet or number style          |
| `list-style-position` | Controls marker position relative to content |
