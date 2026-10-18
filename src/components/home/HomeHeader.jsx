import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 text-[#12302b] border-b border-[#12302b]/10 shadow-sm backdrop-blur-md">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a className="flex items-center gap-3" href="#hero">
          <div className="h-10 w-auto flex items-center justify-center">
            <img
              alt="شعار تبادل الأصلي"
              className="h-full w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdiXQNmJzYIl6PECtK-0Z_eK5rLr6vyiV694yubGM6tX5iUgVUBCS9qo1D2zoByKVT8cvYptCEsHVna6sw77ll4n7Nvd1Vz5DI90zf-qUNwuux0oF_mOmf3xs70bwXSt01a-qiM-uG6Jhl_31Ti5oKhIm51tPQFAIQKYFi5IKOBkLbkyb5N_ncgv--iqOAwJFKYihJb0MaPWIsSQcHIIQnjfDJpDrs8m1_YAPT_wo28k4mi5nzkXePdB6NKTpNovOlj-g"
            />
          </div>
          <div className="flex flex-col text-right justify-center">
            <span className="text-xl font-black tracking-tight text-[#12302b] leading-none">تبادل</span>
            <span className="text-[11px] font-bold text-[#c7922d] leading-tight mt-0.5">تسوّق بذكاء واكسب بولاء</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-[#12302b]">
          <a className="hover:text-[#1f7a6e] transition-colors" href="#hero">الرئيسية</a>
          <a className="hover:text-[#1f7a6e] transition-colors" href="#how-it-works">كيف يعمل</a>
          <a className="hover:text-[#1f7a6e] transition-colors" href="#calculator">حاسبة التوفير</a>
          <a className="hover:text-[#1f7a6e] transition-colors" href="#merchants">المتاجر الشريكة</a>
          <a className="hover:text-[#1f7a6e] transition-colors" href="#faq">الأسئلة الشائعة</a>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/merchant/login"
            className="px-3.5 py-1.5 rounded-xl bg-[#f6f3ec] hover:bg-[#12302b]/10 text-[#12302b] font-bold text-xs flex items-center gap-1.5 border border-[#12302b]/15 transition-all"
          >
            <span className="material-symbols-outlined text-sm text-[#1f7a6e]">storefront</span>
            <span>بوابة التاجر</span>
          </Link>
          <Link
            to="/login"
            className="px-3.5 py-1.5 rounded-xl bg-[#12302b] hover:bg-[#1f7a6e] text-white font-black text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm text-[#e9b44c]">person</span>
            <span>دخول الزبون</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
