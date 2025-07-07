# Descendant Selectors

Descendant selectors allow you to target elements that are nested inside other elements.

## Basic Syntax

```css
ancestor descendant {
    property: value;
}
```

## How It Works

A descendant selector targets elements that are inside (descendants of) another element.

```css
/* Target all p elements inside header */
header p {
    color: white;
    font-size: 14px;
}

/* Target all links inside navigation */
nav a {
    text-decoration: none;
    color: #333;
}
```

## Multiple Levels

Descendant selectors work at any nesting level, regardless of how deeply nested they are:

```html
<div class="container">
    <section>
        <article>
            <p>This paragraph will be styled</p>
        </article>
    </section>
</div>
```

```css
/* This targets the p element even though it's nested 3 levels deep */
.container p {
    color: blue;
}
```
