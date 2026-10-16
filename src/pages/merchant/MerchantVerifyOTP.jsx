import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';

import {
  ArrowRight,
  BadgeCheck,
  LockKeyhole,
  ShieldCheck,
  Clock3,
  MessageSquare,
  Headset,
  MapPin,
  Tag,
  Banknote,
} from 'lucide-react';

function MerchantVerifyOTP() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(['', '', '', '']);
  const [secondsLeft, setSecondsLeft] = useState(52);

  const [otpChannel, setOtpChannel] = useState(
    sessionStorage.getItem('merchantOtpChannel') || 'whatsapp',
  );

  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const inputRefs = useRef([]);
  const verificationTimeout = useRef(null);

  const merchantPhone =
    sessionStorage.getItem('merchantIdentifier') || '059-8342190';

  const loginMode =
    sessionStorage.getItem('merchantLoginMode') || 'phone';

  // تشغيل المؤقت والتركيز على أول خانة
  useEffect(() => {
    inputRefs.current[0]?.focus();

    const timer = setInterval(() => {
      setSecondsLeft((previous) => {
        if (previous <= 1) {
          clearInterval(timer);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(verificationTimeout.current);
    };
  }, []);

  // التعامل مع إدخال أرقام OTP
  const handleOTPChange = (index, value) => {
    const digits = value.replace(/\D/g, '');

    if (!digits) {
      setOtp((previous) =>
        previous.map((digit, i) => (i === index ? '' : digit)),
      );

      setError('');
      return;
    }

    const nextOTP = [...otp];

    // السماح بإدخال أو لصق الرمز كاملًا
    if (digits.length > 1) {
      const pastedDigits = digits.slice(0, 4);

      pastedDigits.split('').forEach((digit, i) => {
        nextOTP[i] = digit;
      });

      setOtp(nextOTP);
      setError('');

      const nextIndex = Math.min(pastedDigits.length, 3);
      inputRefs.current[nextIndex]?.focus();

      return;
    }

    nextOTP[index] = digits[0];

    setOtp(nextOTP);
    setError('');

    if (index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // التنقل بين خانات الرمز باستخدام لوحة المفاتيح
  const handleKeyDown = (event, index) => {
    if (
      event.key === 'Backspace' &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === 'ArrowRight' && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // لصق رمز OTP كاملًا
  const handlePaste = (event) => {
    event.preventDefault();

    const pastedText = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, 4);

    if (!pastedText) return;

    const nextOTP = ['', '', '', ''];

    pastedText.split('').forEach((digit, index) => {
      nextOTP[index] = digit;
    });

    setOtp(nextOTP);
    setError('');

    const focusIndex = Math.min(pastedText.length, 3);
    inputRefs.current[focusIndex]?.focus();
  };

  // الرجوع لتعديل بيانات المتجر
  const handleEditPhone = () => {
    navigate('/merchant/login');
  };

  // طلب إرسال الرمز عبر SMS
  const handleResendSMS = () => {
    setOtpChannel('sms');

    sessionStorage.setItem('merchantOtpChannel', 'sms');

    setOtp(['', '', '', '']);
    setSecondsLeft(52);

    setError(
      'إعادة إرسال رمز SMS تحتاج إلى ربط خدمة إرسال الرموز بالـ Backend.',
    );

    inputRefs.current[0]?.focus();
  };

  // التحقق التجريبي من الرمز
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    const fullCode = otp.join('');

    // التحقق من اكتمال الرمز
    if (fullCode.length !== 4) {
      setError('يرجى إدخال رمز التحقق المكوّن من 4 أرقام.');

      const firstEmptyIndex = otp.findIndex((digit) => !digit);

      inputRefs.current[
        firstEmptyIndex === -1 ? 0 : firstEmptyIndex
      ]?.focus();

      return;
    }

    // منع تكرار الضغط أثناء المعالجة
    if (isVerifying) return;

    setIsVerifying(true);

    verificationTimeout.current = setTimeout(() => {
      setIsVerifying(false);

      // محاكاة حالة خطأ OTP لعدم وجود Backend حاليًا
      navigate('/merchant/otp-error', {
        state: {
          reason: 'invalid',
          channel: otpChannel,
          phone: merchantPhone,
        },
      });
    }, 700);
  };

  return (
    <AuthLayout role="merchant">
      <div
        dir="rtl"
        className="flex flex-1 flex-col bg-[#f9f9ff] font-[Tajawal,sans-serif] text-[#191c22]"
      >
        {/* Main */}
        <main className="custom-gradient-mesh flex flex-1 items-center justify-center px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="w-full max-w-[620px]">

            {/* Return Link */}
            <div className="mb-5 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleEditPhone}
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#032448] transition hover:text-[#465f86]"
              >
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />

                الرجوع لتعديل بيانات المتجر
              </button>

              <span className="shrink-0 rounded-full bg-[#e6e8f0] px-2.5 py-1 text-xs font-semibold text-[#43474e]">
                خطوة الأمان الأخيرة
              </span>
            </div>

            {/* Verification Card */}
            <section className="overflow-hidden rounded-2xl border border-[#c4c6cf]/60 bg-white shadow-sm">

              {/* Security Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#c4c6cf]/40 bg-[#f2f3fc] px-4 py-3.5 sm:px-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#032448]">
                  <ShieldCheck
                    size={19}
                    className="shrink-0 text-[#004328]"
                  />

                  <span>
                    بوابة تجار تبادل الآمنة — تشفير مالي متقدم 256-bit SSL
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-[#43474e]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  نظام مباشر
                </div>
              </div>

              <div className="space-y-6 p-5 sm:p-8">

                {/* Heading */}
                <div className="space-y-2.5 text-center">
                  <div className="mb-1 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f3a5f] text-white shadow-sm">
                    <LockKeyhole size={30} />
                  </div>

                  <h1 className="text-2xl font-extrabold text-[#032448]">
                    تأكيد دخول لوحة تحكم المتجر
                  </h1>

                  <p className="mx-auto max-w-md text-sm leading-7 text-[#43474e]">
                    تم إرسال رمز الأمان المكون من 4 أرقام لرقم المتجر المفوض

                    <span
                      dir="ltr"
                      className="mx-1 inline-block font-bold text-[#191c22]"
                    >
                      {loginMode === 'phone'
                        ? merchantPhone
                        : 'رقم المتجر المعتمد'}
                    </span>

                    عبر تطبيق{' '}
                    {otpChannel === 'whatsapp'
                      ? 'واتساب'
                      : 'رسالة SMS'}.
                  </p>

                  <button
                    type="button"
                    onClick={handleEditPhone}
                    className="inline-flex items-center gap-1 pt-1 text-xs font-bold text-[#835400] transition hover:underline"
                  >
                    <span>✎</span>
                    تعديل الرقم
                  </button>
                </div>

                {/* OTP Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label className="mb-3 block text-center text-sm font-bold text-[#43474e]">
                      أدخل رمز التحقق السريع المكون من 4 خانات
                    </label>

                    <div
                      dir="ltr"
                      className="flex items-center justify-center gap-3 sm:gap-4"
                    >
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          ref={(element) => {
                            inputRefs.current[index] = element;
                          }}
                          aria-label={`الرقم ${index + 1}`}
                          autoFocus={index === 0}
                          type="text"
                          inputMode="numeric"
                          autoComplete={
                            index === 0
                              ? 'one-time-code'
                              : 'off'
                          }
                          maxLength={1}
                          pattern="[0-9]*"
                          value={digit}
                          onChange={(event) =>
                            handleOTPChange(
                              index,
                              event.target.value,
                            )
                          }
                          onKeyDown={(event) =>
                            handleKeyDown(event, index)
                          }
                          onPaste={handlePaste}
                          className={`h-16 w-14 rounded-xl border-2 bg-white text-center text-2xl font-extrabold text-[#032448] shadow-sm outline-none transition-all focus:border-[#032448] focus:ring-4 focus:ring-[#032448]/10 sm:h-20 sm:w-16 ${
                            error && !digit
                              ? 'border-red-500'
                              : 'border-[#c4c6cf] hover:border-[#1f3a5f]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Countdown */}
                  <div className="space-y-2 rounded-xl border border-[#c4c6cf]/30 bg-[#f2f3fc]/70 p-3.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1.5 font-medium text-[#43474e]">
                        <Clock3
                          size={16}
                          className="text-[#74777f]"
                        />

                        إعادة الإرسال بعد:
                      </span>

                      <span
                        dir="ltr"
                        className={`font-bold ${
                          secondsLeft === 0
                            ? 'text-red-600'
                            : 'text-[#032448]'
                        }`}
                      >
                        00:{String(secondsLeft).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#c4c6cf]/30 pt-2.5 text-xs">
                      <button
                        type="button"
                        disabled={secondsLeft > 0}
                        onClick={handleResendSMS}
                        className="inline-flex items-center gap-1 text-[#43474e] transition hover:text-[#032448] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <MessageSquare size={15} />

                        إرسال عبر رسالة SMS بديلة
                      </button>

                      <Link
                        to="/help"
                        className="inline-flex items-center gap-1 font-bold text-[#835400] transition hover:underline"
                      >
                        <Headset size={15} />

                        مساعدة فورية مع دعم التجار
                      </Link>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-start gap-3 rounded-xl border border-[#c4c6cf]/40 bg-[#e6e8f0]/40 p-3.5 text-right">
                    <ShieldCheck
                      size={22}
                      className="mt-0.5 shrink-0 text-[#835400]"
                    />

                    <p className="text-xs leading-6 text-[#43474e]">
                      <strong className="font-bold text-[#191c22]">
                        حساب المتجر محمي بتشفير متقدم
                      </strong>{' '}
                      • التسويات المالية ومحفظة النقاط مضمونة وفق بروتوكول
                      تبادل التجاري 2026.
                    </p>
                  </div>

                  {/* Error */}
                  {error && (
                    <div
                      role="alert"
                      className="rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-3 text-sm leading-6 text-amber-900"
                    >
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isVerifying}
                    className={`flex h-12 w-full items-center justify-center gap-2 rounded-xl text-base font-bold text-white shadow-md transition-all hover:shadow-lg active:scale-[0.98] disabled:cursor-wait ${
                      otp.every(Boolean)
                        ? 'bg-[#004328] hover:bg-[#005232]'
                        : 'bg-[#032448] hover:bg-[#1f3a5f]'
                    }`}
                  >
                    {isVerifying ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />

                        جاري التحقق من أمان المتجر...
                      </>
                    ) : (
                      <>تأكيد والدخول للوحة التحكم 🚀</>
                    )}
                  </button>
                </form>
              </div>

              {/* Security Status Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#c4c6cf]/30 bg-[#f2f3fc] px-5 py-3 text-xs text-[#43474e] sm:px-7">
                <div className="flex items-center gap-1.5">
                  <LockKeyhole
                    size={16}
                    className="text-[#004328]"
                  />

                  <span>
                    جلسة التاجر مؤمنة برقم تعريف:{' '}
                    <span
                      dir="ltr"
                      className="font-mono font-bold text-[#191c22]"
                    >
                      #TRD-26GZ
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <MapPin
                    size={15}
                    className="text-[#74777f]"
                  />

                  <span>غزة، فلسطين</span>
                </div>
              </div>
            </section>

            {/* Trust Indicators */}
            <div className="mt-6 grid grid-cols-1 gap-3 text-center sm:grid-cols-3">
              <div className="flex flex-col items-center gap-1 rounded-xl border border-[#c4c6cf]/30 bg-white/80 p-3">
                <Banknote
                  size={21}
                  className="text-[#032448]"
                />

                <span className="text-xs font-bold text-[#191c22]">
                  تسويات نقدية يومية
                </span>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-xl border border-[#c4c6cf]/30 bg-white/80 p-3">
                <Tag
                  size={21}
                  className="text-[#032448]"
                />

                <span className="text-xs font-bold text-[#191c22]">
                  مكافآت ولاء متكاملة
                </span>
              </div>

              <div className="flex flex-col items-center gap-1 rounded-xl border border-[#c4c6cf]/30 bg-white/80 p-3">
                <BadgeCheck
                  size={21}
                  className="text-[#032448]"
                />

                <span className="text-xs font-bold text-[#191c22]">
                  تجار معتمدون محليًا
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AuthLayout>
  );
}

export default MerchantVerifyOTP;