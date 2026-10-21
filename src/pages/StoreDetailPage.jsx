import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BackButton from '../components/common/BackButton';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ProductCard from '../components/catalog/ProductCard';
import ToastNotification from '../components/common/ToastNotification';
import { storesData } from '../data/storesData';
import { productsData } from '../data/productsData';

export default function StoreDetailPage() {
  const { storeId } = useParams();
  const [activeTab, setActiveTab] = useState("all");

  // Lookup store by route param, fallback to Lamsa Boutique
  const store = storesData.find((s) => s.id === storeId) || storesData[0];
  const boutiqueProducts = productsData.filter((p) => p.storeId === store.id || store.id === "lamsa-boutique");

  const filterTabs = [
    { id: "all", label: "الكل" },
    { id: "women", label: "فساتين سهرة" },
    { id: "abayas", label: "عبايات وشالات" },
    { id: "shoes", label: "أحذية فاخرة" }
  ];

  const filteredProducts = activeTab === "all"
    ? boutiqueProducts
    : boutiqueProducts.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f3ec] text-on-surface text-right">
      <Header />
      <ToastNotification />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Top Navigation & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
          <Breadcrumbs
            items={[
              { label: "استكشاف المتاجر", to: "/stores" },
              { label: store.categoryLabel, to: "/stores" },
              { label: store.name }
            ]}
          />
          <BackButton label="العودة للمتاجر" fallbackRoute="/stores" />
        </div>

        {/* Store Hero Banner & Profile Identification Card */}
        <section className="relative bg-surface-container-lowest rounded-3xl border border-surface-container-highest overflow-hidden shadow-xs">
          
          {/* Cover Photo */}
          <div className="h-44 sm:h-60 w-full relative overflow-hidden bg-primary">
            <img
              src={store.coverImage}
              alt={store.name}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12302b] via-transparent to-transparent" />

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="bg-white/95 backdrop-blur-md text-[#12302b] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs border border-[#1f7a6e]/30">
                <span className="material-symbols-outlined text-[16px] text-gaza-teal">security</span>
                <span>حماية المشتريات 100%</span>
              </span>
              <span className="bg-[#e9b44c] text-[#12302b] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
                <span className="material-symbols-outlined text-[16px] icon-fill">verified</span>
                <span>شريك معتمد Pro</span>
              </span>
            </div>
          </div>

          {/* Profile Bar */}
          <div className="px-6 pb-6 pt-0 relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 -mt-10 sm:-mt-12">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
                {/* Logo Avatar */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-surface-container-lowest p-2 shadow-xl ring-4 ring-white border border-surface-container-highest flex items-center justify-center shrink-0">
                  <div className={`w-full h-full rounded-xl font-extrabold flex items-center justify-center text-lg sm:text-xl border ${store.logoColor}`}>
                    {store.shortName}
                  </div>
                </div>

                {/* Title & Metadata */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-primary tracking-tight">
                      {store.name}
                    </h1>
                    <span className="bg-primary/10 text-primary text-xs px-2.5 py-0.5 rounded-full font-bold">
                      موثق 100%
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                    {store.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-on-surface">
                    <div className="flex items-center gap-1 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      <span className="material-symbols-outlined text-[16px] text-amber-500 icon-fill">star</span>
                      <span>{store.rating}</span>
                      <span className="text-gray-400 font-normal">({store.reviewsCount} تقييم)</span>
                    </div>
                    <span>•</span>
                    <span className="text-gaza-teal font-bold">{store.cashbackRate}</span>
                    <span>•</span>
                    <span className="text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      <span>{store.location}</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Catalog Filter Tabs */}
        <section className="flex items-center justify-between gap-4 border-b border-outline-variant/40 pb-3 flex-wrap">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-white hover:bg-surface-container-low border border-outline-variant text-on-surface'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-on-surface-variant font-bold">
            عرض {filteredProducts.length} قطع معتمدة
          </span>
        </section>

        {/* Product Catalog Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        {/* Customer Reviews Section */}
        <section className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-outline-variant/60 shadow-xs space-y-4">
          <h3 className="font-bold text-base sm:text-lg text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-500 icon-fill">rate_review</span>
            <span>تجارب المتسوقين مع {store.name}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm text-primary">نور الهدى م.</span>
                <span className="text-[11px] text-amber-700 font-bold">★★★★★</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                "قماش فستان الحرير فاخر جداً ومطابق تماماً للصور. مندوب التوصيل انتظر حتى جربت المقاس في البيت ثم أخذت كود الأمان. خدمة راقية!"
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm text-primary">مريم كمال</span>
                <span className="text-[11px] text-amber-700 font-bold">★★★★★</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                "كسبت 1,900 نقطة من أول طلب واستبدلتها مباشرة بخصم في متجر الأحذية. فكرة تبادل ممتازة وفرت علي كتير!"
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
