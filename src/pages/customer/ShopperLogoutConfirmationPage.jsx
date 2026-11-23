import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function ShopperLogoutConfirmationPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [terminateAllSessions, setTerminateAllSessions] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const shopperName = user?.name || 'سارة أحمد';
  const shopperFirstName = user?.firstName || 'سارة';
  const shopperPhone = user?.phone || '+970 59 123 4567';

  const handleConfirmLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      logout();
      setIsLoggingOut(false);
      navigate('/shopper/logout/success');
    }, 700);
  };

  return (
    <div className="bg-[#F6F3EC] text-[#191c22] min-h-screen flex flex-col justify-between font-tajawal antialiased selection:bg-[#E9B44C] selection:text-white">
      {/* ==================== TOP NAVIGATION HEADER ==================== */}
      <header className="bg-white border-b border-[#E4DFD3] sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Right: Tabadul Logo & Brand Tagline */}
          <div className="flex items-center gap-4">
            <Link to="/shopper" className="flex items-center gap-3 group focus:outline-none">
              <div className="h-10 sm:h-11 w-auto flex items-center justify-center">
                <img
                  alt="شعار منصة تبادل"
                  className="h-full w-auto object-contain rounded-lg transition-transform group-hover:scale-105"
                  src="/logo.png"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#12302B] tracking-tight">تَـبـادُل</span>
                  <span className="bg-[#E9B44C]/15 text-[#12302B] text-[11px] font-bold px-2 py-0.5 rounded-full border border-[#E9B44C]/30">
                    ولاء المتسوق
                  </span>
                </div>
                <span className="text-xs text-[#43474e] font-medium">شبكة مكافآت الأزياء والأحذية الفاخرة</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 mr-6 border-r border-[#E4DFD3] pr-6 text-sm font-semibold text-[#43474e]">
              <Link to="/shopper" className="hover:text-[#12302B] transition-colors">
                الرئيسية
              </Link>
              <Link to="/stores" className="hover:text-[#12302B] transition-colors">
                المتاجر
              </Link>
              <Link to="/customer/wallet" className="hover:text-[#12302B] transition-colors">
                كتالوج المكافآت
              </Link>
              <Link to="/customer/orders" className="hover:text-[#12302B] transition-colors">
                طلباتي
              </Link>
            </nav>
          </div>

          {/* Left: User Profile & Points Balance */}
          <div className="flex items-center gap-3">
            {/* Points Pill */}
            <div className="flex items-center gap-2 bg-[#F6F3EC] px-3.5 py-1.5 rounded-full border border-[#E4DFD3] shadow-xs">
              <svg className="w-5 h-5 text-[#E9B44C] fill-current shrink-0" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#E9B44C" fillOpacity="0.2" stroke="#E9B44C" strokeWidth="1.5"></circle>
                <polygon fill="#E9B44C" points="12,4.5 14.3,9.2 19.5,10 15.7,13.7 16.6,18.9 12,16.5 7.4,18.9 8.3,13.7 4.5,10 9.7,9.2"></polygon>
              </svg>
              <div className="flex flex-col text-right">
                <span className="text-sm text-[#12302B] font-bold leading-none">2,400 نقطة</span>
                <span className="text-[11px] text-[#43474e] font-medium">(12.00 ₪)</span>
              </div>
            </div>

            {/* Help Link */}
            <Link
              to="/customer/dashboard"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#43474e] hover:text-[#1F7A6E] px-2.5 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4 text-[#43474e] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <span>مركز المساعدة</span>
            </Link>

            {/* Shopper Indicator */}
            <div className="flex items-center gap-2.5 pr-2 pl-1 py-1 rounded-xl bg-[#f2f3fc] border border-[#E4DFD3]">
              <div className="w-9 h-9 rounded-full bg-[#12302B] text-white flex items-center justify-center font-bold text-sm shadow-inner">
                {shopperFirstName[0] || 'س'}
              </div>
              <div className="hidden sm:flex flex-col text-right">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm text-[#12302B] font-bold">{shopperName}</span>
                  <span className="bg-[#E9B44C]/20 text-[#835400] px-1.5 rounded text-[11px] font-bold">
                    عضو مميز ⭐
                  </span>
                </div>
                <span className="text-xs text-[#74777f] font-normal" dir="ltr">
                  {shopperPhone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ==================== MAIN CONTENT CANVAS ==================== */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="مسار التنقل" className="flex items-center gap-2 mb-8 text-[#43474e] text-xs">
          <Link to="/shopper" className="hover:text-[#12302B] transition-colors flex items-center gap-1">
            <svg className="w-4 h-4 text-[#43474e] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            الرئيسية
          </Link>
          <span className="text-[#c4c6cf]">/</span>
          <Link to="/customer/profile" className="hover:text-[#12302B] transition-colors">
            حسابي الشخصي
          </Link>
          <span className="text-[#c4c6cf]">/</span>
          <span className="text-[#12302B] font-bold">تسجيل الخروج</span>
        </nav>

        {/* Main Centered Confirmation Card */}
        <section className="max-w-2xl mx-auto bg-white border border-[#E4DFD3] rounded-2xl shadow-sm overflow-hidden p-6 sm:p-10 relative">
          {/* Top Decorative Accent Strip */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B3261E] via-[#E9B44C] to-[#1F7A6E]"></div>

          {/* Icon & Status Badge */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-5">
              <div className="w-20 h-20 rounded-2xl bg-[#B3261E]/10 border-2 border-[#B3261E]/20 flex items-center justify-center text-[#B3261E]">
                <svg className="w-10 h-10 text-[#B3261E] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </div>
              <div className="absolute -bottom-1.5 -left-1.5 w-7 h-7 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center shadow-md border-2 border-white">
                <svg className="w-3.5 h-3.5 text-white fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
            </div>

            {/* Headline & Reassurance */}
            <h1 className="text-2xl sm:text-3xl text-[#12302B] font-bold mb-3 tracking-tight">
              تأكيد تسجيل الخروج من حساب المتسوق
            </h1>
            <p className="text-base text-[#43474e] max-w-lg leading-relaxed mb-6">
              هل أنتِ متأكدة من رغبتك في تسجيل الخروج يا <strong className="text-[#12302B] font-bold">{shopperFirstName}</strong>؟ رصيد نقاطك وسلة مشترياتك وطلباتك الجارية محفوظة بأمان تام.
            </p>
          </div>

          {/* Shopper Account & Data Status Box */}
          <div className="bg-[#F6F3EC]/60 rounded-xl border border-[#E4DFD3] p-5 mb-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4DFD3]/70">
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#12302B] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="text-sm font-bold text-[#12302B]">حساب المتسوق المسجل</span>
              </div>
              <span className="text-xs font-semibold text-[#12302B] bg-white px-3 py-1 rounded-full border border-[#E4DFD3]">
                {shopperName} <span dir="ltr">({shopperPhone})</span>
              </span>
            </div>

            {/* Metric Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Points Wallet */}
              <div className="bg-white p-3.5 rounded-lg border border-[#E4DFD3]/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E9B44C]/15 text-[#835400] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#835400] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M16 12h.01"></path>
                    <path d="M2 10h20"></path>
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-[#43474e] font-medium">رصيد المحفظة المحفوظ:</span>
                  <span className="text-sm font-bold text-[#12302B] block">2,400 نقطة متاحة (12.00 ₪)</span>
                  <span className="text-xs text-[#835400] font-medium">+ 1,000 نقطة قيد التعليق</span>
                </div>
              </div>

              {/* Active Orders */}
              <div className="bg-white p-3.5 rounded-lg border border-[#E4DFD3]/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1F7A6E]/15 text-[#1F7A6E] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#1F7A6E] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-[#43474e] font-medium">الطلبات الجارية:</span>
                  <span className="text-sm font-bold text-[#12302B] block">طلب واحد قيد التوصيل</span>
                  <span className="text-xs text-[#1F7A6E] font-medium">#TBD-2026-7841 (التتبع مستمر)</span>
                </div>
              </div>

              {/* Saved Cart */}
              <div className="bg-white p-3.5 rounded-lg border border-[#E4DFD3]/80 flex items-start gap-3 sm:col-span-2">
                <div className="w-8 h-8 rounded-lg bg-[#12302B]/10 text-[#12302B] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#12302B] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-[#43474e] font-medium">سلة المشتريات:</span>
                    <span className="text-sm font-bold text-[#12302B]">قطعتان في سلة المشتريات محفوظة</span>
                  </div>
                  <span className="bg-[#1F7A6E]/10 text-[#1F7A6E] text-[11px] px-2.5 py-1 rounded-full border border-[#1F7A6E]/20 font-bold">
                    محفوظة تلقائياً
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Option Checkbox */}
          <div className="bg-[#f2f3fc] rounded-xl border border-[#E4DFD3]/90 p-4 mb-6 transition-colors hover:border-[#1F7A6E]/50">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                checked={terminateAllSessions}
                onChange={(e) => setTerminateAllSessions(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-[#E4DFD3] text-[#12302B] focus:ring-[#1F7A6E] focus:ring-offset-0 cursor-pointer"
                type="checkbox"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#12302B]">
                  إنهاء الجلسة على كافة الأجهزة والمتصفحات الأخرى المسجلة
                </span>
                <span className="text-xs text-[#43474e] mt-0.5 leading-relaxed">
                  يُوصى بهذا الخيار لحماية رصيد محفظتك ومكافآتك عند استخدام أجهزة مشتركة أو مقاهي الإنترنت.
                </span>
              </div>
            </label>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-col-reverse sm:flex-row items-center gap-3.5 pt-2 mb-6">
            {/* Secondary / Cancellation Button */}
            <Link
              to="/customer/dashboard"
              className="w-full sm:w-1/2 min-h-[48px] px-5 py-3 rounded-xl border-2 border-[#12302B] text-[#12302B] hover:bg-[#12302B]/5 text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-center"
            >
              <svg className="w-4 h-4 text-[#12302B] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
              <span>إلغاء والعودة لمحفظتي / الرئيسية</span>
            </Link>

            {/* Primary Destructive Logout Button */}
            <button
              onClick={handleConfirmLogout}
              disabled={isLoggingOut}
              className="w-full sm:w-1/2 min-h-[48px] px-5 py-3 rounded-xl bg-[#B3261E] text-white hover:bg-red-700 shadow-sm text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-75"
              type="button"
            >
              {isLoggingOut ? (
                <>
                  <span className="inline-block animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full ml-2"></span>
                  <span>جاري تسجيل الخروج وحفظ البيانات...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-white fill-none stroke-current stroke-2 shrink-0" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  <span>تأكيد تسجيل الخروج</span>
                </>
              )}
            </button>
          </div>

          {/* Reassurance Helper Tip */}
          <div className="bg-[#1F7A6E]/10 border border-[#1F7A6E]/20 rounded-xl p-4 flex items-start gap-3">
            <svg className="w-5 h-5 text-[#1F7A6E] fill-none stroke-current stroke-2 shrink-0 mt-0.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <p className="text-sm text-[#12302B] leading-relaxed">
              <strong>معلومة أمان:</strong> يمكنكِ تسجيل الدخول مجدداً في أي وقت برقم جوالك وكلمة المرور أو برمز التحقق السريع (OTP)، وستجدين نقاطك وكافة قسائمك بانتظارك.
            </p>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-[#12302B] text-[#f9f9ff] border-t border-[#12302B] mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Right: Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
            <div className="h-9 w-auto flex items-center justify-center">
              <img
                alt="شعار منصة تبادل"
                className="h-full w-auto object-contain rounded-md"
                src="/logo.png"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#E9B44C] tracking-tight">مـنـصـة تَـبـادُل</span>
              <p className="text-xs text-white/80">
                © 2026 منصة تبادل للأزياء والأحذية الفاخرة. جميع الحقوق محفوظة - غزة، فلسطين.
              </p>
            </div>
          </div>

          {/* Left: Footer Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm font-semibold">
            <Link to="/merchant/help" className="hover:text-[#E9B44C] transition-colors">
              مركز المساعدة والدعم الفني
            </Link>
            <Link to="/terms" className="hover:text-[#E9B44C] transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="hover:text-[#E9B44C] transition-colors">
              شروط الاستخدام
            </Link>
            <Link to="/merchant/login" className="hover:text-[#E9B44C] transition-colors">
              بوابة المتاجر والشركاء
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
