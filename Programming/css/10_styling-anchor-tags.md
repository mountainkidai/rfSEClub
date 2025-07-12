# Styling Anchor Tags

Anchor tags (`<a>`) define hyperlinks. You can customize their color, decoration, and behavior in different states.

## Common Properties

- `color`: Sets link text color.
- `text-decoration`: Controls underlines (`none`, `underline`).
- `cursor`: Changes pointer style (e.g., `pointer`).

## State-Specific Styling

```css
/* Unvisited link */
a:link {
  color: #1a0dab;
  text-decoration: none;
}

/* Visited link */
a:visited {
  color: #551a8b;
}

/* Hover state */
a:hover {
  text-decoration: underline;
}

/* Active (click) state */
a:active {
  color: #d30910;
}
