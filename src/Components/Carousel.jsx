import { Carousel } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "./Image";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-3xl overflow-hidden more-images md:h-[600px] md:w-[650px] text-black shadow-lg">
      <Image
        src="https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-10.JPG"
        alt="image 1"
        className={`object-cover w-full lg:w-[670px] sm:h-full lg:h-[600px] transform transition `}
      />
      <Image
        src="https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-11.JPG"
        alt="image 2"
        className={`object-cover sm:w-full sm:h-full lg:h-[600px] lg:w-[670px] transform transition `}
      />
      <Image
        src="https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-13.JPG"
        alt="image 3"
        className={`object-cover sm:w-full sm:h-full lg:h-[600px] lg:w-[670px] transform transition `}
      />
      <Image
        src="https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-14.JPG"
        alt="image 2"
        className={`object-cover sm:w-full sm:h-full lg:h-[600px] lg:w-[670px] transform transition `}
      />
      <Image
        src="https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-16.JPG"
        alt="image 3"
        className={`object-cover sm:w-full sm:h-full lg:h-[600px] lg:w-[670px] transform transition `}
      />
      <Image
        src="https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-17.JPG"
        alt="image 2"
        className={`object-cover sm:w-full sm:h-full lg:h-[600px] lg:w-[670px] transform transition `}
      />
      <Image
        src="https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-19.JPG"
        alt="image 3"
        className={`object-cover sm:w-full sm:h-full lg:h-[600px] lg:w-[670px] transform transition `}
      />
      <div className="more-image w-full lg:h-full h-[full] relative lg:w-full text-center flex  justify-center items-center">
        <Link
          to="/gallery"
          className="text-white translate-y-[200px] lg:translate-y-0 flex items-center gap-2 hover:scale-[1.2] absolute top-1/2 w-fit p-5 rounded-xl transition-all duration-300"
        >
          Show More <FaArrowRight className="text-lg" />
        </Link>
      </div>
    </Carousel>
  );
}
