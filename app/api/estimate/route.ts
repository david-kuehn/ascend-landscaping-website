import { NextResponse } from "next/server";
import { EmailDetails, sendMail } from "../../../services/nodemailerService";

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
  console.log(requestBodyJson);

  const messageDetails: EmailDetails = {
    fromName: requestBodyJson.customerName,
    to: "dmkuehn6@gmail.com",
    replyTo: requestBodyJson.customerEmail,
    subject: `New Quote Request from ${requestBodyJson.customerName}`,
    contents: `A new Quote Request was received from ${requestBodyJson.customerName}, reachable at ${requestBodyJson.customerEmail}.`
  }
  await sendMail(messageDetails);
  return NextResponse.json({ "testResponse": "Hello World!" });
}
