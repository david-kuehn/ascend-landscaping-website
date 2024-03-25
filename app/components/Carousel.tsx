"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";
import arrowImg from "../../public/arrow.svg";
import { useCallback } from "react";
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Carousel({ carouselImages }: { carouselImages: StaticImageData[] }) {

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
          { carouselImages.map((carouselImage: StaticImageData) => 
            <div key={carouselImage.src} className="embla__slide h-[18rem] sm:h-[23rem] md:h-[30rem]">
              <Image
                src={carouselImage}
                alt=""
                className="w-full h-[18rem] sm:h-[23rem] md:h-[30rem]"
              />
            </div>
          )}
        </div>
      </div>

      <div className="absolute w-10/12 sm:w-4/5 lg:w-3/5 xl:w-1/2 px-5 flex items-center justify-between">
        <button className="embla__prev left-0 top-0" onClick={scrollPrev} name="Slide Carousel Left">
          <Image
            src={arrowImg}
            alt=""
            className="w-5 sm:w-8"
          />
        </button>
        <button className="embla__next rotate-180" onClick={scrollNext} name="Slide Carousel Right">
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
