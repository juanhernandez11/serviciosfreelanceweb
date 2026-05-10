import React from 'react';
import { TrendingUp, ExternalLink, Cpu, Zap, ClipboardCheck, Package } from 'lucide-react';
import { successCases } from '../data/content';

const iconMap = { Cpu, Zap, ClipboardCheck, Package };

const SuccessCases = () => {
  return (
    <section id="casos-de-exito" className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-slate-900 dark:text-white">Casos de Éxito & Proyectos</h2>
          <p className="text-slate-600 dark:text-slate-300 font-medium text-base sm:text-lg mt-4 max-w-2xl mx-auto">Evidencia técnica de soluciones implementadas con impacto medible en rendimiento y eficiencia.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {successCases.map((project, index) => {
            const Icon = iconMap[project.iconName];
            return (
              <div key={index} className="group bg-slate-50 dark:bg-slate-800 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className={`h-48 sm:h-64 bg-gradient-to-br ${project.gradient} p-6 sm:p-12 flex flex-col justify-end relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                    <Icon size={100} className="text-white sm:hidden" />
                    <Icon size={140} className="text-white hidden sm:block" />
                  </div>
                  <span className="bg-white/20 backdrop-blur text-white text-[10px] font-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-fit mb-3 sm:mb-4 border border-white/10 uppercase tracking-widest">
                    {project.tag}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">{project.title}</h3>
                </div>

                <div className="p-6 sm:p-10 lg:p-12 flex-grow flex flex-col">
                  <div className="mb-4 sm:mb-6">
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">Empresa / Proyecto</p>
                    <p className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">{project.company}</p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-slate-600 px-3 py-1.5 rounded-lg uppercase">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                    <div className="flex items-center gap-3 text-emerald-600">
                      <TrendingUp size={16} className="flex-shrink-0" />
                      <span className="text-xs font-black uppercase tracking-widest">{project.metrics}</span>
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-black text-slate-900 dark:text-white hover:text-indigo-600 transition-colors uppercase tracking-widest text-[10px]">
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
