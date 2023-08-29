"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";
import arrowImg from "../../public/arrow.svg";
import { useCallback } from "react";
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

import carouselImage1 from "../../public/carousel-images/carousel-00001.png";
import carouselImage2 from "../../public/carousel-images/carousel-00002.png";
import carouselImage3 from "../../public/carousel-images/carousel-00003.png";
import carouselImage4 from "../../public/carousel-images/carousel-00004.png";
import carouselImage5 from "../../public/carousel-images/carousel-00005.png";
import carouselImage6 from "../../public/carousel-images/carousel-00006.png";
import carouselImage7 from "../../public/carousel-images/carousel-00007.png";
import carouselImage8 from "../../public/carousel-images/carousel-00008.png";
import carouselImage9 from "../../public/carousel-images/carousel-00009.png";
import carouselImage10 from "../../public/carousel-images/carousel-00010.png";
import carouselImage11 from "../../public/carousel-images/carousel-00011.png";
import carouselImage12 from "../../public/carousel-images/carousel-00012.png";
import carouselImage13 from "../../public/carousel-images/carousel-00013.png";
import carouselImage14 from "../../public/carousel-images/carousel-00014.png";
import carouselImage15 from "../../public/carousel-images/carousel-00015.png";
import carouselImage16 from "../../public/carousel-images/carousel-00016.png";
import carouselImage17 from "../../public/carousel-images/carousel-00017.png";
import carouselImage18 from "../../public/carousel-images/carousel-00018.png";

const carouselImages: StaticImageData[] = [carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5, carouselImage6, carouselImage7, carouselImage8, 
  carouselImage9, carouselImage10, carouselImage11, carouselImage12, carouselImage13, carouselImage14, carouselImage15, carouselImage16, carouselImage17, carouselImage18]

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
