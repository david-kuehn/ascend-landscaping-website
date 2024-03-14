import Image from "next/image";

import FullHeightContainer from "../components/FullHeightContainer";
import Navbar from "../components/Navbar";

import blurredHero from "../../public/blurred-hero.png";
import newInstallationsImage from "../../public/service-header-images/new-installation.png";
import irrigationServicesImage from "../../public/service-header-images/irrigation-service.png";
import addlServicesImage from "../../public/irrigation-bg.png";
import maintenanceImage from "../../public/irrigation-maintenance-image.jpeg";
import Pricing from "../components/Pricing";

const pricingSheet = {
	"Inspection & Consultation": "$100-$150",
  "Start Up & Activation": "$125-$275",
  "Winterization": "$125-$275",
  "Backflow Certification / RPZ Testing": "starting at $135",
  "Full Season Package": "starting at $350",
};

export default function PaverPatio() {
  return (
    <main className="font-serif">
      <Navbar currentPage={0} />

			<div
				className="flex relative h-[45vh] mt-10"
			>
				<div className="absolute w-full h-full"
					style={{
						content: "",
						backgroundImage: `url(${blurredHero.src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}} />
				<div className="relative flex-1 flex flex-col items-center justify-center mt-10">
					<h1 className="font-bold text-4xl mx-3 text-white text-center">Welcome to our Irrigation Services page!</h1>
				</div>
			</div>

			<div className="text-black flex flex-col items-center justify-start pt-5">
				<p className="text-black sm:text-lg leading-tight w-3/4 sm:w-3/5 max-w-[50rem] sm:mt-3 mt-2 mb-6 text-justify justify-center">
				At Ascend, we specialize in creating lush, thriving landscapes through our top-notch irrigation solutions. From new installations that perfectly tailor to your property&apos;s needs to expert maintenance services that ensure your system runs efficiently year-round, we are here to take care of all your irrigation needs. Our team of skilled professionals is dedicated to providing exceptional service, prompt repairs, and sustainable solutions that will keep your landscape healthy and beautiful. Choose us for unmatched quality, expertise, and customer satisfaction in every drop!
				</p>
			</div>

      {/* New Installations section */}
      <div id="new-installations" className="w-full pt-6 pb-8 md:pt-8 md:pb-12 bg-[#002a38] text-center">
        <h2 className="font-medium text-3xl mb-6">New Installations</h2>

				<Image
					src={newInstallationsImage}
					alt=""
					className="w-full"
				/>

				<p className="mt-4 mx-8 text-white text-center">
				Our installation process is designed to transform your outdoor space into a thriving oasis. From the initial consultation to the final system check, our experienced team will work closely with you to create a customized irrigation solution that meets your specific landscape needs. We start by assessing your property and designing a tailored irrigation system that maximizes water efficiency and coverage. Our skilled technicians then expertly install the system with precision and care, ensuring optimal performance and minimal disruption to your property. With attention to detail and a commitment to quality, we guarantee a seamless and efficient new installation process that will elevate the health and beauty of your landscape for years to come.
				</p>
			</div>

      {/* Benefits section */}
      <div className="w-full pt-6 pb-8 md:pt-8 md:pb-12 text-center text-black">
        <h2 className="font-medium text-3xl mb-6">Benefits of Irrigation</h2>
				<ul className="list-disc text-left mx-10">
					<li className="my-2"><strong>Efficient water usage:</strong> New irrigation systems are designed to distribute water evenly and efficiently, reducing water waste and lowering water bills.</li>
					<li className="my-2"><strong>Healthy landscapes:</strong> Properly installed irrigation systems ensure that plants, grass, and trees receive the right amount of water, promoting healthy growth and vibrant landscapes.</li>
					<li className="my-2"><strong>Time-saving:</strong> Automated irrigation systems save time and effort by eliminating the need for manual watering, allowing homeowners to enjoy their outdoor space without the hassle of watering by hand.</li>
					<li className="my-2"><strong>Increased property value:</strong> Well-maintained landscapes with a professionally installed irrigation system can enhance curb appeal and increase the overall value of a property.</li>
					<li className="my-2"><strong>Customization:</strong> New irrigation systems can be customized to meet the specific needs of a property, including different zones, schedules, and water distribution patterns.</li>
					<li className="my-2"><strong>Environmental benefits:</strong> By using water more efficiently and reducing runoff, new irrigation systems help conserve water resources and promote environmental sustainability.</li>
				</ul>
			</div>

			{/* Pricing section */}
			<Pricing pricingSheet={pricingSheet} />

      {/* Repairs section */}
      <div className="w-full pt-6 pb-8 md:pt-8 md:pb-12 bg-[#002a38] text-center text-white flex flex-col items-center justify-center">
        <h2 className="font-medium text-3xl mb-6">Repairs</h2>
				<Image
					src={irrigationServicesImage}
					alt=""
					className="w-full"
				/>

        <p className="mx-12 mt-3">
				We offer a wide range of services and repairs for your irrigation system!
        </p>

        <ul className="w-3/4 list-disc gap-x-4 grid grid-cols-2 justify-items-left mt-3 font-medium text-left text-sm">
					<li>Leaks</li>
					<li>Electrical troubleshooting</li>
					<li>Timer/control replacement</li>
					<li>Sprinkler head replacement</li>
					<li>Valve malfunction or replacement</li>
					<li>Solenoid replacement</li>
					<li>Rain sensor replacement</li>
					<li>Backflow or RPZ replacement</li>
        </ul>

        <p className="mt-4 lg:text-xl italic">and more!</p>
			</div>

      {/* Addl. Services section */}
      <div className="w-full pt-6 pb-8 md:pt-8 md:pb-12 text-center text-black">
        <h2 className="font-medium text-3xl mb-6">Additional Services</h2>
				<Image
					src={addlServicesImage}
					alt=""
					className="w-full"
				/>

				<ul className="w-3/4 list-disc text-left mt-6 mx-16">
					<li>Adding or capping sprinkler heads</li>
					<li>Adding or shutting off zones</li>
					<li>Rerouting lines</li>
					<li>Adding booster pump for increase in pressure</li>
        </ul>

        <p className="mt-4 lg:text-xl italic">and more!</p>
			</div>

      {/* Repairs section */}
      <div className="w-full pt-6 pb-8 md:pt-8 md:pb-12 bg-[#002a38] text-center text-white flex flex-col items-center justify-center">
        <h2 className="font-medium text-3xl mb-6">Maintenance</h2>
				<Image
					src={maintenanceImage}
					alt=""
					className="w-full"
				/>

				<ul className="w-3/4 list-disc text-left mt-6 mx-16">
					<li>Start ups / system activation</li>
					<li>Mid season check up</li>
					<li>Winterization / system shut-down</li>
        </ul>

        <p className="mt-4 lg:text-xl italic">and more!</p>
			</div>
		</main>
	)
}