"use client"
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import fiveStarsImg from "../../public/five-stars.png";
import Image from "next/image";
import arrowImg from "../../public/arrow.svg";
import { useCallback } from "react";

const testimonials = [
  {
    name: "Paula Perconti",
    blurb: "Ascend Landscaping did landscaping beds that made our home look amazing! Outstanding professionals that placed layers of crushed gravel and bricks to trim our beds and give our home a new look. This hard-working team were on-time, professional and knowledgeable. I highly recommend their services to anyone looking for a beautiful outdoor living space.Ascend does great landscaping work at a fair price! They were attentive to every detail of the project. 10/10!",
		googleLink: "https://g.co/kgs/bKgtQDm",
  },
  {
    name: "Jeff Chalmere",
    blurb: "Armando put mulch down, edged our beds and regraded one of the beds away from the house. He did a great job and finished in 1 day. We needed 18 yards of mulch and 300 feet of edging. He promptly responded to texts and phone calls which is 75% of the satisfaction. I would highly recommend him!",
		googleLink: "https://g.co/kgs/bs6aDqP",
  },
	{
		name: "Melanie Barajas",
		blurb: "Ascend Landscaping is awesome.  They did an amazing job on our house. We are very happy with their work. They are professional, quick, and most of all keep in contact throughout the whole job.  They make sure it’s the way you want it.  I highly recommend Ascend Landscaping.",
		googleLink: "https://g.co/kgs/8CCjVjC",
	},
	{
		name: "Alex Bush",
		blurb: "I couldn’t be happier with ascend! They communicated throughout the project and made this easy for me! If I could put 7 stars I would! Great company, amazing owner, great work, thank you Armando!",
		googleLink: "https://g.co/kgs/n2KZ9MC",
	},
	{
		name: "Ahlam Ali",
		blurb: "Armando and his guys are fantastic and I highly recommend him. He is quick to respond, has great attention to detail, timely and professional. He has done extraordinary job at my house as well as my mother's. I highly recommend you chose Ascend Landscaping to elevate your yard.",
		googleLink: "https://g.co/kgs/AwTgxgt",
	},
	{
		name: "Jennifer Bertani",
		blurb: "Ascend is amazing! We hired them to define our landscaping beds and add lots of mulch. Armando is super responsive, listens to what you want, makes recommendations, and he and his crew are prompt and work hard to make your landscaping beautiful. On top of that, they’re super nice.",
		googleLink: "https://g.co/kgs/zE7Nvom",
	},
	{
		name: "Britzy Salinas",
		blurb: "These guys were excellent to work with! Their hardscape and landscape designs were wonderful. I would highly recommend them.",
		googleLink: "https://g.co/kgs/ifmQvgv",
	},
	{
		name: "Paula Mcnutt",
		blurb: "Armando and Beto did a very professional job of installing a retaining wall next to my patio.  To provide good drainage, they laid down layers of crushed gravel and sand, and ran a tube from the downspout under the lawn.  To top it off, they put a bullnose coping and mitered the corners perfectly!  Armando is very easy to communicate with, and I highly recommend Ascend for all your landscaping needs!",
		googleLink: "https://g.co/kgs/Fe5MKAU",
	},
	{
		name: "Jack Micka",
		blurb: "These guys do a great job! They installed a new patio off the back of my house in only 2 days. They got me scheduled within a couple days and did an incredible job. Highly recommend these guys.",
		googleLink: "https://g.co/kgs/KwWNduU",
	},
]

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
          { testimonials.map((testimonial) => 
            <div className="embla__slide" key={testimonial.name}>
              <div className="px-12 sm:px-32 md:px-60 lg:px-96 flex flex-col items-center h-72">
                <Image
                  src={fiveStarsImg}
                  alt=""
                  height={30}
                />
                <span className="font-semibold text-xl mt-4 mb-2">{testimonial.name}</span>
								<div className="w-[90%] pb-3 overflow-y-scroll overflow-x-hidden">
									<p className="mb-1">{testimonial.blurb}</p>
									<a href={testimonial.googleLink} target="_blank" className="text-ascendblue underline font-bold">View on Google</a>
								</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute translate-y-[-250px] w-full flex justify-between px-6 sm:px-16 md:px-40 lg:px-[13rem]">
        <button className="embla__prev left-0 top-0" onClick={scrollPrev} aria-label="Slide Carousel Left">
          <Image
            src={arrowImg}
            alt=""
            className="w-5 sm:w-8"
          />
        </button>
        <button className="embla__next rotate-180" onClick={scrollNext} aria-label="Slide Carousel Right">
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
