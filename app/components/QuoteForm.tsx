export default function QuoteForm() {
  return (
    <div className="text-black font-serif bg-gray-300 w-3/4 lg:w-1/2 px-8 md:px-16 lg:px-20 xl:px-24 py-5 rounded-md">
      <h1 className="text-4xl text-center font-semibold mb-2">Get a Free Estimate!</h1>

      <div className="w-full mb-3">
        <label className="w-full">Name: <span className="text-red-500">*</span></label>
        <input className="w-full px-2 rounded-sm" type="text" placeholder="Name" required />
      </div>
      <div className="w-full mb-3">
        <label className="w-full">Email Address: <span className="text-red-500">*</span></label>
        <input className="w-full px-2 rounded-sm" type="email" placeholder="Email" required />
      </div>
      <div className="w-full mb-3">
        <label className="w-full">Phone Number:</label>
        <input className="w-full px-2 rounded-sm" type="tel" placeholder="Phone" />
      </div>

      <h2 className="font-bold text-xl mt-6">Interested in:</h2>
      <div className="grid gap-x-4 gap-y-1 grid-cols-2 w-full leading-none">
        <div className="mt-2">
          <h3 className="font-semibold leading-none">Landscaping</h3>

          <li className="flex items-center my-1">
            <input type="checkbox" className="mr-2" />
            <span className="mt-1">Lawn Care</span>
          </li>
          <li className="flex items-center my-1">
            <input type="checkbox" className="mr-2" />
            <span className="mt-1">Mulching</span>
          </li>
          <li className="flex items-center my-1">
            <input type="checkbox" className="mr-2" />
            <span className="mt-1">Snow Removal</span>
          </li>
          <li className="flex items-center my-1">
            <input type="checkbox" className="mr-2" />
            <span className="mt-1">Plant/Tree Care</span>
          </li>
          <li className="flex items-center my-1">
            <input type="checkbox" className="mr-2" />
            <span className="mt-1">Other</span>
          </li>
        </div>

        <div className="mt-2">
          <h3 className="font-semibold leading-none">Hardscaping</h3>

          <li className="flex items-center my-1">
            <input type="checkbox" className="mr-2" />
            <span className="mt-1">Patio</span>
          </li>
          <li className="flex items-center my-1">
            <input type="checkbox" className="mr-2" />
            <span className="mt-1">Walkway</span>
          </li>
          <li className="flex items-center my-1">
            <input type="checkbox" className="mr-2" />
            <span className="mt-1">Retaining Wall</span>
          </li>
          <li className="flex items-center my-1">
            <input type="checkbox" className="mr-2" />
            <span className="mt-1">Other</span>
          </li>
        </div>

        <div className="mt-2">
          <h3 className="font-semibold leading-none">Lighting</h3>

          <li className="flex items-center my-1">
            <input type="checkbox" className="mr-2" />
            <span className="mt-1">Accent Lights</span>
          </li>
          <li className="flex items-center my-1">
            <input type="checkbox" className="mr-2" />
            <span className="mt-1">Floodlights</span>
          </li>
          <li className="flex items-center my-1">
            <input type="checkbox" className="mr-2" />
            <span className="mt-1">Other</span>
          </li>
        </div>

        <div className="mt-2 flex flex-col">
          <h3 className="font-semibold leading-none">Something else:</h3>

          <textarea placeholder="What're you looking for?" className="w-full flex-1 mt-1 p-1 rounded-sm" />
        </div>
      </div>

      <div className="mt-10 text-center text-lg font-medium hidden">We appreciate your interest!<br />We will respond to your inquiry via email as soon as possible.</div>

      <div className="mt-10 w-full flex justify-center">
        <div
          className="w-32 text-center text-white uppercase font-serif font-bold text-2xl py-2 px-5 rounded-full bg-[#6EA750] hover:scale-110 transition-all drop-shadow-xl"
        >
        Submit
        </div>
      </div>
    </div>
  )
}
