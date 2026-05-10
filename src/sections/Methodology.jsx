import React from 'react';

const Methodology = () => {
  const steps = [
    { n: "01", t: "Auditoría de Sistemas", d: "Analizamos tiempos de carga y estructura SEO." },
    { n: "02", t: "Desarrollo con Propósito", d: "Construimos interfaces rápidas y escalables." },
    { n: "03", t: "Integración de IA", d: "Implementamos Gemini para automatizar procesos." },
    { n: "04", t: "Soporte & Escalado", d: "Mantenimiento proactivo y evolución del software." }
  ];

  const techStack = [
    { title: "Frontend Stack", content: "HTML5, CSS3, JavaScript (ES6+), React, TypeScript, Angular, Tailwind CSS, Bootstrap" },
    { title: "Bases de Datos & Cloud", content: "MySQL, MongoDB, Firebase, Integración de APIs, Gestión de Contenido Dinámico" },
    { title: "Optimización & UX", content: "SEO On-Page, WordPress Pro, Core Web Vitals, Lazy Loading, Accesibilidad (UX/UI)" },
    { title: "IA & Herramientas", content: "Google Gemini, SageMaker, Git, GitHub, Office Scripts (TypeScript), Excel Pro" }
  ];

  return (
    <section id="metodologia" className="py-16 sm:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
        <div className="bg-slate-900 dark:bg-slate-800 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 lg:p-12 text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-12">Estrategia JuanBvtech</h3>
          <div className="space-y-7 sm:space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 sm:gap-6">
                <span className="text-emerald-400 font-black text-lg sm:text-xl flex-shrink-0">{step.n}</span>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-1">{step.t}</h4>
                  <p className="text-sm text-slate-400 font-medium">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 leading-tight tracking-tighter uppercase text-slate-900 dark:text-white">
            Tecnología Basada en <br /><span className="text-indigo-600 underline decoration-emerald-400 decoration-4 underline-offset-4">Ecosistemas Modernos.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 leading-relaxed font-medium">
            Mi formación en Desarrollo de Software Multiplataforma me permiten dominar el ciclo de vida completo del producto digital bajo el sello de JuanBvtech.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techStack.map((tech, i) => (
              <div key={i} className="p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{tech.title}</p>
                <p className="font-bold text-slate-900 dark:text-white text-sm leading-relaxed">{tech.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
