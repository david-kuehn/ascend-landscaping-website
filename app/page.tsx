import Image from "next/image";
import phoneIcon from "../public/phone_icon.png";
import sampleBg from "../public/sample-bg.jpeg";
import ascendLogo from "../public/ascend-logo.png";
import Carousel from "./components/Carousel";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-white w-full p-4 flex items-center justify-center z-10">
          <div className="absolute left-5 md:left-10 text-black font-serif text-2xl">
            <a href="tel:630-639-8089">
              <span className="hidden md:block">(630) 639-8089</span>

              <Image
                className="block md:hidden h-10 w-10"
                src={phoneIcon}
                alt=""
              />
            </a>
          </div>
          <div className="font-serif text-black flex flex-col items-center justify-center">
            <span className="font-semibold text-4xl">ASCEND</span>
            <span className="text-lg leading-none">Landscaping</span>
          </div>
        </nav>

        <div
          className="flex-1 flex"
          style={{
            backgroundImage: `url(${sampleBg.src})`,
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
              <span>🌳 Landscaping</span>
              <span>🧱 Hardscaping</span>
              <span>💡 Lighting</span>
              <span>💧 Water Features</span>
            </div>

            <span className="font-serif font-medium text-3xl">(630) 639-8089</span>

            <a href="tel:630-639-8089">
              <div
                className="uppercase font-serif font-bold text-2xl py-3 px-5 rounded-full bg-[#6EA750] mt-7 hover:scale-110 transition-all drop-shadow-xl"
              >
                Call us now!
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white w-full flex flex-col items-center justify-center py-10 sm:py-16">
        <h1 className="font-bold font-serif text-black text-center text-3xl sm:text-4xl w-3/4 sm:w-1/2 max-w-[35rem]">Bringing beautiful landscape design to your Chicagoland home!</h1>
        <h2 className="font-serif text-black text-xl text-center w-3/4 sm:w-3/5 max-w-[50rem] mt-4 mb-9 sm:my-9">Want to bring new life to your outdoor living spaces? At Ascend Landscaping, we make our clients’ exterior dreams come true with a combination of visually appealing design, superior material selection, and top-notch customer service. 
For your next outdoor project, go with Ascend!</h2>

        <div className="w-10/12 sm:w-4/5 lg:w-3/5 xl:w-1/2">
          <Carousel />
        </div>
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
