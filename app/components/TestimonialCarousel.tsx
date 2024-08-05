"use client"
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import fiveStarsImg from "../../public/five-stars.png";
import Image from "next/image";
import arrowImg from "../../public/arrow.svg";
import { useCallback } from "react";

const testimonials = [
	{
		name: "Bill Burn",
		blurb: "Armando and his team were amazing. Ascend was able to help quickly provide a quote, communicate exactly what would be happening, and ensure that the entire process was smooth from quote to completion. Their attention to detail is fantastic. We will absolutely be using them again. 5/5",
		googleLink: "https://g.co/kgs/uzdcj8y",
	},
	{
		name: "Parth Nanavati",
		blurb: "Armando and his team were fantastic. High quality work and great communication. They did our landscaping and our sprinkler system. Highly recommend him and his team to anyone and everyone. They were very efficient and made sure everything looked/worked perfectly.",
		googleLink: "https://g.co/kgs/sanLD7u",
	},
	{
    name: "Tracy Blasiak",
    blurb: "We have been looking forward to working with Armando for over a year. He has been very patient and attentive in helping creating our vision. His realistic 3D imaging helped us visualize exactly what we wanted (even if it changed 5x). His customer service is truly 10/10. His crew was respectful and delivered the project on time and as expected.",
    googleLink: "https://g.co/kgs/8VhyCki"
	},
	{
		name: "Chris Hupke",
		blurb: "Armando & the team were great to work with…extremely knowledgeable and efficient. All questions were answered and the new system was explained in detail. I would 100% recommend!",
		googleLink: "https://g.co/kgs/sMJvWLy",
	},
	{
		name: "David Pineda González",
		blurb: "I recently hired Ascend in West Chicago for the installation of a sprinkler system in my garden, and I couldn't be more satisfied. From the first contact, Armando and his team demonstrated professionalism and deep knowledge of their product. The installation was quick and seamless, and the system works perfectly, keeping my lawn and plants in excellent condition. Additionally, they offered exceptional post-sale service, ensuring everything was in order and answering all my questions. I highly recommend Ascend for any sprinkler system needs!",
		googleLink: "https://g.co/kgs/PzEYFjS",
	},
	{
		name: "Brian Selvaggio",
		blurb: "Great service and fixed my irrigation issues right away. Had a power outage that reset my sprinkler times and they came out and fixed it at no charge because they had previously worked on an issue.",
		googleLink: "https://g.co/kgs/kv6X3ac",
	},
	{
		name: "Tim Downey",
		blurb: "Armando and his team responded immediately on two separate occasions to my request and repaired our irrigation system on the days I called. He and his team are personable, efficient and provide quality work at competitive pricing.",
		googleLink: "https://g.co/kgs/yJjC2Ww",
	},
	{
		name: "Brian Stephans",
		blurb: "Armando was just here to replace my backflow. He has been awesome to work with! I first met him while trying to repair my Febco 825ya (I'm a DIYer). He was very responsive helping me find repair parts, etc. I couldn't get the old Febco to quit leaking. Armando consulted with me and just finished installing a new Wilkins 375. Such a great experience and I highly recommend this business. A pleasure to work with and respectful/thoughtful throughout. Thanks again!",
		googleLink: "https://g.co/kgs/y24VRB4",
	},
	{
		name: "Jasmine Khilnani",
		blurb: "We couldn't be more pleased with the work Armando and his team did for our sprinkler system and lighting! From start to finish, their professionalism and attention to detail were exceptional. They completed the project efficiently and ensured everything was perfect. Our lawn has never looked better, and the lights add a stunning touch. Highly recommend Ascend Irrigation for their outstanding service!",
		googleLink: "https://g.co/kgs/Nd5e59j",
	},
	{
		name: "Kunal Patel",
		blurb: "Armando and David from Ascend Irriscape did an outstanding job in fixing our existing irrigation system. They were professional, attentive, and delivered high-quality work on time. Highly recommend them for any landscaping needs!",
		googleLink: "https://g.co/kgs/AgNkGct",
	},
	{
		name: "James Hensley",
		blurb: "We called Ascend to come out and take a look at our 30 year old sprinkler system, that hadn't been used in 10 years. They were super clear and transparent with every piece of the system that needed repair, offering options and suggestions along the way. In the end, they spent all day fixing and improving the system, which includes a new wifi Controller we can run from our phones. Very pleased with the entire team, their professionalism, and the work.",
		googleLink: "https://g.co/kgs/4oFu2Ly",
	},
	{
		name: "Libby & Tommy Roy",
		blurb: "If you have an irrigation system at your home, we highly recommend Armando and his team at Ascend! They deliver high quality work and provide great communication and flexibility to take care of our sprinkler system.",
		googleLink: "https://g.co/kgs/WnKfpAs",
	},
	{
		name: "Angela Swanson",
		blurb: "Armando and his team were amazing! We had them create brick paver areas for our garbage cans to sit on. Not your basic slab.. they actually look so pretty and appealing! Armando got me on his schedule much faster than I was expecting and we are so happy with the end result. They are perfectionists and made sure that our paver areas were flawless! And to add, Armando was just a pleasure speaking with every time! Great energy and great customer service! 10/10!!",
		googleLink: "https://g.co/kgs/PABYVT9",
	},
	{
		name: "Casey Bouton",
		blurb: "Seriously the sweetest, kindest gentleman ever! Super responsive. So helpful. Great to work with. He installed our fountain, and it’s amazing. Highly recommend anytime.",
		googleLink: "https://g.co/kgs/EyaYhg9",
	},
	{
		name: "Anam A",
		blurb: "Armando and his crew were very professional in fixing my parents existing underground sprinkler system. Once they were complete, Armando took the time to show us how to use the sprinkler app and answered any questions that we may have. He was professional and courteous, I would highly recommend him if you're looking for any irrigation work to be done!",
		googleLink: "https://g.co/kgs/hESEFfm",
	},
	{
		name: "Meenu Raja",
		blurb: "Excellent experience and highly recommend. Armando is knowledgeable, thorough, professional and fairly priced. We will continue to use Ascend for our sprinkler maintenance from now on.",
		googleLink: "https://g.co/kgs/jZVg1QW",
	},
	{
		name: "David Whiteman",
		blurb: "Armando did an excellent job from start to finish. Showed up on time. Quickly diagnosed the problem and told me the steps needed to fix my in-ground sprinkler system. Again showed up on time to do the work at the price quoted. Armando is very professional, knowledgeable and courteous. I would use him again and would highly recommend him to all.",
		googleLink: "https://g.co/kgs/cAXVyo2",
	},
	{
		name: "Tom Kost",
		blurb: "Armando did a great job turning on my irrigation system! He was reasonably priced, was prompt on his arrival and kept great communication with me! I’d recommend his company to anyone needing their irrigation system turned on in the Spring.",
		googleLink: "https://g.co/kgs/pZd96DE",
	},
	{
		name: "Jorge Menchaca",
		blurb: "I highly recommend Ascend Irrigation and hardscape. Armando and his crew did an outstanding job installing our pavers and landscaping.",
		googleLink: "https://g.co/kgs/v2xY9hM",
	},
	{
		name: "Julie Fiedler",
		blurb: "Ascend is awesome. Armando and his team are extremely hard workers. They really care and want the customer to be happy. Very hard to find a company that has that type of work ethic. The stone work they did turned out amazing. So happy with it! Trenched and then mulched all the areas in my yard and it looks great. This is the second time I have hired them. Last year they fixed 2 gutter drainage major issues I had. No more problems thanks to Ascend Irrigation and Hardscape. Definitely will hire them again.",
		googleLink: "https://g.co/kgs/nnvxCvF",
	},
	{
		name: "Russ Fouts",
		blurb: "Armando is the best. He does what he says he will do and does it when he says he will do it! Plus he’s a really nice guy and great to deal with. I would highly recommend Ascend for all your landscaping needs!",
		googleLink: "https://g.co/kgs/sAhb4bP",
	},
	{
		name: "Deecee Chung",
		blurb: "Armando and his team did an absolutely amazing job for our company's landscaping. Couldn’t recommend a better company for our landscaping needs!",
		googleLink: "https://g.co/kgs/TgXKbX5",
	},
	{
		name: "Mark Schmit",
		blurb: "Armando and his team are awesome. I highly recommend Ascend. Armando will make sure you’re happy with their work as the job progresses. And they do things the right way. No shortcuts. He also had a few suggestions and creative input that made the retaining wall fit with existing landscaping. So happy with their work, that he will be back for other projects.",
		googleLink: "https://g.co/kgs/ktih4B2",
	},
	{
		name: "Huriel Valdez",
		blurb: "I recently had my sprinkler system activated and checked to make sure it’s functioning the way it’s supposed to. Armando did a fantastic job ensuring that everything was working efficiently. He even replaced 5 leaking and broken sprinkler heads, which not only saved me money on my water bill, but also prevented my lawn from getting swamped! I would highly recommend Ascend!",
		googleLink: "https://g.co/kgs/nzocpZZ",
	},
	{
		name: "Giovanni Cuenca-Ramos",
		blurb: "Armando did a fantastic job at my house! He provided awesome customer service along with the required maintenance my sprinkler system needed! We plan on using his professional services later on in the future.",
		googleLink: "https://g.co/kgs/S7fmHjC",
	},
	{
		name: "Brandon Magana",
		blurb: "I recently hired Ascend to service my irrigation system and repair several leaks and broken sprinkler heads I had. I must say, their team was absolutely awesome! They were professional, efficient, and did an excellent job. I am very satisfied with the work they did and would highly recommend them to anyone in need of irrigation services. Thank you Armando, for your outstanding service!",
		googleLink: "https://g.co/kgs/LeZwq7k",
	},
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
