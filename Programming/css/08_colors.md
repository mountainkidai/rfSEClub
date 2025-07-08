# Colors in CSS

CSS provides several ways to specify colors for your web elements.

## Color Format Types

### 1. Named Colors

```css
.text {
    color: red;
    background-color: blue;
    border-color: green;
}
```

Common named colors: `red`, `blue`, `green`, `yellow`, `orange`, `purple`, `pink`, `brown`, `black`, `white`, `gray`

### 2. HEX Colors

```css
.element {
    color: #ff0000;           /* Red */
    background-color: #00ff00; /* Green */
    border-color: #0000ff;    /* Blue */
}
```

### 3. HEX Shorthand

```css
.element {
    color: #f00;        /* Same as #ff0000 */
    background-color: #0f0; /* Same as #00ff00 */
    border-color: #00f;     /* Same as #0000ff */
}
```

### 4. RGB Colors

```css
.element {
    color: rgb(255, 0, 0);        /* Red */
    background-color: rgb(0, 255, 0); /* Green */
    border-color: rgb(0, 0, 255);    /* Blue */
}
```

### 5. RGBA Colors (with Alpha/Transparency)

```css
.element {
    color: rgba(255, 0, 0, 0.5);        /* Semi-transparent red */
    background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent black */
    border-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
}
```

## Understanding Alpha Values

The alpha value controls transparency:

- `0` = Completely transparent
- `0.5` = Semi-transparent
- `1` = Completely opaque
