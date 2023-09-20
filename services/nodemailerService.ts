var nodemailer = require("nodemailer");

export interface EmailDetails {
  fromName: string;
  to: string;
  replyTo: string;
  subject: string;
  contents: string;
}

//-----------------------------------------------------------------------------

export async function sendMail(details: EmailDetails) {

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: {
      name: details.fromName,
      address: process.env.NODEMAILER_EMAIL
    },
    to: details.to,
    replyTo: details.replyTo,
    subject: details.subject,
    text: details.contents,
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent: ", info);
      return true;
    }
  });
}
