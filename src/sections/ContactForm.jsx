import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, User, Building, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto-form" className="py-20 md:py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Lado Izquierdo - Información */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">Disponible para Proyectos</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Inicia tu proyecto <span className="text-indigo-400">hoy mismo</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Agenda una consultoría gratuita de 30 minutos y descubre cómo podemos transformar tu negocio digitalmente.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-indigo-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Respuesta en 24 horas</h3>
                  <p className="text-slate-400 text-sm">Te contactamos rápidamente para agendar tu consultoría</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Sin compromiso</h3>
                  <p className="text-slate-400 text-sm">Consultoría inicial 100% gratuita y sin obligación</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Propuesta personalizada</h3>
                  <p className="text-slate-400 text-sm">Solución a medida según tus necesidades específicas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho - Formulario */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Solicita tu consultoría gratuita</h3>
              
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-emerald-600" size={40} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3">¡Mensaje enviado!</h4>
                  <p className="text-slate-600">Te contactaremos en las próximas 24 horas.</p>
                </div>
              ) : status === 'error' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="text-red-600" size={40} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3">Error al enviar</h4>
                  <p className="text-slate-600">Por favor intenta de nuevo o contáctanos por teléfono.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">
                      Nombre completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 font-medium focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="Juan Pérez"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 font-medium focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="juan@empresa.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 font-medium focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="Mi Empresa S.A."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">
                      Cuéntanos sobre tu proyecto *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-slate-400" size={20} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 font-medium focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                        placeholder="Necesito un sitio web para mi negocio..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-indigo-600 text-white py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar Consultoría Gratuita
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Al enviar aceptas nuestra política de privacidad
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
