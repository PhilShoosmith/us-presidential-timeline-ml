
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GoogleGenAI } from '@google/genai';

interface RAGModalProps {
  isOpen: boolean;
  isLoading: boolean;
  content: { title: string; text: string; imageUrl?: string; } | null;
  sources: { uri: string; title: string }[];
  onClose: () => void;
}

const RAGModal: React.FC<RAGModalProps> = ({ isOpen, isLoading, content, sources, onClose }) => {
  const { t, language } = useLanguage();
  const [translatedText, setTranslatedText] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    setTranslatedText(null);
    
    const autoTranslate = async () => {
      if (!content?.text || language === 'en') return;
      setIsTranslating(true);
      try {
        const apiKey = process.env.GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY || process.env.API_KEY;
        if (!apiKey) throw new Error("API_KEY environment variable not set");
        const ai = new GoogleGenAI({ apiKey: apiKey as string });
        const targetLang = language === 'fr' ? 'French' : language === 'es' ? 'Spanish' : language === 'ja' ? 'Japanese' : language === 'zh' ? 'Chinese' : language === 'ar' ? 'Arabic' : language === 'hi' ? 'Hindi' : 'English';
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: `Translate the following text to ${targetLang}. Keep the formatting intact:\n\n${content.text}`
        });
        if (response.text) {
          setTranslatedText(response.text);
        }
      } catch (error) {
        console.error("Translation error", error);
      } finally {
        setIsTranslating(false);
      }
    };

    autoTranslate();
  }, [content, language]);

  if (!isOpen) return null;

  const displayText = translatedText || content?.text;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rag-modal-title"
    >
      <div 
        className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col animate-scale-in" 
        onClick={e => e.stopPropagation()}
      >
        <header className="p-4 border-b border-slate-700 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-4">
            {content?.imageUrl && (
              <img 
                src={content.imageUrl} 
                alt={content.title} 
                className="w-16 h-20 object-cover rounded-md shadow-md border border-slate-600"
              />
            )}
            <div className="flex items-center gap-3">
              <h2 id="rag-modal-title" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {content?.title ? `About ${content.title}` : t('rag.loading')}
              </h2>
              {isTranslating && (
                <span className="px-3 py-1 text-xs font-semibold bg-slate-700 text-slate-200 rounded-full animate-pulse">
                  {t('rag.translating')}
                </span>
              )}
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-white transition-colors text-3xl leading-none font-bold"
            aria-label={t('rag.close')}
          >
            &times;
          </button>
        </header>
        <div className="p-6 overflow-y-auto">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-48 text-center p-4">
                <p className="text-lg text-slate-300">{t('rag.findingInfo')}</p>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 my-2">{content?.title}</p>
                <p className="text-slate-400 animate-pulse">{t('rag.pleaseWait')}</p>
            </div>
          ) : (
            <>
              <div className="text-slate-300 leading-relaxed space-y-4">
                {displayText?.split('\n').filter(p => p.trim()).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
              </div>
              {sources.length > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">{t('rag.sources')}</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {sources.map((source, index) => (
                      <li key={index} className="truncate">
                        <a 
                          href={source.uri} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-400 hover:underline"
                          title={source.title}
                        >
                          {source.title || new URL(source.uri).hostname}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RAGModal;