import Image, { StaticImageData } from "next/image";
import homePageHero from "../public/home-page-hero-small.png";
import ascendLogo from "../public/ascend-logo.png";
import processDiagram from "../public/process-diagram.png";
import Carousel from "./components/Carousel";
import FullHeightContainer from "./components/FullHeightContainer";
import Navbar from "./components/Navbar";
import CallNowButton from "./components/CallNowButton";
import QuoteForm from "./components/QuoteForm";

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
import TestimonialCarousel from "./components/TestimonialCarousel";
import AreaMap from "./components/AreaMap";

const homePageCarouselImages: StaticImageData[] = [carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5, carouselImage6, carouselImage7, carouselImage8, 
  carouselImage9, carouselImage10, carouselImage11, carouselImage12, carouselImage13, carouselImage14, carouselImage15, carouselImage16, carouselImage17, carouselImage18]

const servicePhotoMap = {
  "Landscaping": {
    image: homePageHero.src,
    pageUrl: "/landscaping",
  },
  "Hardscaping": {
    image: carouselImage3.src,
    pageUrl: "/hardscaping",
  },
  "Lighting": {
    image: carouselImage17.src,
    pageUrl: "/lighting",
  },
}

export default function Home() {
  return (
    <main>
      <FullHeightContainer>
        <Navbar currentPage={0} />

        <div>
          <div
            className="flex h-[65vh]"
            style={{
              backgroundImage: `url(${homePageHero.src})`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="flex-1 flex flex-col items-center justify-center w-full"
              style={{
                backdropFilter: "blur(1px) brightness(70%)",
                WebkitBackdropFilter: "blur(1px) brightness(70%)",
              }}
            >
              <Image
                src={ascendLogo}
                alt=""
                className="ml-4 w-72 sm:w-96"
              />

              <div className="grid grid-cols-2 grid-rows-2 gap-4 font-serif text-2xl sm:text-3xl text-center sm:text-left my-8 sm:my-10">
                <span><a href="/landscaping">🌳 Landscaping</a></span>
                <span><a href="/hardscaping">🧱 Hardscaping</a></span>
                <span><a href="/lighting">💡 Lighting</a></span>
                <span>💧 Water Features</span>
              </div>
            </div>
          </div>

          <div className="text-center text-black flex flex-col items-center justify-start pt-5">
            <h1 className="font-medium font-serif text-2xl">Crafting beautiful outdoor spaces for your Chicagoland home!</h1>
            <p className="font-serif text-black text-lg text-center w-3/4 sm:w-3/5 max-w-[50rem] my-4 sm:my-9">
              Want to bring new life to your outdoor living spaces? At Ascend Landscaping, we make our clients’ exterior
              dreams come true with a combination of visually appealing design, superior material selection, and top-notch customer service.
              For your next outdoor project, go with Ascend!
            </p>
          </div>
        </div>
      </FullHeightContainer>

      {/* Our Services section */}
      <div className="w-full py-6 md:pt-8 md:pb-12 px-8 bg-[#1b281b] font-serif text-center">
        <h2 className="font-medium text-3xl mb-6">Our Services</h2>

        <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 gap-5">
        { Object.entries(servicePhotoMap).map(([key, value]) => 
          <a key={key} href={value.pageUrl}>
            <div className="overflow-hidden h-40 sm:h-60 md:h-80 flex flex-col rounded-xl bg-neutral-600 text-xl">
              <div
                className="flex-1"
                style={{
                  backgroundImage: `url(${value.image})`,
                  backgroundSize: "cover",
                  backgroundPositionY: "center"
                }}
              />
              <span className="py-2 px-2">{key}</span>
            </div>
          </a>
        )}
        </div>
      </div>

      {/* Our Process section */}
      <div className="flex flex-col items-center w-full py-6 md:pt-8 md:pb-12 px-8 font-serif text-black text-center">
        <h2 className="font-medium text-3xl mb-3">Our Process</h2>
        <p className="px-6 mb-6">
        We ensure that our work is tailored to your specific needs by following an industry-standard, modern approach to landscaping services. Just tell us what you’re looking for, and we’ll design and construct an outdoor space that suits your needs!
        </p>

        <Image
          src={processDiagram}
          alt=""
          height={400}
        />
      </div>

      {/* Areas of Service Section */}
      <div className="w-full py-6 md:pt-8 md:pb-12 bg-[#1b281b] font-serif text-center">
        <h2 className="font-medium text-3xl mb-6">Areas We Service</h2>

        <div className="w-full h-60 my-5">
          <AreaMap />
        </div>

        <p>
        We&apos;re proud to service much of the Chicagoland area, including the Northwestern, Western, and Southwestern suburbs! Cities that we service include:
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="py-6 text-black font-serif w-full text-center">
        <h2 className="font-medium text-3xl mb-6">Testimonials</h2>

        <TestimonialCarousel />
      </div>

      {/*
      <div className="bg-white w-full flex flex-col items-center justify-center py-10 sm:py-16">
        <div className="w-10/12 sm:w-4/5 lg:w-3/5 xl:w-1/2 h-[18rem] sm:h-[23rem] md:h-[30rem]">
          <Carousel carouselImages={homePageCarouselImages} />
        </div>
      </div>
      */}

      { /* Quote Form */ }
      <div className="w-full flex flex-col items-center justify-center">
        <QuoteForm />
      </div>

      <div className="w-full my-10">
        <hr className="w-[90%] mx-auto border-gray-400" />
      </div>

      <div className="w-full flex flex-col items-center justify-center text-black font-serif leading-none pb-10">
        <h1 className="font-semibold text-lg">Ascend Landscaping</h1>
        <span className="mb-4">West Chicago, IL</span>
        <a href="tel:630-639-8089" className="mb-1">
          <span className="text-[#6EA750] underline text-lg">(630) 639-8089</span>
        </a>
        <a href="mailto:ascend.landscaping1@gmail.com">
          <span className="text-[#6EA750] underline">ascend.landscaping1@gmail.com</span>
        </a>
      </div>
    </main>
  )
}
