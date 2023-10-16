export interface EstimateDetails {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerBudget: string;
  interestedServices: { irrigation: string[], landscaping: string[], hardscaping: string[], other: string }
}

const serviceKeyToPrettyStringMap = {
  springActivation: "Spring Start Ups / Activation",
  systemMaintenance: "System Maintenance",
  repairs: "Repairs",
  winterization: "Shut Downs / Winterization",
  backflowTesting: "Backflow Testing",
  rpzCertification: "RPZ Certification",
  springFallCleanUp: "Spring/Fall Clean Up",
  planting: "Planting",
  decorativeStone: "Decorative Stone",
  mulching: "Mulching",
  bushRemoval: "Bush Removal",
  patio: "Patio",
  walkway: "Walkway",
  retainingWall: "Retaining Wall",
  steps: "Steps",
  firepits: "Firepits",
  pavilionGazebo: "Pavilion / Gazebo",
  other: "Other Services (customer did not specify)",
}

export function buildEmailBody(customerRequestDetails: EstimateDetails) {
  const irrigationServicesHtmlList = customerRequestDetails.interestedServices.irrigation.map((service: string) => {
    return `<li>${serviceKeyToPrettyStringMap[service as keyof typeof serviceKeyToPrettyStringMap]}</li>`;
  }).join('\n');

  const landscapingServicesHtmlList = customerRequestDetails.interestedServices.landscaping.map((service: string) => {
    return `<li>${serviceKeyToPrettyStringMap[service as keyof typeof serviceKeyToPrettyStringMap]}</li>`;
  }).join('\n');

  const hardscapingServicesHtmlList = customerRequestDetails.interestedServices.hardscaping.map((service: string) => {
    return `<li>${serviceKeyToPrettyStringMap[service as keyof typeof serviceKeyToPrettyStringMap]}</li>`;
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
  <label style="font-weight: bold">Budget: </label><span>${customerRequestDetails.customerBudget ? customerRequestDetails.customerBudget : "No budget provided."}</span><br />

  <p style="margin-top: 30px">This customer is interested in an estimate on the following services:</p>

  <span style="font-weight: bold">Irrigation:</span>
  <ul>
    ${irrigationServicesHtmlList}
  </ul>

  <span style="font-weight: bold">Landscaping:</span>
  <ul>
    ${landscapingServicesHtmlList}
  </ul>

  <span style="font-weight: bold">Hardscaping:</span>
  <ul>
    ${hardscapingServicesHtmlList}
  </ul>

  <span style="font-weight: bold">Other:</span>
  <p>${customerRequestDetails.interestedServices.other}</p>
</body>
</html>
  `
}
