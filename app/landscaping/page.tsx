import Image, { StaticImageData } from "next/image";
import FullHeightContainer from "../components/FullHeightContainer";
import Navbar from "../components/Navbar";
import landscapingHeroImage from "../../public/carousel-images/homepage/carousel-00007.png";
import ascendLogo from "../../public/ascend-logo.png";
import treesHillsGraphic from "../../public/trees-hills-graphic.png";
import CallNowButton from "../components/CallNowButton";
import Carousel from "../components/Carousel";
import QuoteForm from "../components/QuoteForm";

import carouselImage5 from "../../public/carousel-images/homepage/carousel-00005.png";
import carouselImage6 from "../../public/carousel-images/homepage/carousel-00006.png";
import carouselImage7 from "../../public/carousel-images/homepage/carousel-00007.png";
import carouselImage8 from "../../public/carousel-images/homepage/carousel-00008.png";
import carouselImage9 from "../../public/carousel-images/homepage/carousel-00009.png";
import carouselImage10 from "../../public/carousel-images/homepage/carousel-00010.png";
import carouselImage11 from "../../public/carousel-images/homepage/carousel-00011.png";
import carouselImage12 from "../../public/carousel-images/homepage/carousel-00012.png";
import carouselImage13 from "../../public/carousel-images/homepage/carousel-00013.png";
import carouselImage14 from "../../public/carousel-images/homepage/carousel-00014.png";
import carouselImage15 from "../../public/carousel-images/homepage/carousel-00015.png";
import carouselImage16 from "../../public/carousel-images/homepage/carousel-00016.png";

const landscapingPageCarouselImages: StaticImageData[] = [carouselImage5, carouselImage6, carouselImage7, carouselImage8, 
  carouselImage9, carouselImage10, carouselImage11, carouselImage12, carouselImage13, carouselImage14, carouselImage15, carouselImage16]

export default function Landscaping() {
  return(
    <main className="font-serif">
      <FullHeightContainer>
        <Navbar currentPage={1} />

        <div
          className="flex-1 flex"
          style={{
            backgroundImage: `url(${landscapingHeroImage.src})`,
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
              priority={true}
              alt=""
              className="ml-8 w-80 sm:w-96"
            />

            <div className="grid grid-cols-1 grid-rows-3 gap-4 text-2xl sm:text-3xl text-center sm:text-left my-8 sm:my-10">
              <span><a href="/irrigation">💦 Irrigation</a></span>
              <span><a href="/landscaping">🌳 Landscaping</a></span>
              <span><a href="/hardscaping">🧱 Hardscaping</a></span>
            </div>

            <span className="font-serif font-medium text-3xl">(630) 639-8089</span>
          </div>
        </div>

        <div className="text-black font-serif w-full text-center flex flex-col items-center justify-center py-6">
          <span className="w-full text-3xl font-bold">Landscaping Services</span>
          <span className="w-full text-xl">by Ascend</span>

          <div className="lg:absolute right-10 mt-5 lg:mt-0">
            <CallNowButton />
          </div>
        </div>
      </FullHeightContainer>

      <div className="py-8 text-xl text-black font-serif text-center w-full flex flex-col items-center justify-center">
        <p className="w-3/5">
        At Ascend, we are committed to providing custom landscaping services that are perfectly tailored to each client&apos;s needs. We&apos;ll help you get your outdoor spaces looking their best &mdash; quickly, professionally, and at a fair price!
        </p>

        <div className="my-10 w-10/12 sm:w-4/5 lg:w-3/5 xl:w-1/2 h-[18rem] sm:h-[23rem] md:h-[30rem]">
          <h3 className="font-bold text-3xl text-center w-full mb-3">Our Landscaping Work</h3>
          <Carousel carouselImages={landscapingPageCarouselImages} />
        </div>

        <div className="mt-10 mx-10">
          <p className="font-semibold text-left mb-2">Services that we provide include:</p>
          <ul className="list-disc text-left text-base lg:text-lg">
            <li>Lawn Care 🏞</li>
            <li>Mulching 🟤</li>
            <li>Flower/Plant Installation & Maintenance 🌷</li>
            <li>Tree Care & Installation/Removal 🌳</li>
          </ul>
        </div>
      </div>

      { /* Quote Form */ }
      <div className="w-full flex flex-col items-center justify-center">
        <QuoteForm />
      </div>

      <div
        style={{
          width: "100%",
          height: "20vh",
          marginTop: "2rem",
          backgroundImage: `url(${treesHillsGraphic.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat-x",
          backgroundPositionX: "center",
          backgroundPositionY: "bottom"
        }}
      />
    </main>
  )
}
