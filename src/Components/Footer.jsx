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
            <Link
              to={"https://web.facebook.com/profile.php?id=100040140157602"}
              target=""
            >
              <FaFacebookF />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-blue-gray-700 w-fit p-3 rounded-full"
          >
            <Link
              to={
                "https://www.instagram.com/an_mmanuel?igsh=MXViNWhzajhldTczYg%3D%3D&utm_source=qr"
              }
              target=""
            >
              <FaInstagram />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-blue-gray-700 w-fit p-3 rounded-full"
          >
            <Link to={"https://wa.me/+233547348350"} target="">
              <IoLogoWhatsapp />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-blue-gray-700 w-fit p-3 rounded-full"
          >
            <Link
              to={
                "https://www.tiktok.com/@smartist88?_r=1&_d=ec6j37b833e18m&sec_uid=MS4wLjABAAAArHLqVNvZZwKxiGjQplwGkpVPyfkja2bA2MjQrV_-bcwY7L4ecW03xR1-XfYgz8Bl&share_author_id=6845061668210066437&sharer_language=en&source=h5_m&u_code=dd81j943ci6j5h&ug_btm=b0,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAArHLqVNvZZwKxiGjQplwGkpVPyfkja2bA2MjQrV_-bcwY7L4ecW03xR1-XfYgz8Bl&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=6845061668210066437&share_link_id=E9FEC259-B32C-461F-AEF1-E3B4F82CEC54&share_app_id=1233"
              }
              target=""
            >
              <FaTiktok />
            </Link>
          </motion.div>
        </div>
        <div className="border-t-gray-600 border-t text-center">
          <p className="py-[50px] text-[12px] text-white/70">
            © 2024 Smartist Pencil Art. All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
