import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';
import ToastNotification from '../../components/common/ToastNotification';

/**
 * InsufficientBalancePage
 * Exact React implementation of رصيد غير كاف26code.html
 * Approved Payment Process - Insufficient Wallet Balance Alert with 15-Minute Hold Countdown
 */
export default function InsufficientBalancePage() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(14 * 60 + 48); // 14:48
  const [isRetrying, setIsRetrying] = useState(false);
  const [rechargeSuccess, setRechargeSuccess] = useState(false);

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

  const handleRetryPayment = () => {
    setIsRetrying(true);
    setTimeout(() => {
      setIsRetrying(false);
      setRechargeSuccess(true);
      setTimeout(() => {
        // Navigate back to payment OTP once recharged
        navigate('/payment/otp');
      }, 1200);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#191c22] font-tajawal text-right selection:bg-[#e9b44c]/20">
      {/* Customer Header */}
      <CustomerHeader />
      <ToastNotification />

      {/* Reservation Warm Alert Strip (Protection Banner from 26code.html lines 176-194) */}
      <div className="bg-gradient-to-r from-[#fef5e7] via-[#fffbf2] to-[#fef5e7] border-y border-[#e9b44c]/40 py-3.5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-right">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#e9b44c]/20 flex items-center justify-center shrink-0 text-[#835400]">
              <span className="material-symbols-outlined text-[20px] icon-fill">lock_clock</span>
            </div>
            <p className="text-sm text-[#714800] leading-snug">
              <strong className="font-bold text-[#2a1800]">لا تقلقي يا سارة، طلبك وقطعك في أمان تام!</strong>{' '}
              تم حجز فستان الحرير وحذاء الكعب العالي في سلتك تلقائياً لمدة 15 دقيقة حتى تتمكني من شحن محفظتك أو اختيار
              وسيلة دفع أخرى دون أن تنفد المقاسات.
            </p>
          </div>

          {/* Real-Time Visual Countdown Timer */}
          <div className="flex items-center gap-2 bg-white/80 border border-[#e9b44c]/50 px-3.5 py-1.5 rounded-xl shadow-xs shrink-0">
            <span className="material-symbols-outlined text-[#e9b44c] text-[18px]">timer</span>
            <span className="text-xs text-[#714800]">الوقت المتبقي للحجز:</span>
            <span className="text-sm font-black text-[#12302b] tabular-nums tracking-wider" id="countdown">
              {formatTimer(secondsLeft)}
            </span>
          </div>
        </div>
      </div>

      {/* Breadcrumbs & Step Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 w-full">
        <nav className="flex items-center gap-2 text-xs text-[#74777f]">
          <Link to="/" className="hover:text-[#032448] transition-colors">الرئيسية</Link>
          <span className="material-symbols-outlined text-[14px]">arrow_back_ios</span>
          <Link to="/cart" className="hover:text-[#032448] transition-colors">سلة المشتريات</Link>
          <span className="material-symbols-outlined text-[14px]">arrow_back_ios</span>
          <span className="text-[#032448] font-bold">بوابة السداد الإلكتروني</span>
        </nav>
      </div>

      {/* Main Content Layout */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* RIGHT / PRIMARY CONTENT AREA: Payment Failure Reason & Solution (7 cols) */}
          <section className="lg:col-span-7 space-y-6">
            
            {/* Failure Status Hero Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-[#e1dacb] border-t-4 border-t-[#ba1a1a] shadow-sm">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-[32px]">credit_card_off</span>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="inline-flex items-center gap-1.5 bg-[#ffdad6]/60 text-[#93000a] px-3 py-0.5 rounded-full text-xs font-semibold">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    <span>فشلت محاولة الخصم التلقائي</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-black text-[#12302b]">
                    تعذر إتمام الدفع من المحفظة الإلكترونية
                  </h1>
                  <p className="text-sm text-[#43474e] leading-relaxed">
                    أفادت بوابة الدفع المعتمدة (<strong className="text-[#191c22] font-semibold">PalPay / جوال باي</strong>) بأن الرصيد المتاح في محفظتك الإلكترونية المسجلة (
                    <span className="font-bold text-[#12302b] inline-block" dir="ltr">+970 59 123 4567</span>) غير كافٍ لسداد إجمالي الفاتورة (<strong className="text-[#12302b] font-bold">323.00 ₪</strong>).
                  </p>
                </div>
              </div>
            </div>

            {/* Success message when simulated recharge completes */}
            {rechargeSuccess && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">check_circle</span>
                <span>تم تحديث الرصيد بنجاح! جاري توجيهك إلى شاشة إدخال رمز التحقق الأمني...</span>
              </div>
            )}

            {/* Guided Troubleshooting 3-Step Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e1dacb] shadow-sm">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#e1dacb]">
                <span className="material-symbols-outlined text-[#1f7a6e] text-[24px]">task_alt</span>
                <h2 className="text-base font-bold text-[#12302b]">خطوات سريعة لإتمام طلبك قبل انتهاء الحجز</h2>
              </div>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#f6f3ec]/60 border border-[#e1dacb]/60 hover:bg-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#12302b] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#12302b]">تغذية رصيد المحفظة الإلكترونية</h3>
                    <p className="text-xs text-[#43474e]">
                      افتحي تطبيق المحفظة الخاص بك (PalPay أو جوال باي) وقومي بشحن وتغذية الرصيد بما لا يقل عن{' '}
                      <strong className="text-[#032448] font-bold">323.00 ₪</strong>.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#f6f3ec]/60 border border-[#e1dacb]/60 hover:bg-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#1f7a6e] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#12302b]">إعادة تأكيد المحاولة بنقرة واحدة</h3>
                    <p className="text-xs text-[#43474e]">
                      بعد نجاح شحن محفظتك، اضغطي على زر «إعادة محاولة الخصم الآن» أدناه لتثبيت الطلب فوراً.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs & Action Trays */}
              <div className="mt-8 pt-6 border-t border-[#e1dacb] flex flex-col sm:flex-row items-center gap-3">
                {/* Primary Emerald Button */}
                <button
                  type="button"
                  onClick={handleRetryPayment}
                  disabled={isRetrying || rechargeSuccess}
                  className="w-full sm:flex-1 h-12 rounded-xl bg-[#1f7a6e] hover:bg-[#12302b] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                >
                  {isRetrying ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>جاري إعادة الاتصال بالمحفظة...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">sync</span>
                      <span>إعادة محاولة الخصم من المحفظة (323.00 ₪)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tertiary links */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#43474e] px-1 flex-wrap gap-2">
                <Link
                  to="/cart"
                  className="inline-flex items-center gap-1 hover:text-[#032448] transition-colors underline underline-offset-4"
                >
                  <span className="material-symbols-outlined text-[16px]">edit_note</span>
                  <span>العودة لتعديل سلة المشتريات</span>
                </Link>
                <span className="text-[#c4c6cf]">•</span>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#1f7a6e] hover:text-[#12302b] font-bold"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>هل تواجهين صعوبة؟ فريق الدعم المالي متواجد لمساعدتك فوراً</span>
                </a>
              </div>
            </div>

            {/* Security & Guarantee Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded-xl border border-[#e1dacb]">
                <span className="material-symbols-outlined text-[#1f7a6e]">format_image_left</span>
                <div className="text-xs">
                  <div className="font-bold text-[#12302b]">تشفير مصرفي 256-bit</div>
                  <div className="text-[#74777f]">معايير أمان PCI-DSS</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded-xl border border-[#e1dacb]">
                <span className="material-symbols-outlined text-[#e9b44c]">security_update_good</span>
                <div className="text-xs">
                  <div className="font-bold text-[#12302b]">حماية المشتري المعتمدة</div>
                  <div className="text-[#74777f]">استرداد مباشر مضمون</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded-xl border border-[#e1dacb]">
                <span className="material-symbols-outlined text-[#12302b]">local_mall</span>
                <div className="text-xs">
                  <div className="font-bold text-[#12302b]">متاجر فاخرة شريكة</div>
                  <div className="text-[#74777f]">أصالة وجودة مضمونة 100%</div>
                </div>
              </div>
            </div>
          </section>

          {/* LEFT / SIDEBAR AREA: Reserved Items & Order Summary (5 cols) */}
          <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Reserved Order Summary Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#e1dacb] shadow-sm relative">
              {/* Hold Badge Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#e1dacb]">
                <div>
                  <span className="text-xs text-[#74777f] block">رقم الطلب المعلق</span>
                  <span className="text-sm font-bold text-[#12302b] tracking-wider">TBD-2026-7841-HOLD</span>
                </div>
                <span className="bg-[#e9b44c]/20 text-[#835400] text-xs font-bold px-3 py-1 rounded-full border border-[#e9b44c]/40">
                  مـحـجـوز مـؤقـتـاً
                </span>
              </div>

              {/* Merchant Info */}
              <div className="py-3 flex items-center justify-between border-b border-[#e1dacb]/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#12302b] text-white flex items-center justify-center font-bold text-xs">
                    ل
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#12302b]">بوتيك لمسة للأزياء الراقية</h4>
                    <p className="text-[11px] text-[#74777f]">شريك ماسي معتمد في منصة تبادل</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#e9b44c] text-[18px] icon-fill">verified</span>
              </div>

              {/* Reserved Products List */}
              <div className="py-4 space-y-4">
                <div className="text-xs font-bold text-[#74777f]">القطع المحجوزة في طلبك (2 قطعة):</div>
                
                {/* Item 1: Silk Dress */}
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#f6f3ec] border border-[#e1dacb] shrink-0">
                    <img
                      alt="فستان حرير شامبين راقي"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMHQkij04jFkujcz1zSyjgWwu2m7gA7J_ERQTFMC2pK1DZeJJvu0juiCqPP6cVGEo-hexC0Y8joytc0SufMKS3LTNodMaq0EmKzmocFHvhSItrHnG1eqGJDcajqnsWfqTTQKjqHJXi7bscT5skhKTLlFds0Q_fIV7--QarvnB5p7-U-PbV4EhVHIlcNf0Iq10tek5iMfOeZEjLldus7LXsTPNu3F7-tgHDS5keFVTYDAA539fP25_isg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-[#12302b] truncate">فستان حرير شامبين راقي</h5>
                    <p className="text-[11px] text-[#74777f]">المقاس: M • اللون: شامبين ملكي</p>
                    <div className="text-xs font-bold text-[#12302b] mt-0.5">190.00 ₪</div>
                  </div>
                  <span className="material-symbols-outlined text-[#1f7a6e] text-[18px]" title="قطعة محجوزة">lock</span>
                </div>

                {/* Item 2: High Heels */}
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#f6f3ec] border border-[#e1dacb] shrink-0">
                    <img
                      alt="حذاء كعب سهرة ذهبي مرصع"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmOINEQ6VdeWakm1_hoDwdZvwemAoUv9zRYVrb32QqtI_FKP6g5r6N_16S49blDYj8jNRf130hJMjl8Jfad1WloGEdO_nmB3PoBNPU2MDY08MMA5N2yILsy2NXyuhlS7bTnseRKFgidGj7EpXjsyanQelC_oCT4uRAWGIYTya0R2ukS24pghflbg19XhE944mUOjEzeUEGdYJKPMc5aJ2_u6WGdbWwK_phxy4xt5c-CmIi4PoC-L6Fng"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-[#12302b] truncate">حذاء كعب سهرة ذهبي مرصع</h5>
                    <p className="text-[11px] text-[#74777f]">المقاس: 38 • الكعب: 8 سم فاخر</p>
                    <div className="text-xs font-bold text-[#12302b] mt-0.5">145.00 ₪</div>
                  </div>
                  <span className="material-symbols-outlined text-[#1f7a6e] text-[18px]" title="قطعة محجوزة">lock</span>
                </div>
              </div>

              {/* Financial Breakdown Ledger */}
              <div className="pt-4 border-t border-[#e1dacb] space-y-2.5 text-xs text-[#43474e]">
                <div className="flex justify-between items-center">
                  <span>مجموع المنتجات</span>
                  <span className="font-semibold text-[#191c22]">335.00 ₪</span>
                </div>
                <div className="flex justify-between items-center text-[#1f7a6e]">
                  <span className="flex items-center gap-1">
                    <span>التوصيل المنزلي السريع</span>
                    <span className="text-[10px] bg-[#1f7a6e]/10 px-1.5 py-0.5 rounded font-bold">مجاني</span>
                  </span>
                  <span className="font-bold">0.00 ₪</span>
                </div>
                <div className="flex justify-between items-center text-[#835400]">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">sell</span>
                    <span>خصم نقاط الولاء المطبقة (2,400 نقطة)</span>
                  </span>
                  <span className="font-bold">-12.00 ₪</span>
                </div>

                {/* Total Due */}
                <div className="pt-3 border-t border-[#e1dacb] flex justify-between items-baseline">
                  <div>
                    <span className="text-base font-black text-[#12302b] block">الإجمالي المطلوب سداده</span>
                    <span className="text-[11px] text-[#74777f]">شامل كافة الضرائب ومصروفات الحجز</span>
                  </div>
                  <div className="text-left">
                    <span className="text-2xl font-black text-[#12302b]">323.00</span>
                    <span className="font-bold text-xs mr-1 text-[#12302b]">₪</span>
                  </div>
                </div>
              </div>

              {/* Pending Reward Bonus Ribbon */}
              <div className="mt-5 p-3.5 bg-gradient-to-r from-[#12302b] to-[#1f7a6e] rounded-xl text-white flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#e9b44c] text-[#12302b] flex items-center justify-center font-bold text-xs shrink-0">
                    <span className="material-symbols-outlined text-[18px] icon-fill">stars</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#ffddb5]">مكافأة فورية بانتظارك!</div>
                    <div className="text-[11px] text-white/90">كاش باك 5% فور اكتمال السداد</div>
                  </div>
                </div>
                <div className="text-left text-xs font-extrabold text-[#ffddb5]">
                  +3,230 نقطة
                  <span className="block text-[10px] font-normal text-white/80">(16.15 ₪)</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
