# Priority and Specificity in CSS

## What is Specificity?

Specificity determines which CSS rule is applied when multiple rules target the same element. The more specific the selector, the higher its priority.

For example, given these rules:

```css
p { color: black; }            /* element selector */
.content p { color: blue; }    /* class + element */
#main p { color: green; }      /* ID + element */
```

A `<p>` inside `#main` will be green because the ID selector is more specific than class or element selectors.

## Specificity Levels

From highest to lowest priority:

1. `!important` declaration (overrides all)

   ```css
   p {
     color: red !important; /* Always applied */
   }
   ```

2. Inline styles (e.g., `style="color: red;"`)

   ```html
   <p style="color: red;">This text is red due to inline style.</p>
   ```

3. ID selectors (`#header`, `#main`)

   ```css
   #main {
     color: green;
   }
   ```

4. Class selectors (`.box`, `.active`), attribute selectors (`[type="text"]`), pseudo-classes (`:hover`)

   ```css
   .active {
     font-weight: bold;
   }
   input[type="text"] {
     border: 1px solid black;
   }
   a:hover {
     text-decoration: underline;
   }
   ```

5. Element selectors (`div`, `p`, `h1`)

   ```css
   h1 {
     color: navy;
   }
   ```

6. Universal selector (`*`)

   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```
