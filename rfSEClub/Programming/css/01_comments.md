# CSS Comments

## What are Comments?

CSS comments are used to add explanatory notes or to prevent the browser from interpreting specific parts of the stylesheet. They are enclosed between `/*` and ` */ ` and are ignored by the browser, meaning they do not affect the styling of the webpage.

```css
/* This is a comment */
```

## Single-Line Comments

```css
/* This comment is on one line */
h1 {
    color: blue; /* This makes the heading blue */
}
```

## Multi-Line Comments

```css
/* 
   This is a multi-line comment
   that spans several lines
   and explains complex styling
*/
```

## Practical Uses

### 1. Explaining Complex Code

```css
/* 
   Creating a centered layout with flexbox
   - flex centers the content both horizontally and vertically
   - min-height ensures full viewport height
*/
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

### 2. Organizing Code Sections

```css
/* =================================
   HEADER STYLES
   ================================= */
header {
    background-color: #333;
    color: white;
    padding: 20px;
}

/* =================================
   NAVIGATION STYLES
   ================================= */
nav {
    background-color: #555;
    padding: 10px;
}
```

### 3. Temporarily Disabling Code

```css
.button {
    background-color: blue;
    color: white;
    /* border: 1px solid black; */
    /* This border is commented out temporarily */
}
```

### 4. Adding TODO Notes

```css
/* TODO: Add hover effects to buttons */
/* TODO: Make responsive for mobile devices */

.button {
    padding: 10px 20px;
    background-color: #007bff;
}
```
