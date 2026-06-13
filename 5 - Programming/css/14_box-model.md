# Box Model in HTML and CSS

The **Box Model** is a fundamental concept in web design and layout. Every HTML element is considered a box, and the box model describes how the size of that element is calculated.

---

## Parts of the Box Model

```txt
+-------------------------------+
|          Margin               |
|   +-----------------------+   |
|   |      Border           |   |
|   |  +---------------+    |   |
|   |  |   Padding     |    |   |
|   |  | +---------+   |    |   |
|   |  | | Content |   |    |   |
|   |  | +---------+   |    |   |
|   |  +---------------+    |   |
|   +-----------------------+   |
+-------------------------------+
```

1. **Content**: The actual content like text, image, etc.
2. **Padding**: Space between the content and the border.
3. **Border**: A line that wraps around the padding and content.
4. **Margin**: Space between the border and other elements.

---

## Width and Height Calculation

By default, the size of an element is calculated like this:

```txt
Total Width = content width + left/right padding + left/right border + left/right margin

Total Height = content height + top/bottom padding + top/bottom border + top/bottom margin
```

### Example

```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

* Content width = 200px
* Padding = 20px on each side → 40px
* Border = 5px on each side → 10px
* Margin = 10px on each side → 20px

**Total Width** = 200 + 40 + 10 + 20 = **270px**

---

## Box-Sizing Property

You can change how the width and height are calculated using the `box-sizing` property.

```css
.box {
  box-sizing: border-box;
}
```

* Now, the total width includes padding and border.
* So if `width: 200px`, it includes content + padding + border = 200px total.

This makes layout easier and more intuitive.

---

## Summary Table

| Part       | What it Affects                        |
| ---------- | -------------------------------------- |
| Content    | Displays actual text/image/etc.        |
| Padding    | Space between content and border       |
| Border     | Outline around padding and content     |
| Margin     | Space between elements                 |
| Box-sizing | Changes how width/height is calculated |
