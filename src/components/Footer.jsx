import React from 'react';
import { Mail, User, GitBranch } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 py-12 bg-gray-950/60 text-center">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        <p className="text-sm text-gray-500 font-mono">Let's collaborate on data infrastructure or custom software builds.</p>
        <div className="flex justify-center gap-6 text-gray-400">
          <a href="mailto:sk0701125@gmail.com" className="hover:text-accentNeon transition"><Mail size={20} /></a>
          <a href="https://linkedin.com/sidharth-singh16" target="_blank" rel="noreferrer" className="hover:text-accentNeon transition"><User size={20} /></a>
          <a href="https://github.com/singhofficialsidharth-rgb" target="_blank" rel="noreferrer" className="hover:text-accentNeon transition"><GitBranch size={20} /></a>
        </div>
        <p className="text-xs text-gray-600 pt-4">&copy; {new Date().getFullYear()} Sidharth Singh. All analytics models simulated.</p>
      </div>
    </footer>
  );
}