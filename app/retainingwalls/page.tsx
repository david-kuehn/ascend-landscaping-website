import Image from "next/image";

import FullHeightContainer from "../components/FullHeightContainer";
import Navbar from "../components/Navbar";

import retainingWallHero from "../../public/service-header-images/retaining-walls.png";

export default function RetainingWalls() {
  return (
    <main className="font-serif">
      <Navbar currentPage={0} />

			<div
				className="flex relative h-[35vh] mt-16"
			>
				<div className="absolute w-full h-full"
					style={{
						content: "",
						backgroundImage: `url(${retainingWallHero.src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}} />
				<div className="relative flex-1 flex flex-col items-center justify-center mt-10">
					<h1 className="font-bold text-4xl mx-3 text-white text-center">Learn about our Retaining Walls service!</h1>
				</div>
			</div>

			<div className="text-black flex flex-col items-center justify-start pt-5">
				<p className="text-black sm:text-lg leading-tight w-3/4 sm:w-3/5 max-w-[50rem] sm:mt-3 mt-2 mb-6 text-justify justify-center">
				Elevate the beauty and functionality of your outdoor space with a custom-designed retaining wall! Our expert team specializes in creating stunning and durable retaining walls that not only add visual appeal but also provide essential support and structure to your landscape. Imagine a beautifully crafted wall that enhances the contours of your yard, creates distinct outdoor living areas, and adds value to your property. With a wide range of materials, colors, and styles to choose from, we can tailor a retaining wall to complement your home&apos;s architecture and landscaping. We will transform your outdoor space with a stylish and sturdy retaining wall that will stand the test of time and become a focal point of your property!
				</p>
			</div>


			{ /* Benefits section */ }
      <div className="w-full pt-6 pb-8 md:pt-8 md:pb-12 bg-[#002a38] text-center">
        <h2 className="font-medium text-2xl mb-6">Why You Need a Retaining Wall!</h2>
				<ul className="list-disc text-left mx-10">
					<li className="my-2"><strong>Erosion Control:</strong> Retaining walls help prevent soil erosion and maintain the stability of sloped or uneven terrain.</li>
					<li className="my-2"><strong>Structural Support:</strong> Retaining walls provide structural support to hold back soil, prevent landslides, and create level areas for landscaping or construction.</li>
					<li className="my-2"><strong>Aesthetic Enhancement:</strong> Retaining walls can enhance the visual appeal of a property by adding texture, dimension, and visual interest to the landscape.</li>
					<li className="my-2"><strong>Functional Space:</strong> Retaining walls can create additional usable space for gardens, seating areas, pathways, or terraced levels in a yard.</li>
					<li className="my-2"><strong>Property Value:</strong> Well-designed and professionally installed retaining walls can increase the value of a property by improving its overall appearance and functionality.</li>
					<li className="my-2"><strong>Longevity:</strong> Quality retaining walls are built to last, using durable materials and construction techniques that ensure longevity and minimal maintenance requirements.</li>
				</ul>
			</div>

			{ /* Design & Installation section */ }
      <div className="w-full pt-6 pb-8 md:pt-8 md:pb-12 text-center text-black flex flex-col items-center">
        <h2 className="font-medium text-3xl mb-6">Design & Installation</h2>

				<p className="w-3/4 mb-3">The process of installing a retaining wall typically involves several steps. Here is an overview of the general process:</p>
				<ol className="w-3/4 text-left">
					<li>
						<div className="font-bold text-lg">1. Planning and Design</div>
						<ul className="list-disc ml-8">
							<li>Determine the purpose of the retaining wall (e.g., erosion control, landscaping, structural support).</li>
							<li>Consider the height, length, and location of the wall.</li>
							<li>Choose the materials for the wall (e.g., concrete blocks, natural stone, etc).</li>
						</ul>
					</li>

					<li>
						<div className="font-bold text-lg mt-2">2. Site Preparation</div>
						<ul className="list-disc ml-8">
							<li>Mark the layout of the retaining wall using stakes and string.</li>
							<li>Excavate the area where the wall will be installed, ensuring proper depth and width.</li>
							<li>Compact the soil to create a stable base for the wall.</li>
						</ul>
					</li>

					<li>
						<div className="font-bold text-lg mt-2">3. Foundation Preparation</div>
						<ul className="list-disc ml-8">
							<li>Install a level and compacted base layer of gravel or crushed stone.</li>
							<li>Add a layer of leveling limestone chips to create a smooth and even surface for the first course of the wall.</li>
						</ul>
					</li>

					<li>
						<div className="font-bold text-lg mt-2">4. Wall Construction</div>
						<ul className="list-disc ml-8">
							<li>Begin laying the first course of blocks or stones, ensuring proper alignment and leveling.</li>
							<li>Stack additional courses, interlocking the blocks or stones and backfilling behind the wall with gravel or drainage material.</li>
							<li>Install drainage pipes, geogrid reinforcement, and filter fabric as needed for stability and water management.</li>
						</ul>
					</li>

					<li>
						<div className="font-bold text-lg mt-2">5. Cap Installation</div>
						<ul className="list-disc ml-8">
							<li>Install capstones or coping on top of the wall to provide a finished look and protect the top of the wall from water damage.</li>
						</ul>
					</li>

					<li>
						<div className="font-bold text-lg mt-2">6. Backfilling and Compaction</div>
						<ul className="list-disc ml-8">
							<li>Backfill behind the wall with gravel or drainage material to improve water drainage and reduce pressure on the wall.</li>
							<li>Compact the backfill material in layers to ensure stability and prevent settling.</li>
						</ul>
					</li>

					<li>
						<div className="font-bold text-lg mt-2">7. Finishing Touches</div>
						<ul className="list-disc ml-8">
							<li>Clean the wall surface and surrounding area of any debris.</li>
							<li>Add landscaping, plants, or decorative elements to enhance the aesthetics of the retaining wall.</li>
						</ul>
					</li>
				</ol>
			</div>
		</main>
	)
}