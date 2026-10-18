import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function OtpErrorStatePage() {
  const navigate = useNavigate();
  // Pre-filled with 7, 2, 9, 4 as shown in 10code.html
  const [otp, setOtp] = useState(['7', '2', '9', '4']);
  const [attemptsLeft, setAttemptsLeft] = useState(2);
  const [hasError, setHasError] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, value) => {
    const sanitized = value.replace(/[^0-9]/g, '');
    const newOtp = [...otp];

    if (sanitized.length > 0) {
      newOtp[index] = sanitized[sanitized.length - 1];
      setOtp(newOtp);
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

  const handleResend = () => {
    setOtp(['', '', '', '']);
    setHasError(false);
    setStatusMessage('تم إرسال رمز تحقق جديد عبر تطبيق واتساب');
    setTimeout(() => {
      inputRefs[0].current?.focus();
    }, 100);
  };

  const handleSmsFallback = () => {
    setOtp(['', '', '', '']);
    setHasError(false);
    setStatusMessage('تم إرسال رمز تحقق بديل عبر رسائل SMS النصية القصيرة');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join('');

    if (fullOtp === '7294' || fullOtp.length < 4) {
      setHasError(true);
      setAttemptsLeft((prev) => Math.max(0, prev - 1));
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/stores');
    }, 800);
  };

  return (
    <div className="bg-[#f9f9ff] text-[#191c22] antialiased min-h-screen flex flex-col font-tajawal selection:bg-[#ffdad6] selection:text-[#93000a]">
      {/* TOP BAR (10code.html Header) */}
      <header className="w-full top-0 sticky z-50 bg-white shadow-xs border-b border-[#12302b]/10">
        {/* Ultra-lightweight Connection & Data-Saver Bar */}
        <div className="bg-[#f6f3ec] text-[#52606d] text-xs px-4 py-1.5 border-b border-[#12302b]/10 flex items-center justify-between">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3 text-[11px] sm:text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1f7a6e]"></span>
              <span className="text-[#12302b] font-bold">شبكة غزة 2026 — متصل</span>
            </div>
            <div className="text-[#1f7a6e] font-bold hidden sm:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">bolt</span>
              <span>جلسة تاجر معتمدة — اتصال مشفر</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
          
          {/* Brand Anchor */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-10 flex items-center justify-center">
                <img
                  alt="شعار تبادل"
                  className="h-9 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdiXQNmJzYIl6PECtK-0Z_eK5rLr6vyiV694yubGM6tX5iUgVUBCS9qo1D2zoByKVT8cvYptCEsHVna6sw77ll4n7Nvd1Vz5DI90zf-qUNwuux0oF_mOmf3xs70bwXSt01a-qiM-uG6Jhl_31Ti5oKhIm51tPQFAIQKYFi5IKOBkLbkyb5N_ncgv--iqOAwJFKYihJb0MaPWIsSQcHIIQnjfDJpDrs8m1_YAPT_wo28k4mi5nzkXePdB6NKTpNovOlj-g"
                />
              </div>
              <div className="hidden sm:flex flex-col border-r border-[#12302b]/15 pr-3">
                <span className="text-[11px] text-[#c7922d] font-bold tracking-tight">بوابة التجار المعتمدة</span>
                <span className="text-xs text-[#52606d] font-medium">غزة 2026</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link to="/" className="text-[#52606d] hover:text-[#12302b] transition-colors">الرئيسية</Link>
            <Link to="/stores" className="text-[#52606d] hover:text-[#12302b] transition-colors">المتاجر الشريكة</Link>
            <Link to="/#calculator" className="text-[#52606d] hover:text-[#12302b] transition-colors">المكافآت</Link>
            <Link to="/#faq" className="text-[#52606d] hover:text-[#12302b] transition-colors">الأسئلة الشائعة</Link>
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

      {/* MAIN CANVAS: Merchant OTP Error State (10code.html) */}
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

              {/* 4-Digit OTP Box Grid (Red Error Highlight 7-2-9-4) */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-center text-xs font-semibold text-[#43474e] mb-3">
                    أدخل رمز التحقق السريع المكون من 4 خانات
                  </label>
                  
                  <div className="flex justify-center items-center gap-3 sm:gap-4 dir-ltr">
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={inputRefs[idx]}
                        aria-label={`الرقم ${idx + 1}`}
                        className={`w-14 h-16 sm:w-16 sm:h-20 text-center font-mono font-extrabold rounded-xl border-2 outline-none text-2xl shadow-xs transition-all ${
                          hasError
                            ? 'text-[#ba1a1a] border-[#ba1a1a] bg-[#ffdad6]/20 focus:ring-4 focus:ring-[#ba1a1a]/20'
                            : 'text-[#032448] border-[#c4c6cf] bg-white focus:border-[#032448] focus:ring-4 focus:ring-[#032448]/10'
                        }`}
                        inputMode="numeric"
                        maxLength={1}
                        type="text"
                        value={digit}
                        onChange={(e) => handleChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                      />
                    ))}
                  </div>

                  {/* Error Notification Banner (Direct conversion of 10code.html line 211) */}
                  {hasError && (
                    <div className="mt-3.5 p-3 rounded-xl bg-[#ffdad6]/30 border border-[#ba1a1a]/30 flex items-start sm:items-center gap-2.5 text-[#ba1a1a] text-right">
                      <span className="material-symbols-outlined text-[20px] shrink-0 text-[#ba1a1a]">error</span>
                      <p className="text-xs font-medium leading-relaxed">
                        <span className="font-bold">رمز التحقق المدخل غير صحيح أو انتهت صلاحيته.</span>{' '}
                        يرجى التأكد من الرمز وإعادة المحاولة. متبقي لك {attemptsLeft} محاولات.
                      </p>
                    </div>
                  )}

                  {statusMessage && (
                    <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs text-center border border-emerald-200">
                      {statusMessage}
                    </div>
                  )}
                </div>

                {/* Resend Timer & Fallback Options (Expired timer state in 10code.html line 213) */}
                <div className="bg-[#f2f3fc]/70 rounded-xl p-3.5 space-y-2 border border-[#c4c6cf]/30">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-[#191c22] font-medium">
                      <span className="material-symbols-outlined text-[16px] text-[#ba1a1a]">timer_off</span>
                      انتهت صلاحية الرمز
                    </span>
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#ecedf6] text-[#032448] hover:bg-[#e6e8f0] font-bold text-xs transition-colors border border-[#c4c6cf]/40 cursor-pointer"
                      type="button"
                      onClick={handleResend}
                    >
                      <span className="material-symbols-outlined text-[15px]">refresh</span>
                      <span>إعادة إرسال رمز جديد</span>
                    </button>
                  </div>

                  <div className="pt-2 border-t border-[#c4c6cf]/30 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <button
                      className="inline-flex items-center gap-1.5 text-[#032448] hover:underline font-semibold transition-colors cursor-pointer"
                      type="button"
                      onClick={handleSmsFallback}
                    >
                      <span className="material-symbols-outlined text-[16px]">sms</span>
                      <span>استلام الرمز عبر رسالة SMS</span>
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
                  <span className="material-symbols-outlined text-[#835400] text-[22px] shrink-0 mt-0.5">shield</span>
                  <p className="text-xs text-[#43474e] leading-relaxed">
                    <strong className="text-[#191c22] font-semibold">حساب المتجر محمي بتشفير متقدم</strong> • التسويات المالية ومحفظة النقاط مضمونة وفق بروتوكول تبادل التجاري 2026.
                  </p>
                </div>

                {/* Primary Action Button (sync icon and retry text in 10code.html line 222) */}
                <button
                  className="w-full h-12 bg-[#032448] hover:bg-[#1f3a5f] text-white rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all active:scale-[0.98] cursor-pointer"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>جاري إعادة التحقق...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">sync</span>
                      <span>إعادة المحاولة والتحقق من الرمز</span>
                    </>
                  )}
                </button>
              </form>

              {/* Link back to normal state */}
              <div className="text-center pt-1 border-t border-[#c4c6cf]/20">
                <Link
                  to="/merchant/otp"
                  className="text-[11px] text-[#74777f] hover:text-[#032448] underline transition-colors"
                >
                  (العودة إلى شاشة التحقق الطبيعية 1code.html)
                </Link>
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

      {/* FOOTER (Conversion of 10code.html Footer) */}
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
