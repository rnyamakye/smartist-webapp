import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const Awards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const awards = [
    { title: "Grammy Award", year: 2020, description: "Best New Artist" },
    {
      title: "Artist Of The Year",
      year: 2021,
      description: "Given To The Best Artist Over The Year",
    },
    {
      title: "Billboard Aritst Award",
      year: 2022,
      description: "Top New Artist",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-4">Awards and Recognition</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award, index) => (
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              key={index}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <h2 className="text-lg font-bold mb-2">{award.title}</h2>
              <p className="text-gray-600">{award.year}</p>
              <p className="text-gray-600">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Awards;
