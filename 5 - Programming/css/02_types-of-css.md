# Types of CSS

There are three main ways to add CSS to your HTML documents. Each method has its own use cases and benefits.

## 1. Inline CSS

CSS written directly in the HTML element using the `style` attribute.

```html
<element style="property: value; property: value;">
```

## 2. Internal CSS

CSS written within the `<style>` tag in the HTML document's `<head>` section.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        selector {
            property: value;
        }
    </style>
</head>
<body>
    <!-- HTML content -->
</body>
</html>
```

## 3. External CSS

CSS written in separate `.css` files and linked to HTML documents.

In your CSS file (e.g., `styles.css`):

```css
selector {
    property: value;
}
```

In your HTML file:

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
