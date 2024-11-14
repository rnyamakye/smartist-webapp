import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import ImageZ from "../ImageZ";

const Artworks = ({ title, src }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.2 }}
      className="mb-8"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        <ImageZ src={src} className="w-full h-full sm:h-[350px] object-cover" />
        <div className=" absolute bottom-2 ">
          <h2 className="text-xl sm:text-2xl text-white font-medium mb-2">
            {title}
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const artworks = [
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-11.JPG",
      // description:
      //   "A night scene showing a swirling night sky over a sleeping village.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-19.JPG",
      // description:
      //   "Surrealist painting featuring melting clocks in a desert landscape.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-10.JPG",
      // description:
      //   "A portrait of a girl wearing an exotic dress and a large pearl earring.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-12.JPG",
      // description:
      //   "An expressionist painting depicting an agonized figure against a landscape.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-13.JPG",
      // description:
      //   "A Renaissance masterpiece depicting the goddess Venus emerging from the sea.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-14.JPG",
      // description:
      //   "A large 17th-century painting famous for its dramatic use of light and shadow.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-16.JPG",
      // description:
      //   "A series of approximately 250 oil paintings depicting Monet's flower garden.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-17.JPG",
      // description:
      //   "An oil painting with added gold leaf featuring a couple embracing.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-18.JPG",
      // description:
      //   "A surrealist self-portrait with the subject's face obscured by an apple.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-22.jpg",
      // description:
      //   "A landscape painting depicting peasants harvesting wheat in late summer.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-23.jpg",
      // description:
      //   "A woodblock print of a giant wave threatening boats off the coast of Kanagawa.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-25.jpg",
      // description:
      //   "A bronze sculpture of a nude male figure in deep contemplation.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-27.jpg",
      // description:
      //   "A painting depicting a lion musing over a sleeping figure on a moonlit night.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-24.jpg",
      // description:
      //   "A winter landscape painting showing hunters returning to their village.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-26.jpg",
      // description:
      //   "A triptych painting depicting paradise and hell with fantastical imagery.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-28.jpg",
      // description:
      //   "A detailed portrait of a wealthy merchant and his wife in their home.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-29.JPG",
      // description:
      //   "A groundbreaking painting considered a pivotal work in the development of Cubism.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-3.JPG",
      // description:
      //   "A still life painting featuring a tilted basket of apples on a table.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-30.JPG",
      // description:
      //   "A Romantic landscape painting of a man standing on a rocky precipice.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-31.JPG",
      // description:
      //   "A mural painting depicting the last meal of Jesus with his apostles.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-32.JPG",
      // description:
      //   "A Romantic landscape painting of a man standing on a rocky precipice.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-33.JPG",
      // description:
      //   "A mural painting depicting the last meal of Jesus with his apostles.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-34.JPG",
      // description:
      //   "A Romantic landscape painting of a man standing on a rocky precipice.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-35.JPG",
      // description:
      //   "A mural painting depicting the last meal of Jesus with his apostles.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-36.JPG",
      // description:
      //   "A Romantic landscape painting of a man standing on a rocky precipice.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-37.JPG",
      // description:
      //   "A mural painting depicting the last meal of Jesus with his apostles.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-4.JPG",
      // description:
      //   "A Romantic landscape painting of a man standing on a rocky precipice.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-5.JPG",
      // description:
      //   "A mural painting depicting the last meal of Jesus with his apostles.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-6.JPG",
      // description:
      //   "A Romantic landscape painting of a man standing on a rocky precipice.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-7.JPG",
      // description:
      //   "A mural painting depicting the last meal of Jesus with his apostles.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-8.JPG",
      // description:
      //   "A Romantic landscape painting of a man standing on a rocky precipice.",
    },
    {
      src: "https://d2oe4z990jupbo.cloudfront.net/commmissioned-portrait-9.JPG",
      // description:
      //   "A mural painting depicting the last meal of Jesus with his apostles.",
    },
  ];

  return (
    <>
      <main>
        <div className=" relative -top-[100px] ">
          <header className="header-container py-[200px] lg:px-10 sm:px-5">
            <div className="text-center sm:px-5">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-5xl font-bold mb-8 text-center text-white"
              >
                Art Gallery
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-white"
              >
                Explore Through The Finest of Artworks
              </motion.p>
            </div>
          </header>
          <section className="py-[100px] lg:px-10 sm:px-5">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 sm:px-5">
              {artworks.map((artwork, index) => (
                <Artworks key={index} {...artwork} />
              ))}
            </div>
          </section>
          <section className="text-center">
            <motion.h1
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="text-3xl sm:text-5xl font-bold mb-8 text-center text-black"
            >
              Contact Us for Yours
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
                className="flex items-center gap-5 text-center justify-center text-xl text-black"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex text-[15px] font-semibold text-black/60 items-center gap-3"
                >
                  Grab Your Own Custom Artwork{" "}
                  <FaArrowRight className="text-lg" />
                </motion.button>
              </Link>
            </motion.p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Gallery;
