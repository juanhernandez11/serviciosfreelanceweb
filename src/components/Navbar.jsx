import React from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';

const Navbar = ({ scrolled, navLinks, setIsMenuOpen }) => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
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
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 cursor-pointer">
          <Logo className="w-10 h-10 text-slate-900" />
          <div className="flex flex-col leading-none">
            <span className="font-black text-xl tracking-tighter uppercase">JUANBV <span className="text-indigo-600">TECH</span></span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1">Software Architecture</span>
          </div>
        </a>
        
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[11px] font-black text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto-form" 
            onClick={(e) => handleNavClick(e, '#contacto-form')}
            className="bg-slate-900 text-white px-7 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all hover:shadow-xl hover:shadow-indigo-100 active:scale-95"
          >
            Solicitar Consultoría
          </a>
        </div>

        <button className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-xl" onClick={() => setIsMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
