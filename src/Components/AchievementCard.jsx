import { fadeIn } from "./Variants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AchievementCard = ({ icon, count, description, href }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.1 }}
      className={`border-gray-400 bg-white/50 border-[1px] sm:w-[150px] sm:h-[180px] rounded-2xl $ flex flex-col  justify-between items-start`}
    >
      {icon && <div className="text-2xl md:text-3xl m-5">{icon}</div>}
      <div className="p-5 flex-col flex items-start">
        <h4 className="text-3xl font-semibold md:text-5xl">
          <Link to={href}>{count}</Link>
        </h4>
        <p className="">{description}</p>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
