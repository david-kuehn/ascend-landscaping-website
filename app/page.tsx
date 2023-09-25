import Image, { StaticImageData } from "next/image";
import homePageHero from "../public/home-page-hero-small.png";
import ascendLogo from "../public/ascend-logo.png";
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

const homePageCarouselImages: StaticImageData[] = [carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5, carouselImage6, carouselImage7, carouselImage8, 
  carouselImage9, carouselImage10, carouselImage11, carouselImage12, carouselImage13, carouselImage14, carouselImage15, carouselImage16, carouselImage17, carouselImage18]

export default function Home() {
  return (
    <main>
      <FullHeightContainer>
        <Navbar currentPage={0} />

        <div
          className="flex-1 flex"
          style={{
            backgroundImage: `url(${homePageHero.src})`,
            backgroundSize: "cover",
          }}
        >
          <div
            className="flex-1 flex flex-col items-center justify-center w-full"
            style={{
              backdropFilter: "blur(5px) brightness(40%)",
              WebkitBackdropFilter: "blur(5px) brightness(40%)",
            }}
          >
            <Image
              src={ascendLogo}
              alt=""
              className="ml-8 w-80 sm:w-96"
            />

            <div className="grid grid-cols-2 grid-rows-2 gap-4 font-serif text-2xl sm:text-3xl text-center sm:text-left my-8 sm:my-10">
              <span><a href="/landscaping">🌳 Landscaping</a></span>
              <span><a href="/hardscaping">🧱 Hardscaping</a></span>
              <span><a href="/lighting">💡 Lighting</a></span>
              <span>💧 Water Features</span>
            </div>

            <span className="font-serif font-medium text-3xl">(630) 639-8089</span>

            <div className="mt-7">
              <CallNowButton />
            </div>
          </div>
        </div>
      </FullHeightContainer>

      <div className="bg-white w-full flex flex-col items-center justify-center py-10 sm:py-16">
        <h1 className="font-bold font-serif text-black text-center text-3xl sm:text-4xl w-3/4 sm:w-1/2 max-w-[35rem]">Bringing beautiful landscape design to your Chicagoland home!</h1>
        <h2 className="font-serif text-black text-xl text-center w-3/4 sm:w-3/5 max-w-[50rem] mt-4 mb-9 sm:my-9">
          Want to bring new life to your outdoor living spaces? At Ascend Landscaping, we make our clients’ exterior
          dreams come true with a combination of visually appealing design, superior material selection, and top-notch customer service.
          <br />
          For your next outdoor project, go with Ascend!
        </h2>

        <div className="w-10/12 sm:w-4/5 lg:w-3/5 xl:w-1/2 h-[18rem] sm:h-[23rem] md:h-[30rem]">
          <Carousel carouselImages={homePageCarouselImages} />
        </div>
      </div>

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
