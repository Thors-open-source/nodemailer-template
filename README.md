# Nodemailer Template

## How to install
```javascript
npm i @thorwurtzner/nodemailer-template
```
<br>

## Setting it up
Create a file named .env and paste this

```javascript
EMAIL = "your-email-here"
PASS = "your-email-password-here"
```

The import is all ready in the script, and ofcourse keep your .env a secret, don't publish it!

<br>

## How to use

```javascript
var nodemailerTemplate = require("@thorwurtzner/nodemailer-template")

nodemailerTemplate(
    // From
    "email@hotmail.com",

    // To
    "email@gmail.com",

    // Subject
    "This is subject text",

    // Text
    "This is email text"
)
```
Run your file in node, and the email will send by gmail!


