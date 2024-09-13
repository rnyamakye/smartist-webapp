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
import SmoothScroll from "../SmoothScroll";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SmoothScroll>
      <main className="relative sm:-top-[100px] lg:-top-[120px]">
        <header className="">
          <div className="header-container sm:text-white sm:pt-[200px] sm:pb-[50px] lg:py-[250px] flex flex-col gap-10 sm:px-5">
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
              <p className="sm:sm:text-lg sm:text-gray-400">
                Discover the journey and achievements of our talented pencil
                artist.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="sm:text-center flex flex-col gap-10 lg:hidden sm:block"
            >
              <Image src="/smartist-poster-1.jpg" />
            </motion.div>
          </div>
        </header>
        <section className="sm:px-5 lg:px-10 sm:py-[50px] relative">
          <div className="about-hero-container sm:flex-col grid  sm:gap-16 lg:gap-5">
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
              <p className="sm:text-xl sm:text-gray-700 sm:text-pretty">
                From initial sketches to final masterpieces, explore the
                meticulous process of our artist.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="container-2 lg:w-[50vw] sm:w-full "
            >
              <ImageZ src="/public/smartist-with-customer.jpg" />
            </motion.div>

            <div className="container-3 flex-col flex gap-20">
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
              >
                Our artist's journey began with a simple pencil and paper. Over
                the years, this passion has evolved into a refined skill,
                producing breathtaking artworks.
              </motion.div>
              <div className="flex-col flex gap-10">
                <motion.div
                  variants={fadeIn("right", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex gap-5 relative"
                >
                  <FaPencil className="sm:text-brown-500 relative top-2 text-lg" />
                  <div>
                    <h3 className="sm:text-black text-lg">
                      Masterful Techniques
                    </h3>
                    <p>
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
                  <FaBrush className="sm:text-brown-500 relative top-2 " />
                  <div>
                    <h3 className="sm:text-black text-lg">
                      Creative Insightss
                    </h3>
                    <p>
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
                  className="flex gap-5 "
                >
                  <FaEye />
                  <div>
                    <h3 className="sm:text-black text-lg">
                      Attention to Detail
                    </h3>
                    <p>
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
                  <p className="">
                    Follow along as our artist continues to create and share new
                    works.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="sm:px-5 lg:px-10 sm:py-[50px] lg:pt-[0] lg:pb-[100px]">
          <div className="flex flex-col sm:gap-10 lg:gap-20">
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
              <p className="lg:text-lg">
                Explore a curated collection of stunning pencil sketches.
              </p>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-1">
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                className=""
              >
                <ImageZ
                  src="/public/commmissioned-portrait-5.JPG"
                  description="Nature"
                  name="Nature Sketches"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                className=""
              >
                <ImageZ
                  src="/public/commmissioned-portrait-34.JPG"
                  description="Nature"
                  name="Nature Sketches"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                className=""
              >
                <ImageZ
                  src="/public/commmissioned-portrait-23.jpg"
                  description="Nature"
                  name="Nature Sketches"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                className=""
              >
                <ImageZ
                  src="/public/commmissioned-portrait-9.JPG"
                  description="Nature"
                  name="Nature Sketches"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="sm:px-5 lg:px-10 sm:p-[50px]">
          <div className="flex flex-col gap-20">
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
              <p className="lg:text-lg">
                Impressive milestones in the artist's career.
              </p>
            </motion.div>
            <div className="flex lg:flex-row sm:flex-col gap-5 justify-around ">
              <AchievementCard
                icon={<FaAward />}
                count="50+"
                description="Awards"
                href=""
              />

              <AchievementCard
                icon={<BsPeopleFill />}
                count="10k+"
                description="Followers"
              />
              <AchievementCard
                icon={<IoMdColorPalette />}
                count="200+"
                description="Artworks"
              />
            </div>
          </div>
        </section>
        <section className="sm:px-5 lg:px-10 sm:py-[50px]">
          <div className="flex flex-col sm:gap-10 lg:gap-20">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col gap-5 text-center"
            >
              <h3 className="sm:text-4xl lg:text-5xl ">Collaborators</h3>
              <p className="lg:text-lg text-gray-600">
                Meet the creative minds who have collaborated with our artist.
              </p>
            </motion.div>
            <div className="flex sm:flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 sm:gap-10 ">
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Image
                  src="/sketched-old-woman.jpg"
                  name="Taylor Smith"
                  title="Art Mentor"
                  description="Art Mentor"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Image
                  src="/girl-sketch.jpeg"
                  name="Taylor Smith"
                  title="Art Mentor"
                  description="Artist"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Image
                  src="/sketched-young-girl.jpg"
                  name="Taylor Smith"
                  title="Art Mentor"
                  description="Artist Critic"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="sm:px-5 lg:px-10 sm:py-[50px]">
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
                className="sm:w-full sm:h-[200px] rounded-xl border-none lg:w-[40vw] lg:h-[300px] "
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </section>
        <section className="sm:px-5 sm:py-[50px]">
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            className=""
          >
            <FAQSection />
          </motion.div>
        </section>
      </main>
    </SmoothScroll>
  );
}
