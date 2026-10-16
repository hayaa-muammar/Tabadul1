import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Store,
  Languages,
  CircleHelp,
  LockKeyhole,
  Pencil,
  CircleAlert,
  TimerOff,
  RefreshCw,
  MessageSquare,
  Headset,
  ShieldCheck,
  LoaderCircle,
  CheckCircle2,
} from 'lucide-react';

import MainLayout from '../../layouts/MainLayout';

export default function MerchantOTPError() {
  const inputRefs = useRef([]);

  const [otp, setOtp] = useState(['7', '2', '9', '4']);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [message, setMessage] = useState('');

  const handleOtpChange = (value, index) => {
    const digit = value.replace(/\D/g, '').slice(-1);

    setOtp((previous) => {
      const updated = [...previous];
      updated[index] = digit;
      return updated;
    });

    setMessage('');

    if (digit && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (
      event.key === 'Backspace' &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();

    const pastedCode = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, 4);

    if (!pastedCode) return;

    const updated = ['', '', '', ''];

    pastedCode.split('').forEach((digit, index) => {
      updated[index] = digit;
    });

    setOtp(updated);
    setMessage('');

    const focusIndex = Math.min(pastedCode.length, 3);

    inputRefs.current[focusIndex]?.focus();
  };

  const handleRetry = (event) => {
    event.preventDefault();

    if (otp.some((digit) => !digit)) {
      setMessage('يرجى إدخال رمز التحقق المكوّن من 4 أرقام.');
      return;
    }

    setLoading(true);
    setMessage('');

    // محاكاة تجريبية فقط.
    // التحقق الحقيقي يتطلب Backend.
    setTimeout(() => {
      setLoading(false);
      setMessage(
        'تعذّر التحقق من الرمز. يرجى التأكد من الرمز والمحاولة مجددًا.'
      );
    }, 800);
  };

  const handleResend = () => {
    if (resending) return;

    setResending(true);
    setMessage('');

    // إعادة الإرسال غير متصلة بخادم حاليًا.
    setTimeout(() => {
      setResending(false);
      setMessage(
        'إعادة إرسال الرمز غير متاحة حاليًا في النسخة التجريبية.'
      );
    }, 500);
  };

  return (
    <MainLayout>
      <main
        dir="rtl"
        lang="ar"
        className="min-h-[75vh] flex-grow bg-[#f9f9ff] px-4 py-10 text-[#191c22] sm:px-6 lg:px-8"
      >
        {/* استيراد الخطوط وتنسيقات بسيطة خاصة بالصفحة */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Tajawal:wght@400;500;700;800&family=IBM+Plex+Sans:wght@400;600;700;800&display=swap');

            .merchant-otp-error {
              font-family: 'Tajawal', 'IBM Plex Sans Arabic', sans-serif;
            }

            .merchant-otp-numerals {
              font-family: 'IBM Plex Sans', 'Tajawal', sans-serif;
            }
          `}
        </style>

        <div className="merchant-otp-error mx-auto w-full max-w-[620px]">

          {/* الرجوع إلى تعديل بيانات المتجر */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/merchant/verify-otp"
              className="group inline-flex items-center gap-2 text-base font-bold text-[#032448] transition-colors hover:text-[#465f86]"
            >
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />

              <span>الرجوع لتعديل بيانات المتجر</span>
            </Link>

            <span className="rounded-full bg-[#e6e8f0] px-3 py-1.5 text-xs font-bold text-[#43474e]">
              خطوة الأمان الأخيرة
            </span>
          </div>

          {/* بطاقة التحقق */}
          <section className="relative overflow-hidden rounded-2xl border border-[#c4c6cf]/60 bg-white shadow-sm">

            <div className="space-y-6 p-6 sm:p-9">

              {/* العنوان والتوضيح */}
              <div className="space-y-3 text-center">

                <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f3a5f] text-white shadow-sm">
                  <LockKeyhole size={30} />
                </div>

                <h1 className="text-2xl font-extrabold text-[#032448]">
                  تأكيد دخول لوحة تحكم المتجر
                </h1>

                <p className="mx-auto max-w-md text-sm leading-7 text-[#43474e]">
                  تم إرسال رمز الأمان المكوّن من 4 أرقام
                  لرقم المتجر المفوّض عبر تطبيق واتساب.
                </p>

                {/* رقم المتجر */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">

                  <span
                    dir="ltr"
                    className="merchant-otp-numerals text-sm font-bold text-[#191c22]"
                  >
                    رقم هاتف المتجر المسجل
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      setMessage(
                        'يمكن تعديل رقم المتجر من واجهة إدخال رمز التحقق.'
                      );
                    }}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#835400] transition-colors hover:underline"
                  >
                    <Pencil size={15} />
                    تعديل الرقم
                  </button>

                </div>
              </div>

              {/* رسالة خطأ OTP */}
              <div className="flex items-start gap-3 rounded-xl border border-[#ba1a1a]/30 bg-[#ffdad6]/30 p-4 text-right">

                <CircleAlert
                  size={22}
                  className="mt-0.5 shrink-0 text-[#ba1a1a]"
                />

                <p className="text-sm leading-6 text-[#93000a]">
                  <strong className="font-extrabold">
                    رمز التحقق المدخل غير صحيح أو انتهت صلاحيته.
                  </strong>{' '}
                  يرجى التأكد من الرمز وإعادة المحاولة.
                  متبقي لك 2 محاولات.
                </p>

              </div>

              {/* حقول الرمز وزر التحقق */}
              <form
                onSubmit={handleRetry}
                className="space-y-6"
              >

                <div>
                  <label className="mb-4 block text-center text-sm font-bold text-[#43474e]">
                    أدخل رمز التحقق السريع المكوّن من 4 خانات
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
                        type="text"
                        inputMode="numeric"
                        autoComplete={
                          index === 0 ? 'one-time-code' : 'off'
                        }
                        maxLength={1}
                        value={digit}
                        aria-label={`الرقم ${index + 1}`}
                        onChange={(event) =>
                          handleOtpChange(
                            event.target.value,
                            index
                          )
                        }
                        onKeyDown={(event) =>
                          handleKeyDown(event, index)
                        }
                        onPaste={handlePaste}
                        className="merchant-otp-numerals h-14 w-12 rounded-xl border-2 border-[#ba1a1a] bg-[#ffdad6]/20 text-center text-2xl font-extrabold text-[#ba1a1a] outline-none transition-all focus:border-[#032448] focus:ring-4 focus:ring-[#ba1a1a]/20 sm:h-16 sm:w-16"
                      />
                    ))}
                  </div>
                </div>

                {/* انتهاء صلاحية الرمز وإعادة الإرسال */}
                <div className="space-y-3 rounded-xl border border-[#c4c6cf]/30 bg-[#f2f3fc]/70 p-4">

                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <span className="flex items-center gap-2 text-sm font-bold text-[#191c22]">
                      <TimerOff
                        size={18}
                        className="text-[#ba1a1a]"
                      />
                      انتهت صلاحية الرمز
                    </span>

                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={resending}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#c4c6cf]/40 bg-[#ecedf6] px-3 py-2 text-xs font-bold text-[#032448] transition-colors hover:bg-[#e1e2ea] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {resending ? (
                        <LoaderCircle
                          size={15}
                          className="animate-spin"
                        />
                      ) : (
                        <RefreshCw size={15} />
                      )}

                      {resending
                        ? 'جارٍ المعالجة...'
                        : 'إعادة إرسال رمز جديد'}
                    </button>

                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#c4c6cf]/30 pt-3">

                    <button
                      type="button"
                      onClick={() =>
                        setMessage(
                          'استلام الرمز عبر SMS غير متاح حاليًا في النسخة التجريبية.'
                        )
                      }
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#032448] transition-colors hover:underline"
                    >
                      <MessageSquare size={17} />
                      استلام الرمز عبر رسالة SMS
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setMessage(
                          'التواصل المباشر مع دعم التجار غير متاح حاليًا في النسخة التجريبية.'
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#835400] transition-colors hover:underline"
                    >
                      <Headset size={17} />
                      مساعدة فورية مع دعم التجار
                    </button>

                  </div>
                </div>

                {/* ضمان الأمان */}
                <div className="flex items-start gap-3 rounded-xl border border-[#c4c6cf]/40 bg-[#e6e8f0]/40 p-4">

                  <ShieldCheck
                    size={23}
                    className="mt-0.5 shrink-0 text-[#835400]"
                  />

                  <p className="text-sm leading-6 text-[#43474e]">
                    <strong className="font-bold text-[#191c22]">
                      حساب المتجر محمي بتشفير متقدم
                    </strong>{' '}
                    • التسويات المالية ومحفظة النقاط مضمونة
                    وفق بروتوكول تبادل التجاري 2026.
                  </p>

                </div>

                {/* رسائل الحالة */}
                {message && (
                  <div
                    role="status"
                    className="rounded-xl border border-[#c4c6cf] bg-[#f2f3fc] p-3 text-center text-sm leading-6 text-[#43474e]"
                  >
                    {message}
                  </div>
                )}

                {/* إعادة المحاولة */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#032448] px-4 text-base font-extrabold text-white shadow-md transition-all hover:bg-[#1f3a5f] hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <LoaderCircle
                        size={20}
                        className="animate-spin"
                      />
                      جاري التحقق من أمان المتجر...
                    </>
                  ) : (
                    <>
                      <RefreshCw size={20} />
                      إعادة المحاولة والتحقق من الرمز
                    </>
                  )}
                </button>

              </form>
            </div>
          </section>

          {/* مؤشرات الثقة */}
          <div className="mt-6 grid grid-cols-1 gap-3 text-center sm:grid-cols-3">

            <div className="flex items-center justify-center gap-2 rounded-xl border border-[#c4c6cf]/30 bg-white/70 p-3 text-xs font-bold text-[#43474e]">
              <ShieldCheck
                size={17}
                className="text-[#835400]"
              />
              حماية بيانات المتجر
            </div>

            <div className="flex items-center justify-center gap-2 rounded-xl border border-[#c4c6cf]/30 bg-white/70 p-3 text-xs font-bold text-[#43474e]">
              <Store
                size={17}
                className="text-[#032448]"
              />
              بوابة التجار المعتمدة
            </div>

            <div className="flex items-center justify-center gap-2 rounded-xl border border-[#c4c6cf]/30 bg-white/70 p-3 text-xs font-bold text-[#43474e]">
              <CheckCircle2
                size={17}
                className="text-emerald-700"
              />
              التحقق من الحساب
            </div>

          </div>
        </div>
      </main>
    </MainLayout>
  );
}