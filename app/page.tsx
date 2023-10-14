import Image, { StaticImageData } from "next/image";
import homePageHero from "../public/home-page-hero-small.png";
import ascendLogo from "../public/ascend-logo.png";
import processDiagram from "../public/process.png";
import Carousel from "./components/Carousel";
import FullHeightContainer from "./components/FullHeightContainer";
import Navbar from "./components/Navbar";
import CallNowButton from "./components/CallNowButton";
import QuoteForm from "./components/QuoteForm";
import TestimonialCarousel from "./components/TestimonialCarousel";
import AreaMap from "./components/AreaMap";

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
import hardscapingBg from "../public/hardscaping-bg.png";
import renderImage from "../public/3d-rendering/render.png";
import realityRenderImage from "../public/3d-rendering/real.jpg";
import Certifications from "./components/Certifications";

const homePageCarouselImages: StaticImageData[] = [carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5, carouselImage6, carouselImage7, carouselImage8, 
  carouselImage9, carouselImage10, carouselImage11, carouselImage12, carouselImage13, carouselImage14, carouselImage15, carouselImage16, carouselImage17, carouselImage18]

const servicePhotoMap = {
  "Irrigation": {
    image: irrigationBg.src,
    pageUrl: "/irrigation",
    blurb: "Discover our top-notch irrigation services, tailored to keep your garden thriving and radiant. We specialize in efficient sprinkler system installations, timely maintenance, and swift repairs, ensuring your plants receive the perfect drink. Let us make your garden flourish with our expertise and care!",
  },
  "Landscaping": {
    image: homePageHero.src,
    pageUrl: "/landscaping",
    blurb: "We take pride in crafting outdoor spaces that reflect your unique style and vision. From design to maintenance, our dedicated team is committed to turning your dreams into a vibrant reality. Let's create a picturesque landscape you'll love coming home to.",
  },
  "Hardscaping": {
    image: hardscapingBg.src,
    pageUrl: "/hardscaping",
    blurb: "We specialize in crafting durable, elegant outdoor features, from intricate pathways to inviting patios. Our team blends creativity and expertise to bring your hardscaping visions to life, adding functionality and beauty to your outdoor oasis. Explore the possibilities with us today!",
  }
}

export default function Home() {
  return (
    <main className="font-serif">
      <FullHeightContainer>
        <Navbar currentPage={0} />

        <div>
          <div
            className="flex h-[55vh]"
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

              <div className="grid grid-cols-1 grid-rows-3 gap-4 text-2xl sm:text-3xl text-center sm:text-left my-8 sm:my-10">
                <span><a href="/irrigation">💦 Irrigation</a></span>
                <span><a href="/landscaping">🌳 Landscaping</a></span>
                <span><a href="/hardscaping">🧱 Hardscaping</a></span>
              </div>
            </div>
          </div>

          <div className="text-center text-black flex flex-col items-center justify-start pt-5">
            <h1 className="font-medium text-2xl">Crafting beautiful outdoor spaces for your Chicagoland home!</h1>
            <p className="text-black text-lg leading-snug text-center w-3/4 sm:w-3/5 max-w-[50rem] my-4 sm:my-9">
              Want to bring new life to your outdoor living spaces? At Ascend Landscaping, we make our clients’ exterior
              dreams come true with a combination of <strong>visually appealing design, superior material selection, and top-notch customer service</strong>.
              For your next outdoor project, go with Ascend!
            </p>
          </div>
        </div>
      </FullHeightContainer>

      {/* Certifications section */}
      <Certifications />

      {/* Our Services section */}
      <div className="w-full pt-6 pb-8 md:pt-8 md:pb-12 px-8 bg-[#1b281b] text-center">
        <h2 className="font-medium text-3xl mb-6">Our Services</h2>

        <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 gap-5">
        { Object.entries(servicePhotoMap).map(([key, value]) => 
          <a key={key} href={value.pageUrl}>
            <div
              className="flex overflow-hidden h-60 sm:h-60 md:h-80 rounded-xl"
              style={{
                backgroundImage: `url(${value.image})`,
                backgroundSize: "cover",
                backgroundPositionY: "-40px",
              }}
            >
              <div className="flex-1 flex flex-col items-center justify-end service-gradient-container">
                <div className="w-full py-2 px-3">
                  <span className="pt-2 text-[1.75rem] italic font-semibold tracking-wider">{key}</span>
                  <p className="text-sm mt-1 leading-tight text-neutral-100">{value.blurb}</p>
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
        <p className="mx-5 mb-6 leading-snug">
        We ensure that our work is tailored to your specific needs by following an <strong>industry-standard, modern approach to landscaping services</strong>. Just tell us what you’re looking for, and we’ll design and construct an outdoor space that suits your needs!
        </p>

        <Image
          src={processDiagram}
          alt=""
          width={150}
        />
      </div>

      {/* Areas of Service Section */}
      <div className="w-full flex flex-col items-center justify-start py-6 md:pt-8 md:pb-12 bg-[#1b281b] text-center">
        <h2 className="font-medium text-3xl">Areas We Service</h2>

        <div className="w-full h-60 my-5">
          <AreaMap />
        </div>

        <p className="w-3/4">
        We&apos;re proud to service the Chicagoland area, including the Northwestern, Western, and Southwestern suburbs!<br />Cities that we service include:
        </p>

        <ul className="w-3/4 list-disc grid grid-cols-2 justify-items-center mt-3 font-medium">
          <li>West Chicago</li>
          <li>Winfield</li>
          <li>Warrenville</li>
          <li>Naperville</li>
          <li>Lombard</li>
          <li>Wheaton</li>
          <li>St. Charles</li>
          <li>Addison</li>
        </ul>

        <p className="mt-4">and more!</p>
      </div>

      {/* 3D Design Section */}
      <div className="w-full flex flex-col items-center text-center py-6 bg-white text-black font-serif">
        <h2 className="font-medium text-3xl mb-2">3D Design</h2>

        <p className="w-3/4 mb-2">
        Our unique 3D Rendering design process ensures that you get the best results for your outdoor project!
        </p>
        <p className="mb-3">We turn your <strong>custom, personalized</strong> 3D render...</p>
        <Image
          src={renderImage}
          alt=""
        />
        <p className="my-3">...into the <strong>exact</strong> results you have in mind!</p>
        <div className="overflow-hidden w-full h-56">
          <Image
            src={realityRenderImage}
            alt=""
          />
        </div>
        <p className="mt-3 w-3/4">Our team of experts will design a space for you to ensure that it&apos;s up to your standards <strong>before</strong> we bring it into reality!</p>
      </div>

      {/* Testimonials Section */}
      <div className="py-6 text-white w-full text-center bg-[#1b281b]">
        <h2 className="font-medium text-3xl mb-6">Testimonials</h2>

        <TestimonialCarousel />
      </div>

      { /* Quote Form */ }
      <div className="pt-6 w-full flex flex-col items-center justify-center">
        <QuoteForm />
      </div>

      <div className="w-full my-10">
        <hr className="w-[90%] mx-auto border-gray-400" />
      </div>

      <div className="w-full flex flex-col items-center justify-center text-black leading-none pb-10">
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
