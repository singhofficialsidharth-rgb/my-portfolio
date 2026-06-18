import React from 'react';
import { BarChart3, Database, Filter, FileSpreadsheet } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="border-t border-gray-900 bg-gray-950/40 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Analytics Stack & Competencies</h2>
          <p className="text-gray-400">Engineered with specialized tools for handling complex business querying, deep data extraction, and executive presentation layers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-bg-card/40 border border-gray-800 rounded-xl hover:border-neon/50 transition duration-300">
            <BarChart3 className="text-neon mb-4" size={28} />
            <h3 className="font-semibold text-white mb-2">BI Dashboards</h3>
            <p className="text-sm text-gray-400">Power BI dashboarding, custom DAX metrics, data modeling schemas, and cross-report drilling features.</p>
          </div>
          <div className="p-6 bg-bg-card/40 border border-gray-800 rounded-xl hover:border-purple/50 transition duration-300">
            <Database className="text-purple mb-4" size={28} />
            <h3 className="font-semibold text-white mb-2">SQL Engineering</h3>
            <p className="text-sm text-gray-400">Complex subqueries, window functions, relational database optimization, and stored procedures.</p>
          </div>
          <div className="p-6 bg-bg-card/40 border border-gray-800 rounded-xl hover:border-emerald-500/50 transition duration-300">
            <Filter className="text-emerald-400 mb-4" size={28} />
            <h3 className="font-semibold text-white mb-2">Advanced Python</h3>
            <p className="text-sm text-gray-400">Exploratory Data Analysis (EDA) using Pandas, NumPy, profiling missing datasets, and anomaly tracking.</p>
          </div>
          <div className="p-6 bg-bg-card/40 border border-gray-800 rounded-xl hover:border-rose-500/50 transition duration-300">
            <FileSpreadsheet className="text-rose-400 mb-4" size={28} />
            <h3 className="font-semibold text-white mb-2">Spreadsheet Analytics</h3>
            <p className="text-sm text-gray-400">Advanced Microsoft Excel matrix operations, lookup vectors, custom pivot modeling, and script macros.</p>
          </div>
        </div>
      </div>
    </section>
  );
}