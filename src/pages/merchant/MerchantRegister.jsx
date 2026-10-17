import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';

import {
  ArrowLeft,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  MapPin,
  MessageCircle,
  MessageSquare,
  Percent,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  User,
  Wallet,
} from 'lucide-react';

const merchantBenefits = [
  {
    icon: Percent,
    title: 'عمولة 3% فقط بعد البيع الفعلي',
    text: 'لا توجد عمولات على المبيعات الملغاة أو غير المستلمة.',
  },
  {
    icon: CalendarCheck,
    title: 'فترة تجربة مجانية 14 يوماً',
    text: 'جرّب المنصة وحملات الولاء بالكامل دون أي التزام مسبق.',
  },
  {
    icon: Wallet,
    title: 'تسويات أسبوعية بدون تأخير',
    text: 'تحويل دوري لمستحقاتك لمحفظتك الإلكترونية أو لحسابك البنكي.',
  },
  {
    icon: ShieldCheck,
    title: 'حماية متقدمة ومبيعات موثقة',
    text: 'كل عملية استبدال تتم برمز OTP خاص بالعميل لمنع أي تلاعب.',
  },
];

const storeCategories = [
  'أزياء نسائية وسهرة',
  'عبايات وشالات وتطريز',
  'أحذية وحقائب جلدية',
  'أزياء رجالية وأطقم كلاسيك',
  'ملابس أطفال ومواليد',
  'عطور ومستحضرات تجميل',
  'إكسسوارات وساعات وهدايا',
  'مستلزمات منزلية وديكور',
  'أخرى',
];

const gazaLocations = [
  'غزة - الرمال / شارع عمر المختار',
  'غزة - النصر والشيخ رضوان',
  'دير البلح والمنطقة الوسطى',
  'خانيونس - السوق المركزي',
  'رفح - السوق والبلد',
  'شمال غزة - جباليا وبيت لاهيا',
  'متجر إلكتروني / بيع أونلاين فقط',
];

