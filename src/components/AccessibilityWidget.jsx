import React, { useState, useEffect, useRef } from 'react';
import { Accessibility, X, ZoomIn, ZoomOut, Contrast, Volume2, VolumeX, RotateCcw, Zap, Type } from 'lucide-react';
import { useApp } from '../context/AppContext';

// Lector de pantalla usando SpeechSynthesis API
const speak = (text) => {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-MX';
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
};

const stopSpeaking = () => {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
};

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  const {
    fontSize, setFontSize,
    highContrast, setHighContrast,
    screenReader, setScreenReader,
    reduceMotion, setReduceMotion,
    dyslexiaFont, setDyslexiaFont,
  } = useApp();

  const reset = () => {
    setFontSize(100);
    setHighContrast(false);
    setScreenReader(false);
    setReduceMotion(false);
    setDyslexiaFont(false);
    stopSpeaking();
    setSpeaking(false);
  };

  // Leer página completa
  const handleReadPage = () => {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
      return;
    }
    const main = document.querySelector('main') || document.body;
    const text = main.innerText || main.textContent;
    speak(text);
    setSpeaking(true);
  };

  // Activar/desactivar modo lector: al hacer clic en cualquier elemento lo lee
  useEffect(() => {
    if (!screenReader) return;

    const handleClick = (e) => {
      const el = e.target.closest('a, button, h1, h2, h3, h4, p, li, label, span');
      if (el) {
        const text = el.getAttribute('aria-label') || el.innerText || el.textContent;
        if (text?.trim()) speak(text.trim());
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [screenReader]);

  // Cerrar con Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  // Detener lectura cuando se desmonta
  useEffect(() => () => stopSpeaking(), []);

  const hasSpeech = typeof window !== 'undefined' && !!window.speechSynthesis;

  return (
    <>
      {/* Skip link para navegación por teclado */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-xl focus:font-bold focus:text-sm"
      >
        Saltar al contenido principal
      </a>

      <div className="fixed bottom-6 left-6 z-[100]">
        {open && (
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Herramientas de accesibilidad"
            className="mb-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-4 w-64"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-200">Accesibilidad</span>
              <button
                onClick={() => { setOpen(false); triggerRef.current?.focus(); }}
                aria-label="Cerrar panel de accesibilidad"
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full"
              >
                <X size={14} className="text-slate-500 dark:text-slate-400" />
              </button>
            </div>

            <div className="space-y-2" role="group" aria-label="Opciones de accesibilidad">

              {/* Tamaño de texto */}
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Tamaño de texto</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFontSize(f => Math.max(80, f - 10))}
                    aria-label={`Reducir tamaño de texto, actualmente ${fontSize}%`}
                    className="flex-1 flex items-center justify-center gap-1 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-xl text-xs font-bold transition-colors"
                  >
                    <ZoomOut size={13} /> A-
                  </button>
                  <span aria-live="polite" aria-atomic="true" className="text-xs font-black text-slate-600 dark:text-slate-300 w-10 text-center">
                    {fontSize}%
                  </span>
                  <button
                    onClick={() => setFontSize(f => Math.min(150, f + 10))}
                    aria-label={`Aumentar tamaño de texto, actualmente ${fontSize}%`}
                    className="flex-1 flex items-center justify-center gap-1 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-xl text-xs font-bold transition-colors"
                  >
                    <ZoomIn size={13} /> A+
                  </button>
                </div>
              </div>

              {/* Alto contraste */}
              <button
                onClick={() => setHighContrast(v => !v)}
                aria-pressed={highContrast}
                aria-label={`Alto contraste: ${highContrast ? 'activado' : 'desactivado'}`}
                className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors ${highContrast ? 'bg-yellow-400 text-black' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-yellow-100 dark:hover:bg-yellow-900/30'}`}
              >
                <Contrast size={14} />
                <span>Alto Contraste</span>
                {highContrast && <span className="ml-auto text-[10px] font-black">ACTIVO</span>}
              </button>

              {/* Fuente para dislexia */}
              <button
                onClick={() => setDyslexiaFont(v => !v)}
                aria-pressed={dyslexiaFont}
                aria-label={`Fuente para dislexia: ${dyslexiaFont ? 'activada' : 'desactivada'}`}
                className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors ${dyslexiaFont ? 'bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/30'}`}
              >
                <Type size={14} />
                <span>Fuente Dislexia</span>
                {dyslexiaFont && <span className="ml-auto text-[10px] font-black">ACTIVO</span>}
              </button>

              {/* Reducir animaciones */}
              <button
                onClick={() => setReduceMotion(v => !v)}
                aria-pressed={reduceMotion}
                aria-label={`Reducir animaciones: ${reduceMotion ? 'activado' : 'desactivado'}`}
                className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors ${reduceMotion ? 'bg-orange-400 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-orange-100 dark:hover:bg-orange-900/30'}`}
              >
                <Zap size={14} />
                <span>Reducir Animaciones</span>
                {reduceMotion && <span className="ml-auto text-[10px] font-black">ACTIVO</span>}
              </button>

              {/* Lector al hacer clic */}
              <button
                onClick={() => setScreenReader(v => !v)}
                aria-pressed={screenReader}
                aria-label={`Lector al hacer clic: ${screenReader ? 'activado' : 'desactivado'}`}
                className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors ${screenReader ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/30'}`}
              >
                <Volume2 size={14} />
                <span>Leer al hacer clic</span>
                {screenReader && <span className="ml-auto text-[10px] font-black">ACTIVO</span>}
              </button>

              {/* Leer página completa */}
              {hasSpeech && (
                <button
                  onClick={handleReadPage}
                  aria-label={speaking ? 'Detener lectura de página' : 'Leer página completa en voz alta'}
                  className={`w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors ${speaking ? 'bg-red-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-red-100 dark:hover:bg-red-900/30'}`}
                >
                  {speaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  <span>{speaking ? 'Detener lectura' : 'Leer página'}</span>
                  {speaking && <span className="ml-auto text-[10px] font-black animate-pulse">●</span>}
                </button>
              )}

              {/* Restablecer */}
              <button
                onClick={reset}
                aria-label="Restablecer todas las opciones de accesibilidad"
                className="w-full flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 transition-colors"
              >
                <RotateCcw size={14} /> Restablecer todo
              </button>
            </div>
          </div>
        )}

        <button
          ref={triggerRef}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Cerrar herramientas de accesibilidad' : 'Abrir herramientas de accesibilidad'}
          aria-expanded={open}
          aria-haspopup="dialog"
          className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          <Accessibility size={24} />
        </button>
      </div>
    </>
  );
};

export default AccessibilityWidget;
