import React from 'react';
import { Users, Building2, Factory } from 'lucide-react';
import { businessSolutions } from '../data/content';

const iconMap = {
  Users: Users,
  Building2: Building2,
  Factory: Factory
};

const Solutions = () => {
  return (
    <section id="soluciones" className="py-32 bg-slate-900 text-white rounded-[3rem] md:rounded-[5rem] mx-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter">Segmentación Estratégica</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {businessSolutions.map((sol, i) => {
            const Icon = iconMap[sol.iconName];
            return (
              <div key={i} className="group p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all text-left">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-500 transition-colors">
                  <Icon size={32} className={sol.iconColor} />
                </div>
                <h3 className="text-2xl font-black mb-4">{sol.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10 min-h-[80px]">{sol.description}</p>
                <div className="space-y-4">
                  {sol.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> {f}
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
