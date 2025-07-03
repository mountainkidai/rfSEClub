# **CSS**

describes the visual style of the html content.

## Syntax

Eg :

```css
h1 {
  font-size: 20px;
  color: blue;
}
```

h1 - selector

/_declaration block starting
{
font-size: 20px;
color: blue;
}
/_ declaration block ending

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

````css
   /* comment */
   ```

1. **types of css**

 - inline - using style attribute
 - internal - using style element or tag inside head tag
 - external - using a external file with .css extension and using link tag

2. **styling text**

 1. `font-size`
 2. `font-family` - (it won’t work unless the user has the font in his system, so we use Google Fonts CDN)
 3. `text-transform`
 4. `font-style`
 5. `line-height: 2` (means maintain the gap by taking 2 times the font size)
 6. `text-align`

 <hr>

3. **combining selectors**: to avoid multiple corrections

```css
   h1, h2, h3 {
     common styles or declarations
   }
   ```

4. **descendant selector**
 Eg :

```css
   header p {
     font-style: italic;
   }
   ```

 Header is a descendant selector or ancestor selector
 and p is a selector

 it means we are apply a common declaration to all the descendant selector (headers) children selectors
 that is p selector.

5. **nested descendant selector**: to differentiate from other common selectors

```css
   article header p {
     font-style: italic;
   }
   ```

 we only want to p tags of header descendant that are of article descendant.

6. **Classes and IDs** - to avoid too much usage of descendant selectors
 <br>
 **HTML**

```html
   <header>
       <h2>Article 1</h2>
       <p id="author">Author: aariv</p>
   </header>
   ```

 **CSS**

```css
   #author {
     color: red;
   }
   ```

 the problem with id is, we can’t use the same id for multiple selectors

 check this [answer- Why we should not use multiple ids](https://discuss.codecademy.com/t/what-happens-if-we-try-to-apply-the-same-id-to-multiple-elements-will-our-styles-not-get-applied-to-the-targeted-ided-elements/340948/3)

 **class** - attribute
 <br>
 **HTML**

```html
   <header>
       <h2 class="article-style">Article 1</h2>
       <p class="article-style">Author: aariv</p>
   </header>
   ```

 **CSS**

```css
   .article-style {
     color: red;
   }
   ```

7. **list-style style**
8. **colors**

 - RGB
 - RGBA (a means alpha for transparency)
 - Hexadecimal notation or HEX code
 - Short hand notation: `#ooffbb -> #ofb` (must be identical)
   **properties list**
 - `color`
 - `background-color`
 - `border`

9. **pseudo classes**

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

 **Alternative with :first-child pseudo class**
```css
li:first-child {
color: rgb(1, 107, 36);
}
```

```css
  li:first-child {
    color: rgb(1, 107, 36);
  }
  ```
3. `li:nth-child(2)`

10. **Styling anchor tags**

 ```
 a {
   text-decoration: none;
 }

 ```css
 a:link {
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
     a:active {
       color: red;
     }
     ```
 4. Universal selectors (\*)
 5. In case of multiple selectors: last one wins
13. **Special case priority**
 1. Declarations marked `!important`
 2. Inline styles
14. **Inheritance and Universal selector**
 - Not every property will undergo inheritance
15. **Padding** - space inside the element
16. **Margin** - space outside the element
17. **final element width**: left border + left padding + width + right padding + right border
18. **final element height**: top border + top padding + height + bottom padding + bottom border
19. **Shorthand operators**

 ```
 padding: 10px 20px;
 /* 10px - top and bottom, 20px - left and right */
 ```

20. **Image styles**
 ```css
     padding: 10px 20px;
     /* 10px - top and bottom, 20px - left and right */
     ```
 - `auto` adjusts based on screen size.
 - `width` and `height` in `%`

21. **Centering page content**

 ```
 .container {
   width: 700px;
   margin-left: auto;
   margin-right: auto;
 }
 ```css
     .container {
       width: 700px;
       margin-left: auto;
       margin-right: auto;
     }
     ```
    - Padding/margins apply only horizontally.
    - Heights/widths do not apply.
 2. **block level boxes**
    - Elements formatted as blocks.
    - Eg: `body`, `main`, `header`, `footer`, `section`, `nav`, `aside`, `div`, `h1-h6`, `p`, `ul`, `ol`, `li`...
 3. **inline-block**
    - Inline from outside, block from inside

23. **Absolute and relative positioning**
24. **Pseudo elements**

 ```css
 h1::first-letter {
   font-size: 2em;
 }
 p::first-line {
   color: gray;
     h1::first-letter {
       font-size: 2em;
     }
     p::first-line {
       color: gray;
     }
     ```
26. **after and before**

 ```css
 p::before {
   content: "Note: ";
 }
 p::after {
   content: " (end)";
     p::before {
       content: "Note: ";
     }
     p::after {
       content: " (end)";
     }
 }
```
**LAYOUTS - 3 WAYS TO BUILD**

1. Gives the page a visual structure.
2. The way we arrange the content on a webpage.

two types of layout

1. page layout - the big one or group of component layouts.
2. component layout - the small parts.

3 ways of building layouts

1. Float layouts.

   - Old way of bulding layouts using float css property.
   - outdated

2. Flexbox

   - Modern way of layiing out elements in a 1-Dimensional row without using floats.
   - perfect for component layouts.

3. CSS GRID
   - For layout out element in a fully 2 D grid.
   - perfect for everything.

| Absolute Positioning                                                                            | Float                                                                                                                                      |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Element is removed fromnormal flow.                                                             | Element is removed fromnormal flow.                                                                                                        |
| we use top left bottom and right to offset the elemtn from its relatively positioned container. | the container will not adjust its height to the element. you will lose height of the parent if incase you use float on all child elements. |

<br>

4. clearing flaots.
5. box-sizing:border-box property

   - it created exact width.

6. Flexbox
   - flex container
   - flex items

Flexbox is a set of related CSS properties for building 1-dimensional layouts

👉 The main idea behind flexbox is that empty space inside a container element
can be automatically divided by its child elements

👉 Flexbox makes it easy to automatically align items to one another inside a parent container, both horizontally and vertically

👉 Flexbox solves common problems such as vertical centering and creating equal-height columns

👉 Flexbox is perfect for replacing floats,allowing us to write fewer and cleaner HTML and CSS code

1. Flexbox terminology

   - Flex container = display:flex
     - gap: to create space between the item without using margin.
     - justify-content: to aligh items along main axis/horizontal
     - align-items: to aligh items along cross axis/vertically
     - flex-direction : to change the items direction on the main axix/horizonatal
     - flex-wrap: to allow items to wrap into a new line
   - Flex items

     - Main axis
     - Cross Axis
     - aligh-self

     - flex-grow:0
       - specifies how much the item will grow relative to the rest of the flexible items inside the same container.
     - flex-shrink:1
       - shrink or not inside the container. 1 true and 0 false
     - flex-basis:auto
       - specifies the initial length of a flexible item.
     - flex: shorthand (g s b)

     - order: by default its 0, -ve number will arrange the element to the left and the +ve number will take the element to the right.

   - the end
````
