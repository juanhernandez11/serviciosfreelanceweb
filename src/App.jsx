import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import AccessibilityWidget from './components/AccessibilityWidget';
import Hero from './sections/Hero';
import Solutions from './sections/Solutions';
import SuccessCases from './sections/SuccessCases';
import Testimonials from './sections/Testimonials';
import WorkProcess from './sections/WorkProcess';
import Methodology from './sections/Methodology';
import ContactForm from './sections/ContactForm';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import PrivacyPolicy from './sections/PrivacyPolicy';
import TermsConditions from './sections/TermsConditions';
import { navLinks, sectionMap } from './data/content';
import { ROUTES } from './data/routes';

const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Ordenar secciones por su posicion real en el DOM de arriba a abajo
      const sections = Object.entries(sectionMap)
        .map(([hash, realId]) => ({ hash, el: document.getElementById(realId) }))
        .filter(({ el }) => el !== null)
        .sort((a, b) => a.el.offsetTop - b.el.offsetTop);

      // La seccion activa es la ultima cuyo top ya paso el umbral del navbar
      let current = '';
      for (const { hash, el } of sections) {
        if (el.getBoundingClientRect().top <= 120) current = hash;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-300">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-xl focus:font-bold focus:text-sm">Saltar al contenido principal</a>
      <Navbar scrolled={scrolled} navLinks={navLinks} setIsMenuOpen={setIsMenuOpen} activeSection={activeSection} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navLinks={navLinks} />
      <AccessibilityWidget />
      <main id="main-content">
        <Hero />
        <Solutions />
        <SuccessCases />
        <Testimonials />
        <WorkProcess />
        <Methodology />
        <ContactForm />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

const App = () => (
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={ROUTES.privacy} element={<PrivacyPolicy />} />
        <Route path={ROUTES.terms}   element={<TermsConditions />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

export default App;
