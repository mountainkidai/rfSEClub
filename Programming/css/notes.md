# CSS

describes the visual style of the HTML content.

## Syntax

E.g.:

```css
h1 {
  font-size: 20px;
  color: blue;
}
```

h1 - selector

/*Declaration block starts */
{
font-size: 20px;
color: blue;
}
/* Declaration block ends*/

font-size: 20px; - declaration or style

font-size - property

20px - value

---

## CSS RULE

```css
h1 {
  font-size: 20px;
  color: blue;
}
```

---

## WHAT TO LEARN?

1. **comments**

   ```css
   /* comment */
   ```

2. **types of css**

   - inline - using style attribute
   - internal - using style element or tag inside head tag
   - external - using an external file with .css extension and using link tag

3. **styling text**

4. `font-size`

5. `font-family` - (it won't work unless the user has the font in his system, so we use Google Fonts CDN)

6. `text-transform`

7. `font-style`

8. `line-height: 2` (means maintain the gap by taking 2 times the font size)

9. `text-align`

---

1. **combining selectors**: to avoid multiple corrections

    ```css
    h1, h2, h3 {
      common styles or declarations
    }
    ```

2. **descendant selector**
    Eg:

    ```css
    header p {
      font-style: italic;
    }
    ```

    Header is a descendant selector or ancestor selector and p is a selector.

    It means we are applying a common declaration to all the child selectors (p) inside the header selector.

3. **nested descendant selector**: to differentiate from other common selectors

    ```css
    article header p {
      font-style: italic;
    }
    ```

    We only want the p tags inside header which itself is inside article.

4. **Classes and IDs** - to avoid too much usage of descendant selectors

### HTML Example

```html
<header>
    <h2>Article 1</h2>
    <p id="author">Author: aariv</p>
</header>
```

### CSS Example

```css
#author {
  color: red;
}
```

The problem with id is, we can't use the same id for multiple elements.

Check this [answer - Why we should not use multiple IDs](https://discuss.codecademy.com/t/what-happens-if-we-try-to-apply-the-same-id-to-multiple-elements-will-our-styles-not-get-applied-to-the-targeted-ided-elements/340948/3)

**class** - attribute

### HTML Class Example

```html
<header>
    <h2 class="article-style">Article 1</h2>
    <p class="article-style">Author: aariv</p>
</header>
```

### CSS Class Example

```css
.article-style {
  color: red;
}
```

1. **list-style style**

2. **colors**

    - RGB
    - RGBA (a means alpha for transparency)
    - Hexadecimal notation or HEX code
    - Short hand notation: `#ooffbb -> #ofb` (must be identical)

### properties list

- `color`
- `background-color`
- `border`

1. **pseudo classes**

    ```html
    <ol>
      <li class="first-list">one</li>
      <li>two</li>
      <li>three</li>
    </ol>

    <ul>
      <li class="first-list">one</li>
      <li>two</li>
      <li>three</li>
    </ul>
    ```

    **Alternative with :first-child pseudo class**

    ```css
    li:first-child {
      color: rgb(1, 107, 36);
    }
    ```

    - `li:nth-child(2)`

2. **Styling anchor tags**

    ```css
    a {
      text-decoration: none;
    }

    a:link {
      color: blue;
    }
    a:visited {
      color: purple;
    }
    a:hover {
      color: green;
    }
    ```

3. Universal selectors (`*`)

4. In case of multiple selectors: last one wins

5. **Special case priority**

6. Declarations marked `!important`

7. Inline styles

8. **Inheritance and Universal selector**

    - Not every property will undergo inheritance

9. **Padding** - space inside the element

10. **Margin** - space outside the element

11. **final element width**: left border + left padding + width + right padding + right border

12. **final element height**: top border + top padding + height + bottom padding + bottom border

13. **Shorthand operators**

    ```css
    padding: 10px 20px;
    /* 10px - top and bottom, 20px - left and right */
    ```

14. **Image styles**

    ```css
    padding: 10px 20px;
    /* 10px - top and bottom, 20px - left and right */
    ```

    - `auto` adjusts based on screen size.
    - `width` and `height` in `%`

15. **Centering page content**

    ```css
    .container {
      width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    ```

    - Padding/margins apply only horizontally.
    - Heights/widths do not apply.

16. **block level boxes**

    - Elements formatted as blocks.
    - Eg: `body`, `main`, `header`, `footer`, `section`, `nav`, `aside`, `div`, `h1-h6`, `p`, `ul`, `ol`, `li`...

17. **inline-block**

    - Inline from outside, block from inside

18. **Absolute and relative positioning**

19. **Pseudo elements**

    ```css
    h1::first-letter {
      font-size: 2em;
    }
    p::first-line {
      color: gray;
    }
    ```

20. **after and before**

    ```css
    p::before {
      content: "Note: ";
    }
    p::after {
      content: " (end)";
    }
    ```

## LAYOUTS - 3 WAYS TO BUILD

1. Gives the page a visual structure.
2. The way we arrange the content on a webpage.

### Two types of layout

1. Page layout - the big one or group of component layouts.
2. Component layout - the small parts.

### 3 ways of building layouts

1. Float layouts.

   - Old way of building layouts using float CSS property.
   - Outdated

2. Flexbox

   - Modern way of laying out elements in a 1-Dimensional row without using floats.
   - Perfect for component layouts.

3. CSS GRID

   - For laying out elements in a fully 2D grid.
   - Perfect for everything.

| Absolute Positioning                                                                             | Float                                                                                                                               |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Element is removed from normal flow.                                                             | Element is removed from normal flow.                                                                                                |
| We use top left bottom and right to offset the element from its relatively positioned container. | The container will not adjust its height to the element. You will lose height of the parent if you use float on all child elements. |

1. Clearing floats.

2. box-sizing: border-box property

   - It creates exact width.

3. Flexbox

   - Flex container
   - Flex items

Flexbox is a set of related CSS properties for building 1-dimensional layouts

👉 The main idea behind flexbox is that empty space inside a container element can be automatically divided by its child elements

👉 Flexbox makes it easy to automatically align items to one another inside a parent container, both horizontally and vertically

👉 Flexbox solves common problems such as vertical centering and creating equal-height columns

👉 Flexbox is perfect for replacing floats, allowing us to write fewer and cleaner HTML and CSS code

### Flexbox terminology

- Flex container = display: flex

  - gap: to create space between the items without using margin.
  - justify-content: to align items along main axis/horizontal
  - align-items: to align items along cross axis/vertically
  - flex-direction: to change the items direction on the main axis/horizontal
  - flex-wrap: to allow items to wrap into a new line

- Flex items

  - Main axis
  - Cross Axis
  - align-self
  - flex-grow: 0

    - Specifies how much the item will grow relative to the rest of the flexible items inside the same container.
  - flex-shrink: 1

    - Shrink or not inside the container. 1 = true and 0 = false
  - flex-basis: auto

    - Specifies the initial length of a flexible item.
  - flex: shorthand (g s b)
  - order: by default it's 0, -ve number will arrange the element to the left and the +ve number will take the element to the right.

- the end
