# HTML Forms Basics

HTML forms are used to collect input from users, like names, emails, and passwords. Forms send this data to a server to be processed.

## 1. The `<form>` Tag

The `<form>` tag is used to create an HTML form. It wraps all the input fields.

```html
<form>
  <!-- form elements go here -->
</form>
```

## 2. The `action` and `method` Attributes

* `action`: Tells the form where to send the data (a file or server link).
* `method`: Tells the browser how to send the data. Common values:

  * `get`: Data is sent in the URL (good for searches).
  * `post`: Data is sent securely in the background (used for logins, signups).

```html
<form action="submit-form.php" method="post">
  <!-- form inputs -->
</form>
```

## 3. Input Fields

Use the `<input>` tag to get data from users. The `type` attribute decides the kind of data.

### Common Input Types

* `text`: For single-line text input
* `email`: For email addresses
* `password`: Hides the typed characters
* `submit`: Button to send the form

```html
<form action="submit.php" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <br />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
  <br />

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" />
  <br />

  <input type="submit" value="Submit" />
</form>
```
