import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';
import ToastNotification from '../../components/common/ToastNotification';

/**
 * PaymentOtpErrorPage
 * Exact React implementation of غلط رمز التجقق25code.html
 * Approved Payment Process - Error State: Incorrect / Expired OTP
 */
export default function PaymentOtpErrorPage() {
  const navigate = useNavigate();
  const [channel, setChannel] = useState('whatsapp');
  const [otp, setOtp] = useState(['4', '8', '2', '9', '0', '1']);
  const [secondsLeft, setSecondsLeft] = useState(105);
  const [attemptsRemaining, setAttemptsRemaining] = useState(2);
  const [isRetrying, setIsRetrying] = useState(false);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleOtpChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value ? value.slice(-1) : '';
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleRetrySubmit = (e) => {
    e.preventDefault();
    setIsRetrying(true);
    setTimeout(() => {
      setIsRetrying(false);
      // Navigate back to valid OTP page
      navigate('/payment/otp');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#191c22] font-tajawal text-right selection:bg-[#ffdad6] selection:text-[#93000a]">
      {/* Customer Header */}
      <CustomerHeader />
      <ToastNotification />

      {/* Stepper Progress Bar / Breadcrumbs */}
      <div className="bg-[#f2f3fc] border-t border-[#e1e2ea] py-3">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <nav aria-label="مسار التنقل" className="flex items-center flex-wrap gap-2 text-xs font-semibold">
            <Link to="/" className="text-[#43474e] hover:text-[#032448] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-base">home</span>
              <span>الرئيسية</span>
            </Link>
            <span className="text-[#c4c6cf]">/</span>
            <Link to="/stores" className="text-[#43474e] hover:text-[#032448] transition-colors">استكشاف المتاجر</Link>
            <span className="text-[#c4c6cf]">/</span>
            <Link to="/stores/lamsa-boutique" className="text-[#43474e] hover:text-[#032448] transition-colors">بوتيك لمسة للأزياء</Link>
            <span className="text-[#c4c6cf]">/</span>
            <Link to="/cart" className="text-[#43474e] hover:text-[#032448] transition-colors">سلة المشتريات</Link>
            <span className="text-[#c4c6cf]">/</span>
            <Link to="/payment/wallet" className="text-[#43474e] hover:text-[#032448] transition-colors">عنوان التوصيل والدفع</Link>
            <span className="text-[#c4c6cf]">/</span>
            <span className="inline-flex items-center gap-1.5 font-bold text-xs text-[#032448]">
              <span className="material-symbols-outlined text-sm icon-fill">lock</span>
              <span>التحقق الأمني والخصم</span>
            </span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#43474e] font-medium">
            <span className="material-symbols-outlined text-sm text-[#1F7A6E] icon-fill">verified_user</span>
            <span>إجراء رقمي مشفر وآمن</span>
          </div>
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

            {/* ERROR ALERT BANNER (Exact representation from 25code.html) */}
            <div className="mt-6 p-4 rounded-xl bg-[#ffdad6]/80 border border-[#ba1a1a]/30 text-[#93000a] flex items-start gap-3 shadow-sm">
              <span className="material-symbols-outlined text-[#ba1a1a] text-2xl shrink-0 mt-0.5 icon-fill">error</span>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-base font-bold text-[#ba1a1a]">رمز التحقق غير صحيح أو انتهت صلاحيته</h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#ba1a1a] text-white text-xs font-bold">تنبيه أمني</span>
                </div>
                <p className="text-xs text-[#93000a] mt-1 leading-relaxed">
                  يرجى التأكد من الرمز المدخل وإعادة المحاولة. لقد قمت بإدخال رمز غير متطابق مع الرمز المرسل لجوالك.
                </p>
                <div className="mt-2.5 pt-2 border-t border-[#ba1a1a]/20 flex items-center gap-2 text-xs font-bold text-[#ba1a1a]">
                  <span className="material-symbols-outlined text-base">warning</span>
                  <span>المحاولات المتبقية: {attemptsRemaining} محاولات قبل تعليق العملية مؤقتاً لحماية رصيد محفظتك.</span>
                </div>
              </div>
            </div>

            {/* Dispatch Channel Selector */}
            <div className="mt-8">
              <label className="block text-sm font-semibold text-[#191c22] mb-3">
                طريقة استلام رمز التحقق:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* WhatsApp Channel */}
                <label
                  onClick={() => setChannel('whatsapp')}
                  className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all shadow-sm ${
                    channel === 'whatsapp'
                      ? 'border-[#1F7A6E] bg-[#f2f3fc]'
                      : 'border-[#e1e2ea] bg-white hover:border-[#1F7A6E]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#128C7E] flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl icon-fill">chat</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="block text-sm font-bold text-[#032448]">رسالة واتساب (WhatsApp)</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] text-xs font-bold">
                          موصى به
                        </span>
                      </div>
                      <span className="text-xs text-[#43474e]">الاستلام الفوري المباشر</span>
                    </div>
                  </div>
                  <span className="w-5 h-5 rounded-full border-2 border-[#1F7A6E] flex items-center justify-center">
                    {channel === 'whatsapp' && <span className="w-2.5 h-2.5 rounded-full bg-[#1F7A6E]"></span>}
                  </span>
                </label>

                {/* SMS Channel */}
                <label
                  onClick={() => setChannel('sms')}
                  className={`relative flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    channel === 'sms'
                      ? 'border-[#1F7A6E] bg-[#f2f3fc]'
                      : 'border-[#e1e2ea] bg-white hover:border-[#1F7A6E]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#e6e8f0] text-[#191c22] flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">sms</span>
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-[#191c22]">رسالة نصية قصيرة (SMS)</span>
                      <span className="text-xs text-[#43474e]">إرسال إلى 4567***</span>
                    </div>
                  </div>
                  <span className="w-5 h-5 rounded-full border-2 border-[#c4c6cf] flex items-center justify-center">
                    {channel === 'sms' && <span className="w-2.5 h-2.5 rounded-full bg-[#1F7A6E]"></span>}
                  </span>
                </label>
              </div>
            </div>

            {/* OTP 6-Digit Entry Fields with Error State */}
            <form onSubmit={handleRetrySubmit} className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-bold text-[#ba1a1a]">أدخل رمز التحقق (6 أرقام):</label>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ba1a1a]/10 text-[#ba1a1a] border border-[#ba1a1a]/30 text-xs font-bold">
                    <span className="material-symbols-outlined text-sm icon-fill">cancel</span>
                    <span>رمز خاطئ</span>
                  </span>
                </div>
                <span className="text-xs text-[#ba1a1a] font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">timer_off</span>
                  <span>انتهت صلاحية الرمز أو تم إدخاله خطأ</span>
                </span>
              </div>

              {/* Red-tinted OTP Inputs */}
              <div className="grid grid-cols-6 gap-2 sm:gap-4 dir-ltr max-w-lg mx-auto sm:mx-0 my-4" id="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    className="w-full h-14 sm:h-16 text-center text-2xl font-black bg-[#ffdad6]/40 rounded-xl border-2 border-[#ba1a1a] text-[#ba1a1a] transition-all shadow-inner focus:bg-white outline-none"
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
                  className="inline-flex items-center gap-1.5 text-[#1F7A6E] hover:underline transition-colors text-xs font-bold py-1 px-2 cursor-pointer"
                  type="button"
                  onClick={() => {
                    setOtp(['', '', '', '', '', '']);
                    navigate('/payment/otp');
                  }}
                >
                  <span className="material-symbols-outlined text-xl text-[#1F7A6E]">sync</span>
                  <span>أعد إرسال رمز جديد عبر واتساب</span>
                </button>
                <div className="flex items-center gap-2 text-[#43474e] text-xs">
                  <span className="material-symbols-outlined text-[#835400]">schedule</span>
                  <span>
                    إعادة إرسال الرمز خلال{' '}
                    <strong className="text-[#032448] font-bold dir-ltr inline-block">01:45</strong> ثانية
                  </span>
                </div>
              </div>

              {/* Primary Call to Action Button */}
              <div className="mt-8 space-y-4">
                <button
                  className="w-full h-14 rounded-xl bg-[#1F7A6E] hover:bg-[#12302B] active:scale-[0.99] text-white text-base font-bold flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(31,122,110,0.4)] transition-all cursor-pointer"
                  type="submit"
                  disabled={isRetrying}
                >
                  {isRetrying ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>جاري إعادة التحقق...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-2xl">restart_alt</span>
                      <span>إعادة المحاولة وتأكيد الخصم (323.00 ₪)</span>
                    </>
                  )}
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-4 flex-wrap">
                    <Link
                      to="/payment/wallet"
                      className="inline-flex items-center gap-1.5 text-[#43474e] hover:text-[#032448] text-xs font-semibold transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">edit</span>
                      <span>تعديل رقم الجوال</span>
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#43474e]">
                    <span className="material-symbols-outlined text-sm text-[#004328] icon-fill">security</span>
                    <span>خصم مشفر وخاضع لضمان حماية المستهلك</span>
                  </div>
                </div>
              </div>
            </form>

            {/* Trust Note */}
            <div className="mt-8 pt-6 border-t border-[#e1e2ea] flex items-center gap-3 text-xs text-[#43474e]">
              <span className="material-symbols-outlined text-[#835400] text-base">info</span>
              <p>
                تنويه أمني: موظفو منصة تبادل ومحفظة جوال باي لن يطلبوا منك مطلقاً مشاركة رمز التحقق (OTP) السري مع أي شخص.
              </p>
            </div>
          </section>

          {/* SIDEBAR: Order Summary (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
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

                <div className="p-3 rounded-xl bg-[#8df8bd]/20 border border-[#71dba2]/40 flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 text-[#004328]">
                    <span className="material-symbols-outlined text-lg icon-fill">sell</span>
                    <span className="font-bold">خصم نقاط الولاء (2,400 نقطة)</span>
                  </div>
                  <span className="font-bold text-[#2E9E6B]">-12.00 ₪</span>
                </div>

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
