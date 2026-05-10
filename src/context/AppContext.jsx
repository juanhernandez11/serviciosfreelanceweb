import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode,        setDarkMode]        = useState(() => localStorage.getItem('darkMode') === 'true');
  const [fontSize,        setFontSize]        = useState(() => Number(localStorage.getItem('fontSize')) || 100);
  const [highContrast,    setHighContrast]    = useState(() => localStorage.getItem('highContrast') === 'true');
  const [screenReader,    setScreenReader]    = useState(() => localStorage.getItem('screenReader') === 'true');
  const [reduceMotion,    setReduceMotion]    = useState(() => localStorage.getItem('reduceMotion') === 'true');
  const [dyslexiaFont,    setDyslexiaFont]    = useState(() => localStorage.getItem('dyslexiaFont') === 'true');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast);
    localStorage.setItem('highContrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle('screen-reader-mode', screenReader);
    localStorage.setItem('screenReader', screenReader);
  }, [screenReader]);

  useEffect(() => {
    document.documentElement.classList.toggle('reduce-motion', reduceMotion);
    localStorage.setItem('reduceMotion', reduceMotion);
  }, [reduceMotion]);

  useEffect(() => {
    document.documentElement.classList.toggle('dyslexia-font', dyslexiaFont);
    localStorage.setItem('dyslexiaFont', dyslexiaFont);
  }, [dyslexiaFont]);

  return (
    <AppContext.Provider value={{
      darkMode, setDarkMode,
      fontSize, setFontSize,
      highContrast, setHighContrast,
      screenReader, setScreenReader,
      reduceMotion, setReduceMotion,
      dyslexiaFont, setDyslexiaFont,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
