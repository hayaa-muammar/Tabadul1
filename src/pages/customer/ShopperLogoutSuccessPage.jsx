import React from 'react';
import { Link } from 'react-router-dom';

export default function ShopperLogoutSuccessPage() {
  return (
    <div className="bg-[#F6F3EC] text-[#191c22] min-h-screen flex flex-col justify-between font-tajawal antialiased selection:bg-[#ffddb5] selection:text-[#2a1800]">
      {/* ================= 1. Header (Public Navbar - Non-logged-in State) ================= */}
      <header className="bg-white shadow-xs border-b border-[#E4DFD3] sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="h-10 sm:h-11 w-auto flex items-center justify-center">
                <img
                  alt="شعار منصة تبادل"
                  className="h-full w-auto object-contain rounded-lg transition-transform group-hover:scale-105"
                  src="/logo.png"
                />
              </div>
              <div className="border-r border-[#E4DFD3] pr-3 hidden sm:flex flex-col">
                <span className="text-xl font-bold text-[#12302B] leading-none">تبادل</span>
                <span className="text-xs text-[#1F7A6E] mt-1 font-medium">شبكة مكافآت الأزياء والأحذية الفاخرة</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#43474e]">
            <Link to="/" className="hover:text-[#1F7A6E] transition-colors py-1">
              الرئيسية
            </Link>
            <Link to="/stores" className="hover:text-[#1F7A6E] transition-colors py-1">
              استكشاف المتاجر
            </Link>
            <Link to="/customer/wallet" className="hover:text-[#1F7A6E] transition-colors py-1">
              كتالوج المكافآت
            </Link>
            <Link to="/merchant/help" className="hover:text-[#1F7A6E] transition-colors py-1">
              مركز المساعدة
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-[#1F7A6E] text-[#1F7A6E] text-sm font-bold hover:bg-[#1F7A6E]/10 transition-all duration-150 active:scale-95"
            >
              تسجيل الدخول
            </Link>
            <Link
              to="/register"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#12302B] text-white text-sm font-bold hover:bg-[#1F7A6E] transition-all duration-150 shadow-xs active:scale-95"
            >
              إنشاء حساب جديد
            </Link>
          </div>
        </div>
      </header>

      {/* ================= Main Canvas ================= */}
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* 2. Breadcrumbs */}
          <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-xs font-semibold text-[#43474e]">
            <Link to="/" className="hover:text-[#12302B] transition-colors">
              الرئيسية
            </Link>
            <span className="text-[#c4c6cf]">/</span>
            <span className="text-[#43474e]">تسجيل الخروج</span>
            <span className="text-[#c4c6cf]">/</span>
            <span className="text-[#1F7A6E] font-bold">تم بنجاح</span>
          </nav>

          {/* 3. Central Confirmation & Account Safety Card */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E4DFD3] shadow-sm text-center relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#1F7A6E]/5 rounded-full pointer-events-none blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#E9B44C]/10 rounded-full pointer-events-none blur-2xl"></div>

            {/* Security Icon Badge */}
            <div className="relative inline-flex items-center justify-center mb-5">
              <div className="w-20 h-20 rounded-full bg-[#1F7A6E]/10 flex items-center justify-center text-[#1F7A6E]">
                <svg className="w-10 h-10 text-[#1F7A6E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(31, 122, 110, 0.15)"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="absolute -bottom-1 -left-1 bg-[#E9B44C] text-[#12302B] rounded-full p-1.5 shadow-xs flex items-center justify-center border-2 border-white">
                <svg className="w-4 h-4 text-[#12302B]" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
                </svg>
              </div>
            </div>

            {/* Status Chip */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] text-xs font-bold mb-3">
                <span className="w-2 h-2 rounded-full bg-[#1F7A6E]"></span>
                تم إنهاء الجلسة بأمان تام
              </span>
            </div>

            {/* Headline & Welcoming Copy */}
            <h1 className="text-2xl sm:text-3xl font-bold text-[#12302B] mb-3">
              تم تسجيل الخروج بنجاح
            </h1>
            <p className="text-base text-[#43474e] max-w-xl mx-auto leading-relaxed">
              تم تأمين حسابكِ بنجاح يا <span className="font-bold text-[#12302B]">سارة</span>. جميع نقاطكِ، وقسائمكِ، وسلة مشترياتكِ، وطلباتكِ قيد التوصيل محفوظة في أمان تام وجاهزة بانتظار عودتكِ في أي وقت.
            </p>

            {/* 4. Shopper Account Status Summary Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-right">
              {/* Card 1: Balance Protected */}
              <div className="p-4 rounded-xl border border-[#E4DFD3] bg-[#F6F3EC]/40 hover:bg-[#F6F3EC]/70 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#E9B44C]/20 text-[#835400] shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#835400]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#43474e]">رصيد النقاط المحفوظ</span>
                    <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                      آمن 100%
                    </span>
                  </div>
                  <div className="text-lg font-bold text-[#12302B]">
                    2,400 نقطة <span className="text-xs text-[#1F7A6E] font-medium">(12.00 ₪)</span>
                  </div>
                  <div className="text-xs text-[#43474e] mt-0.5">
                    بالإضافة إلى 1,000 نقطة قيد التعليق محفوظة بصلاحية كاملة.
                  </div>
                </div>
              </div>

              {/* Card 2: Active Orders */}
              <div className="p-4 rounded-xl border border-[#E4DFD3] bg-[#F6F3EC]/40 hover:bg-[#F6F3EC]/70 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1F7A6E]/15 text-[#1F7A6E] shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#1F7A6E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#43474e]">الطلبات الجارية</span>
                    <span className="text-[11px] bg-[#1F7A6E]/10 text-[#1F7A6E] px-2 py-0.5 rounded-full font-bold">
                      قيد الشحن
                    </span>
                  </div>
                  <div className="text-lg font-bold text-[#12302B]">
                    طلب مستمر (#TBD-2026-7841)
                  </div>
                  <div className="text-xs text-[#43474e] mt-0.5">
                    مسار التوصيل مستمر بشكل طبيعي وستصلكِ إشعارات SMS للتأكيد.
                  </div>
                </div>
              </div>

              {/* Card 3: Saved Shopping Bag */}
              <div className="p-4 rounded-xl border border-[#E4DFD3] bg-[#F6F3EC]/40 hover:bg-[#F6F3EC]/70 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#032448]/10 text-[#032448] shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#032448]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                    <path d="M3 6h18"></path>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#43474e]">سلة المشتريات</span>
                    <span className="text-[11px] bg-gray-100 text-[#43474e] px-2 py-0.5 rounded-full font-medium">
                      محفوظة
                    </span>
                  </div>
                  <div className="text-lg font-bold text-[#12302B]">
                    قطعتان في السلة
                  </div>
                  <div className="text-xs text-[#43474e] mt-0.5">
                    منتجات الأزياء المختارة ستبقى في انتظاركِ لإتمام الدفع لاحقاً.
                  </div>
                </div>
              </div>

              {/* Card 4: Session Cleared */}
              <div className="p-4 rounded-xl border border-[#E4DFD3] bg-[#F6F3EC]/40 hover:bg-[#F6F3EC]/70 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <path d="m9.5 10.5 5 5"></path>
                    <path d="m14.5 10.5-5 5"></path>
                    <circle cx="12" cy="18" r="1"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#43474e]">أمان الجلسة الحالية</span>
                    <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold">
                      مغلقة
                    </span>
                  </div>
                  <div className="text-lg font-bold text-[#12302B]">
                    إلغاء الترخيص الفوري
                  </div>
                  <div className="text-xs text-[#43474e] mt-0.5">
                    تم مسح رموز الجلسة من هذا المتصفح لمنع أي استخدام غير مصرح به.
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Action CTAs */}
            <div className="mt-8 pt-6 border-t border-[#E4DFD3] flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/login"
                className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#12302B] text-white text-sm font-bold hover:bg-[#1F7A6E] transition-all duration-150 shadow-md active:scale-95"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
                <span>تسجيل الدخول مجدداً</span>
              </Link>
              <Link
                to="/"
                className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#1F7A6E] text-[#1F7A6E] bg-white text-sm font-bold hover:bg-[#1F7A6E]/5 transition-all duration-150 active:scale-95"
              >
                <svg className="w-5 h-5 text-[#1F7A6E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                  <path d="M2 7h20"></path>
                </svg>
                <span>استكشاف المتاجر والصفحة الرئيسية</span>
              </Link>
            </div>
          </section>

          {/* 6. Public/Shared Device Safety Advisory Note */}
          <section className="bg-white rounded-xl p-4 border border-[#E4DFD3] flex items-start sm:items-center gap-3 shadow-xs">
            <div className="text-[#E9B44C] shrink-0 mt-0.5 sm:mt-0">
              <svg className="w-6 h-6 text-[#835400]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(233, 180, 76, 0.2)"></path>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <div className="flex-grow text-xs text-[#43474e]">
              <strong className="text-[#12302B] font-bold">هل تستخدمين جهازاً مشتركاً أو مقهى إنترنت؟</strong>
              {' '}يُنصح بإغلاق نافذة المتصفح لزيادة الحماية. إذا واجهتِ أي صعوبة، فريق الدعم الفني بانتظاركِ على مدار الساعة عبر{' '}
              <Link to="/merchant/help" className="text-[#1F7A6E] font-bold underline hover:text-[#12302B] mr-1">
                مركز المساعدة
              </Link>.
            </div>
          </section>
        </div>
      </main>

      {/* ================= 7. Footer ================= */}
      <footer className="bg-[#032448] text-white mt-12 border-t border-[#1f3a5f]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <img
                alt="شعار منصة تبادل"
                className="h-8 w-auto object-contain rounded-md"
                src="/logo.png"
              />
              <span className="text-lg font-bold text-white">منصة تبادل</span>
            </div>
            <p className="text-xs text-[#d5e3ff] text-center md:text-right">
              © 2026 منصة تبادل للأزياء والأحذية الفاخرة. جميع الحقوق محفوظة - غزة.
            </p>
          </div>

          {/* Footer Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#aec8f4]">
            <Link to="/terms" className="hover:text-white transition-colors">
              الشروط والأحكام
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to="/merchant/login" className="hover:text-white transition-colors">
              بوابة التجار والشركاء
            </Link>
            <Link to="/merchant/help" className="hover:text-white transition-colors">
              مركز الدعم الفني والمساعدة
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
