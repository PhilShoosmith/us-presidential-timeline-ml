import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { presidentsCareerData, careerCategoryConfig } from '../data/presidentsCareerData';
import { CareerCategory, CareerNode } from '../types';
import { 
  GitBranch, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Shield, 
  Building2, 
  Landmark, 
  Crown, 
  Award, 
  Sparkles, 
  Layers 
} from 'lucide-react';

interface RAGModalProps {
  isOpen: boolean;
  isLoading: boolean;
  content: { title: string; text: string; imageUrl?: string; presidentId?: number } | null;
  sources: { uri: string; title: string }[];
  onClose: () => void;
  defaultTab?: 'career' | 'overview';
}

const RAGModal: React.FC<RAGModalProps> = ({ 
  isOpen, 
  isLoading, 
  content, 
  sources, 
  onClose,
  defaultTab = 'career'
}) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'career' | 'overview'>(defaultTab);
  const [selectedCategory, setSelectedCategory] = useState<CareerCategory | 'all'>('all');
  const [viewMode, setViewMode] = useState<'tree' | 'timeline'>('tree');
  const [translatedText, setTranslatedText] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    setActiveTab(defaultTab);
    setSelectedCategory('all');
  }, [content, defaultTab]);

  // Match career data by presidentId or title
  const careerProfile = useMemo(() => {
    if (!content) return null;
    if (content.presidentId && presidentsCareerData[content.presidentId]) {
      return presidentsCareerData[content.presidentId];
    }
    const cleanTitle = content.title.toLowerCase();
    return Object.values(presidentsCareerData).find(p => 
      cleanTitle.includes(p.presidentName.toLowerCase()) || 
      p.presidentName.toLowerCase().includes(cleanTitle)
    ) || null;
  }, [content]);

  useEffect(() => {
    setTranslatedText(null);
    
    const autoTranslate = async () => {
      if (!content?.text || language === 'en') return;
      setIsTranslating(true);
      try {
        const targetLang = language === 'fr' ? 'French' : language === 'es' ? 'Spanish' : language === 'ja' ? 'Japanese' : language === 'zh' ? 'Chinese' : language === 'ar' ? 'Arabic' : language === 'hi' ? 'Hindi' : 'English';
        const res = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: "gemini-3.1-flash-lite",
            contents: `Translate the following text to ${targetLang}. Keep the formatting intact:\n\n${content.text}`
          })
        });
        let response;
        if (!res.ok) {
          const errText = await res.text();
          throw new Error(`HTTP ${res.status}: ${errText.substring(0, 100)}...`);
        } else {
          const rawText = await res.text();
          try {
            response = JSON.parse(rawText);
          } catch (e: any) {
            throw new Error(`Failed to parse JSON (Status: ${res.status}): ${rawText.substring(0, 200)}...`);
          }
        }
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

  const renderCategoryIcon = (category: CareerCategory, className = 'w-4 h-4') => {
    switch (category) {
      case 'education':
        return <GraduationCap className={className} />;
      case 'early_career':
        return <Briefcase className={className} />;
      case 'military':
        return <Shield className={className} />;
      case 'state_local':
        return <Building2 className={className} />;
      case 'federal_diplomatic':
        return <Landmark className={className} />;
      case 'presidency':
        return <Crown className={className} />;
      case 'post_presidency':
        return <Award className={className} />;
      default:
        return <Briefcase className={className} />;
    }
  };

  const filteredNodes = careerProfile 
    ? (selectedCategory === 'all' 
        ? careerProfile.treeNodes 
        : careerProfile.treeNodes.filter(n => n.category === selectedCategory))
    : [];

  return (
    <div 
      className="fixed inset-0 bg-black/75 backdrop-blur-md z-[100] flex items-center justify-center p-3 sm:p-5 animate-fade-in" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rag-modal-title"
    >
      <div 
        className="bg-slate-900 border border-slate-700/90 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col animate-scale-in text-slate-200 overflow-hidden" 
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <header className="p-4 border-b border-slate-800 bg-slate-900 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-3">
            {content?.imageUrl && (
              <img 
                src={content.imageUrl} 
                alt={content.title} 
                className="w-12 h-16 object-cover rounded-md shadow-md border border-slate-700"
              />
            )}
            <div>
              <div className="flex items-center gap-2">
                {careerProfile && (
                  <span className="px-2 py-0.5 text-xs font-mono font-bold bg-blue-900/60 border border-blue-600/40 text-blue-300 rounded">
                    #{careerProfile.presidentId}
                  </span>
                )}
                <h2 id="rag-modal-title" className="text-xl sm:text-2xl font-bold text-white">
                  {content?.title ? content.title : t('rag.loading')}
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {careerProfile ? `${careerProfile.highestEducation} • ${careerProfile.primaryField}` : 'Presidential Overview'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {isTranslating && (
              <span className="px-2.5 py-1 text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 rounded-full animate-pulse">
                {t('rag.translating')}
              </span>
            )}
            <button 
              onClick={onClose} 
              className="text-slate-400 hover:text-white transition-colors text-2xl leading-none font-bold p-1 rounded-lg hover:bg-slate-800"
              aria-label={t('rag.close')}
            >
              &times;
            </button>
          </div>
        </header>

        {/* Tab Switcher */}
        <div className="px-5 pt-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('career')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
                activeTab === 'career'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>Career Tree & Education</span>
              {careerProfile && (
                <span className="ml-1 text-[11px] font-mono px-1.5 py-0.2 bg-blue-950/60 border border-blue-800/60 text-blue-300 rounded-full">
                  {careerProfile.treeNodes.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Historical Overview & Legacy</span>
            </button>
          </div>

          {activeTab === 'career' && careerProfile && (
            <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs mb-1.5">
              <button
                onClick={() => setViewMode('tree')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-colors ${
                  viewMode === 'tree'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <GitBranch className="w-3.5 h-3.5" />
                <span>Tree View</span>
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-colors ${
                  viewMode === 'timeline'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Timeline</span>
              </button>
            </div>
          )}
        </div>

        {/* Tab Body */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 custom-scrollbar bg-slate-900/95">
          {activeTab === 'career' && careerProfile ? (
            <div>
              {/* Profile summary chips */}
              <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700/60">
                  <div className="text-slate-400 font-medium flex items-center gap-1 mb-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                    <span>Education:</span>
                  </div>
                  <span className="font-semibold text-white">{careerProfile.highestEducation}</span>
                  <span className="block text-[11px] text-slate-400 mt-0.5">{careerProfile.almaMater}</span>
                </div>

                <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700/60">
                  <div className="text-slate-400 font-medium flex items-center gap-1 mb-0.5">
                    <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                    <span>Primary Calling:</span>
                  </div>
                  <span className="font-semibold text-white">{careerProfile.primaryField}</span>
                </div>

                <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700/60">
                  <div className="text-slate-400 font-medium flex items-center gap-1 mb-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Launchpad Role:</span>
                  </div>
                  <span className="font-semibold text-emerald-300">{careerProfile.steppingStoneRole}</span>
                </div>
              </div>

              {/* Filter pills */}
              <div className="mb-5 flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  All ({careerProfile.treeNodes.length})
                </button>

                {(Object.keys(careerCategoryConfig) as CareerCategory[]).map(cat => {
                  const count = careerProfile.treeNodes.filter(n => n.category === cat).length;
                  if (count === 0) return null;
                  const config = careerCategoryConfig[cat];
                  const isSelected = selectedCategory === cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                        isSelected
                          ? `${config.badgeBg} ${config.badgeText} ${config.badgeBorder} ring-2 ring-blue-500/30 font-bold`
                          : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {renderCategoryIcon(cat, 'w-3.5 h-3.5')}
                      <span>{config.label.split('&')[0]}</span>
                      <span className="text-[10px] font-mono">({count})</span>
                    </button>
                  );
                })}
              </div>

              {/* Tree or Timeline View */}
              {viewMode === 'tree' ? (
                <div className="relative pl-6 sm:pl-10 space-y-5 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-amber-400">
                  {filteredNodes.map((node: CareerNode) => {
                    const config = careerCategoryConfig[node.category];
                    const isPresidency = node.category === 'presidency';

                    return (
                      <div key={node.id} className="relative group">
                        <div
                          className={`absolute -left-6 sm:-left-10 top-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-transform shadow-lg ${
                            isPresidency
                              ? 'bg-amber-500 border-yellow-200 text-slate-950 ring-4 ring-amber-500/30'
                              : node.highlight
                              ? 'bg-indigo-600 border-indigo-300 text-white ring-2 ring-indigo-400/40'
                              : 'bg-slate-800 border-slate-600 text-slate-300'
                          }`}
                        >
                          {renderCategoryIcon(node.category, 'w-3.5 h-3.5')}
                        </div>

                        <div
                          className={`p-4 rounded-xl border transition-all ${
                            isPresidency
                              ? 'bg-amber-950/30 border-amber-500/60 shadow-lg'
                              : node.highlight
                              ? 'bg-slate-800/80 border-indigo-500/40'
                              : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/70'
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${config.badgeBg} ${config.badgeText} ${config.badgeBorder}`}>
                                {config.label}
                              </span>
                              {node.highlight && (
                                <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                                  <Sparkles className="w-3 h-3" />
                                  Key Landmark Role
                                </span>
                              )}
                            </div>
                            <span className="text-xs font-mono font-bold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                              {node.years}
                            </span>
                          </div>

                          <h4 className={`text-base font-bold ${isPresidency ? 'text-amber-200' : 'text-white'}`}>
                            {node.role}
                          </h4>

                          <div className="text-xs text-slate-400 font-medium mt-0.5 mb-2">
                            {node.organization} {node.location ? `• ${node.location}` : ''}
                          </div>

                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-2.5 rounded-lg border border-slate-800">
                            {node.details}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {filteredNodes.map(node => {
                    const config = careerCategoryConfig[node.category];
                    const isPresidency = node.category === 'presidency';

                    return (
                      <div
                        key={node.id}
                        className={`p-3.5 rounded-xl border flex flex-col justify-between ${
                          isPresidency
                            ? 'bg-amber-950/20 border-amber-500/50 md:col-span-2'
                            : node.highlight
                            ? 'bg-slate-800/80 border-blue-500/40'
                            : 'bg-slate-800/40 border-slate-700/60'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className={`px-2 py-0.5 text-[11px] font-semibold rounded border ${config.badgeBg} ${config.badgeText} ${config.badgeBorder}`}>
                              {config.label}
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-300 bg-slate-900 px-2 py-0.5 rounded">
                              {node.years}
                            </span>
                          </div>
                          <h5 className="text-sm font-bold text-white">{node.role}</h5>
                          <p className="text-xs text-slate-400 mb-2">
                            {node.organization} {node.location ? `• ${node.location}` : ''}
                          </p>
                          <p className="text-xs text-slate-300 leading-relaxed">{node.details}</p>
                        </div>

                        {node.highlight && (
                          <div className="mt-2.5 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-amber-300">
                            <span className="font-semibold flex items-center gap-1">
                              <Sparkles className="w-3 h-3" /> Key Stepping Stone
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* Historical Overview Tab */
            <div>
              {isLoading ? (
                <div className="flex flex-col justify-center items-center h-48 text-center p-4">
                  <p className="text-lg text-slate-300">{t('rag.findingInfo')}</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 my-2">
                    {content?.title}
                  </p>
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
                    <div className="mt-6 pt-4 border-t border-slate-800">
                      <h3 className="text-base font-semibold text-slate-200 mb-2">{t('rag.sources')}</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {sources.map((source, index) => (
                          <li key={index} className="truncate text-xs">
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
          )}
        </div>

        {/* Modal Footer */}
        <footer className="px-5 py-3 border-t border-slate-800 bg-slate-900 flex justify-between items-center flex-shrink-0 text-xs text-slate-400">
          <span>
            {activeTab === 'career' && careerProfile 
              ? `${filteredNodes.length} key positions & education milestones shown`
              : 'Historical overview powered by Gemini & historical records'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
          >
            {t('rag.close')}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default RAGModal;
