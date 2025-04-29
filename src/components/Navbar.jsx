import React, { useEffect, useState } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import github from "../assets/img/github.png";
import logo from '../assets/img/logo.png';
import download from '../assets/img/download.png'
import Resume from '../assets/Dev_Resume.pdf'
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home","skills","projects","contact");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActivelink = (value) =>{
    setActiveLink(value);
  }

  return (
    <div
  expand="lg"
  className={`nav fixed top-0 w-full px-4 sm:px-8 py-1 flex justify-between items-center backdrop-blur-md transition-all duration-300 z-10 gap-8 ${scrolled ? "bg-gray-800/70 shadow-md" : "bg-transparent"}`}
>
  {/* Logo */}
  <a href="#">
    <img
      className="w-20 sm:w-16 lg:w-22 invert px-3 py-2 transition-transform duration-300 ease-in-out hover:scale-110"
      src={logo}
      alt="Logo"
    />
  </a>

  {/* Navigation Links */}
  <div className="text-gray-200 hidden sm:flex sm:text-lg lg:text-[1.38rem] justify-center gap-10 font-semibold items-center -ml-[160px] ">
    <a
      href="#"
      onClick={() => onUpdateActivelink("home")}
      className={`${activeLink === "home" ? "active navbar-link" : "navbar-link"} relative group px-3 py-2 font-semibold`}
    >
      Home
      <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
    </a>
    <a
      href="#skills"
      onClick={() => onUpdateActivelink("skills")}
      className={`${activeLink === "skills" ? "active navbar-link" : "navbar-link"} relative group px-3 py-2 font-semibold`}
    >
      Skills
      <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
    </a>
    <a
      href="#services"
      onClick={() => onUpdateActivelink("contact")}
      className={`${activeLink === "contact" ? "active navbar-link" : "navbar-link"} relative group px-3 py-2 font-semibold`}
    >
      Services
      <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
    </a>
    <a
      href="#projects"
      onClick={() => onUpdateActivelink("projects")}
      className={`${activeLink === "projects" ? "active navbar-link" : "navbar-link"} relative grou px-3 py-2 font-semibold`}
    >
      Projects
      <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
    </a>
    <a
      href="#contact"
      onClick={() => onUpdateActivelink("contact")}
      className={`${activeLink === "contact" ? "active navbar-link" : "navbar-link"} relative group px-3 py-2 font-semibold`}
    >
      Contact Me
      <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
    </a>
  </div>

  {/* Social Icons */}
  <div className="hidden sm:flex justify-between gap-10 items-center -mr-[200px] ">
    <img className="invert w-8 hover:scale-115 transition-all duration-300 ease-in-out" src={navIcon2} alt="LinkedIn" />
    <img className="invert w-8 hover:scale-115 transition-all duration-300 ease-in-out" src={github} alt="GitHub" />
  </div>

  {/* Resume Button */}
  <a
    href={Resume}
    download="Resume.pdf"
    className="flex items-center text-lg sm:text-xl rounded border px-4 py-3 border-purple-400 hover:bg-white hover:text-black font-semibold hover:font-semibold transition-all duration-300 ease-in-out hover:scale-105"
  >
    Resume <img className="w-5 sm:w-6 invert" src={download} alt="Download" />
  </a>
</div>

  );
};

export default Navbar;
