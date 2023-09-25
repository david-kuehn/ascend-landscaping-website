import Image, { StaticImageData } from "next/image";
import FullHeightContainer from "../components/FullHeightContainer";
import Navbar from "../components/Navbar";
import lightingHeroImage from "../../public/carousel-images/homepage/carousel-00019.jpeg";
import ascendLogo from "../../public/ascend-logo.png";
import treesHillsGraphic from "../../public/trees-hills-graphic.png";
import CallNowButton from "../components/CallNowButton";
import Carousel from "../components/Carousel";
import QuoteForm from "../components/QuoteForm";

import carouselImage17 from "../../public/carousel-images/homepage/carousel-00017.png";
import carouselImage19 from "../../public/carousel-images/homepage/carousel-00019.jpeg";
import carouselImage20 from "../../public/carousel-images/homepage/carousel-00020.jpeg";
import carouselImage21 from "../../public/carousel-images/homepage/carousel-00021.jpeg";
import carouselImage22 from "../../public/carousel-images/homepage/carousel-00022.jpeg";

const lightingPageCarouselImages: StaticImageData[] = [carouselImage17, carouselImage19, carouselImage20, carouselImage21, carouselImage22];

export default function Lighting() {
  return (
    <main>
      <FullHeightContainer>
        <Navbar currentPage={3} />

        <div
          className="flex-1 flex"
          style={{
            backgroundImage: `url(${lightingHeroImage.src})`,
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
              <span><a href="/landscaping">🌳 Landscaping</a></span>
              <span><a href="/hardscaping">🧱 Hardscaping</a></span>
              <span><a href="/lighting">💡 Lighting</a></span>
              <span>💧 Water Features</span>
            </div>

            <span className="font-serif font-medium text-3xl">(630) 639-8089</span>
          </div>
        </div>

        <div className="text-black font-serif w-full text-center flex flex-col items-center justify-center pt-6">
          <span className="w-full text-3xl font-bold">Lighting</span>
          <span className="w-full text-xl">by Ascend</span>

          <div className="lg:absolute right-10 mt-5 lg:mt-0">
            <CallNowButton />
          </div>
        </div>
      </FullHeightContainer>

      <div className="py-8 text-xl text-black font-serif text-center w-full flex flex-col items-center justify-center">
        <p className="w-3/5">
        There&apos;s no better way to accentuate your beautiful outdoor space than by making it shine with accent lighting. Take your barbecues to the next level with tasteful lights around your grilling area and outdoor dining space, or light up the night in your whole yard with flood lights. At Ascend, we&apos;ll bring our professional design experience and reliable, courteous employees to make your yard the star of the neighboorhood!
        </p>

        <div className="my-10 w-10/12 sm:w-4/5 lg:w-3/5 xl:w-1/2 h-[18rem] sm:h-[23rem] md:h-[30rem]">
          <h3 className="font-bold text-3xl text-center w-full mb-3">Our Lighting Work</h3>
          <Carousel carouselImages={lightingPageCarouselImages} />
        </div>

        <div className="mt-10 mx-10">
          <p className="font-semibold text-left mb-2">Lighting services that we provide include:</p>
          <ul className="list-disc text-left text-base lg:text-lg">
            <li>Accent Lighting Design & Installation ✨</li>
            <li>Floodlights 🔆</li>
            <li>String Lighting 💡</li>
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
