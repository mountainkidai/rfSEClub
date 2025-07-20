# Input Types in HTML

HTML provides various `<input>` types that allow developers to collect different kinds of user data through forms. Using appropriate input types improves user experience, accessibility, and validation. Browsers also render each input type differently and provide optimized keyboards or UI for each.

---

## 1. `email` Input Type

The `email` input type is used for entering an email address. It triggers native validation to ensure a proper email format (e.g., [user@example.com](mailto:user@example.com)).

### Syntax

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
```

### Explanation

* The `type="email"` instructs the browser to validate input for correct email format.
* The `required` attribute prevents form submission unless a valid email is entered.
* On mobile, the keyboard shows the `@` symbol for convenience.

### Output

An input box that expects a valid email format.

---

## 2. `password` Input Type

Used to enter confidential information, like a password. The characters are masked.

### Syntax

```html
<label for="pwd">Password:</label>
<input type="password" id="pwd" name="pwd">
```

### Explanation

* Input is hidden using dots or asterisks for privacy.
* Combine with `minlength`, `maxlength`, and `required` for validation.

---

## 3. `checkbox` Input Type

Used when users need to select one or more options.

### Syntax

```html
<label><input type="checkbox" name="subscribe"> Subscribe to newsletter</label>
```

### Explanation

* Returns `on` or the `value` attribute if checked, and nothing if unchecked.
* Useful in consent forms, preference checklists, etc.

---

## 4. `radio` Input Type

Lets users select one option from a group.

### Syntax

```html
<label><input type="radio" name="gender" value="male"> Male</label>
<label><input type="radio" name="gender" value="female"> Female</label>
```

### Explanation

* Inputs sharing the same `name` act as a group, allowing only one selection.
* `value` defines what is submitted when selected.

---

## 5. `date` Input Type

Allows users to select a date from a calendar picker.

### Syntax

```html
<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="dob">
```

### Explanation

* Offers a date picker in modern browsers.
* Value format: `YYYY-MM-DD`.
* Can be restricted using `min` and `max` attributes.

---

## 6. `file` Input Type

Used to upload files from the local system.

### Syntax

```html
<label for="resume">Upload Resume:</label>
<input type="file" id="resume" name="resume">
```

### Explanation

* Triggers a file selection dialog.
* Use `accept` to limit file types (e.g., `accept=".pdf,.doc"`).
* Use `multiple` to allow multiple files.

---

## 7. `range` Input Type

Provides a slider to select a numeric value within a range.

### Syntax

```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="100" step="10">
```

### Explanation

* `min` and `max` define the bounds.
* `step` defines the increment.
* Use JavaScript to display live value.

---

## Full Example

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required><br><br>

  <label for="pwd">Password:</label>
  <input type="password" id="pwd" name="pwd"><br><br>

  <label><input type="checkbox" name="subscribe"> Subscribe</label><br><br>

  Gender:
  <label><input type="radio" name="gender" value="male"> Male</label>
  <label><input type="radio" name="gender" value="female"> Female</label><br><br>

  <label for="dob">DOB:</label>
  <input type="date" id="dob" name="dob"><br><br>

  <label for="resume">Resume:</label>
  <input type="file" id="resume" name="resume"><br><br>

  <label for="volume">Volume:</label>
  <input type="range" id="volume" name="volume" min="0" max="100" step="10"><br><br>

  <button type="submit">Submit</button>
</form>
```
