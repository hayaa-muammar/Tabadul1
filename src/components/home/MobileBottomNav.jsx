import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileBottomNav() {
  return (
    <nav aria-label="التنقل السفلي" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#12302b]/15 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-around">
        <a className="flex flex-col items-center justify-center text-[#1f7a6e] text-xs font-bold" href="#hero">
          <span className="material-symbols-outlined text-lg">home</span>
          <span>الرئيسية</span>
        </a>
        <Link className="flex flex-col items-center justify-center text-[#52606d] text-xs font-bold" to="/stores">
          <span className="material-symbols-outlined text-lg">storefront</span>
          <span>المتاجر</span>
        </Link>
        <a className="flex flex-col items-center justify-center text-[#52606d] text-xs font-bold" href="#calculator">
          <span className="material-symbols-outlined text-lg">calculate</span>
          <span>الحاسبة</span>
        </a>
        <Link className="flex flex-col items-center justify-center text-[#52606d] text-xs font-bold" to="/merchant/login">
          <span className="material-symbols-outlined text-lg">add_business</span>
          <span>انضمام تاجر</span>
        </Link>
      </div>
    </nav>
  );
}
