import { Carousel } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export function CarouselDefault({ scale = 125, duration = 500 }) {
  return (
    <Carousel className="rounded-xl overflow-hidden bg-primary-1 lg:h-[700px] lg:w-[80%] text-black shadow-lg">
      <img
        src="/commmissioned-portrait-10.JPG"
        alt="image 1"
        className={`object-cover w-full sm:h-full lg:h-[800px] transform transition duration-${duration} hover:scale-${scale}`}
      />
      <img
        src="/commmissioned-portrait-11.JPG"
        alt="image 2"
        className={`object-cover sm:w-full sm:h-full lg:h-[800px] transform transition duration-${duration} hover:scale-${scale}`}
      />
      <img
        src="/commmissioned-portrait-13.JPG"
        alt="image 3"
        className={`object-cover sm:w-full sm:h-full lg:h-[800px] transform transition duration-${duration} hover:scale-${scale}`}
      />
      <img
        src="/commmissioned-portrait-14.JPG"
        alt="image 2"
        className={`object-cover sm:w-full sm:h-full lg:h-[800px] transform transition duration-${duration} hover:scale-${scale}`}
      />
      <img
        src="/commmissioned-portrait-16.JPG"
        alt="image 3"
        className={`object-cover sm:w-full sm:h-full lg:h-[800px] transform transition duration-${duration} hover:scale-${scale}`}
      />
      <img
        src="/commmissioned-portrait-17.JPG"
        alt="image 2"
        className={`object-cover sm:w-full sm:h-full lg:h-[800px] transform transition duration-${duration} hover:scale-${scale}`}
      />
      <img
        src="/commmissioned-portrait-19.JPG"
        alt="image 3"
        className={`object-cover sm:w-full sm:h-full lg:h-[800px] transform transition duration-${duration} hover:scale-${scale}`}
      />
      <div className="w-full sm:h-[300px] relative lg:w-full text-center flex  justify-center items-center ">
        <Link
          to="/gallery"
          className="text-white flex items-center gap-2 hover:gap-3 hover:bg-primary-2 absolute top-1/2 w-fit p-5 rounded-xl"
        >
          Show More <FaArrowRight className="text-lg" />
        </Link>
      </div>
    </Carousel>
  );
}
