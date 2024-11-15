import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(true);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div className="">
      <button className="dropdown-container  p-2 rounded-full ">
        <HiMenuAlt3
          className="md:text-4xl lg:text-4xl sm:text-2xl text-white"
          onClick={toggleDropdown}
          style={{ display: isOpen ? "none" : "block" }}
        />
        <IoMdClose
          className="md:text-4xl sm:text-2xl text-white"
          onClick={closeDropdown}
          style={{ display: isOpen ? "block" : "none" }}
        />
      </button>
      <div className="-z-50">
        <div
          className={` dropdown-menu absolute mt-3 sm:w-full -right-[0%] justify-center sm:py-10 opacity-100 text-white text-center flex flex-col gap-5 my-4 rounded-2xl duration-700 ease-in-out ${
            isOpen ? "active" : "inactive"
          }`}
          ref={menuRef}
        >
          <div className="relative font-semibold md:flex-col md:flex flex flex-col gap-3 text-white ">
            <NavLink
              to="/"
              className="sm:block px-4 py-2  md:hidden hover:text-white/50"
              onClick={closeDropdown}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="sm:block px-4 py-2 md:hidden hover:text-white/50"
              onClick={closeDropdown}
            >
              About
            </NavLink>
            <NavLink
              to="/gallery"
              className="sm:block px-4 py-2  hover:text-white/50"
              onClick={closeDropdown}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className="sm:block px-4 py-2 hover:text-white/50 md:hidden"
              onClick={closeDropdown}
            >
              Contact
            </NavLink>
            <NavLink
              to="/community"
              className="sm:block px-4 py-2 hover:text-white/50"
              onClick={closeDropdown}
            >
              Community
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
