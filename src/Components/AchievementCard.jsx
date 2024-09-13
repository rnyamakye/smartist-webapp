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
      className={`border-gray-400 border-[1px] sm:w-full sm:h-[250px] rounded-2xl $ flex flex-col justify-between`}
    >
      {icon && <div className="text-3xl m-5">{icon}</div>}
      <div className="p-5">
        <h4 className="text-5xl">
          <Link to={href}>{count}</Link>
        </h4>
        {description}
      </div>
    </motion.div>
  );
};

export default AchievementCard;
