import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white dark:from-slate-950 to-slate-50 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-slate-900 dark:text-white">
            Lo que dicen <span className="text-indigo-600">nuestros clientes</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 font-medium text-base sm:text-lg max-w-2xl mx-auto">
            Testimonios reales de empresas que confiaron en JuanBvtech para su transformación digital
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 relative">
              <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 text-indigo-100 dark:text-indigo-900" size={36} />

              <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6 relative z-10">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${testimonial.avatarColor} rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-lg sm:text-xl flex-shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-black text-base sm:text-lg text-slate-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300">{testimonial.role}</p>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-1">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-5 sm:mb-6 font-medium text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Proyecto: {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <div className="grid grid-cols-3 sm:inline-flex sm:items-center gap-0 sm:gap-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden sm:overflow-visible sm:px-8 sm:py-6">
            <div className="text-center py-5 px-4 sm:p-0">
              <p className="text-3xl sm:text-4xl font-black text-indigo-600">15+</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">Proyectos</p>
            </div>
            <div className="text-center py-5 px-4 sm:p-0 border-x border-slate-100 dark:border-slate-700 sm:border-x-0 sm:border-x-0">
              <div className="hidden sm:block w-px h-12 bg-slate-200 dark:bg-slate-700 mx-auto mb-0"></div>
              <p className="text-3xl sm:text-4xl font-black text-emerald-600">100%</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">Satisfacción</p>
            </div>
            <div className="text-center py-5 px-4 sm:p-0">
              <p className="text-3xl sm:text-4xl font-black text-blue-600">3</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">Años Exp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
