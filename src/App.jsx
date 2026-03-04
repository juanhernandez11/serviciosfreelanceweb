import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './sections/Hero';
import Solutions from './sections/Solutions';
import SuccessCases from './sections/SuccessCases';
import Testimonials from './sections/Testimonials';
import WorkProcess from './sections/WorkProcess';
import Methodology from './sections/Methodology';
import ContactForm from './sections/ContactForm';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import { navLinks } from './data/content';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phoneNumber = "238-244-06-37";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar scrolled={scrolled} navLinks={navLinks} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navLinks={navLinks} />
      <Hero />
      <Solutions />
      <SuccessCases />
      <Testimonials />
      <WorkProcess />
      <Methodology />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
