# CSS Syntax and Structure

## What is CSS?

CSS (Cascading Style Sheets) is a language used to describe the presentation and styling of HTML documents. It controls how web pages look and feel.

## Basic CSS Syntax

CSS follows a simple pattern:

```css
selector {
    property: value;
    property: value;
}
```

## Key Components

### 1. Selectors

Selectors target HTML elements you want to style:

```css
/* Element selector */
h1 { }

/* Class selector */
.my-class { }

/* ID selector */
#my-id { }
```

### 2. Declaration Block

The area between curly braces `{}` where you write your styles:

```css
h1 {
    /* This is a declaration block */
    color: blue;
    font-size: 24px;
}
```

### 3. Properties

Properties define what aspect of the element you want to style:

```css
p {
    color: red;        /* text color */
    font-size: 16px;   /* text size */
    margin: 10px;      /* spacing around element */
}
```

### 4. Values

Values specify how you want the property to be set:

```css
div {
    color: #ff0000;    /* hex color value */
    width: 100px;      /* pixel value */
    margin: auto;      /* keyword value */
}
```

## CSS Rules

1. **Case Sensitivity**: CSS is case-insensitive for properties and values, but class and ID names are case-sensitive
2. **Semicolons**: Each property-value pair must end with a semicolon
3. **Order**: The order of properties within a declaration block doesn't matter
