import React from 'react';
import { Linkedin } from 'lucide-react';
import Logo from '../components/Logo';

const Footer = ({ phoneNumber }) => {
  return (
    <footer id="contacto" className="pt-32 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">¿Listo para el <br /><span className="text-indigo-600 italic">salto tecnológico?</span></h2>
          <p className="text-xl text-slate-500 mb-12 font-medium">Contratar a **JuanBvtech** es la inversión más rentable para su presencia digital.</p>
          <div className="flex justify-center">
            <a href="https://www.linkedin.com/in/juan-ramon-moreno-bravo-0830b1271/" target="_blank" rel="noopener noreferrer" className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-blue-600 hover:text-white transition-all group">
              <Linkedin className="mx-auto mb-4 text-blue-600 group-hover:text-white" size={32} />
              <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Conéctate en</p>
              <p className="font-bold text-lg">LinkedIn</p>
              <p className="text-xs text-slate-500 group-hover:text-white/80 mt-2">Juan Ramón Moreno Bravo</p>
            </a>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Logo className="w-10 h-10 text-slate-200" />
            <div className="text-left">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">JuanBvtech Solutions</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tehuacán · Puebla · México</p>
            </div>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">© {new Date().getFullYear()} - JuanBvtech Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
