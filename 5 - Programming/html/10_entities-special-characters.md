# HTML Entities and Special Characters

## What is an HTML Entity?

An HTML entity is a special code that starts with `&` and ends with `;`. It is used to display reserved(characters normally used as part of the code.) or special characters.

## 1. Commonly Used Entities

| Symbol | Code      | Description           |
| ------ | --------- | --------------------- |
| <      | `&lt;`    | Less than             |
| >      | `&gt;`    | Greater than          |
| &      | `&amp;`   | Ampersand             |
| "      | `&quot;`  | Double quotation mark |
| '      | `&apos;`  | Single quotation mark |
| ©      | `&copy;`  | Copyright symbol      |
| ®      | `&reg;`   | Registered trademark  |
| €      | `&euro;`  | Euro sign             |
| ₹      | `&#8377;` | Indian Rupee symbol   |

## 2. Why Use Entities?

* To display characters like `<`, `>` which are part of HTML code
* To include symbols like ©, €, ₹, etc.
* To improve browser compatibility

## 3. Example

```html
<p>This is less than: &lt; and this is greater than: &gt;</p>
<p>5 &lt; 10 and 10 &gt; 5</p>
<p>&copy; 2025 My Website</p>
```

## Output

```txt
This is less than: < and this is greater than: >
5 < 10 and 10 > 5
© 2025 My Website
```
