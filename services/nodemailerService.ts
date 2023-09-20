var nodemailer = require("nodemailer");

export interface EmailDetails {
  fromName: string;
  to: string;
  replyTo: string;
  subject: string;
  contents: string;
}

//-----------------------------------------------------------------------------
