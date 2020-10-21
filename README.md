# Nodemailer Template

## How to install
This package needs nodemailer to be installed
```javascript
npm i nodemailer 
```
Then install this package
```javascript
npm i @thorwurtzner/nodemailer-template
```
<br>

## Setting it up
Create a file named secret.js in the same directory and paste this

```javascript
module.exports = {
   username: "your-email-name-here",
   password: "your-email-password-here"
}
```

The import is all ready in the script, and ofcourse keep your secret.js a secret, don't publish it!

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
Run your file in node, and the email will send!


