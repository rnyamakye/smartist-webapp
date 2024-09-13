import React from "react";
import { motion, useInView, useAnimate } from "framer-motion";

export const Reveal = ({ children }) => {
  return (
    <div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 0.75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
