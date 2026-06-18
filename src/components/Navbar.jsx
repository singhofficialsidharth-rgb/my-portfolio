import React, { useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b border-gray-800/60 sticky top-0 bg-bg-dark/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white z-50">
          <Cpu className="text-neon w-5 h-5 animate-pulse" />
          <span>Sidharth<span className="text-neon">.</span>analyst</span>
        </div>

        {/* DESKTOP MENU (Hidden on screens smaller than md:768px) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#dashboard" className="hover:text-white transition-colors duration-200">Dashboard</a>
          <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
          <a href="#credentials" className="hover:text-white transition-colors duration-200">Credentials</a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON (Visible only on mobile/tablet) */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} className="text-neon" /> : <Menu size={22} />}
        </button>

        {/* MOBILE SLIDE-DOWN DRAWER CONTAINER */}
        <div 
          className={`fixed top-0 left-0 w-full h-screen bg-bg-dark/95 backdrop-blur-lg transform transition-transform duration-350 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 text-lg font-semibold border-b border-gray-800/80 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <a 
            href="#dashboard" 
            onClick={toggleMenu} 
            className="text-gray-300 hover:text-neon transition"
          >
            Dashboard
          </a>
          <a 
            href="#skills" 
            onClick={toggleMenu} 
            className="text-gray-300 hover:text-neon transition"
          >
            Skills
          </a>
          <a 
            href="#experience" 
            onClick={toggleMenu} 
            className="text-gray-300 hover:text-neon transition"
          >
            Experience
          </a>
          <a 
            href="#credentials" 
            onClick={toggleMenu} 
            className="text-gray-300 hover:text-neon transition"
          >
            Credentials
          </a>
          <a 
            href="#projects" 
            onClick={toggleMenu} 
            className="text-gray-300 hover:text-neon transition"
          >
            Projects
          </a>
        </div>

      </div>
    </nav>
  );
}