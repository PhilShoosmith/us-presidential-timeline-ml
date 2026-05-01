import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { President, GameState, AnyLastGuess, GameMode, LeaderboardEntry, HighScores } from './types';
import { getGamePresidents, allPresidents, getSuccessorGamePresidents } from './services/gameService';
import { ROUNDS_PER_GAME, YEAR_TOLERANCE, ROUND_DURATION_SECONDS, HISTORICAL_PERIODS } from './constants';
import StartScreen from './components/StartScreen';
import Scoreboard from './components/Scoreboard';
import PresidentCard from './components/PresidentCard';
import Timeline from './components/Timeline';
import Feedback from './components/Feedback';
import EndScreen from './components/EndScreen';
import { GoogleGenAI } from '@google/genai';
import RAGModal from './components/RAGModal';
import Confetti from './components/Confetti';
import NextPresidentGuesser from './components/NextPresidentGuesser';
import ReviewScreen from './components/ReviewScreen';
import FactGuesser from './components/FactGuesser';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Leaderboard from './components/Leaderboard';
import Instructions from './components/Instructions';
import { supabase } from './lib/supabase';

import { useLanguage } from './contexts/LanguageContext';

interface GroundingSource {
  uri: string;
  title: string;
}

const periodToGradientMap: { [key: string]: string } = {
  'Early Republic': 'from-cyan-800',
  'Civil War & Industrialization': 'from-amber-800',
  'The American Century': 'from-indigo-800',
  'Modern America': 'from-rose-800',
};

