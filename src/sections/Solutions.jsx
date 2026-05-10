import React from 'react';
import { Users, Building2, Factory } from 'lucide-react';
import { businessSolutions } from '../data/content';

const iconMap = { Users, Building2, Factory };

const Solutions = () => {
  return (
    <section id="soluciones" className="py-16 sm:py-24 lg:py-32 bg-slate-900 text-white rounded-[2rem] sm:rounded-[3rem] md:rounded-[5rem] mx-3 sm:mx-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-10 sm:mb-16 tracking-tighter">Segmentación Estratégica</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {businessSolutions.map((sol, i) => {
            const Icon = iconMap[sol.iconName];
            return (
              <div key={i} className="group p-6 sm:p-8 lg:p-10 bg-white/5 border border-white/10 rounded-[2rem] sm:rounded-[3rem] hover:bg-white/10 transition-all text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-indigo-500 transition-colors">
                  <Icon size={28} className={sol.iconColor} />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">{sol.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 sm:mb-10">{sol.description}</p>
                <div className="space-y-3 sm:space-y-4">
                  {sol.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></div> {f}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
