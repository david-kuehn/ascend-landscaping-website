import Image, { StaticImageData } from "next/image";
import homePageHero from "../public/home-page-hero-small.png";
import ascendLogo from "../public/ascend-logo-v3.png";
import processDiagram from "../public/process.png";
import processDiagramHorizontal from "../public/process-horizontal.png";
import Carousel from "./components/Carousel";
import FullHeightContainer from "./components/FullHeightContainer";
import Navbar from "./components/Navbar";
import CallNowButton from "./components/CallNowButton";
import QuoteForm from "./components/QuoteForm";
import TestimonialCarousel from "./components/TestimonialCarousel";

import carouselImage1 from "../public/carousel-images/homepage/carousel-00001.png";
import carouselImage2 from "../public/carousel-images/homepage/carousel-00002.png";
import carouselImage3 from "../public/carousel-images/homepage/carousel-00003.png";
import carouselImage4 from "../public/carousel-images/homepage/carousel-00004.png";
import carouselImage5 from "../public/carousel-images/homepage/carousel-00005.png";
import carouselImage6 from "../public/carousel-images/homepage/carousel-00006.png";
import carouselImage7 from "../public/carousel-images/homepage/carousel-00007.png";
import carouselImage8 from "../public/carousel-images/homepage/carousel-00008.png";
import carouselImage9 from "../public/carousel-images/homepage/carousel-00009.png";
import carouselImage10 from "../public/carousel-images/homepage/carousel-00010.png";
import carouselImage11 from "../public/carousel-images/homepage/carousel-00011.png";
import carouselImage12 from "../public/carousel-images/homepage/carousel-00012.png";
import carouselImage13 from "../public/carousel-images/homepage/carousel-00013.png";
import carouselImage14 from "../public/carousel-images/homepage/carousel-00014.png";
import carouselImage15 from "../public/carousel-images/homepage/carousel-00015.png";
import carouselImage16 from "../public/carousel-images/homepage/carousel-00016.png";
import carouselImage17 from "../public/carousel-images/homepage/carousel-00017.png";
import carouselImage18 from "../public/carousel-images/homepage/carousel-00018.png";

import irrigationBg from "../public/irrigation-bg.png";
import blurredHero from "../public/blurred-hero-small.webp";
import Certifications from "./components/Certifications";
import PopupOverlay from "./components/PopupOverlay";

import newIrrigationSystemTileImage from "../public/service-header-images/new-installation.png";
import irrigationServicesTileImage from "../public/service-header-images/irrigation-service.png";
import paverPatiosTileImage from "../public/service-header-images/paver-patios.png";
import retainingWallsTileImage from "../public/service-header-images/retaining-walls.png";
import threeDDesignsTileImage from "../public/service-header-images/3d-designs-small.png";
import dynamic from "next/dynamic";

const LazyLoadedAreaMap = dynamic(() => import('./components/AreaMap'), {
  ssr: false,
});

const LazyLoadedGallery = dynamic(() => import('./components/Gallery'), {
  ssr: false,
});

const homePageCarouselImages: StaticImageData[] = [carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5, carouselImage6, carouselImage7, carouselImage8, 
  carouselImage9, carouselImage10, carouselImage11, carouselImage12, carouselImage13, carouselImage14, carouselImage15, carouselImage16, carouselImage17, carouselImage18]

const servicePhotoMap = {
  "Irrigation Services": {
    image: newIrrigationSystemTileImage.src,
    pageUrl: "/irrigation",
    blurb: "Transform your landscape with a new irrigation system, or touch up your existing system! Our expert team specializes in crafting customized irrigation solutions. From design to implementation, trust us to bring your vision to life. Elevate your outdoor space with our top-notch New Irrigation System Installation – where innovation meets green perfection!",
  },
  "Hardscaping": {
    image: paverPatiosTileImage.src,
    pageUrl: "/hardscaping",
    blurb: "Enhance your outdoor ambiance with our leading Hardscaping services! Our expert team specializes in crafting bespoke patio spaces that seamlessly blend style and durability. From meticulous design to flawless installation, trust us to bring your vision to life. Elevate your outdoor experience with our premium Patios and Retaining Walls!",
  },
  "3D Designs": {
    image: threeDDesignsTileImage.src,
    pageUrl: "/3ddesigns",
    blurb: "Immerse yourself in the possibilities of your outdoor projects with our cutting-edge 3D Design service. Elevate your planning experience as we bring your vision to life in three-dimensional detail. Our expertise in creating realistic renderings ensures a comprehensive preview of your outdoor space before implementation. Unleash the full potential of your projects with our innovative 3D Design service!",
  },
}

