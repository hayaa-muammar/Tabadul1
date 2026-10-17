import React, { useState } from 'react';

export default function ProductGallery({ images = [], title = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {/* Main Large Showcase */}
      <div className="relative bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/50 shadow-xs group aspect-4/5 w-full">
        {/* Badges Overlay */}
        <div className="absolute top-3.5 right-3.5 z-10 flex flex-col gap-1.5 items-start">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/90 text-white font-bold text-xs backdrop-blur-xs shadow-xs">
            <span className="material-symbols-outlined text-[16px] icon-fill">redeem</span>
            <span>كاش باك 5%</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-primary text-xs font-bold border border-outline-variant/40 shadow-xs">
            <span className="material-symbols-outlined text-[16px] text-amber-500 icon-fill">verified</span>
            <span>قطعة أصلية مضمونة</span>
          </span>
        </div>

        {/* Main Display Image */}
        <img
          src={images[activeIndex]}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Zoom Hint */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-surface-container-lowest/80 backdrop-blur-xs text-[11px] text-on-surface-variant flex items-center gap-1 pointer-events-none">
          <span className="material-symbols-outlined text-[14px]">zoom_in</span>
          <span>معاينة تفاصيل الخامة والقصة</span>
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {images.map((img, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all p-0.5 cursor-pointer focus:outline-none ${
                isActive 
                  ? 'border-gaza-teal ring-2 ring-gaza-teal/20 shadow-xs' 
                  : 'border-outline-variant hover:border-outline opacity-70 hover:opacity-100'
              }`}
              aria-label={`عرض الصورة رقم ${idx + 1}`}
            >
              <img src={img} alt={`صورة مصغرة ${idx + 1}`} className="w-full h-full object-cover rounded-lg" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
