import React, { useState, useMemo } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BackButton from '../components/common/BackButton';
import StoreCard from '../components/catalog/StoreCard';
import StoreQuickViewModal from '../components/modals/StoreQuickViewModal';
import ToastNotification from '../components/common/ToastNotification';
import { storesData } from '../data/storesData';

export default function StoresDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("pro");
  const [modalStore, setModalStore] = useState(null);

  const categories = [
    { id: "all", label: "الكل (48 متجر)", count: 48, icon: "apps" },
    { id: "women", label: "أزياء نسائية وفساتين", count: 18, icon: "checkroom" },
    { id: "abayas", label: "عبايات وشالات مطرزة", count: 12, icon: "styler" },
    { id: "shoes", label: "أحذية رياضية وجلدية", count: 8, icon: "roller_skating" },
    { id: "kids", label: "ملابس أطفال ومواليد", count: 5, icon: "child_care" },
  ];

  const filteredStores = useMemo(() => {
    return storesData
      .filter((store) => {
        const matchesCategory = selectedCategory === "all" || store.category === selectedCategory;
        const matchesArea = selectedArea === "all" || store.area === selectedArea;
        const matchesQuery = !searchQuery || 
          store.name.includes(searchQuery) || 
          store.description.includes(searchQuery) ||
          store.location.includes(searchQuery);
        return matchesCategory && matchesArea && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === "pro") {
          return (b.isPro ? 1 : 0) - (a.isPro ? 1 : 0);
        }
        if (sortBy === "rating") {
          return b.rating - a.rating;
        }
        return 0;
      });
  }, [searchQuery, selectedArea, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f3ec] text-on-surface text-right">
      <Header />
      <ToastNotification />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 sm:space-y-8">
        
        {/* Top Back Action */}
        <div className="flex items-center justify-between">
          <BackButton label="العودة للرئيسية" fallbackRoute="/" />
          <span className="text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-outline-variant/40">
            دليل المتاجر المعتمدة • 2026
          </span>
        </div>

        {/* Hero Explore & Big Search */}
        <section className="relative rounded-3xl bg-gradient-to-br from-[#12302b] via-[#1a443d] to-[#1f7a6e] text-white p-6 sm:p-10 shadow-lg overflow-hidden">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#e9b44c]/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-amber-300">
              <span className="material-symbols-outlined text-[16px] icon-fill">verified</span>
              <span>منصة الأزياء والأحذية المعتمدة رسمياً 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              استكشف أفضل بوتيكات ومتاجر الأزياء والأحذية المعتمدة
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
              اكسب كاش باك 5% نقاط موحدة تمشي معك وتستبدلها في أي متجر شريك 
              <span className="font-bold text-[#e9b44c] mr-1">(كل 1 ₪ = 10 نقاط كاش باك، وكل 1,000 نقطة = 5 ₪ خصم مباشر).</span>
            </p>

            {/* Big Search Form */}
            <div className="pt-3 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center bg-white p-1.5 rounded-2xl shadow-xl border border-gray-200/80 gap-2">
                <div className="flex items-center flex-1 w-full px-3 gap-2">
                  <span className="material-symbols-outlined text-gray-400 text-[22px]">search</span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث باسم المتجر أو نوع القطعة (فستان، عباية، حذاء)..."
                    className="w-full bg-transparent border-none text-on-surface placeholder:text-gray-400 focus:ring-0 text-xs sm:text-sm py-2.5 px-0 outline-none"
                  />
                </div>

                {/* Region Select */}
                <div className="hidden sm:flex items-center gap-1.5 border-r border-gray-200 pr-3 pl-2 text-xs text-on-surface-variant whitespace-nowrap">
                  <span className="material-symbols-outlined text-[16px] text-gaza-teal">location_on</span>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="bg-transparent border-none text-xs font-bold text-on-surface p-0 focus:ring-0 cursor-pointer"
                  >
                    <option value="all">كافة المناطق</option>
                    <option value="central">المنطقة المركزية</option>
                    <option value="north">المنطقة الشمالية</option>
                    <option value="south">المنطقة الجنوبية</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#1f7a6e] hover:bg-[#165a51] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-transform active:scale-95 cursor-pointer shadow-xs"
                >
                  <span>بحث</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                </button>
              </div>
            </div>

            {/* Feature Micro-Chips */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] text-emerald-200">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#e9b44c] icon-fill">bolt</span>
                <span>توصيل فوري مع كود الأمان OTP</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#e9b44c] icon-fill">check_circle</span>
                <span>أزياء وأحذية أصلية 100%</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#e9b44c] icon-fill">autorenew</span>
                <span>استبدال النقاط فوري عبر الكاشير</span>
              </span>
            </div>

          </div>
        </section>

        {/* Category Chips Bar */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base font-bold text-[#12302b] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-gaza-teal">category</span>
              <span>تصفح حسب قسم الأزياء المعتمد</span>
            </h2>
            <span className="text-[11px] text-on-surface-variant hidden sm:inline">
              تم استبعاد المنتجات الخارجة عن الأزياء والموضة
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#12302b] text-white shadow-xs'
                      : 'bg-white hover:bg-surface-container-low border border-gray-200 text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Sorting Toolbar */}
        <section className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-on-surface">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span>عرض <strong className="font-bold text-gaza-teal">{filteredStores.length} متجر أزياء</strong> معتمد في شبكة الشركاء</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end flex-wrap">
            <span className="text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">sort</span>
              <span>ترتيب:</span>
            </span>
            <button
              type="button"
              onClick={() => setSortBy("pro")}
              className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer ${
                sortBy === "pro"
                  ? 'bg-gaza-teal/10 border-gaza-teal text-gaza-teal'
                  : 'bg-surface-container-low border-outline-variant/40 text-on-surface'
              }`}
            >
              شريك Pro أولاً
            </button>
            <button
              type="button"
              onClick={() => setSortBy("rating")}
              className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer ${
                sortBy === "rating"
                  ? 'bg-gaza-teal/10 border-gaza-teal text-gaza-teal'
                  : 'bg-surface-container-low border-outline-variant/40 text-on-surface'
              }`}
            >
              الأعلى تقييماً
            </button>
          </div>
        </section>

        {/* Stores Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStores.map((store) => (
            <StoreCard
              key={store.id}
              store={store}
              onOpenModal={(s) => setModalStore(s)}
            />
          ))}
        </section>

      </main>

      <Footer />

      {/* Quick View Modal */}
      <StoreQuickViewModal
        store={modalStore}
        isOpen={!!modalStore}
        onClose={() => setModalStore(null)}
      />
    </div>
  );
}
