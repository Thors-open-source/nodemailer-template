
function nodemailerTemplate(from, to, subject, text) {
  var nodemailer = require('nodemailer');
  var config = require('./secret')

  var user = config.username;
  var pass = config.password;

  var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass
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