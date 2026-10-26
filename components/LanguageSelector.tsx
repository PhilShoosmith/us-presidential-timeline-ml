import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'en', label: 'English', flagUrl: 'https://flagcdn.com/w20/gb.png' },
    { code: 'zh', label: '中文', flagUrl: 'https://flagcdn.com/w20/cn.png' },
    { code: 'hi', label: 'हिन्दी', flagUrl: 'https://flagcdn.com/w20/in.png' },
    { code: 'es', label: 'Español', flagUrl: 'https://flagcdn.com/w20/es.png' },
    { code: 'ar', label: 'العربية', flagUrl: 'https://flagcdn.com/w20/sa.png' },
    { code: 'fr', label: 'Français', flagUrl: 'https://flagcdn.com/w20/fr.png' },
    { code: 'ja', label: '日本語', flagUrl: 'https://flagcdn.com/w20/jp.png' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative z-[100]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 sm:gap-2 bg-slate-800/90 text-white border border-slate-700/80 rounded-lg px-2 sm:px-2.5 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-slate-700 transition-colors shadow-md"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <img src={currentLang.flagUrl} alt={`${currentLang.label} flag`} className="w-4 h-auto rounded-sm shadow-sm" />
        <span className="font-medium text-[11px] sm:text-xs">{currentLang.label}</span>
        <svg className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-full min-w-[130px] bg-slate-800 border border-slate-600 rounded-lg shadow-2xl overflow-hidden z-[110]" role="listbox">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as Language);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm transition-colors ${language === lang.code ? 'bg-slate-700 text-white font-medium' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
              role="option"
              aria-selected={language === lang.code}
            >
              <img src={lang.flagUrl} alt={`${lang.label} flag`} className="w-5 h-auto rounded-sm shadow-sm" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
