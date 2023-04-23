
const sgMail = require("@sendgrid/mail");
const secrets = require('../config')


sgMail.setApiKey('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');
// sgMail.setApiKey(secrets.SG_KEY);

const sendSGMail = async ({
  to,
  sender,
  subject,
  html,
  attachments,
  text,
}) => {
  try {
    const from = "shreyanshshah242@gmail.com";

    const msg = {
      to: to, // Change to your recipient
      from: from, // Change to your verified sender
      subject: subject,
      html: html,
      // text: text,
      attachments,
    };

    
    return sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
};

exports.sendEmail = async (args) => {
  if (!process.env.NODE_ENV === "development") {
    return Promise.resolve();
  } else {
    return sendSGMail(args);
  }
};
