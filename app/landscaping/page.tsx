import FullHeightContainer from "../components/FullHeightContainer";
import Navbar from "../components/Navbar";
import landscapingHeroImage from "../../public/carousel-images/carousel-00007.png";
import treesHillsGraphic from "../../public/trees-hills-graphic.png";
import CallNowButton from "../components/CallNowButton";

export default function Landscaping() {
  return(
    <main>
      <FullHeightContainer>
        <Navbar currentPage={1} />

        <div
          className="flex-1 flex"
          style={{
            backgroundImage: `url(${landscapingHeroImage.src})`,
            backgroundSize: "cover",
            backgroundPositionY: "center",
          }}
        />

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

        <div className="mt-5">
          <p className="font-semibold text-left mb-2">Services that we provide include:</p>
          <ul className="list-disc text-left">
            <li>Lawn Care 🏞</li>
            <li>Mulching 🟤</li>
            <li>Flower/Plant Installation & Maintenance 🌷</li>
            <li>Tree Care & Installation/Removal 🌳</li>
          </ul>
        </div>
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
