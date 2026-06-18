import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Selected Practical Pipelines</h2>
        <p className="text-gray-400">End-to-end data analytics deployments and custom software engineering solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="group bg-cardBg border border-gray-800/80 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-300">
          <div className="p-8 space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono bg-accentNeon/10 text-accentNeon px-2.5 py-1 rounded-md">Python & Power BI</span>
              <div className="flex gap-3 text-gray-400">
                <a href="#" className="hover:text-white"><GitBranch size={18} /></a>
                <a href="#" className="hover:text-white"><ExternalLink size={18} /></a>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-accentNeon transition">Comprehensive IPL Sports Data Analysis</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineered a comprehensive analytics dashboard profiling tournament data. Leveraged Pandas for feature engineering, performance optimization vectors, and integrated customized visual trend layers.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-gray-400">
              <span>#ExploratoryDataAnalysis</span> <span>#ETL-Pipelines</span> <span>#DataModeling</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="group bg-cardBg border border-gray-800/80 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-300">
          <div className="p-8 space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono bg-accentPurple/10 text-accentPurple px-2.5 py-1 rounded-md">MERN Stack Deployment</span>
              <div className="flex gap-3 text-gray-400">
                <a href="#" className="hover:text-white"><GitBranch size={18} /></a>
                <a href="#" className="hover:text-white"><ExternalLink size={18} /></a>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-accentPurple transition">Retail Mart Ecommerce Engine</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-featured ecommerce dashboard interface tracking user purchase conversions and real-time product inventory metrics. Employs crisp React states and aggregated database queries.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-gray-400">
              <span>#StateManagement</span> <span>#AggregationPipelines</span> <span>#TailwindUI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}