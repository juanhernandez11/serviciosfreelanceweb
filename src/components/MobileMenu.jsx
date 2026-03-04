import React from 'react';
import { X, Rocket } from 'lucide-react';
import Logo from './Logo';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, navLinks }) => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  return (
    <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
      <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMenuOpen(false)} />
      <div className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out p-8 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-12">
          <Logo className="w-8 h-8 text-slate-900" />
          <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-slate-100 rounded-full"><X size={24} /></button>
        </div>
        <div className="flex flex-col gap-8 flex-grow">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)} 
              className="text-2xl font-black text-slate-900 hover:text-indigo-600 tracking-tighter"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="pt-8 border-t border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Conecta Conmigo</p>
          <a 
            href="https://www.linkedin.com/in/juan-ramon-moreno-bravo-0830b1271/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors"
          >
            Ver LinkedIn <Rocket size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
