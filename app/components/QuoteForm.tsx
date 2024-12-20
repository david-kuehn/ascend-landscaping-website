"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { useState } from "react"

export default function QuoteForm() {
  const [quoteFormData, setQuoteFormData] = useState({
    customerName: '',
    customerAddress: '',
    customerEmail: '',
    customerPhone: '',
    customerBudget: '',
  });

  const [irrigationServices, setIrrigationServices] = useState({
    newInstallation: false,
    springActivation: false,
    systemMaintenance: false,
    repairs: false,
    winterization: false,
    backflowTesting: false,
    rpzCertification: false,
    other: false,
  });

	const [hardscapingServices, setHardscapingServices] = useState({
    patio: false,
    retainingWall: false,
    walkway: false,
    steps: false,
    hardscapingRepairs: false,
    additions: false,
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
    Object.keys(irrigationServices).forEach((key) => {
      if (irrigationServices[key as keyof typeof irrigationServices] == true) {
        selectedIrrigationKeys.push(key);
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
    <div className="text-black font-serif bg-gray-300 w-5/6 lg:w-1/2 px-4 sm:px-12 md:px-20 lg:px-24 py-5 rounded-md" id="quote-form-container">
      <form onSubmit={handleSubmit}>
        <h1 id="quote-form" className="text-3xl text-center font-semibold mb-2">Get a Free Estimate!</h1>

        <div className="w-full mb-3">
          <label className="w-full">Name: <span className="text-red-500">*</span></label>
          <input className="w-full px-2 rounded-sm" type="text" placeholder="Name" name="customerName" value={quoteFormData.customerName} onChange={handleChange} required />
        </div>
        <div className="w-full mb-3">
          <label className="w-full">Address:</label>
          <input className="w-full px-2 rounded-sm" type="text" placeholder="Address" name="customerAddress" value={quoteFormData.customerAddress} onChange={handleChange} />
        </div>
        <div className="w-full mb-3">
          <label className="w-full">Email: <span className="text-red-500">*</span></label>
          <input className="w-full px-2 rounded-sm" type="email" placeholder="Email" name="customerEmail" value={quoteFormData.customerEmail} onChange={handleChange} required />
        </div>
        <div className="w-full mb-3">
          <label className="w-full">Phone Number:</label>
          <input className="w-full px-2 rounded-sm" type="tel" placeholder="Phone" name="customerPhone" value={quoteFormData.customerPhone} onChange={handleChange} />
        </div>

        <h2 className="font-bold text-xl mt-6">Interested in:</h2>
        <div className="grid gap-x-3 gap-y-3 grid-cols-2 w-full leading-none">
          <div className="mt-2 grid grid-cols-1 gap-y-1">
            <h3 className="font-semibold leading-none text-lg">Irrigation</h3>

            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="w-4" name="irrigationServices.newInstallation" checked={irrigationServices.newInstallation} onChange={() => setIrrigationServices({...irrigationServices, newInstallation: !irrigationServices.newInstallation})} />
              <span className="">New Installation</span>
            </li>

            { irrigationServices.newInstallation ? 
            <div className="ml-5">
              <span className="text-xs italic text-gray-900">Select an installation tier:</span>
              <li className="grid grid-cols-formitem items-center mt-1">
                <input type="checkbox" className="w-4" />
                <span>Premium Installation</span>
              </li>
              <li className="grid grid-cols-formitem items-center mt-1">
                <input type="checkbox" className="w-4" />
                <span>Basic Installation</span>
              </li>
            </div>
            :
            <>
            </>
            }

            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="w-4" name="irrigationServices.springActivation" checked={irrigationServices.springActivation} onChange={() => setIrrigationServices({...irrigationServices, springActivation: !irrigationServices.springActivation})} />
              <span>Spring Start Ups / Activation</span>
            </li>
            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="irrigationServices.systemMaintenance" checked={irrigationServices.systemMaintenance} onChange={() => setIrrigationServices({...irrigationServices, systemMaintenance: !irrigationServices.systemMaintenance})} />
              <span>Maintenance</span>
            </li>
            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="irrigationServices.repairs" checked={irrigationServices.repairs} onChange={() => setIrrigationServices({...irrigationServices, repairs: !irrigationServices.repairs})} />
              <span>Repairs</span>
            </li>
            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="irrigationServices.winterization" checked={irrigationServices.winterization} onChange={() => setIrrigationServices({...irrigationServices, winterization: !irrigationServices.winterization})} />
              <span>Shut Downs / Winterization</span>
            </li>
            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="irrigationServices.backflowTesting" checked={irrigationServices.backflowTesting} onChange={() => setIrrigationServices({...irrigationServices, backflowTesting: !irrigationServices.backflowTesting})} />
              <span>Backflow Testing</span>
            </li>
            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="irrigationServices.rpzCertification" checked={irrigationServices.rpzCertification} onChange={() => setIrrigationServices({...irrigationServices, rpzCertification: !irrigationServices.rpzCertification})} />
              <span>RPZ Certification</span>
            </li>
            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="irrigationServices.other" checked={irrigationServices.other} onChange={() => setIrrigationServices({...irrigationServices, other: !irrigationServices.other})} />
              <span>Other</span>
            </li>
          </div>

          <div className="mt-2">
            <h3 className="font-semibold leading-none text-base">Hardscaping</h3>

            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="hardscapingServices.patio" checked={hardscapingServices.patio} onChange={() => setHardscapingServices({...hardscapingServices, patio: !hardscapingServices.patio})} />
              <span className="mt-1">Patio</span>
            </li>
            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="hardscapingServices.retainingWall" checked={hardscapingServices.retainingWall} onChange={() => setHardscapingServices({...hardscapingServices, retainingWall: !hardscapingServices.retainingWall})} />
              <span className="mt-1">Retaining Wall</span>
            </li>
            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="hardscapingServices.walkway" checked={hardscapingServices.walkway} onChange={() => setHardscapingServices({...hardscapingServices, walkway: !hardscapingServices.walkway})} />
              <span className="mt-1">Walkway</span>
            </li>
            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="hardscapingServices.steps" checked={hardscapingServices.steps} onChange={() => setHardscapingServices({...hardscapingServices, steps: !hardscapingServices.steps})} />
              <span className="mt-1">Steps</span>
            </li>
            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="hardscapingServices.hardscapingRepairs" checked={hardscapingServices.hardscapingRepairs} onChange={() => setHardscapingServices({...hardscapingServices, hardscapingRepairs: !hardscapingServices.hardscapingRepairs})} />
              <span className="mt-1">Repairs</span>
            </li>
            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="hardscapingServices.additions" checked={hardscapingServices.additions} onChange={() => setHardscapingServices({...hardscapingServices, additions: !hardscapingServices.additions})} />
              <span className="mt-1">Additions</span>
            </li>
            <li className="grid grid-cols-formitem items-center mt-1">
              <input type="checkbox" className="mr-2 w-4" name="hardscapingServices.other" checked={hardscapingServices.other} onChange={() => setHardscapingServices({...hardscapingServices, other: !hardscapingServices.other})} />
              <span className="mt-1">Other</span>
            </li>
          </div>

          <div className="mt-2 flex flex-col">
            <h3 className="font-semibold leading-none text-lg">Something else:</h3>

            <textarea placeholder="Please give us a brief description of your project." className="w-full flex-1 mt-1 p-1 rounded-sm" value={otherService} onChange={(e) => setOtherService(e.target.value)} />
          </div>
        </div>

        <h2 className="font-bold text-xl mt-6">Budget <span className="text-red-500">*</span></h2>
        <div className="grid gap-x-2 grid-cols-2 w-full leading-none">
          <li className="grid grid-cols-formitem items-center mt-1">
            <input type="radio" className="mr-1 w-4" name="customerBudget" onChange={() => setQuoteFormData({...quoteFormData, customerBudget: "$0-2,000"})} required />
            <span>$0-$2,000</span>
          </li>
          <li className="grid grid-cols-formitem items-center mt-1">
            <input type="radio" className="mr-1 w-4" name="customerBudget" onChange={() => setQuoteFormData({...quoteFormData, customerBudget: "$2,000-$4,000"})} required />
            <span>$2,000-$4,000</span>
          </li>
          <li className="grid grid-cols-formitem items-center mt-1">
            <input type="radio" className="mr-1 w-4" name="customerBudget" onChange={() => setQuoteFormData({...quoteFormData, customerBudget: "$4,000-$8,000"})} required />
            <span>$4,000-$8,000</span>
          </li>
          <li className="grid grid-cols-formitem items-center mt-1">
            <input type="radio" className="mr-1 w-4" name="customerBudget" onChange={() => setQuoteFormData({...quoteFormData, customerBudget: "$8,000-$12,000"})} required />
            <span>$8,000-$12,000</span>
          </li>
          <li className="grid grid-cols-formitem items-center mt-1">
            <input type="radio" className="mr-1 w-4" name="customerBudget" onChange={() => setQuoteFormData({...quoteFormData, customerBudget: "$12,000-$20,000"})} required />
            <span>$12,000-$20,000</span>
          </li>
          <li className="grid grid-cols-formitem items-center mt-1">
            <input type="radio" className="mr-1 w-4" name="customerBudget" onChange={() => setQuoteFormData({...quoteFormData, customerBudget: "$20,000-$40,000"})} required />
            <span>$20,000-$40,000</span>
          </li>
          <li className="grid grid-cols-formitem items-center mt-1">
            <input type="radio" className="mr-1 w-4" name="customerBudget" onChange={() => setQuoteFormData({...quoteFormData, customerBudget: "$40,000-$60,000"})} required />
            <span>$40,000-$60,000</span>
          </li>
          <li className="grid grid-cols-formitem items-center mt-1">
            <input type="radio" className="mr-1 w-4" name="customerBudget" onChange={() => setQuoteFormData({...quoteFormData, customerBudget: "$60,000+"})} required />
            <span>$60,000+</span>
          </li>
        </div>

        <div id="submit-message" className="mt-10 text-center text-lg font-medium hidden">We appreciate your interest!<br />We will respond to your inquiry via email as soon as possible.</div>

        <div className="mt-10 w-full flex justify-center">
          <button
            className="w-32 text-center text-white uppercase font-serif font-bold text-2xl py-2 px-5 rounded-full bg-[#6EA750] hover:scale-110 transition-all drop-shadow-xl"
            type="submit"
						onClick={() => sendGTMEvent({ event: "conversion" })}
          >
          Submit
          </button>
        </div>
      </form>
    </div>
  )
}
