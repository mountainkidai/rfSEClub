# Styling Text in CSS

Text styling is one of the most fundamental aspects of web design. CSS provides numerous properties to control how text appears on your webpage.

## Font Size

Controls the size of text.

```css
font-size: value;
```

### Common Units

- `px` (pixels) - Fixed size
- `em` - Relative to parent element's font size
- `rem` - Relative to root element's font size
- `%` - Percentage of parent's font size

```css
h1 {
    font-size: 32px;
}
```

## Font Family

Specifies which font to use for text.

```css
font-family: "Primary Font", "Fallback Font", generic-family;
```

### Some Font Categories

- **Serif**: Times New Roman, Georgia, serif
- **Sans-serif**: Arial, Helvetica, sans-serif
- **Monospace**: Courier New, monospace
- **Cursive**: cursive
- **Fantasy**: fantasy

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
```

## Google Fonts Integration

Add beautiful fonts from Google Fonts to your website.

### Step 1: Add Google Fonts Link

```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</head>
```

### Step 2: Use in CSS

```css
body {
    font-family: 'Roboto', sans-serif;
}
```

## Text Transform

Changes the capitalization of text.

- `uppercase` - ALL CAPS
- `lowercase` - all lowercase
- `capitalize` - First Letter Of Each Word
- `none` - No change

```css
.uppercase {
    text-transform: uppercase;
}
```

## Font Style

Controls italic, normal, or oblique text.

- `normal` - Regular text
- `italic` - Italic text
- `oblique` - Slanted text

```css
.italic {
    font-style: italic;
}

.emphasis {
    font-style: italic;
    color: #666;
}

.quote {
    font-style: italic;
    font-size: 18px;
    color: #555;
}
```

## Line Height

Controls the spacing between lines of text.

```css
line-height: value;
```

- Numbers: `1.5`, `1.2`
- Pixels: `24px`
- Percentages: `150%`

```css
body {
    line-height: 1.6;
}
```

## Text Alignment

Controls how text is aligned within its container.

- `left` - Left-aligned (default)
- `center` - Center-aligned
- `right` - Right-aligned
- `justify` - Justified (aligning the text to both the left and right margins of its container)

```css
.center-text {
    text-align: center;
}

.right-align {
    text-align: right;
}

.justified {
    text-align: justify;
}

.header {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}
```
