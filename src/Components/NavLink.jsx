// src/NavLink.js
import React from "react";
import { useLocation, Link } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex gap-5 font-semibold ${
        isActive
          ? "text-primary-1 font-bold"
          : "text-gray-400 "
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
