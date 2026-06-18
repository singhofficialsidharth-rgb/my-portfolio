import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-900">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Professional Experience</h2>
        <p className="text-gray-400">Practical exposure across data infrastructure and corporate analytics operations.</p>
      </div>

      <div className="relative border-l border-gray-850 pl-6 ml-4 space-y-12">
        {/* Timeline item */}
        <div className="relative">
          {/* Dot node */}
          <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-neon border-4 border-darkBg shadow-[0_0_10px_#38BDF8]"></div>
          
          <div className="bg-bg-card border border-gray-800/60 rounded-xl p-6 md:p-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase size={18} className="text-neon" />
                  Data Analytics Intern
                </h3>
                <p className="text-sm font-medium text-purple mt-1">Vodafone Idea Foundation</p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono bg-gray-900 text-gray-400 px-3 py-1 rounded-md border border-gray-800 w-fit">
                <Calendar size={12} />
                <span>Corporate Internship</span>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-gray-400 list-disc list-inside marker:text-neon">
              <li>Analyzed massive datasets using Power BI to build high-impact interactive data visualizations and executive summaries.</li>
              <li>Utilized Python programming modules (Pandas, NumPy, and Matplotlib) for algorithmic data cleaning, filtering, and metric calculation.</li>
              <li>Partnered on real-world industrial intelligence projects to translate raw performance figures into actionable strategic decisions.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}