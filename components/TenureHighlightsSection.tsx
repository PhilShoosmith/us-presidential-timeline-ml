import React from 'react';
import { Crown, Landmark, Flag, Sparkles, Calendar, Globe, Award } from 'lucide-react';
import { PresidentTenureHighlight, ContemporaryLeader } from '../data/presidentsTenureHighlights';

interface TenureHighlightsSectionProps {
  highlight: PresidentTenureHighlight;
}

const LeaderPill: React.FC<{ leader: ContemporaryLeader; theme: 'monarch' | 'pm' | 'french' }> = ({ leader, theme }) => {
  const colorMap = {
    monarch: {
      border: 'border-amber-500/30 hover:border-amber-400/60',
      bg: 'bg-amber-950/20 hover:bg-amber-950/40',
      nameText: 'text-amber-200',
      titleText: 'text-amber-300/80',
      yearBadge: 'bg-amber-900/40 text-amber-300 border-amber-700/40',
    },
    pm: {
      border: 'border-blue-500/30 hover:border-blue-400/60',
      bg: 'bg-blue-950/20 hover:bg-blue-950/40',
      nameText: 'text-blue-200',
      titleText: 'text-blue-300/80',
      yearBadge: 'bg-blue-900/40 text-blue-300 border-blue-700/40',
    },
    french: {
      border: 'border-indigo-500/30 hover:border-indigo-400/60',
      bg: 'bg-indigo-950/20 hover:bg-indigo-950/40',
      nameText: 'text-indigo-200',
      titleText: 'text-indigo-300/80',
      yearBadge: 'bg-indigo-900/40 text-indigo-300 border-indigo-700/40',
    },
  }[theme];

  return (
    <div className={`p-3 rounded-xl border ${colorMap.border} ${colorMap.bg} transition-all duration-200 flex flex-col justify-between`}>
      <div>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h5 className={`text-sm font-bold ${colorMap.nameText} leading-snug`}>{leader.name}</h5>
          <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border whitespace-nowrap ${colorMap.yearBadge}`}>
            {leader.years}
          </span>
        </div>
        <p className={`text-xs ${colorMap.titleText} font-medium leading-tight`}>{leader.roleOrTitle}</p>
      </div>
      {leader.notes && (
        <p className="text-[11px] text-slate-400 mt-2 pt-1.5 border-t border-slate-700/40 italic">
          {leader.notes}
        </p>
      )}
    </div>
  );
};

export const TenureHighlightsSection: React.FC<TenureHighlightsSectionProps> = ({ highlight }) => {
  return (
    <section className="mt-8 pt-6 border-t border-slate-700/70">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-gradient-to-br from-amber-500/20 to-blue-500/20 border border-amber-500/40 rounded-xl text-amber-300 shadow-md">
            <Award className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                Tenure Highlights
              </h3>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold">
                {highlight.termYears}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Key accomplishments during presidential tenure & contemporary world leaders in power
            </p>
          </div>
        </div>
      </div>

      {/* Part 1: Key Highlights during period in office */}
      <div className="mb-6 bg-slate-800/60 rounded-xl p-4 sm:p-5 border border-slate-700/80 shadow-md">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-3">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Key Highlights During Period in Office</span>
        </div>
        <ul className="space-y-2.5">
          {highlight.keyEvents.map((event, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
              <span className="leading-relaxed">{event}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Part 2: Who was in power at that time (UK Monarchs, UK PMs, French Rulers) */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider mb-3.5">
          <Globe className="w-4 h-4 text-blue-400" />
          <span>Contemporary World Leaders in Power During This Tenure</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* UK Monarchs */}
          <div className="bg-slate-900/70 rounded-xl p-3.5 sm:p-4 border border-amber-500/30 flex flex-col">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-amber-500/20">
              <div className="flex items-center gap-2 text-amber-300">
                <Crown className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs sm:text-sm font-bold tracking-tight">UK Monarchs</h4>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-950/60 text-amber-300 border border-amber-700/50">
                {highlight.ukMonarchs.length}
              </span>
            </div>
            <div className="space-y-2.5 flex-grow">
              {highlight.ukMonarchs.map((monarch, idx) => (
                <LeaderPill key={idx} leader={monarch} theme="monarch" />
              ))}
            </div>
          </div>

          {/* UK Prime Ministers */}
          <div className="bg-slate-900/70 rounded-xl p-3.5 sm:p-4 border border-blue-500/30 flex flex-col">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-blue-500/20">
              <div className="flex items-center gap-2 text-blue-300">
                <Landmark className="w-4 h-4 text-blue-400" />
                <h4 className="text-xs sm:text-sm font-bold tracking-tight">UK Prime Ministers</h4>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-950/60 text-blue-300 border border-blue-700/50">
                {highlight.ukPrimeMinisters.length}
              </span>
            </div>
            <div className="space-y-2.5 flex-grow">
              {highlight.ukPrimeMinisters.map((pm, idx) => (
                <LeaderPill key={idx} leader={pm} theme="pm" />
              ))}
            </div>
          </div>

          {/* French Rulers */}
          <div className="bg-slate-900/70 rounded-xl p-3.5 sm:p-4 border border-indigo-500/30 flex flex-col">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-indigo-500/20">
              <div className="flex items-center gap-2 text-indigo-300">
                <Flag className="w-4 h-4 text-indigo-400" />
                <h4 className="text-xs sm:text-sm font-bold tracking-tight">French Rulers</h4>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-indigo-950/60 text-indigo-300 border border-indigo-700/50">
                {highlight.frenchRulers.length}
              </span>
            </div>
            <div className="space-y-2.5 flex-grow">
              {highlight.frenchRulers.map((ruler, idx) => (
                <LeaderPill key={idx} leader={ruler} theme="french" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenureHighlightsSection;
