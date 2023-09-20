var nodemailer = require("nodemailer");
import { NextResponse } from "next/server";

export interface EstimateRequest extends Request {
  estimateDetails: EstimateDetails
}

export interface EstimateDetails {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  interestedServices: { landscaping: string[], hardscaping: string[], lighting: string[], other: string }
}

export async function POST(request: Request) {
  const requestBodyJson: EstimateDetails = await request.json();

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: any, success: any) {
      if (error) {
          console.log(error);
          reject(error);
      } else {
          console.log("Server is ready to take our messages");
          resolve(success);
      }
    });
  });

  var mailOptions = {
    from: {
      name: requestBodyJson.customerName,
      address: process.env.NODEMAILER_EMAIL
    },
    to: "dmkuehn6@gmail.com",
    replyTo: requestBodyJson.customerEmail,
    subject: `New Quote Request from ${requestBodyJson.customerName}`,
    text: `A new Quote Request was received from ${requestBodyJson.customerName}, reachable at ${requestBodyJson.customerEmail}.`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err: any, info: any) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  return NextResponse.json({ "testResponse": "Hello World!" });
}
