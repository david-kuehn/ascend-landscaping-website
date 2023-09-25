import Image, { StaticImageData } from "next/image";
import FullHeightContainer from "../components/FullHeightContainer";
import Navbar from "../components/Navbar";
import landscapingHeroImage from "../../public/carousel-images/homepage/carousel-00003.png";
import ascendLogo from "../../public/ascend-logo.png";
import treesHillsGraphic from "../../public/trees-hills-graphic.png";
import CallNowButton from "../components/CallNowButton";
import Carousel from "../components/Carousel";
import QuoteForm from "../components/QuoteForm";

import carouselImage1 from "../../public/carousel-images/homepage/carousel-00001.png";
import carouselImage2 from "../../public/carousel-images/homepage/carousel-00002.png";
import carouselImage3 from "../../public/carousel-images/homepage/carousel-00003.png";
import carouselImage4 from "../../public/carousel-images/homepage/carousel-00004.png";
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
import carouselImage17 from "../../public/carousel-images/homepage/carousel-00017.png";

const hardscapingPageCarouselImages: StaticImageData[] = [carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5, carouselImage6, carouselImage7, carouselImage8, 
  carouselImage9, carouselImage10, carouselImage11, carouselImage12, carouselImage13, carouselImage14, carouselImage15, carouselImage16, carouselImage17]

export default function Hardscaping() {
  return (
    <main>
      <FullHeightContainer>
        <Navbar currentPage={2} />

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

            <div className="grid grid-cols-2 grid-rows-2 gap-4 font-serif text-2xl sm:text-3xl text-center sm:text-left my-8 sm:my-10">
              <span>🌳 Landscaping</span>
              <span>🧱 Hardscaping</span>
              <span>💡 Lighting</span>
              <span>💧 Water Features</span>
            </div>

            <span className="font-serif font-medium text-3xl">(630) 639-8089</span>
          </div>
        </div>

        <div className="text-black font-serif w-full text-center flex flex-col items-center justify-center py-6">
          <span className="w-full text-3xl font-bold">Hardscaping</span>
          <span className="w-full text-xl">by Ascend</span>

          <div className="lg:absolute right-10 mt-5 lg:mt-0">
            <CallNowButton />
          </div>
        </div>
      </FullHeightContainer>

      <div className="py-8 text-xl text-black font-serif text-center w-full flex flex-col items-center justify-center">
        <p className="w-3/5">
        Hardscaping is part of our DNA at Ascend! Whether you&apos;re looking for that new patio you&apos;ve always wanted, a retaining wall to add some variety to your yard, or new steps for your front porch, our professional &amp; courteous team will be happy to install hardscaping that will look stunning AND stand the test of time!
        </p>

        <div className="my-10 w-10/12 sm:w-4/5 lg:w-3/5 xl:w-1/2 h-[18rem] sm:h-[23rem] md:h-[30rem]">
          <h3 className="font-bold text-3xl text-center w-full mb-3">Our Hardscaping Work</h3>
          <Carousel carouselImages={hardscapingPageCarouselImages} />
        </div>

        <div className="mt-10 mx-10">
          <p className="font-semibold text-left mb-2">Hardscaping services that we provide include:</p>
          <ul className="list-disc text-left text-base lg:text-lg">
            <li>Patio Design & Installation 🪑</li>
            <li>Walkways 🚶</li>
            <li>Retaining Walls 🧱</li>
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
