import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex justify-center ">
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-full md:w-auto" id="navbar-default">
            <ul className="font-medium flex md:flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link 
                  to="/" 
                  onClick={() => handleLinkClick("home")}
                  className={`block py-2 px-3 ${activeLink === "home" ? "lg:text-pink-700 lg:bg-transparent bg-pink-600 text-white " : "text-gray-900"} rounded md:bg-transparentmd:p-0`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={() => handleLinkClick("about")}
                  className={`block py-2 px-3 ${activeLink === "about" ? "lg:text-pink-700 lg:bg-transparent bg-pink-600 text-white " : "text-gray-900"} rounded md:bg-transparentmd:p-0`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  onClick={() => handleLinkClick("projects")}
                  className={`block py-2 px-3 ${activeLink === "projects" ? "lg:text-pink-700 lg:bg-transparent bg-pink-600 text-white " : "text-gray-900"} rounded md:bg-transparentmd:p-0`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to ="contact" 
                  onClick={() => handleLinkClick("contact")}
                  className={`block py-2 px-3 ${activeLink === "contact" ? "lg:text-pink-700 lg:bg-transparent bg-pink-600 text-white " : "text-gray-900"} rounded md:bg-transparentmd:p-0`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
