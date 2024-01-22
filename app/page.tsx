import Image, { StaticImageData } from "next/image";
import homePageHero from "../public/home-page-hero-small.png";
import ascendLogo from "../public/ascend-logo-v2.png";
import processDiagram from "../public/process.png";
import processDiagramHorizontal from "../public/process-horizontal.png";
import Carousel from "./components/Carousel";
import FullHeightContainer from "./components/FullHeightContainer";
import Navbar from "./components/Navbar";
import CallNowButton from "./components/CallNowButton";
import QuoteForm from "./components/QuoteForm";
import TestimonialCarousel from "./components/TestimonialCarousel";
import AreaMap from "./components/AreaMap";
import phoneIcon from "../public/phone_icon.png";
import emailIcon from "../public/email-icon.png";
import locationIcon from "../public/location-icon.png";
import fbIcon from "../public/fb-icon.png";
import igIcon from "../public/ig-icon.png";

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
import Certifications from "./components/Certifications";

const homePageCarouselImages: StaticImageData[] = [carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5, carouselImage6, carouselImage7, carouselImage8, 
  carouselImage9, carouselImage10, carouselImage11, carouselImage12, carouselImage13, carouselImage14, carouselImage15, carouselImage16, carouselImage17, carouselImage18]

const servicePhotoMap = {
  "Irrigation": {
    image: irrigationBg.src,
    pageUrl: "/irrigation",
    blurb: "Discover our top-notch irrigation services, tailored to keep your garden thriving and radiant. We specialize in efficient sprinkler system installations, timely maintenance, and swift repairs, ensuring your plants receive the perfect drink. Let us make your garden flourish with our expertise and care!",
  },
}

export default function Home() {
  return (
    <main className="font-serif">
      <Navbar currentPage={0} />
      <FullHeightContainer>
        <div>
          <div
            className="flex h-[55vh] mt-10"
            style={{
              backgroundImage: `url(${irrigationBg.src})`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="text-center flex-1 flex gap-5 sm:gap-8 flex-col items-center justify-end w-full pb-10"
              style={{
                backdropFilter: "blur(0px) brightness(70%)",
                WebkitBackdropFilter: "blur(0px) brightness(70%)",
              }}
            >
              <h1 className="font-semibold text-3xl sm:text-4xl mx-3">Reliable, high-quality irrigation systems for your Chicagoland home!</h1>
            </div>
          </div>

          <div className="text-center text-black flex flex-col items-center justify-start pt-5">
            <p className="text-black sm:text-lg leading-tight text-center w-3/4 sm:w-3/5 max-w-[50rem] sm:mt-3 mt-2 mb-6">
            Welcome to Ascend Irrigation! As a family-owned company specializing in irrigation, we boast <strong>over 15 years of dedicated expertise</strong> in delivering exceptional irrigation services. Our <strong>committed team of experts</strong> is devoted to elevating your outdoor spaces by focusing on the <strong>creation and maintenance of efficient, high-quality irrigation systems</strong>. Whether you&apos;re a homeowner aiming to enhance your property&apos;s functionality or a business seeking <strong>professional irrigation solutions</strong>, our knowledge, skills, and dedication will ensure that your irrigation needs are met. From designing and installing cutting-edge irrigation systems to ensuring their lasting performance, we are here to turn your vision into reality. Come journey with us and ascend to new heights of outdoor efficiency and excellence!
            </p>
          </div>
        </div>
      </FullHeightContainer>

      {/* Certifications section */}
      <Certifications />

      {/* Our Services section */}
      <div className="w-full pt-6 pb-8 md:pt-8 md:pb-12 px-8 bg-[#1b281b] text-center">
        <h2 className="font-medium text-3xl mb-6">Our Services</h2>

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
                  <span className="pt-2 text-[1.75rem] italic font-semibold tracking-wider">{key}</span>
                  <p className="text-sm sm:text-base md:text-lg mt-1 leading-tight text-neutral-100">{value.blurb}</p>
                </div>
              </div>
            </div>
          </a>
        )}
      </div>

      {/* Our Process section */}
      <div className="flex flex-col items-center w-full pt-6 pb-8 md:pt-8 md:pb-12 px-8 text-black text-center">
        <h2 className="font-medium text-3xl mb-2">Our Process</h2>
        <p className="mx-5 md:mx-0 md:w-2/3 lg:w-1/2 lg:text-lg mb-8 leading-snug">
        We ensure that our work is tailored to your specific needs by following an <strong>industry-standard, modern approach to irrigation services</strong>. Just tell us what you’re looking for, and we’ll design and install an irrigation system that suits your needs!
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
      <div className="w-full flex flex-col items-center justify-start py-6 md:pt-8 md:pb-12 bg-[#1b281b] text-center">
        <h2 className="font-medium text-3xl">Areas We Service</h2>

        <div className="w-full h-60 sm:h-[30rem] my-5">
          <AreaMap />
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

      <div className="w-full mt-10 mb-6">
        <hr className="w-[90%] mx-auto border-gray-400" />
      </div>

      <div className="w-full flex flex-col items-center justify-center text-black leading-none">
        <h1 className="font-semibold text-2xl mb-2">Ascend Irrigation</h1>

        <div className="flex items-center justify-center mb-4">
          <a href="https://www.facebook.com/profile.php?id=100092322747572&mibextid=LQQJ4d" target="_blank">
            <Image
              src={fbIcon}
              alt=""
              width={35}
            />
          </a>
          <a href="https://www.instagram.com/ascend_landscaping/" target="_blank">
            <Image
              src={igIcon}
              alt=""
              width={55}
            />
          </a>
        </div>

        <span className="font-semibold text-lg">Business Hours</span>
        <span>Monday - Friday 7am-9pm</span>
        <span>Saturday & Sunday 8am-5pm</span>

      </div>
      <div className="mt-6 w-56 mx-auto text-black text-lg leading-none pb-12">
        <div className="flex items-center gap-2">
          <Image
            className="block h-4 w-4"
            src={locationIcon}
            alt=""
          />
          <span>813 E Washingston St<br />West Chicago, IL 60185</span>
        </div>

        <a href="tel:630-639-8089" className="mt-2 flex items-center gap-2">
          <Image
            className="block h-4 w-4"
            src={phoneIcon}
            alt=""
          />
          <span className="text-[#6EA750] underline text-lg">(630) 639-8089</span>
        </a>

        <a href="mailto:ascend.landscaping1@gmail.com" className="mt-2 flex items-center gap-2">
          <Image
            className="block h-4 w-4"
            src={emailIcon}
            alt=""
          />
          <span className="text-[#6EA750] underline">ascend.landscaping1@gmail.com</span>
        </a>
      </div>
    </main>
  )
}
