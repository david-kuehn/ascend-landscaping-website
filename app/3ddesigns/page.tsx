import Image from "next/image";

import FullHeightContainer from "../components/FullHeightContainer";
import Navbar from "../components/Navbar";

import threeDHero from "../../public/service-header-images/3d-designs.png";
import Pricing from "../components/Pricing";

const pricingSheet = {
	"Custom 3D Design": "starting at $300",
};

export default function ThreeDDesigns() {
  return (
    <main className="font-serif">
      <Navbar currentPage={0} />

			<div
				className="flex relative h-[35vh] mt-16"
			>
				<div className="absolute w-full h-full"
					style={{
						content: "",
						backgroundImage: `url(${threeDHero.src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}} />
				<div className="relative flex-1 flex flex-col items-center justify-center mt-10">
					<h1 className="font-bold text-4xl mx-3 text-white text-center">3D Designs Bring Your Vision to Life!</h1>
				</div>
			</div>

			{ /* Benefits section */ }
      <div className="w-full pt-6 pb-8 md:pt-8 md:pb-12 flex flex-col items-center text-center text-black">
        <h2 className="font-medium text-2xl mb-6">Why Are 3D Designs Important?</h2>
				<p className="mx-8 mb-3 text-center">A 3D design is essential for your paver project as it provides a visual representation of the proposed design, allowing you to:</p>
				<ul className="list-disc text-left mx-14">
					<li className="my-2"><strong>Visualize the final outcome:</strong> A 3D design allows homeowners to see how the paver project will look once completed, enabling them to make informed decisions about the layout, pattern, and color scheme before construction begins.</li>
					<li className="my-2"><strong>Explore design options:</strong> With a 3D design, homeowners can explore different design options, materials, and configurations to find the best fit for their outdoor space, ensuring that the final result meets their preferences and expectations.</li>
					<li className="my-2"><strong>Make informed decisions:</strong> Seeing a realistic 3D rendering of the paver project helps homeowners understand the spatial layout, scale, and proportions, enabling them to make informed decisions about the design elements and modifications needed.</li>
					<li className="my-2"><strong>Avoid costly mistakes:</strong> By visualizing the project in 3D, homeowners can identify potential issues or design flaws early on, allowing for adjustments to be made before construction starts and preventing costly mistakes or changes during the build process.</li>
					<li className="my-2"><strong>Enhance communication:</strong> A 3D design facilitates communication between homeowners and contractors by providing a clear visual reference that ensures everyone is on the same page regarding the project specifications, requirements, and design details.</li>
				</ul>
			</div>

			{/* Pricing section */}
			<Pricing pricingSheet={pricingSheet} />
		</main>
	)
}