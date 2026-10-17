import React from 'react';
import { useOffline } from '../../context/OfflineContext';

export default function OfflineAlertBanner() {
  const { isOffline, toggleOffline } = useOffline();

  if (!isOffline) return null;

  return (
    <aside 
      aria-label="تنبيه وضع عدم الاتصال"
      className="bg-[#ba1a1a] text-white px-4 py-2 border-b border-white/20 text-xs font-bold transition-all sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-base animate-pulse">cloud_off</span>
          <span>أنت الآن في وضع عدم الاتصال (Offline) — يمكنك استعراض رصيدك المحفوظ وباركود الدفع السريع دون انقطاع!</span>
        </div>
        <button
          onClick={toggleOffline}
          type="button"
          className="min-h-[30px] px-3 py-0.5 rounded-lg bg-white/20 hover:bg-white/30 text-[11px] whitespace-nowrap active:scale-95 cursor-pointer"
        >
          إعادة الاتصال ↻
        </button>
      </div>
    </aside>
  );
}
