import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white sm:px-3 sm:pt-[50px]">
      <div className="flex flex-col gap-16">
        <div className="flex flex-row justify-around ">
          <ul className="flex flex-wrap text-xl justify-center sm:gap-5 ">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NavLink to="/">Home</NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NavLink to="/about">About Us</NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NavLink to="/gallery">Gallery</NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NavLink to="/contact">Contact Us</NavLink>
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <NavLink to="/community">Community</NavLink>
            </motion.li>
          </ul>
        </div>
        <div className="flex justify-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-blue-gray-700 w-fit p-3 rounded-full"
          >
            <Link>
              <BsTwitterX />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-blue-gray-700 w-fit p-3 rounded-full"
          >
            <Link>
              <FaFacebookF />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-blue-gray-700 w-fit p-3 rounded-full"
          >
            <Link>
              <FaInstagram />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-blue-gray-700 w-fit p-3 rounded-full"
          >
            <Link>
              <IoLogoWhatsapp />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-blue-gray-700 w-fit p-3 rounded-full"
          >
            <Link>
              <FaTiktok />
            </Link>
          </motion.div>
        </div>
        <div className="border-t-gray-600 border-t text-center">
          <p className="py-[50px]">
            © 2024 Smartist Pencil Art. All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
