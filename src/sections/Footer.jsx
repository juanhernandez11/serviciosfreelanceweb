import React from 'react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { ROUTES } from '../data/routes';

const Footer = () => {
  return (
    <footer id="contacto" className="pt-16 sm:pt-24 lg:pt-32 pb-10 sm:pb-12 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 tracking-tighter leading-tight text-slate-900 dark:text-white">
            ¿Listo para el <br /><span className="text-indigo-600 italic">salto tecnológico?</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-12 font-medium">
            Contratar a JuanBvtech es la inversión más rentable para su presencia digital.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/juan-ramon-moreno-bravo-0830b1271/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-700 hover:bg-blue-600 hover:text-white transition-all group w-full max-w-xs"
            >
              <Linkedin className="mx-auto mb-3 sm:mb-4 text-blue-600 group-hover:text-white" size={28} />
              <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60 dark:text-slate-300">Conéctate en</p>
              <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-white">LinkedIn</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-white/80 mt-2">Juan Ramón Moreno Bravo</p>
            </a>
          </div>
        </div>

        <div className="pt-8 sm:pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-center md:text-left">
          <div className="flex items-center gap-3 sm:gap-4">
            <Logo className="w-8 h-8 sm:w-10 sm:h-10 text-slate-200 dark:text-slate-600 flex-shrink-0" />
            <div className="text-left">
              <p className="text-[10px] font-black text-slate-300 dark:text-slate-500 uppercase tracking-[0.3em]">JuanBvtech Solutions</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tehuacán · Puebla · México</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 sm:gap-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              © {new Date().getFullYear()} - JuanBvtech Solutions
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
              <Link to={ROUTES.privacy} className="text-[10px] font-bold text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 uppercase tracking-widest transition-colors">
                Políticas de Privacidad
              </Link>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <Link to={ROUTES.terms} className="text-[10px] font-bold text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 uppercase tracking-widest transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
