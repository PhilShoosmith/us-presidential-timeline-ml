import React, { useState, useMemo, useEffect } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Shield, 
  Building2, 
  Landmark, 
  Crown, 
  Award, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  GitBranch, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { President, CareerCategory, CareerNode } from '../types';
import { presidentsCareerData, careerCategoryConfig } from '../data/presidentsCareerData';
import { useLanguage } from '../contexts/LanguageContext';

interface CareerTreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  president: President | null;
  allPresidents?: President[];
  onSelectPresident?: (president: President) => void;
}

export const CareerTreeModal: React.FC<CareerTreeModalProps> = ({
  isOpen,
  onClose,
  president,
  allPresidents = [],
  onSelectPresident
}) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CareerCategory | 'all'>('all');
  const [viewMode, setViewMode] = useState<'tree' | 'timeline'>('tree');
  const [currentId, setCurrentId] = useState<number>(president?.id || 1);

  useEffect(() => {
    if (president?.id) {
      setCurrentId(president.id);
      setSelectedCategory('all');
    }
  }, [president]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const activePresident = useMemo(() => {
    return allPresidents.find(p => p.id === currentId) || president;
  }, [allPresidents, currentId, president]);

  const careerProfile = useMemo(() => {
    return presidentsCareerData[currentId];
  }, [currentId]);

  const filteredNodes = useMemo(() => {
    if (!careerProfile) return [];
    if (selectedCategory === 'all') return careerProfile.treeNodes;
    return careerProfile.treeNodes.filter(node => node.category === selectedCategory);
  }, [careerProfile, selectedCategory]);

  const handlePrev = () => {
    if (currentId > 1) {
      const prevId = currentId - 1;
      setCurrentId(prevId);
      const prevPres = allPresidents.find(p => p.id === prevId);
      if (prevPres && onSelectPresident) onSelectPresident(prevPres);
    }
  };

  const handleNext = () => {
    if (currentId < 46) {
      const nextId = currentId + 1;
      setCurrentId(nextId);
      const nextPres = allPresidents.find(p => p.id === nextId);
      if (nextPres && onSelectPresident) onSelectPresident(nextPres);
    }
  };

  const handlePresidentSelect = (idStr: string) => {
    const id = parseInt(idStr, 10);
    setCurrentId(id);
    const pres = allPresidents.find(p => p.id === id);
    if (pres && onSelectPresident) onSelectPresident(pres);
  };

  if (!isOpen || !careerProfile) return null;

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

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-[120] flex items-center justify-center p-3 sm:p-5 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="career-tree-title"
    >
      <div
        className="bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden text-slate-200 animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <header className="px-5 py-4 border-b border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            {activePresident?.imageUrl && (
              <img
                src={activePresident.imageUrl}
                alt={careerProfile.presidentName}
                className="w-12 h-14 object-cover rounded-md border border-slate-700 shadow-md flex-shrink-0"
              />
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-mono font-bold bg-blue-900/50 border border-blue-600/40 text-blue-300 rounded">
                  #{careerProfile.presidentId}
                </span>
                <h2 id="career-tree-title" className="text-xl sm:text-2xl font-extrabold text-white">
                  {careerProfile.presidentName}
                </h2>
              </div>
              <p className="text-xs text-amber-400/90 font-medium mt-0.5">
                Presidential Career Progression & Education Tree
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* President quick selector */}
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <button
                onClick={handlePrev}
                disabled={currentId <= 1}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded disabled:opacity-30 disabled:hover:bg-transparent"
                title="Previous President"
                aria-label="Previous President"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <select
                value={currentId}
                onChange={e => handlePresidentSelect(e.target.value)}
                className="bg-transparent text-xs font-medium text-slate-200 px-2 py-1 focus:outline-none cursor-pointer"
                aria-label="Select President"
              >
                {allPresidents.length > 0 ? (
                  allPresidents.map(p => (
                    <option key={p.id} value={p.id} className="bg-slate-800 text-white">
                      #{p.id} {p.name}
                    </option>
                  ))
                ) : (
                  Object.values(presidentsCareerData).map(p => (
                    <option key={p.presidentId} value={p.presidentId} className="bg-slate-800 text-white">
                      #{p.presidentId} {p.presidentName}
                    </option>
                  ))
                )}
              </select>

              <button
                onClick={handleNext}
                disabled={currentId >= 46}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded disabled:opacity-30 disabled:hover:bg-transparent"
                title="Next President"
                aria-label="Next President"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-xl font-bold ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* President Highlights Sub-bar */}
        <div className="px-5 py-3 bg-slate-800/60 border-b border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs flex-shrink-0">
          <div className="flex items-start gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
            <GraduationCap className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 font-medium block">Education & Alma Mater:</span>
              <span className="text-white font-semibold">{careerProfile.highestEducation}</span>
              <span className="text-slate-400 block text-[11px] mt-0.5">{careerProfile.almaMater}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
            <Briefcase className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 font-medium block">Primary Field:</span>
              <span className="text-white font-semibold">{careerProfile.primaryField}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
            <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 font-medium block">Stepping Stone to Presidency:</span>
              <span className="text-emerald-300 font-semibold">{careerProfile.steppingStoneRole}</span>
            </div>
          </div>
        </div>

        {/* Toolbar: Category Filters & View Mode Toggle */}
        <div className="px-5 py-2.5 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar py-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All Roles ({careerProfile.treeNodes.length})
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
                      ? `${config.badgeBg} ${config.badgeText} ${config.badgeBorder} ring-2 ring-blue-500/40 font-bold`
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  {renderCategoryIcon(cat, 'w-3.5 h-3.5')}
                  <span>{config.label.split('&')[0]}</span>
                  <span className="text-[10px] opacity-75 font-mono">({count})</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
            <button
              onClick={() => setViewMode('tree')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-colors ${
                viewMode === 'tree'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Career Tree</span>
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
              <span>Path Timeline</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 custom-scrollbar bg-slate-900/95">
          {viewMode === 'tree' ? (
            /* TREE STRUCTURE VIEW */
            <div className="max-w-3xl mx-auto py-2">
              <div className="relative pl-6 sm:pl-10 space-y-6 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-amber-400">
                {filteredNodes.map((node: CareerNode, index: number) => {
                  const config = careerCategoryConfig[node.category];
                  const isPresidency = node.category === 'presidency';

                  return (
                    <div key={node.id} className="relative group">
                      {/* Node Bullet / Marker */}
                      <div
                        className={`absolute -left-6 sm:-left-10 top-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg ${
                          isPresidency
                            ? 'bg-amber-500 border-yellow-200 text-slate-950 ring-4 ring-amber-500/30'
                            : node.highlight
                            ? 'bg-indigo-600 border-indigo-300 text-white ring-2 ring-indigo-400/40'
                            : 'bg-slate-800 border-slate-600 text-slate-300'
                        }`}
                      >
                        {renderCategoryIcon(node.category, 'w-3.5 h-3.5 sm:w-4 sm:h-4')}
                      </div>

                      {/* Node Card */}
                      <div
                        className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 ${
                          isPresidency
                            ? 'bg-gradient-to-br from-amber-950/40 to-slate-800/90 border-amber-500/60 shadow-xl shadow-amber-950/30'
                            : node.highlight
                            ? 'bg-slate-800/90 border-indigo-500/40 shadow-lg hover:border-indigo-400'
                            : 'bg-slate-800/50 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${config.badgeBg} ${config.badgeText} ${config.badgeBorder}`}
                            >
                              {config.label}
                            </span>
                            {node.highlight && (
                              <span className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                Key Landmark Role
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-700">
                            {node.years}
                          </span>
                        </div>

                        <h3 className={`text-base sm:text-lg font-bold ${isPresidency ? 'text-amber-200' : 'text-white'}`}>
                          {node.role}
                        </h3>

                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-1 mb-2 font-medium">
                          <span>{node.organization}</span>
                          {node.location && (
                            <>
                              <span>•</span>
                              <span>{node.location}</span>
                            </>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/80">
                          {node.details}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* TIMELINE CHRONOLOGICAL VIEW */
            <div className="max-w-4xl mx-auto space-y-4 py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredNodes.map((node, index) => {
                  const config = careerCategoryConfig[node.category];
                  const isPresidency = node.category === 'presidency';

                  return (
                    <div
                      key={node.id}
                      className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                        isPresidency
                          ? 'bg-amber-950/20 border-amber-500/50 md:col-span-2'
                          : node.highlight
                          ? 'bg-slate-800/80 border-blue-500/40'
                          : 'bg-slate-800/40 border-slate-700/60'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2 py-0.5 text-xs font-semibold rounded-md border ${config.badgeBg} ${config.badgeText} ${config.badgeBorder}`}>
                            {config.label}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-300 bg-slate-900 px-2 py-0.5 rounded">
                            {node.years}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-1">{node.role}</h4>
                        <p className="text-xs text-slate-400 mb-2">
                          {node.organization} {node.location ? `• ${node.location}` : ''}
                        </p>
                        <p className="text-xs text-slate-300 leading-relaxed">{node.details}</p>
                      </div>

                      {node.highlight && (
                        <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-amber-300">
                          <span className="font-semibold flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Landmark Step
                          </span>
                          <span className="text-slate-400">Pivotal role before presidency</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation bar */}
        <footer className="px-5 py-3 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 flex-shrink-0 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>Showing {filteredNodes.length} of {careerProfile.treeNodes.length} career milestones</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentId <= 1}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors disabled:opacity-30 flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button
              onClick={handleNext}
              disabled={currentId >= 46}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors disabled:opacity-30 flex items-center gap-1"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors ml-2"
            >
              Done
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CareerTreeModal;
