import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { GitBranch } from 'lucide-react';

const trendData = [
  { month: 'Jan', Accuracy: 82 },
  { month: 'Feb', Accuracy: 85 },
  { month: 'Mar', Accuracy: 89 },
  { month: 'Apr', Accuracy: 94 },
  { month: 'May', Accuracy: 96 },
];

const distributionData = [
  { name: 'Python (Pandas/NumPy)', value: 45, color: '#38BDF8' },
  { name: 'SQL / Databases', value: 35, color: '#818CF8' },
  { name: 'Power BI & Excel', value: 20, color: '#34D399' }
];

export default function Hero() {
  return (
    <section id="dashboard" className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 space-y-6">
        <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 px-3 py-1 rounded-full text-xs text-neon font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Available for Data Analyst Roles & Internships
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Transforming Complex Datasets Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-purple">Actionable Strategy.</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Data Analyst specializing in statistical computing, data modeling, automated ETL pipelines, and executive-ready interactive visualization dashboards.
        </p>
        <div className="flex gap-4 pt-2">
          <a href="#projects" className="bg-gradient-to-r from-neon to-purple text-bg-dark font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition shadow-lg shadow-neon/20">
            View Case Studies
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-gray-800/40 border border-gray-700/60 px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-gray-800/80 transition">
            <GitBranch size={18} /> GitHub
          </a>
        </div>
      </div>

      {/* VISUALIZATION PANEL */}
      <div className="lg:col-span-7 bg-bg-card/60 border border-gray-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs text-gray-500 ml-2 font-mono">exploratory_analysis.py</span>
          </div>
          <span className="text-xs font-mono text-neon bg-neon/10 px-2 py-0.5 rounded">Production Pipeline</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-48 bg-gray-900/50 p-3 rounded-xl border border-gray-800/80">
            <p className="text-xs font-semibold text-gray-400 mb-2 font-mono">Statistical Confidence Level</p>
            <ResponsiveContainer width="100%" height="90%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#38BDF8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#4B5563" fontSize={10} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', fontSize: 12 }} />
                <Area type="monotone" dataKey="Accuracy" stroke="#38BDF8" strokeWidth={2} fillOpacity={1} fill="url(#colorAcc)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="h-48 bg-gray-900/50 p-3 rounded-xl border border-gray-800/80 flex items-center justify-between">
            <div className="w-1/2 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={distributionData} innerRadius={25} outerRadius={40} paddingAngle={5} dataKey="value">
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-[10px] space-y-1 font-mono text-gray-400 w-1/2 pl-2">
              {distributionData.map((d) => (
                <div key={d.name} className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
                  <span className="truncate">{d.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}