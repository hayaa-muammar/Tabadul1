import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import {
  Gift,
  Percent,
  ArrowLeft,
  ArrowRight,
  Store,
  Wallet,
  MessageCircle,
  MessageSquare,
  ShieldCheck,
  ArrowLeftRight,
  Sparkles,
} from 'lucide-react';

import AuthLayout from '../../layouts/AuthLayout';

function CustomerLogin() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState('');
  const [otpMethod, setOtpMethod] = useState('whatsapp');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // تنسيق رقم الجوال
  const handlePhoneChange = (event) => {
    let value = event.target.value.replace(/\D/g, '');
    setError('');

    // الحد الأقصى 10 أرقام
    value = value.slice(0, 10);

    // إضافة مسافات لتحسين القراءة
    if (value.length > 6) {
      value =
        value.slice(0, 3) +
        ' ' +
        value.slice(3, 6) +
        ' ' +
        value.slice(6);
    } else if (value.length > 3) {
      value = value.slice(0, 3) + ' ' + value.slice(3);
    }

    setPhone(value);
  };

  // الانتقال إلى صفحة التحقق OTP
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    // إزالة المسافات والرموز من الرقم
    const cleanPhone = phone.replace(/[\s-]/g, '');
    const validPhone = /^(059|056)\d{7}$/.test(cleanPhone);

    if (!cleanPhone) {
      setError('يرجى إدخال رقم الجوال للمتابعة.');
      return;
    }

    if (!validPhone) {
      setError('يرجى إدخال رقم جوال فلسطيني صحيح يبدأ بـ 059 أو 056 (9 أرقام).');
      return;
    }

    // حفظ البيانات لاستخدامها في صفحة التحقق
    sessionStorage.setItem('customerPhone', cleanPhone);
    sessionStorage.setItem('customerOtpMethod', otpMethod);
    sessionStorage.setItem('accountRole', 'customer');

    setIsSubmitting(true);

    // الانتقال مباشرة إلى واجهة OTP
    navigate('/customer/verify-otp');
  };

  return (
    <AuthLayout role="customer">
      <div
        dir="rtl"
        className="flex min-h-screen w-full flex-col bg-[#f9f9ff] text-[#191c22]"
      >
        {/* Main Content */}
        <main className="flex flex-1 items-center justify-center px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
          <div className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-[#c4c6cf] bg-white shadow-sm lg:grid-cols-12">

            {/* Promotional Panel */}
            <section className="relative flex flex-col justify-between overflow-hidden bg-[#1f3a5f] p-6 text-white sm:p-8 lg:col-span-5 lg:p-10">

              {/* Background Decorations */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#feb64e]/15 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#71dba2]/10 blur-3xl"
              />

              <div className="relative z-10">

                {/* Brand */}
                <div className="mb-8 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#032448]">
                    <Sparkles size={26} />
                  </div>

                  <div>
                    <p className="font-bold">منصة تبادل</p>
                    <p className="mt-1 text-xs text-[#ffddb5]">
                      برنامج ولاء متاجر غزة 2026
                    </p>
                  </div>
                </div>

                {/* Welcome Gift */}
                <div className="mb-7 rounded-2xl border border-[#ffddb5]/40 bg-white/10 p-5">

                  <div className="mb-4 flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#feb64e] text-[#2a1800]">
                      <Gift size={21} />
                    </span>

                    <span className="text-sm font-bold text-[#ffddb5]">
                      هدية الانضمام الفورية
                    </span>
                  </div>

                  <div className="mb-2 flex flex-wrap items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-[#ffb956] sm:text-5xl">
                      +200
                    </span>

                    <span className="text-lg font-bold">
                      نقطة مجانية
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-slate-200">
                    مكافأة ترحيبية تُضاف إلى رصيدك بعد تأكيد رقم هاتفك
                    للمرة الأولى.
                  </p>
                </div>

                {/* Loyalty Benefits */}
                <div className="space-y-6">

                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#004328] text-[#8df8bd]">
                      <Percent size={20} />
                    </span>

                    <div>
                      <h2 className="text-sm font-bold">
                        كاش باك 5% على كل عملية شراء
                      </h2>

                      <p className="mt-1 text-xs leading-6 text-slate-300">
                        اكسب نقاط ولاء عند التسوق لدى المتاجر المشاركة.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#004328] text-[#8df8bd]">
                      <ArrowLeftRight size={20} />
                    </span>

                    <div>
                      <h2 className="text-sm font-bold">
                        استبدال بين المتاجر المشتركة
                      </h2>

                      <p className="mt-1 text-xs leading-6 text-slate-300">
                        اجمع نقاطك واستفد منها لدى المتاجر المشاركة
                        في المنصة.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#004328] text-[#8df8bd]">
                      <Wallet size={20} />
                    </span>

                    <div>
                      <h2 className="text-sm font-bold">
                        محفظة ولاء موحدة
                      </h2>

                      <p className="mt-1 text-xs leading-6 text-slate-300">
                        تابع رصيد نقاطك من مكان واحد.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Trust Message */}
              <div className="relative z-10 mt-8 flex items-start gap-3 border-t border-white/15 pt-6">
                <ShieldCheck
                  size={24}
                  className="shrink-0 text-[#ffddb5]"
                />

                <p className="text-xs leading-6 text-slate-200">
                  منصة ولاء تربط المتسوقين بالمتاجر المشاركة في قطاع غزة.
                </p>
              </div>
            </section>

            {/* Customer Form */}
            <section className="flex min-w-0 flex-col justify-between bg-white p-5 sm:p-8 md:p-10 lg:col-span-7 lg:p-12">

              <div>

                {/* Top Bar */}
                <div className="mb-8 flex items-center justify-between gap-3">

                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#f2f3fc] px-3 py-2 text-xs font-semibold text-[#43474e] transition hover:bg-[#e6e8f0]"
                  >
                    <ArrowRight size={16} />
                    العودة للرئيسية
                  </Link>

                  <span className="rounded-full bg-[#e6e8f0] px-3 py-1.5 text-xs font-semibold text-[#43474e]">
                    بوابة المتسوقين
                  </span>
                </div>

                {/* Title */}
                <div className="mb-8">
                  <h1 className="mb-3 text-2xl font-extrabold leading-relaxed text-[#032448] sm:text-3xl">
                    تسجيل دخول المتسوق — منصة تبادل
                  </h1>

                  <p className="text-sm leading-7 text-[#43474e]">
                    أدخل رقم هاتفك لتسجيل الدخول أو إنشاء حساب متسوق
                    جديد والاستفادة من نقاط الولاء.
                  </p>
                </div>

                {/* Phone Form */}
                <form onSubmit={handleSubmit} className="space-y-7">

                  {error && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs font-bold text-red-700"
                    >
                      {error}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="customer-phone"
                      className="mb-2 block text-sm font-bold text-[#191c22]"
                    >
                      رقم الهاتف المحمول (فلسطين)
                    </label>

                    <div className="flex min-w-0 overflow-hidden rounded-xl border border-[#c4c6cf] transition focus-within:border-[#032448] focus-within:ring-2 focus-within:ring-[#032448]/10">

                      {/* Country Code */}
                      <div className="flex shrink-0 items-center gap-1.5 border-l border-[#c4c6cf] bg-[#f2f3fc] px-2.5 sm:px-3.5">
                        <span>🇵🇸</span>

                        <span
                          dir="ltr"
                          className="text-sm font-bold text-[#032448]"
                        >
                          +970
                        </span>

                        <span className="hidden text-xs text-[#74777f] sm:inline">
                          / +972
                        </span>
                      </div>

                      {/* Phone Input */}
                      <input
                        id="customer-phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        dir="ltr"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="059 123 4567"
                        required
                        className="h-12 min-w-0 flex-1 bg-white px-3 text-left text-base font-semibold tracking-wider text-[#032448] outline-none placeholder:text-[#c4c6cf] sm:px-4"
                      />
                    </div>

                    <p className="mt-2 text-xs leading-6 text-[#43474e]">
                      يقبل أرقام شبكتي جوال 059 وأوريدو 056 بقطاع غزة.
                    </p>
                  </div>

                  {/* OTP Method */}
                  <fieldset>
                    <legend className="mb-3 text-sm font-bold text-[#191c22]">
                      طريقة استلام رمز التحقق (OTP)
                    </legend>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                      {/* WhatsApp */}
                      <label
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border-2 p-3 transition sm:p-3.5 ${
                          otpMethod === 'whatsapp'
                            ? 'border-[#032448] bg-[#032448]/5'
                            : 'border-[#c4c6cf] bg-white hover:bg-[#f9f9ff]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="otp-method"
                          value="whatsapp"
                          checked={otpMethod === 'whatsapp'}
                          onChange={() => setOtpMethod('whatsapp')}
                          className="h-4 w-4 shrink-0 accent-[#032448]"
                        />

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8df8bd] text-[#002112]">
                          <MessageCircle size={20} />
                        </span>

                        <span className="min-w-0">
                          <span className="flex flex-wrap items-center gap-1.5">
                            <span className="text-sm font-bold text-[#032448]">
                              عبر واتساب
                            </span>

                            <span className="rounded-full bg-[#71dba2] px-1.5 py-0.5 text-[10px] font-bold text-[#002112]">
                              موصى به
                            </span>
                          </span>

                          <span className="mt-1 block text-xs leading-5 text-[#43474e]">
                            طريقة سريعة لاستلام الرمز
                          </span>
                        </span>
                      </label>

                      {/* SMS */}
                      <label
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border-2 p-3 transition sm:p-3.5 ${
                          otpMethod === 'sms'
                            ? 'border-[#032448] bg-[#032448]/5'
                            : 'border-[#c4c6cf] bg-white hover:bg-[#f9f9ff]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="otp-method"
                          value="sms"
                          checked={otpMethod === 'sms'}
                          onChange={() => setOtpMethod('sms')}
                          className="h-4 w-4 shrink-0 accent-[#032448]"
                        />

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e6e8f0] text-[#43474e]">
                          <MessageSquare size={20} />
                        </span>

                        <span className="min-w-0">
                          <span className="block text-sm font-bold text-[#191c22]">
                            رسالة نصية SMS
                          </span>

                          <span className="mt-1 block text-xs leading-5 text-[#43474e]">
                            استلام رمز التحقق برسالة نصية
                          </span>
                        </span>
                      </label>

                    </div>
                  </fieldset>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#032448] px-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#1f3a5f] active:scale-[0.99] disabled:cursor-wait disabled:opacity-70 sm:text-base"
                  >
                    <span>
                      {isSubmitting
                        ? 'جارٍ المتابعة...'
                        : 'إرسال رمز التحقق ومتابعة'}
                    </span>

                    <ArrowLeft size={20} />
                  </button>

                  {/* Demo Access for Evaluators */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        sessionStorage.setItem('customerPhone', '0599123456');
                        sessionStorage.setItem('accountRole', 'customer');
                        navigate('/customer/home');
                      }}
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#032448]/30 bg-[#f4f7fb] px-4 text-xs font-bold text-[#032448] transition hover:bg-[#e8eff8] sm:text-sm"
                    >
                      <Sparkles size={18} className="text-[#a17b32]" />
                      <span>استعراض النسخة التجريبية (دخول مباشر كمتسوق)</span>
                    </button>
                  </div>

                  {/* Register and Password Reset Links */}
                  <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs font-semibold text-[#43474e] sm:flex-row">
                    <Link
                      to="/customer/register"
                      className="text-[#032448] transition hover:underline"
                    >
                      ليس لديك حساب؟ إنشاء حساب جديد
                    </Link>

                    <Link
                      to="/customer/reset-password"
                      className="text-slate-500 transition hover:text-[#032448] hover:underline"
                    >
                      نسيت كلمة المرور؟
                    </Link>
                  </div>

                  {/* Terms */}
                  <p className="text-center text-xs leading-7 text-[#43474e]">
                    بالمتابعة، أنت توافق على{' '}

                    <Link
                      to="/terms"
                      className="font-semibold text-[#032448] hover:underline"
                    >
                      شروط الاستخدام
                    </Link>

                    {' '}و{' '}

                    <Link
                      to="/privacy"
                      className="font-semibold text-[#032448] hover:underline"
                    >
                      سياسة الخصوصية
                    </Link>

                    {' '}الخاصة بمنصة تبادل.
                  </p>

                </form>
              </div>

              {/* Merchant Gateway */}
              <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-b-2xl border-t border-[#c4c6cf] bg-[#f2f3fc] p-4 sm:flex-row sm:p-5">

                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ffddb5] text-[#835400]">
                    <Store size={21} />
                  </span>

                  <div>
                    <p className="text-sm font-bold text-[#191c22]">
                      أنت صاحب متجر أو صفحة بيع؟
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#43474e]">
                      انضم لشبكة التجار ووسّع قاعدة عملائك.
                    </p>
                  </div>
                </div>

                <Link
                  to="/merchant/register"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#c4c6cf] bg-white px-4 py-2.5 text-sm font-bold text-[#032448] transition hover:bg-[#f9f9ff] hover:shadow-sm"
                >
                  دخول بوابة التجار
                  <ArrowLeft size={16} />
                </Link>

              </div>
            </section>
          </div>
        </main>
      </div>
    </AuthLayout>
  );
}

export default CustomerLogin;