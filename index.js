require('dotenv').config();
var nodemailer = require('nodemailer');

function nodemailerTemplate(from, to, subject, text) {
  
  var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  });

  var mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: text
  };

  transport.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.error(error);
      }
      console.log('message sent: %s', info.messageId)
  })
}

module.exports = nodemailerTemplate;