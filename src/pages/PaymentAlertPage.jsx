import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomerHeader from '../components/common/CustomerHeader';
import Footer from '../components/common/Footer';
import BackButton from '../components/common/BackButton';
import ToastNotification from '../components/common/ToastNotification';

export default function PaymentAlertPage() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(13 * 60 + 37); // 13:37 as in 19code.html
  const [walletBalance, setWalletBalance] = useState(120.00);
  const [isRecharging, setIsRecharging] = useState(false);
  const [rechargeSuccess, setRechargeSuccess] = useState(false);

  const requiredAmount = 323.00;
  const deficit = Math.max(0, requiredAmount - walletBalance);

  // Countdown timer
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
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSimulatedRecharge = () => {
    setIsRecharging(true);
    setTimeout(() => {
      setWalletBalance(350.00);
      setIsRecharging(false);
      setRechargeSuccess(true);
      setTimeout(() => {
        navigate('/checkout');
      }, 1500);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#191c22] font-tajawal text-right selection:bg-[#ffdad6] selection:text-[#93000a]">
      {/* 1. Header (Standardized Customer Header) */}
      <CustomerHeader />
      <ToastNotification />

      {/* 2. Breadcrumbs & Transaction Header Tracker (19code.html lines 180-202) */}
      <section className="bg-white/80 border-b border-[#c4c6cf]/30 backdrop-blur-xs">
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
            <Link to="/checkout" className="hover:text-[#032448] transition-colors">عنوان التوصيل والدفع</Link>
            <span className="material-symbols-outlined text-xs">chevron_left</span>
            <span className="text-[#ba1a1a] font-bold">تنبيه الدفع</span>
          </nav>

          {/* Active Reservation Counter Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFF4E5] text-[#9A5B00] border border-[#FFE0B2] px-3 py-1 rounded-full text-xs font-bold shadow-xs">
            <span className="material-symbols-outlined text-sm animate-pulse text-[#e9b44c]">timer</span>
            <span>
              حجز القطع محمي تلقائياً: <strong className="font-numeral-hero text-sm font-black tracking-wider text-[#473000]">{formatTimer(secondsLeft)}</strong> دقيقة
            </span>
          </div>
        </div>
      </section>

      {/* 3. Main Workspace */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 flex-grow space-y-6">
        
        {/* Top Hero Notification Notice (19code.html lines 205-220) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF8EB] border-r-4 border-[#e9b44c] border border-[#fae2b8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#e9b44c]/20 text-[#835400] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">lock_clock</span>
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-[#473000]">لا تقلقي، طلبكِ وسلتكِ في أمان تام</h2>
              <p className="text-xs sm:text-sm text-[#705214] mt-0.5 leading-relaxed">
                تم حجز قطع الأزياء في سلتك تلقائياً لمدة 15 دقيقة حتى تتمكني من زيادة الرصيد دون أن تنفد المقاسات من المتجر.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-[#835400] bg-white/90 px-3.5 py-1.5 rounded-xl border border-[#e9b44c]/30 shadow-xs">
            <span className="material-symbols-outlined text-base text-[#1f7a6e]">verified</span>
            <span>القطع محجوزة رسمياً</span>
          </div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Primary Core: Failed Payment & Resolution Actions (7-8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            
            {/* Main Failure Feedback Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#c4c6cf]/40 shadow-sm relative overflow-hidden">
              <div className="absolute -top-16 -left-16 w-44 h-44 rounded-full bg-[#ffdad6]/20 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full bg-[#ffddb5]/20 blur-2xl pointer-events-none" />

              {/* Header status section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-[#c4c6cf]/30">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF0EE] border-2 border-[#FFD0CA] flex items-center justify-center shrink-0 text-[#BA1A1A] shadow-inner">
                  <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFDAD6] text-[#93000A] mb-1.5">
                    <span className="material-symbols-outlined text-xs">error</span>
                    <span>تعذر إتمام الدفع</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-black text-[#032448] tracking-tight">
                    عذراً سارة، رصيدك في المحفظة غير كافٍ لإتمام العملية
                  </h1>
                </div>
              </div>

              {/* Financial Balance Comparison Bento Widget */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-6">
                {/* Box 1: Required Amount */}
                <div className="p-4 rounded-2xl bg-[#f2f3fc] border border-[#c4c6cf]/30 space-y-1">
                  <span className="text-[11px] font-bold text-[#43474e] block">المبلغ المطلوب للدفع</span>
                  <div className="font-numeral-hero text-2xl font-black text-[#032448]">
                    {requiredAmount.toFixed(2)} <span className="text-sm font-bold">₪</span>
                  </div>
                  <span className="text-[10px] text-[#43474e]">شامل التوصيل وخصم النقاط</span>
                </div>

                {/* Box 2: Available in Wallet */}
                <div className="p-4 rounded-2xl bg-[#FFF8EB] border border-[#FFE0B2] space-y-1">
                  <span className="text-[11px] font-bold text-[#835400] block">الرصيد المتاح بالمحفظة</span>
                  <div className="font-numeral-hero text-2xl font-black text-[#835400]">
                    {walletBalance.toFixed(2)} <span className="text-sm font-bold">₪</span>
                  </div>
                  <span className="text-[10px] text-[#705214]">جوال باي / PalPay</span>
                </div>

                {/* Box 3: Remaining Deficit */}
                <div className="p-4 rounded-2xl bg-[#FFF0EE] border border-[#FFD0CA] space-y-1">
                  <span className="text-[11px] font-bold text-[#ba1a1a] block">العجز المتبقي للسداد</span>
                  <div className="font-numeral-hero text-2xl font-black text-[#ba1a1a]">
                    {deficit.toFixed(2)} <span className="text-sm font-bold">₪</span>
                  </div>
                  <span className="text-[10px] text-[#ba1a1a]">المطلوب شحنه الآن</span>
                </div>
              </div>

              {/* Recharge Status Alert if recharged */}
              {rechargeSuccess && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2 mb-4 animate-fade-in">
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  <span>تم شحن رصيد المحفظة بنجاح! جاري تحويلك إلى صفحة الدفع لتأكيد الطلب...</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#c4c6cf]/30 flex flex-col sm:flex-row items-center gap-3.5">
                {/* Primary Recharge Button */}
                <button
                  type="button"
                  onClick={handleSimulatedRecharge}
                  disabled={isRecharging || rechargeSuccess}
                  className="w-full sm:w-auto px-6 h-12 rounded-xl bg-[#1f7a6e] hover:bg-[#12302b] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  {isRecharging ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>جاري محاكاة الشحن...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-xl">add_circle</span>
                      <span>شحن رصيد المحفظة فوراً (+{deficit.toFixed(0)} ₪)</span>
                    </>
                  )}
                </button>

                {/* Secondary Outline Card Switcher */}
                <Link
                  to="/checkout"
                  className="w-full sm:w-auto px-5 h-12 rounded-xl border-2 border-[#032448] text-[#032448] hover:bg-[#f2f3fc] font-bold text-sm flex items-center justify-center gap-2 transition-colors active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">credit_card</span>
                  <span>اختيار طريقة دفع أخرى (بطاقة بنكية)</span>
                </Link>

                {/* Soft Back to Cart Button */}
                <Link
                  to="/cart"
                  className="w-full sm:w-auto px-4 h-12 rounded-xl bg-[#f2f3fc] hover:bg-[#e1e2ea] text-[#191c22] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">shopping_cart</span>
                  <span>العودة للسلة</span>
                </Link>
              </div>

              {/* Customer Support Direct Ribbon */}
              <div className="mt-6 pt-4 border-t border-dashed border-[#c4c6cf]/40 flex flex-wrap items-center justify-between text-xs text-[#43474e] gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-[#1f7a6e]">headset_mic</span>
                  <span>تواجهين صعوبة بالدفع؟ فريق تبادل المالي متواجد لمساعدتكِ فوراً 24/7</span>
                </div>
                <a
                  href="https://wa.me/970590000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#1f7a6e] hover:underline flex items-center gap-1"
                >
                  <span>محادثة واتساب مباشرة للدعم</span>
                  <span className="material-symbols-outlined text-xs">arrow_outward</span>
                </a>
              </div>
            </div>

            {/* Trust Badges & Secure Checkout Guarantee (19code.html lines 287-309) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-[#c4c6cf]/30 flex items-center gap-3 shadow-xs">
                <span className="material-symbols-outlined text-2xl text-[#1f7a6e]">verified_user</span>
                <div>
                  <p className="font-bold text-[#032448] text-xs">أمان دفع معتمد</p>
                  <p className="text-[11px] text-[#74777f]">تشفير مصرفي كامل 256-Bit</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#c4c6cf]/30 flex items-center gap-3 shadow-xs">
                <span className="material-symbols-outlined text-2xl text-[#e9b44c]">autorenew</span>
                <div>
                  <p className="font-bold text-[#032448] text-xs">حماية نقاط الولاء</p>
                  <p className="text-[11px] text-[#74777f]">لا يتم خصم أي رصيد دون اكتمال الطلب</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#c4c6cf]/30 flex items-center gap-3 shadow-xs">
                <span className="material-symbols-outlined text-2xl text-[#12302b]">store</span>
                <div>
                  <p className="font-bold text-[#032448] text-xs">شركاء محليون في غزة</p>
                  <p className="text-[11px] text-[#74777f]">توصيل سريع وموثوق من البوتيك</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Order & Merchant Summary Bento (4-5 Cols) (19code.html lines 312-424) */}
          <aside className="lg:col-span-5 xl:col-span-4 space-y-5 lg:sticky lg:top-24">
            
            {/* Order Summary Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#c4c6cf]/40 shadow-sm space-y-4">
              {/* Order Metadata Ribbon */}
              <div className="flex items-center justify-between pb-3 border-b border-[#c4c6cf]/30">
                <div>
                  <span className="text-[11px] font-semibold text-[#74777f] block">رقم الطلب المعلق</span>
                  <span className="font-numeral-hero text-xs font-black text-[#032448] tracking-wider">TBD-2026-7841-HOLD</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FFF4E5] text-[#9A5B00] border border-[#FFE0B2]">
                  بانتظار الدفع
                </span>
              </div>

              {/* Merchant Tag */}
              <div className="p-3 bg-[#f2f3fc] rounded-2xl border border-[#c4c6cf]/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#c4c6cf]/40 flex items-center justify-center font-bold text-[#032448] text-sm shadow-xs">
                  <span className="material-symbols-outlined text-[#1f7a6e]">storefront</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-[#032448] text-xs">بوتيك لمسة للأزياء الراقية</h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#43474e]">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#1f7a6e]"></span>
                    <span>شريك ماسي معتمد في منصة تبادل</span>
                  </div>
                </div>
              </div>

              {/* Reserved Products List */}
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-[#74777f] block">القطع المحجوزة في هذا الطلب (2)</span>
                
                {/* Item 1: Silk Dress */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f9f9ff] border border-[#c4c6cf]/20">
                  <img
                    alt="فستان حرير شامبين راقي للسهرة"
                    className="w-14 h-14 rounded-lg object-cover border border-[#c4c6cf]/30 shrink-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPCGovPXAgbpALSOyEfsdfmGV3uAgNaIica-IsTDXgRkPPPnxGz9TgqhYFJ2rA9OxSkiwnkl4Z42HHihfkrCf86i2f3pIGv67oOKMlxujFaUs8jv1xAfSfgE5TOQCEiYSGKQzoctCyeOiHZEPOZRFmx2YNtCP2F-LNC1u13fepCyQy7v_7kzeGq0ix00GyJOdgTuc-RCqb4kXQJYlzYv94-W1UO59vb7KUTBUG8ljF2hNRbGrE3UirnQ"
                  />
                  <div className="flex-grow min-w-0">
                    <h6 className="font-bold text-[#032448] text-xs truncate">فستان حرير شامبين راقي للسهرة</h6>
                    <div className="text-[10px] text-[#43474e] mt-0.5">المقاس: 38 (M) • اللون: شامبين ملكي</div>
                    <div className="flex items-center justify-between mt-1 text-xs">
                      <span className="text-[11px] text-[#74777f]">الكمية: 1</span>
                      <span className="font-numeral-hero font-black text-[#032448]">190.00 ₪</span>
                    </div>
                  </div>
                </div>

                {/* Item 2: Evening Heels */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f9f9ff] border border-[#c4c6cf]/20">
                  <img
                    alt="حذاء كعب سهرة ذهبي مرصع بالكريستال"
                    className="w-14 h-14 rounded-lg object-cover border border-[#c4c6cf]/30 shrink-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDawchyRttoDicsme-Bwv_Arhowcr3JdTLSzE9UAcsrC5JFxdFV49HDITUZvTC2iQQayI1IabzHGUDnP3uRl1xZ4SYqw64iMNpiAOWPe1uWxu3t523lkhFT2e4o8YVyr-BHqi-iP2KTGitVDefyKBinVEZGQE4bkI5QdaX9WXT5DeF6b1skraPE5EDHK3ZVNKEwuPG6dLzzs0fCUPIsdWmilKQxtcAIz-5S720dVypCViS9ptRf32oqFA"
                  />
                  <div className="flex-grow min-w-0">
                    <h6 className="font-bold text-[#032448] text-xs truncate">حذاء كعب سهرة ذهبي مرصع بالكريستال</h6>
                    <div className="text-[10px] text-[#43474e] mt-0.5">المقاس: 38 • الكعب: 8 سم</div>
                    <div className="flex items-center justify-between mt-1 text-xs">
                      <span className="text-[11px] text-[#74777f]">الكمية: 1</span>
                      <span className="font-numeral-hero font-black text-[#032448]">145.00 ₪</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing Breakdown */}
              <div className="border-t border-[#c4c6cf]/30 pt-3 space-y-2 text-xs text-[#43474e]">
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

                <div className="border-t border-[#c4c6cf]/30 my-2 pt-2.5 flex justify-between items-baseline">
                  <span className="font-bold text-[#032448] text-sm">الإجمالي النهائي المطلوب</span>
                  <div className="text-left">
                    <span className="font-numeral-hero text-2xl font-black text-[#032448]">{requiredAmount.toFixed(2)}</span>
                    <span className="font-bold text-[#032448] text-xs mr-0.5">₪</span>
                  </div>
                </div>
              </div>

              {/* Cashback Potential Module */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#12302b] to-[#1f7a6e] text-white relative overflow-hidden shadow-xs">
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#e9b44c]/20 border border-[#e9b44c]/40 flex items-center justify-center shrink-0 text-[#e9b44c]">
                    <span className="material-symbols-outlined text-2xl icon-fill">rewarded_ads</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#ffddb5] font-medium block">مكافأة ولاء تنتظرك فور السداد:</span>
                    <div className="font-numeral-hero text-base font-black text-white flex items-center gap-1">
                      <span>+1,615 نقطة</span>
                      <span className="text-xs text-[#ffddb5] font-normal">(كاش باك 5%)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-[10px] text-white/80 border-t border-white/10 pt-2 flex items-center justify-between">
                  <span>تضاف لرصيدك الحالي (2,400 نقطة)</span>
                  <span className="text-[#e9b44c] font-bold">المستوى الذهبي</span>
                </div>
              </div>

            </div>

            {/* Micro FAQ helper */}
            <div className="bg-white rounded-2xl p-4 border border-[#c4c6cf]/30 text-xs text-[#43474e] space-y-1.5 shadow-xs">
              <div className="flex items-center gap-1.5 font-bold text-[#032448]">
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

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
