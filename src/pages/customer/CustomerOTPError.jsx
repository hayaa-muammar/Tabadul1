import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  LockKeyhole,
  Pencil,
  ShieldCheck,
  CircleAlert,
  TimerOff,
  RefreshCw,
  MessageSquare,
  Headset,
  LoaderCircle,
  CheckCircle2,
} from 'lucide-react';

export default function CustomerOTPError() {
  const navigate = useNavigate();

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

    if (digit && index < 3) {
      document.getElementById(`customer-otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`customer-otp-${index - 1}`)?.focus();
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

    const focusIndex = Math.min(pastedCode.length, 3);

    document
      .getElementById(`customer-otp-${focusIndex}`)
      ?.focus();
  };

  const handleRetry = (event) => {
    event.preventDefault();

    if (otp.some((digit) => !digit)) {
      setMessage('يرجى إدخال رمز التحقق المكوّن من 4 أرقام.');
      return;
    }

    setLoading(true);
    setMessage('');

    // واجهة تجريبية فقط؛ التحقق الحقيقي يحتاج إلى Backend.
    setTimeout(() => {
      setLoading(false);
      setMessage(
        'تعذّر التحقق من الرمز. يرجى المحاولة مجددًا.'
      );
    }, 800);
  };

  const handleResend = () => {
    if (resending) return;

    setResending(true);
    setMessage('');

    // إعادة الإرسال غير مفعّلة فعليًا دون Backend.
    setTimeout(() => {
      setResending(false);
      setMessage(
        'إعادة إرسال الرمز غير متاحة حاليًا في النسخة التجريبية.'
      );
    }, 500);
  };

  const handleEditPhone = () => {
    navigate('/customer/verify-otp');
  };

  return (
    <div
      dir="rtl"
      lang="ar"
      className="min-h-screen bg-[#f9f9ff] text-[#191c22]"
    >
      <main className="flex min-h-[75vh] flex-grow items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-[620px]">

          {/* الشريط العلوي */}
          <div className="mb-5 flex items-center justify-between gap-3">
            <Link
              to="/customer/verify-otp"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#032448] transition-colors hover:text-[#465f86]"
            >
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />

              <span>الرجوع للتحقق من الحساب</span>
            </Link>

            <span className="shrink-0 rounded-full bg-[#e6e8f0] px-3 py-1.5 text-xs font-bold text-[#43474e]">
              التحقق من الحساب
            </span>
          </div>

          {/* البطاقة الرئيسية */}
          <section className="relative overflow-hidden rounded-2xl border border-[#c4c6cf]/60 bg-white shadow-sm">

            <div className="space-y-6 p-6 sm:p-9">

              {/* العنوان */}
              <div className="space-y-3 text-center">

                <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#032448] text-white shadow-sm">
                  <LockKeyhole size={29} />
                </div>

                <h1 className="text-2xl font-extrabold text-[#032448]">
                  تأكيد حساب المتسوق
                </h1>

                <p className="mx-auto max-w-md text-sm leading-7 text-[#43474e] sm:text-base">
                  أدخلي رمز التحقق المرسل إلى رقم هاتفك
                  لإكمال التحقق من حسابك على منصة تبادل.
                </p>

                {/* رقم الهاتف */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">

                  <span
                    dir="ltr"
                    className="text-sm font-bold text-[#191c22]"
                  >
                    رقم هاتفك المسجل
                  </span>

                  <button
                    type="button"
                    onClick={handleEditPhone}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#835400] hover:underline"
                  >
                    <Pencil size={14} />
                    تعديل الرقم
                  </button>

                </div>
              </div>

              {/* رسالة الخطأ */}
              <div className="flex items-start gap-3 rounded-xl border border-[#ba1a1a]/30 bg-[#ffdad6]/30 p-4 text-right">

                <CircleAlert
                  size={22}
                  className="mt-0.5 shrink-0 text-[#ba1a1a]"
                />

                <div className="space-y-1">

                  <h2 className="text-sm font-extrabold text-[#93000a]">
                    رمز التحقق غير صحيح
                  </h2>

                  <p className="text-sm leading-6 text-[#93000a]">
                    الرمز الذي أدخلتِه غير صحيح أو انتهت
                    صلاحيته. تأكدي من الرمز وحاولي مرة أخرى.
                  </p>

                </div>
              </div>

              {/* حقول OTP */}
              <form
                onSubmit={handleRetry}
                className="space-y-6"
              >

                <div>
                  <label className="mb-4 block text-center text-sm font-bold text-[#43474e]">
                    أعيدي إدخال رمز التحقق المكوّن من 4 أرقام
                  </label>

                  <div
                    dir="ltr"
                    className="flex items-center justify-center gap-3 sm:gap-4"
                  >
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`customer-otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        autoComplete={
                          index === 0 ? 'one-time-code' : 'off'
                        }
                        maxLength={1}
                        value={digit}
                        aria-label={`الخانة ${index + 1}`}
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
                        className="h-14 w-12 rounded-xl border-2 border-[#ba1a1a] bg-[#ffdad6]/20 text-center text-2xl font-extrabold text-[#ba1a1a] outline-none transition-all focus:border-[#032448] focus:ring-4 focus:ring-[#032448]/10 sm:h-16 sm:w-16"
                      />
                    ))}
                  </div>

                  <p className="mt-3 text-center text-xs text-[#74777f]">
                    يمكنك تعديل الأرقام وإعادة المحاولة.
                  </p>
                </div>

                {/* رسالة تفاعلية */}
                {message && (
                  <div
                    role="status"
                    className="rounded-xl border border-[#c4c6cf] bg-[#f2f3fc] p-3 text-center text-sm leading-6 text-[#43474e]"
                  >
                    {message}
                  </div>
                )}

                {/* خيارات إعادة الإرسال */}
                <div className="space-y-3 rounded-xl border border-[#c4c6cf]/40 bg-[#f2f3fc]/70 p-4">

                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <span className="flex items-center gap-2 text-sm font-bold text-[#43474e]">
                      <TimerOff
                        size={18}
                        className="text-[#ba1a1a]"
                      />
                      هل انتهت صلاحية الرمز؟
                    </span>

                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={resending}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#c4c6cf]/50 bg-[#ecedf6] px-3 py-2 text-xs font-bold text-[#032448] transition-colors hover:bg-[#e1e2ea] disabled:cursor-not-allowed disabled:opacity-60"
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

                  <div className="border-t border-[#c4c6cf]/40 pt-3">

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

                  </div>

                </div>

                {/* تنبيه أمان الحساب */}
                <div className="flex items-start gap-3 rounded-xl border border-[#c4c6cf]/40 bg-[#e6e8f0]/40 p-4">

                  <ShieldCheck
                    size={23}
                    className="mt-0.5 shrink-0 text-[#835400]"
                  />

                  <p className="text-sm leading-6 text-[#43474e]">
                    <strong className="text-[#191c22]">
                      حافظي على أمان حسابك.
                    </strong>{' '}
                    لا تشاركي رمز التحقق مع أي شخص آخر.
                  </p>

                </div>

                {/* زر إعادة المحاولة */}
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
                      جارٍ التحقق...
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

          {/* مساعدة المتسوق */}
          <div className="mt-5 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">

            <Headset
              size={19}
              className="text-[#835400]"
            />

            <p className="text-sm text-[#43474e]">
              واجهتِ مشكلة في التحقق؟
            </p>

            <button
              type="button"
              onClick={() =>
                setMessage(
                  'التواصل المباشر مع الدعم غير متاح حاليًا في النسخة التجريبية.'
                )
              }
              className="text-sm font-extrabold text-[#032448] hover:underline"
            >
              تواصلي مع دعم المتسوقين
            </button>

          </div>

          {/* مؤشر الحماية */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#74777f]">
            <CheckCircle2 size={16} className="text-[#00804a]" />
            حماية بيانات حسابك أولوية لدينا
          </div>

        </div>
      </main>
    </div>
  );
}