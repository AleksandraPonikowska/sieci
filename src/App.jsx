import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { exams} from "./data"; // Pamiętaj o eksporcie tematy z data.js!
import { tematy } from "./data2"; // Pamiętaj o eksporcie tematy z data.js!


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
  const [selectedCategory, setSelectedCategory] = useState(null);
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

  const goHome = () => { 
    setView('home'); 
    setSelectedExam(null); 
    setSelectedCategory(null);
  };

  if (view === 'home') return <HomeView onSelect={(id) => { setSelectedExam(id); setView('menu'); }} />;
  if (view === 'menu') return <MenuView examId={selectedExam} progress={progress} onBack={goHome} onBrowse={() => { setSelectedCategory(null); setView('browse'); }} onTest={(category = null) => { setSelectedCategory(category); setView('testConfig'); }} />;
  if (view === 'browse') return <BrowseView examId={selectedExam} progress={progress} updateProgress={updateProgress} updateGroupProgress={updateGroupProgress} clearProgress={() => clearExamProgress(selectedExam)} onBack={() => setView('menu')} />;
  if (view === 'testConfig') return <TestConfigView examId={selectedExam} category={selectedCategory} progress={progress} clearProgress={() => clearExamProgress(selectedExam)} onBack={() => setView('menu')} onStart={(config) => { setTestConfig(config); setView('testActive'); }} />;
  if (view === 'testActive') return <TestActiveView examId={selectedExam} category={selectedCategory} config={testConfig} progress={progress} updateProgress={updateProgress} updateGroupProgress={updateGroupProgress} onFinish={() => setView('menu')} onBack={() => setView('menu')} />;

  return null;
}

// --- WIDOKI ---

