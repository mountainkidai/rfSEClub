# Inheritance in CSS

## What is Inheritance?

Inheritance in CSS means some property values are passed down from parent elements to their children automatically.

For example, if a parent has a `color` or `font-family` defined, its children will usually inherit those values unless overridden.

## Example

```css
body {
  color: darkblue;
  font-family: Arial;
}
```

```html
<body>
  <div>
    <p>This paragraph inherits color and font from body.</p>
  </div>
</body>
```

## Inheritable Properties

Some common properties that are inherited:

- `color`
- `font-family`, `font-size`, `font-style`, `font-variant`, `font-weight`
- `letter-spacing`, `line-height`, `word-spacing`
- `text-align`, `visibility`, `white-space`

## Non-Inheritable Properties

Most layout and box-model properties are **not inherited**, like:

- `margin`, `padding`, `border`, `width`, `height`
- `display`, `position`, `top`, `left`, `z-index`
- `background`, `box-shadow`, `overflow`

## Forcing Inheritance

You can explicitly force inheritance using the `inherit` keyword:

```css
h2 {
  font-size: inherit;
}
```

This makes the `h2` element use its parent’s `font-size` instead of its default.
