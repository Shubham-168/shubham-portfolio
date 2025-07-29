import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-700 px-6 py-4 shadow-md rounded-2xl">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-500">Shubham Saini</h1>

        {/* Hamburger button on small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black dark:text-white text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-sm text-black dark:text-gray-200 font-semibold">
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#education" className="hover:text-blue-400">Education</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-sm text-black dark:text-gray-200 font-semibold">
          <li><a href="#skills" className="hover:text-blue-400" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#education" className="hover:text-blue-400" onClick={toggleMenu}>Education</a></li>
          <li><a href="#contact" className="hover:text-blue-400" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
