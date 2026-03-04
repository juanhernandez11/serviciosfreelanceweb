import React from 'react';
import { Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

const WorkProcess = () => {
  const steps = [
    {
      number: "01",
      icon: <Search size={32} />,
      title: "Descubrimiento",
      description: "Analizamos tus necesidades, objetivos y audiencia para crear una estrategia personalizada.",
      duration: "1-2 días",
      color: "from-blue-500 to-indigo-600"
    },
    {
      number: "02",
      icon: <Lightbulb size={32} />,
      title: "Planificación",
      description: "Diseñamos la arquitectura, wireframes y definimos el stack tecnológico óptimo.",
      duration: "2-3 días",
      color: "from-indigo-500 to-violet-600"
    },
    {
      number: "03",
      icon: <Code size={32} />,
      title: "Desarrollo",
      description: "Construimos tu solución con código limpio, escalable y siguiendo las mejores prácticas.",
      duration: "1-4 semanas",
      color: "from-violet-500 to-purple-600"
    },
    {
      number: "04",
      icon: <Rocket size={32} />,
      title: "Lanzamiento",
      description: "Desplegamos, optimizamos y te capacitamos para que domines tu nueva herramienta.",
      duration: "1-2 días",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
            Proceso de trabajo <span className="text-indigo-600">probado</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Metodología ágil y transparente que garantiza resultados en tiempo récord
          </p>
        </div>

        {/* Desktop/Tablet View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Línea conectora */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent -translate-x-1/2 z-0"></div>
              )}
              
              <div className="relative bg-slate-50 rounded-3xl p-8 border-2 border-slate-100 hover:border-indigo-200 transition-all hover:shadow-xl group-hover:-translate-y-2 duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {step.icon}
                </div>
                
                <div className="absolute top-6 right-6 text-6xl font-black text-slate-100 group-hover:text-indigo-50 transition-colors">
                  {step.number}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3 relative z-10">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.description}</p>
                
                <div className="flex items-center gap-2 text-xs font-black text-indigo-600 uppercase tracking-widest">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  {step.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Línea vertical conectora */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-slate-200 translate-y-6"></div>
              )}
              
              <div className="relative bg-slate-50 rounded-3xl p-6 border-2 border-slate-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl font-black text-slate-100 mb-2">{step.number}</div>
                    <h3 className="text-xl font-black text-slate-900">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4 pl-20">{step.description}</p>
                
                <div className="flex items-center gap-2 text-xs font-black text-indigo-600 uppercase tracking-widest pl-20">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  {step.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Garantías */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-emerald-50 border-2 border-emerald-100 rounded-2xl p-6 sm:p-8">
            <CheckCircle className="text-emerald-600 mb-4" size={32} />
            <h4 className="font-black text-lg sm:text-xl text-slate-900 mb-2">Entregas a tiempo</h4>
            <p className="text-sm text-slate-600">Cumplimos con los plazos acordados o tu dinero de vuelta</p>
          </div>
          
          <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-6 sm:p-8">
            <CheckCircle className="text-blue-600 mb-4" size={32} />
            <h4 className="font-black text-lg sm:text-xl text-slate-900 mb-2">Soporte incluido</h4>
            <p className="text-sm text-slate-600">30 días de soporte técnico post-lanzamiento sin costo</p>
          </div>
          
          <div className="bg-indigo-50 border-2 border-indigo-100 rounded-2xl p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
            <CheckCircle className="text-indigo-600 mb-4" size={32} />
            <h4 className="font-black text-lg sm:text-xl text-slate-900 mb-2">Código de calidad</h4>
            <p className="text-sm text-slate-600">Documentación completa y código limpio garantizado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
