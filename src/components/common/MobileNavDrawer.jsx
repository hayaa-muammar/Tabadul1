import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { usePoints } from '../../context/PointsContext';

export default function MobileNavDrawer({ isOpen, onClose }) {
  const { user, loginAsShopper, setGuestMode, logout } = useAuth();
  const { itemCount } = useCart();
  const { pointsBalance } = usePoints();
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      {/* Drawer Canvas */}
      <div className="relative w-4/5 max-w-sm bg-surface-container-lowest h-full shadow-2xl flex flex-col justify-between z-10 overflow-y-auto">
        <div>
          {/* Header */}
          <div className="p-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low">
            <div className="flex items-center gap-2.5">
              <img
                alt="شعار تبادل الأصلي"
                className="h-7 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdiXQNmJzYIl6PECtK-0Z_eK5rLr6vyiV694yubGM6tX5iUgVUBCS9qo1D2zoByKVT8cvYptCEsHVna6sw77ll4n7Nvd1Vz5DI90zf-qUNwuux0oF_mOmf3xs70bwXSt01a-qiM-uG6Jhl_31Ti5oKhIm51tPQFAIQKYFi5IKOBkLbkyb5N_ncgv--iqOAwJFKYihJb0MaPWIsSQcHIIQnjfDJpDrs8m1_YAPT_wo28k4mi5nzkXePdB6NKTpNovOlj-g"
              />
              <span className="font-black text-[#12302b] text-base leading-none">تبادل</span>
              <span className="text-[10px] bg-[#1f7a6e]/15 text-[#1f7a6e] font-bold px-2 py-0.5 rounded-full">
                2026
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
              aria-label="إغلاق القائمة"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* User Profile Mini Banner */}
          <div className="p-4 bg-primary text-white">
            {!user.isGuest ? (
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-secondary-container text-primary font-black text-base flex items-center justify-center ring-2 ring-white/30">
                  {user.firstName[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-white">{user.name}</h3>
                    <span className="text-[10px] bg-secondary-container text-primary px-2 py-0.5 rounded-full font-bold">
                      {user.tier}
                    </span>
                  </div>
                  <p className="text-xs text-white/80 mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-secondary-container icon-fill">stars</span>
                    <span>{pointsBalance.toLocaleString()} نقطة = {(pointsBalance / 200).toFixed(2)} ₪</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-xs text-white/90">أهلاً بك! سجّل دخولك لكسب واستبدال كاش باك 5%</p>
                <Link
                  to="/login"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-secondary-container text-primary font-bold text-xs rounded-xl shadow-xs"
                >
                  <span className="material-symbols-outlined text-[16px]">login</span>
                  <span>تسجيل الدخول / إنشاء حساب</span>
                </Link>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1 text-sm font-bold">
            <Link
              to="/"
              onClick={onClose}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl transition-colors ${
                location.pathname === '/' 
                  ? 'bg-gaza-teal/10 text-gaza-teal' 
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">home</span>
              <span>الرئيسية</span>
            </Link>

            <Link
              to="/stores"
              onClick={onClose}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl transition-colors ${
                location.pathname === '/stores' 
                  ? 'bg-gaza-teal/10 text-gaza-teal' 
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">storefront</span>
              <span>استكشاف المتاجر المعتمدة (48 متجر)</span>
            </Link>

            <Link
              to="/stores/lamsa-boutique"
              onClick={onClose}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl transition-colors ${
                location.pathname.includes('/stores/lamsa-boutique') 
                  ? 'bg-gaza-teal/10 text-gaza-teal' 
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">checkroom</span>
              <span>بوتيك لمسة للأزياء (المتجر المميز)</span>
            </Link>

            <Link
              to="/products/champagne-silk-dress"
              onClick={onClose}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl transition-colors ${
                location.pathname.includes('/products/') 
                  ? 'bg-gaza-teal/10 text-gaza-teal' 
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">styler</span>
              <span>فستان حرير شامبين (القطعة الأكثر طلباً)</span>
            </Link>

            <Link
              to="/cart"
              onClick={onClose}
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-colors ${
                location.pathname === '/cart' 
                  ? 'bg-gaza-teal/10 text-gaza-teal' 
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                <span>سلة المشتريات</span>
              </div>
              <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full font-bold">
                {itemCount}
              </span>
            </Link>

            <Link
              to="/checkout"
              onClick={onClose}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl transition-colors ${
                location.pathname === '/checkout' 
                  ? 'bg-gaza-teal/10 text-gaza-teal' 
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">payments</span>
              <span>إتمام الطلب والدفع الآمن</span>
            </Link>
          </nav>

          {/* Quick Demo Mode Switcher */}
          <div className="mx-3 mt-4 p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-2">
            <span className="text-[11px] font-bold text-on-surface-variant block">تبديل الحالة للتجربة (Demo Mode):</span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => { loginAsShopper(); onClose(); }}
                className={`py-1.5 px-2 rounded-lg font-bold border transition-all ${
                  !user.isGuest ? 'bg-primary text-white border-primary' : 'bg-surface-container-lowest text-on-surface border-outline-variant'
                }`}
              >
                سارة أحمد (عضو)
              </button>
              <button
                type="button"
                onClick={() => { setGuestMode(); onClose(); }}
                className={`py-1.5 px-2 rounded-lg font-bold border transition-all ${
                  user.isGuest ? 'bg-primary text-white border-primary' : 'bg-surface-container-lowest text-on-surface border-outline-variant'
                }`}
              >
                متسوق غير مسجل
              </button>
            </div>
          </div>
        </div>

        {/* Footer in Drawer */}
        <div className="p-4 border-t border-outline-variant/30 space-y-2.5 bg-surface-container-low">
          <Link
            to="/merchant/login"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-primary text-primary font-bold text-xs hover:bg-primary hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">store</span>
            <span>بوابة التجار والشركاء</span>
          </Link>

          {!user.isGuest ? (
            <button
              type="button"
              onClick={() => { logout(); onClose(); }}
              className="flex items-center justify-center gap-1.5 w-full py-2 text-error text-xs font-bold hover:underline cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">logout</span>
              <span>تسجيل الخروج</span>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
