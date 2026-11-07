import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';
import ToastNotification from '../../components/common/ToastNotification';

/**
 * InsufficientFundsErrorPage
 * Exact React implementation of 27خطا الدفع بسبب الرصيد غير كافcode.html
 * Approved Payment Process - Detailed Insufficient Balance Error & Alternative Pathways
 */
export default function InsufficientFundsErrorPage() {
  const [secondsLeft, setSecondsLeft] = useState(11 * 60 + 58); // 11:58

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  const formatTimer = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#191c22] font-tajawal text-right selection:bg-[#ffddb5] selection:text-[#2a1800]">
      {/* Customer Header */}
      <CustomerHeader />
      <ToastNotification />

      {/* Breadcrumbs & Transaction Header Tracker (from 27code.html lines 180-202) */}
      <section className="bg-white/70 border-b border-[#e1e2ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <nav className="flex items-center gap-2 text-[#43474e] overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#032448] transition-colors">الرئيسية</Link>
            <span className="material-symbols-outlined text-xs">chevron_left</span>
            <Link to="/stores" className="hover:text-[#032448] transition-colors">استكشاف المتاجر</Link>
            <span className="material-symbols-outlined text-xs">chevron_left</span>
            <Link to="/stores/lamsa-boutique" className="hover:text-[#032448] transition-colors">بوتيك لمسة للأزياء</Link>
            <span className="material-symbols-outlined text-xs">chevron_left</span>
            <Link to="/cart" className="hover:text-[#032448] transition-colors">سلة المشتريات</Link>
            <span className="material-symbols-outlined text-xs">chevron_left</span>
            <Link to="/payment/wallet" className="hover:text-[#032448] transition-colors">عنوان التوصيل والدفع</Link>
            <span className="material-symbols-outlined text-xs">chevron_left</span>
            <span className="text-[#ba1a1a] font-bold">تنبيه الدفع</span>
          </nav>

          {/* Active Reservation Counter Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFF4E5] text-[#9A5B00] border border-[#FFE0B2] px-3 py-1 rounded-full text-xs font-semibold">
            <span className="material-symbols-outlined text-sm animate-pulse">timer</span>
            <span>
              حجز القطع محمي تلقائياً:{' '}
              <strong className="font-numeral-hero text-sm font-bold tracking-wider" id="countdown">
                {formatTimer(secondsLeft)}
              </strong>{' '}
              دقيقة
            </span>
          </div>
        </div>
      </section>

      {/* Main Workspace */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 flex-grow">
        {/* Top Hero Notification Notice */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#FFF8EB] border-r-4 border-[#e9b44c] border border-[#fae2b8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#e9b44c]/20 text-[#835400] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">lock_clock</span>
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#473000]">لا تقلقي، طلبكِ وسلتكِ في أمان تام</h2>
              <p className="text-xs sm:text-sm text-[#705214]">
                تم حجز قطع الأزياء في سلتك تلقائياً لمدة 15 دقيقة حتى تتمكني من زيادة الرصيد دون أن تنفد المقاسات من المتجر.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-[#835400] bg-white/80 px-3 py-1.5 rounded-lg border border-[#e9b44c]/30">
            <span className="material-symbols-outlined text-base">verified</span>
            <span>القطع محجوزة رسمياً</span>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Primary Core: Failed Payment & Resolution Actions (8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            
            {/* Main Failure Feedback Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e1e2ea] shadow-sm relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-[#e6e8f0]">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF0EE] border-2 border-[#FFD0CA] flex items-center justify-center shrink-0 text-[#BA1A1A] shadow-inner">
                  <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFDAD6] text-[#93000A] mb-1.5">
                    <span className="material-symbols-outlined text-xs">error</span>
                    <span>تعذر إتمام الدفع</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-[#032448] tracking-tight">
                    عذراً سارة، رصيدك في المحفظة غير كافٍ لإتمام العملية
                  </h1>
                </div>
              </div>

              {/* Primary Direct Buttons */}
              <div className="mt-8 pt-6 border-t border-[#e6e8f0] flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  to="/payment/wallet"
                  className="w-full sm:w-auto px-5 h-12 rounded-xl border-2 border-[#032448] text-[#032448] hover:bg-[#f2f3fc] text-sm font-bold flex items-center justify-center gap-2 transition-colors active:scale-95"
                >
                  <span className="material-symbols-outlined text-xl">credit_card</span>
                  <span>اختيار طريقة دفع أخرى أو إعادة المحاولة</span>
                </Link>

                <Link
                  to="/cart"
                  className="w-full sm:w-auto px-4 h-12 rounded-xl bg-[#e6e8f0] hover:bg-[#e1e2ea] text-[#191c22] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">shopping_cart</span>
                  <span>العودة للسلة</span>
                </Link>
              </div>

              {/* Customer Support Direct Ribbon */}
              <div className="mt-6 pt-4 border-t border-dashed border-[#e1e2ea] flex flex-wrap items-center justify-between text-xs text-[#43474e] gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-[#1f7a6e]">headset_mic</span>
                  <span>تواجهين صعوبة بالدفع؟ فريق تبادل المالي متواجد لمساعدتكِ فوراً 24/7</span>
                </div>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#1f7a6e] hover:underline flex items-center gap-1"
                >
                  <span>محادثة واتساب مباشرة للدعم</span>
                  <span className="material-symbols-outlined text-xs">arrow_outward</span>
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/80 p-4 rounded-2xl border border-[#e6e8f0] flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl text-[#1f7a6e]">verified_user</span>
                <div>
                  <p className="text-xs font-bold text-[#032448]">أمان دفع معتمد</p>
                  <p className="text-[11px] text-[#74777f]">تشفير مصرفي كامل 256-Bit</p>
                </div>
              </div>
              <div className="bg-white/80 p-4 rounded-2xl border border-[#e6e8f0] flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl text-[#e9b44c]">autorenew</span>
                <div>
                  <p className="text-xs font-bold text-[#032448]">حماية نقاط الولاء</p>
                  <p className="text-[11px] text-[#74777f]">لا يتم خصم أي رصيد دون اكتمال الطلب</p>
                </div>
              </div>
              <div className="bg-white/80 p-4 rounded-2xl border border-[#e6e8f0] flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl text-[#12302b]">store</span>
                <div>
                  <p className="text-xs font-bold text-[#032448]">شركاء محليون معتمدون</p>
                  <p className="text-[11px] text-[#74777f]">توصيل سريع وموثوق من البوتيك</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Order & Merchant Summary Bento (4-5 cols) */}
          <aside className="lg:col-span-5 xl:col-span-4 space-y-5 lg:sticky lg:top-24">
            
            {/* Order Summary Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#e1e2ea] shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#e6e8f0] mb-4">
                <div>
                  <span className="text-[11px] font-semibold text-[#74777f] block">رقم الطلب المعلق</span>
                  <span className="font-numeral-hero text-xs font-bold text-[#032448] tracking-wider">
                    TBD-2026-7841-HOLD
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FFF4E5] text-[#9A5B00] border border-[#FFE0B2]">
                  بانتظار الدفع
                </span>
              </div>

              <div className="p-3 bg-[#f2f3fc] rounded-2xl border border-[#e6e8f0] flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#e1e2ea] flex items-center justify-center font-bold text-[#032448] text-sm shadow-sm">
                  <span className="material-symbols-outlined text-[#1f7a6e]">storefront</span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-xs font-bold text-[#032448]">بوتيك لمسة للأزياء الراقية</h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#43474e]">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#1f7a6e]"></span>
                    <span>شريك ماسي معتمد في منصة تبادل</span>
                  </div>
                </div>
              </div>

              {/* Reserved Products */}
              <h5 className="text-xs font-bold text-[#43474e] mb-3">القطع المحجوزة في هذا الطلب (2)</h5>
              <div className="space-y-3.5 mb-5">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#e6e8f0]">
                  <img
                    alt="فستان حرير شامبين راقي للسهرة"
                    className="w-16 h-16 rounded-lg object-cover border border-[#e6e8f0] shrink-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPCGovPXAgbpALSOyEfsdfmGV3uAgNaIica-IsTDXgRkPPPnxGz9TgqhYFJ2rA9OxSkiwnkl4Z42HHihfkrCf86i2f3pIGv67oOKMlxujFaUs8jv1xAfSfgE5TOQCEiYSGKQzoctCyeOiHZEPOZRFmx2YNtCP2F-LNC1u13fepCyQy7v_7kzeGq0ix00GyJOdgTuc-RCqb4kXQJYlzYv94-W1UO59vb7KUTBUG8ljF2hNRbGrE3UirnQ"
                  />
                  <div className="flex-grow min-w-0">
                    <h6 className="text-xs font-bold text-[#032448] line-clamp-1">فستان حرير شامبين راقي للسهرة</h6>
                    <div className="text-[11px] text-[#43474e] mt-0.5">المقاس: 38 (M) • اللون: شامبين ملكي</div>
                    <div className="flex items-center justify-between mt-1 text-xs">
                      <span className="text-[#74777f]">الكمية: 1</span>
                      <span className="font-numeral-hero font-black text-[#032448]">190.00 ₪</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#e6e8f0]">
                  <img
                    alt="حذاء كعب سهرة ذهبي مرصع بالكريستال"
                    className="w-16 h-16 rounded-lg object-cover border border-[#e6e8f0] shrink-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDawchyRttoDicsme-Bwv_Arhowcr3JdTLSzE9UAcsrC5JFxdFV49HDITUZvTC2iQQayI1IabzHGUDnP3uRl1xZ4SYqw64iMNpiAOWPe1uWxu3t523lkhFT2e4o8YVyr-BHqi-iP2KTGitVDefyKBinVEZGQE4bkI5QdaX9WXT5DeF6b1skraPE5EDHK3ZVNKEwuPG6dLzzs0fCUPIsdWmilKQxtcAIz-5S720dVypCViS9ptRf32oqFA"
                  />
                  <div className="flex-grow min-w-0">
                    <h6 className="text-xs font-bold text-[#032448] line-clamp-1">حذاء كعب سهرة ذهبي مرصع بالكريستال</h6>
                    <div className="text-[11px] text-[#43474e] mt-0.5">المقاس: 38 • الكعب: 8 سم</div>
                    <div className="flex items-center justify-between mt-1 text-xs">
                      <span className="text-[#74777f]">الكمية: 1</span>
                      <span className="font-numeral-hero font-black text-[#032448]">145.00 ₪</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing Breakdown */}
              <div className="border-t border-[#e6e8f0] pt-4 space-y-2.5 text-xs text-[#43474e]">
                <div className="flex justify-between items-center">
                  <span>مجموع المنتجات</span>
                  <span className="font-numeral-hero font-bold text-[#032448]">335.00 ₪</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span>توصيل سريع لباب المنزل</span>
                    <span className="bg-[#E7F6EE] text-[#1f7a6e] font-bold px-1.5 py-0.5 rounded text-[10px]">مجاني</span>
                  </div>
                  <span className="font-numeral-hero font-bold text-[#1f7a6e]">0.00 ₪</span>
                </div>
                <div className="flex justify-between items-center text-[#12302b]">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-[#e9b44c] icon-fill">stars</span>
                    <span>خصم نقاط الولاء المطبقة</span>
                  </div>
                  <span className="font-numeral-hero font-bold text-[#1f7a6e]">-12.00 ₪</span>
                </div>
                <div className="border-t border-[#e1e2ea] my-2 pt-3 flex justify-between items-baseline">
                  <span className="text-xs font-bold text-[#032448]">الإجمالي النهائي المطلوب</span>
                  <div className="text-left">
                    <span className="font-numeral-hero text-2xl font-black text-[#032448]">323.00</span>
                    <span className="font-bold text-[#032448] text-xs mr-0.5">₪</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro FAQ */}
            <div className="bg-white rounded-2xl p-4 border border-[#e6e8f0] text-xs text-[#43474e] space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#032448]">
                <span className="material-symbols-outlined text-base text-[#e9b44c]">help</span>
                <span>ماذا يحدث إذا انتهت الـ 15 دقيقة؟</span>
              </div>
              <p className="leading-relaxed text-[11px]">
                إذا لم يتم الشحن خلال المهلة، ستعود المنتجات للعرض العام على متجر بوتيك لمسة، ويمكنكِ دائماً إعادة إضافتها إلى السلة وتأكيد الطلب في أي وقت.
              </p>
            </div>

          </aside>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
