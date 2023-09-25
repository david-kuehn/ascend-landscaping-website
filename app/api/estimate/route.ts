var nodemailer = require("nodemailer");
import { EstimateDetails, buildEmailBody } from "@/services/nodemailerService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestBodyJson: EstimateDetails = await request.json();
  console.log("Request Body was as follows: ", requestBodyJson);

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
    to: "ascend.landscaping1@gmail.com",
    replyTo: requestBodyJson.customerEmail,
    subject: `New Estimate Request from ${requestBodyJson.customerName}`,
    html: buildEmailBody(requestBodyJson),
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
