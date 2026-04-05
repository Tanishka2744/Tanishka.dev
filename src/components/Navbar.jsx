import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ dark, setDark }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`w-full fixed top-0 left-0 z-50 transition-colors duration-500 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-20 py-4">
        {/* Left - Logo */}
        <h1 className="text-3xl font-extrabold tracking-wider cursor-pointer">
          <span className="text-gradient">TK</span>
        </h1>

        {/* Center - Email */}
        <p className="hidden md:block text-lg font-bold tracking-wide text-gradient-email cursor-pointer">
          tanishkakhandelwal00@gmail.com
        </p>

        {/* Right */}
        <div className="flex items-center gap-8">
          {/* Dark Mode Toggle */}
          <button onClick={() => setDark(!dark)}>
            {dark ? <FaSun size={26} /> : <FaMoon size={26} />}
          </button>

          {/* Menu Toggle */}
          <button onClick={() => setOpen(!open)}>
            <HiMenu size={33} />
          </button>
        </div>
      </div>

      {/* SIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 transform ${open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 shadow-lg ${dark ? "bg-black text-white" : "bg-white text-black"
          }`}
      >
        {/* Cross Button - always top-right in menu */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <HiX size={28} className="hover:text-blue-400 transition-colors duration-300" />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-start gap-6 p-8 text-lg mt-4">
          <a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
          <a href="#education" className="hover:text-blue-400 transition-colors duration-300">Education</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
          <a href="#services" className="hover:text-blue-400 transition-colors duration-300">Services</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;