function MerchantRegister() {
  const navigate = useNavigate();

  const [responsibleName, setResponsibleName] = useState('');
  const [storeName, setStoreName] = useState('');
  const [socialPage, setSocialPage] = useState('');
  const [category, setCategory] = useState(storeCategories[0]);
  const [location, setLocation] = useState(gazaLocations[0]);
  const [phone, setPhone] = useState('');
  const [otpChannel, setOtpChannel] = useState('whatsapp');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // تنسيق رقم الهاتف
  const handlePhoneChange = (event) => {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 10) value = value.slice(0, 10);
    setPhone(value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!responsibleName.trim()) {
      setError('يرجى إدخال اسم الشخص المسؤول أو المفوّض.');
      return;
    }

    if (!storeName.trim()) {
      setError('يرجى إدخال اسم المتجر أو العلامة التجارية.');
      return;
    }

    const cleanPhone = phone.replace(/[\s-]/g, '');
    const validPhone = /^(059|056)\d{7}$/.test(cleanPhone);

    if (!validPhone) {
      setError('يرجى إدخال رقم جوال فلسطيني معتمد يبدأ بـ 059 أو 056 (9 أرقام).');
      return;
    }

    if (!acceptedTerms) {
      setError('يرجى الموافقة على شروط ومعايير انضمام المتاجر لشبكة تبادل.');
      return;
    }

    // حفظ البيانات في الجلسة للعرض التجريبي
    sessionStorage.setItem('merchantIdentifier', cleanPhone);
    sessionStorage.setItem('merchantStoreName', storeName.trim());
    sessionStorage.setItem('merchantOtpChannel', otpChannel);

    setIsSubmitted(true);
  };

  return (
    <AuthLayout role="merchant">
      <div
        dir="rtl"
        className="min-h-screen bg-[#f9f9ff] font-[Tajawal,sans-serif] text-[#191c22] antialiased"
      >
        <main className="relative flex items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          {/* خلفيات جمالية هادئة */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#032448]/5 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#835400]/10 blur-3xl"
          />

          <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* اللوحة التعريفية والمزايا */}
            <section className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#032448] via-[#1f3a5f] to-[#032448] p-6 text-white shadow-xl sm:p-8 lg:col-span-5 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#835400]/25 via-transparent to-transparent" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-[#ffddb5] backdrop-blur-md">
                  <BadgeCheck size={16} className="text-[#feb64e]" />
                  <span>انضمام شركاء تبادل 2026 — قطاع غزة</span>
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ffddb5]" />
                </div>

                <div className="space-y-3">
                  <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                    سجّل متجرك وافتح أبوابك لمئات المتسوقين يومياً
                  </h1>
                  <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                    انضم لشبكة ولاء موحدة تربط أرقى متاجر الموضة والأزياء
                    والتجزئة في غزة بنظام تسويات نقدية أسبوعية وتكلفة تسويق عادلة.
                  </p>
                </div>

                {/* مزايا الشراكة */}
                <div className="grid grid-cols-1 gap-3.5 pt-2">
                  {merchantBenefits.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md transition hover:bg-white/15"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#feb64e] text-[#714800]">
                        <Icon size={20} />
                      </div>
                      <div className="space-y-0.5">
                        <h2 className="text-sm font-bold text-white">{title}</h2>
                        <p className="text-xs leading-5 text-white/75">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-emerald-200/20 bg-emerald-950/40 p-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-[#8df8bd]" />
                    <p className="text-xs font-bold text-emerald-200">
                      لوحة تحكم فورية وتقارير مبيعات ذكية على واتساب
                    </p>
                  </div>
                </div>
              </div>

              {/* تذييل البطاقة الجانبية */}
              <div className="relative z-10 mt-8 border-t border-white/15 pt-5 text-xs text-white/80">
                <span>لديك استفسار حول اتفاقية الشراكة؟ </span>
                <Link
                  to="/help"
                  className="font-bold text-[#ffddb5] underline hover:text-white"
                >
                  تواصل مع فريق علاقات التجار
                </Link>
              </div>
            </section>

            {/* بطاقة نموذج التسجيل */}
            <section className="relative rounded-3xl border border-[#e6e8f0] bg-white p-6 shadow-md sm:p-8 lg:col-span-7 lg:p-10">
              {isSubmitted ? (
                /* حالة التأكيد التجريبي */
                <div className="space-y-6 py-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 size={36} />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-block rounded-full bg-[#f4f0df] px-3 py-1 text-xs font-bold text-[#835400]">
                      معاينة تجريبية ناجحة
                    </span>
                    <h2 className="text-2xl font-black text-[#032448]">
                      تم التحقق من بيانات المتجر بنجاح
                    </h2>
                    <p className="mx-auto max-w-md text-sm leading-6 text-[#43474e]">
                      تم فحص بيانات متجر{' '}
                      <span className="font-bold text-[#032448]">
                        &quot;{storeName}&quot;
                      </span>{' '}
                      محلياً والتأكد من مطابقتها للمعايير. في النسخة الإنتاجية
                      سيتم إرسال رمز التحقق لرقم{' '}
                      <span dir="ltr" className="font-bold text-[#032448]">
                        {phone}
                      </span>{' '}
                      وتفعيل لوحة إدارة المبيعات بعد الربط بالسيرفر.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-right text-xs leading-5 text-amber-900">
                    <p className="font-bold">تنويه هندسي للمقيّمين:</p>
                    <p>
                      هذه الواجهة تعمل في وضع العرض التجريبي (Demo Mode). لم يتم
                      إرسال بيانات حقيقية لأي خادم لعدم اكتمال الربط الخلفي.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:justify-center">
                    <button
                      type="button"
                      onClick={() => navigate('/merchant/login')}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#032448] px-6 text-sm font-bold text-white transition hover:bg-[#1f3a5f]"
                    >
                      الانتقال إلى بوابة دخول التجار
                      <ArrowLeft size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 px-6 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                    >
                      تعديل البيانات المدخلة
                    </button>
                  </div>
                </div>
              ) : (
                /* استمارة التسجيل */
                <div>
                  <div className="mb-6 border-b border-[#f0f2f8] pb-5">
                    <div className="mb-1 inline-flex items-center gap-2 text-xs font-bold text-[#835400]">
                      <Store size={15} />
                      <span>انضمام شريك تجاري جديد</span>
                    </div>
                    <h2 className="text-2xl font-black text-[#032448]">
                      تسجيل متجر في شبكة تبادل
                    </h2>
                    <p className="mt-1 text-xs leading-5 text-[#43474e]">
                      أدخل البيانات الأساسية لمتجرك للبدء في منح واستقبال نقاط
                      الولاء.
                    </p>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-bold text-red-800"
                    >
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* اسم المسؤول واسم المتجر */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="responsibleName"
                          className="block text-xs font-bold text-[#191c22]"
                        >
                          اسم المسؤول أو المفوّض *
                        </label>
                        <div className="relative flex items-center">
                          <User
                            size={18}
                            className="absolute right-3.5 text-[#74777f]"
                          />
                          <input
                            id="responsibleName"
                            type="text"
                            required
                            value={responsibleName}
                            onChange={(e) => setResponsibleName(e.target.value)}
                            placeholder="مثال: أحمد خليل"
                            className="h-11 w-full rounded-xl border border-[#e1e2ea] bg-white pr-10 pl-3 text-sm text-[#191c22] outline-none transition focus:border-[#032448] focus:ring-2 focus:ring-[#032448]/10"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="storeName"
                          className="block text-xs font-bold text-[#191c22]"
                        >
                          اسم المتجر أو العلامة التجارية *
                        </label>
                        <div className="relative flex items-center">
                          <Store
                            size={18}
                            className="absolute right-3.5 text-[#74777f]"
                          />
                          <input
                            id="storeName"
                            type="text"
                            required
                            value={storeName}
                            onChange={(e) => setStoreName(e.target.value)}
                            placeholder="مثال: بوتيك لمسة"
                            className="h-11 w-full rounded-xl border border-[#e1e2ea] bg-white pr-10 pl-3 text-sm text-[#191c22] outline-none transition focus:border-[#032448] focus:ring-2 focus:ring-[#032448]/10"
                          />
                        </div>
                      </div>
                    </div>

                    {/* صفحة إنستغرام أو فيسبوك والتصنيف */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="socialPage"
                          className="block text-xs font-bold text-[#191c22]"
                        >
                          حساب إنستغرام أو فيسبوك المتجر
                        </label>
                        <div className="relative flex items-center">
                          <span className="absolute right-3.5 font-bold text-[#74777f]">
                            @
                          </span>
                          <input
                            id="socialPage"
                            type="text"
                            dir="ltr"
                            value={socialPage}
                            onChange={(e) => setSocialPage(e.target.value)}
                            placeholder="lamset_fashion"
                            className="h-11 w-full rounded-xl border border-[#e1e2ea] bg-white pr-9 pl-3 text-sm text-[#191c22] outline-none transition focus:border-[#032448] focus:ring-2 focus:ring-[#032448]/10"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="category"
                          className="block text-xs font-bold text-[#191c22]"
                        >
                          تصنيف النشاط التجاري *
                        </label>
                        <select
                          id="category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="h-11 w-full rounded-xl border border-[#e1e2ea] bg-white px-3 text-sm text-[#191c22] outline-none transition focus:border-[#032448] focus:ring-2 focus:ring-[#032448]/10"
                        >
                          {storeCategories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* رقم الجوال المعتمد */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-[#191c22]"
                      >
                        رقم جوال المتجر المعتمد (لاستلام التسويات والرموز) *
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute right-3.5 flex items-center gap-1 text-[#74777f]">
                          <Phone size={18} />
                          <span dir="ltr" className="text-xs font-bold">
                            +970
                          </span>
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          inputMode="numeric"
                          required
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="059XXXXXXX أو 056XXXXXXX"
                          className="h-11 w-full rounded-xl border border-[#e1e2ea] bg-white py-2.5 pr-20 pl-3 text-right text-sm text-[#191c22] outline-none transition placeholder:text-[#74777f]/60 focus:border-[#032448] focus:ring-2 focus:ring-[#032448]/10"
                        />
                      </div>
                      <p className="text-[11px] text-[#74777f]">
                        يجب أن يكون رقم جوال فلسطيني معتمد يبدأ بـ 059 أو 056.
                      </p>
                    </div>

                    {/* موقع المتجر الفعلي في غزة */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="location"
                        className="block text-xs font-bold text-[#191c22]"
                      >
                        الفرع الرئيسي أو منطقة النشاط *
                      </label>
                      <div className="relative flex items-center">
                        <MapPin
                          size={18}
                          className="absolute right-3.5 text-[#74777f]"
                        />
                        <select
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="h-11 w-full rounded-xl border border-[#e1e2ea] bg-white pr-10 pl-3 text-sm text-[#191c22] outline-none transition focus:border-[#032448] focus:ring-2 focus:ring-[#032448]/10"
                        >
                          {gazaLocations.map((loc) => (
                            <option key={loc} value={loc}>
                              {loc}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* قناة استلام رمز التحقق المفضل */}
                    <fieldset className="space-y-2 border-t border-[#f0f2f8] pt-3">
                      <legend className="text-xs font-bold text-[#191c22]">
                        قناة استلام رمز التحقق وتنبيهات المبيعات:
                      </legend>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <label
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-3 transition ${
                            otpChannel === 'whatsapp'
                              ? 'border-[#032448] bg-[#032448]/5'
                              : 'border-[#e1e2ea] bg-white hover:bg-[#f9f9ff]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="merchant-channel"
                            value="whatsapp"
                            checked={otpChannel === 'whatsapp'}
                            onChange={() => setOtpChannel('whatsapp')}
                            className="h-4 w-4 accent-[#032448]"
                          />
                          <MessageCircle size={18} className="text-emerald-600" />
                          <span className="text-xs font-bold text-[#032448]">
                            عبر واتساب (موصى به)
                          </span>
                        </label>

                        <label
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-3 transition ${
                            otpChannel === 'sms'
                              ? 'border-[#032448] bg-[#032448]/5'
                              : 'border-[#e1e2ea] bg-white hover:bg-[#f9f9ff]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="merchant-channel"
                            value="sms"
                            checked={otpChannel === 'sms'}
                            onChange={() => setOtpChannel('sms')}
                            className="h-4 w-4 accent-[#032448]"
                          />
                          <MessageSquare size={18} className="text-slate-600" />
                          <span className="text-xs font-bold text-[#191c22]">
                            رسالة نصية SMS
                          </span>
                        </label>
                      </div>
                    </fieldset>

                    {/* شروط الانضمام */}
                    <div className="pt-1">
                      <label className="flex items-start gap-2.5 text-xs text-[#43474e]">
                        <input
                          type="checkbox"
                          checked={acceptedTerms}
                          onChange={(e) => setAcceptedTerms(e.target.checked)}
                          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-[#032448]"
                        />
                        <span>
                          أوافق على{' '}
                          <Link
                            to="/terms"
                            className="font-bold text-[#032448] underline"
                          >
                            اتفاقية شراكة التجار
                          </Link>{' '}
                          وشروط استبدال النقاط والعمولة (3%) في منصة تبادل.
                        </span>
                      </label>
                    </div>

                    {/* زر الإرسال */}
                    <button
                      type="submit"
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#032448] px-6 text-sm font-bold text-white shadow-md transition hover:bg-[#1f3a5f] active:scale-[0.99]"
                    >
                      <span>تقديم طلب الانضمام لشبكة التجار</span>
                      <ArrowLeft size={18} />
                    </button>

                    {/* رابط تسجيل الدخول للتجار المسجلين */}
                    <div className="border-t border-[#f0f2f8] pt-4 text-center">
                      <p className="text-xs text-[#43474e]">
                        لديك حساب شريك بالفعل؟{' '}
                        <Link
                          to="/merchant/login"
                          className="font-bold text-[#032448] hover:underline"
                        >
                          تسجيل دخول التاجر
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </AuthLayout>
  );
}

export default MerchantRegister;
