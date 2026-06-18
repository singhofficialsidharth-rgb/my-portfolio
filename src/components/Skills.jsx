import React from 'react';
import { BarChart3, Database, Layers, FileSpreadsheet } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="border-t border-gray-900 bg-gray-950/40 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Analytics Stack & Competencies</h2>
          <p className="text-gray-400">Engineered with modern tools for handling pipeline infrastructure, deep exploratory analysis, and slick dynamic representations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-cardBg/40 border border-gray-800 rounded-xl hover:border-accentNeon/50 transition duration-300">
            <BarChart3 className="text-accentNeon mb-4" size={28} />
            <h3 className="font-semibold text-white mb-2">Data Visualization</h3>
            <p className="text-sm text-gray-400">Power BI, Advanced MS Excel charts, Recharts, and interactive web component plots.</p>
          </div>
          <div className="p-6 bg-cardBg/40 border border-gray-800 rounded-xl hover:border-accentPurple/50 transition duration-300">
            <Database className="text-accentPurple mb-4" size={28} />
            <h3 className="font-semibold text-white mb-2">Data Processing</h3>
            <p className="text-sm text-gray-400">SQL structured querying, relational optimization, Python (Pandas, NumPy).</p>
          </div>
          <div className="p-6 bg-cardBg/40 border border-gray-800 rounded-xl hover:border-emerald-500/50 transition duration-300">
            <Layers className="text-emerald-400 mb-4" size={28} />
            <h3 className="font-semibold text-white mb-2">Full-Stack Dev</h3>
            <p className="text-sm text-gray-400">Building analytical interfaces with React.js, Node.js, and Express backends.</p>
          </div>
          <div className="p-6 bg-cardBg/40 border border-gray-800 rounded-xl hover:border-rose-500/50 transition duration-300">
            <FileSpreadsheet className="text-rose-400 mb-4" size={28} />
            <h3 className="font-semibold text-white mb-2">Automation</h3>
            <p className="text-sm text-gray-400">Python scraping scripts, custom data-cleaning macros, API webhooks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}