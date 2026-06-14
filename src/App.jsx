import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { exams } from "./data";

// --- IKONY (SVG) ---
const IconArrowLeft = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>;
const IconX = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const IconTrash = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;

// --- KOMPAKTOWY NAGŁÓWEK ---
function TopNavigation({ onBack, backText = "Powrót", backIcon = <IconArrowLeft />, rightContent = null }) {
  return (
    <header className="w-full bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm shrink-0">
      <button onClick={onBack} className="text-slate-600 hover:text-slate-900 flex items-center gap-2 font-bold text-sm sm:text-base transition-colors">
        {backIcon} {backText}
      </button>
      {rightContent && <div>{rightContent}</div>}
    </header>
  );
}

export default function App() {
  const [view, setView] = useState('home');
  const [selectedExam, setSelectedExam] = useState(null);
  const [progress, setProgress] = useState({});
  const [testConfig, setTestConfig] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('flashcards_progress');
    if (saved) setProgress(JSON.parse(saved));
  }, []);

  const updateProgress = (id, status) => {
    setProgress(prev => {
      const next = { ...prev, [id]: status };
      localStorage.setItem('flashcards_progress', JSON.stringify(next));
      return next;
    });
  };

  const updateGroupProgress = (ids, status) => {
    setProgress(prev => {
      const next = { ...prev };
      ids.forEach(id => { next[id] = status; });
      localStorage.setItem('flashcards_progress', JSON.stringify(next));
      return next;
    });
  };

  const clearExamProgress = (examId) => {
    const newProgress = { ...progress };
    exams[examId].forEach(q => delete newProgress[q.id]);
    setProgress(newProgress);
    localStorage.setItem('flashcards_progress', JSON.stringify(newProgress));
  };

  const goHome = () => { setView('home'); setSelectedExam(null); };

  if (view === 'home') return <HomeView onSelect={(id) => { setSelectedExam(id); setView('menu'); }} />;
  if (view === 'menu') return <MenuView examId={selectedExam} onBack={goHome} onBrowse={() => setView('browse')} onTest={() => setView('testConfig')} />;
  if (view === 'browse') return <BrowseView examId={selectedExam} progress={progress} updateProgress={updateProgress} updateGroupProgress={updateGroupProgress} clearProgress={() => clearExamProgress(selectedExam)} onBack={() => setView('menu')} />;
  if (view === 'testConfig') return <TestConfigView examId={selectedExam} progress={progress} clearProgress={() => clearExamProgress(selectedExam)} onBack={() => setView('menu')} onStart={(config) => { setTestConfig(config); setView('testActive'); }} />;
  if (view === 'testActive') return <TestActiveView examId={selectedExam} config={testConfig} progress={progress} updateProgress={updateProgress} onFinish={() => setView('menu')} onBack={() => setView('menu')} />;

  return null;
}

// --- WIDOKI ---

function HomeView({ onSelect }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
      <h1 className="text-3xl font-black text-slate-800 mb-8 text-center">Kocham sieci, zdam sieci</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        {Object.keys(exams).map(year => (
          <button key={year} onClick={() => onSelect(year)} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-xl font-bold text-blue-600">
            Egzamin {year}
          </button>
        ))}
      </div>
    </div>
  );
}

function MenuView({ examId, onBack, onBrowse, onTest }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <TopNavigation onBack={onBack} backText="Wybór egzaminu" />
      <main className="flex-1 w-full max-w-3xl mx-auto p-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-black text-slate-800 mb-8">Egzamin {examId}</h2>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <button onClick={onBrowse} className="flex-1 py-4 px-6 bg-white border border-slate-200 shadow-sm rounded-xl text-lg font-bold text-slate-700 hover:bg-slate-50 transition-all">
            Przeglądaj pytania
          </button>
          <button onClick={onTest} className="flex-1 py-4 px-6 bg-blue-600 text-white shadow-md rounded-xl text-lg font-bold hover:bg-blue-700 transition-all">
            Rozpocznij Test
          </button>
        </div>
      </main>
    </div>
  );
}

