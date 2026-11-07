import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MerchantHeader() {
  const location = useLocation();

  return (
    <header className="w-full top-0 sticky z-40 bg-white/95 text-[#12302b] border-b border-[#12302b]/10 shadow-sm backdrop-blur-md transition-all font-tajawal">
      {/* Main Merchant Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Anchor */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none shrink-0">
          <div className="h-10 sm:h-11 w-auto flex items-center justify-center">
            <img
              alt="شعار منصة تبادل"
              className="h-full w-auto object-contain transition-transform group-hover:scale-105 duration-200 rounded-lg"
              src="/logo.png"
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
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-bold">
          {location.pathname.startsWith('/merchant') &&
           !location.pathname.includes('/login') &&
           !location.pathname.includes('/otp') &&
           !location.pathname.includes('/landing') &&
           !location.pathname.includes('/onboarding') &&
           !location.pathname.includes('/application') ? (
            <>
              <Link
                to="/merchant/dashboard"
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  location.pathname === '/merchant/dashboard' || location.pathname === '/merchant'
                    ? 'bg-[#12302b] text-white'
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                لوحة التحكم
              </Link>
              <Link
                to="/merchant/orders"
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  location.pathname === '/merchant/orders'
                    ? 'bg-[#12302b] text-white'
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                الطلبات
              </Link>
              <Link
                to="/merchant/products"
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  location.pathname.startsWith('/merchant/products')
                    ? 'bg-[#12302b] text-white'
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                المنتجات
              </Link>
              <Link
                to="/merchant/wallet"
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  location.pathname.startsWith('/merchant/wallet')
                    ? 'bg-[#12302b] text-white'
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                المحفظة والتحويلات
              </Link>
              <Link
                to="/merchant/offers"
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  location.pathname.startsWith('/merchant/offers')
                    ? 'bg-[#12302b] text-white'
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                العروض
              </Link>
              <Link
                to="/merchant/reviews"
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  location.pathname.startsWith('/merchant/reviews')
                    ? 'bg-[#12302b] text-white'
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                التقييمات
              </Link>
              <Link
                to="/merchant/help"
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  location.pathname.startsWith('/merchant/help') || location.pathname.startsWith('/merchant/support') || location.pathname.startsWith('/merchant/tickets')
                    ? 'bg-[#12302b] text-white'
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                المساعدة
              </Link>
              <Link
                to="/merchant/settings"
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  location.pathname.startsWith('/merchant/settings') || location.pathname.startsWith('/merchant/store-settings')
                    ? 'bg-[#12302b] text-white'
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                الإعدادات
              </Link>
              <Link
                to="/merchant/profile"
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  location.pathname.startsWith('/merchant/profile')
                    ? 'bg-[#12302b] text-white'
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                الملف الشخصي
              </Link>
              <Link
                to="/merchant/reports"
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  location.pathname === '/merchant/reports'
                    ? 'bg-[#12302b] text-white'
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                التقارير
              </Link>
              <Link
                to="/merchant/subscription"
                className={`px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1 ${
                  location.pathname.startsWith('/merchant/subscription')
                    ? 'bg-[#12302b] text-white'
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                <span className="material-symbols-outlined text-sm text-[#e9b44c] icon-fill">stars</span>
                <span>الباقات والاشتراك</span>
              </Link>
            </>
          ) : (
            <>
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
            </>
          )}
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
