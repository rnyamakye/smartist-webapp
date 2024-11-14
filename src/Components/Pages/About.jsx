import { useEffect } from "react";
import { FaBrush } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { IoMdColorPalette } from "react-icons/io";
import AchievementCard from "../AchievementCard";
import Image from "../Image";
import ImageZ from "../ImageZ";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import FAQSection from "../FAQSection";
import { FaMessage } from "react-icons/fa6";
import { FaBug } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="relative sm:-top-[100px] flex flex-col lg:-top-[120px]">
        <header className="header-container">
          <div className=" flex justify-center">
            <div className=" sm:text-white sm:pt-[200px] sm:pb-[50px] lg:py-[250px] md:py-[200px] flex flex-col gap-10 max-w-[90%]">
              <motion.div
                variants={fadeIn("up", 0)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                className="sm:text-center flex flex-col gap-10"
              >
                <h1 className="sm:text-4xl lg:text-5xl sm:text-center font-semibold leading-snug">
                  Meet the Artist behind Smartist
                </h1>
                <p className="sm:sm:text-lg">
                  Discover the journey and achievements of our talented pencil
                  artist.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                className="sm:text-center flex flex-col gap-10 md:hidden lg:hidden sm:block"
              >
                <Image src="https://d2oe4z990jupbo.cloudfront.net/Self-portrait.JPG" />
              </motion.div>
            </div>
          </div>
        </header>
        <section className="sm:px-5 lg:px-10 sm:py-[50px] lg:pt-[50px] relative flex justify-center">
          <div className="about-hero-container sm:flex-col grid sm:gap-16 max-w-[90%] lg:gap-5">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="container-1 flex flex-col gap-5 "
            >
              <p className="text-[#828b21] lg:font-bold sm:text-lg">
                Artistic Beginnings
              </p>
              <h2 className="sm:text-3xl lg:text-4xl font-medium">
                Creative Workflow
              </h2>
              <p className="sm:text-xl sm:text-black/60 sm:text-pretty">
                From initial sketches to final masterpieces, explore the
                meticulous process of our artist.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="container-2 lg:w-[45vw] md:h-[500px] sm:w-full "
            >
              <ImageZ src="https://d2oe4z990jupbo.cloudfront.net/Artist@work.jpg" className={'h-full'}/>
            </motion.div>

            <div className="container-3 flex-col flex gap-20">
              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
              >
                Our artist's journey began with a simple pencil and paper. Over
                the years, this passion has evolved into a refined skill,
                producing breathtaking artworks.
              </motion.p>
              <div className="flex-col flex gap-10">
                <motion.div
                  variants={fadeIn("right", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex gap-5 relative"
                >
                  <FaPencil className="sm:text-brown-500 relative top-2 text-[20px]" />
                  <div>
                    <h3 className="sm:text-black text-lg">
                      Masterful Techniques
                    </h3>
                    <p className="text-black/60">
                      Learn about the techniques that bring each sketch to life.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("right", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex gap-5 relative"
                >
                  <FaBrush className="sm:text-brown-500 relative top-2 text-[20px]" />
                  <div>
                    <h3 className="sm:text-black text-lg">Creative Insights</h3>
                    <p className="text-black/60">
                      Gain insights into the creative process and the
                      inspiration behind each piece.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("right", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex gap-5 items-center"
                >
                  <FaEye className="text-brown-500 text-[20px] -top-2 relative" />
                  <div id="attention">
                    <h3 className="sm:text-black text-lg">
                      Attention to Detail
                    </h3>
                    <p className="text-black/60">
                      Every artwork is crafted with meticulous attention to
                      detail, ensuring a unique and captivating result.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("right", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex-col gap-5 flex"
                >
                  <h4 className="sm:text-3xl text-black">Join the Journey</h4>
                  <p className="text-black/60">
                    Follow along as our artist continues to create and share new
                    works.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="sm:px-5 flex flex-col items-center sm:py-[50px] lg:-mt-[150px] lg:pb-[100px]">
          <div className="flex flex-col sm:gap-10 lg:gap-20 lg:max-w-[90%]">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="sm:text-center flex flex-col gap-5"
            >
              <h2 className="sm:text-3xl lg:text-5xl lg:font-bold font-semibold ">
                Artist's Gallery
              </h2>
              <p className="lg:text-lg text-black/60">
                Explore a curated collection of stunning pencil sketches.
              </p>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1">
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                className=""
              >
                <ImageZ src="https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-27.jpg" />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                className=""
              >
                <ImageZ src="https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-5.JPG" />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                className=""
              >
                <ImageZ src="https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-34.JPG" />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                className=""
              >
                <ImageZ src="https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-9.JPG" />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="sm:px-5 lg:px-10 sm:p-[50px]">
          <div className="flex flex-col gap-20 lg:px-20">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col gap-5 text-center"
            >
              <h4 className="sm:text-4xl lg:text-5xl lg:font-bold">
                Achievements
              </h4>
              <p className="lg:text-lg text-black/60">
                Impressive milestones in the artist's career.
              </p>
            </motion.div>
            <div className="grid sm:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-3 md:gap-3 md:grid-rows-1 sm:grid-cols-1 gap-10 ">
              <AchievementCard
                icon={<FaAward />}
                count="50+"
                description="Awards"
              />

              <AchievementCard
                icon={<BsPeopleFill />}
                count="10k+"
                description="Followers"
              />
              <AchievementCard
                icon={<IoMdColorPalette />}
                count="100+"
                description="Artworks"
              />
            </div>
          </div>
        </section>
        {/* <section className="sm:px-5 lg:px-10 sm:py-[50px]">
          <div className="flex sm:flex-col lg:flex-row justify-between items-center gap-10">
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col gap-5"
            >
              <h3 className="sm:text-5xl leading-snug">Watch the Process</h3>
              <p className="font-light">
                See our artist in action, from sketching to final touches.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
            >
              <iframe
                className="sm:w-full sm:h-[200px] md:w-[60vw] md:h-[40vw] rounded-xl border-none lg:w-[40vw] lg:h-[300px] "
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </section> */}
        <section id="FAQSection" className="sm:px-5 sm:py-[50px]">
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            id="FAQsection"
          >
            <FAQSection />
          </motion.div>
        </section>
        <section className="sm:px-5 sm:py-[50px] flex justify-center">
          <div className="flex flex-col gap-16 max-w-[90%]">
            <div className="gap-5 flex flex-col lg:text-center sm:text-start">
              <h3 className="text-4xl">Get in Touch</h3>
              <p className="text-black/60">
                Reach out to us for inquiries, custom artwork, or any other
                questions.
              </p>
            </div>
            <div className="flex sm:flex-col md:gap-16 lg:flex-row gap-10 lg:items-center lg:justify-center">
              <div className="sm:flex-row flex lg:flex-col gap-5 lg:items-center lg:justify-center relative">
                <div className="relative top-2 bg-primary-1 w-fit h-fit p-4 rounded-lg text-white">
                  <FaMessage />
                </div>
                <div className="flex flex-col lg:text-center sm:items-start lg:items-center gap-5">
                  <h4 className="text-2xl">Get Assistance</h4>
                  <p className="text-black/60">
                    Get Assistance with your orders or any technical issues
                  </p>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-md flex gap-2  bg-primary-1 hover:bg-primary-1/80 w-[200px] justify-center p-3 rounded-xl text-white items-center"
                    >
                      Start a Conversation <FaArrowRight className="text-sm" />
                    </motion.button>
                  </Link>
                </div>
              </div>
              <div className="sm:flex-row flex lg:flex-col gap-5 lg:items-center lg:justify-center relative">
                <div className="relative top-2 bg-primary-1 w-fit h-fit p-4 rounded-lg text-white">
                  <FaBug />
                </div>
                <div className="flex flex-col lg:text-center sm:items-start lg:items-center gap-5">
                  <h4 className="text-2xl">Get Support</h4>
                  <p className="text-black/60">
                    Get Assistance with your orders or any technical issues
                  </p>
                  <HashLink to="/about#FAQSection">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-md flex gap-2  bg-primary-1 hover:bg-primary-1/80  p-3 rounded-xl text-white items-center w-[200px] justify-center"
                    >
                      Get Support <FaArrowRight className="text-sm" />
                    </motion.button>
                  </HashLink>
                </div>
              </div>
              <div className="sm:flex-row flex lg:flex-col gap-5 lg:items-center lg:justify-center relative">
                <div className="relative top-2 bg-primary-1 w-fit h-fit p-4 rounded-lg text-white">
                  <RiComputerFill />
                </div>
                <div className="flex flex-col lg:text-center lg:items-center sm:items-start gap-5">
                  <h4 className="text-2xl">Collaborate</h4>
                  <p className="text-black/60">
                    Collaborate with us on artistic projects or events{" "}
                  </p>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-md flex gap-2 bg-primary-1 hover:bg-primary-1/80 p-3 rounded-xl text-white items-center w-[200px] justify-center"
                    >
                      Contact Us <FaArrowRight className="text-sm" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
