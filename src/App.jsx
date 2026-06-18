import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-darkBg text-gray-200 selection:bg-accentNeon/30 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accentNeon/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accentPurple/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />

    </div>
  );
}