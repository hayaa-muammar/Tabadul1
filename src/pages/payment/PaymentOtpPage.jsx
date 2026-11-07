import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';
import ToastNotification from '../../components/common/ToastNotification';

/**
 * PaymentOtpPage
 * Exact React implementation of 24 رمز تاكيد الدفعcode.html
 * Approved Payment Process - Step 2: Payment Confirmation OTP (6 digits)
 */
export default function PaymentOtpPage() {
  const navigate = useNavigate();
  const [channel, setChannel] = useState('whatsapp'); // 'whatsapp' | 'sms'
  const [otp, setOtp] = useState(['4', '8', '2', '', '', '']);
  const [secondsLeft, setSecondsLeft] = useState(105); // 01:45
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Countdown timer for resending OTP
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTimer = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleOtpChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value ? value.slice(-1) : '';
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleConfirmOtp = (e) => {
    e.preventDefault();
    const fullCode = otp.join('');
    if (fullCode.length < 6) {
      // Simulate going to wrong OTP page if incomplete or wrong
      navigate('/payment/otp-error');
      return;
    }
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsSuccess(true);
      setTimeout(() => {
        // Navigate to my orders or order detail
        navigate('/orders/TB-8841');
      }, 1500);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#191c22] font-tajawal text-right selection:bg-[#ffddb5] selection:text-[#2a1800]">
      {/* Customer Header */}
      <CustomerHeader />
      <ToastNotification />

      {/* Stepper Progress Bar / Breadcrumbs */}
      <div className="border-t border-[#e1e2ea] bg-[#F6F3EC]/80 py-3.5">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-[#4a5a56] font-medium text-right w-full justify-start">
            <Link to="/" className="hover:text-[#1f7a6e] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] leading-none">home</span>
              <span>الرئيسية</span>
            </Link>
            <span className="text-[#8a9a95]">/</span>
            <Link to="/stores" className="hover:text-[#1f7a6e] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] leading-none">storefront</span>
              <span>استكشاف المتاجر</span>
            </Link>
            <span className="text-[#8a9a95]">/</span>
            <Link to="/stores/lamsa-boutique" className="hover:text-[#1f7a6e] transition-colors">بوتيك لمسة للأزياء</Link>
            <span className="text-[#8a9a95]">/</span>
            <Link to="/cart" className="hover:text-[#1f7a6e] transition-colors">سلة المشتريات</Link>
            <span className="text-[#8a9a95]">/</span>
            <Link to="/payment/wallet" className="hover:text-[#1f7a6e] transition-colors">عنوان التوصيل والدفع</Link>
            <span className="text-[#8a9a95]">/</span>
            <span className="text-[#12302b] font-bold">التحقق الأمني والخصم</span>
          </nav>
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* PRIMARY SECTION: Verification Form (8 cols) */}
          <section className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 shadow-[0_4px_24px_-4px_rgba(31,58,95,0.06)] border border-[#e1e2ea] relative overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-[#12302B] via-[#1F7A6E] to-[#E9B44C]"></div>

            {/* Security Badge & Title Block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-[#e1e2ea]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#12302B] to-[#1F7A6E] flex items-center justify-center text-white shadow-md shrink-0 ring-4 ring-[#1F7A6E]/10">
                <span className="material-symbols-outlined text-3xl icon-fill">shield_lock</span>
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] text-xs font-semibold mb-1.5">
                  <span className="material-symbols-outlined text-sm icon-fill">verified</span>
                  <span>حماية الخصم المالي المباشر</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#032448]">
                  تأكيد خصم الدفع من المحفظة - رمز التحقق الأمني (OTP)
                </h1>
                <p className="text-sm text-[#43474e] mt-1 leading-relaxed">
                  أرسلنا رمز تحقق أمني إلى رقم جوالك المسجل:{' '}
                  <b className="text-[#032448] font-bold dir-ltr inline-block tracking-wider">+970 59 123 4567</b> للتأكد
                  من هويتك وتأكيد تفويض خصم مبلغ <span className="text-[#032448] font-bold">323.00 ₪</span> لصالح طلب
                  بوتيك لمسة للأزياء.
                </p>
              </div>
            </div>

            {/* Success Banner if verified */}
            {isSuccess && (
              <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">check_circle</span>
                <span>تم تأكيد الرمز وخصم 323.00 ₪ بنجاح! جاري تحويلك إلى صفحة تفاصيل الطلب...</span>
              </div>
            )}

            {/* Dispatch Channel Selector */}
            <div className="mt-8">
              <label className="block text-sm font-semibold text-[#191c22] mb-3">
                طريقة استلام رمز التحقق:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* WhatsApp Channel (Active & Recommended) */}
                <label
                  onClick={() => setChannel('whatsapp')}
                  className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all shadow-sm ${
                    channel === 'whatsapp'
                      ? 'border-[#1F7A6E] bg-[#f2f3fc]'
                      : 'border-[#e1e2ea] bg-white hover:border-[#1F7A6E]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#128C7E] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl icon-fill">chat</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="block text-sm font-bold text-[#032448]">رسالة واتساب (WhatsApp)</span>
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#1F7A6E]/10 text-[#1F7A6E]">
                          موصى به
                        </span>
                      </div>
                      <span className="text-xs text-[#43474e]">الاستلام الفوري المباشر على 4567***</span>
                    </div>
                  </div>
                  <span className="w-5 h-5 rounded-full border-2 border-[#1F7A6E] flex items-center justify-center shrink-0">
                    {channel === 'whatsapp' && <span className="w-2.5 h-2.5 rounded-full bg-[#1F7A6E]"></span>}
                  </span>
                </label>

                {/* SMS Channel (Secondary Alternative) */}
                <label
                  onClick={() => setChannel('sms')}
                  className={`relative flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    channel === 'sms'
                      ? 'border-[#1F7A6E] bg-[#f2f3fc]'
                      : 'border-[#e1e2ea] bg-white hover:border-[#1F7A6E]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#ecedf6] text-[#43474e] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">sms</span>
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-[#191c22]">رسالة نصية قصيرة (SMS)</span>
                      <span className="text-xs text-[#43474e]">خيار بديل عبر شبكة الجوال</span>
                    </div>
                  </div>
                  <span className="w-5 h-5 rounded-full border-2 border-[#c4c6cf] flex items-center justify-center shrink-0">
                    {channel === 'sms' && <span className="w-2.5 h-2.5 rounded-full bg-[#1F7A6E]"></span>}
                  </span>
                </label>
              </div>
            </div>

            {/* OTP 6-Digit Entry Fields */}
            <form onSubmit={handleConfirmOtp} className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-[#032448]">أدخل رمز التحقق (6 أرقام):</label>
                <span className="text-xs text-[#43474e] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">lock_clock</span>
                  <span>صالح لمدة 5 دقائق</span>
                </span>
              </div>

              <div className="grid grid-cols-6 gap-2 sm:gap-4 dir-ltr max-w-lg mx-auto sm:mx-0 my-4" id="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    className="w-full h-14 sm:h-16 text-center text-2xl font-black bg-[#f2f3fc] rounded-xl border border-[#e1e2ea] text-[#032448] transition-all shadow-inner focus:bg-white focus:border-[#1f3a5f] focus:ring-2 focus:ring-[#1f3a5f]/20 outline-none"
                    maxLength={1}
                    type="text"
                    inputMode="numeric"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
              </div>

              {/* Timer and Resend Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 p-4 rounded-xl bg-[#f2f3fc] border border-[#e1e2ea]">
                <button
                  className="inline-flex items-center gap-1.5 text-[#1F7A6E] hover:text-[#12302B] text-xs font-bold transition-colors cursor-pointer"
                  type="button"
                  onClick={() => setSecondsLeft(105)}
                >
                  <span className="material-symbols-outlined text-lg">sync</span>
                  <span>أعد إرسال الرمز عبر واتساب</span>
                </button>
                <div className="flex items-center gap-2 text-[#43474e] text-xs">
                  <span className="material-symbols-outlined text-[#e9b44c]">history</span>
                  <span>
                    إعادة إرسال الرمز خلال{' '}
                    <strong className="text-[#032448] font-bold dir-ltr inline-block">{formatTimer(secondsLeft)}</strong>{' '}
                    ثانية
                  </span>
                </div>
              </div>

              {/* Primary Call to Action Button */}
              <div className="mt-8 space-y-4">
                <button
                  className="w-full h-14 rounded-xl bg-[#1F7A6E] hover:bg-[#12302B] active:scale-[0.99] text-white text-base font-bold flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(31,122,110,0.4)] transition-all cursor-pointer"
                  type="submit"
                  disabled={isVerifying}
                >
                  {isVerifying ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>جاري تدقيق الرمز الأمني...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-2xl">lock</span>
                      <span>تأكيد الرمز وخصم المبلغ (323.00 ₪) بنجاح 🔒</span>
                    </>
                  )}
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    <Link
                      to="/payment/wallet"
                      className="inline-flex items-center gap-1.5 text-[#43474e] hover:text-[#032448] text-xs font-semibold transition-colors"
                    >
                      <span className="material-symbols-outlined text-base">edit</span>
                      <span>تعديل رقم الجوال</span>
                    </Link>
                    <span className="text-[#c4c6cf]">|</span>
                    <Link
                      to="/payment/otp-error"
                      className="text-xs text-[#ba1a1a] hover:underline font-bold flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">warning</span>
                      <span>محاكاة خطأ رمز التحقق (25code)</span>
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#43474e]">
                    <span className="material-symbols-outlined text-sm text-[#004328] icon-fill">security</span>
                    <span>خصم مشفر وخاضع لضمان حماية المستهلك</span>
                  </div>
                </div>
              </div>
            </form>

            {/* Trust Note Footer inside card */}
            <div className="mt-8 pt-6 border-t border-[#e1e2ea] flex items-center gap-3 text-xs text-[#43474e]">
              <span className="material-symbols-outlined text-[#835400] text-base">info</span>
              <p>
                تنويه أمني: موظفو منصة تبادل ومحفظة جوال باي لن يطلبوا منك مطلقاً مشاركة رمز التحقق (OTP) السري مع أي شخص.
              </p>
            </div>
          </section>

          {/* SIDEBAR: Order Summary & Loyalty Reward (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Order Summary Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e1e2ea]">
              <div className="flex items-center justify-between pb-4 border-b border-[#e1e2ea]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#032448] text-xl">shopping_bag</span>
                  <h2 className="text-base font-bold text-[#032448]">ملخص العملية الشرائية</h2>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#ecedf6] text-[#43474e] font-medium">
                  طلب #TB-8841
                </span>
              </div>

              {/* Merchant & Items Preview */}
              <div className="py-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#f2f3fc] flex items-center justify-center font-bold text-[#1F7A6E] border border-[#e1e2ea]">
                    لمسة
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#032448] block">بوتيك لمسة للأزياء الفاخرة</span>
                    <span className="text-xs text-[#43474e]">شحن محلي سريع وموثوق</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-[#191c22] truncate max-w-[200px]">فستان حرير شامبين راقي</span>
                    <span className="font-bold text-[#032448]">245.00 ₪</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-[#191c22] truncate max-w-[200px]">حذاء كعب سهرة أنيق (ذهبي)</span>
                    <span className="font-bold text-[#032448]">90.00 ₪</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#43474e]">
                    <span>رسوم التوصيل المنزلي المباشر</span>
                    <span className="text-[#004328] font-semibold">مجاناً (عرض مميز)</span>
                  </div>
                </div>

                {/* Loyalty Points Applied Line */}
                <div className="p-3 rounded-xl bg-[#8df8bd]/20 border border-[#71dba2]/40 flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 text-[#004328]">
                    <span className="material-symbols-outlined text-lg icon-fill">sell</span>
                    <span className="font-bold">خصم نقاط الولاء (2,400 نقطة)</span>
                  </div>
                  <span className="font-bold text-[#2E9E6B]">-12.00 ₪</span>
                </div>

                {/* Final Amount */}
                <div className="pt-4 border-t border-[#e1e2ea] flex items-baseline justify-between">
                  <div>
                    <span className="block text-sm font-extrabold text-[#032448]">الإجمالي المطلوب خصمه:</span>
                    <span className="text-xs text-[#43474e]">محفظة جوال باي (Jawwal Pay)</span>
                  </div>
                  <div className="text-left">
                    <span className="font-numeral-hero text-2xl font-black text-[#032448] tracking-tight">323.00</span>
                    <span className="text-sm font-bold text-[#032448] mr-1">₪</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Escrow Banking Security Seal */}
            <div className="p-5 rounded-2xl bg-white border border-[#e1e2ea] shadow-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1F7A6E] text-2xl mt-0.5 icon-fill">
                  security_update_good
                </span>
                <div>
                  <h3 className="text-xs font-bold text-[#032448]">ضمان حماية المشتري (Escrow)</h3>
                  <p className="text-xs text-[#43474e] mt-1 leading-relaxed">
                    لا يتم تحويل المبلغ للبوتيك إلا بعد استلامك للطلب وفحصه وتأكيد رمز التسليم الخاص بك.
                  </p>
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
