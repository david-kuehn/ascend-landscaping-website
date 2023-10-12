"use client"
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import fiveStarsImg from "../../public/five-stars.png";
import Image from "next/image";
import arrowImg from "../../public/arrow.svg";
import { useCallback } from "react";

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 10000, stopOnMouseEnter: true, })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* Testimonials */}
          <div className="embla__slide">
            <div className="px-16 flex flex-col items-center">
              <Image
                src={fiveStarsImg}
                alt=""
                height={30}
              />
              <span className="font-semibold text-xl mt-4">David K.</span>
              <p>Ascend does great landscaping work at a fair price! They were attentive to every detail of the project. 10/10!</p>
            </div>
          </div>

          <div className="embla__slide">
            <div className="px-16 flex flex-col items-center">
              <Image
                src={fiveStarsImg}
                alt=""
                height={30}
              />
              <span className="font-semibold text-xl mt-4">Henry B.</span>
              <p>Ascend does great landscaping work at a fair price! They were attentive to every detail of the project. 10/10!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute translate-y-[-90px] w-full flex justify-between px-6">
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
  )
}
