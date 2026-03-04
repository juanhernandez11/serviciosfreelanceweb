import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
            Lo que dicen <span className="text-indigo-600">nuestros clientes</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Testimonios reales de empresas que confiaron en JuanBvtech para su transformación digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative">
              <Quote className="absolute top-8 right-8 text-indigo-100" size={48} />
              
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className={`w-16 h-16 ${testimonial.avatarColor} rounded-2xl flex items-center justify-center text-white font-black text-xl flex-shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900">{testimonial.name}</h3>
                  <p className="text-sm font-bold text-slate-500">{testimonial.role}</p>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-1">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Proyecto: {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-center">
              <p className="text-4xl font-black text-indigo-600">15+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Proyectos Completados</p>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-4xl font-black text-emerald-600">100%</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Satisfacción Cliente</p>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-4xl font-black text-blue-600">3+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Años Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
