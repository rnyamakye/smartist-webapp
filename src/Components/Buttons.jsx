import { motion } from "framer-motion";
export const Button = ({ className, text, icon }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      className={`text-md flex gap-2 ${className} hover:gap-3 lg:w-fit p-3 rounded-xl text-white items-center w-[200px] justify-center`}
    >
      <span>{text}</span>
      <span>{icon}</span>
    </motion.button>
  );
};
