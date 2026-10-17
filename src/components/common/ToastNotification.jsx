import React from 'react';
import { useCart } from '../../context/CartContext';

export default function ToastNotification() {
  const { toast, hideToast } = useCart();

  if (!toast.visible) return null;

  return (
    <aside 
      aria-label="إشعار النظام"
      aria-live="polite"
      className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-md animate-bounce duration-300 pointer-events-auto"
    >
      <div className="flex items-center justify-between gap-3 bg-[#12302b] text-white p-4 rounded-2xl shadow-2xl border-2 border-[#e9b44c]/60">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#8df8bd] icon-fill text-[28px] shrink-0">
            check_circle
          </span>
          <div>
            <p className="font-bold text-sm text-[#e9b44c]">{toast.title}</p>
            <p className="text-xs text-white/90 leading-tight mt-0.5">{toast.message}</p>
          </div>
        </div>
        <button 
          onClick={hideToast}
          className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="إغلاق التنبيه"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
    </aside>
  );
}
