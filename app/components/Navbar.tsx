import Image from "next/image";
import phoneIcon from "../../public/phone_icon.png";
import ascendLogo from "../../public/ascend-logo-v3.png";

export default function Navbar(props: { currentPage: number }) {
  return (
    <nav className="fixed top-0 drop-shadow-md bg-white text-black font-serif w-full py-3 z-10">
      <div className="mr-3 flex items-center justify-center">
        <a href="/">
          <Image
            src={ascendLogo}
            alt=""
            className="h-16"
            style={{objectFit: "contain"}}
          />
        </a>

        <div className="absolute right-5 md:right-10 text-black font-serif text-2xl">
          <a href="tel:630-639-8089">
            <span className="hidden md:block">(630) 639-8089</span>

            <Image
              className="block md:hidden h-10 w-10"
              src={phoneIcon}
              alt=""
            />
          </a>
        </div>
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
