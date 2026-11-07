import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../../components/common/Footer';

export default function MerchantLogoutConfirmationPage() {
  const navigate = useNavigate();
  const [terminateAllSessions, setTerminateAllSessions] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleConfirmLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      setIsLoggingOut(false);
      navigate('/merchant/logout/success');
    }, 700);
  };

  return (
    <div className="bg-[#F6F3EC] text-[#191c22] min-h-screen flex flex-col justify-between font-tajawal antialiased selection:bg-[#ffddb5] selection:text-[#2a1800]">
      {/* ================= TOP APP BAR ================= */}
      <header className="bg-white shadow-sm w-full sticky top-0 z-50 border-b border-[#E1DACB]/60 font-tajawal">
        <div className="flex justify-between items-center w-full px-4 sm:px-6 py-3 max-w-7xl mx-auto">
          {/* Brand & Platform Sector Identity */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/merchant/dashboard" className="flex items-center gap-3 group">
              <div className="h-10 sm:h-11 w-auto flex items-center justify-center">
                <img
                  alt="شعار منصة تبادل"
                  className="h-full w-auto object-contain rounded-lg shadow-sm transition-transform group-hover:scale-105"
                  src="/logo.png"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-[#032448] tracking-tight leading-tight">
                  تبادل للمتاجر | Tabadul Merchants
                </span>
                <span className="text-[11px] text-[#43474e] flex items-center gap-1 font-medium">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1F7A6E]"></span>
                  بوابة قطاع الأزياء والأحذية الراقية
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Items */}
            <nav className="hidden lg:flex items-center gap-6 mr-4 text-xs font-bold text-[#43474e]">
              <Link to="/orders" className="hover:text-[#032448] transition-colors">
                حالة الطلب
              </Link>
              <Link to="/stores" className="hover:text-[#032448] transition-colors">
                دليل المتاجر
              </Link>
              <Link to="/terms" className="hover:text-[#032448] transition-colors">
                الشروط والأحكام
              </Link>
            </nav>
          </div>

          {/* Merchant Profile & Trailing Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Help Action */}
            <Link
              to="/merchant/help"
              className="hidden md:flex items-center gap-1.5 text-[#43474e] hover:text-[#032448] px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors text-xs font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">help_outline</span>
              <span>مركز المساعدة</span>
            </Link>

            {/* Notifications */}
            <button
              type="button"
              className="relative p-2 rounded-xl text-[#43474e] hover:text-[#032448] hover:bg-gray-100 transition-colors"
              title="الإشعارات"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#E9B44C] ring-2 ring-white"></span>
            </button>

            <div className="h-6 w-px bg-gray-200 mx-1"></div>

            {/* Boutique Identity Indicator */}
            <div className="flex items-center gap-2 sm:gap-3 pl-2 pr-1 py-1 rounded-xl bg-[#f2f3fc] border border-gray-200">
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-[#1f3a5f] flex items-center justify-center text-white font-bold shrink-0">
                <img
                  alt="صورة الملف الشخصي لمتجر الأزياء"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU-K7mgvDQtqLm5jT2o6D1TAmQyvj28nHPbOS-uUqzYdfTwa9WQpMimItTZMeJo-76m62IS9DVnjdzjgXNKoPZ-lDtwZX0YX2t2xikr-SogjnagKX6AAoExAv1zjAGwy_ftc7bE2c3KH2jRKBWJjQMAYz7kWaHAEwr3i95vAfZIvjsgr_4sB0vIPJdvVhznpt-ifRLD1qYb3pcv_oui24eA0G9RNKp2SAjchV4TAY3"
                />
              </div>
              <div className="flex flex-col text-right">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#191c22]">بوتيك لمسة</span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[#ffddb5] text-[#2a1800] text-[9px] font-bold">
                    <span className="material-symbols-outlined text-[11px] icon-fill">verified</span>
                    متجر موثوق VIP Pro
                  </span>
                </div>
                <span className="text-[10px] text-[#43474e]">معرف التاجر: #GZ-8942</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN CONTENT CANVAS ================= */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col justify-center items-center font-tajawal">
        {/* Breadcrumbs Navigation */}
        <nav
          aria-label="مسار التنقل"
          className="w-full max-w-2xl mb-6 flex items-center gap-2 text-xs font-medium text-[#43474e]"
        >
          <Link to="/merchant/dashboard" className="hover:text-[#032448] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">home</span>
            الرئيسية
          </Link>
          <span className="material-symbols-outlined text-xs text-gray-400">chevron_left</span>
          <Link to="/merchant/profile" className="hover:text-[#032448] transition-colors">
            حساب التاجر
          </Link>
          <span className="material-symbols-outlined text-xs text-gray-400">chevron_left</span>
          <span className="text-[#032448] font-bold">تسجيل الخروج</span>
        </nav>

        {/* Central Security Confirmation Bento Card */}
        <div className="w-full max-w-2xl bg-white rounded-2xl border border-[#E1DACB] shadow-lg overflow-hidden transition-all">
          {/* Ambient Card Header Accent */}
          <div className="h-2 w-full bg-gradient-to-r from-[#12302B] via-[#E9B44C] to-[#1F7A6E]"></div>

          <div className="p-6 sm:p-10">
            {/* Header / Security Icon Block */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="relative mb-5">
                <div className="w-20 h-20 rounded-2xl bg-[#F6F3EC] flex items-center justify-center shadow-inner border border-[#E1DACB]">
                  <span className="material-symbols-outlined text-[#E07B2F] text-[42px]">logout</span>
                </div>
                <div className="absolute -bottom-1 -left-1 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-[18px] icon-fill">
                    verified_user
                  </span>
                </div>
              </div>

              <h1 className="text-xl sm:text-2xl font-bold text-[#191c22] mb-2">
                تأكيد تسجيل الخروج من بوابة التاجر
              </h1>
              <p className="text-xs sm:text-sm text-[#43474e] max-w-lg leading-relaxed">
                هل أنت متأكد من رغبتك في تسجيل الخروج من حساب متجر{' '}
                <strong className="text-[#032448] font-bold">بوتيك لمسة</strong>؟ تم حفظ جميع بياناتك ومسودات المنتجات والطلبات النشطة بأمان تام.
              </p>
            </div>

            {/* Session Status & Store Metrics Box */}
            <div className="bg-[#f2f3fc] rounded-xl p-5 mb-6 border border-gray-200">
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-gray-200">
                <span className="text-xs font-bold text-[#43474e] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-[#1F7A6E]">storefront</span>
                  معلومات الجلسة النشطة
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#1F7A6E] text-xs font-semibold border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F7A6E] animate-pulse"></span>
                  مزامنة مستمرة مشفرة
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-right">
                {/* Merchant Entity */}
                <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-xs">
                  <span className="text-[11px] text-[#43474e] block mb-1">المتجر النشط</span>
                  <span className="text-sm font-bold text-[#191c22] block">بوتيك لمسة للأزياء</span>
                </div>
                {/* Inventory Sync */}
                <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-xs">
                  <span className="text-[11px] text-[#43474e] block mb-1">مزامنة المخزون</span>
                  <span className="text-sm font-bold text-[#1F7A6E] flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                    الآن (مكتمل)
                  </span>
                </div>
                {/* Wallet Balance */}
                <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-xs">
                  <span className="text-[11px] text-[#43474e] block mb-1">رصيد المحفظة الآمن</span>
                  <span className="text-base font-extrabold text-[#032448] flex items-center gap-1">
                    3,420 <span className="text-xs font-normal text-[#43474e]">₪</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Security Checkbox Feature */}
            <div className="bg-[#FFFDF9] rounded-xl p-4 mb-8 border border-[#ffddb5] flex items-start gap-3">
              <div className="flex items-center h-5 mt-0.5">
                <input
                  checked={terminateAllSessions}
                  onChange={(e) => setTerminateAllSessions(e.target.checked)}
                  className="w-4 h-4 rounded text-[#032448] focus:ring-[#032448] border-gray-300 bg-white cursor-pointer"
                  id="terminate-all-sessions"
                  type="checkbox"
                />
              </div>
              <div className="text-right">
                <label
                  className="text-xs sm:text-sm font-bold text-[#191c22] cursor-pointer block"
                  for="terminate-all-sessions"
                >
                  إنهاء الجلسة على جميع الأجهزة الأخرى المسجلة
                </label>
                <p className="text-xs text-[#43474e] mt-0.5 leading-relaxed">
                  يوصى بهذا الخيار لتعزيز أمان الحساب وإلغاء صلاحية الوصول من الأجهزة اللوحية أو المتصفحات المشتركة.
                </p>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5">
              {/* Primary Danger Action: Sign Out */}
              <button
                onClick={handleConfirmLogout}
                disabled={isLoggingOut}
                type="button"
                className="w-full sm:w-1/2 h-12 px-6 rounded-xl bg-[#ba1a1a] hover:bg-[#a11515] active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer disabled:opacity-60"
              >
                {isLoggingOut ? (
                  <>
                    <span className="material-symbols-outlined text-lg animate-spin">refresh</span>
                    <span>جاري إنهاء الجلسة...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-lg">power_settings_new</span>
                    <span>تأكيد تسجيل الخروج</span>
                  </>
                )}
              </button>

              {/* Secondary Action: Return to Dashboard */}
              <button
                onClick={() => navigate('/merchant/dashboard')}
                type="button"
                className="w-full sm:w-1/2 h-12 px-6 rounded-xl bg-white hover:bg-[#F6F3EC] active:scale-[0.98] text-[#1F7A6E] border-2 border-[#1F7A6E] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                <span>إلغاء والعودة للوحة التحكم</span>
              </button>
            </div>

            {/* Re-login Reassurance Badge */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-center gap-2 text-center text-[#43474e]">
              <span className="material-symbols-outlined text-base text-[#E9B44C]">info</span>
              <span className="text-xs">
                يمكنك تسجيل الدخول مجدداً في أي وقت برقم هاتفك المعتمد وكلمة المرور أو رمز التحقق السريع (OTP).
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-[#E1DACB]/60 w-full mt-auto font-tajawal">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-6 max-w-7xl mx-auto gap-4">
          <div className="flex items-center gap-2 text-[#43474e] text-xs">
            <span className="font-bold text-[#032448]">تبادل للمتاجر</span>
            <span>|</span>
            <span>جميع الحقوق محفوظة © 2026 منصة تبادل للمكافآت والأزياء - غزة</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#43474e]">
            <Link to="/merchant/help" className="hover:text-[#032448] transition-colors">
              مركز المساعدة والدعم الفني
            </Link>
            <Link to="/privacy" className="hover:text-[#032448] transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="hover:text-[#032448] transition-colors">
              شروط انضمام التجار
            </Link>
            <Link to="/contact" className="hover:text-[#032448] transition-colors">
              اتصل بنا
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
