import React from 'react';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

export default function Credentials() {
  const certifications = [
    "Google Data Analytics Professional Certificate (Coursera)",
    "Advanced MS Excel Suite Credentials (Udemy)",
    "Data Analytics Simulation Course — Forage (Accenture)",
    "Prompt Engineering for ChatGPT (Vanderbilt University)",
    "Internal Audit Analyst Virtual Experience (JPMorgan Chase & Co.)"
  ];

  return (
    <section id="credentials" className="border-t border-gray-900 bg-gray-950/20 py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* EDUCATION COLUMN */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <GraduationCap className="text-neon" size={28} />
              Education
            </h2>
            <p className="text-sm text-gray-400">Academic background and structural training frameworks.</p>
          </div>

          <div className="space-y-6">
            {/* Degree */}
            <div className="p-6 bg-bg-card/40 border border-gray-800 rounded-xl relative group hover:border-gray-700 transition">
              <span className="absolute top-4 right-4 text-[11px] font-mono bg-neon/10 text-neon px-2 py-0.5 rounded">2020 - 2023</span>
              <h4 className="text-lg font-bold text-white">B.Com (Hons)</h4>
              <p className="text-sm text-purple font-medium">Atma Ram Sanatan Dharma College, Delhi University</p>
              <p className="text-xs text-gray-500 mt-2">Graduated with a strong analytical focus in corporate commerce.</p>
            </div>

            {/* Class 12 */}
            <div className="p-6 bg-bg-card/40 border border-gray-800 rounded-xl relative">
              <span className="absolute top-4 right-4 text-[11px] font-mono bg-gray-800 text-gray-400 px-2 py-0.5 rounded">Aggregate: 87%</span>
              <h4 className="text-base font-bold text-white">Class 12 (Commerce Stream)</h4>
              <p className="text-xs text-gray-400">Army Public School, Delhi Cantt</p>
            </div>

            {/* Class 10 */}
            <div className="p-6 bg-bg-card/40 border border-gray-800 rounded-xl relative">
              <span className="absolute top-4 right-4 text-[11px] font-mono bg-gray-800 text-gray-400 px-2 py-0.5 rounded">Aggregate: 74.8%</span>
              <h4 className="text-base font-bold text-white">Class 10</h4>
              <p className="text-xs text-gray-400">Army Public School, Delhi Cantt</p>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS COLUMN */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <Award className="text-purple" size={28} />
              Certifications & Virtuals
            </h2>
            <p className="text-sm text-gray-400">Verified domain specializations and practical simulation badges.</p>
          </div>

          <div className="p-6 bg-bg-card/30 border border-gray-800/80 rounded-2xl divide-y divide-gray-800/60">
            {certifications.map((cert, index) => (
              <div key={index} className={`flex items-start gap-3 py-4 ${index === 0 ? 'pt-0' : ''} ${index === certifications.length - 1 ? 'pb-0' : ''}`}>
                <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-300 font-medium leading-relaxed">{cert}</p>
              </div>
            ))}
          </div>

          {/* Speed badge placeholder */}
          <div className="p-4 bg-purple/5 border border-purple/10 rounded-xl flex items-center justify-between text-xs font-mono text-purple">
            <span>Operational Parameter:</span>
            <span className="font-bold bg-purple/10 px-2 py-1 rounded text-white">Typing Velocity: 90 WPM</span>
          </div>
        </div>

      </div>
    </section>
  );
}