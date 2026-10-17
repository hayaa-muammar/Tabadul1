import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { usePoints } from '../../context/PointsContext';
import MobileNavDrawer from './MobileNavDrawer';

export default function Header() {
  const { user } = useAuth();
  const { itemCount } = useCart();
  const { pointsBalance } = usePoints();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const isCartActive = location.pathname === '/cart';

  return (
    <>
      <header className="w-full top-0 sticky z-40 bg-surface-container-lowest shadow-xs border-b border-outline-variant/30 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          
          {/* Right Section: Brand Identity */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none">
              <div className="h-10 flex items-center justify-center">
                <img
                  alt="شعار منصة تبادل"
                  className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
                  src="/logo.png"
                />
              </div>
              <div className="flex flex-col text-right">
                <span className="text-lg sm:text-xl font-black text-primary tracking-tight leading-none">تبادل</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-gaza-teal mt-0.5 leading-none">برنامج ولاء غزة 2026</span>
              </div>
            </Link>

            <span className="hidden xl:inline-flex items-center px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-medium text-[11px] border border-outline-variant/40">
              قطاع غزة • شبكة موحدة
            </span>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4 text-xs xl:text-sm font-bold">
            <Link
              to="/"
              className={`px-3 py-2 rounded-xl transition-colors ${
                location.pathname === '/' 
                  ? 'text-primary bg-surface-container-low font-extrabold' 
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
              }`}
            >
              الرئيسية
            </Link>

            <Link
              to="/stores"
              className={`px-3 py-2 rounded-xl transition-colors flex items-center gap-1.5 ${
                location.pathname === '/stores' 
                  ? 'text-primary bg-surface-container-low font-extrabold' 
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-[18px] text-gaza-teal icon-fill">storefront</span>
              <span>استكشاف المتاجر</span>
            </Link>

            <Link
              to="/stores/lamsa-boutique"
              className={`px-3 py-2 rounded-xl transition-colors flex items-center gap-1.5 ${
                location.pathname.includes('/stores/lamsa') 
                  ? 'text-primary bg-surface-container-low font-extrabold' 
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
              }`}
            >
              <span>بوتيك لمسة</span>
            </Link>

            {/* Points Wallet Pill (Logged In) */}
            {!user.isGuest && (
              <div 
                className="hidden xl:flex items-center gap-2 bg-amber-50/90 border border-amber-200 px-3 py-1.5 rounded-xl text-amber-900 text-xs font-bold shadow-xs select-none"
                title="رصيد محفظة النقاط المتاح للاستبدال الفوري"
              >
                <span className="material-symbols-outlined text-amber-600 icon-fill text-[18px]">account_balance_wallet</span>
                <span>محفظة النقاط:</span>
                <span className="font-numeral-hero font-extrabold text-amber-800">{pointsBalance.toLocaleString()} نقطة</span>
                <span className="text-[11px] text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">{(pointsBalance / 200).toFixed(2)} ₪</span>
              </div>
            )}
          </nav>

          {/* Left Actions Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Cart Button with Dynamic Badge */}
            <Link
              to="/cart"
              className={`relative p-2.5 rounded-xl transition-all flex items-center justify-center cursor-pointer ${
                isCartActive 
                  ? 'bg-primary text-white shadow-sm ring-2 ring-primary/20' 
                  : 'bg-surface-container-low hover:bg-surface-container text-primary'
              }`}
              title="سلة المشتريات"
              aria-label="سلة المشتريات"
            >
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              <span className="absolute -top-1.5 -left-1.5 bg-secondary text-white font-numeral-hero font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {itemCount}
              </span>
            </Link>

            {/* Authenticated User / Guest Pill */}
            {!user.isGuest ? (
              <div className="hidden sm:flex items-center gap-2 pr-1.5 pl-3 py-1 rounded-xl bg-surface-container-low border border-outline-variant/60">
                <div className="w-8 h-8 rounded-lg bg-primary text-white font-bold text-xs flex items-center justify-center ring-1 ring-white/50">
                  {user.firstName[0]}
                </div>
                <div className="flex flex-col text-right leading-tight">
                  <span className="text-xs font-bold text-primary truncate max-w-[90px]">{user.name}</span>
                  <span className="text-[10px] text-secondary font-bold flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[11px] icon-fill">stars</span>
                    <span>VIP</span>
                  </span>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary hover:bg-primary-container text-white text-xs font-bold transition-all shadow-xs"
              >
                <span className="material-symbols-outlined text-[16px]">account_circle</span>
                <span>تسجيل الدخول</span>
              </Link>
            )}

            {/* Merchant Access Link */}
            <Link
              to="/merchant/login"
              className="hidden md:inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-outline-variant text-primary hover:bg-surface-container-low text-xs font-bold transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">storefront</span>
              <span>بوابة التجار</span>
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden p-2 rounded-xl text-primary bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer"
              aria-label="فتح القائمة الرئيسية"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer */}
      <MobileNavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
