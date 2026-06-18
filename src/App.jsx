import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience'; // <-- Added
import Credentials from './components/Credentials'; // <-- Added
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-gray-200 selection:bg-neon/30 relative">
      
      {/* BACKGROUND AI GLOW ORBS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience /> {/* <-- Added */}
        <Credentials /> {/* <-- Added */}
        <Projects />
      </main>
      <Footer />

    </div>
  );
}