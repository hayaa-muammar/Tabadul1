import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function MerchantLogoutSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f3ec] text-[#191c22] font-tajawal antialiased selection:bg-[#1f7a6e]/20 selection:text-[#12302b]">
      {/* 1. PUBLIC TOP NAVBAR */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-[#e1dacb]/60 transition-all duration-200">
        <div className="flex justify-between items-center w-full px-4 sm:px-6 py-3.5 max-w-7xl mx-auto">
          {/* Brand Logo Cluster */}
          <div className="flex items-center gap-4">
            <Link to="/merchant/landing" className="flex items-center gap-3 group focus:outline-none">
              <div className="h-10 sm:h-11 w-auto flex items-center justify-center">
                <img
                  alt="شعار منصة تبادل"
                  className="h-full w-auto object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-200"
                  src="/logo.png"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg text-[#12302b] font-black tracking-tight leading-none">
                  تبادل للمتاجر | Tabadul Merchants
                </span>
                <span className="text-[11px] text-gray-500 mt-1 font-medium">
                  بوابة قطاع الأزياء والأحذية
                </span>
              </div>
            </Link>
          </div>

          {/* Public Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs sm:text-sm font-bold text-gray-600">
            <Link to="/merchant/landing" className="hover:text-[#12302b] transition-colors">
              رئيسية التجار
            </Link>
            <Link to="/stores" className="hover:text-[#12302b] transition-colors">
              دليل المتاجر
            </Link>
            <Link to="/merchant/help" className="hover:text-[#12302b] transition-colors">
              مركز المساعدة
            </Link>
            <Link to="/terms" className="hover:text-[#12302b] transition-colors">
              الشروط والأحكام
            </Link>
          </nav>

          {/* Trailing Action */}
          <div className="flex items-center gap-3">
            <Link
              to="/merchant/login"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#12302b] text-white text-xs sm:text-sm font-bold hover:bg-[#1f7a6e] active:scale-95 transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-lg icon-fill">login</span>
              <span>تسجيل الدخول</span>
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CANVAS */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 relative overflow-hidden">
        {/* Central Reassuring Status Card */}
        <div className="w-full max-w-[720px] bg-white rounded-3xl border border-[#e1dacb] shadow-xl p-6 sm:p-12 relative overflow-hidden backdrop-blur-sm">
          {/* Top Decorative Corner Pills */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#1f7a6e]/5 rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#e9b44c]/10 rounded-full pointer-events-none"></div>

          <div className="flex flex-col items-center text-center relative z-10">
            {/* Status Icon Badge */}
            <div className="relative mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1f7a6e]/10 border-2 border-[#1f7a6e]/20 flex items-center justify-center text-[#1f7a6e] shadow-inner">
                <span className="material-symbols-outlined text-4xl sm:text-5xl icon-fill">lock</span>
              </div>
              <div className="absolute -bottom-1 -left-1 bg-[#e9b44c] text-[#12302b] rounded-full w-8 h-8 flex items-center justify-center shadow-md border-2 border-white">
                <span className="material-symbols-outlined text-lg font-bold">check</span>
              </div>
            </div>

            {/* Session Status Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1f7a6e]/10 text-[#1f7a6e] text-xs font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1f7a6e] animate-pulse"></span>
              <span>تم إنهاء الجلسة بنجاح</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl text-[#12302b] font-black tracking-tight mb-3">
              تم تسجيل الخروج بنجاح
            </h1>

            {/* Subtitle & Store Reassurance */}
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed mb-8">
              تم تأمين حساب متجر <strong className="text-[#12302b] font-bold">بوتيك لمسة</strong> بنجاح وإنهاء جلستك بأمان. تم حفظ جميع منتجاتك، ومسوداتك، ورصيد محفظتك البالغ{' '}
              <span className="inline-block px-2 py-0.5 rounded-lg bg-[#e9b44c]/15 text-[#12302b] font-bold text-sm">
                3,420 ₪
              </span>{' '}
              بأمان تام.
            </p>

            {/* 3. SECURITY & SAFETY SUMMARY BOX */}
            <div className="w-full bg-[#f6f3ec]/60 border border-[#e1dacb] rounded-2xl p-5 sm:p-6 text-right mb-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-[#12302b] border-b border-[#e1dacb]/60 pb-3">
                <span className="material-symbols-outlined text-xl text-[#1f7a6e]">verified_user</span>
                <span className="text-sm font-bold">تقرير أمان الحساب والبيانات الحالية</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Item 1 */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e1dacb]/50 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#1f7a6e]/10 text-[#1f7a6e] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">cloud_sync</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#12302b]">مزامنة البيانات</span>
                    <span className="text-[11px] text-gray-500 mt-0.5">
                      تم حفظ آخر التحديثات ومزامنة المخزون التلقائي فوراً.
                    </span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e1dacb]/50 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#1f7a6e]/10 text-[#1f7a6e] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">security</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#12302b]">أمان الجلسة</span>
                    <span className="text-[11px] text-gray-500 mt-0.5">
                      تم إلغاء صلاحية الوصول على المتصفح وتأمين المعاملات.
                    </span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e1dacb]/50 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#e9b44c]/20 text-[#835400] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg icon-fill">account_balance_wallet</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#12302b]">الرصيد المحفوظ</span>
                    <span className="text-[11px] text-gray-500 mt-0.5">
                      محفظتك برصيد 3,420 ₪ محمية وجاهزة للوصول في أي وقت.
                    </span>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e1dacb]/50 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#1f7a6e]/10 text-[#1f7a6e] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">speed</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#12302b]">تسجيل الدخول السريع</span>
                    <span className="text-[11px] text-gray-500 mt-0.5">
                      يمكنك العودة متى شئت برقم جوالك أو رمز OTP السريع.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. ACTION BUTTONS (CTAs) */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
              {/* Primary CTA */}
              <button
                onClick={() => navigate('/merchant/login')}
                type="button"
                className="w-full sm:w-auto min-w-[210px] h-12 inline-flex items-center justify-center gap-2 px-6 rounded-xl bg-[#12302b] hover:bg-[#1f7a6e] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 group cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl text-[#e9b44c] group-hover:rotate-12 transition-transform duration-200">
                  lock_open
                </span>
                <span>تسجيل الدخول مجدداً</span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => navigate('/merchant/landing')}
                type="button"
                className="w-full sm:w-auto min-w-[210px] h-12 inline-flex items-center justify-center gap-2 px-6 rounded-xl bg-white border-2 border-[#12302b] text-[#12302b] hover:bg-[#f6f3ec] text-xs sm:text-sm font-bold transition-all active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl text-[#12302b]">storefront</span>
                <span>الذهاب لبوابة التجار</span>
              </button>
            </div>

            {/* 5. QUICK SUPPORT / SAFETY NOTICE */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#f6f3ec] border border-[#e1dacb] text-gray-600 text-center max-w-xl">
              <span className="material-symbols-outlined text-lg text-[#e9b44c] shrink-0 icon-fill">info</span>
              <p className="text-xs text-right m-0 leading-relaxed">
                <strong>هل تستخدم جهازاً مشتركاً؟</strong> يُنصح بإغلاق نافذة المتصفح لزيادة الأمان. للمساعدة تواصل مع{' '}
                <Link to="/merchant/help" className="text-[#1f7a6e] font-bold hover:underline">
                  الدعم الفني المخصص
                </Link>{' '}
                على مدار الساعة.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* 6. FOOTER */}
      <footer className="bg-white border-t border-[#e1dacb]/60 mt-auto font-tajawal">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-6 max-w-7xl mx-auto gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span>جميع الحقوق محفوظة © 2026 منصة تبادل للمكافآت والأزياء - غزة</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600">
            <Link to="/merchant/help" className="hover:text-[#12302b] transition-colors">
              مركز المساعدة والدعم الفني
            </Link>
            <Link to="/privacy" className="hover:text-[#12302b] transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="hover:text-[#12302b] transition-colors">
              شروط انضمام التجار
            </Link>
            <Link to="/merchant/help" className="hover:text-[#12302b] transition-colors">
              مركز الدعم الفني
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
