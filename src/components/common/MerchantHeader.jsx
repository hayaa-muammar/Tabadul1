import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MerchantHeader() {
  const location = useLocation();

  return (
    <header className="w-full top-0 sticky z-40 bg-white/95 text-[#12302b] border-b border-[#12302b]/10 shadow-sm backdrop-blur-md transition-all font-tajawal">
      {/* Ultra-lightweight Connection & Encrypted Session Bar */}
      <div className="bg-[#f6f3ec] text-[#52606d] text-xs px-4 py-1.5 border-b border-[#12302b]/10 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1f7a6e]"></span>
            <span className="text-[#12302b] font-bold">شبكة غزة 2026 — متصل</span>
          </div>
          <div className="text-[#1f7a6e] font-bold hidden sm:flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span>جلسة تاجر معتمدة — اتصال مشفر 256-Bit</span>
          </div>
        </div>
      </div>

      {/* Main Merchant Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Anchor */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none shrink-0">
          <div className="h-10 w-auto flex items-center justify-center">
            <img
              alt="شعار تبادل الأصلي"
              className="h-full w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdiXQNmJzYIl6PECtK-0Z_eK5rLr6vyiV694yubGM6tX5iUgVUBCS9qo1D2zoByKVT8cvYptCEsHVna6sw77ll4n7Nvd1Vz5DI90zf-qUNwuux0oF_mOmf3xs70bwXSt01a-qiM-uG6Jhl_31Ti5oKhIm51tPQFAIQKYFi5IKOBkLbkyb5N_ncgv--iqOAwJFKYihJb0MaPWIsSQcHIIQnjfDJpDrs8m1_YAPT_wo28k4mi5nzkXePdB6NKTpNovOlj-g"
            />
          </div>
          <div className="flex flex-col text-right justify-center">
            <span className="text-xl font-black tracking-tight text-[#12302b] leading-none">تبادل</span>
            <span className="text-[11px] font-bold text-[#c7922d] leading-tight mt-0.5">
              بوابة التجار المعتمدة
            </span>
          </div>
        </Link>

        {/* Center Merchant Navigation */}
        <nav className="hidden lg:flex items-center gap-4 text-xs xl:text-sm font-bold">
          <Link
            to="/"
            className="text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5 px-3 py-2 rounded-xl transition-colors"
          >
            الرئيسية
          </Link>
          <Link
            to="/stores"
            className="text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5 px-3 py-2 rounded-xl transition-colors"
          >
            المتاجر الشريكة
          </Link>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12302b]/5 border border-[#12302b]/10 text-[#12302b] text-xs font-bold">
            <span className="material-symbols-outlined text-sm text-[#e9b44c] icon-fill">verified</span>
            <span>بوابة التجار المعتمدة 2026</span>
          </div>
        </nav>

        {/* Left Actions Cluster (Merchant Focus) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            to="/login"
            className="px-3.5 py-1.5 rounded-xl bg-[#12302b] hover:bg-[#1f7a6e] text-white font-black text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm text-[#e9b44c]">person</span>
            <span>بوابة الزبائن</span>
          </Link>
          <Link
            to="/"
            className="hidden sm:inline-flex px-3 py-1.5 rounded-xl bg-[#f6f3ec] hover:bg-[#12302b]/10 text-[#12302b] font-bold text-xs border border-[#12302b]/15 transition-all"
          >
            الرئيسية
          </Link>
        </div>
      </div>
    </header>
  );
}
