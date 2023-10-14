"use client";
import { useState } from "react"

function setNestedProp(schema: any, path: string, checked: boolean) {
  var pList = path.split('.');
  var len = pList.length;
  for(var i = 0; i < len-1; i++) {
      var elem = pList[i];
      if( !schema[elem] ) schema[elem] = {}
      schema = schema[elem];
  }

  schema[pList[len-1]] = checked;
}

export default function QuoteForm() {
  const [quoteFormData, setQuoteFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: ''
  });

  const [irrigationServices, setIrrigationServices] = useState({
    sprinklerInstallation: false,
    systemMaintenance: false,
    winterization: false,
    backflowTesting: false,
    other: false,
  });

  const [landscapingServices, setLandscapingServices] = useState({
    lawncare: false,
    mulching: false,
    snowRemoval: false,
    plantTreeCare: false,
    other: false,
  });

  const [hardscapingServices, setHardscapingServices] = useState({
    patio: false,
    walkway: false,
    retainingWall: false,
    other: false,
  });

  const [otherService, setOtherService] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setQuoteFormData({ ...quoteFormData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
 
    // Add your form submission logic here

    let selectedIrrigationKeys: string[] = [];
    Object.keys(irrigationServices).forEach((key, idx) => {
      if (irrigationServices[key as keyof typeof irrigationServices] == true) {
        selectedIrrigationKeys.push(key);
      }
    });

    let selectedLandscapingKeys: string[] = [];
    Object.keys(landscapingServices).forEach((key, idx) => {
      if (landscapingServices[key as keyof typeof landscapingServices] == true) {
        selectedLandscapingKeys.push(key);
      }
    });

    let selectedHardscapingKeys: string[] = [];
    Object.keys(hardscapingServices).forEach((key, idx) => {
      if (hardscapingServices[key as keyof typeof hardscapingServices] == true) {
        selectedHardscapingKeys.push(key);
      }
    });

    const quoteDataToSubmit = {
      ...quoteFormData,
      interestedServices: {
        irrigation: selectedIrrigationKeys,
        landscaping: selectedLandscapingKeys,
        hardscaping: selectedHardscapingKeys,
        other: otherService
      },
    };

    const response = fetch("/api/estimate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quoteDataToSubmit),
    });

    let submitMsgElement = document.getElementById("submit-message");
    if (submitMsgElement) {
      submitMsgElement.classList.remove("hidden");
    }
  };

  return (
    <div className="text-black font-serif bg-gray-300 w-5/6 lg:w-1/2 px-8 md:px-16 lg:px-20 xl:px-24 py-5 rounded-md">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl text-center font-semibold mb-2">Get a Free Estimate!</h1>

        <div className="w-full mb-3">
          <label className="w-full">Name: <span className="text-red-500">*</span></label>
          <input className="w-full px-2 rounded-sm" type="text" placeholder="Name" name="customerName" value={quoteFormData.customerName} onChange={handleChange} required />
        </div>
        <div className="w-full mb-3">
          <label className="w-full">Email Address: <span className="text-red-500">*</span></label>
          <input className="w-full px-2 rounded-sm" type="email" placeholder="Email" name="customerEmail" value={quoteFormData.customerEmail} onChange={handleChange} required />
        </div>
        <div className="w-full mb-3">
          <label className="w-full">Phone Number:</label>
          <input className="w-full px-2 rounded-sm" type="tel" placeholder="Phone" name="customerPhone" value={quoteFormData.customerPhone} onChange={handleChange} />
        </div>

        <h2 className="font-bold text-xl mt-6">Interested in:</h2>
        <div className="grid gap-x-4 gap-y-1 grid-cols-2 w-full leading-none">
          <div className="mt-2">
            <h3 className="font-semibold leading-none">Irrigation</h3>

            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="irrigationServices.sprinklerInstallation" checked={irrigationServices.sprinklerInstallation} onChange={() => setIrrigationServices({...irrigationServices, sprinklerInstallation: !irrigationServices.sprinklerInstallation})} />
              <span className="mt-1">Sprinkler Installation</span>
            </li>
            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="irrigationServices.systemMaintenance" checked={irrigationServices.systemMaintenance} onChange={() => setIrrigationServices({...irrigationServices, systemMaintenance: !irrigationServices.systemMaintenance})} />
              <span className="mt-1">Maintenance</span>
            </li>
            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="irrigationServices.winterization" checked={irrigationServices.winterization} onChange={() => setIrrigationServices({...irrigationServices, winterization: !irrigationServices.winterization})} />
              <span className="mt-1">Winterization</span>
            </li>
            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="irrigationServices.backflowTesting" checked={irrigationServices.backflowTesting} onChange={() => setIrrigationServices({...irrigationServices, backflowTesting: !irrigationServices.backflowTesting})} />
              <span className="mt-1">Backflow Testing</span>
            </li>
            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="irrigationServices.other" checked={irrigationServices.other} onChange={() => setIrrigationServices({...irrigationServices, other: !irrigationServices.other})} />
              <span className="mt-1">Other</span>
            </li>
          </div>

          <div className="mt-2">
            <h3 className="font-semibold leading-none">Landscaping</h3>

            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="landscapingServices.lawncare" checked={landscapingServices.lawncare} onChange={() => setLandscapingServices({...landscapingServices, lawncare: !landscapingServices.lawncare})} />
              <span className="mt-1">Lawn Care</span>
            </li>
            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="landscapingServices.mulching" checked={landscapingServices.mulching} onChange={() => setLandscapingServices({...landscapingServices, mulching: !landscapingServices.mulching})} />
              <span className="mt-1">Mulching</span>
            </li>
            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="landscapingServices.snowRemoval" checked={landscapingServices.snowRemoval} onChange={() => setLandscapingServices({...landscapingServices, snowRemoval: !landscapingServices.snowRemoval})} />
              <span className="mt-1">Snow Removal</span>
            </li>
            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="landscapingServices.plantTreeCare" checked={landscapingServices.plantTreeCare} onChange={() => setLandscapingServices({...landscapingServices, plantTreeCare: !landscapingServices.plantTreeCare})} />
              <span className="mt-1">Plant/Tree Care</span>
            </li>
            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="landscapingServices.other" checked={landscapingServices.other} onChange={() => setLandscapingServices({...landscapingServices, other: !landscapingServices.other})} />
              <span className="mt-1">Other</span>
            </li>
          </div>

          <div className="mt-2">
            <h3 className="font-semibold leading-none">Hardscaping</h3>

            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="hardscapingServices.patio" checked={hardscapingServices.patio} onChange={() => setHardscapingServices({...hardscapingServices, patio: !hardscapingServices.patio})} />
              <span className="mt-1">Patio</span>
            </li>
            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="hardscapingServices.walkway" checked={hardscapingServices.walkway} onChange={() => setHardscapingServices({...hardscapingServices, walkway: !hardscapingServices.walkway})} />
              <span className="mt-1">Walkway</span>
            </li>
            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="hardscapingServices.retainingWall" checked={hardscapingServices.retainingWall} onChange={() => setHardscapingServices({...hardscapingServices, retainingWall: !hardscapingServices.retainingWall})} />
              <span className="mt-1">Retaining Wall</span>
            </li>
            <li className="flex items-center my-1">
              <input type="checkbox" className="mr-2" name="hardscapingServices.other" checked={hardscapingServices.other} onChange={() => setHardscapingServices({...hardscapingServices, other: !hardscapingServices.other})} />
              <span className="mt-1">Other</span>
            </li>
          </div>

          <div className="mt-2 flex flex-col">
            <h3 className="font-semibold leading-none">Something else:</h3>

            <textarea placeholder="What're you looking for?" className="w-full flex-1 mt-1 p-1 rounded-sm" value={otherService} onChange={(e) => setOtherService(e.target.value)} />
          </div>
        </div>

        <div id="submit-message" className="mt-10 text-center text-lg font-medium hidden">We appreciate your interest!<br />We will respond to your inquiry via email as soon as possible.</div>

        <div className="mt-10 w-full flex justify-center">
          <button
            className="w-32 text-center text-white uppercase font-serif font-bold text-2xl py-2 px-5 rounded-full bg-[#6EA750] hover:scale-110 transition-all drop-shadow-xl"
            type="submit"
          >
          Submit
          </button>
        </div>
      </form>
    </div>
  )
}
