import React, { useState } from 'react';
import { 
  LayoutDashboard, Layers, Sparkles, ShieldAlert, Download, 
  Plus, Edit3, Image, FileText, CheckCircle, Lock, Unlock, 
  Settings, Users, Activity, Search, RefreshCw, Eye, Trash2, Check
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('studio');
  const [selectedCategory, setSelectedCategory] = useState('breaking');
  
  // News Form State (Autofill Engine)
  const [newsData, setNewsData] = useState({
    headline: "ग्राम पंचायत में विकास कार्यों का शुभारंभ, ग्रामीणों में खुशी की लहर।",
    subheadline: "मुख्य अतिथि द्वारा नई सड़क और जल जीवन मिशन का उद्घाटन किया गया।",
    location: "जयपुर, राजस्थान",
    reporter: "राजेश शर्मा",
    date: "29 अक्टूबर 2026",
    photoCount: "2",
  });

  // Canvas Editor State
  const [elements, setElements] = useState([
    { id: 1, type: 'text', content: newsData.headline, x: 20, y: 40, locked: true },
    { id: 2, type: 'badge', content: 'ब्रेकिंग न्यूज़', x: 20, y: 10, locked: true },
    { id: 3, type: 'image', content: '📸 मुख्य विकास कार्य फोटो', x: 20, y: 120, locked: false },
    { id: 4, type: 'text', content: `${newsData.location} | रिपोर्टर: ${newsData.reporter}`, x: 20, y: 280, locked: false }
  ]);

  const [bgTheme, setBgTheme] = useState('bg-gradient-to-r from-red-600 to-rose-900');
  const [aiPrompt, AiPromptInput] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState(null);

  // Categories List (40 Categories sample representation)
  const categoriesList = [
    { id: 'breaking', name: 'ब्रेकिंग न्यूज़', group: 'news', count: 24 },
    { id: 'local', name: 'स्थानीय समाचार', group: 'news', count: 30 },
    { id: 'political', name: 'राजनीतिक समाचार', group: 'news', count: 18 },
    { id: 'dev', name: 'विकास कार्य विशेष', group: 'news', count: 15 },
    { id: 'birthday', name: 'जन्मदिन बधाई', group: 'promo', count: 25 },
    { id: 'festival', name: 'धार्मिक एवं त्योहार', group: 'promo', count: 40 },
    { id: 'election', name: 'चुनावी प्रचार सामग्री', group: 'promo', count: 12 },
    { id: 'business', name: 'व्यापारिक विज्ञापन', group: 'promo', count: 20 },
  ];

  // Handle AI Analysis simulation
  const handleAiAnalyze = () => {
    if (!aiPrompt) return;
    setAiSuggestions({
      recommendedCategory: "विकास कार्य विशेष / स्थानीय समाचार",
      templateName: "डबल-फोटो डायनेमिक लेआउट v2",
      confidence: "98.4%",
      colorTheme: "bg-gradient-to-r from-blue-700 to-indigo-900"
    });
  };

  const handleDownload = (format) => {
    alert(`सफलतापूर्वक ${format.toUpperCase()} हाई-क्वालिटी फाइल जनरेट और डाउनलोड हो गई है!`);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      
      {/* Top Navigation Bar */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-3">
          <div className="bg-rose-600 p-2 rounded-xl text-white font-bold text-xl flex items-center justify-center shadow-lg shadow-rose-600/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide">NewsCraft Studio Pro</h1>
            <p className="text-xs text-slate-400">एंटरप्राइज न्यूज़ डिजाइन मैनेजमेंट प्लेटफॉर्म</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-2 bg-slate-900/60 p-1.5 rounded-xl border border-slate-700/60">
          <button 
            onClick={() => setActiveTab('studio')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'studio' ? 'bg-rose-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>
            <Edit3 className="w-4 h-4" />
            <span>डिजाइन स्टूडियो</span>
          </button>
          <button 
            onClick={() => setActiveTab('categories')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'categories' ? 'bg-rose-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>
            <Layers className="w-4 h-4" />
            <span>40 श्रेणियां & टेंपलेट</span>
          </button>
          <button 
            onClick={() => setActiveTab('ai')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'ai' ? 'bg-rose-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>
            <Sparkles className="w-4 h-4" />
            <span>AI असिस्टेंट</span>
          </button>
          <button 
            onClick={() => setActiveTab('admin')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'admin' ? 'bg-rose-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>
            <ShieldAlert className="w-4 h-4" />
            <span>सुरक्षा & एडमिन</span>
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] mx-auto w-full">
        
        {activeTab === 'studio' && (
          <>
            {/* Left Panel: News Data Input */}
            <div className="lg:col-span-4 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl p-5 flex flex-col space-y-4 shadow-xl">
              <h2 className="text-lg font-semibold flex items-center space-x-2 text-rose-400">
                <FileText className="w-5 h-5" />
                <span>1. खबर इनपुट (Autofill Engine)</span>
              </h2>
              <p className="text-xs text-slate-400">एक बार विवरण दर्ज करें, सभी चुने हुए टेंपलेट में स्वतः अपडेट होगा।</p>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-slate-300">मुख्य हेडलाइन</label>
                  <textarea 
                    rows="2"
                    value={newsData.headline}
                    onChange={(e) => setNewsData({...newsData, headline: e.target.value})}
                    className="w-full mt-1 bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300">सब-हेडलाइन / विवरण</label>
                  <input 
                    type="text"
                    value={newsData.subheadline}
                    onChange={(e) => setNewsData({...newsData, subheadline: e.target.value})}
                    className="w-full mt-1 bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-slate-300">स्थान (Location)</label>
                    <input 
                      type="text"
                      value={newsData.location}
                      onChange={(e) => setNewsData({...newsData, location: e.target.value})}
                      className="w-full mt-1 bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300">रिपोर्टर का नाम</label>
                    <input 
                      type="text"
                      value={newsData.reporter}
                      onChange={(e) => setNewsData({...newsData, reporter: e.target.value})}
                      className="w-full mt-1 bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <h3 className="text-sm font-semibold mb-3 text-slate-300">थीम और बैकग्राउंड रंग</h3>
                <div className="flex space-x-3">
                  <button onClick={() => setBgTheme('bg-gradient-to-r from-red-600 to-rose-900')} className="w-8 h-8 rounded-full bg-red-600 border-2 border-white/40 hover:scale-110 transition"></button>
                  <button onClick={() => setBgTheme('bg-gradient-to-r from-blue-700 to-indigo-900')} className="w-8 h-8 rounded-full bg-blue-700 border-2 border-white/40 hover:scale-110 transition"></button>
                  <button onClick={() => setBgTheme('bg-gradient-to-r from-emerald-600 to-teal-900')} className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white/40 hover:scale-110 transition"></button>
                  <button onClick={() => setBgTheme('bg-gradient-to-r from-amber-600 to-orange-900')} className="w-8 h-8 rounded-full bg-amber-600 border-2 border-white/40 hover:scale-110 transition"></button>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700 flex flex-col space-y-2">
                <button 
                  onClick={() => handleDownload('jpg')}
                  className="w-full bg-rose-600 hover:bg-rose-500 text-white font-medium py-2.5 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-rose-600/30 transition">
                  <Download className="w-4 h-4" />
                  <span>JPG डाउनलोड करें (High-Res)</span>
                </button>
                <button 
                  onClick={() => handleDownload('png')}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2.5 rounded-xl flex items-center justify-center space-x-2 transition">
                  <Download className="w-4 h-4" />
                  <span>PNG डाउनलोड करें (Transparent)</span>
                </button>
              </div>
            </div>

            {/* Center Panel: Live Interactive Canvas Editor */}
            <div className="lg:col-span-8 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl p-5 flex flex-col items-center justify-between shadow-xl">
              <div className="w-full flex items-center justify-between pb-4 border-b border-slate-700">
                <h2 className="text-lg font-semibold flex items-center space-x-2 text-rose-400">
                  <Edit3 className="w-5 h-5" />
                  <span>2. लाइव कैनवास एडिटर (Canva Engine)</span>
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-medium border border-emerald-500/30">
                    लेयर सुरक्षित (Locked Admin Template)
                  </span>
                </div>
              </div>

              {/* Poster Preview Box (16:9 or 1:1 format simulation) */}
              <div className={`w-full max-w-2xl aspect-[4/3] ${bgTheme} rounded-2xl p-8 relative shadow-2xl flex flex-col justify-between overflow-hidden border border-white/10 my-6`}>
                
                {/* Decorative background grid elements */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {/* Top Badge & Header */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="bg-black/40 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold border border-white/20 uppercase tracking-wider">
                    ⚡ ब्रेकिंग न्यूज़ स्पेशल
                  </span>
                  <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-white">
                    {newsData.date}
                  </div>
                </div>

                {/* Center Content */}
                <div className="relative z-10 space-y-4 my-auto">
                  <h1 className="text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-md">
                    {newsData.headline}
                  </h1>
                  <p className="text-sm md:text-base text-slate-200 font-medium drop-shadow">
                    {newsData.subheadline}
                  </p>
                </div>

                {/* Footer Details */}
                <div className="relative z-10 flex justify-between items-end pt-4 border-t border-white/20">
                  <div>
                    <p className="text-xs text-rose-200 font-bold uppercase tracking-wider">स्थान: {newsData.location}</p>
                    <p className="text-sm font-bold text-white">रिपोर्टर: {newsData.reporter}</p>
                  </div>
                  <div className="bg-white text-slate-900 px-3 py-1 rounded-lg font-black text-xs shadow">
                    NEWS PORTAL
                  </div>
                </div>

              </div>

              {/* Layer Controls Bar */}
              <div className="w-full bg-slate-900/80 p-3 rounded-xl border border-slate-700 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-slate-400">सक्रिय लेयर्स (Layers):</span>
                <div className="flex space-x-4">
                  <span className="flex items-center space-x-1"><Lock className="w-3.5 h-3.5 text-rose-400" /><span>हेडलाइन (लॉक)</span></span>
                  <span className="flex items-center space-x-1"><Unlock className="w-3.5 h-3.5 text-emerald-400" /><span>फोटो स्लॉट (संपादन योग्य)</span></span>
                  <span className="flex items-center space-x-1"><Lock className="w-3.5 h-3.5 text-rose-400" /><span>लोगो (लॉक)</span></span>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'categories' && (
          <div className="lg:col-span-12 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">40 प्रमुख श्रेणियां और टेंपलेट लाइब्रेरी</h2>
                <p className="text-sm text-slate-400">समाचार और विज्ञापन श्रेणियों के अंतर्गत उपलब्ध डिजाइन टेंपलेट</p>
              </div>
              <button className="bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>नया टेंपलेट जोड़ें</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categoriesList.map((cat, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-700/80 p-4 rounded-xl hover:border-rose-500 transition group cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs bg-slate-800 text-rose-400 px-2.5 py-1 rounded-md font-semibold">
                      {cat.group === 'news' ? 'समाचार श्रेणी' : 'विज्ञापन/बधाई'}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{cat.count} टेंपलेट्स</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition">{cat.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">प्रत्येक डिजाइन में कस्टमाइज़ेबल टेक्स्ट और फोटो स्लॉट उपलब्ध।</p>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-emerald-400 font-medium flex items-center"><Check className="w-3.5 h-3.5 mr-1" /> सक्रिय</span>
                    <span className="text-rose-400 font-semibold group-hover:underline">टेंपलेट चुनें &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="lg:col-span-12 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2 mb-2">
              <Sparkles className="text-rose-500 w-6 h-6" />
              <span>AI खबर-आधारित डिजाइन चयन इंजन</span>
            </h2>
            <p className="text-sm text-slate-400 mb-6">अपनी खबर का विवरण यहाँ टाइप करें, AI स्वतः सबसे बेहतरीन डिजाइन और लेआउट का सुझाव देगा।</p>

            <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl max-w-3xl mx-auto space-y-4">
              <label className="text-sm font-semibold text-slate-300">खबर का विवरण दर्ज करें:</label>
              <textarea 
                rows="3"
                value={aiPrompt}
                onChange={(e) => AiPromptInput(e.target.value)}
                placeholder="उदा: ग्राम पंचायत में आज नए सामुदायिक भवन का लोकार्पण हुआ..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-slate-100 focus:outline-none focus:border-rose-500"
              />
              <button 
                onClick={handleAiAnalyze}
                className="w-full bg-rose-600 hover:bg-rose-500 text-white font-medium py-3 rounded-xl flex items-center justify-center space-x-2 shadow-lg transition">
                <Sparkles className="w-5 h-5" />
                <span>AI द्वारा सर्वश्रेष्ठ डिजाइन खोजें</span>
              </button>

              {aiSuggestions && (
                <div className="mt-6 p-4 bg-slate-800/90 border border-emerald-500/40 rounded-xl space-y-3 animate-fadeIn">
                  <h3 className="text-sm font-bold text-emerald-400 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" /> AI विश्लेषण परिणाम सफल:
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <p><span className="text-slate-400">अनुशंसित श्रेणी:</span> {aiSuggestions.recommendedCategory}</p>
                    <p><span className="text-slate-400">सर्वोत्तम टेंपलेट:</span> {aiSuggestions.templateName}</p>
                    <p><span className="text-slate-400">सटीकता (Confidence):</span> {aiSuggestions.confidence}</p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('studio')}
                    className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2 rounded-lg transition">
                    इस टेंपलेट के साथ स्टूडियो में जाएं
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'admin' && (
          <div className="lg:col-span-12 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">सुरक्षा और ऑडिट लॉग (Admin & RBAC)</h2>
                <p className="text-sm text-slate-400">यूजर अनुमतियां, लॉगिन प्रयास और एडमिन नियंत्रण</p>
              </div>
              <span className="text-xs bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full border border-rose-500/30">
                सिस्टम स्टेटस: पूर्ण सुरक्षित (Secure)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <Users className="text-rose-500 w-5 h-5" />
                  <span className="text-xs font-bold text-emerald-400">सक्रिय</span>
                </div>
                <h3 className="text-lg font-bold text-white">कुल रिपोर्टर/यूजर</h3>
                <p className="text-2xl font-black text-rose-500 mt-1">48</p>
              </div>

              <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <Activity className="text-blue-500 w-5 h-5" />
                  <span className="text-xs font-bold text-blue-400">रियल-टाइम</span>
                </div>
                <h3 className="text-lg font-bold text-white">आज के कुल डाउनलोड</h3>
                <p className="text-2xl font-black text-blue-400 mt-1">312</p>
              </div>

              <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <ShieldAlert className="text-amber-500 w-5 h-5" />
                  <span className="text-xs font-bold text-emerald-400">सुरक्षित</span>
                </div>
                <h3 className="text-lg font-bold text-white">अनधिकृत प्रयास</h3>
                <p className="text-2xl font-black text-emerald-400 mt-1">0</p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-3 text-center text-xs text-slate-400">
        NewsCraft Studio SaaS Platform &copy; 2026 | All Enterprise Rights Reserved.
      </footer>

    </div>
  );
}