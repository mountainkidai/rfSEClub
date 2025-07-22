# Advanced Selectors in CSS

Advanced CSS selectors give you more control to target specific elements based on attributes or relationships between elements. This allows you to style elements without adding extra classes or IDs.

---

## Attribute Selectors

These selectors allow you to target elements based on the presence or value of their attributes.

### `[attr]`

Selects elements that have a specific attribute, regardless of its value:

```css
input[required] {
  border: 2px solid red;
}
```

This will style all `<input>` elements that have a `required` attribute.

### `[attr=value]`

Selects elements with a specific attribute and a specific value:

```css
a[target="_blank"] {
  color: green;
}
```

This styles only anchor tags that open in a new tab.

### `[attr^=value]`, `[attr$=value]`, `[attr*=value]`

* `^=` selects if the attribute value **starts with** the specified string.
* `$=` selects if it **ends with** the string.
* `*=` selects if it **contains** the string anywhere.

Example:

```css
a[href^="https"] {
  color: blue;
}
```

This targets all links that begin with "https".

---

## Sibling Combinators

These selectors target elements based on their position relative to other elements.

### Adjacent Sibling (`+`)

Selects an element that comes immediately after another:

```css
h2 + p {
  margin-top: 0;
}
```

This will style the first `<p>` directly after any `<h2>`.

### General Sibling (`~`)

Selects all elements that share the same parent and appear after the specified element:

```css
h2 ~ p {
  color: gray;
}
```

This will style all `<p>` elements that follow any `<h2>` under the same parent.

---

## Use Cases

* Highlighting required form fields with `[required]`
* Styling external links with `[href^="http"]`
* Controlling layout flow based on element order with sibling selectors

These selectors are especially helpful when you want to target HTML structures semantically without adding extra markup.
