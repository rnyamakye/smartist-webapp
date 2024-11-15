import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import ImageZ from "../ImageZ";

const CustomerImages = ({ title, src }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.1 }}
      className="mb-8"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        <ImageZ src={src} className="w-full h-full sm:h-72 object-cover" />
        <div className=" absolute bottom-2 ">
          <h2 className="text-xl sm:text-2xl text-white font-medium mb-2">
            {title}
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const customers = [
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/satisfied-costumer-2.jpg",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/satisfied-costumer-3.jpg",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/satisfied-costumer-5.jpg",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/satisfied-costumer-6.WEBP",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/satisfied-costumer-4.jpg",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/Artist-holding-commissioned-portrait-1.JPG",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/satisfied-costumer-6.jpg",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/Akabenezer.jpg",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/Inaki-williams.jpg",
    },
  ];

  return (
    <>
      <main>
        <div className=" relative -top-[100px] ">
          <header className="header-container py-[200px] lg:px-10 sm:px-5">
            <div className="text-center sm:px-5 flex flex-col gap-5">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl font-semibold md:font-bold mb-8 text-center leading-loose text-white"
              >
                Customer Satisfaction is Our Top Priority
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl text-gray-300"
              >
                You get your portrait exactly how you want it
              </motion.p>
            </div>
          </header>
          <motion.img
            // initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5 }}
            src="/PngItem_686205.png"
            className="sticky h-[500px] top-10 w-[500px] right-[200px] opacity-30 -z-[20]"
          />
          <section
            className="pb-[100px] relative -top-[300px] lg:px-10 
          sm:px-5"
          >
            <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 sm:px-5">
              {customers.map((artwork, index) => (
                <CustomerImages key={index} {...artwork} />
              ))}
            </div>
          </section>
          <section className="text-center relative lg:pb-[50px] md:-top-[250px] -top-[200px]">
            <img
              src="/—Pngtree—stylish ripped torn paper texture_8797803.png"
              className="absolute -top-[400px] -z-10 size-[900px] object-cover lg:right-[180px]"
            />
            <motion.h1
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="text-3xl sm:text-5xl font-semibold md:font-bold mb-8 text-center text-black"
            >
              What are you waiting for
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="text-center"
            >
              <Link
                to="/contact"
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-5 text-center justify-center text-xl text-black"
              >
                Commission yours now <FaArrowRight className="text-lg" />
              </Link>
            </motion.p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Community;
