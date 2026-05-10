import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-44 sm:pb-20 lg:pt-60 lg:pb-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50/40 dark:from-indigo-900/20 to-transparent -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm rounded-full mb-6 sm:mb-8">
            <Sparkles size={14} className="text-emerald-500 flex-shrink-0" />
            <span className="text-[10px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest">Tecnología Impulsada por Resultados</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter mb-6 sm:mb-8">
            Software que <span className="text-indigo-600">Escala</span> tu Negocio.
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-12 leading-relaxed font-medium max-w-2xl">
            Transformamos infraestructuras digitales lentas en motores de alta eficiencia. Soluciones reales de JuanBvtech para PyMEs y Corporativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a href="#b3c7f1a2d509" className="bg-indigo-600 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 group">
              Explorar Soluciones <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 px-4 sm:px-6 border-l-2 border-slate-100 dark:border-slate-700">
              <div>
                <p className="text-xs font-black text-slate-900 dark:text-white uppercase">Certificaciones 2025</p>
                <p className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">AWS · Microsoft · Google Gemini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