export default function Home() {
  return (
    <main className="font-serif">
			<PopupOverlay />
      <Navbar currentPage={0} />
      <FullHeightContainer>
          <div
            className="flex relative h-[65vh] mt-10"
          >
						<div className="absolute w-full h-full"
							style={{
								content: "",
								backgroundImage: `url(${blurredHero.src})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}} />
						<div className="relative flex-1 flex flex-col items-center justify-end gap-5 pb-16">
							<h3 className="font-semibold text-2xl mx-3 text-white text-center">Call <a href="tel:630-639-8089">(630) 639-8089</a></h3>
							<h1 className="font-bold text-4xl mx-3 text-white text-center">Ascend with our irrigation and hardscape solutions!</h1>
							<div className="grid grid-cols-2 text-center gap-3 mt-5 font-semibold text-lg">
								<a href="#quote-form"><div className="bg-ascendblue rounded-lg px-3 py-3 drop-shadow-xl">CONTACT FORM</div></a>
								<a href="tel:630-639-8089"><div className="bg-ascendblue rounded-lg px-3 py-3 drop-shadow-xl">CALL NOW</div></a>
							</div>
						</div>
          </div>

          <div className="text-center text-black flex flex-col items-center justify-start pt-5">
            <p className="text-black sm:text-lg leading-tight text-center w-3/4 sm:w-3/5 max-w-[50rem] sm:mt-3 mt-2 mb-6">
            Welcome to Ascend! Where we specialize in creating beautiful and functional outdoor spaces through our expert irrigation and hardscaping services. Our team is dedicated to helping you bring your vision to life and enhance the beauty of your property. Whether you&apos;re looking to upgrade your irrigation system, design a stunning hardscape feature, or transform your outdoor environment, we are here to assist you every step of the way. Let us collaborate with you to create a customized solution that meets your needs and exceeds your expectations. Your satisfaction is our top priority, and we are ready to make your outdoor dreams a reality. Contact us today to explore how we can help you achieve the outdoor oasis you&apos;ve always desired.
            </p>
          </div>
      </FullHeightContainer>

      {/* Certifications section */}
      <Certifications />

      {/* Our Services section */}
      <div className="w-full pt-6 pb-8 md:pt-8 md:pb-12 px-8 bg-[#002a38] text-center">
        <h2 className="font-medium text-3xl mb-6">Our Services</h2>

				<div className="grid grid-cols-1 gap-3">
        { Object.entries(servicePhotoMap).map(([key, value]) => 
          <a key={key} href={value.pageUrl}>
            <div
              className="flex overflow-hidden h-60 md:h-80 rounded-xl"
              style={{
                backgroundImage: `url(${value.image})`,
                backgroundSize: "cover",
                backgroundPositionY: "-40px",
              }}
            >
              <div className="flex-1 flex flex-col items-center justify-end sm:pb-4 md:pb-6 lg:pb-8 service-gradient-container">
                <div className="w-full py-2 px-3 sm:w-[75%] md:w-[65%]">
                  <span className="pt-2 text-[1.65rem] italic font-semibold tracking-wider">{key}</span>
                  <p className="text-sm sm:text-base md:text-lg mt-1 leading-tight text-neutral-100">{value.blurb}</p>
                </div>
              </div>
            </div>
          </a>
        )}
				</div>
      </div>

      {/* Our Process section */}
      <div className="flex flex-col items-center w-full pt-6 pb-8 md:pt-8 md:pb-12 px-8 text-black text-center">
        <h2 className="font-medium text-3xl mb-2">Our Process</h2>
        <p className="mx-5 md:mx-0 md:w-2/3 lg:w-1/2 lg:text-lg mb-8 leading-snug">
        We ensure that our work is tailored to your specific needs by following an <strong>industry-standard, modern approach to irrigation services and hardscaping</strong>. Just tell us what you’re looking for, and we’ll design and install a custom irrigation or hardscaping solution that suits your needs!
        </p>

        <Image
          src={processDiagram}
          alt=""
          width={150}
          className="sm:hidden block"
        />
        <div className="lg:w-[50%] hidden sm:flex lg:pt-6 pb-6">
          <Image
            src={processDiagramHorizontal}
            alt=""
            className="flex-1"
          />
        </div>
      </div>

      {/* Areas of Service Section */}
      <div className="w-full flex flex-col items-center justify-start py-6 md:pt-8 md:pb-12 bg-[#002a38] text-center">
        <h2 className="font-medium text-3xl">Areas We Service</h2>

        <div className="w-full h-60 sm:h-[30rem] my-5">
          <LazyLoadedAreaMap />
        </div>

        <p className="w-3/4 sm:w-1/2 lg:text-lg">
        We&apos;re proud to service the Chicagoland area, including the Northwestern, Western, and Southwestern suburbs!<br />Cities that we service include:
        </p>

        <ul className="w-3/4 sm:w-1/2 list-disc grid grid-cols-3 justify-items-center mt-3 text-sm lg:text-xl font-medium">
          <li>West Chicago</li>
          <li>Winfield</li>
          <li>Carol Stream</li>
          <li>Warrenville</li>
          <li>Wheaton</li>
          <li>St. Charles</li>
          <li>Naperville</li>
          <li>Aurora</li>
          <li>Glen Ellyn</li>
          <li>Bartlett</li>
          <li>Batavia</li>
          <li>Wayne</li>
          <li>Campton Hills</li>
          <li>Addison</li>
          <li>Lombard</li>
          <li>Elgin</li>
          <li>South Elgin</li>
          <li>Schaumburg</li>
          <li>Bolingbrook</li>
          <li>Downers Grove</li>
          <li>Plainfield</li>
          <li>Oswego</li>
          <li>Sugar Grove</li>
          <li>Elmhurst</li>
          <li className="col-span-3 self-center">Oak Brook</li>
        </ul>

        <p className="mt-4 lg:text-xl italic">and more!</p>
      </div>

      {/* Testimonials Section */}
      <div className="pt-6 pb-10 text-black w-full text-center">
        <h2 className="font-medium text-3xl mb-6">Testimonials</h2>

        <TestimonialCarousel />
      </div>

      { /* Quote Form */ }
      <div className="pt-6 w-full flex flex-col items-center justify-center">
        <QuoteForm />
      </div>

			{ /* Gallery */ }
      <div className="pt-10 w-full flex flex-col items-center justify-center">
        <h2 className="font-medium text-3xl mb-6 text-black">Gallery</h2>
				<LazyLoadedGallery />
			</div>
    </main>
  )
}
