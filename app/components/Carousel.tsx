"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";
import carouselOne from "../../public/sample-bg.jpeg";
import carouselTwo from "../../public/sample-carousel-1.webp";
import carouselThree from "../../public/sample-carousel-2.jpeg";
import arrowImg from "../../public/arrow.svg";
import { useCallback } from "react";

export default function Carousel() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 10000, stopOnMouseEnter: true, })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla text-black w-full flex items-center">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image
              src={carouselOne}
              alt=""
              className="w-full"
            />
          </div>

          <div className="embla__slide">
            <Image
              src={carouselTwo}
              alt=""
              className="w-full"
            />
          </div>

          <div className="embla__slide">
            <Image
              src={carouselThree}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="absolute w-10/12 sm:w-4/5 lg:w-3/5 xl:w-1/2 px-5 flex items-center justify-between">
        <button className="embla__prev left-0 top-0" onClick={scrollPrev}>
          <Image
            src={arrowImg}
            alt=""
            className="w-5 sm:w-8"
          />
        </button>
        <button className="embla__next rotate-180" onClick={scrollNext}>
          <Image
            src={arrowImg}
            alt=""
            className="w-5 sm:w-8"
          />
        </button>
      </div>
    </div>
  );
}
