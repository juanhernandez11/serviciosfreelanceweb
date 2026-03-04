import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto?",
      answer: "Depende de la complejidad. Un sitio web básico toma 1-2 semanas, mientras que aplicaciones web complejas pueden tomar 4-8 semanas. Durante la consultoría inicial te daremos un timeline exacto."
    },
    {
      question: "¿Cuál es el costo de sus servicios?",
      answer: "Los proyectos van desde $500 USD para sitios web básicos hasta $5,000+ USD para aplicaciones empresariales. Ofrecemos planes de pago flexibles y presupuestos personalizados según tus necesidades."
    },
    {
      question: "¿Ofrecen mantenimiento después del lanzamiento?",
      answer: "Sí, incluimos 30 días de soporte gratuito post-lanzamiento. Después ofrecemos planes de mantenimiento mensual desde $100 USD que incluyen actualizaciones, backups y soporte técnico."
    },
    {
      question: "¿Trabajan con clientes fuera de México?",
      answer: "¡Absolutamente! Trabajamos con clientes en toda Latinoamérica y Estados Unidos. Todas nuestras comunicaciones son remotas y utilizamos herramientas colaborativas modernas."
    },
    {
      question: "¿Qué tecnologías utilizan?",
      answer: "Trabajamos con React, TypeScript, Node.js, WordPress, Firebase, MySQL y más. Seleccionamos el stack tecnológico óptimo según las necesidades específicas de cada proyecto."
    },
    {
      question: "¿Puedo ver ejemplos de su trabajo anterior?",
      answer: "Por supuesto. En la sección 'Casos de Éxito' puedes ver proyectos reales con enlaces funcionales. También podemos compartir más ejemplos durante la consultoría inicial."
    },
    {
      question: "¿Ofrecen servicios de SEO y marketing digital?",
      answer: "Sí, todos nuestros sitios web incluyen optimización SEO básica on-page. Para estrategias de marketing digital más avanzadas, trabajamos con partners especializados."
    },
    {
      question: "¿Qué pasa si no estoy satisfecho con el resultado?",
      answer: "Trabajamos con revisiones ilimitadas durante el desarrollo hasta que estés 100% satisfecho. Si no cumplimos con lo acordado, ofrecemos garantía de devolución."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <HelpCircle size={16} className="text-indigo-600" />
            <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
            ¿Tienes <span className="text-indigo-600">dudas?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium">
            Aquí respondemos las preguntas más comunes de nuestros clientes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden transition-all hover:border-indigo-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 sm:px-8 py-6 flex items-start sm:items-center justify-between gap-4 text-left group"
              >
                <span className="font-black text-base sm:text-lg text-slate-900 group-hover:text-indigo-600 transition-colors flex-1">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-indigo-600' : ''
                  }`}
                  size={24}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-black mb-4">¿No encuentras tu respuesta?</h3>
            <p className="text-base sm:text-lg mb-8 text-indigo-100">
              Contáctanos directamente y resolveremos todas tus dudas en minutos
            </p>
            <a
              href="#contacto-form"
              className="inline-block bg-white text-indigo-600 px-8 sm:px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-indigo-50 transition-all shadow-xl"
            >
              Hablar con un Experto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
