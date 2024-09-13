import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProfileCard from "../ProfileCard";
import { CarouselDefault } from "../Carousel";
import { FaMessage } from "react-icons/fa6";
import { FaBug } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import ImageZ from "../ImageZ";
import Image from "../Image";
import SmoothScroll from "../SmoothScroll";

export default function Home() {
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);
  return (
    <SmoothScroll>
      <main className="relative sm:-top-[100px] lg:-top-[120px]">
        <header className="header-container sm:pt-[200px] sm:pb-[50px] lg:pt-[250px] sm:px-5 lg:px-10 sm:text-center text-white ">
          <div className="flex sm:flex-col gap-14 lg:flex-row lg:items-start">
            <div className="flex flex-col sm:gap-14 lg:gap-10 sm:justify-center sm:text-center lg:text-start lg:items-start sm:items-center">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                className="  flex flex-col gap-10"
              >
                <h1 className=" sm:text-4xl font-semibold">
                  Discover the Artistry of Pencil Masterpieces
                </h1>
                <p className="sm:text-xl lg:text-2xl">
                  Immerse yourself in the world of detailed and exquisite pencil
                  art.
                </p>
              </motion.div>
              <div className=" flex gap-5 sm:flex-col lg:flex-row  sm:justify-center ">
                <motion.button
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-lg bg-slate-700 w-fit p-3 text-white hover:bg-transparent bg-primary-1 text-lg"
                >
                  Explore Our Gallery
                </motion.button>
                <Link to="/about">
                  <motion.button
                    variants={fadeIn("up", 0.7)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-fit p-3 flex items-center gap-2 text-lg hover:bg-[#313225] hover:gap-3 rounded-lg "
                  >
                    Meet Our Artists <FaArrowRight className="text-lg" />
                  </motion.button>
                </Link>
              </div>
            </div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              className=""
            >
              <Image
                src="/public/satisfied-costumer-2.jpg"
                alt="Header-src"
                className="rounded-2xl lg:h-[600px] object-contain sm:w-full lg:w-[45vw]"
              />
            </motion.div>
          </div>
        </header>
        <section className="sm:text-center sm:py-[50px] sm:px-1 md:px-10 lg:px-10 flex sm:flex-col gap-20 lg:py-[100px]">
          <div className="px-5 flex sm:flex-col gap-10">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 className="sm:text-3xl lg:text-4xl font-semibold py-5">
                Experience the Finesse of Pencil Art
              </h2>
            </motion.div>
            <div className="flex sm:flex-col lg:flex-row gap-5">
              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
              >
                <ImageZ
                  src="/public/commmissioned-portrait-19.JPG"
                  description="Portait"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
              >
                <ImageZ
                  src="/public/realistic-eye.JPG"
                  description="Abstract Art"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
              >
                <ImageZ
                  src="/public/commmissioned-portrait-17.JPG"
                  description="Animal Portait"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex sm:flex-col-reverse gap-10">
            <div>
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Image
                  src="/public/Akabenezer.jpg"
                  alt="community-image"
                  className="rouned-lg sm:w-full"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Image
                  src="/public/Inaki-williams.jpg"
                  alt="community-image"
                  className="rouned-lg sm:w-full"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Image
                  src="/public/satisfied-costumer-4.jpg"
                  alt="community-image"
                  className="rouned-lg sm:w-full"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Image
                  src="/public/satisfied-costumer-2.jpg"
                  alt="community-image"
                  className="rouned-lg sm:w-full"
                />
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="sm:px-4 flex flex-col gap-10 text-center items-center"
            >
              <h2 className="text-4xl ">Join Our Satisfied Customers</h2>
              <p className="text-gray-600">
                Customer Satisfaction is Our Utmost Priority. <br /> Check Out
                Our Satisfied Customers. <br /> Join Our Community of Satisfied
                Customers.
              </p>
              <Link to="/community">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-fit bg-primary-1 text-center p-3 rounded-xl  hover:bg-primary-2 text-white"
                >
                  Join The Community
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="sm:px-5 lg:px-10 py-[50px]">
          <div className="flex flex-col gap-10 sm:text-center">
            <div className="flex flex-col gap-10">
              <h3 className="text-4xl ">Meet Our Talented Artist</h3>
              <p className="text-gray-500 text-lg">
                Get to know the creative mind behind our stunning pencil
                artworks
              </p>
            </div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="sm:px-5"
            >
              <Link to="/social-media">
                <ProfileCard
                  name="Emmanuel"
                  title="Artist"
                  coverImage="/public/Artist@work.jpg"
                  displayImage="/public/smartist.JPG"
                />
              </Link>
            </motion.div>
          </div>
        </section>
        <section className="sm:px-5 lg:px-10 py-[50px]">
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-10 text-center items-center ">
              <h3 className="text-4xl">Own a Masterpiece</h3>
              <h4>
                Don't miss the chance to own a piece of exquisite pencil art.
              </h4>
              <p>
                Explore our collection or commission a custom piece tailored to
                your own vision
              </p>
              <Link to="/gallery">
                <button className="w-fit bg-primary-1 text-center p-3 rounded-xl text-white hover:bg-primary-2 flex items-center gap-2 hover:gap-3">
                  Show More <FaArrowRight className="text-lg" />
                </button>
              </Link>
            </div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="flex justify-center"
            >
              <CarouselDefault />
            </motion.div>
          </motion.div>
        </section>
        <section className="sm:px-5 sm:py-[100px] lg:px-10">
          <div className="flex flex-col gap-16 ">
            <div className="gap-5 flex flex-col">
              <h3 className="text-4xl">Get in Touch</h3>
              <p>
                Reach out to us for inquiries, custom artwork, or any other
                questions.
              </p>
            </div>
            <div className="flex sm:flex-col lg:flex-row gap-10 lg:items-center  lg:justify-center">
              <div className="sm:flex-row flex lg:flex-col gap-5 lg:items-center lg:justify-center relative">
                <div className="relative top-2 bg-primary-1 w-fit h-fit p-4 rounded-lg text-white">
                  <FaMessage />
                </div>
                <div className="flex flex-col lg:text-center sm:items-start lg:items-center gap-5">
                  <h4 className="text-2xl">Get Assistance</h4>
                  <p>Get Assistance with your orders or any technical issues</p>
                  <Link to="/contact">
                    <button className="text-md flex gap-2 hover:gap-3 bg-primary-1 hover:bg-primary-2 w-fit p-3 rounded-xl text-white items-center">
                      Start a Conversation <FaArrowRight className="text-sm" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="sm:flex-row flex lg:flex-col gap-5 lg:items-center lg:justify-center relative">
                <div className="relative top-2 bg-primary-1 w-fit h-fit p-4 rounded-lg text-white">
                  <FaBug />
                </div>
                <div className="flex flex-col lg:text-center sm:items-start lg:items-center gap-5">
                  <h4 className="text-2xl">Get Assistance</h4>
                  <p>Get Assistance with your orders or any technical issues</p>
                  <Link to="/contact">
                    <button className="text-md flex gap-2 hover:gap-3 bg-primary-1 hover:bg-primary-2 w-fit p-3 rounded-xl text-white items-center">
                      Get Support <FaArrowRight className="text-sm" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="sm:flex-row flex lg:flex-col gap-5 lg:items-center lg:justify-center relative">
                <div className="relative top-2 bg-primary-1 w-fit h-fit p-4 rounded-lg text-white">
                  <RiComputerFill />
                </div>
                <div className="flex flex-col lg:text-center lg:items-center sm:items-start gap-5">
                  <h4 className="text-2xl">Collaborate</h4>
                  <p>Collaborate with us on artistic projects or events </p>
                  <Link to="/contact">
                    <button className="text-md flex gap-2 bg-primary-1 hover:bg-primary-2 hover:gap-3 w-fit p-3 rounded-xl text-white items-center">
                      Contact Us <FaArrowRight className="text-sm" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
