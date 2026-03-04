import React from 'react';
import { TrendingUp, ExternalLink, Cpu, Zap, ClipboardCheck, Package } from 'lucide-react';
import { successCases } from '../data/content';

const iconMap = {
  Cpu: Cpu,
  Zap: Zap,
  ClipboardCheck: ClipboardCheck,
  Package: Package
};

const SuccessCases = () => {
  return (
    <section id="casos-de-éxito" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Casos de Éxito & Proyectos</h2>
          <p className="text-slate-500 font-medium text-lg mt-4 max-w-2xl mx-auto">Evidencia técnica de soluciones implementadas con impacto medible en rendimiento y eficiencia.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {successCases.map((project, index) => {
            const Icon = iconMap[project.iconName];
            return (
              <div key={index} className="group bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className={`h-64 bg-gradient-to-br ${project.gradient} p-12 flex flex-col justify-end relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                    <Icon size={140} className="text-white" />
                  </div>
                  <span className="bg-white/20 backdrop-blur text-white text-[10px] font-black px-4 py-2 rounded-full w-fit mb-4 border border-white/10 uppercase tracking-widest">
                    {project.tag}
                  </span>
                  <h3 className="text-3xl font-black text-white leading-tight">{project.title}</h3>
                </div>
                
                <div className="p-12 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">Empresa / Proyecto</p>
                      <p className="font-bold text-xl text-slate-900">{project.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 font-medium leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold bg-white text-slate-500 border border-slate-200 px-3 py-1.5 rounded-lg uppercase">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex items-center gap-3 text-emerald-600">
                      <TrendingUp size={18} />
                      <span className="text-xs font-black uppercase tracking-widest">{project.metrics}</span>
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-[10px]">
                        Sitio Web <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
