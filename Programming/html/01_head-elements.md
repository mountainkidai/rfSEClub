# Head Elements in HTML

## What is the `<head>` Element?

The `<head>` tag contains metadata and resources required by the browser but not directly displayed on the web page.

## Common Head Elements

### 1. `<title>`

Sets the title of the web page (shown on the browser tab).

```html
<title>My Web Page</title>
```

### 2. `<meta>`

Defines metadata such as character encoding and responsive settings.

```html
<!-- Character encoding -->
<meta charset="UTF-8" />

<!-- Viewport for responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### 3. `<link>`

Used to link external resources like CSS files.

```html
<link rel="stylesheet" href="styles.css" />
```

### 4. `<script>` (basic usage)

Includes or links to JavaScript files.

```html
<script src="script.js"></script>
```

## Full Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Head Elements Example</title>
    <link rel="stylesheet" href="style.css" />
    <script src="main.js"></script>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This page includes head elements.</p>
  </body>
</html>
```
