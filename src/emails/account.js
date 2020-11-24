const sgMail = require("@sendgrid/mail");
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendMail = (email, subject, text) => {
  console.log(sendgridAPIKey);
  sgMail.send({
    to: email,
    from: "aswhim6@gmail.com",
    subject: subject,
    text: text,
  });
};

// sendMail("aswhim7@gmail.com", "aaaaaa", "bbbbbb");

module.exports = sendMail;
