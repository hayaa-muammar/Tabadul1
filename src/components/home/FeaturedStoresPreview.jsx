import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { storesData } from '../../data/storesData';
import StoreCard from '../catalog/StoreCard';

export default function FeaturedStoresPreview({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "جميع المتاجر" },
    { id: "women", label: "أزياء وفساتين" },
    { id: "abayas", label: "عبايات وشالات" },
    { id: "shoes", label: "أحذية فاخرة" },
    { id: "kids", label: "ملابس أطفال" }
  ];

  const filteredStores = activeCategory === "all"
    ? storesData.slice(0, 3)
    : storesData.filter((s) => s.category === activeCategory).slice(0, 3);

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white text-right" id="merchants">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-bold text-[#1f7a6e] bg-[#1f7a6e]/10 px-3.5 py-1 rounded-full">
              شبكة شركاء غزة
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#12302b]">
              متاجر وبوتيكات أزياء معتمدة في تبادل
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-on-surface-variant max-w-xl">
              تسوّق من أفضل معارض الأزياء والعبايات والأحذية واجمع نقاط كاش باك موحدة في محفظة واحدة.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#12302b] text-white shadow-xs'
                    : 'bg-[#f6f3ec] text-[#52606d] hover:bg-[#12302b]/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stores Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStores.map((store) => (
            <StoreCard key={store.id} store={store} onOpenModal={onOpenModal} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center pt-4">
          <Link
            to="/stores"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/60 text-primary font-bold text-sm sm:text-base transition-all active:scale-95 shadow-xs"
          >
            <span>استكشف كافة المتاجر الـ 48 المعتمدة</span>
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
