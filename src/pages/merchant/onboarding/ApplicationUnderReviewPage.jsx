import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function ApplicationUnderReviewPage() {
  const [refreshNotice, setRefreshNotice] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setRefreshNotice(true);
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Order Metadata & Offline Resilience Notice Bar */}
        <section className="w-full bg-white border border-[#E1DACB] rounded-xl p-4 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="bg-[#F6F3EC] px-3 py-1 rounded-lg text-primary font-bold border border-[#E1DACB] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">tag</span>
              مرجع الطلب: #TBD-M-2026-4892
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-600 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-[#1F7A6E]">calendar_today</span>
              تاريخ التقديم: 14 أكتوبر 2026 - الساعة 10:24 صباحاً
            </span>
            <span className="text-gray-300">•</span>
            <span className="font-bold text-[#12302B] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-[#1F7A6E]">store</span>
              بوتيك لمسة (Lamsa Boutique)
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#1F7A6E]/10 px-3.5 py-1.5 rounded-lg border border-[#1F7A6E]/30">
            <span className="material-symbols-outlined text-[#1F7A6E] text-base">cloud_done</span>
            <span className="text-xs text-[#1F7A6E] font-semibold">
              البيانات محدثة ومحفوظة محلياً في متصفحك (دعم الشبكات الضعيفة)
            </span>
          </div>
        </section>

        {/* Primary Hero Status Card for "قيد المراجعة والتدقيق" */}
        <section className="w-full bg-white border border-[#E1DACB] rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2.5 bg-[#E9B44C]/20 border border-[#E9B44C]/50 px-4 py-2 rounded-full">
                <span className="w-3 h-3 rounded-full bg-[#E9B44C] animate-pulse"></span>
                <span className="material-symbols-outlined text-[#835400] text-lg">hourglass_top</span>
                <span className="text-sm text-[#835400] font-bold">
                  قيد المراجعة والتدقيق الفني
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-[#12302B] tracking-tight">
                طلب انضمام متجر بوتيك لمسة قيد التدقيق والمراجعة
              </h1>

              <p className="text-base text-gray-600 leading-relaxed">
                يقوم فريق الامتثال ومراجعة المتاجر بفحص بيانات الهوية، تصنيف الأزياء، ورابط المتجر للتأكد من مطابقة شروط برنامج المكافآت 2026.
              </p>

              <div className="inline-flex items-center gap-3 bg-[#F6F3EC] border border-[#E1DACB] px-4 py-2.5 rounded-xl">
                <span className="material-symbols-outlined text-[#1F7A6E] text-xl">schedule</span>
                <div className="text-xs sm:text-sm text-[#12302B] font-semibold">
                  المدة المتوقعة للمراجعة: <span className="text-[#835400] font-bold">خلال 24 ساعة كحد أقصى</span>
                  <span className="text-gray-500 font-normal mr-1">(متبقي حوالي 6 ساعات لاكتمال المراجعة)</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-[#12302B] to-[#1F7A6E] text-white min-w-[240px] text-center border border-white/10 shadow-md">
              <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-3xl text-[#E9B44C]">security_update_good</span>
              </div>
              <span className="text-base font-bold text-white">فحص الجودة والأمان</span>
              <span className="text-xs text-white/80 font-medium mt-1">معايير حماية المستهلك والتاجر</span>
              <div className="mt-4 pt-3 border-t border-white/20 w-full flex items-center justify-between text-xs text-white/90">
                <span>نسبة الإنجاز</span>
                <span className="font-bold text-[#E9B44C] text-sm">50%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Column Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Focus (7 cols) */}
          <section className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F6F3EC] flex items-center justify-center text-[#12302B]">
                    <span className="material-symbols-outlined text-xl">timeline</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#12302B]">مراحل تدقيق وتفعيل الحساب</h2>
                </div>
                <span className="text-xs text-gray-600 bg-[#F6F3EC] px-3 py-1 rounded-full border border-[#E1DACB]">
                  المرحلة 2 من أصل 4
                </span>
              </div>

              {/* Vertical Timeline Steps */}
              <div className="mt-6 space-y-6 relative before:absolute before:right-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#E1DACB]">
                {/* Step 1: Completed */}
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 z-10 shadow-sm ring-4 ring-white">
                    <span className="material-symbols-outlined text-2xl font-bold">check</span>
                  </div>
                  <div className="flex-1 bg-[#F6F3EC]/50 p-4 rounded-xl border border-[#E1DACB]">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-sm font-bold text-[#12302B]">1. استلام الطلب وتوثيق الهوية التجارية</h3>
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        مكتمل ✓
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1.5">
                      تم استلام السجل والبيانات بنجاح ومطابقة وثائق إثبات الهوية الشخصية لمالك المتجر.
                    </p>
                    <div className="mt-2 text-[11px] text-gray-400 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">history</span>
                      14 أكتوبر 2026 - الساعة 10:24 صباحاً
                    </div>
                  </div>
                </div>

                {/* Step 2: In Progress */}
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E9B44C] text-[#12302B] flex items-center justify-center shrink-0 z-10 shadow-md ring-4 ring-white animate-pulse">
                    <span className="material-symbols-outlined text-2xl">hourglass_empty</span>
                  </div>
                  <div className="flex-1 bg-[#E9B44C]/10 p-4 rounded-xl border-2 border-[#E9B44C] shadow-sm">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-sm font-bold text-[#12302B]">2. التحقق من مطابقة المعايير وفئات الأزياء والأحذية</h3>
                      <span className="bg-[#E9B44C] text-[#12302B] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">sync</span>
                        جاري التدقيق الآن ⏳
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      مراجعة التزام متجر "بوتيك لمسة" بسياسات أسعار مكافآت تبادل، تصنيف العبايات والملابس النسائية، والتأكد من إمكانية تسليم الفواتير في نطاق قطاع غزة.
                    </p>
                    <div className="w-full bg-white h-2 rounded-full mt-3 overflow-hidden border border-[#E1DACB]">
                      <div className="bg-[#E9B44C] h-full rounded-full w-2/3 transition-all"></div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Upcoming */}
                <div className="relative flex items-start gap-4 opacity-75">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-400 flex items-center justify-center shrink-0 z-10 ring-4 ring-white border border-gray-200">
                    <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-sm font-bold text-gray-600">3. إعداد المحفظة وتفعيل فترة الـ 14 يوماً المجانية</h3>
                      <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full">
                        خطوة قادمة
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5">
                      ربط محفظة التاجر الإلكترونية لتحويل نسب النقاط والأرباح وتجهيز فترة التجربة المعفاة من الرسوم.
                    </p>
                  </div>
                </div>

                {/* Step 4: Upcoming Launch */}
                <div className="relative flex items-start gap-4 opacity-75">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-400 flex items-center justify-center shrink-0 z-10 ring-4 ring-white border border-gray-200">
                    <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-sm font-bold text-gray-600">4. إطلاق المتجر وبدء استقبال طلبات الزبائن</h3>
                      <span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full">
                        الاعتماد النهائي
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5">
                      ظهور صفحة "بوتيك لمسة" في تطبيق المستهلكين وتمكين الزبائن من مسح QR Code لجمع واستبدال النقاط فوراً.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  type="button"
                  className="w-full sm:flex-1 h-12 bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all duration-150 active:scale-95 disabled:opacity-50"
                >
                  <span className={`material-symbols-outlined text-xl ${isRefreshing ? 'animate-spin' : ''}`}>refresh</span>
                  <span>{isRefreshing ? 'جاري الفحص والتحديث...' : 'تحديث حالة الطلب الآن'}</span>
                </button>

                <a
                  href="https://wa.me/970599123456"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:flex-1 h-12 border-2 border-[#12302B] text-[#12302B] hover:bg-[#12302B]/5 font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-150"
                >
                  <span className="material-symbols-outlined text-xl text-[#1F7A6E]">chat</span>
                  <span>تواصل مع الدعم الفني عبر واتساب</span>
                </a>
              </div>

              {refreshNotice && (
                <p className="text-center text-xs text-gray-600 mt-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-800 font-medium">
                  تم فحص الخادم: لا تزال المراجعة جارية، سنرسل لك إشعاراً فور انتهاء التدقيق الفني.
                </p>
              )}
            </div>

            {/* Gaza Resilience Info Card */}
            <div className="bg-[#1F7A6E]/5 border border-[#1F7A6E]/30 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1F7A6E]/20 text-[#1F7A6E] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">wifi_protected_setup</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#12302B]">نظام تبادل المرن لبيئة التجارة في غزة</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  تم بناء منظومة تبادل لدعم العمل دون اتصال بالإنترنت (Offline Mode). فور اعتماد متجرك، ستتمكن من تسجيل نقاط الزبائن حتى أثناء انقطاع شبكة الاتصالات، وستتم المزامنة تلقائياً عند عودة الاتصال.
                </p>
              </div>
            </div>
          </section>

          {/* Left Column (Application Summary - 5 cols) */}
          <aside className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F6F3EC] flex items-center justify-center text-[#12302B]">
                    <span className="material-symbols-outlined text-xl">feed</span>
                  </div>
                  <h2 className="text-base font-bold text-[#12302B]">ملخص بيانات طلب الانضمام</h2>
                </div>
                <span className="text-xs bg-[#F6F3EC] text-[#12302B] font-bold px-2.5 py-1 rounded">
                  مُقدم للعناية
                </span>
              </div>

              <div className="flex items-center gap-4 py-4 my-2 border-b border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-[#12302B] flex items-center justify-center text-[#E9B44C] text-lg font-bold">
                  لمسة
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#12302B]">بوتيك لمسة (Lamsa Boutique)</h3>
                  <p className="text-xs text-gray-500">الرمال، شارع عمر المختار - غزة</p>
                </div>
              </div>

              <div className="space-y-4 pt-2 text-xs">
                <div className="flex items-start justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">checkroom</span>
                    فئات المنتجات
                  </span>
                  <span className="font-semibold text-[#12302B] text-left">
                    عبايات راقية، أزياء نسائية، أحذية
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">phone_iphone</span>
                    رقم التواصل الموثق
                  </span>
                  <span className="font-bold text-[#12302B] dir-ltr font-mono">
                    +970 59 912 3456
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-500 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">payments</span>
                    دورة تسوية الأرباح
                  </span>
                  <span className="font-bold text-[#1F7A6E] text-left">
                    أسبوعي (كل خميس عبر المحفظة)
                  </span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-500 flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">stars</span>
                    نقاط الولاء للزبائن
                  </span>
                  <span className="font-bold text-[#835400]">
                    5% كاش باك نقاط
                  </span>
                </div>
              </div>
            </div>

            {/* Quick links to review other state simulations */}
            <div className="bg-[#F6F3EC] border border-[#E1DACB] rounded-2xl p-4 shadow-sm text-xs">
              <span className="font-bold text-gray-500 block mb-2">محاكاة حالات الطلب الأخرى:</span>
              <div className="flex flex-col gap-2">
                <Link to="/merchant/application/approved" className="text-emerald-700 font-bold hover:underline flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  عرض واجهة: تم اعتماد المتجر ومقبول (State: Approved)
                </Link>
                <Link to="/merchant/application/needs-revision" className="text-amber-800 font-bold hover:underline flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">warning</span>
                  عرض واجهة: طلب يحتاج تعديل (State: Needs Revision)
                </Link>
                <Link to="/merchant/application/rejected" className="text-rose-700 font-bold hover:underline flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">cancel</span>
                  عرض واجهة: طلب مرفوض تنظيماً (State: Rejected)
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
