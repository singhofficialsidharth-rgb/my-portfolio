import React from 'react';
import { Cpu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800/60 sticky top-0 bg-darkBg/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
          <Cpu className="text-accentNeon w-5 h-5 animate-pulse" />
          <span>Sidharth<span className="text-accentNeon">.</span>analyst</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#dashboard" className="hover:text-white transition">Dashboard</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
        </div>
      </div>
    </nav>
  );
}