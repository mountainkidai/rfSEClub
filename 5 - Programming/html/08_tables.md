# HTML Tables

Tables in HTML are used to show data in rows and columns, just like a spreadsheet.

## 1. The `<table>` Tag

This tag starts a table. All the rows and columns are written inside this tag.

### Example

```html
<table>
  <!-- table rows go here -->
</table>
```

## 2. Table Rows: `<tr>`

The `<tr>` tag means "table row." It holds one row of cells.

```html
<tr>
  <!-- table cells go here -->
</tr>
```

## 3. Table Headings: `<th>`

The `<th>` tag is used for headings (top row). It makes the text bold and centered.

```html
<th>Heading</th>
```

## 4. Table Data: `<td>`

The `<td>` tag is used for regular data cells.

```html
<td>Data</td>
```

## Example Table

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>30</td>
    <td>London</td>
  </tr>
</table>
```

### Output

| Name  | Age | City     |
| ----- | --- | -------- |
| Alice | 25  | New York |
| Bob   | 30  | London   |
