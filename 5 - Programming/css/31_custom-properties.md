# CSS Custom Properties (Variables)

Custom properties, also known as CSS variables, allow you to store values in one place and reuse them throughout your stylesheets. They improve maintainability and make it easier to update styles consistently.

---

## Defining a Variable

CSS variables are defined using the `--` prefix and usually placed inside a `:root` selector for global scope:

```css
:root {
  --main-color: #3498db;
  --padding-size: 16px;
}
```

* `--main-color` and `--padding-size` are custom variables.
* `:root` is similar to the `<html>` element and provides global scope.

---

## Using a Variable with `var()`

To use a variable, wrap its name inside the `var()` function:

```css
.button {
  background-color: var(--main-color);
  padding: var(--padding-size);
}
```

### Fallback Values

You can provide a fallback value if the variable is not defined:

```css
color: var(--text-color, black);
```

---

## Local Scope and Inheritance

Variables can also be defined in a specific element or class, giving them local scope:

```css
.card {
  --main-color: coral;
  background-color: var(--main-color);
}
```

* The `.card` element and its children will use the local `--main-color` value unless overridden further down.
* If a variable is not found in local scope, it looks up the hierarchy to find a defined value (inheritance).

---

## Use Cases

* Theme switching (light/dark mode)
* Consistent spacing, colors, and fonts
* Easier maintenance when updating styles across a site

---

## Summary

Custom properties in CSS allow dynamic, reusable styling across a website. They support scoped values, inheritance, and fallback options, making CSS more modular and efficient.
