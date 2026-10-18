import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { usePoints } from '../../context/PointsContext';
import MobileNavDrawer from './MobileNavDrawer';

export default function Header({ variant, customSubtitle }) {
  const { user } = useAuth();
  const { itemCount } = useCart();
  const { pointsBalance } = usePoints();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const isMerchant = variant === 'merchant' || location.pathname.startsWith('/merchant');
  const isAuth = variant === 'auth' || [
    '/login',
    '/shopper/login',
    '/register',
    '/shopper/register',
    '/verify-otp',
    '/shopper/otp',
    '/forgot-password',
    '/reset-password'
  ].includes(location.pathname);
  const isCheckout = variant === 'checkout' || location.pathname === '/checkout';
  const isCartActive = location.pathname === '/cart';

  const subtitle = customSubtitle || (
    isMerchant
      ? 'بوابة التجار المعتمدة'
      : isCheckout
        ? 'إتمام الشراء الآمن'
        : isAuth
          ? 'حساب المتسوق الموحد'
          : 'تسوّق بذكاء واكسب بولاء'
  );

  return (
    <>
      <header className="w-full top-0 sticky z-40 bg-white/95 text-[#12302b] border-b border-[#12302b]/10 shadow-sm backdrop-blur-md transition-all">
        {/* Ultra-lightweight Connection & Data-Saver Bar (Standardized matching Homepage) */}
        <div className="bg-[#f6f3ec] text-[#52606d] text-xs px-4 py-1.5 border-b border-[#12302b]/10 flex items-center justify-between">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3 text-[11px] sm:text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1f7a6e]"></span>
              <span className="text-[#12302b] font-bold">شبكة غزة 2026 — متصل</span>
            </div>
            <div className="text-[#1f7a6e] font-bold hidden sm:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">bolt</span>
              <span>منصة ويب 100% خفيفة — لا تتطلب تحميل تطبيق</span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Right Section: Brand Identity */}
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
                {subtitle}
              </span>
            </div>
          </Link>

          {/* Center Navigation */}
          {isMerchant ? (
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
          ) : isCheckout ? (
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1f7a6e]/10 border border-[#1f7a6e]/20 text-[#12302b] text-xs font-bold">
              <span className="material-symbols-outlined text-sm text-[#1f7a6e] icon-fill">security</span>
              <span>حماية العملية برمز 4 أرقام • الدفع بعد فحص المقاس والاستلام</span>
            </div>
          ) : isAuth ? (
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
          ) : (
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3 text-xs xl:text-sm font-bold">
              <Link
                to="/"
                className={`px-3 py-2 rounded-xl transition-colors ${
                  location.pathname === '/' 
                    ? 'text-[#12302b] bg-[#12302b]/10 font-black' 
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                الرئيسية
              </Link>

              <Link
                to="/stores"
                className={`px-3 py-2 rounded-xl transition-colors flex items-center gap-1.5 ${
                  location.pathname.startsWith('/stores') 
                    ? 'text-[#12302b] bg-[#12302b]/10 font-black' 
                    : 'text-[#52606d] hover:text-[#12302b] hover:bg-[#12302b]/5'
                }`}
              >
                <span className="material-symbols-outlined text-[18px] text-[#1f7a6e]">storefront</span>
                <span>استكشاف المتاجر</span>
              </Link>

              {/* Points Wallet Pill (Logged In) */}
              {!user.isGuest && (
                <div 
                  className="hidden xl:flex items-center gap-2 bg-[#f6f3ec] border border-[#12302b]/15 px-3 py-1.5 rounded-xl text-[#12302b] text-xs font-bold shadow-xs select-none"
                  title="رصيد محفظة النقاط المتاح للاستبدال الفوري"
                >
                  <span className="material-symbols-outlined text-[#e9b44c] icon-fill text-[18px]">account_balance_wallet</span>
                  <span className="text-[#52606d]">محفظة النقاط:</span>
                  <span className="font-numeral-hero font-black text-[#12302b]">{pointsBalance.toLocaleString()} نقطة</span>
                  <span className="text-[11px] text-[#1f7a6e] font-black bg-[#1f7a6e]/10 px-2 py-0.5 rounded-md">
                    {(pointsBalance / 200).toFixed(2)} ₪
                  </span>
                </div>
              )}
            </nav>
          )}

          {/* Left Actions Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {isMerchant ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3.5 py-1.5 rounded-xl bg-[#12302b] hover:bg-[#1f7a6e] text-white font-black text-xs flex items-center gap-1.5 shadow-sm transition-all"
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
            ) : isAuth ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/"
                  className="px-3.5 py-1.5 rounded-xl bg-[#12302b] hover:bg-[#1f7a6e] text-white font-black text-xs flex items-center gap-1.5 shadow-sm transition-all"
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
              </div>
            ) : (
              <>
                {/* Cart Button with Dynamic Badge */}
                <Link
                  to="/cart"
                  className={`relative p-2.5 rounded-xl transition-all flex items-center justify-center cursor-pointer ${
                    isCartActive 
                      ? 'bg-[#12302b] text-white shadow-sm ring-2 ring-[#12302b]/20' 
                      : 'bg-[#f6f3ec] hover:bg-[#12302b]/10 text-[#12302b] border border-[#12302b]/10'
                  }`}
                  title="سلة المشتريات"
                  aria-label="سلة المشتريات"
                >
                  <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                  {itemCount > 0 && (
                    <span className="absolute -top-1.5 -left-1.5 bg-[#e9b44c] text-[#12302b] font-black text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                      {itemCount}
                    </span>
                  )}
                </Link>

                {/* Authenticated User / Guest Pill */}
                {!user.isGuest ? (
                  <div className="hidden sm:flex items-center gap-2 pr-1.5 pl-3 py-1 rounded-xl bg-[#f6f3ec] border border-[#12302b]/15">
                    <div className="w-8 h-8 rounded-lg bg-[#12302b] text-white font-black text-xs flex items-center justify-center ring-1 ring-white/50">
                      {user.firstName[0]}
                    </div>
                    <div className="flex flex-col text-right leading-tight">
                      <span className="text-xs font-black text-[#12302b] truncate max-w-[90px]">{user.name}</span>
                      <span className="text-[10px] text-[#c7922d] font-bold flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[11px] icon-fill">stars</span>
                        <span>{user.tier || 'عضو نشط'}</span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#12302b] hover:bg-[#1f7a6e] text-white font-black text-xs shadow-sm transition-all"
                  >
                    <span className="material-symbols-outlined text-sm text-[#e9b44c]">person</span>
                    <span>دخول الزبون</span>
                  </Link>
                )}

                {/* Merchant Access Link */}
                <Link
                  to="/merchant/login"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f6f3ec] hover:bg-[#12302b]/10 text-[#12302b] font-bold text-xs border border-[#12302b]/15 transition-all"
                >
                  <span className="material-symbols-outlined text-sm text-[#1f7a6e]">storefront</span>
                  <span>بوابة التاجر</span>
                </Link>

                {/* Mobile Hamburger Menu Toggle */}
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(true)}
                  className="lg:hidden p-2 rounded-xl text-[#12302b] bg-[#f6f3ec] hover:bg-[#12302b]/10 transition-colors cursor-pointer border border-[#12302b]/10"
                  aria-label="فتح القائمة الرئيسية"
                >
                  <span className="material-symbols-outlined text-[22px]">menu</span>
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer */}
      <MobileNavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
