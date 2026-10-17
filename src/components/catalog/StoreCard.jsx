import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { productsData } from '../../data/productsData';

export default function StoreCard({ store, onOpenModal }) {
  const navigate = useNavigate();

  // Find products associated with this store
  const storeProducts = productsData.filter((p) => p.storeId === store.id).slice(0, 3);

  return (
    <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group text-right">
      {/* Store Banner Imagery */}
      <div className="relative h-44 w-full bg-surface-container overflow-hidden">
        <img
          src={store.coverImage}
          alt={store.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Badges on top */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 flex-wrap">
          {store.isPro && (
            <span className="px-2.5 py-1 rounded-full bg-[#12302b] text-[#e9b44c] text-[11px] font-bold flex items-center gap-1 shadow-xs border border-[#e9b44c]/30">
              <span className="material-symbols-outlined text-[14px] icon-fill">workspace_premium</span>
              <span>شريك مميز Pro</span>
            </span>
          )}
          {store.isVerified && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center gap-0.5 shadow-xs">
              <span className="material-symbols-outlined text-[12px]">verified</span>
              <span>موثق 100%</span>
            </span>
          )}
        </div>

        {/* Store Logo Stamp Overlay */}
        <div className="absolute -bottom-3 right-4 w-14 h-14 rounded-xl bg-white p-1 shadow-md border border-gray-100 flex items-center justify-center">
          <div className={`w-full h-full rounded-lg font-extrabold flex items-center justify-center text-sm border ${store.logoColor}`}>
            {store.shortName}
          </div>
        </div>

        {/* Location Tag */}
        <div className="absolute bottom-2 left-3 flex items-center gap-1 text-white text-[11px] font-medium bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md">
          <span className="material-symbols-outlined text-[13px] text-[#e9b44c]">location_on</span>
          <span>{store.location}</span>
        </div>
      </div>

      {/* Store Meta & Ratings */}
      <div className="p-4 pt-5 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-[#12302b]">{store.name}</h3>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
              <span className="material-symbols-outlined text-[14px] text-amber-500 icon-fill">star</span>
              <span className="font-numeral-hero">{store.rating}</span>
              <span className="text-gray-400 text-[10px]">({store.reviewsCount})</span>
            </div>
          </div>

          {/* Cashback Highlight Pill */}
          <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
            <span className="material-symbols-outlined text-[16px] text-emerald-600 icon-fill">savings</span>
            <span>{store.cashbackRate}</span>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
            {store.description}
          </p>

          {/* Product Showcase Mini-Tray */}
          {storeProducts.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <span className="text-[11px] font-bold text-gray-500 block mb-2">أبرز المعروضات:</span>
              <div className="grid grid-cols-3 gap-2">
                {storeProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => navigate(`/products/${p.id}`)}
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg p-1.5 border border-gray-100 text-center cursor-pointer transition-all active:scale-95"
                    title={p.title}
                  >
                    <div className="h-12 w-full rounded bg-gray-200 overflow-hidden mb-1">
                      <img src={p.images[0]} alt={p.title} className="h-full w-full object-cover" />
                    </div>
                    <span className="text-[10px] text-gray-700 block truncate font-medium">{p.title}</span>
                    <span className="text-[11px] font-extrabold text-gaza-teal font-numeral-hero">{p.price} ₪</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Card Actions */}
        <div className="pt-3 flex items-center gap-2">
          <Link
            to={`/stores/${store.id}`}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#12302b] hover:bg-[#1f4a43] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
          >
            <span>تصفح المتجر</span>
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          </Link>

          <button
            type="button"
            onClick={() => onOpenModal && onOpenModal(store)}
            className="p-2.5 rounded-xl border border-outline-variant/60 hover:bg-surface-container-low text-gaza-teal transition-colors cursor-pointer"
            title="المكافآت المتاحة بالنقاط"
            aria-label="عرض مكافآت المتجر"
          >
            <span className="material-symbols-outlined text-[20px]">loyalty</span>
          </button>
        </div>
      </div>
    </article>
  );
}
