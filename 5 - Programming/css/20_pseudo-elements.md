# CSS Pseudo-Elements

Pseudo-elements let you style specific parts of an element, even if those parts don't have their own HTML tags. They start with double colons (`::`) and are great for enhancing your design without adding extra HTML.

---

## `::first-letter`

Targets **just the first letter** of a block of text.

```css
p::first-letter {
  font-size: 200%;
  color: darkblue;
}
```

This makes the first letter of the paragraph big and dark blue.

---

## `::first-line`

Targets **just the first line** of a block of text (how much fits in one line depends on screen size).

```css
p::first-line {
  font-weight: bold;
  color: green;
}
```

This makes the first visible line of text bold and green.

---

## `::before`

Adds content **before** an element’s actual content. You must use the `content` property for it to show anything.

```css
h1::before {
  content: "🔥 ";
}
```

This puts a fire emoji before every `<h1>`.

---

## `::after`

Adds content **after** an element’s actual content. Again, `content` is required.

```css
a::after {
  content: " ↗";
  color: gray;
}
```

This adds an arrow after every link (great for indicating external links).

---

## Why Use Pseudo-Elements?

* Style parts of text (like just the first letter)
* Add decorative icons or text without extra HTML
* Create effects like underlines, highlights, and tooltips using CSS only

---

## Example

```html
<p class="styled-text">CSS is awesome!</p>
```

```css
.styled-text::first-letter {
  font-size: 150%;
  color: red;
}
.styled-text::after {
  content: " ✅";
}
```

This makes the first letter bigger and red, and adds a checkmark at the end.
