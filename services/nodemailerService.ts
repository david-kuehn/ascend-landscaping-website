import { request } from "http";

export interface EstimateDetails {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  interestedServices: { landscaping: string[], hardscaping: string[], lighting: string[], other: string }
}

export function buildEmailBody(customerRequestDetails: EstimateDetails) {
  const landscapingServicesHtmlList = customerRequestDetails.interestedServices.landscaping.map((service: string) => {
    return `<li>${service}</li>`;
  }).join('\n');

  const hardscapingServicesHtmlList = customerRequestDetails.interestedServices.hardscaping.map((service: string) => {
    return `<li>${service}</li>`;
  }).join('\n');

  const lightingServicesHtmlList = customerRequestDetails.interestedServices.lighting.map((service: string) => {
    return `<li>${service}</li>`;
  }).join('\n');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* CSS styles specific to email rendering go here */
  </style>
</head>
<body>
  <p>A new Estimate Request was received from ${customerRequestDetails.customerName}, reachable at ${customerRequestDetails.customerEmail}. Here are the details:</p>

  <h3>Customer Details:</h3><br />
  <label style="font-weight: bold">Name: </label><span>${customerRequestDetails.customerName}</span><br />
  <label style="font-weight: bold">Email: </label><span>${customerRequestDetails.customerEmail}</span><br />
  <label style="font-weight: bold">Phone: </label><span>${customerRequestDetails.customerPhone ? customerRequestDetails.customerPhone : "No phone number provided."}</span><br />

  <p style="margin-top: 30px">This customer is interested in an estimate on the following services:</p>

  <span style="font-weight: bold">Landscaping:</span>
  <ul>
    ${landscapingServicesHtmlList}
  </ul>

  <span style="font-weight: bold">Hardscaping:</span>
  <ul>
    ${hardscapingServicesHtmlList}
  </ul>

  <span style="font-weight: bold">Lighting:</span>
  <ul>
    ${lightingServicesHtmlList}
  </ul>

  <span style="font-weight: bold">Other:</span>
  <p>${customerRequestDetails.interestedServices.other}</p>
</body>
</html>
  `
}
