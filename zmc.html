import React, { useState, useEffect, useMemo } from 'react';
import { 
  Activity, 
  Droplet, 
  Dna, 
  FlaskConical, 
  Search, 
  Building2, 
  LayoutDashboard, 
  ChevronRight,
  Menu,
  X,
  TrendingUp,
  Microscope,
  CalendarRange,
  PlusCircle
} from 'lucide-react';

// --- (1) Global Styles & Animations ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800;900&display=swap');
    
    :root {
      --font-alexandria: 'Alexandria', sans-serif;
    }

    body {
      font-family: var(--font-alexandria);
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .animate-slide-up {
      animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .animate-fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }
    
    .glass-panel {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
    }
    
    /* Custom Badge for New Items */
    .new-badge {
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
      70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
      100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }
  `}</style>
);

// --- (2) Helper: Animated Counter ---
const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;
    const startValue = 0;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);
      setCount(Math.floor(easeOutQuart(progress) * (value - startValue) + startValue));
      if (progress < 1) animationFrame = window.requestAnimationFrame(step);
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
};

// --- (3) Dictionary & Translations (Expanded for 2025) ---
const LAB_TRANSLATIONS = {
  // Existing
  "Sugar": "السكر (Sugar)", "Urea": "اليوريا (Urea)", "Creatinie": "الكرياتينين (Creatinine)",
  "Na": "الصوديوم (Na)", "K": "البوتاسيوم (K)", "Cl": "الكلور (Cl)", "Calcium": "الكالسيوم",
  "Magnisium": "المغنيسيوم", "phosphate": "الفوسفات", "Uric acid": "حمض اليوريك",
  "T-Protein": "البروتين الكلي", "Albumin": "الألبومين", "cholesterol": "الكوليسترول",
  "HDL": "HDL (جيد)", "LDL": "LDL (ضار)", "Triglycerides": "الدهون الثلاثية",
  "T-Billirubin": "البليروبين الكلي", "D-Billirubin": "البليروبين المباشر",
  "GoT": "إنزيم AST/GOT", "GpT": "إنزيم ALT/GPT", "Alk-phosph": "الفوسفاتاز القلوي",
  "Amylase": "الأميليز", "Lipase": "الليبيد", "CK": "إنزيم CK", "LDH": "إنزيم LDH",
  "CK-mB": "CK-MB", "Troponin I": "تروبونين I", "Iron": "الحديد", "TIBC": "سعة الحديد",
  "CRP": "CRP (التهاب)", "HbA1c": "التراكمي", "Cr-clearance": "تصفية الكرياتينين",
  "Gamma GT": "Gamma GT", "u-albumin": "ألبومين البول", "ABG": "غازات الدم",
  "CBC": "صورة دم (CBC)", "DLC": "تعداد تفصيلي", "ESR": "سرعة الترسيب", "PRT": "سيولة (PT)",
  "ApTT": "سيولة (PTT)", "TFT": "وظائف غدة درقية", "Ferritin": "مخزون الحديد",
  "Vit D": "فيتامين د", "Vit B12": "فيتامين ب12", "Folic acid": "حمض الفوليك",
  "PTH": "جار درقية", "Insuline": "أنسولين", "Homa IR": "مقاومة الأنسولين",
  "Fertility H": "هرمونات خصوبة", "FSH": "FSH", "LH": "LH", "PRL": "هرمون الحليب",
  "Tumor Marks": "دلالات أورام", "B-hCG Titer": "حمل رقمي", "T-PSA": "بروستاتا كلي",
  "Viral screen": "مسح فيروسات", "Urine RE": "تحليل بول", "Stoo RE": "تحليل براز",
  "Occult blood": "دم خفي", "Blood culture": "مزرعة دم", "Urine Culture": "مزرعة بول",
  
  // NEW ADDITIONS 2025
  "D-Dimer": "تحليل D-Dimer",
  "Lactate": "حمض اللاكتيك (Lactate)",
  "Procalcitonin": "مؤشر التسمم (Procalcitonin)",
  "Ammonia": "الأمونيا (Ammonia)",
  "Blood Group": "فصيلة الدم (ABO/Rh)",
  "Sickling Test": "فحص التنجل (Sickling)",
  "Coombs Test": "فحص كومبس (Coombs)",
  "Hb Electrophoresis": "فصل الهيموجلوبين الكهربائي",
  "H. Pylori": "جرثومة المعدة (H. Pylori)",
  "Widal": "تحليل تيفود (Widal)",
  "Brucella": "تحليل بروسيلا (Brucella)",
  "RF": "عامل الروماتويد (RF)",
  "Semen Analysis": "سائل منوي (SFA)",
  "Cortisol": "كورتيزول (Cortisol)",
  "AMH": "مخزون المبيض (AMH)"
};
const getTrans = (k) => LAB_TRANSLATIONS[k] || k;

// --- (4) Full Data Set (Updated for 2025) ---
const CENTERS_DATA = {
  "total": {
    id: "total", name: "الإحصائية السنوية 2025", subtitle: "تقرير شامل متوقع لكافة الفروع", 
    image: "1000141450.jpg", theme: "from-slate-800 to-slate-900", iconTheme: "text-slate-600",
    categories: {
      biochemistry: { 
        "Sugar": 58080, "Urea": 54684, "Creatinie": 49104, "Na": 55056, "K": 55056, "Cl": 55056, 
        "Calcium": 33852, "Magnisium": 24180, "phosphate": 24552, "Uric acid": 22692, "T-Protein": 18604, 
        "Albumin": 23886, "cholesterol": 36456, "HDL": 30876, "LDL": 30876, "Triglycerides": 52080, 
        "T-Billirubin": 31620, "D-Billirubin": 27906, "GoT": 43524, "GpT": 46128, "Alk-phosph": 70680, 
        "Amylase": 14568, "Lipase": 8556, "CK": 9366, "LDH": 8556, "CK-mB": 16368, "Troponin I": 18228, 
        "Iron": 8928, "TIBC": 6696, "CRP": 63240, "HbA1c": 26784, "Cr-clearance": 2604, "Gamma GT": 10416, 
        "u-albumin": 7012, "UACR": 6845, "ABG": 10744,
        // New Tests added for 2025 completeness
        "D-Dimer": 0, "Lactate": 0, "Procalcitonin": 0, "Ammonia": 0
      },
      haematology: { 
        "CBC": 66960, "DLC": 39075, "ESR": 5588, "PRT": 10044, "ApTT": 9369, "Fibrinogen": 1108,
        // New Tests
        "Blood Group": 0, "Sickling Test": 0, "Coombs Test": 0, "Hb Electrophoresis": 0
      },
      hormones: { 
        "TFT": 9306, "Ferritin": 7440, "Vit D": 1989, "Vit B12": 3016, "Folic acid": 1486, 
        "PTH": 672, "Insuline": 2883, "Homa IR": 296, "Fertility H": 1116, "PRL": 245, 
        "Tumor Marks": 746, "B-hCG Titer": 644, "T-PSA": 2232, "Viral screen": 11260, 
        "* HBsAg": 11260, "* HCV": 11260, "* HIV": 11260,
        // New Tests
        "Cortisol": 0, "AMH": 0
      },
      microbiology: { 
        "Urine RE": 13764, "Stoo RE": 5208, "Occult blood": 1506, "Blood culture": 1860, 
        "Urine Culture": 1245, "stool Culture": 756, "CSF": 1125, "Gram stain": 420,
        // New Tests
        "H. Pylori": 0, "Widal": 0, "Brucella": 0, "RF": 0, "Semen Analysis": 0
      }
    }
  },
  "houriyat": {
    id: "houriyat", name: "مركز الحوريات", subtitle: "إحصائية فرعية 2025",
    image: "1000141456.jpg", theme: "from-teal-600 to-teal-800", iconTheme: "text-teal-600",
    categories: {
      biochemistry: { "Sugar": 1319, "Urea": 1116, "Creatinie": 1116, "Na": 985, "K": 985, "Cl": 985, "Calcium": 984, "Magnisium": 875, "cholesterol": 504, "Triglycerides": 504, "CRP": 1246, "HbA1c": 65 },
      haematology: { "CBC": 2225, "DLC": 203, "ESR": 180 },
      hormones: { "TFT": 2495, "Ferritin": 1559, "Vit D": 1243, "Vit B12": 1547 },
      microbiology: { "Urine RE": 1362, "Stoo RE": 429, "Urine Culture": 778 }
    }
  },
  "health_services": {
    id: "health_services", name: "الخدمات الصحية", subtitle: "إحصائية فرعية 2025",
    image: "1000141455.jpg", theme: "from-blue-600 to-blue-800", iconTheme: "text-blue-600",
    categories: {
      biochemistry: { "Sugar": 598, "Urea": 598, "Creatinie": 598, "Alk-phosph": 568, "CRP": 365 },
      haematology: { "CBC": 924, "DLC": 368 },
      hormones: { "TFT": 865, "Ferritin": 1078, "Vit B12": 882, "Tumor Marks": 746, "B-hCG Titer": 644 },
      microbiology: { "Urine RE": 1031, "Stoo RE": 643, "Urine Culture": 938 }
    }
  },
  "naima": {
    id: "naima", name: "مستشفى نعيمة", subtitle: "إحصائية فرعية 2025",
    image: "1000141454.jpg", theme: "from-rose-600 to-rose-800", iconTheme: "text-rose-600",
    categories: {
      biochemistry: { "Sugar": 713, "Urea": 684, "Creatinie": 684, "GoT": 846, "GpT": 846, "Alk-phosph": 654, "CRP": 875, "HbA1c": 476 },
      haematology: { "CBC": 975, "ESR": 129 },
      hormones: { "TFT": 351, "Vit D": 200 },
      microbiology: { "Urine RE": 262, "Urine Culture": 119 }
    }
  },
  "inpatient": {
    id: "inpatient", name: "الأقسام الإيوائية", subtitle: "إحصائية فرعية 2025",
    image: "1000141453.jpg", theme: "from-indigo-600 to-indigo-800", iconTheme: "text-indigo-600",
    categories: {
      biochemistry: { "Sugar": 1285, "Urea": 1285, "CRP": 1387, "HbA1c": 274, "Gamma GT": 361 },
      haematology: { "CBC": 1601, "DLC": 425 },
      hormones: { "TFT": 2059, "Ferritin": 1576, "Fertility H": 2323 },
      microbiology: { "Urine RE": 1291, "Urine Culture": 861 }
    }
  },
  "jumaa": {
    id: "jumaa", name: "الجمعة القروي", subtitle: "إحصائية فرعية 2025",
    image: "1000141452.jpg", theme: "from-orange-600 to-orange-800", iconTheme: "text-orange-600",
    categories: {
      biochemistry: { "Sugar": 84, "Urea": 48 },
      haematology: { "CBC": 142 },
      hormones: { "TFT": 64, "Ferritin": 131, "Vit D": 134 },
      microbiology: { "Urine RE": 105, "Urine Culture": 99 }
    }
  },
  "diabetes": {
    id: "diabetes", name: "مركز السكري", subtitle: "إحصائية فرعية 2025",
    image: "1000141451.jpg", theme: "from-emerald-600 to-emerald-800", iconTheme: "text-emerald-600",
    categories: {
      biochemistry: { "Sugar": 485, "Urea": 315, "CRP": 368, "HbA1c": 206, "u-albumin": 492 },
      haematology: { "CBC": 449 },
      hormones: { "TFT": 616, "Vit D": 293 },
      microbiology: { "Urine RE": 156 }
    }
  }
};

const CATEGORY_STYLES = {
  biochemistry: { title: "الكيمياء الحيوية", icon: <FlaskConical className="w-5 h-5" />, color: "text-blue-700", bg: "bg-blue-50/50", border: "border-blue-100" },
  haematology: { title: "أمراض الدم", icon: <Droplet className="w-5 h-5" />, color: "text-rose-700", bg: "bg-rose-50/50", border: "border-rose-100" },
  hormones: { title: "الهرمونات والمناعة", icon: <Dna className="w-5 h-5" />, color: "text-purple-700", bg: "bg-purple-50/50", border: "border-purple-100" },
  microbiology: { title: "الأحياء الدقيقة", icon: <Microscope className="w-5 h-5" />, color: "text-emerald-700", bg: "bg-emerald-50/50", border: "border-emerald-100" }
};

export default function App() {
  const [activeCenterId, setActiveCenterId] = useState("total");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [animateKey, setAnimateKey] = useState(0);

  const activeCenter = CENTERS_DATA[activeCenterId];

  useEffect(() => {
    setAnimateKey(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCenterId]);

  const currentTotal = useMemo(() => {
    let sum = 0;
    Object.values(activeCenter.categories).forEach(cat => {
      Object.values(cat).forEach(val => sum += val);
    });
    return sum;
  }, [activeCenter]);

  // Current date for 2025 context
  const dateDisplay = activeCenterId === 'total' ? 'إجمالي سنة 2025' : 'سجلات 2025';

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 overflow-hidden font-sans" dir="rtl" style={{ fontFamily: "'Alexandria', sans-serif" }}>
      <GlobalStyles />
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/60 z-40 backdrop-blur-sm md:hidden transition-opacity" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:static inset-y-0 right-0 z-50 w-80 bg-white border-l border-slate-200 shadow-2xl md:shadow-none
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
        <div className="h-28 flex flex-col justify-center px-6 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-3 text-teal-700">
            <div className="p-3 bg-teal-50 rounded-2xl shadow-sm border border-teal-100">
              <Activity className="w-7 h-7 text-teal-600" />
            </div>
            <div>
              <h1 className="font-extrabold text-xl tracking-tight text-slate-800">مختبرات زليتن</h1>
              <span className="text-xs text-teal-600 font-bold bg-teal-50 px-2 py-0.5 rounded-full mt-1 inline-block">نسخة 2025</span>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden absolute left-4 top-10 p-2 text-slate-400 hover:text-red-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="text-[10px] font-bold text-slate-400 px-2 mb-2 uppercase tracking-wider">لوحة التحكم</div>
          {Object.values(CENTERS_DATA).map((center) => (
            <button
              key={center.id}
              onClick={() => {
                setActiveCenterId(center.id);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center p-4 rounded-2xl text-right transition-all duration-300 group relative overflow-hidden ${
                activeCenterId === center.id
                  ? `bg-slate-900 text-white shadow-xl shadow-slate-200 transform scale-[1.02]`
                  : "hover:bg-slate-50 text-slate-600 hover:scale-[1.01]"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ml-4 transition-all ${
                activeCenterId === center.id ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:shadow-sm'
              }`}>
                {center.id === 'total' ? <LayoutDashboard className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
              </div>
              <div className="flex-1 z-10">
                <p className={`font-bold text-sm ${activeCenterId === center.id ? 'text-white' : 'text-slate-700'}`}>
                  {center.name}
                </p>
                <p className={`text-[10px] mt-1 truncate ${activeCenterId === center.id ? 'text-slate-300' : 'text-slate-400'}`}>
                  {center.subtitle}
                </p>
              </div>
              {activeCenterId === center.id && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-400" />
              )}
            </button>
          ))}
        </div>
        
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
           <p className="text-[10px] text-slate-400">نظام الإحصاء الطبي - إصدار 2.0</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden bg-slate-50/50 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        <header className="px-6 h-20 flex items-center justify-between shrink-0 glass-panel border-b border-slate-200/50 z-20">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors">
              <Menu className="w-6 h-6 text-slate-600" />
            </button>
            <div className="flex flex-col">
               <h2 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                 {activeCenter.name}
               </h2>
               <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                 <CalendarRange className="w-3 h-3" /> {dateDisplay}
               </span>
            </div>
          </div>
          
          <div className="relative w-80 hidden md:block group">
            <input 
              type="text" 
              placeholder="بحث في 2025..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-11 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all text-sm font-medium shadow-inner"
            />
            <Search className="absolute right-3.5 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
          </div>
        </header>

        <div key={animateKey} className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth z-10">
          
          {/* HERO Stats */}
          <div className={`
            relative overflow-hidden rounded-[2rem] p-8 mb-10 shadow-2xl text-white
            bg-gradient-to-br ${activeCenter.theme}
            animate-slide-up
          `}>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-black/20 blur-3xl"></div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-right space-y-3">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-teal-300 mb-2">
                   <TrendingUp className="w-3 h-3" />
                   <span>المؤشر السنوي 2025</span>
                 </div>
                 <h3 className="text-5xl lg:text-8xl font-black tracking-tighter drop-shadow-lg">
                   <AnimatedCounter value={currentTotal} />
                 </h3>
                 <p className="text-lg text-slate-300 font-medium">إجمالي الفحوصات المسجلة</p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                {Object.entries(activeCenter.categories).map(([key, data], idx) => {
                  const sectionTotal = Object.values(data).reduce((a, b) => a + b, 0);
                  const newItemsCount = Object.values(data).filter(v => v === 0).length;
                  return (
                    <div key={key} className={`bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl min-w-[160px] animate-fade-in hover:bg-white/10 transition-colors`} style={{ animationDelay: `${idx * 150}ms` }}>
                      <div className="text-slate-400 text-xs mb-2 font-bold uppercase tracking-wider flex justify-between">
                        {CATEGORY_STYLES[key].title}
                        {newItemsCount > 0 && activeCenterId === 'total' && (
                          <span className="text-[9px] bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded flex items-center gap-1">
                            <PlusCircle className="w-2.5 h-2.5" /> جديد
                          </span>
                        )}
                      </div>
                      <div className="text-3xl font-bold tracking-tight">
                        <AnimatedCounter value={sectionTotal} duration={2500} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-10 pb-12">
            {Object.entries(activeCenter.categories).map(([catKey, data], sectionIdx) => {
              const style = CATEGORY_STYLES[catKey];
              const filteredData = Object.entries(data).filter(([key]) => {
                const term = searchTerm.toLowerCase();
                return key.toLowerCase().includes(term) || getTrans(key).toLowerCase().includes(term);
              });

              if (filteredData.length === 0) return null;

              return (
                <div key={catKey} className={`animate-slide-up`} style={{ animationDelay: `${(sectionIdx + 1) * 200}ms` }}>
                  <div className="flex items-center gap-4 mb-6 px-2">
                    <div className={`p-3 rounded-2xl bg-white shadow-sm border ${style.border} ${style.color}`}>
                      {style.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-slate-800">{style.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">قائمة التحاليل التفصيلية</p>
                    </div>
                    <div className="mr-auto h-px flex-1 bg-gradient-to-l from-transparent via-slate-200 to-transparent ml-6"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                    {filteredData.map(([key, value], cardIdx) => {
                      const isNew = value === 0 && activeCenterId === 'total';
                      return (
                        <div 
                          key={key} 
                          className={`
                            bg-white p-5 rounded-2xl border transition-all duration-300 group flex flex-col justify-between h-32 relative overflow-hidden
                            ${isNew ? 'border-teal-200 shadow-md ring-1 ring-teal-50' : 'border-slate-100 shadow-sm hover:shadow-lg hover:border-teal-200 hover:-translate-y-1'}
                          `}
                        >
                          {/* New Badge */}
                          {isNew && (
                            <div className="absolute top-2 left-2 flex items-center gap-1">
                               <span className="w-2 h-2 rounded-full bg-teal-500 new-badge"></span>
                               <span className="text-[9px] font-bold text-teal-600">جديد 2025</span>
                            </div>
                          )}

                          <span className="text-xs font-bold text-slate-500 group-hover:text-teal-700 transition-colors line-clamp-2 leading-relaxed" title={getTrans(key)}>
                            {getTrans(key)}
                          </span>
                          
                          <div className="mt-auto relative z-10">
                            <div className="flex items-baseline gap-1">
                              {isNew ? (
                                <span className="text-xl font-bold text-slate-300">--</span>
                              ) : (
                                <span className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-teal-600 transition-colors">
                                  {value.toLocaleString()}
                                </span>
                              )}
                              <span className="text-[10px] text-slate-400 font-medium">
                                {isNew ? 'قيد الإدخال' : 'فحص'}
                              </span>
                            </div>
                            {/* Bar Indicator */}
                            <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
                              <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ease-out ${isNew ? 'bg-teal-300' : 'bg-slate-800'}`}></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>
    </div>
  );
}

