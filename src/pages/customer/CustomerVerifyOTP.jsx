import { useEffect, useRef, useState } from 'react';

import {
  ShieldCheck,
  Gift,
  Clock3,
  ArrowRight,
  Pencil,
  LockKeyhole,
  CheckCircle2,
  MessageCircle,
  MessageSquareText,
  Sparkles,
  Headset,
} from 'lucide-react';

import { Link, useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/AuthLayout';

function CustomerVerifyOTP() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(['', '', '', '']);
  const [countdown, setCountdown] = useState(48);
  const [resendMethod, setResendMethod] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');

  const inputRefs = useRef([]);
  const verificationTimeout = useRef(null);

  const phone =
    sessionStorage.getItem('customerPhone') || '059-9123456';

  // Countdown: يبدأ من 48 ثانية
  useEffect(() => {
    if (countdown <= 0) return undefined;

    const timer = window.setTimeout(() => {
      setCountdown((previous) => Math.max(previous - 1, 0));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [countdown]);

  // تنظيف المؤقت عند مغادرة الصفحة
  useEffect(() => {
    inputRefs.current[0]?.focus();

    return () => {
      window.clearTimeout(verificationTimeout.current);
    };
  }, []);

  // إدخال رقم واحد والانتقال تلقائيًا للخانة التالية
  const handleOTPChange = (index, value) => {
    const digits = value.replace(/\D/g, '');

    if (!digits) {
      setOtp((previous) =>
        previous.map((digit, i) => (i === index ? '' : digit)),
      );

      setError('');
      return;
    }

    const digit = digits.slice(-1);

    setOtp((previous) =>
      previous.map((current, i) => (i === index ? digit : current)),
    );

    setError('');

    if (index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // التنقل بين الخانات باستخدام لوحة المفاتيح
  const handleKeyDown = (index, event) => {
    if (
      event.key === 'Backspace' &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === 'ArrowLeft' && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    if (event.key === 'ArrowRight' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // لصق رمز التحقق كاملًا
  const handlePaste = (event) => {
    event.preventDefault();

    const pastedDigits = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, 4)
      .split('');

    if (!pastedDigits.length) return;

    setOtp((previous) =>
      previous.map((_, index) => pastedDigits[index] || ''),
    );

    setError('');

    inputRefs.current[
      Math.min(pastedDigits.length - 1, 3)
    ]?.focus();
  };

  // الرجوع لتعديل رقم الجوال
  const handleEditPhone = () => {
    navigate('/login');
  };

  // إعادة إرسال الرمز
  const handleResend = (method) => {
    if (countdown > 0) return;

    setResendMethod(method);

    // إعادة الإرسال الفعلية تحتاج إلى Backend
    setError(
      method === 'whatsapp'
        ? 'إعادة الإرسال عبر واتساب تحتاج إلى ربط خدمة إرسال الرموز.'
        : 'إعادة الإرسال عبر SMS تحتاج إلى ربط خدمة الرسائل النصية.',
    );
  };

  // تأكيد الرمز
  const handleVerify = (event) => {
    event.preventDefault();

    if (isVerifying) return;

    setError('');

    const code = otp.join('');

    // التأكد من إدخال جميع الأرقام
    if (code.length !== 4) {
      setError('يرجى إدخال رمز التحقق المكوّن من 4 أرقام.');

      const firstEmptyIndex = otp.findIndex((digit) => !digit);

      inputRefs.current[
        firstEmptyIndex === -1 ? 0 : firstEmptyIndex
      ]?.focus();

      return;
    }

    setIsVerifying(true);

    // محاكاة تجريبية فقط؛ التحقق الحقيقي يحتاج إلى Backend
    verificationTimeout.current = window.setTimeout(() => {
      navigate('/customer/otp-error', {
        state: {
          reason: 'invalid',
          phone,
          channel: resendMethod || 'whatsapp',
        },
      });
    }, 700);
  };

  const formattedCountdown =
    countdown > 0
      ? `00:${String(countdown).padStart(2, '0')}`
      : 'جاهز للإرسال';

  return (
    <AuthLayout role="customer">
      <div
        dir="rtl"
        className="flex min-h-screen w-full flex-col overflow-x-clip bg-[#f9f9ff] font-sans text-[#191c22]"
      >
        {/* Main OTP Canvas */}
        <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

          {/* Ambient Background Highlights */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-1/4 -z-0 h-72 w-72 rounded-full bg-[#d5e3ff]/50 blur-3xl sm:h-96 sm:w-96"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/4 -z-0 h-72 w-72 rounded-full bg-[#ffddb5]/40 blur-3xl sm:h-96 sm:w-96"
          />

          <div className="relative z-10 mx-auto w-full max-w-[576px]">

            {/* Top Action Bar */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handleEditPhone}
                className="group inline-flex items-center gap-2 self-start rounded-xl px-3 py-2 text-sm font-semibold text-[#032448] transition hover:bg-[#ecedf6] active:scale-95"
              >
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />

                <span>الرجوع لتعديل رقم الجوال</span>
              </button>

              {/* Security Indicator */}
              <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-[#e6e8f0] px-3 py-2 text-[11px] font-semibold text-[#43474e] sm:self-auto">
                <ShieldCheck
                  size={16}
                  className="shrink-0 text-[#004328]"
                />

                <span>
                  بوابة تبادل الآمنة 2026 - تشفير هوية رقمية
                </span>
              </div>
            </div>

            {/* Verification Card */}
            <section className="relative rounded-2xl border border-[#c4c6cf]/40 bg-white p-5 shadow-sm sm:p-8 lg:p-10">

              {/* Card Header */}
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f2f3fc] text-[#032448] shadow-inner">
                  <ShieldCheck size={34} strokeWidth={1.8} />
                </div>

                <h1 className="mb-2 text-2xl font-extrabold leading-relaxed text-[#032448] sm:text-3xl">
                  أدخل رمز التحقق السري
                </h1>

                <p className="mx-auto max-w-md text-sm leading-7 text-[#43474e]">
                  تم إرسال رمز الأمان المكون من 4 أرقام إلى جوالك{' '}

                  <span
                    dir="ltr"
                    className="mx-1 inline-block font-bold tracking-wider text-[#191c22]"
                  >
                    {phone}
                  </span>

                  عبر تطبيق واتساب.
                </p>

                <Link
                  to="/login"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#032448] decoration-[#835400] transition hover:underline"
                >
                  <span>تعديل الرقم</span>
                  <Pencil size={14} />
                </Link>
              </div>

              {/* OTP Form */}
              <form onSubmit={handleVerify} className="space-y-6">

                {/* OTP Inputs */}
                <div
                  dir="ltr"
                  className="my-6 flex items-center justify-center gap-3 sm:gap-4"
                >
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(element) => {
                        inputRefs.current[index] = element;
                      }}
                      autoFocus={index === 0}
                      aria-label={`رقم التحقق ${index + 1}`}
                      autoComplete={
                        index === 0 ? 'one-time-code' : 'off'
                      }
                      inputMode="numeric"
                      maxLength={1}
                      type="text"
                      value={digit}
                      onChange={(event) =>
                        handleOTPChange(index, event.target.value)
                      }
                      onKeyDown={(event) =>
                        handleKeyDown(index, event)
                      }
                      onPaste={index === 0 ? handlePaste : undefined}
                      className={`h-16 w-14 rounded-xl border bg-white text-center text-2xl font-extrabold text-[#032448] shadow-sm outline-none transition-all focus:border-[#1f3a5f] focus:ring-4 focus:ring-[#1f3a5f]/10 sm:h-20 sm:w-16 sm:text-3xl ${
                        error && !digit
                          ? 'border-red-500'
                          : 'border-[#c4c6cf]'
                      }`}
                    />
                  ))}
                </div>

                {/* Welcome Loyalty Bonus */}
                <div className="flex items-center gap-3.5 rounded-xl border border-[#835400]/20 bg-gradient-to-r from-[#ffddb5]/50 via-[#f2f3fc] to-[#8df8bd]/30 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#feb64e] text-[#2a1800] shadow-sm">
                    <Gift size={25} />
                  </div>

                  <div className="min-w-0 text-right">
                    <span className="mb-1 inline-block rounded-full bg-[#ffddb5]/80 px-2 py-1 text-[11px] font-bold text-[#835400]">
                      مكافأة الانضمام الترحيبية
                    </span>

                    <p className="text-sm font-medium leading-7 text-[#191c22]">
                      <span className="font-extrabold text-[#004328]">
                        +200 نقطة ولاء مجانية
                      </span>{' '}
                      (كاش باك 5%) ستضاف فوراً لمحفظتك بمجرد إتمام التحقق.
                    </p>
                  </div>
                </div>

                {/* Countdown and Resend Actions */}
                <div className="flex flex-col items-center justify-between gap-4 py-2 text-sm sm:flex-row">
                  <div className="flex flex-wrap items-center justify-center gap-2 text-[#43474e] sm:justify-start">
                    <Clock3 size={19} />

                    <span>إعادة الإرسال بعد:</span>

                    <span
                      dir="ltr"
                      className={`font-mono font-extrabold tracking-wider ${
                        countdown === 0
                          ? 'text-[#835400]'
                          : 'text-[#032448]'
                      }`}
                    >
                      {formattedCountdown}
                    </span>
                  </div>

                  {/* Alternative Resend Channels */}
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      disabled={countdown > 0}
                      onClick={() => handleResend('whatsapp')}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#43474e] transition hover:text-[#032448] disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
                    >
                      <MessageCircle size={16} />
                      <span>إعادة الإرسال عبر واتساب</span>
                    </button>

                    <span className="text-[#c4c6cf]">|</span>

                    <button
                      type="button"
                      disabled={countdown > 0}
                      onClick={() => handleResend('sms')}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#43474e] transition hover:text-[#032448] disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
                    >
                      <MessageSquareText size={16} />
                      <span>إرسال برمز SMS</span>
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800"
                  >
                    {error}
                  </div>
                )}

                {/* Primary Submit Button */}
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#032448] px-4 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1f3a5f] active:scale-[0.99] disabled:cursor-wait disabled:opacity-70 sm:text-base"
                >
                  <span>
                    {isVerifying
                      ? 'جارٍ التحقق...'
                      : 'تأكيد والدخول للمنصة والمحفظة'}
                  </span>

                  <Sparkles size={18} />
                </button>
              </form>

              {/* Guarantee Subtext */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-[#e6e8f0] pt-4 text-xs text-[#74777f] sm:gap-x-4">
                <div className="flex items-center gap-1">
                  <LockKeyhole size={14} />
                  <span>بياناتك محمية ومشفرة</span>
                </div>

                <span aria-hidden="true">•</span>

                <div className="flex items-center gap-1">
                  <CheckCircle2 size={14} />
                  <span>معتمد لجميع متاجر غزة</span>
                </div>
              </div>
            </section>

            {/* Quick Assistance */}
            <div className="mt-6 text-center">
              <p className="text-sm leading-7 text-[#43474e]">
                تواجه صعوبة في استلام الرمز؟{' '}

                <button
                  type="button"
                  onClick={() =>
                    setError(
                      'سيتم ربط التواصل مع الدعم الفني لاحقًا.',
                    )
                  }
                  className="mx-1 inline-flex items-center gap-1 font-bold text-[#032448] transition hover:underline"
                >
                  <Headset size={16} />
                  تواصل مع الدعم الفني المباشر
                </button>
              </p>
            </div>
          </div>
        </main>
      </div>
    </AuthLayout>
  );
}

export default CustomerVerifyOTP;