function BrowseView({ examId, progress, updateProgress, updateGroupProgress, clearProgress, onBack }) {
  const groupedQuestions = exams[examId].reduce((acc, curr) => {
    if (!acc[curr.pytanie]) acc[curr.pytanie] = [];
    acc[curr.pytanie].push(curr);
    return acc;
  }, {});

  const rightAction = (
    <button onClick={clearProgress} className="text-rose-600 hover:text-rose-700 flex items-center gap-1.5 font-bold bg-rose-50 px-3 py-1.5 rounded-lg text-sm transition-colors">
      <IconTrash /> Wyczyść postęp
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <TopNavigation onBack={onBack} backText="Menu Egzaminu" rightContent={rightAction} />
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 sm:p-6">
        <div className="space-y-6">
          {Object.entries(groupedQuestions).map(([groupName, groupQ]) => {
            const groupIds = groupQ.map(q => q.id);
            const allKnown = groupQ.every(q => progress[q.id] === 'known');

            return (
              <div key={groupName} className={`rounded-xl border transition-all shadow-sm ${allKnown ? 'border-emerald-300 bg-emerald-50/20' : 'border-slate-200 bg-white'}`}>
                <div className="bg-slate-50 border-b border-slate-200 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 whitespace-pre-wrap flex-1">{groupName}</h3>
                  <div className="flex gap-2 w-full md:w-auto">
                    <button onClick={() => updateGroupProgress(groupIds, 'known')} className="flex-1 md:flex-none text-sm px-4 py-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 rounded-lg font-bold transition-colors">Umiem</button>
                    <button onClick={() => updateGroupProgress(groupIds, 'unknown')} className="flex-1 md:flex-none text-sm px-4 py-2 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded-lg font-bold transition-colors">Nie umiem</button>
                  </div>
                </div>
                <div className="p-3 sm:p-4 space-y-3">
                  {groupQ.map(q => {
                    const status = progress[q.id] || 'unseen';
                    return (
                      <div key={q.id} className={`p-4 rounded-lg border ${status === 'known' ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-100'} flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors`}>
                        <div className="flex-1 text-sm">
                          <p className="font-semibold text-slate-800">{q.odpowiedz}</p>
                          <p className="mt-2 font-bold text-xs">
                            Odpowiedź z klucza: <span className={`px-2 py-0.5 rounded ml-1 ${q.odp ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>{q.odp ? "TAK" : "NIE"}</span>
                          </p>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                          <button onClick={() => updateProgress(q.id, 'known')} className={`flex-1 sm:flex-none px-4 py-2 text-sm rounded-lg font-bold transition-colors ${status === 'known' ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-200'}`}>Umiem</button>
                          <button onClick={() => updateProgress(q.id, 'unknown')} className={`flex-1 sm:flex-none px-4 py-2 text-sm rounded-lg font-bold transition-colors ${status === 'unknown' ? 'bg-slate-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}`}>Nie umiem</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function TestConfigView({ examId, progress, clearProgress, onBack, onStart }) {
  const availableQuestions = exams[examId].filter(q => progress[q.id] !== 'known');
  const availableCount = availableQuestions.length;
  
  const [roundSize, setRoundSize] = useState(Math.min(10, availableCount) || availableCount);
  const [shuffle, setShuffle] = useState(true);
  const [autoAdvance, setAutoAdvance] = useState(true);

  if (availableCount === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <TopNavigation onBack={onBack} backText="Menu Egzaminu" />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-lg text-center">
            
            <h2 className="text-2xl font-black mb-4 text-slate-800">Gratulacje! 🎉</h2>
            <p className=" text-sm text-slate-600">Umiesz już wszystkie pytania z tego egzaminu.</p>
            
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <TopNavigation onBack={onBack} backText="Menu Egzaminu" />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-lg">
          <h2 className="text-xl font-black mb-3 text-slate-800">Konfiguracja Testu</h2>
          <div className="inline-block bg-blue-50 px-3 py-1.5 rounded-lg mb-6 border border-blue-100">
            <p className="text-sm font-bold text-blue-700">Do nauki pozostało pytań: {availableCount}</p>
          </div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Wybierz wielkość rundy:</label>
          <select value={roundSize} onChange={(e) => setRoundSize(Number(e.target.value))} className="w-full mb-5 bg-slate-50 p-3 rounded-lg border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:border-blue-500 focus:ring-2 ring-blue-100 transition-all cursor-pointer">
              {availableCount >= 3 && <option value={3}>3 pytania</option>}
            {availableCount >= 5 && <option value={5}>5 pytań</option>}
            {availableCount >= 10 && <option value={10}>10 pytań</option>}
            {availableCount >= 15 && <option value={15}>15 pytań</option>}
            {availableCount >= 20 && <option value={20}>20 pytań</option>}
            <option value={availableCount}>Wszystkie nieznane ({availableCount})</option>
          </select>
          
          <div className="mb-6 flex flex-col gap-3">
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200 cursor-pointer" onClick={() => setShuffle(!shuffle)}>
              <input type="checkbox" checked={shuffle} readOnly className="w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500 pointer-events-none" />
              <label className="text-sm text-slate-700 font-bold select-none cursor-pointer">Losuj kolejność pytań</label>
            </div>
            
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200 cursor-pointer" onClick={() => setAutoAdvance(!autoAdvance)}>
              <input type="checkbox" checked={autoAdvance} readOnly className="w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500 pointer-events-none" />
              <label className="text-sm text-slate-700 font-bold select-none cursor-pointer">Automatyczne sprawdzanie odpowiedzi</label>
            </div>
          </div>

          <button onClick={() => onStart({ roundSize, shuffle, forceAll: false, autoAdvance })} className="w-full py-3.5 bg-blue-600 text-white font-bold text-base rounded-xl shadow-sm hover:bg-blue-700 transition-all active:scale-[0.98]">
            Rozpocznij rundę
          </button>
        </div>
      </main>
    </div>
  );
}

function TestActiveView({ examId, config: initialConfig, progress, updateProgress, onFinish, onBack }) {
  const [config, setConfig] = useState(initialConfig);
  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState(null); 
  const [roundStats, setRoundStats] = useState({ correct: 0, incorrect: 0 });
  const [roundFinished, setRoundFinished] = useState(false);
  const [roundId, setRoundId] = useState(0); 

  useEffect(() => {
    let qList = exams[examId];
    if (!config.forceAll) {
      qList = qList.filter(q => progress[q.id] !== 'known');
    }
    if (config.shuffle) qList.sort(() => Math.random() - 0.5);
    
    const takeCount = Math.min(config.roundSize, qList.length);
    setQueue(qList.slice(0, takeCount));
    
    setCurrentIndex(0);
    setShowAnswer(false);
    setUserGuess(null);
    setRoundStats({ correct: 0, incorrect: 0 });
    setRoundFinished(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examId, config, roundId]);

  const currentQ = queue[currentIndex];
  
  const totalQuestions = exams[examId].length;
  const knownTotal = exams[examId].filter(q => progress[q.id] === 'known').length;
  const unknownTotal = exams[examId].filter(q => progress[q.id] === 'unknown').length;
  const unseenTotal = totalQuestions - knownTotal - unknownTotal;
  const remainingInExam = totalQuestions - knownTotal; 

  const handleSelfEvaluation = (knewIt) => {
    updateProgress(currentQ.id, knewIt ? 'known' : 'unknown');
    setRoundStats(prev => ({ correct: prev.correct + (knewIt ? 1 : 0), incorrect: prev.incorrect + (!knewIt ? 1 : 0) }));
    
    if (currentIndex + 1 < queue.length) {
      setCurrentIndex(curr => curr + 1);
      setShowAnswer(false);
      setUserGuess(null);
    } else {
      setRoundFinished(true);
      if (((roundStats.correct + (knewIt ? 1 : 0)) / queue.length) >= 0.8) confetti();
    }
  };

  const handleGuess = (guess) => {
    setUserGuess(guess);
    setShowAnswer(true);
  };

  const renderProgressBar = (known, unknown, total) => {
    const knownPct = (known / total) * 100 || 0;
    const unknownPct = (unknown / total) * 100 || 0;
    const unseenPct = 100 - knownPct - unknownPct;
    
    return (
      <div className="h-2 w-full bg-slate-100 rounded-full flex overflow-hidden">
        <div style={{ width: `${knownPct}%` }} className="bg-emerald-500 transition-all duration-500"></div>
        <div style={{ width: `${unknownPct}%` }} className="bg-rose-500 transition-all duration-500"></div>
        <div style={{ width: `${unseenPct}%` }} className="bg-slate-200 transition-all duration-500"></div>
      </div>
    );
  };

  if (roundFinished) {
    const scorePct = Math.round((roundStats.correct / queue.length) * 100);
    const isExamDone = remainingInExam === 0 && !config.forceAll;
    
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <TopNavigation onBack={onFinish} backText="Przerwij i wróć" />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md text-center">
            <h2 className="text-2xl font-black mb-3 text-slate-800">
              {isExamDone ? 'Egzamin opanowany! 🎉' : 'Koniec rundy'}
            </h2>
            <p className="text-sm text-slate-500 mb-4">Twój wynik w tej rundzie:</p>
            <div className="text-5xl font-black mb-8" style={{ color: scorePct >= 50 ? '#059669' : '#e11d48' }}>
              {scorePct}%
            </div>
            
            <div className="flex flex-col gap-3">
              {isExamDone ? (
                <button onClick={onFinish} className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors">
                  Wróć do menu
                </button>
              ) : (
                <>
                  <button onClick={() => setRoundId(id => id + 1)} className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-sm hover:bg-blue-700 transition-all active:scale-[0.99]">
                    Następna runda ({Math.min(config.roundSize, remainingInExam)} pytań)
                  </button>
                  {remainingInExam > config.roundSize && (
                    <button onClick={() => { setConfig(prev => ({ ...prev, roundSize: remainingInExam })); setRoundId(id => id + 1); }} className="w-full py-3.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors">
                      Dokończ resztę ({remainingInExam} pytań)
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!currentQ) return null;

  const rightStats = (
    <div className="text-xs font-black tracking-widest bg-slate-100 px-2.5 py-1 rounded-lg flex items-center">
      <span className="text-rose-500">{unknownTotal}</span>
      <span className="text-slate-300 mx-1.5">/</span>
      <span className="text-emerald-500">{knownTotal}</span>
      <span className="text-slate-300 mx-1.5">/</span>
      <span className="text-slate-400">{unseenTotal}</span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 h-[100dvh] overflow-hidden">
      <TopNavigation onBack={onBack} backText="Przerwij" backIcon={<IconX />} rightContent={rightStats} />

      <main className="flex-1 w-full max-w-3xl mx-auto p-4 flex flex-col gap-4 overflow-y-auto">
        
        {/* KOMPAKTOWE PASKI POSTĘPU */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 shrink-0">
          <div>
            <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
              <span>Egzamin</span>
              <span>{knownTotal + unknownTotal} / {totalQuestions}</span>
            </div>
            {renderProgressBar(knownTotal, unknownTotal, totalQuestions)}
          </div>
          <div>
            <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
              <span>Obecna runda</span>
              <span>{currentIndex} / {queue.length}</span>
            </div>
            {renderProgressBar(roundStats.correct, roundStats.incorrect, queue.length)}
          </div>
        </div>

        {/* ZMNIEJSZONA FISZKA */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-auto">
          
          <div className="mb-4 pb-4 border-b border-slate-100 shrink-0">
            <p className="text-sm sm:text-base font-semibold text-slate-700 leading-snug">{currentQ.pytanie}</p>
          </div>

          <div className="mb-4 shrink-0">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">{currentQ.odpowiedz}</h3>
          </div>

          {/* ODDZIELENIE ZGADYWANIA OD KLUCZA */}
          {!showAnswer ? (
             <div className="mt-auto pt-4 flex flex-col gap-2">
               <div className="grid grid-cols-2 gap-3 w-full">
                 <button onClick={() => handleGuess(true)} className="py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all">
                   TAK
                 </button>
                 <button onClick={() => handleGuess(false)} className="py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all">
                   NIE
                 </button>
               </div>
             </div>
          ) : (
            <div className="mt-auto pt-5 border-t border-slate-100 animate-fade-in flex flex-col items-center">
              
              {/* Sekcja oceny zgadywania */}
              <div className="mb-6 text-center w-full bg-slate-50 p-4 rounded-xl">
                {userGuess === currentQ.odp ? (
                  <div>
                    <span className="block text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Poprawna odpowiedź!</span>
                    <span className="text-2xl font-black text-emerald-500">{currentQ.odp ? "[T] TAK" : "[N] NIE"}</span>
                  </div>
                ) : (
                  <div>
                    <span className="block text-xs font-bold text-rose-600 uppercase tracking-widest mb-1">Pomyłka</span>
                    <div className="flex items-center justify-center gap-3 text-2xl font-black">
                       <span className="text-rose-500 line-through opacity-60">{userGuess ? "TAK" : "NIE"}</span>
                       <span className="text-slate-400 text-lg">➜</span>
                       <span className="text-emerald-500">{currentQ.odp ? "TAK" : "NIE"}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Rzeczywista decyzja użytkownika */}
              {!config.autoAdvance ? (
                <>
                  <span className="text-xs font-bold text-slate-500 mb-3 text-center">Zapisz wynik dla tej fiszki:</span>
                  <div className="grid grid-cols-2 gap-3 w-full">
                    <button onClick={() => handleSelfEvaluation(false)} className="py-3 bg-white border-2 border-rose-100 text-rose-600 font-bold text-sm rounded-xl hover:bg-rose-50 active:scale-95 transition-all">
                      Byłem w błędzie
                    </button>
                    <button onClick={() => handleSelfEvaluation(true)} className="py-3 bg-white border-2 border-emerald-100 text-emerald-600 font-bold text-sm rounded-xl hover:bg-emerald-50 active:scale-95 transition-all">
                      Znałem odpowiedź
                    </button>
                  </div>
                </>
              ) : (
                <div className="w-full">
                  <button onClick={() => handleSelfEvaluation(userGuess === currentQ.odp)} className="w-full py-4 bg-blue-600 text-white font-bold text-base rounded-xl shadow-sm hover:bg-blue-700 transition-all active:scale-95">
                    Dalej ➔
                  </button>
                </div>
              )}

            </div>
          )}
        </div>
      </main>
    </div>
  );
}