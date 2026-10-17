import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function MerchantOtpVerificationPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [secondsLeft, setSecondsLeft] = useState(52);
  const [isResendActive, setIsResendActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [smsSentNotice, setSmsSentNotice] = useState(false);

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Countdown timer (52s as in 1code.html)
  useEffect(() => {
    if (secondsLeft <= 0) {
      setIsResendActive(true);
      return;
    }
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleChange = (index, value) => {
    // Only accept numeric single character
    const sanitized = value.replace(/[^0-9]/g, '');
    const newOtp = [...otp];

    if (sanitized.length > 0) {
      newOtp[index] = sanitized[sanitized.length - 1];
      setOtp(newOtp);
      // Auto advance
      if (index < 3) {
        inputRefs[index + 1].current?.focus();
      }
    } else {
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 4);
    if (!pastedData) return;
    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);
    const focusIndex = Math.min(pastedData.length, 3);
    inputRefs[focusIndex].current?.focus();
  };

  const handleSmsFallback = () => {
    setSmsSentNotice(true);
    setSecondsLeft(60);
    setIsResendActive(false);
    setTimeout(() => setSmsSentNotice(false), 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join('');

    // If entered incorrect code 7294 or if user navigates to error simulation
    if (fullOtp === '7294') {
      navigate('/merchant/otp-error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to stores directory or merchant dashboard
      navigate('/stores');
    }, 800);
  };

  return (
    <div className="bg-[#f9f9ff] text-[#191c22] antialiased min-h-screen flex flex-col font-tajawal selection:bg-[#ffddb5] selection:text-[#2a1800]">
      {/* TOP BAR (Direct conversion of 1code.html Header) */}
      <header className="w-full top-0 sticky z-50 bg-white shadow-xs border-b border-[#e1e2ea]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
          
          {/* Brand Anchor */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-10 flex items-center justify-center">
                <img
                  alt="شعار تبادل"
                  className="h-9 w-auto object-contain"
                  src="/logo.png"
                />
              </div>
              <div className="hidden sm:flex flex-col border-r border-[#c4c6cf] pr-3">
                <span className="text-[11px] text-[#835400] font-bold tracking-tight">بوابة التجار المعتمدة</span>
                <span className="text-xs text-[#43474e] font-medium">غزة 2026</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link to="/" className="text-[#43474e] hover:text-[#032448] transition-colors">الرئيسية</Link>
            <Link to="/stores" className="text-[#43474e] hover:text-[#032448] transition-colors">المتاجر الشريكة</Link>
            <Link to="/#calculator" className="text-[#43474e] hover:text-[#032448] transition-colors">المكافآت</Link>
            <Link to="/faq" className="text-[#43474e] hover:text-[#032448] transition-colors">مركز المساعدة</Link>
          </nav>

          {/* Trailing Action Cluster */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 text-[#43474e] hover:bg-[#f2f3fc] hover:text-[#032448] rounded-xl transition-all active:scale-95 cursor-pointer"
              title="اللغة"
              type="button"
            >
              <span className="material-symbols-outlined">language</span>
            </button>
            <button
              className="p-2 text-[#43474e] hover:bg-[#f2f3fc] hover:text-[#032448] rounded-xl transition-all active:scale-95 cursor-pointer"
              title="المساعدة"
              type="button"
            >
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div className="h-6 w-px bg-[#c4c6cf] mx-1 hidden sm:block"></div>
            <Link
              to="/#merchants"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#c4c6cf] text-xs font-semibold text-[#191c22] hover:bg-[#f2f3fc] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">storefront</span>
              انضم كتاجر
            </Link>
          </div>

        </div>
      </header>

      {/* MAIN CANVAS: Merchant OTP Verification */}
      <main className="flex-grow flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[620px]">
          
          {/* Top Action: Return Link */}
          <div className="mb-5 flex items-center justify-between">
            <Link
              to="/merchant/login"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#032448] hover:text-[#465f86] transition-colors group"
            >
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              <span>الرجوع لتعديل بيانات المتجر</span>
            </Link>
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#e6e8f0] text-[#43474e] font-medium">
              خطوة الأمان الأخيرة
            </span>
          </div>

          {/* Main Verification Card */}
          <div className="bg-white rounded-2xl border border-[#c4c6cf]/60 shadow-xs overflow-hidden relative">
            
            {/* Header Security Ribbon */}
            <div className="bg-[#f2f3fc] px-6 py-3.5 border-b border-[#c4c6cf]/40 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[#032448] font-semibold text-xs">
                <span className="material-symbols-outlined text-[18px] text-[#004328]">verified_user</span>
                <span>بوابة تجار تبادل الآمنة — تشفير مالي متقدم 256-bit SSL</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] text-[#43474e] font-medium">نظام مباشر</span>
              </div>
            </div>

            <div className="p-7 sm:p-9 space-y-6">
              
              {/* Headline and Explanation Block */}
              <div className="text-center space-y-2.5">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1f3a5f] text-white shadow-sm mb-1">
                  <span className="material-symbols-outlined text-[30px]">lock_clock</span>
                </div>
                <h1 className="text-2xl font-bold text-[#032448]">تأكيد دخول لوحة تحكم المتجر</h1>
                <p className="text-sm text-[#43474e] max-w-md mx-auto leading-relaxed">
                  تم إرسال رمز الأمان المكون من 4 أرقام لرقم المتجر المفوض{' '}
                  <span className="font-bold text-[#191c22] dir-ltr inline-block mx-1 font-mono text-[15px]">059-8342190</span>{' '}
                  عبر تطبيق واتساب.
                </p>
                <div className="pt-1">
                  <Link
                    to="/merchant/login"
                    className="inline-flex items-center gap-1 text-xs text-[#835400] hover:text-[#643f00] font-semibold hover:underline"
                  >
                    <span className="material-symbols-outlined text-[15px]">edit</span>
                    <span>تعديل الرقم</span>
                  </Link>
                </div>
              </div>

              {/* 4-Digit OTP Box Grid */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-center text-xs font-semibold text-[#43474e] mb-3">
                    أدخل رمز التحقق السريع المكون من 4 خانات
                  </label>
                  <div className="flex justify-center items-center gap-3 sm:gap-4 dir-ltr" onPaste={handlePaste}>
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={inputRefs[idx]}
                        aria-label={`الرقم ${idx + 1}`}
                        autoFocus={idx === 0}
                        className="w-14 h-16 sm:w-16 sm:h-20 text-center font-mono font-extrabold text-[#032448] bg-white rounded-xl border-2 border-[#c4c6cf] hover:border-[#1f3a5f] focus:border-[#032448] focus:ring-4 focus:ring-[#032448]/10 transition-all outline-none text-2xl shadow-xs"
                        inputMode="numeric"
                        maxLength={1}
                        pattern="[0-9]*"
                        type="text"
                        value={digit}
                        onChange={(e) => handleChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                      />
                    ))}
                  </div>
                </div>

                {/* Resend Timer & Fallback Options */}
                <div className="bg-[#f2f3fc]/70 rounded-xl p-3.5 space-y-2 border border-[#c4c6cf]/30">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-[#43474e] font-medium">
                      <span className="material-symbols-outlined text-[16px] text-[#74777f]">schedule</span>
                      إعادة الإرسال بعد:
                    </span>
                    <span className="font-bold text-[#032448] font-mono text-[14px]">
                      {formatTimer(secondsLeft)}
                    </span>
                  </div>

                  {smsSentNotice && (
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800 text-xs text-center border border-emerald-200">
                      تم إرسال كود التحقق بنجاح كرسالة نصية SMS بديلة إلى هاتفك.
                    </div>
                  )}

                  <div className="pt-1.5 border-t border-[#c4c6cf]/30 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <button
                      className="inline-flex items-center gap-1 text-[#43474e] hover:text-[#032448] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      disabled={!isResendActive}
                      type="button"
                      onClick={handleSmsFallback}
                    >
                      <span className="material-symbols-outlined text-[15px]">sms</span>
                      <span>إرسال عبر رسالة SMS بديلة</span>
                    </button>
                    <a
                      className="inline-flex items-center gap-1 text-[#835400] hover:text-[#643f00] font-bold transition-colors"
                      href="https://wa.me/970591234567"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="material-symbols-outlined text-[15px]">support_agent</span>
                      <span>مساعدة فورية مع دعم التجار</span>
                    </a>
                  </div>
                </div>

                {/* Financial Security Guarantee Banner */}
                <div className="rounded-xl p-3.5 bg-[#e6e8f0]/40 border border-[#c4c6cf]/40 flex items-start gap-3 text-right">
                  <span className="material-symbols-outlined text-[#835400] text-[22px] flex-shrink-0 mt-0.5">shield</span>
                  <p className="text-xs text-[#43474e] leading-relaxed">
                    <strong className="text-[#191c22] font-semibold">حساب المتجر محمي بتشفير متقدم</strong> • التسويات المالية ومحفظة النقاط مضمونة وفق بروتوكول تبادل التجاري 2026.
                  </p>
                </div>

                {/* Primary Action Button */}
                <button
                  className="w-full h-12 bg-[#032448] hover:bg-[#1f3a5f] text-white rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all active:scale-[0.98] cursor-pointer"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>جاري التحقق والاتصال بالخادم...</span>
                    </>
                  ) : (
                    <span>تأكيد والدخول للوحة التحكم 🚀</span>
                  )}
                </button>
              </form>

              {/* Simulation Helper Link to Error State 10code.html */}
              <div className="text-center pt-1 border-t border-[#c4c6cf]/20">
                <Link
                  to="/merchant/otp-error"
                  className="text-[11px] text-[#74777f] hover:text-[#ba1a1a] underline transition-colors"
                >
                  (معاينة حالة الخطأ 10code.html: إدخال رمز غير صحيح أو منتهي)
                </Link>
              </div>

            </div>

            {/* Footer Card Security Status Strip */}
            <div className="bg-[#f2f3fc] px-7 py-3 border-t border-[#c4c6cf]/30 flex flex-wrap items-center justify-between gap-3 text-xs text-[#43474e]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#004328]">lock</span>
                <span>جلسة التاجر مؤمنة برقم تعريف: <span className="font-mono text-[#191c22]">#TRD-26GZ</span></span>
              </div>
              <div className="flex items-center gap-1 text-[#74777f]">
                <span className="material-symbols-outlined text-[15px]">location_on</span>
                <span>غزة، فلسطين</span>
              </div>
            </div>

          </div>

          {/* Quick Trust Indicators below card */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="p-2.5 rounded-xl bg-white/80 border border-[#c4c6cf]/30 flex flex-col items-center gap-1 shadow-2xs">
              <span className="material-symbols-outlined text-[#032448] text-[20px]">payments</span>
              <span className="text-xs text-[#191c22] font-semibold">تسويات نقدية يومية</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/80 border border-[#c4c6cf]/30 flex flex-col items-center gap-1 shadow-2xs">
              <span className="material-symbols-outlined text-[#032448] text-[20px]">loyalty</span>
              <span className="text-xs text-[#191c22] font-semibold">مكافآت ولاء متكاملة</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/80 border border-[#c4c6cf]/30 flex flex-col items-center gap-1 shadow-2xs">
              <span className="material-symbols-outlined text-[#032448] text-[20px]">badge</span>
              <span className="text-xs text-[#191c22] font-semibold">تجار معتمدون محلياً</span>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER (Conversion of 1code.html Footer) */}
      <footer className="w-full mt-auto bg-[#ecedf6] border-t border-[#c4c6cf]/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-[#43474e] text-center sm:text-right">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#032448]">تبادل</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#835400]"></span>
            </div>
            <span>جميع الحقوق محفوظة © منصة تبادل لمكافآت المتاجر في غزة 2026</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
            <a className="text-[#43474e] hover:text-[#032448] transition-colors" href="#">شروط الاستخدام</a>
            <a className="text-[#43474e] hover:text-[#032448] transition-colors" href="#">سياسة الخصوصية</a>
            <Link className="text-[#032448] font-semibold hover:underline" to="/merchant/login">بوابة التجار</Link>
            <a className="text-[#43474e] hover:text-[#032448] transition-colors" href="#">مركز الدعم الفني</a>
            <a className="text-[#43474e] hover:text-[#032448] transition-colors" href="#">الأسئلة الشائعة</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
