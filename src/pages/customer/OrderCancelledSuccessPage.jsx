import React from 'react';
import { Link } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';

export default function OrderCancelledSuccessPage() {
  return (
    <div className="bg-[#F6F3EC] text-[#12302B] min-h-screen flex flex-col antialiased selection:bg-[#E9B44C] selection:text-[#12302B] font-tajawal">
      <CustomerHeader />

      {/* BREADCRUMB STRIP */}
      <section className="bg-[#FBF9F5] border-b border-[#E1DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm flex-wrap">
            <Link to="/" className="hover:text-[#1F7A6E] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>الرئيسية</span>
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <Link to="/customer/orders" className="hover:text-[#1F7A6E] transition-colors">
              طلباتي
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="hover:text-[#1F7A6E]">طلب رقم #TBD-2026-7841</span>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-[#12302B] font-bold">تأكيد إلغاء الطلب واسترداد المحفظة</span>
          </nav>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Hero Success Banner Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E1DACB] shadow-sm relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-52 h-52 rounded-full bg-[#1F7A6E]/10 blur-3xl pointer-events-none"></div>

          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#E8F5F3] text-[#1F7A6E] flex items-center justify-center shrink-0 border border-[#1F7A6E]/30 shadow-inner">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#E8F5F3] text-[#1F7A6E] text-xs font-bold border border-[#1F7A6E]/30">
                    تم إلغاء الطلب بنجاح واسترداد الرصيد
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    رقم التوثيق: <strong className="text-[#12302B]">#CNL-2026-9042</strong>
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-black text-[#12302B]">
                  تم إلغاء الطلب بنجاح وإيداع المبلغ في محفظتك الإلكترونية
                </h1>
                <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">
                  تم إرجاع مبلغ <strong className="text-[#1F7A6E] font-bold">335.00 ₪</strong> مباشرة إلى محفظة تبادل الخاصة بك (بعد خصم{' '}
                  <span className="font-bold text-[#BA1A1A]">15.00 ₪</span> رسوم تغطية انتقال مندوب التوصيل) من متجر{' '}
                  <span className="text-[#12302B] font-bold">بوتيك لمسة للأزياء الراقية</span>.
                </p>
              </div>
            </div>

            <div className="bg-[#F6F3EC] border border-[#E1DACB] rounded-2xl p-4 flex md:flex-col items-center md:items-end justify-between gap-2 shrink-0 text-right">
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>تاريخ وتوقيت العملية</span>
              </div>
              <span className="text-sm font-extrabold text-[#12302B]">اليوم - 02:45 مساءً</span>
              <span className="text-xs text-[#1F7A6E] font-bold">الطلب الأصلي: #TBD-2026-7841</span>
            </div>
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Right Column (7 Cols): Financial Details & Points Ledger */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#E1DACB]">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-[24px]">account_balance_wallet</span>
                  <h2 className="text-base sm:text-lg font-bold text-[#12302B]">تفاصيل الحسبة المالية المستردة</h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#E8F5F3] text-[#1F7A6E] text-xs font-bold border border-[#1F7A6E]/20">
                  إيداع فوري بالمحفظة
                </span>
              </div>

              <div className="divide-y divide-[#E1DACB]/60 mt-4">
                {/* Row 1 */}
                <div className="py-3.5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#12302B]">إجمالي قيمة فستان السهرة والحذاء</p>
                    <p className="text-xs text-gray-500">طلب من متجر: بوتيك لمسة للأزياء الراقية</p>
                  </div>
                  <span className="text-base font-bold text-[#12302B]">350.00 ₪</span>
                </div>

                {/* Row 2 */}
                <div className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-xs font-bold border border-red-200">
                      <span className="material-symbols-outlined text-[14px]">remove</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#12302B]">رسوم التوصيل المخصومة للمندوب</p>
                      <p className="text-xs text-gray-500">تعويض مباشر للمندوب لتغطية الانتقال الميداني والتسليم</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-red-600">-15.00 ₪</span>
                </div>

                {/* Row 3 */}
                <div className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-bold border border-amber-200">
                      <span className="material-symbols-outlined text-[14px]">cancel</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#12302B]">نقاط الكاش باك الملغاة المرتبطة بالطلب</p>
                      <p className="text-xs text-gray-500">تم إلغاء 3,350 نقطة كاش باك المعلقة حمايةً للدفتر المالي والنزاهة</p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    -3,350 نقطة معلقة
                  </span>
                </div>

                {/* Row 4: Net Highlighted Refund */}
                <div className="py-4 bg-[#E8F5F3] -mx-6 px-6 mt-3 flex items-center justify-between border-t border-b border-[#1F7A6E]/30">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">savings</span>
                    </div>
                    <div>
                      <span className="text-sm sm:text-base font-black text-[#12302B]">صافي المبلغ المودع في محفظتك</span>
                      <p className="text-xs text-gray-600">جاهز ومتاح للاستخدام فوراً في أي طلب أو متجر جديد</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-xl sm:text-2xl font-black text-[#1F7A6E]">+335.00 ₪</span>
                  </div>
                </div>

                {/* Row 5 */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#E9B44C] text-[20px]">account_balance</span>
                    <span className="text-sm font-bold text-[#12302B]">رصيد محفظتك الإجمالي بعد الإيداع:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-[#12302B]">347.00 ₪</span>
                    <span className="text-xs font-bold text-[#1F7A6E] bg-[#E8F5F3] px-2 py-0.5 rounded-full">
                      2,400 نقطة
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column (5 Cols): Next Steps & Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm space-y-4">
              <h3 className="text-base font-bold text-[#12302B] pb-3 border-b border-[#E1DACB]">
                الإجراءات المتاحة
              </h3>

              <div className="space-y-3">
                <Link
                  to="/customer/wallet"
                  className="w-full py-3.5 px-4 bg-[#12302B] hover:bg-[#1F7A6E] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span className="material-symbols-outlined text-lg text-[#E9B44C]">account_balance_wallet</span>
                  <span>الانتقال لمحفظتي واستعراض الرصيد</span>
                  <span className="material-symbols-outlined text-base">arrow_left_alt</span>
                </Link>

                <Link
                  to="/stores"
                  className="w-full py-3.5 px-4 bg-[#F6F3EC] hover:bg-[#E1DACB]/50 text-[#12302B] text-sm font-bold rounded-xl border border-[#E1DACB] flex items-center justify-center gap-2 transition-all"
                >
                  <span className="material-symbols-outlined text-lg text-[#1F7A6E]">storefront</span>
                  <span>متابعة التسوق في المتاجر الأخرى</span>
                </Link>

                <Link
                  to="/customer/orders"
                  className="w-full py-2.5 text-center text-xs text-gray-500 hover:text-[#12302B] font-semibold block"
                >
                  العودة لقائمة طلباتي
                </Link>
              </div>

              <div className="p-3 bg-[#FBF9F5] rounded-xl border border-[#E1DACB] text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-1 font-bold text-[#12302B]">
                  <span className="material-symbols-outlined text-sm text-[#1F7A6E]">verified_user</span>
                  <span>ضمان تبادل المالي:</span>
                </div>
                <p className="leading-relaxed">
                  تم تسجيل عملية الاسترداد وتوثيقها رسمياً. يمكنك استخدام الرصيد المودع فوراً عند الدفع في أي متجر شريك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
