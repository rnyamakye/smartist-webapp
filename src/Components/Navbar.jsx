import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
  return (
    <nav
      className="relative
     top-5 left-0 p-2 lg:py-1 w-[90%] bg-primary-2 opacity-95 sm:px-5 rounded-full shadow-md z-50"
    >
      <div className="">
        <div className=" flex flex-row border-gray-900 rounded-full py-3 items-center lg:text-2xl sm:text-2xl  md:text-2xl  justify-between">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="logo-container mr-10 rounded-full"
            >
              <img
                src="/smartist-logo-1.jpg"
                alt=""
                className="md:w-[50px] sm:w-[40px] lg:w-[50px] rounded-full"
              />
            </motion.div>
          </Link>
          <div className="nav-container text-gray-200 lg:block md:block sm:hidden">
            <ul className="flex gap-5 font-semibold">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <NavLink to="/">Home</NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <NavLink to="/about">About</NavLink>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <NavLink to="/contact">Contact</NavLink>
              </motion.li>
            </ul>
          </div>
          <div className="flex gap-5 lg:flex items-center sm:hidden">
            <NavLink to="/gallery">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className=" text-white w-fit px-5 py-3 border-gray-600 border-[1px]  rounded-full text-center flex items-center gap-2"
              >
                Explore <FaArrowRight className="text-lg" />
              </motion.button>
            </NavLink>
          </div>
          <div className="lg:hidden md:block sm:block">
            <DropdownMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
