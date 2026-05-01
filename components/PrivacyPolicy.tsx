import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  const { t } = useLanguage();
  return (
    <div className="w-full min-h-screen bg-slate-900 text-slate-300 p-8 pt-24 overflow-y-auto">
      <div className="max-w-3xl mx-auto bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700 p-8 animate-fade-in-up">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{t('privacy.title')}</h1>
            <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors text-2xl font-bold">&times;</button>
        </div>
        
        <div className="space-y-4 text-sm leading-relaxed">
           <p className="text-slate-500">{t('privacy.lastUpdated')}</p>
           <p>{t('privacy.p1')}</p>
           
           <h2 className="text-xl font-bold text-white mt-6 mb-2">{t('privacy.h1')}</h2>
           <p>{t('privacy.p2')}</p>

           <h2 className="text-xl font-bold text-white mt-6 mb-2">{t('privacy.h2')}</h2>
           <p>{t('privacy.p3')}</p>
           
           <h2 className="text-xl font-bold text-white mt-6 mb-2">{t('privacy.h3')}</h2>
           <p>{t('privacy.p4')}</p>

           <h2 className="text-xl font-bold text-white mt-6 mb-2">{t('privacy.h4')}</h2>
           <p>{t('privacy.p5')}</p>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700 flex justify-center">
             <button
              onClick={onBack}
              className="px-6 py-2 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-300 shadow-md"
            >
              {t('privacy.back')}
            </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;