import React from 'react';
import { Link } from 'react-router-dom';

export default function StoreQuickViewModal({ store, isOpen, onClose }) {
  if (!isOpen || !store) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-2xl text-right space-y-5 border border-outline-variant/60">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors cursor-pointer"
          aria-label="إغلاق النافذة"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Store Title & Badges */}
        <div className="flex items-center gap-3 pt-1">
          <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-black text-sm shrink-0">
            {store.shortName}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-headline-sm text-headline-sm font-bold text-primary">{store.name}</h3>
              {store.isPro && (
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold border border-amber-300">
                  Pro
                </span>
              )}
            </div>
            <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-0.5">
              <span className="material-symbols-outlined text-[14px] text-gaza-teal">location_on</span>
              <span>{store.location}</span>
            </p>
          </div>
        </div>

        {/* Loyalty Reward Formula Card */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 rounded-2xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
            <span className="material-symbols-outlined text-emerald-700 icon-fill">savings</span>
            <span>بروتوكول المكافآت المعتمد لدى المتجر:</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1 text-center">
            <div className="bg-white p-2.5 rounded-xl border border-emerald-100 shadow-xs">
              <span className="text-[11px] text-gray-500 block">كسب النقاط:</span>
              <span className="font-extrabold text-emerald-800 text-sm">1 ₪ = 10 نقاط</span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-emerald-100 shadow-xs">
              <span className="text-[11px] text-gray-500 block">نسبة الاسترجاع:</span>
              <span className="font-extrabold text-emerald-800 text-sm">5% كاش باك فوري</span>
            </div>
          </div>
        </div>

        {/* Store description */}
        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          {store.description}
        </p>

        {/* Metadata info */}
        <div className="grid grid-cols-2 gap-2 text-xs text-on-surface border-t border-b border-outline-variant/30 py-3">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-gaza-teal text-[18px]">schedule</span>
            <span>{store.workingHours}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-gaza-teal text-[18px]">local_shipping</span>
            <span>{store.deliveryTime}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <Link
            to={`/stores/${store.id}`}
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-primary hover:bg-primary-container text-white font-bold text-xs sm:text-sm text-center transition-all shadow-sm active:scale-95"
          >
            تصفح منتجات المتجر بالكامل
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="py-3 px-4 rounded-xl border border-outline-variant hover:bg-surface-container-low text-on-surface text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
}
