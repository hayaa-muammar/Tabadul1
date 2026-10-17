import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import {
  Gift,
  BadgeCheck,
  UserRound,
  Info,
  MessageCircle,
  MessageSquareText,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowLeft,
  Percent,
  ArrowLeftRight,
  ShieldCheck,
  MapPin,
} from 'lucide-react';

import AuthLayout from '../../layouts/AuthLayout';

const inputClass =
  'w-full h-12 pr-11 pl-10 rounded-xl border border-[#C4C6CF] bg-white text-[#191C22] text-sm focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all outline-none';

function CustomerRegister() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [otpMethod, setOtpMethod] = useState('whatsapp');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    const normalizedPhone = phone.replace(/[\s-]/g, '');
    const validPhone = /^(059|056)\d{7}$/.test(normalizedPhone);

    if (!fullName.trim()) {
      setError('يرجى إدخال الاسم الكامل.');
      return;
    }

    if (!validPhone) {
      setError(
        'يرجى إدخال رقم جوال فلسطيني صحيح يبدأ بـ 059 أو 056.'
      );
      return;
    }

    if (password.length < 8) {
      setError('يجب أن تتكون كلمة المرور من 8 أحرف أو أرقام على الأقل.');
      return;
    }

    if (password !== confirmPassword) {
      setError('كلمتا المرور غير متطابقتين.');
      return;
    }

    if (!acceptedTerms) {
      setError('يجب الموافقة على شروط الاستخدام وسياسة الخصوصية.');
      return;
    }

    sessionStorage.setItem('customerPhone', normalizedPhone);
    sessionStorage.setItem('customerFullName', fullName.trim());
    sessionStorage.setItem('customerOtpChannel', otpMethod);

    navigate('/customer/verify-otp');
  };

  return (
    <AuthLayout role="customer">
      <main
        dir="rtl"
        className="min-h-screen bg-[#F6F3EC] px-4 py-8 text-[#191C22] selection:bg-[#E9B44C]/30 selection:text-[#12302B] sm:px-6 md:px-12 md:py-14"
        style={{
          fontFamily: '"Tajawal", "IBM Plex Sans Arabic", sans-serif',
        }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* بطاقة إنشاء الحساب */}
          <section className="relative overflow-hidden rounded-2xl border border-[#12302B]/10 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8 md:p-10 lg:col-span-7">
            {/* هدية الترحيب */}
            <div className="relative mb-7 flex items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-[#12302B] to-[#1F7A6E] p-4 text-white shadow-md sm:p-5">
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#E9B44C]/15 blur-xl" />

              <div className="relative z-10 flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9B44C] text-[#12302B] shadow-sm">
                  <Gift size={24} strokeWidth={2} />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-wide text-[#E9B44C]">
                    هدية ترحيبية فورية للمتسوقين
                  </p>

                  <h2 className="mt-0.5 text-lg font-bold leading-tight text-white">
                    200 نقطة (1 ₪) في محفظتك
                  </h2>
                </div>
              </div>

              <div className="hidden shrink-0 flex-col items-end pl-1 sm:flex">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white">
                  <BadgeCheck size={14} />
                  تفعيل فوري
                </span>
              </div>
            </div>

            {/* عنوان الصفحة */}
            <div className="mb-7">
              <h1 className="text-3xl font-bold tracking-tight text-[#12302B]">
                إنشاء حساب متسوق جديد
              </h1>

              <p className="mt-2 text-sm leading-relaxed text-[#43474E]">
                انضم لشبكة ولاء ومكافآت الأزياء والأحذية في غزة واكسب
                كاش باك 5% على كل طلب من متاجرك المفضلة.
              </p>
            </div>

            {/* نموذج التسجيل */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* الاسم الكامل */}
              <div>
                <label
                  className="mb-2 block text-xs font-bold text-[#12302B]"
                  htmlFor="full_name"
                >
                  الاسم الكامل (الثلاثي){' '}
                  <span className="text-red-600">*</span>
                </label>

                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#74777F]">
                    <UserRound size={20} />
                  </div>

                  <input
                    id="full_name"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder="مثال: يوسف أحمد حمدان"
                    required
                    className="h-12 w-full rounded-xl border border-[#C4C6CF] bg-white pl-4 pr-11 text-sm outline-none transition-all focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20"
                  />
                </div>
              </div>

              {/* رقم الجوال */}
              <div>
                <label
                  className="mb-2 block text-xs font-bold text-[#12302B]"
                  htmlFor="mobile_phone"
                >
                  رقم الجوال الفلسطيني{' '}
                  <span className="text-red-600">*</span>
                </label>

                <div className="flex" dir="ltr">
                  <div className="inline-flex shrink-0 items-center gap-1.5 rounded-l-xl border border-r-0 border-[#C4C6CF] bg-[#F2F3FC] px-3.5 text-sm">
                    <span className="text-lg">🇵🇸</span>
                    <span className="font-bold text-[#12302B]">+970</span>
                  </div>

                  <input
                    id="mobile_phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="059 123 4567"
                    required
                    className="h-12 min-w-0 w-full rounded-r-xl border border-[#C4C6CF] bg-white px-4 text-left text-sm tracking-wider outline-none transition-all focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20"
                  />
                </div>

                <p className="mt-1.5 flex items-center gap-1 text-xs text-[#74777F]">
                  <Info size={14} className="shrink-0" />
                  يدعم أرقام جوال (059xxxxxxx أو 056xxxxxxx)
                </p>
              </div>

              {/* طريقة استلام رمز التأكيد */}
              <fieldset>
                <legend className="mb-2.5 block text-xs font-bold text-[#12302B]">
                  طريقة استلام رمز التأكيد (OTP من 4 أرقام)
                </legend>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {/* واتساب */}
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-3.5 transition-all hover:shadow-sm ${
                      otpMethod === 'whatsapp'
                        ? 'border-[#1F7A6E] bg-[#1F7A6E]/5'
                        : 'border-[#C4C6CF] bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2E9E6B]/15 text-[#2E9E6B]">
                        <MessageCircle size={20} />
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#12302B]">
                            واتساب
                          </span>

                          <span className="rounded-full bg-[#2E9E6B] px-1.5 py-0.5 text-[10px] font-bold text-white">
                            فوري
                          </span>
                        </div>

                        <span className="text-xs text-[#74777F]">
                          توصيل سريع مضمون
                        </span>
                      </div>
                    </div>

                    <input
                      className="h-4 w-4 accent-[#1F7A6E]"
                      name="otp_channel"
                      type="radio"
                      value="whatsapp"
                      checked={otpMethod === 'whatsapp'}
                      onChange={() => setOtpMethod('whatsapp')}
                    />
                  </label>

                  {/* الرسائل النصية */}
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-3.5 transition-all hover:border-[#1F7A6E]/50 hover:bg-[#F2F3FC] ${
                      otpMethod === 'sms'
                        ? 'border-2 border-[#1F7A6E] bg-[#1F7A6E]/5'
                        : 'border-[#C4C6CF] bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E6E8F0] text-[#12302B]">
                        <MessageSquareText size={20} />
                      </div>

                      <div>
                        <span className="text-xs font-bold text-[#12302B]">
                          رسائل نصية SMS
                        </span>

                        <p className="text-xs text-[#74777F]">
                          عبر شبكة الاتصالات
                        </p>
                      </div>
                    </div>

                    <input
                      className="h-4 w-4 accent-[#1F7A6E]"
                      name="otp_channel"
                      type="radio"
                      value="sms"
                      checked={otpMethod === 'sms'}
                      onChange={() => setOtpMethod('sms')}
                    />
                  </label>
                </div>
              </fieldset>

              {/* حقول كلمة المرور */}
              <div className="grid grid-cols-1 gap-4 pt-1 sm:grid-cols-2">
                {/* كلمة المرور */}
                <div>
                  <label
                    className="mb-2 block text-xs font-bold text-[#12302B]"
                    htmlFor="password"
                  >
                    كلمة المرور <span className="text-red-600">*</span>
                  </label>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#74777F]">
                      <LockKeyhole size={20} />
                    </div>

                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="••••••••"
                      required
                      className={inputClass}
                    />

                    <button
                      aria-label={
                        showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'
                      }
                      className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#74777F] hover:text-[#12302B]"
                      onClick={() => setShowPassword((current) => !current)}
                      type="button"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* تأكيد كلمة المرور */}
                <div>
                  <label
                    className="mb-2 block text-xs font-bold text-[#12302B]"
                    htmlFor="password_confirmation"
                  >
                    تأكيد كلمة المرور{' '}
                    <span className="text-red-600">*</span>
                  </label>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#74777F]">
                      <LockKeyhole size={20} />
                    </div>

                    <input
                      id="password_confirmation"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      placeholder="••••••••"
                      required
                      className={inputClass}
                    />

                    <button
                      aria-label={
                        showConfirmPassword
                          ? 'إخفاء تأكيد كلمة المرور'
                          : 'إظهار تأكيد كلمة المرور'
                      }
                      className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#74777F] hover:text-[#12302B]"
                      onClick={() =>
                        setShowConfirmPassword((current) => !current)
                      }
                      type="button"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* الموافقة على الشروط */}
              <div className="pt-2">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(event) =>
                      setAcceptedTerms(event.target.checked)
                    }
                    required
                    className="mt-1 h-5 w-5 cursor-pointer rounded-lg border-[#C4C6CF] accent-[#1F7A6E]"
                  />

                  <span className="text-xs leading-snug text-[#191C22]">
                    أوافق على{' '}
                    <Link
                      to="/terms"
                      className="font-bold text-[#1F7A6E] underline hover:text-[#12302B]"
                    >
                      شروط الاستخدام
                    </Link>{' '}
                    و{' '}
                    <Link
                      to="/privacy"
                      className="font-bold text-[#1F7A6E] underline hover:text-[#12302B]"
                    >
                      سياسة الخصوصية
                    </Link>{' '}
                    الخاصة بشبكة مكافآت تبادل لعام 2026.
                  </span>
                </label>
              </div>

              {/* رسالة الخطأ */}
              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

              {/* زر إنشاء الحساب */}
              <div className="pt-3">
                <button
                  className="flex h-14 w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-gradient-to-l from-[#12302B] via-[#1F7A6E] to-[#12302B] text-lg font-bold text-white shadow-lg shadow-[#1F7A6E]/20 transition-all duration-200 hover:brightness-110 active:scale-[0.99]"
                  type="submit"
                >
                  <span>إنشاء الحساب وتفعيل الهدية</span>
                  <ArrowLeft size={22} />
                </button>
              </div>

              {/* رابط تسجيل الدخول */}
              <div className="border-t border-[#C4C6CF]/30 pt-4 text-center">
                <p className="text-sm text-[#43474E]">
                  لديك حساب بالفعل في تبادل؟

                  <button
                    className="mr-1 inline-flex items-center gap-1 font-bold text-[#1F7A6E] transition-colors hover:text-[#12302B]"
                    type="button"
                    onClick={() => navigate('/customer/login')}
                  >
                    <span>تسجيل الدخول</span>
                    <ArrowLeft size={16} />
                  </button>
                </p>
              </div>

              {/* وضع المعاينة التجريبي للمقيّمين */}
              <div className="mt-4 rounded-xl border border-dashed border-[#1f7a6e]/40 bg-[#1f7a6e]/5 p-3.5 text-center">
                <p className="mb-2 text-xs text-[#12302b]">
                  ترغب في تقييم تجربة المتسوق فوراً دون المرور بخطوات التسجيل؟
                </p>
                <button
                  type="button"
                  onClick={() => navigate('/customer/home')}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#12302b] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#1a443d]"
                >
                  استعراض النسخة التجريبية كمتسوق (بدون تسجيل) ⚡
                </button>
              </div>
            </form>
          </section>

          {/* القسم الجانبي */}
          <aside className="space-y-6 lg:col-span-5">
            {/* تعريف الشبكة */}
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#12302B] to-[#1F7A6E] p-6 text-white shadow-sm sm:p-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-[#E9B44C] px-2.5 py-1 text-xs font-extrabold text-[#12302B]">
                  الشبكة الموحدة
                </span>

                <span className="text-xs text-white/80">
                  قطاع غزة • 2026
                </span>
              </div>

              <h2 className="mb-2 text-xl font-bold leading-snug text-white">
                تسوق بذكاء واجمع مكافآتك في مكان واحد
              </h2>

              <p className="text-sm leading-relaxed text-white/85">
                لا داعي لبطاقات الولاء المشتتة. بطاقة رقمية واحدة تعمل
                بسلاسة في أرقى معارض الأزياء، الأحذية، ومحلات الموضة المحلية.
              </p>
            </section>

            {/* الفائدة الأولى */}
            <article className="flex items-start gap-4 rounded-2xl border border-[#12302B]/10 bg-white p-5 shadow-sm transition-all hover:border-[#1F7A6E]/40">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2E9E6B]/10 text-[#2E9E6B]">
                <Percent size={26} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-[#12302B]">
                    كاش باك 5% مستمر
                  </h3>

                  <span className="rounded-full bg-[#2E9E6B]/15 px-2 py-0.5 text-[11px] font-bold text-[#2E9E6B]">
                    دائم
                  </span>
                </div>

                <p className="mt-1 text-sm leading-relaxed text-[#43474E]">
                  اكسب 5% نقاط كاش باك على كافة مشتريات الملابس الرجالية
                  والنسائية، ملابس الأطفال، والأحذية في جميع المتاجر الشريكة.
                </p>
              </div>
            </article>

            {/* الفائدة الثانية */}
            <article className="flex items-start gap-4 rounded-2xl border border-[#12302B]/10 bg-white p-5 shadow-sm transition-all hover:border-[#1F7A6E]/40">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E9B44C]/15 text-[#835400]">
                <ArrowLeftRight size={26} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-[#12302B]">
                    رصيد موحد ومتنقل
                  </h3>

                  <span className="rounded-full bg-[#E9B44C]/25 px-2 py-0.5 text-[11px] font-bold text-[#835400]">
                    مرونة كاملة
                  </span>
                </div>

                <p className="mt-1 text-sm leading-relaxed text-[#43474E]">
                  النقاط التي تكتسبها في متجر أحذية يمكنك استبدالها فوراً
                  لخصم مشترياتك في متجر ملابس آخر ضمن شبكة تبادل.
                </p>
              </div>
            </article>

            {/* الفائدة الثالثة */}
            <article className="flex items-start gap-4 rounded-2xl border border-[#12302B]/10 bg-white p-5 shadow-sm transition-all hover:border-[#1F7A6E]/40">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#12302B]/10 text-[#12302B]">
                <ShieldCheck size={26} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-[#12302B]">
                    حماية برمز استلام فريد (OTP)
                  </h3>

                  <span className="rounded-full bg-[#12302B]/10 px-2 py-0.5 text-[11px] font-bold text-[#12302B]">
                    أمان 100%
                  </span>
                </div>

                <p className="mt-1 text-sm leading-relaxed text-[#43474E]">
                  لا تخصم نقاطك ولا يتم تأكيد الطلب إلا عبر رمز استلام
                  شخصي مكون من 4 أرقام يصلك أنت فقط لمنع أي تلاعب.
                </p>
              </div>
            </article>

            {/* مؤشر المتاجر */}
            <div className="flex items-center justify-between rounded-2xl border border-dashed border-[#12302B]/20 bg-white/60 p-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 space-x-reverse">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12302B] text-xs font-bold text-white ring-2 ring-white">
                    T1
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F7A6E] text-xs font-bold text-white ring-2 ring-white">
                    T2
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E9B44C] text-xs font-bold text-[#12302B] ring-2 ring-white">
                    T3
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-[#12302B]">
                    أكثر من 85 متجر نشط
                  </p>

                  <p className="text-xs text-[#74777F]">
                    الرمال، النصر، خانيونس، ودير البلح
                  </p>
                </div>
              </div>

              <MapPin size={20} className="shrink-0 text-[#74777F]" />
            </div>
          </aside>
        </div>
      </main>
    </AuthLayout>
  );
}

export default CustomerRegister;