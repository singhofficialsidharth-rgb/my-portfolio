import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { GitBranch, Download } from 'lucide-react';

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
    <section id="dashboard" className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 md:pt-16 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center overflow-x-hidden">
      
      {/* TEXT INTRO PANEL */}
      <div className="lg:col-span-5 space-y-4 md:space-y-6 text-left">
        <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 px-3 py-1 rounded-full text-[11px] sm:text-xs text-neon font-medium max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-ping" />
          <span className="truncate">Available for Data Analyst Roles & Internships</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight wrap-break-words">
          Transforming Complex Datasets Into <span className="text-transparent bg-clip-text bg-linear-to-r from-neon to-purple">Actionable Strategy.</span>
        </h1>
        
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
          Commerce graduate (ARSD, Delhi University) and Data Analyst with practical internship experience at Vodafone Idea Foundation. Specializing in exploratory data analysis using Python, advanced Excel matrix modeling, and high-impact Power BI dashboard engineering.
        </p>
        
        {/* RESPONSIVE BUTTON GRID */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
          <a href="#projects" className="bg-linear-to-r from-neon to-purple text-bg-dark font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition shadow-lg shadow-neon/20 text-center justify-center items-center flex">
            View Case Studies
          </a>
          
          {/* DOWNLOAD RESUME BUTTON */}
          <a 
            href="./public/Resume.pdf" 
            download="Resume.pdf"
            className="bg-neon/10 border border-neon/30 hover:bg-neon/20 text-neon font-medium text-sm px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 transition text-center"
          >
            <Download size={16} /> Download Resume
          </a>

          <a href="https://github.com/singhofficialsidharth-rgb" target="_blank" rel="noreferrer" className="bg-gray-800/40 border border-gray-700/60 text-sm px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800/80 transition text-gray-300">
            <GitBranch size={16} /> GitHub
          </a>
        </div>
      </div>

      {/* DASHBOARD GRAPH PANEL */}
      <div className="lg:col-span-7 bg-bg-card/60 border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-sm relative w-full overflow-hidden">
        <div className="flex items-center justify-between mb-6 gap-2">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] text-gray-500 ml-1 font-mono hidden xs:inline">exploratory_analysis.py</span>
          </div>
          <span className="text-[10px] font-mono text-neon bg-neon/10 px-2 py-0.5 rounded shrink-0">Production Pipeline</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Chart 1 */}
          <div className="h-40 sm:h-48 bg-gray-900/50 p-3 rounded-xl border border-gray-800/80">
            <p className="text-[11px] font-semibold text-gray-400 mb-2 font-mono">Statistical Confidence Level</p>
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#38BDF8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#4B5563" fontSize={9} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', fontSize: 11 }} />
                <Area type="monotone" dataKey="Accuracy" stroke="#38BDF8" strokeWidth={2} fillOpacity={1} fill="url(#colorAcc)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 2 */}
          <div className="h-40 sm:h-48 bg-gray-900/50 p-3 rounded-xl border border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="w-full sm:w-1/2 h-2/3 sm:h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={distributionData} innerRadius={20} outerRadius={35} paddingAngle={4} dataKey="value">
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', fontSize: 10 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-[10px] space-y-1 font-mono text-gray-400 w-full sm:w-1/2 pl-0 sm:pl-2 flex flex-row sm:flex-col flex-wrap gap-x-2 justify-center sm:justify-start">
              {distributionData.map((d) => (
                <div key={d.name} className="flex items-center gap-1 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                  <span className="truncate max-w-25 sm:max-w-none">{d.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}