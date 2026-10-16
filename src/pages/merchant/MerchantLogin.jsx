import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';

import {
  ArrowLeft,
  BadgeCheck,
  CalendarCheck,
  CircleHelp,
  Globe,

  LockKeyhole,
  MessageCircle,
  Percent,
  Phone,
  Store,
  Wallet,
  Banknote,
} from 'lucide-react';

const benefits = [
  {
    icon: Percent,
    title: 'عمولة 3% فقط بعد البيع',
    text: 'عمولة مقتطعة فقط بعد إتمام واستلام العملية الفعلي.',
  },
  {
    icon: CalendarCheck,
    title: 'فترة تجربة 14 يوماً مجاناً',
    text: 'جرّب كافة أدوات الحملات التسويقية بدون التزام مسبق.',
  },
  {
    icon: Banknote,
    title: 'صفر رسوم اشتراك شهرية',
    text: 'لا توجد تكاليف تأسيس أو رسوم خفية تثقل كاهل تجارتك.',
  },
  {
    icon: Wallet,
    title: 'تسويات أسبوعية بدون تأخير',
    text: 'تحويل مستحقاتك لمحفظتك الإلكترونية أو لحسابك البنكي دورياً.',
  },
];

function MerchantLogin() {
  const [loginMode, setLoginMode] = useState('phone');
  const [otpChannel, setOtpChannel] = useState('whatsapp');
  const [phone, setPhone] = useState('');
  // const [instagram, setInstagram] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    const identifier =
      loginMode === 'phone'
        ? phone.trim()
        : instagram.trim().replace(/^@/, '');

    if (!identifier) {
      setError(
        loginMode === 'phone'
          ? 'يرجى إدخال رقم الجوال المفوّض.'
          : 'يرجى إدخال معرّف حساب إنستغرام التجاري.',
      );
      return;
    }

    // حفظ الاختيارات مؤقتًا لحين ربط إرسال OTP بالـ Backend.
    sessionStorage.setItem('merchantLoginMode', loginMode);
    sessionStorage.setItem('merchantIdentifier', identifier);
    sessionStorage.setItem('merchantOtpChannel', otpChannel);

    navigate('/merchant/verify-otp');
  };

  return (
    <AuthLayout role="merchant">
      <div
        dir="rtl"
        className="min-h-screen bg-[#f9f9ff] font-[Tajawal,sans-serif] text-[#191c22] antialiased"
      >
        {/* Main */}
        <main className="relative flex items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#032448]/5 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#835400]/10 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Merchant Benefits */}
            <section className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#032448] via-[#1f3a5f] to-[#032448] p-6 text-white shadow-xl sm:p-8 lg:order-1 lg:col-span-7 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#835400]/20 via-transparent to-transparent" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-[#ffddb5] backdrop-blur-md">
                  <BadgeCheck size={16} className="text-[#feb64e]" />

                  <span>بوابة شركاء تبادل 2026 — غزة</span>

                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ffddb5]" />
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                    حوّل زوار متجرك إلى عملاء دائمين مع نظام ولاء موحّد
                  </h1>

                  <p className="max-w-xl text-base leading-7 text-white/85">
                    انضم لأكثر من 180 متجر وبوتيك في قطاع غزة يستقبلون مئات
                    المتسوقين يومياً بنظام نقاط مرن، عمولات عادلة، وتسويات نقدية
                    فورية.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3.5 pt-2 sm:grid-cols-2">
                  {benefits.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition hover:bg-white/15"
                    >
                      <div className="flex shrink-0 items-center justify-center rounded-xl bg-[#feb64e] p-2.5 text-[#714800]">
                        <Icon size={20} />
                      </div>

                      <div className="space-y-0.5">
                        <h2 className="text-sm font-extrabold text-white">
                          {title}
                        </h2>

                        <p className="text-xs leading-5 text-white/75">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3.5 rounded-2xl border border-emerald-200/20 bg-emerald-950/50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-200 text-emerald-950">
                    <MessageCircle size={23} />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-emerald-200">
                      تقارير مبيعات ذكية عبر واتساب مباشرة
                    </p>

                    <p className="text-xs leading-5 text-white/75">
                      ملخص يومي بعمليات الشراء ورصيد النقاط المستبدلة يصلك حتى
                      في أوقات ضعف الاتصال.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 rtl:space-x-reverse">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#032448] bg-[#feb64e] text-[11px] font-extrabold text-[#714800]">
                      م١
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#032448] bg-[#8df8bd] text-[11px] font-extrabold text-[#002112]">
                      م٢
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#032448] bg-[#aec8f4] text-[11px] font-extrabold text-[#001c3b]">
                      م٣
                    </span>
                  </div>

                  <span className="text-xs leading-5 text-white/85">
                    شريك معتمد لدى كبرى علامات الأزياء والتجميل
                  </span>
                </div>

                <span className="text-xs font-semibold text-[#ffddb5]">
                  سيرفرات فائقة السرعة وآمنة 100%
                </span>
              </div>
            </section>

            {/* Login Card */}
            <section className="flex flex-col justify-between rounded-3xl border border-[#e6e8f0] bg-white p-5 shadow-md sm:p-7 lg:order-2 lg:col-span-5 lg:p-9">
              <div>
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div>
                    <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-md bg-[#835400]/10 px-2.5 py-1 text-xs font-semibold text-[#835400]">
                      <Store size={14} />
                      لوحة تحكم المتجر
                    </div>

                    <h2 className="text-2xl font-extrabold text-[#032448]">
                      تسجيل دخول التاجر
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-[#43474e]">
                      أدخل بياناتك المعتمدة للوصول لبوابة إدارة المبيعات والنقاط
                    </p>
                  </div>

                  <div
                    aria-label="شعار تبادل"
                    className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4f0df] text-[#a17b32] sm:flex"
                  >
                    <Store size={25} />
                  </div>
                </div>

                {/* Login Tabs */}
                <div
                  className="mb-6 flex items-center rounded-xl bg-[#f2f3fc] p-1"
                  role="tablist"
                  aria-label="طريقة تعريف المتجر"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={loginMode === 'phone'}
                    onClick={() => {
                      setLoginMode('phone');
                      setError('');
                    }}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-sm transition-all ${
                      loginMode === 'phone'
                        ? 'bg-white font-extrabold text-[#032448] shadow-sm'
                        : 'text-[#43474e] hover:text-[#032448]'
                    }`}
                  >
                    <Phone size={18} />
                    رقم الجوال المفوّض
                  </button>

                  <button
                    type="button"
                    role="tab"
                    aria-selected={loginMode === 'instagram'}
                    onClick={() => {
                      setLoginMode('instagram');
                      setError('');
                    }}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-sm transition-all ${
                      loginMode === 'instagram'
                        ? 'bg-white font-extrabold text-[#032448] shadow-sm'
                        : 'text-[#43474e] hover:text-[#032448]'
                    }`}
                  >
                    <Store size={18} />
                    صفحة إنستغرام المتجر
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {loginMode === 'phone' ? (
                    <div className="space-y-2">
                      <label
                        htmlFor="merchantPhone"
                        className="block text-sm font-bold text-[#191c22]"
                      >
                        رقم جوال المسؤول أو المفوّض
                      </label>

                      <div className="relative flex items-center">
                        <div className="absolute right-3.5 flex items-center gap-1 text-[#43474e]">
                          <Phone size={18} />

                          <span dir="ltr" className="text-sm font-bold">
                            +970
                          </span>
                        </div>

                        <input
                          id="merchantPhone"
                          name="phone"
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel-national"
                          required
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                          placeholder="59XXXXXXX أو 56XXXXXXX"
                          className="h-12 w-full rounded-xl border border-[#e1e2ea] bg-white py-3 pl-28 pr-20 text-right text-sm text-[#191c22] outline-none transition placeholder:text-[#74777f]/70 focus:border-[#032448] focus:ring-2 focus:ring-[#032448]/10"
                        />

                        <div className="absolute left-3 flex items-center gap-1 border-r border-[#e6e8f0] pr-2 text-[10px] font-bold text-[#43474e]">
                          <span className="rounded bg-[#ecedf6] px-1.5 py-1">
                            059 جوال
                          </span>

                          <span className="rounded bg-[#ecedf6] px-1.5 py-1">
                            056 أوريدو
                          </span>
                        </div>
                      </div>

                      <p className="text-xs leading-5 text-[#43474e]/75">
                        الرقم المعتمد المسجل في اتفاقية الشراكة أو تفويض المتجر.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label
                        htmlFor="merchantInstagram"
                        className="block text-sm font-bold text-[#191c22]"
                      >
                        معرّف حساب إنستغرام التجاري
                      </label>

                      <div className="relative flex items-center">
                        <Instagram
                          size={19}
                          className="absolute right-3.5 text-[#43474e]"
                        />

                        <span className="absolute right-10 font-bold text-[#191c22]">
                          @
                        </span>

                        <input
                          id="merchantInstagram"
                          name="instagram"
                          type="text"
                          dir="ltr"
                          autoComplete="username"
                          required
                          value={instagram}
                          onChange={(event) =>
                            setInstagram(event.target.value)
                          }
                          placeholder="gaza_boutique"
                          className="h-12 w-full rounded-xl border border-[#e1e2ea] bg-white py-3 pl-4 pr-14 text-right text-sm text-[#191c22] outline-none transition placeholder:text-[#74777f]/70 focus:border-[#032448] focus:ring-2 focus:ring-[#032448]/10"
                        />
                      </div>

                      <p className="text-xs leading-5 text-[#43474e]/75">
                        سيتم إرسال رمز التحقق لرقم الهاتف المرتبط بالصفحة لدى
                        النظام.
                      </p>
                    </div>
                  )}

                  {/* OTP Channel */}
                  <fieldset className="space-y-2.5 pt-1">
                    <legend className="mb-2.5 text-sm font-bold text-[#191c22]">
                      طريقة استلام رمز الدخول السريع (OTP):
                    </legend>

                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      <label
                        className={`flex cursor-pointer items-start gap-2.5 rounded-xl border-2 p-3 transition-all ${
                          otpChannel === 'whatsapp'
                            ? 'border-[#032448] bg-[#032448]/5'
                            : 'border-[#e1e2ea] bg-white hover:border-[#032448]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="otp_channel"
                          value="whatsapp"
                          checked={otpChannel === 'whatsapp'}
                          onChange={() => setOtpChannel('whatsapp')}
                          className="mt-1 h-4 w-4 accent-[#032448]"
                        />

                        <span>
                          <span className="flex flex-wrap items-center gap-1.5 text-xs font-extrabold text-[#032448]">
                            واتساب المعتمد

                            <span className="rounded bg-[#8df8bd] px-1.5 py-0.5 text-[10px] text-[#002112]">
                              موصى به
                            </span>
                          </span>

                          <span className="mt-1 block text-xs leading-5 text-[#43474e]">
                            فوري ومضمون مع ضعف تغطية الشبكة الخلوية.
                          </span>
                        </span>
                      </label>

                      <label
                        className={`flex cursor-pointer items-start gap-2.5 rounded-xl border-2 p-3 transition-all ${
                          otpChannel === 'sms'
                            ? 'border-[#032448] bg-[#032448]/5'
                            : 'border-[#e1e2ea] bg-white hover:border-[#032448]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="otp_channel"
                          value="sms"
                          checked={otpChannel === 'sms'}
                          onChange={() => setOtpChannel('sms')}
                          className="mt-1 h-4 w-4 accent-[#032448]"
                        />

                        <span>
                          <span className="text-xs font-bold text-[#191c22]">
                            رسالة نصية SMS
                          </span>

                          <span className="mt-1 block text-xs leading-5 text-[#43474e]">
                            عبر المشغل المحلي (جوال / أوريدو).
                          </span>
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  {error && (
                    <div
                      role="alert"
                      className="rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-3 text-sm leading-6 text-amber-900"
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#032448] text-sm font-extrabold text-white shadow-sm transition hover:bg-[#1f3a5f] active:scale-[0.99]"
                  >
                    إرسال رمز التحقق للتاجر 🔑
                    <ArrowLeft size={20} />
                  </button>
                </form>

                {/* Customer and Registration Links */}
                <div className="mt-6 space-y-3 border-t border-[#e1e2ea] pt-5 text-center">
                  <p className="text-xs text-[#43474e]">
                    هل أنت زبون أو متسوق؟

                    <Link
                      to="/customer/login"
                      className="mr-1 inline-flex items-center gap-1 font-extrabold text-[#032448] hover:underline"
                    >
                      اضغط هنا للدخول لمحفظتك
                      <Wallet size={16} />
                    </Link>
                  </p>

                  <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-[#835400]/20 bg-[#ffddb5]/40 p-3 sm:flex-row">
                    <span className="text-xs font-extrabold text-[#2a1800]">
                      ليس لديك حساب متجر بعد؟
                    </span>

                    <Link
                      to="/merchant/register"
                      className="flex items-center gap-1 rounded-lg bg-[#835400] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#643f00]"
                    >
                      انضم كمتجر شريك في دقيقة 🚀
                    </Link>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 pt-4 text-center">
                <div className="inline-flex items-center gap-2 text-xs text-[#43474e]/70">
                  <LockKeyhole size={16} className="text-[#004328]" />

                  <span>
                    بوابة مشفرة بمعيار 256-bit لحماية بيانات مبيعات المتاجر
                  </span>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </AuthLayout>
  );
}

export default MerchantLogin;