function HomeView({ onSelect }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
      <img src="https://i.redd.it/37jy75omn10e1.gif" alt="Zdam to" className="rounded-xl shadow-sm max-w-full h-auto mb-4" />
      <h1 className="mt-2 text-3xl font-black text-slate-800 mb-8 text-center">Kocham sieci, zdam sieci</h1>
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

function MenuView({ examId, progress, onBack, onBrowse, onTest }) {
  const categories = tematy[examId] || [];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <TopNavigation onBack={onBack} backText="Wybór egzaminu" />
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6 flex flex-col">
        
        <div className="text-center mb-8 mt-4">
          <h2 className="text-3xl font-black text-slate-800">Egzamin {examId}</h2>
          <p className="text-slate-500 mt-2 font-medium">Wybierz tryb nauki lub konkretny dział</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full mb-10">
          <button onClick={onBrowse} className="flex-1 py-4 px-6 bg-white border border-slate-200 shadow-sm rounded-xl text-lg font-bold text-slate-700 hover:bg-slate-50 transition-all">
            Przeglądaj wszystkie
          </button>
          <button onClick={() => onTest(null)} className="flex-1 py-4 px-6 bg-blue-600 text-white shadow-md rounded-xl text-lg font-bold hover:bg-blue-700 transition-all">
            Test z całości
          </button>
        </div>

        {categories.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 px-1">Tematy z tego egzaminu:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map(cat => {
                const catQuestions = exams[examId].filter(q => {
                  const taskId = parseInt(q.id.split('-')[1], 10);
                  return cat.tasks.includes(taskId);
                });
                
                const total = catQuestions.length;
                const known = catQuestions.filter(q => progress[q.id] === 'known').length;
                const unknown = catQuestions.filter(q => progress[q.id] === 'unknown').length;
                const unseen = total - known - unknown;
                
                const knownPct = (known / total) * 100 || 0;
                const unknownPct = (unknown / total) * 100 || 0;
                const unseenPct = (unseen / total) * 100 || 0;

                return (
                  <div key={cat.id} onClick={() => onTest(cat)} className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group flex flex-col justify-between">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{cat.nazwa}</h4>
                      <p className="text-sm text-slate-500 mt-1">{total} pytań</p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex justify-between text-xs font-bold mb-1.5">
                        <span className="text-emerald-600">{known} umiem</span>
                        <span className="text-slate-400">{unseen} nowych</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full flex overflow-hidden">
                        <div style={{ width: `${knownPct}%` }} className="bg-emerald-500"></div>
                        <div style={{ width: `${unknownPct}%` }} className="bg-rose-500"></div>
                        <div style={{ width: `${unseenPct}%` }} className="bg-slate-200"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function BrowseView({ examId, progress, updateProgress, updateGroupProgress, clearProgress, onBack }) {
  const groupedMap = exams[examId].reduce((acc, curr) => {
    const groupKey = curr.id.split('-').slice(0, 2).join('-');
    if (!acc[groupKey]) acc[groupKey] = { title: curr.pytanie, items: [] };
    acc[groupKey].items.push(curr);
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
          {Object.entries(groupedMap).map(([gKey, groupData]) => {
            const groupQ = groupData.items;
            const groupIds = groupQ.map(q => q.id);
            const allKnown = groupQ.every(q => progress[q.id] === 'known');

            return (
              <div key={gKey} className={`rounded-xl border transition-all shadow-sm ${allKnown ? 'border-emerald-300 bg-emerald-50/20' : 'border-slate-200 bg-white'}`}>
                <div className="bg-slate-50 border-b border-slate-200 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-t-xl">
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 whitespace-pre-wrap flex-1">{groupData.title}</h3>
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

function TestConfigView({ examId, category, progress, clearProgress, onBack, onStart }) {
  const [groupedMode, setGroupedMode] = useState(false);
  
  const questionPool = category 
    ? exams[examId].filter(q => {
        const taskId = parseInt(q.id.split('-')[1], 10);
        return category.tasks.includes(taskId);
      })
    : exams[examId];

  const availableSingles = questionPool.filter(q => progress[q.id] !== 'known');
  const availableCountSingle = availableSingles.length;

  const groupedMap = {};
  questionPool.forEach(q => {
    const gKey = q.id.split('-').slice(0, 2).join('-');
    if (!groupedMap[gKey]) groupedMap[gKey] = [];
    groupedMap[gKey].push(q);
  });
  const availableGroups = Object.values(groupedMap).filter(g => g.some(q => progress[q.id] !== 'known'));
  const availableCountGrouped = availableGroups.length;

  const availableCount = groupedMode ? availableCountGrouped : availableCountSingle;
  
  const [roundSize, setRoundSize] = useState(10);
  const [shuffle, setShuffle] = useState(true);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [studyMode, setStudyMode] = useState(false);

  useEffect(() => {
    if (availableCount > 0 && roundSize > availableCount) {
      setRoundSize(availableCount);
    }
  }, [groupedMode, availableCount, roundSize]);

  if (availableCount === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <TopNavigation onBack={onBack} backText="Menu Egzaminu" />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-lg text-center">
            <h2 className="text-2xl font-black mb-4 text-slate-800">Gratulacje! 🎉</h2>
            <p className=" text-sm text-slate-600">Umiesz już wszystkie pytania z {category ? 'tej kategorii' : 'tego egzaminu'}.</p>
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
          {category && (
            <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">
              Kategoria: <span className="text-blue-600">{category.nazwa}</span>
            </p>
          )}
          
          <div className="inline-block bg-blue-50 px-3 py-1.5 rounded-lg mb-6 border border-blue-100">
            <p className="text-sm font-bold text-blue-700">
              Do nauki pozostało {groupedMode ? "zadań" : "pytań (pojedynczych)"}: {availableCount}
            </p>
          </div>
          
          <label className="block text-sm font-bold text-slate-700 mb-2">Wybierz wielkość rundy {groupedMode ? "(ilość pełnych zadań)" : ""}:</label>
          <select value={roundSize} onChange={(e) => setRoundSize(Number(e.target.value))} className="w-full mb-5 bg-slate-50 p-3 rounded-lg border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:border-blue-500 focus:ring-2 ring-blue-100 transition-all cursor-pointer">
            {availableCount >= 3 && <option value={3}>3 {groupedMode ? "zadania" : "pytania"}</option>}
            {availableCount >= 5 && <option value={5}>5 {groupedMode ? "zadań" : "pytań"}</option>}
            {availableCount >= 10 && <option value={10}>10 {groupedMode ? "zadań" : "pytań"}</option>}
            {availableCount >= 15 && <option value={15}>15 {groupedMode ? "zadań" : "pytań"}</option>}
            {availableCount >= 20 && <option value={20}>20 {groupedMode ? "zadań" : "pytań"}</option>}
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

            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200 cursor-pointer" onClick={() => setStudyMode(!studyMode)}>
              <input type="checkbox" checked={studyMode} readOnly className="w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500 pointer-events-none" />
              <label className="text-sm text-slate-700 font-bold select-none cursor-pointer">Tryb nauki (wyświetlaj wskazówki od razu)</label>
            </div>

            <div className="flex items-center gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-200 cursor-pointer" onClick={() => setGroupedMode(!groupedMode)}>
              <input type="checkbox" checked={groupedMode} readOnly className="w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500 pointer-events-none" />
              <label className="text-sm text-slate-700 font-bold select-none cursor-pointer">Tryb egzamin (całe zadania na raz)</label>
            </div>
          </div>

          <button onClick={() => onStart({ roundSize, shuffle, forceAll: false, autoAdvance, studyMode, groupedMode })} className="w-full py-3.5 bg-blue-600 text-white font-bold text-base rounded-xl shadow-sm hover:bg-blue-700 transition-all active:scale-[0.98]">
            Rozpocznij rundę
          </button>
        </div>
      </main>
    </div>
  );
}

function TestActiveView({ examId, category, config: initialConfig, progress, updateProgress, updateGroupProgress, onFinish, onBack }) {
  const [config, setConfig] = useState(initialConfig);
  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const [userGuess, setUserGuess] = useState(null);
  const [groupGuesses, setGroupGuesses] = useState({}); 
  
  const [roundStats, setRoundStats] = useState({ correct: 0, incorrect: 0, score: 0, full: 0, half: 0, zero: 0 });
  const [roundFinished, setRoundFinished] = useState(false);
  const [roundId, setRoundId] = useState(0); 

  const questionPool = category 
    ? exams[examId].filter(q => {
        const taskId = parseInt(q.id.split('-')[1], 10);
        return category.tasks.includes(taskId);
      })
    : exams[examId];

  useEffect(() => {
    let finalQueue = [];

    if (config.groupedMode) {
      const grouped = {};
      questionPool.forEach(q => {
        const gKey = q.id.split('-').slice(0, 2).join('-');
        if (!grouped[gKey]) grouped[gKey] = [];
        grouped[gKey].push(q);
      });
      let availableGroups = Object.values(grouped);
      let carryOvers = []; 

      if (!config.forceAll) {
        availableGroups = availableGroups.filter(g => g.some(q => progress[q.id] !== 'known'));
        if (queue.length > 0) {
          carryOvers = queue.filter(g => g.some(q => progress[q.id] !== 'known'));
        }
      }
      
      const getGKey = (g) => g[0].id.split('-').slice(0, 2).join('-');
      const carryOverKeys = carryOvers.map(getGKey);
      
      let remainingPool = availableGroups.filter(g => !carryOverKeys.includes(getGKey(g)));
      if (config.shuffle) remainingPool.sort(() => Math.random() - 0.5);
      
      const neededNew = Math.max(0, config.roundSize - carryOvers.length);
      const newItems = remainingPool.slice(0, neededNew);
      
      finalQueue = [...carryOvers, ...newItems];
      if (config.shuffle) finalQueue.sort(() => Math.random() - 0.5);

    } else {
      let qList = questionPool;
      let carryOvers = [];

      if (!config.forceAll) {
        qList = qList.filter(q => progress[q.id] !== 'known');
        if (queue.length > 0) {
          carryOvers = queue.filter(q => progress[q.id] !== 'known');
        }
      }
      
      let remainingPool = qList.filter(q => !carryOvers.find(c => c.id === q.id));
      if (config.shuffle) remainingPool.sort(() => Math.random() - 0.5);
      
      const neededNew = Math.max(0, config.roundSize - carryOvers.length);
      const newItems = remainingPool.slice(0, neededNew);
      
      finalQueue = [...carryOvers, ...newItems];
      if (config.shuffle) finalQueue.sort(() => Math.random() - 0.5);
    }
    
    setQueue(finalQueue);
    setCurrentIndex(0);
    setShowAnswer(false);
    setUserGuess(null);
    setGroupGuesses({});
    setRoundStats({ correct: 0, incorrect: 0, score: 0, full: 0, half: 0, zero: 0 });
    setRoundFinished(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examId, config, roundId, category]);

  const currentEntity = queue[currentIndex];
  
  const totalQuestions = questionPool.length;
  const knownTotal = questionPool.filter(q => progress[q.id] === 'known').length;
  const unknownTotal = questionPool.filter(q => progress[q.id] === 'unknown').length;
  const unseenTotal = totalQuestions - knownTotal - unknownTotal;
  const remainingInExam = totalQuestions - knownTotal; 

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

  const renderGroupedRoundProgressBar = (full, half, zero, total) => {
    const fullPct = (full / total) * 100 || 0;
    const halfPct = (half / total) * 100 || 0;
    const zeroPct = (zero / total) * 100 || 0;
    const unseenPct = 100 - fullPct - halfPct - zeroPct;
    
    return (
      <div className="h-2 w-full bg-slate-100 rounded-full flex overflow-hidden">
        <div style={{ width: `${fullPct}%` }} className="bg-emerald-500 transition-all duration-500"></div>
        <div style={{ width: `${halfPct}%` }} className="bg-amber-400 transition-all duration-500"></div>
        <div style={{ width: `${zeroPct}%` }} className="bg-rose-500 transition-all duration-500"></div>
        <div style={{ width: `${unseenPct}%` }} className="bg-slate-200 transition-all duration-500"></div>
      </div>
    );
  };

  if (roundFinished) {
    const scorePct = Math.round(((roundStats.score || 0) / queue.length) * 100);
    const isExamDone = remainingInExam === 0 && !config.forceAll;
    
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <TopNavigation onBack={onFinish} backText="Wróć do menu" />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md text-center">
            <h2 className="text-2xl font-black mb-3 text-slate-800">
              {isExamDone ? 'Materiał opanowany! 🎉' : 'Koniec rundy'}
            </h2>
            <p className="text-sm text-slate-500 mb-4">Twój wynik w tej rundzie:</p>
            <div className="text-5xl font-black mb-8" style={{ color: scorePct >= 50 ? '#059669' : '#e11d48' }}>
              {scorePct}%
            </div>
            {config.groupedMode && (
              <div className="text-sm font-bold text-slate-600 mb-8">
                Punkty: {roundStats.score} / {queue.length}
              </div>
            )}
            
            <div className="flex flex-col gap-3">
              {isExamDone ? (
                <button onClick={onFinish} className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors">
                  Wróć do menu
                </button>
              ) : (
                <>
                  <button onClick={() => setRoundId(id => id + 1)} className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-sm hover:bg-blue-700 transition-all active:scale-[0.99]">
                    Następna runda ({Math.min(config.roundSize, config.groupedMode ? Math.ceil(remainingInExam / 4) : remainingInExam)} {config.groupedMode ? "zadań" : "pytań"})
                  </button>
                  {remainingInExam > (config.groupedMode ? config.roundSize * 4 : config.roundSize) && (
                    <button onClick={() => { setConfig(prev => ({ ...prev, roundSize: config.groupedMode ? Math.ceil(remainingInExam / 4) : remainingInExam })); setRoundId(id => id + 1); }} className="w-full py-3.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors">
                      Dokończ resztę bez limitu
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

  if (!currentEntity) return null;

  const rightStats = (
    <div className="text-xs font-black tracking-widest bg-slate-100 px-2.5 py-1 rounded-lg flex items-center">
      <span className="text-rose-500">{unknownTotal}</span>
      <span className="text-slate-300 mx-1.5">/</span>
      <span className="text-emerald-500">{knownTotal}</span>
      <span className="text-slate-300 mx-1.5">/</span>
      <span className="text-slate-400">{unseenTotal}</span>
    </div>
  );

  // --- LOGIKA NORMALNA ---
  if (!config.groupedMode) {
    const currentQ = currentEntity;
    const handleSelfEvaluation = (knewIt) => {
      updateProgress(currentQ.id, knewIt ? 'known' : 'unknown');
      setRoundStats(prev => ({
        ...prev,
        correct: prev.correct + (knewIt ? 1 : 0),
        incorrect: prev.incorrect + (!knewIt ? 1 : 0),
        score: (prev.score || 0) + (knewIt ? 1 : 0)
      }));
      
      if (currentIndex + 1 < queue.length) {
        setCurrentIndex(curr => curr + 1);
        setShowAnswer(false);
        setUserGuess(null);
      } else {
        setRoundFinished(true);
        if ((((roundStats.score || 0) + (knewIt ? 1 : 0)) / queue.length) >= 0.8) confetti();
      }
    };

    return (
      <div className="min-h-screen flex flex-col bg-slate-50 h-[100dvh] overflow-hidden">
        <TopNavigation onBack={onBack} backText="Przerwij" backIcon={<IconX />} rightContent={rightStats} />

        <main className="flex-1 w-full max-w-3xl mx-auto p-4 flex flex-col gap-4 overflow-y-auto">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 shrink-0">
            <div>
              <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                <span>{category ? 'Dział' : 'Egzamin'}</span>
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

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-auto">
            <div className="mb-4 pb-4 border-b border-slate-100 shrink-0">
              <p className="text-sm sm:text-base font-semibold text-slate-700 leading-snug">{currentQ.pytanie}</p>
            </div>
            <div className="mb-4 shrink-0">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">{currentQ.odpowiedz}</h3>
            </div>
            {currentQ.tip && (config.studyMode || showAnswer) && (
              <div className="mb-4 p-3.5 bg-amber-50 border border-amber-200 text-amber-900 text-sm rounded-xl animate-fade-in shrink-0 flex gap-3">
                <div>
                  <span className="font-bold block mb-0.5 text-amber-800">Wskazówka:</span>
                  <span className="text-amber-700">{currentQ.tip}</span>
                </div>
              </div>
            )}
            {!showAnswer ? (
               <div className="mt-auto pt-4 flex flex-col gap-2">
                 <div className="grid grid-cols-2 gap-3 w-full">
                   <button onClick={() => { setUserGuess(true); setShowAnswer(true); }} className="py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all">TAK</button>
                   <button onClick={() => { setUserGuess(false); setShowAnswer(true); }} className="py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all">NIE</button>
                 </div>
               </div>
            ) : (
              <div className="mt-auto pt-5 border-t border-slate-100 animate-fade-in flex flex-col items-center">
                <div className="mb-6 text-center w-full bg-slate-50 p-4 rounded-xl">
                  {userGuess === currentQ.odp ? (
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Poprawna odpowiedź!</span>
                      <span className="text-2xl font-black text-emerald-500">{currentQ.odp ? "TAK" : "NIE"}</span>
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
                {!config.autoAdvance ? (
                  <>
                    <span className="text-xs font-bold text-slate-500 mb-3 text-center">Zapisz wynik dla tej fiszki:</span>
                    <div className="grid grid-cols-2 gap-3 w-full">
                      <button onClick={() => handleSelfEvaluation(false)} className="py-3 bg-white border-2 border-rose-100 text-rose-600 font-bold text-sm rounded-xl hover:bg-rose-50 active:scale-95 transition-all">Byłem w błędzie</button>
                      <button onClick={() => handleSelfEvaluation(true)} className="py-3 bg-white border-2 border-emerald-100 text-emerald-600 font-bold text-sm rounded-xl hover:bg-emerald-50 active:scale-95 transition-all">Znałem odpowiedź</button>
                    </div>
                  </>
                ) : (
                  <div className="w-full">
                    <button onClick={() => handleSelfEvaluation(userGuess === currentQ.odp)} className="w-full py-4 bg-blue-600 text-white font-bold text-base rounded-xl shadow-sm hover:bg-blue-700 transition-all active:scale-95">Dalej ➔</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }

  // --- LOGIKA GRUPOWA ---
  const currentGroup = currentEntity;
  const allAnswered = currentGroup.every(q => groupGuesses[q.id] !== undefined);

  let groupCorrectCount = 0;
  if (showAnswer) {
    currentGroup.forEach(q => {
      if (groupGuesses[q.id] === q.odp) groupCorrectCount++;
    });
  }

  const handleGroupSelfEvaluation = (forceKnown) => {
    let cCount = 0;
    currentGroup.forEach(q => {
      if (groupGuesses[q.id] === q.odp) cCount++;
    });
    
    const isPerfect = cCount === currentGroup.length;
    const isHalf = cCount === currentGroup.length - 1;
    const points = isPerfect ? 1 : (isHalf ? 0.5 : 0);
    const finalStatus = forceKnown !== null ? forceKnown : isPerfect; 

    updateGroupProgress(currentGroup.map(q => q.id), finalStatus ? 'known' : 'unknown');

    setRoundStats(prev => ({
      ...prev,
      full: prev.full + (isPerfect ? 1 : 0),
      half: prev.half + (isHalf ? 1 : 0),
      zero: prev.zero + (!isPerfect && !isHalf ? 1 : 0),
      score: (prev.score || 0) + points
    }));

    if (currentIndex + 1 < queue.length) {
      setCurrentIndex(curr => curr + 1);
      setShowAnswer(false);
      setGroupGuesses({});
    } else {
      setRoundFinished(true);
      if ((((roundStats.score || 0) + points) / queue.length) >= 0.8) confetti();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 h-[100dvh] overflow-hidden">
      <TopNavigation onBack={onBack} backText="Przerwij" backIcon={<IconX />} rightContent={rightStats} />

      <main className="flex-1 w-full max-w-3xl mx-auto p-4 flex flex-col gap-4 overflow-y-auto">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 shrink-0">
          <div>
            <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
              <span>{category ? 'Dział (pytania)' : 'Egzamin (pytania)'}</span>
              <span>{knownTotal + unknownTotal} / {totalQuestions}</span>
            </div>
            {renderProgressBar(knownTotal, unknownTotal, totalQuestions)}
          </div>
          <div>
            <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
              <span>Obecna runda (Zadania)</span>
              <span>{currentIndex} / {queue.length}</span>
            </div>
            {renderGroupedRoundProgressBar(roundStats.full, roundStats.half, roundStats.zero, queue.length)}
          </div>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-auto mb-10">
          <div className="mb-4 pb-4 border-b border-slate-100 shrink-0">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">{currentGroup[0].pytanie}</h3>
          </div>

          <div className="flex flex-col gap-3">
            {currentGroup.map((q) => {
              const isCorrect = groupGuesses[q.id] === q.odp;
              return (
                <div key={q.id} className={`p-3 sm:p-4 rounded-xl border transition-colors ${showAnswer ? (isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200') : 'bg-slate-50 border-slate-100'}`}>
                  
                  <div className="flex flex-row items-center justify-between gap-4">
                    <p className="font-semibold text-slate-700 text-sm flex-1 m-0 leading-snug">{q.odpowiedz}</p>
                    <div className="flex gap-1.5 shrink-0 w-[110px]">
                      <button disabled={showAnswer} onClick={() => setGroupGuesses(prev => ({...prev, [q.id]: true}))} className={`flex-1 py-2 px-1 rounded-lg font-bold text-xs transition-all ${groupGuesses[q.id] === true ? 'bg-blue-600 text-white shadow-sm' : 'bg-white border-2 border-slate-200 text-slate-600 hover:border-slate-300'} disabled:cursor-not-allowed`}>TAK</button>
                      <button disabled={showAnswer} onClick={() => setGroupGuesses(prev => ({...prev, [q.id]: false}))} className={`flex-1 py-2 px-1 rounded-lg font-bold text-xs transition-all ${groupGuesses[q.id] === false ? 'bg-blue-600 text-white shadow-sm' : 'bg-white border-2 border-slate-200 text-slate-600 hover:border-slate-300'} disabled:cursor-not-allowed`}>NIE</button>
                    </div>
                  </div>

                  {showAnswer && !isCorrect && (
                    <div className="mt-3 text-xs font-bold text-rose-600 bg-white p-2 rounded-lg border border-rose-100">Poprawna odpowiedź: {q.odp ? 'TAK' : 'NIE'}</div>
                  )}
                  {showAnswer && q.tip && config.studyMode && (
                    <div className="mt-2 p-2.5 bg-amber-50 border border-amber-200 text-amber-900 text-xs rounded-lg">
                      <span className="font-bold">Wskazówka: </span>{q.tip}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!showAnswer ? (
            <div className="mt-6">
              <button onClick={() => setShowAnswer(true)} disabled={!allAnswered} className={`w-full py-4 text-white font-bold text-base rounded-xl transition-all ${allAnswered ? 'bg-blue-600 shadow-sm hover:bg-blue-700 active:scale-95' : 'bg-slate-300 cursor-not-allowed'}`}>
                Zatwierdź odpowiedzi
              </button>
            </div>
          ) : (
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col items-center animate-fade-in">
              <div className="mb-6 text-center">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Zdobyte punkty za zadanie</span>
                <span className={`text-4xl font-black ${groupCorrectCount === currentGroup.length ? 'text-emerald-500' : groupCorrectCount === currentGroup.length - 1 ? 'text-amber-500' : 'text-rose-500'}`}>
                  {groupCorrectCount === currentGroup.length ? '1.0' : groupCorrectCount === currentGroup.length - 1 ? '0.5' : '0.0'}
                </span>
                <span className="block text-xs font-bold text-slate-400 mt-2">Poprawnie {groupCorrectCount}/{currentGroup.length}</span>
              </div>

              {!config.autoAdvance ? (
                <div className="w-full">
                  <span className="block text-xs font-bold text-slate-500 mb-3 text-center">Zapisz wynik i przydziel status całej grupie:</span>
                  <div className="grid grid-cols-2 gap-3 w-full">
                    <button onClick={() => handleGroupSelfEvaluation(false)} className="py-3 bg-white border-2 border-rose-100 text-rose-600 font-bold text-sm rounded-xl hover:bg-rose-50 active:scale-95 transition-all">Nie umiem grupy</button>
                    <button onClick={() => handleGroupSelfEvaluation(true)} className="py-3 bg-white border-2 border-emerald-100 text-emerald-600 font-bold text-sm rounded-xl hover:bg-emerald-50 active:scale-95 transition-all">Umiem wszystkie</button>
                  </div>
                </div>
              ) : (
                <button onClick={() => handleGroupSelfEvaluation(null)} className="w-full py-4 bg-blue-600 text-white font-bold text-base rounded-xl shadow-sm hover:bg-blue-700 transition-all active:scale-95">Dalej ➔</button>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}