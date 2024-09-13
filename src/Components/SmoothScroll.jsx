import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
  });
  const y = useTransform(springScroll, [0, 1], ["0%", "1%"]);

  return (
    <motion.div style={{ y }} className="smooth-scroll">
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
