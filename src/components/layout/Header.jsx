import { useState } from 'react';

import {
  Globe,
  CircleHelp,
  Menu,
  X,
  ChevronDown,
  ShoppingBag,
} from 'lucide-react';

import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';

const navigationLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'المتاجر الشريكة', href: '/stores' },
  { label: 'المكافآت', href: '/rewards' },
  { label: 'مركز المساعدة', href: '/help' },
];

function Header({ variant = 'public' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [joinMenuOpen, setJoinMenuOpen] = useState(false);

  const cartCount = useCartStore((state) => state.getItemCount());
  const navigate = useNavigate();

  const isCustomer = variant === 'customer';
  const isMerchant = variant === 'merchant';
  const isAuth = variant === 'auth';

  const showJoinDropdown = isAuth;

  const joinLabel = isCustomer
    ? 'انضم كمتسوق'
    : 'انضم كتاجر';

  const closeMenus = () => {
    setMenuOpen(false);
    setJoinMenuOpen(false);
  };

  // الانتقال إلى صفحة تسجيل الدخول مع تحديد نوع الحساب
  const handleJoin = (role) => {
    closeMenus();

    navigate('/login', {
      state: { activeRole: role },
    });
  };

  const joinButtonClass =
    'flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm font-bold text-[#082b4c] transition hover:bg-slate-50 sm:px-4';

  const navigation = (
    <>
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          onClick={closeMenus}
          className="whitespace-nowrap text-sm font-semibold text-slate-600 transition hover:text-[#082b4c]"
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  // خيارات الانضمام
  const joinOptions = (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={() => handleJoin('merchant')}
        className="w-full rounded-lg px-4 py-3 text-right text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#082b4c]"
      >
        انضم كتاجر
      </button>

      <button
        type="button"
        onClick={() => handleJoin('customer')}
        className="w-full rounded-lg px-4 py-3 text-right text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#082b4c]"
      >
        انضم كمتسوق
      </button>
    </div>
  );

  return (
    <header
      dir="rtl"
      className="relative z-50 border-b border-slate-100 bg-white"
    >
      <div className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenus}
          className="flex shrink-0 flex-col"
          aria-label="تبادل - الصفحة الرئيسية"
        >
          <span className="text-xl font-extrabold text-[#082b4c] sm:text-2xl">
            تبادل
          </span>

          <span className="text-[10px] font-medium text-[#a17b32] sm:text-xs">
            تسوّق بذكاء واكسب ولاء
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 lg:flex xl:gap-7">
          {navigation}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-2 sm:flex">

          {/* Join Dropdown */}
          {showJoinDropdown ? (
            <div className="relative">
              <button
                type="button"
                aria-expanded={joinMenuOpen}
                onClick={() =>
                  setJoinMenuOpen((previous) => !previous)
                }
                className={joinButtonClass}
              >
                انضم

                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    joinMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {joinMenuOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  {joinOptions}
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              state={{
                activeRole: isCustomer ? 'customer' : 'merchant',
              }}
              onClick={closeMenus}
              className={joinButtonClass}
            >
              {joinLabel}
            </Link>
          )}

          {/* Language */}
          <button
            type="button"
            aria-label="اختيار اللغة"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100"
          >
            <Globe size={20} />
          </button>

          {/* Help */}
          <Link
            to="/help"
            onClick={closeMenus}
            aria-label="مركز المساعدة"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100"
          >
            <CircleHelp size={20} />
          </Link>

          {/* Cart */}
          <Link
            to="/customer/cart"
            onClick={closeMenus}
            aria-label={`سلة المشتريات (${cartCount} قطع)`}
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[#e9b44c] px-1 text-[10px] font-black text-[#12302b]">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login */}
          <Link
            to={isCustomer ? '/customer/login' : isMerchant ? '/merchant/login' : '/login'}
            onClick={closeMenus}
            className="whitespace-nowrap rounded-lg bg-[#082b4c] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#10436e] sm:px-6"
          >
            تسجيل الدخول
          </Link>
        </div>

        {/* Mobile Header Actions (Cart + Menu) */}
        <div className="flex items-center gap-2 sm:hidden">
          <Link
            to="/customer/cart"
            onClick={closeMenus}
            aria-label="سلة المشتريات"
            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-[#082b4c] transition hover:bg-slate-50"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[#e9b44c] px-1 text-[10px] font-black text-[#12302b]">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((previous) => !previous)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-[#082b4c] transition hover:bg-slate-50"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute inset-x-0 top-full border-b border-slate-200 bg-white p-4 shadow-lg sm:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1">

            {navigation}

            {/* Join Dropdown */}
            {showJoinDropdown ? (
              <div className="mt-2">
                <button
                  type="button"
                  aria-expanded={joinMenuOpen}
                  onClick={() =>
                    setJoinMenuOpen((previous) => !previous)
                  }
                  className="flex w-full items-center justify-between rounded-lg border border-[#082b4c] px-4 py-3 text-sm font-bold text-[#082b4c]"
                >
                  انضم

                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      joinMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {joinMenuOpen && (
                  <div className="mt-2 rounded-lg border border-slate-200 p-1">
                    {joinOptions}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                state={{
                  activeRole: isCustomer ? 'customer' : 'merchant',
                }}
                onClick={closeMenus}
                className="mt-2 rounded-lg border border-[#082b4c] px-4 py-3 text-center text-sm font-bold text-[#082b4c] transition hover:bg-slate-50"
              >
                {joinLabel}
              </Link>
            )}

            {/* Login */}
            <Link
              to={isCustomer ? '/customer/login' : isMerchant ? '/merchant/login' : '/login'}
              onClick={closeMenus}
              className="mt-2 rounded-lg bg-[#082b4c] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#10436e]"
            >
              تسجيل الدخول
            </Link>

          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;