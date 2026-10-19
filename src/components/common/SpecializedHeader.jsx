import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SpecializedHeader({ variant, customTitle, customBadge }) {
  const location = useLocation();

  const isCheckout = variant === 'checkout' || location.pathname === '/checkout';

  const title = customTitle || (isCheckout ? 'إتمام الشراء الآمن' : 'حساب المتسوق الموحد');

  return (
    <header className="w-full top-0 sticky z-40 bg-white/95 text-[#12302b] border-b border-[#12302b]/10 shadow-sm backdrop-blur-md transition-all font-tajawal">
      {/* Main Bar */}
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
              {title}
            </span>
          </div>
        </Link>

        {/* Center Specific Badge or Minimal Nav */}
        {isCheckout ? (
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1f7a6e]/10 border border-[#1f7a6e]/20 text-[#12302b] text-xs font-bold">
            <span className="material-symbols-outlined text-sm text-[#1f7a6e] icon-fill">security</span>
            <span>حماية العملية برمز 4 أرقام • الدفع بعد فحص المقاس والاستلام</span>
          </div>
        ) : (
          <nav className="hidden md:flex items-center gap-3 text-xs font-bold">
            <Link
              to="/"
              className="px-3.5 py-2 rounded-xl bg-[#f6f3ec] hover:bg-[#12302b]/10 text-[#12302b] transition-colors flex items-center gap-1.5 border border-[#12302b]/10"
            >
              <span className="material-symbols-outlined text-sm">home</span>
              <span>الرئيسية</span>
            </Link>
            <Link
              to="/stores"
              className="px-3.5 py-2 rounded-xl bg-[#f6f3ec] hover:bg-[#12302b]/10 text-[#12302b] transition-colors flex items-center gap-1.5 border border-[#12302b]/10"
            >
              <span className="material-symbols-outlined text-sm text-[#1f7a6e]">storefront</span>
              <span>استكشاف المتاجر</span>
            </Link>
          </nav>
        )}

        {/* Left Actions Cluster */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {isCheckout ? (
            <Link
              to="/cart"
              className="px-3.5 py-1.5 rounded-xl bg-[#f6f3ec] hover:bg-[#12302b]/10 text-[#12302b] font-bold text-xs flex items-center gap-1.5 border border-[#12302b]/15 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
              <span>العودة للسلة</span>
            </Link>
          ) : (
            <>
              <Link
                to="/"
                className="px-3.5 py-1.5 rounded-xl bg-[#12302b] hover:bg-[#1f7a6e] text-white font-black text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm text-[#e9b44c]">home</span>
                <span>الرئيسية</span>
              </Link>
              <Link
                to="/merchant/login"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f6f3ec] hover:bg-[#12302b]/10 text-[#12302b] font-bold text-xs border border-[#12302b]/15 transition-all"
              >
                <span className="material-symbols-outlined text-sm text-[#1f7a6e]">storefront</span>
                <span>بوابة التاجر</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
