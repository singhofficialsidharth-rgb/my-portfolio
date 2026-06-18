import React from 'react';
import { GitBranch, ExternalLink, BarChart3, TrendingUp } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Featured Analytics Projects</h2>
        <p className="text-gray-400">Production-ready operational intelligence dashboards and empirical business studies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1: Credit Card Dashboard */}
        <div className="group bg-bg-card border border-gray-800/80 rounded-2xl overflow-hidden hover:border-neon/40 transition duration-300">
          <div className="p-8 space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono bg-neon/10 text-neon px-2.5 py-1 rounded-md">Power BI & Financial Analytics</span>
              <div className="flex gap-3 text-gray-400">
                <a href="#" className="hover:text-white"><GitBranch size={18} /></a>
                <a href="#" className="hover:text-white"><ExternalLink size={18} /></a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 size={20} className="text-neon" />
              <h3 className="text-xl font-bold text-white group-hover:text-neon transition">Credit Card Transaction Reporting Dashboard</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Developed an institutional reporting platform tracking transactional flows, volume anomalies, and user spending behavior. Optimized operational tracking grids to assist risk management assessments.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-gray-500">
              <span>#FinancialMetrics</span> <span>#RiskReporting</span> <span>#DataVisualization</span>
            </div>
          </div>
        </div>

        {/* Project 2: Super Sales Dashboard */}
        <div className="group bg-bg-card border border-gray-800/80 rounded-2xl overflow-hidden hover:border-purple/40 transition duration-300">
          <div className="p-8 space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono bg-purple/10 text-purple px-2.5 py-1 rounded-md">Power BI & Time Series</span>
              <div className="flex gap-3 text-gray-400">
                <a href="#" className="hover:text-white"><GitBranch size={18} /></a>
                <a href="#" className="hover:text-white"><ExternalLink size={18} /></a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={20} className="text-purple" />
              <h3 className="text-xl font-bold text-white group-hover:text-purple transition">Super Sales Forecasting Dashboard</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Created an end-to-end performance tracking suite applying structural time series analysis to uncover seasonal revenue trends. Designed predictive metrics to guide strategic inventory and sales pipeline decisions.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-gray-500">
              <span>#TimeSeriesAnalysis</span> <span>#RevenueForecasting</span> <span>#DAX-Modeling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}