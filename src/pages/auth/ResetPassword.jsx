import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  // تحديد نوع المستخدم من المسار
  const isMerchant = location.pathname.startsWith('/merchant/');
  const userType = isMerchant ? 'merchant' : 'customer';

  // بيانات النموذج
  const [phone, setPhone] = useState('');
  const [otpMethod, setOtpMethod] = useState('whatsapp');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // التحقق من رقم الجوال الفلسطيني
  const validatePhone = (value) => {
    const cleanedPhone = value.replace(/[\s-]/g, '');

    const localPhone =
      /^(059|056|97259|97256|\+97059|\+97056)\d{6}$/;

    return localPhone.test(cleanedPhone);
  };

  // إرسال طلب استعادة كلمة المرور
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!phone.trim()) {
      setError('يرجى إدخال رقم الجوال الفلسطيني.');
      return;
    }

    if (!validatePhone(phone)) {
      setError('يرجى إدخال رقم جوال فلسطيني صحيح.');
      return;
    }

    /*
      الواجهة Frontend فقط.
      إرسال OTP الحقيقي يحتاج إلى Backend.
    */
    setIsSubmitting(true);

    window.alert(
      `تم التحقق من شكل رقم الجوال.\nنوع الحساب: ${
        isMerchant ? 'تاجر' : 'متسوق'
      }\nطريقة الاستلام: ${
        otpMethod === 'whatsapp' ? 'واتساب' : 'SMS'
      }\nإرسال رمز التحقق الفعلي يحتاج إلى ربط Backend.`
    );

    setIsSubmitting(false);
  };

  // تحديث رقم الجوال
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setError('');
  };

  // العودة إلى تسجيل الدخول المناسب
  const handleBackToLogin = () => {
    if (isMerchant) {
      navigate('/merchant/login');
      return;
    }

    navigate('/customer/login');
  };

  return (
    <AuthLayout role={userType}>
      <main
        dir="rtl"
        className="flex flex-1 items-center justify-center bg-[#f6f3ec] px-3 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
      >
        <section className="relative w-full max-w-[690px] overflow-hidden rounded-2xl border border-[#c4c6cf]/50 bg-white shadow-sm sm:rounded-[22px]">

          {/* الشريط المتدرج */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-l from-[#032448] via-[#1f7a6e] to-[#feb64e]" />

          <div className="px-4 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10 md:px-12 md:pb-10">

            {/* العنوان والوصف */}
            <div className="mb-7 text-right sm:mb-8">
              <h1 className="mb-3 text-2xl font-black leading-tight text-[#032448] sm:text-[28px]">
                استعادة كلمة المرور
                <span className="mt-2 block text-base font-bold text-[#1f7a6e] sm:text-lg">
                  {isMerchant
                    ? 'حساب التاجر'
                    : 'حساب المتسوق'}
                </span>
              </h1>

              <p className="text-sm leading-7 text-[#43474e] sm:text-base">
                {isMerchant
                  ? 'أدخل رقم الجوال المرتبط بحساب متجرك لاستعادة إمكانية الدخول إلى لوحة التاجر.'
                  : 'أدخل رقم الجوال المرتبط بحسابك لاستعادة إمكانية الدخول إلى حساب المتسوق.'}
                {' '}
                سنرسل لك رمز تحقق (OTP) بعد ربط الخدمة بالـ Backend.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* رقم الجوال */}
              <div>
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <label
                    htmlFor="phone-input"
                    className="text-sm font-bold text-[#191c22]"
                  >
                    رقم الجوال الفلسطيني
                  </label>

                  <span className="text-xs text-[#74777f]">
                    يدعم جوال (059) وأوريدو (056)
                  </span>
                </div>

                <div
                  dir="ltr"
                  className={`flex min-h-12 w-full overflow-hidden rounded-xl border bg-white transition focus-within:ring-2 ${
                    error
                      ? 'border-red-500 focus-within:ring-red-100'
                      : 'border-[#c4c6cf] focus-within:border-[#032448] focus-within:ring-[#032448]/10'
                  }`}
                >
                  <input
                    id="phone-input"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel-national"
                    placeholder="59X XXX XXX"
                    value={phone}
                    onChange={handlePhoneChange}
                    aria-invalid={Boolean(error)}
                    aria-describedby={
                      error ? 'phone-error' : undefined
                    }
                    className="min-w-0 flex-1 border-0 bg-transparent px-3 py-3 text-left font-mono text-base text-[#191c22] outline-none placeholder:text-[#a3a6ae] focus:ring-0 sm:px-4"
                  />

                  <div className="flex shrink-0 items-center gap-1 border-r border-[#c4c6cf]/60 bg-[#f2f3fc]/70 px-2 text-xs font-semibold text-[#032448] sm:gap-2 sm:px-4 sm:text-sm">
                    <span className="text-base" aria-hidden="true">
                      🇵🇸
                    </span>

                    <span className="whitespace-nowrap">
                      +970 / +972
                    </span>
                  </div>
                </div>

                {error && (
                  <p
                    id="phone-error"
                    role="alert"
                    className="mt-2 text-sm text-red-600"
                  >
                    {error}
                  </p>
                )}
              </div>

              {/* طريقة استلام رمز التحقق */}
              <fieldset>
                <legend className="mb-3 text-sm font-bold text-[#191c22]">
                  طريقة استلام رمز التحقق (OTP)
                </legend>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {/* واتساب */}
                  <label
                    className={`relative flex min-h-[118px] cursor-pointer flex-col rounded-xl border-2 p-4 pb-8 transition-all duration-200 ${
                      otpMethod === 'whatsapp'
                        ? 'border-[#032448] bg-[#032448]/[0.04]'
                        : 'border-[#c4c6cf] bg-white hover:border-[#032448]/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="otp_method"
                      value="whatsapp"
                      checked={otpMethod === 'whatsapp'}
                      onChange={() => setOtpMethod('whatsapp')}
                      className="sr-only"
                    />

                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#032448]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-5 w-5 text-[#2e9e6b]"
                          aria-hidden="true"
                        >
                          <path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.3L3 20l1.2-5.2A8.4 8.4 0 1 1 21 11.5Z" />
                          <path d="M8.5 8.5c.4 2.2 2.2 4 4.4 4.4" />
                        </svg>

                        <span>واتساب مباشر</span>
                      </div>

                      <span className="rounded-full bg-[#feb64e] px-2 py-1 text-[10px] font-bold text-[#714800]">
                        موصى به ⚡
                      </span>
                    </div>

                    <p className="text-xs leading-6 text-[#43474e]">
                      {isMerchant
                        ? 'استعادة الوصول إلى حساب متجرك عبر رقم الجوال المسجل.'
                        : 'استعادة الوصول إلى حسابك عبر رقم الجوال المسجل.'}
                    </p>

                    <span
                      className={`absolute bottom-3 left-3 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                        otpMethod === 'whatsapp'
                          ? 'border-[#032448]'
                          : 'border-[#74777f]'
                      }`}
                    >
                      {otpMethod === 'whatsapp' && (
                        <span className="h-2 w-2 rounded-full bg-[#032448]" />
                      )}
                    </span>
                  </label>

                  {/* الرسائل النصية */}
                  <label
                    className={`relative flex min-h-[118px] cursor-pointer flex-col rounded-xl border-2 p-4 pb-8 transition-all duration-200 ${
                      otpMethod === 'sms'
                        ? 'border-[#032448] bg-[#032448]/[0.04]'
                        : 'border-[#c4c6cf] bg-white hover:border-[#032448]/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="otp_method"
                      value="sms"
                      checked={otpMethod === 'sms'}
                      onChange={() => setOtpMethod('sms')}
                      className="sr-only"
                    />

                    <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[#191c22]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5 text-[#74777f]"
                        aria-hidden="true"
                      >
                        <rect x="3" y="4" width="18" height="15" rx="2" />
                        <path d="m3 6 9 7 9-7" />
                      </svg>

                      <span>رسالة نصية قصيرة SMS</span>
                    </div>

                    <p className="text-xs leading-6 text-[#43474e]">
                      إرسال الرمز عبر شبكة الاتصالات الفلسطينية المعتمدة.
                    </p>

                    <span
                      className={`absolute bottom-3 left-3 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                        otpMethod === 'sms'
                          ? 'border-[#032448]'
                          : 'border-[#74777f]'
                      }`}
                    >
                      {otpMethod === 'sms' && (
                        <span className="h-2 w-2 rounded-full bg-[#032448]" />
                      )}
                    </span>
                  </label>
                </div>
              </fieldset>

              {/* زر إرسال الرمز */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-l from-[#032448] to-[#1f7a6e] px-4 py-3 text-sm font-bold text-white shadow-md transition hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
              >
                <span>
                  {isSubmitting
                    ? 'جارٍ المعالجة...'
                    : 'إرسال رمز التحقق (OTP)'}
                </span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M19 12H5" />
                  <path d="m12 19-7-7 7-7" />
                </svg>
              </button>

              {/* روابط أسفل النموذج */}
              <div className="flex flex-col gap-4 border-t border-[#c4c6cf]/30 pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={handleBackToLogin}
                  className="inline-flex items-center justify-center gap-2 text-center font-semibold text-[#032448] transition hover:text-[#1f7a6e] sm:justify-start"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>

                  <span>تذكرت كلمة المرور؟ تسجيل الدخول</span>
                </button>

                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-center text-[#43474e] transition hover:text-[#032448] sm:justify-start"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 text-[#2e9e6b]"
                    aria-hidden="true"
                  >
                    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" />
                    <path d="M9 8.5c.3 2 2 3.7 4 4" />
                  </svg>

                  <span>مساعدة الدعم الفني 24/7</span>
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>
    </AuthLayout>
  );
}

export default ResetPassword;