const DynamicBackground: React.FC<{ period: (typeof HISTORICAL_PERIODS)[0] | null }> = ({ period }) => {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-900">
      {HISTORICAL_PERIODS.map(p => (
        <div 
          key={p.name} 
          className={
            `absolute inset-0 bg-gradient-to-br ${periodToGradientMap[p.name]} to-slate-900 transition-opacity duration-1000 ease-in-out
             ${period?.name === p.name ? 'opacity-30' : 'opacity-0'}`
          } 
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [gameMode, setGameMode] = useState<GameMode>('year');
  const [allPresidentsData, setAllPresidentsData] = useState<President[]>(allPresidents);
  const [gamePresidentIds, setGamePresidentIds] = useState<number[]>([]);
  
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [totalTimeLeft, setTotalTimeLeft] = useState<number>(0);
  const [lastGuess, setLastGuess] = useState<AnyLastGuess | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(ROUND_DURATION_SECONDS);
  const timeLeftRef = useRef<number>(timeLeft);
  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);

  const [typedYear, setTypedYear] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [adminViewIndex, setAdminViewIndex] = useState<number>(0);
  const timerIdRef = useRef<number | null>(null);
  
  const [isGuessingInProgress, setIsGuessingInProgress] = useState(false);
  const [guessFeedback, setGuessFeedback] = useState<{ type: 'president' | 'year', value: number, isCorrect: boolean } | null>(null);

  const [isRagModalOpen, setIsRagModalOpen] = useState<boolean>(false);
  const [ragContent, setRagContent] = useState<{ title: string; text: string; imageUrl?: string; } | null>(null);
  const [ragSources, setRagSources] = useState<GroundingSource[]>([]);
  const [isRagLoading, setIsRagLoading] = useState<boolean>(false);

  const [isInstructionsOpen, setIsInstructionsOpen] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const { t } = useLanguage();

  const presidents = useMemo(() =>
    gamePresidentIds
      .map(id => allPresidentsData.find(m => m.id === id))
      .filter((m): m is President => m !== undefined),
    [gamePresidentIds, allPresidentsData]
  );

  const clearTimer = useCallback(() => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  }, []);

  const startGame = useCallback((mode: GameMode) => {
    setShowConfetti(false);
    setGameMode(mode);
    const gamePresidents = (mode === 'year' || mode === 'fact')
      ? getGamePresidents(allPresidentsData) 
      : getSuccessorGamePresidents(allPresidentsData);
    setGamePresidentIds(gamePresidents.map(m => m.id));
    setCurrentRound(0);
    setScore(0);
    setTotalTimeLeft(0);
    setLastGuess(null);
    setTypedYear('');
    setGameState('playing');
  }, [allPresidentsData]);

  const handleShowLeaderboard = useCallback(() => setGameState('leaderboard'), []);
  const handleShowPrivacy = useCallback(() => setGameState('privacy'), []);
  const handleShowTerms = useCallback(() => setGameState('terms'), []);
  const handleBackToStart = useCallback(() => setGameState('start'), []);

  const handleYearGuess = useCallback((guessedYear: number) => {
    if (isGuessingInProgress || !presidents[currentRound]) return;
    clearTimer();
    setIsGuessingInProgress(true);

    const correctYear = presidents[currentRound].termStart;
    const timedOut = guessedYear === 0;
    const isCorrect = !timedOut && Math.abs(guessedYear - correctYear) <= YEAR_TOLERANCE;

    if (timedOut) {
      setTotalTimeLeft(prev => prev + timeLeftRef.current);
      setLastGuess({ type: 'year', isCorrect: false, guessedYear, correctYear, timedOut });
      setGameState('feedback');
      setIsGuessingInProgress(false);
      return;
    }

    setGuessFeedback({ type: 'year', value: guessedYear, isCorrect });

    setTimeout(() => {
      if (isCorrect) {
        setScore(prevScore => prevScore + 1);
        setShowConfetti(true);
      }
      setTotalTimeLeft(prev => prev + timeLeftRef.current);
      setLastGuess({ type: 'year', isCorrect, guessedYear, correctYear, timedOut });
      setGameState('feedback');
      setIsGuessingInProgress(false);
      setGuessFeedback(null);
    }, 1200);
  }, [isGuessingInProgress, presidents, currentRound, clearTimer]);

  const handlePresidentGuess = useCallback((guessedPresidentId: number) => {
    if (isGuessingInProgress || !presidents[currentRound]) return;
    clearTimer();
    setIsGuessingInProgress(true);
    
    const currentPresidentInFullList = allPresidentsData.findIndex(m => m.id === presidents[currentRound].id);
    const correctSuccessor = allPresidentsData[currentPresidentInFullList + 1];
    if (!correctSuccessor) { // Should not happen with current game logic, but a good safeguard
        setIsGuessingInProgress(false);
        return;
    }
    const correctPresidentId = correctSuccessor.id;
    const timedOut = guessedPresidentId === 0;
    const isCorrect = !timedOut && guessedPresidentId === correctPresidentId;

    if (timedOut) {
        setTotalTimeLeft(prev => prev + timeLeftRef.current);
        setLastGuess({ type: 'president', isCorrect: false, guessedPresidentId, correctPresidentId, timedOut });
        setGameState('feedback');
        setIsGuessingInProgress(false);
        return;
    }
    
    setGuessFeedback({ type: 'president', value: guessedPresidentId, isCorrect });

    setTimeout(() => {
        if (isCorrect) {
          setScore(prevScore => prevScore + 1);
          setShowConfetti(true);
        }
        setTotalTimeLeft(prev => prev + timeLeftRef.current);
        setLastGuess({ type: 'president', isCorrect, guessedPresidentId, correctPresidentId, timedOut });
        setGameState('feedback');
        setIsGuessingInProgress(false);
        setGuessFeedback(null);
    }, 1200);
  }, [isGuessingInProgress, presidents, currentRound, clearTimer, allPresidentsData]);

  const handleFactGuess = useCallback((guessedPresidentId: number) => {
    if (isGuessingInProgress || !presidents[currentRound]) return;
    clearTimer();
    setIsGuessingInProgress(true);
    
    const correctPresidentId = presidents[currentRound].id;
    const timedOut = guessedPresidentId === 0;
    const isCorrect = !timedOut && guessedPresidentId === correctPresidentId;
    
    if (timedOut) {
      setTotalTimeLeft(prev => prev + timeLeftRef.current);
      setLastGuess({ type: 'fact', isCorrect: false, guessedPresidentId, correctPresidentId, timedOut: true });
      setGameState('feedback');
      setIsGuessingInProgress(false);
      return;
    }
    
    setGuessFeedback({ type: 'president', value: guessedPresidentId, isCorrect });

    setTimeout(() => {
      if (isCorrect) {
        setScore(prevScore => prevScore + 1);
        setShowConfetti(true);
      }
      setTotalTimeLeft(prev => prev + timeLeftRef.current);
      setLastGuess({ type: 'fact', isCorrect, guessedPresidentId, correctPresidentId, timedOut });
      setGameState('feedback');
      setIsGuessingInProgress(false);
      setGuessFeedback(null);
    }, 1200);
  }, [isGuessingInProgress, presidents, currentRound, clearTimer]);
  
  useEffect(() => {
    if (gameState === 'playing' && !isAdmin) {
      setTimeLeft(ROUND_DURATION_SECONDS);
      timerIdRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            if(gameMode === 'year') handleYearGuess(0);
            else if (gameMode === 'president') handlePresidentGuess(0);
            else handleFactGuess(0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearTimer();
    }
    return clearTimer;
  }, [gameState, currentRound, isAdmin, gameMode, handleYearGuess, handlePresidentGuess, handleFactGuess, clearTimer]);

  const nextRound = useCallback(() => {
    setShowConfetti(false);
    if (currentRound + 1 < ROUNDS_PER_GAME) {
      setCurrentRound(prev => prev + 1);
      setLastGuess(null);
      setTypedYear('');
      setGameState('playing');
    } else {
      setGameState('end');
    }
  }, [currentRound]);

  const saveHighScore = useCallback(async (name: string) => {
    try {
      const { error } = await supabase
        .from('leaderboard')
        .insert([
          { 
            name: name.slice(0, 20), 
            score, 
            total_time_left: totalTimeLeft, 
            game_mode: gameMode 
          }
        ]);

      if (error) throw error;
      setGameState('leaderboard');
    } catch (err) {
      console.error('Error saving score:', err);
      // Fallback or error message for user
      setGameState('leaderboard');
    }
  }, [score, totalTimeLeft, gameMode]);

  const currentPresident = isAdmin ? allPresidentsData[adminViewIndex] : presidents[currentRound];
  const currentPeriod = useMemo(() => {
    if (!currentPresident) return null;
    return HISTORICAL_PERIODS.find(p => currentPresident.termStart >= p.start && currentPresident.termStart < p.end) || null;
  }, [currentPresident]);

  const renderGameScreen = () => {
    switch (gameState) {
      case 'start':
        return <StartScreen onStart={startGame} presidents={allPresidentsData} onShowInstructions={() => setIsInstructionsOpen(true)} onReview={() => setGameState('review')} onShowPrivacy={handleShowPrivacy} onShowTerms={handleShowTerms} onShowLeaderboard={handleShowLeaderboard} />;
      case 'privacy':
        return <PrivacyPolicy onBack={handleBackToStart} />;
      case 'terms':
        return <TermsOfService onBack={handleBackToStart} />;
      case 'leaderboard':
        return <Leaderboard onBack={handleBackToStart} />;
      case 'review':
        return <ReviewScreen presidents={allPresidentsData} onBack={handleBackToStart} />;
      case 'end':
        return <EndScreen score={score} totalTimeLeft={totalTimeLeft} gameMode={gameMode} onRestart={handleBackToStart} onSaveScore={saveHighScore} />;
      case 'playing':
      case 'feedback':
        if (!currentPresident) return null;
        return (
          <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col items-center justify-start min-h-screen pt-20 sm:pt-24 pb-4">
            <Scoreboard score={score} incorrect={currentRound - score} round={currentRound + 1} totalRounds={ROUNDS_PER_GAME} timeLeft={timeLeft} isAdmin={isAdmin} />
            <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-4 lg:gap-8">
              {(gameState === 'feedback' || (gameState === 'playing' && gameMode !== 'fact')) && (
                <div className="w-full flex justify-center md:justify-end flex-shrink-0 md:w-1/2 lg:w-auto">
                  <PresidentCard president={currentPresident} showTerm={gameState === 'feedback' || isAdmin} />
                </div>
              )}
              <div className="w-full md:w-1/2 lg:max-w-md mt-4 md:mt-0 flex flex-col justify-start">
                {gameState === 'feedback' && lastGuess ? (
                  <Feedback lastGuess={lastGuess} onNext={nextRound} president={currentPresident} onLearnMore={async (p) => {
                    setIsRagModalOpen(true);
                    setIsRagLoading(true);
                    setRagContent({ title: p.name, text: '', imageUrl: p.imageUrl });
                    try {
                      const apiKey = process.env.GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY || process.env.API_KEY;
                      const ai = new GoogleGenAI({ apiKey: apiKey as string });
                      const response = await ai.models.generateContent({
                        model: "gemini-3-flash-preview",
                        contents: `Tell me a brief history about US President ${p.name}. Focus on key events and legacy.`,
                        config: { tools: [{googleSearch: {}}] },
                      });
                      setRagContent({ title: p.name, text: response.text, imageUrl: p.imageUrl });
                    } catch (e) { setRagContent({ title: p.name, text: t('rag.error'), imageUrl: p.imageUrl }); }
                    finally { setIsRagLoading(false); }
                  }} allPresidents={allPresidentsData} onStop={handleBackToStart} />
                ) : (
                   <>
                    {gameMode === 'year' && (
                       <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                        <p className="text-base text-slate-300 font-light mb-3 text-center">{t('game.placePresident', { name: currentPresident.name })}</p>
                        <form onSubmit={(e) => { e.preventDefault(); handleYearGuess(parseInt(typedYear, 10)); }} className="flex flex-col sm:flex-row items-center gap-3 w-full">
                            <input type="number" value={typedYear} onChange={(e) => setTypedYear(e.target.value)} placeholder={t('game.year')} className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white w-full text-center" disabled={isGuessingInProgress} />
                            <button type="submit" className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700" disabled={isGuessingInProgress}>{t('game.submit')}</button>
                        </form>
                       </div>
                    )}
                    {gameMode === 'president' && (
                       <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                        <p className="text-base text-slate-300 font-light mb-3 text-center">{t('game.whoWasSuccessor', { name: currentPresident.name })}</p>
                         <NextPresidentGuesser presidents={allPresidentsData} onSubmit={handlePresidentGuess} disabled={isGuessingInProgress} guessFeedback={guessFeedback?.type === 'president' ? { ...guessFeedback, type: 'president' as const } : null} />
                       </div>
                    )}
                    {gameMode === 'fact' && (
                      <FactGuesser correctPresident={currentPresident} allPresidents={allPresidentsData} onSubmit={handleFactGuess} disabled={isGuessingInProgress} guessFeedback={guessFeedback?.type === 'president' ? { ...guessFeedback, type: 'president' as const } : null} />
                    )}
                   </>
                )}
              </div>
            </div>
            {gameMode === 'year' && (
              <div className="w-full mt-4">
                 <Timeline onGuess={handleYearGuess} disabled={gameState === 'feedback' || isGuessingInProgress} lastGuess={lastGuess?.type === 'year' ? lastGuess : null} allPresidents={presidents} guessFeedback={guessFeedback?.type === 'year' ? { ...guessFeedback, type: 'year' as const } : null} />
              </div>
            )}
          </div>
        );
      default: return null;
    }
  };

  return (
    <main className="min-h-screen w-full text-white font-sans flex items-center justify-center relative">
      <DynamicBackground period={['start', 'end', 'leaderboard', 'review', 'privacy', 'terms'].includes(gameState) ? null : currentPeriod} />
      {showConfetti && <Confetti />}
      {isInstructionsOpen && <Instructions onClose={() => setIsInstructionsOpen(false)} />}
      {renderGameScreen()}
      <RAGModal isOpen={isRagModalOpen} isLoading={isRagLoading} content={ragContent} sources={ragSources} onClose={() => setIsRagModalOpen(false)} />
    </main>
  );
};

export default App;