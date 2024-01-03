import Image from "next/image";
import phoneIcon from "../../public/phone_icon.png";

export default function Navbar(props: { currentPage: number }) {
  return (
    <nav className="bg-white text-black font-serif w-full py-3 z-10">
      <div className="w-full flex items-center justify-center">
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
        <a href="/">
          <div className="font-serif text-black flex flex-col items-center justify-center hover:scale-105 transition-all">
              <span className="font-semibold text-4xl">ASCEND</span>
              <span className="text-xl font-medium leading-none">Irrigation</span>
          </div>
        </a>

      </div>

      {/*
      <div className="w-full flex items-center justify-center gap-10 pt-4 text-lg underline-offset-2 text-center">
        <div className={`${props.currentPage == 2 ? "font-semibold" : ""} w-48 hover:scale-105 transition-all underline`}><a href="/hardscaping">Hardscaping</a></div>
        <div className={`${props.currentPage == 1 ? "font-semibold" : ""} w-48 hover:scale-105 transition-all underline leading-none`}><a href="/landscaping">Landscaping Services</a></div>
        <div className={`${props.currentPage == 3 ? "font-semibold" : ""} w-48 hover:scale-105 transition-all underline`}><a href="/lighting">Lighting</a></div>
      </div>
      */}
    </nav>
  )
}
