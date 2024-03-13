import Image from "next/image";

import FullHeightContainer from "../components/FullHeightContainer";
import Navbar from "../components/Navbar";

import paverHero from "../../public/service-header-images/paver-patios.png";

export default function Irrigation() {
  return (
    <main className="font-serif">
      <Navbar currentPage={0} />

			<div
				className="flex relative h-[35vh] mt-16"
			>
				<div className="absolute w-full h-full"
					style={{
						content: "",
						backgroundImage: `url(${paverHero.src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}} />
				<div className="relative flex-1 flex flex-col items-center justify-center mt-10">
					<h1 className="font-bold text-4xl mx-3 text-white text-center">Learn about our Paver Patios service!</h1>
				</div>
			</div>

			<div className="text-black flex flex-col items-center justify-start pt-5">
				<p className="text-black sm:text-lg leading-tight w-3/4 sm:w-3/5 max-w-[50rem] sm:mt-3 mt-2 mb-6 text-justify justify-center">
				Transform your outdoor living experience with a stunning paver patio from Ascend! Our expert team specializes in creating elegant and functional paver patios that enhance the beauty and functionality of your outdoor space. Imagine relaxing or entertaining on a custom-designed patio that complements your home's aesthetic and adds value to your property. With a wide range of paver styles, colors, and patterns to choose from, we can create a unique and inviting patio that suits your lifestyle and preferences. Trust us to bring your outdoor vision to life with a durable, low-maintenance, and visually appealing paver patio that will be the envy of your neighbors.
				</p>
			</div>


			{ /* Benefits section */ }
      <div className="w-full pt-6 pb-8 md:pt-8 md:pb-12 bg-[#002a38] text-center">
        <h2 className="font-medium text-3xl mb-6">Why You Need a Patio!</h2>
				<ul className="list-disc text-left mx-10">
					<li className="my-2"><strong>Enhanced Outdoor Living Space:</strong> A paver patio creates a functional and inviting outdoor area for relaxation, entertainment, and dining.</li>
					<li className="my-2"><strong>Increased Property Value:</strong> A well-designed paver patio adds curb appeal and can increase the overall value of your property.</li>
					<li className="my-2"><strong>Durability:</strong> Paver patios are durable and long-lasting, able to withstand heavy foot traffic, weather elements, and regular use.</li>
					<li className="my-2"><strong>Low Maintenance:</strong> Paver patios require minimal maintenance and are easy to clean, keeping your outdoor space looking beautiful with minimal effort.</li>
					<li className="my-2"><strong>Design Versatility:</strong> Pavers come in a variety of styles, colors, and patterns, allowing for endless design possibilities to suit your aesthetic preferences.</li>
					<li className="my-2"><strong>Cost-Effective:</strong> Paver patios are a cost-effective outdoor flooring option compared to other materials, providing long-term value and beauty to your outdoor space.</li>
				</ul>
			</div>

			{ /* Design & Installation section */ }
      <div className="w-full pt-6 pb-8 md:pt-8 md:pb-12 text-center text-black flex flex-col items-center">
        <h2 className="font-medium text-3xl mb-6">Design & Installation</h2>

				<p className="w-3/4 mb-3">The process of installing a paver patio typically involves several steps. Here is an overview of the general process:</p>

				<ol className="w-3/4 text-left">
					<li>
						<div className="font-bold text-lg">1. Planning and Design</div>
						<ul className="list-disc ml-8">
							<li>Determine the size, shape, and layout of the patio.</li>
							<li>Select the type of pavers, colors, patterns, and any additional features.</li>
							<li>Consider drainage, slope, and any necessary permits.</li>
						</ul>
					</li>

					<li>
						<div className="font-bold text-lg mt-2">2. Site Preparation</div>
						<ul className="list-disc ml-8">
							<li>Excavate the area to the desired depth, accounting for the base, limestone chips, and paver thickness.</li>
							<li>Ensure proper slope for water drainage.</li>
							<li>Compact the soil and create a solid base for the patio.</li>
						</ul>
					</li>

					<li>
						<div className="font-bold text-lg mt-2">3. Base Installation</div>
						<ul className="list-disc ml-8">
							<li>Lay a base layer of crushed stone or gravel and compact it to create a stable foundation.</li>
							<li>Add a layer of bedding limestone chips to level and cushion the pavers.</li>
						</ul>
					</li>

					<li>
						<div className="font-bold text-lg mt-2">4. Paver Installation</div>
						<ul className="list-disc ml-8">
							<li>Begin laying the pavers according to the design and pattern.</li>
							<li>Use a rubber mallet to ensure the pavers are level and securely in place.</li>
							<li>Cut pavers as needed to fit the edges and corners.</li>
						</ul>
					</li>

					<li>
						<div className="font-bold text-lg mt-2">5. Edging</div>
						<ul className="list-disc ml-8">
							<li>Install concrete edging to secure the perimeter of the patio and prevent shifting.</li>
						</ul>
					</li>

					<li>
						<div className="font-bold text-lg mt-2">6. Polymeric Sand & Sealant</div>
						<ul className="list-disc ml-8">
							<li>Fill the joints between pavers with polymeric sand and compact it to stabilize the pavers.</li>
							<li>Apply a sealant to protect the pavers from stains, fading, and wear.</li>
						</ul>
					</li>

					<li>
						<div className="font-bold text-lg mt-2">7. Finishing Touches</div>
						<ul className="list-disc ml-8">
							<li>Clean the patio surface and remove any excess sand or debris.</li>
							<li>Add any final touches, such as outdoor furniture, lighting, or landscaping.</li>
						</ul>
					</li>
				</ol>
			</div>
		</main>
	)
}