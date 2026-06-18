import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Selected Analytics Projects</h2>
        <p className="text-gray-400">End-to-end data mining pipelines, business optimization dashboards, and empirical operations studies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Analytics Project 1 */}
        <div className="group bg-bg-card border border-gray-800/80 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-300">
          <div className="p-8 space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono bg-neon/10 text-neon px-2.5 py-1 rounded-md">Python & Power BI</span>
              <div className="flex gap-3 text-gray-400">
                <a href="#" className="hover:text-white"><GitBranch size={18} /></a>
                <a href="#" className="hover:text-white"><ExternalLink size={18} /></a>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-neon transition">IPL Cricket League Performance Optimization Suite</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineered an interactive analytics asset profiling massive performance records. Leveraged Python Pandas for cleaning historical metrics, calculated moving averages for form vectors, and produced strategic cross-filtering visuals.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-gray-400">
              <span>#ExploratoryDataAnalysis</span> <span>#FeatureEngineering</span> <span>#DataModeling</span>
            </div>
          </div>
        </div>

        {/* Analytics Project 2 */}
        <div className="group bg-bg-card border border-gray-800/80 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-300">
          <div className="p-8 space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono bg-purple/10 text-purple px-2.5 py-1 rounded-md">SQL & Excel Architecture</span>
              <div className="flex gap-3 text-gray-400">
                <a href="#" className="hover:text-white"><GitBranch size={18} /></a>
                <a href="#" className="hover:text-white"><ExternalLink size={18} /></a>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple transition">Corporate Operational Metrics & Revenue Optimization</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Built an automated auditing matrix monitoring corporate resource spending and delivery targets. Written robust SQL queries using window aggregation scripts to compute monthly operational efficiency gradients and eliminate duplicate reporting.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-gray-400">
              <span>#SQLWindowFunctions</span> <span>#ETLPipelines</span> <span>#DataCleaning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}