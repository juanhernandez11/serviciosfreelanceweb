import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import Logo from './Logo';
import { useApp } from '../context/AppContext';
import { sectionMap } from '../data/content';

const Navbar = ({ scrolled, navLinks, setIsMenuOpen, activeSection }) => {
  const { darkMode, setDarkMode } = useApp();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const hash = href.replace('#', '');
    const realId = sectionMap[hash] || hash;
    const element = document.getElementById(realId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 cursor-pointer"
          aria-label="Ir al inicio"
        >
          <Logo className="w-10 h-10 text-slate-900 dark:text-white" />
          <div className="flex flex-col leading-none">
            <span className="font-black text-xl tracking-tighter uppercase dark:text-white">JUANBV <span className="text-indigo-600">TECH</span></span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1">Software Architecture</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`text-[11px] font-black uppercase tracking-widest transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'}`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#c4b8f2e7a315"
            onClick={(e) => handleNavClick(e, '#c4b8f2e7a315')}
            className="bg-slate-900 dark:bg-indigo-600 text-white px-7 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all hover:shadow-xl hover:shadow-indigo-100 active:scale-95"
          >
            Solicitar Consultoría
          </a>
          <button
            onClick={() => setDarkMode(v => !v)}
            aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-500" />}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setDarkMode(v => !v)}
            aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-500 dark:text-slate-400" />}
          </button>
          <button className="p-2 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl" onClick={() => setIsMenuOpen(true)} aria-label="Abrir menú">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
