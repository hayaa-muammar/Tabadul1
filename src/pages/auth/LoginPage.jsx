import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  Store,
  UserRound,
  Eye,
  EyeOff,
  Smartphone,
  LockKeyhole,
  LogIn,
  MessageSquare,
  Star,
  Gift,
  ShieldCheck,
} from 'lucide-react';

import AuthLayout from '../../layouts/AuthLayout';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeRole, setActiveRole] = useState(
    location.state?.activeRole === 'merchant'
      ? 'merchant'
      : 'customer',
  );

  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const isCustomer = activeRole === 'customer';

  // تحديث نوع الحساب عند الانتقال إلى الصفحة من الهيدر
  useEffect(() => {
    const requestedRole = location.state?.activeRole;

    if (
      requestedRole === 'customer' ||
      requestedRole === 'merchant'
    ) {
      setActiveRole(requestedRole);
    }
  }, [location.state]);

  // تسجيل الدخول
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!phone.trim() || !password.trim()) {
      alert('يرجى إدخال رقم الجوال أو البريد الإلكتروني وكلمة المرور.');
      return;
    }

    if (isCustomer) {
      navigate('/customer/login');
      return;
    }

    navigate('/merchant/login');
  };

  // استعادة كلمة المرور حسب نوع الحساب
  const handleForgotPassword = () => {
    if (isCustomer) {
      navigate('/customer/reset-password');
      return;
    }

    navigate('/merchant/reset-password');
  };

  // الانتقال إلى التسجيل حسب نوع الحساب
  const handleRegister = () => {
    if (isCustomer) {
      navigate('/customer/login');
      return;
    }

    navigate('/merchant/register');
  };

  // الدخول السريع عبر OTP
  const handleOTPLogin = () => {
    if (isCustomer) {
      navigate('/customer/login');
      return;
    }

    navigate('/merchant/login');
  };

  return (
    <AuthLayout role="public">
      <div
        dir="rtl"
        className="flex min-h-screen w-full flex-col overflow-x-clip bg-[#f7f7fc] text-slate-800"
      >
        {/* Main Content */}
        <main className="mx-auto w-full max-w-[1440px] flex-1 px-3 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:px-10">
          {/* Main Responsive Layout */}
          <div className="grid w-full grid-cols-1 items-center gap-5 md:gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 xl:gap-10">

            {/* Login Section */}
            <section className="order-1 min-w-0 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-6 md:p-8 lg:order-1 xl:p-10">
              <div className="mx-auto w-full max-w-[620px]">

                {/* Page Title */}
                <div className="mb-6 text-center sm:mb-8">
                  <h1 className="mb-2 text-xl font-extrabold leading-relaxed text-[#082b4c] sm:text-2xl lg:text-3xl">
                    هل أنت تاجر أم متسوق؟
                  </h1>

                  <p className="mx-auto max-w-lg text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                    اختر صفتك للمتابعة والوصول إلى لوحة التحكم أو محفظة النقاط
                  </p>
                </div>

                {/* Role Selector */}
                <div className="mb-6 grid grid-cols-1 gap-3 rounded-2xl bg-slate-100 p-2 sm:grid-cols-2">

                  {/* Customer */}
                  <button
                    type="button"
                    onClick={() => setActiveRole('customer')}
                    aria-pressed={isCustomer}
                    className={`relative flex min-w-0 items-center gap-3 rounded-xl border p-3 text-right transition duration-200 sm:p-4 ${
                      isCustomer
                        ? 'border-[#d8d4c6] bg-white shadow-sm'
                        : 'border-transparent bg-transparent hover:bg-white/70'
                    }`}
                  >
                    {isCustomer && (
                      <span className="absolute -top-2.5 right-3 rounded-full bg-[#a17b16] px-2.5 py-1 text-[10px] font-bold text-white sm:right-4 sm:text-xs">
                        +200 نقطة ترحيب
                      </span>
                    )}

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#a17b16] sm:h-12 sm:w-12">
                      <UserRound size={22} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-slate-800 sm:text-base">
                        أنا متسوق / زبون
                      </span>

                      <span className="mt-1 block text-[11px] leading-5 text-slate-500 sm:text-xs">
                        اكسب نقاطًا مع كل عملية شراء
                      </span>
                    </span>
                  </button>

                  {/* Merchant */}
                  <button
                    type="button"
                    onClick={() => setActiveRole('merchant')}
                    aria-pressed={!isCustomer}
                    className={`flex min-w-0 items-center gap-3 rounded-xl border p-3 text-right transition duration-200 sm:p-4 ${
                      !isCustomer
                        ? 'border-[#d8d4c6] bg-white shadow-sm'
                        : 'border-transparent bg-transparent hover:bg-white/70'
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-[#082b4c] sm:h-12 sm:w-12">
                      <Store size={22} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-slate-800 sm:text-base">
                        أنا تاجر / متجر
                      </span>

                      <span className="mt-1 block text-[11px] leading-5 text-slate-500 sm:text-xs">
                        ضاعف مبيعاتك عبر منصة تبادل
                      </span>
                    </span>
                  </button>
                </div>

                {/* Welcome Reward */}
                {isCustomer && (
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-[#a17b16]">
                        <Star size={19} />
                      </span>

                      <p className="min-w-0 text-xs leading-6 text-slate-700 sm:text-sm">
                        مكافأة الانضمام الأول
                        <span className="font-bold text-[#082b4c]">
                          {' '}
                          +200 نقطة ولاء فورية
                        </span>
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-[#8c6417] sm:text-xs">
                      متاحة الآن
                    </span>
                  </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Phone or Email */}
                  <div className="min-w-0">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      {isCustomer
                        ? 'رقم الجوال الفلسطيني أو البريد الإلكتروني'
                        : 'رقم الجوال أو البريد الإلكتروني للتاجر'}
                    </label>

                    <div className="flex min-h-13 min-w-0 items-center rounded-xl border border-slate-300 bg-white transition focus-within:border-[#0c4168] focus-within:ring-2 focus-within:ring-[#0c4168]/10">
                      <Smartphone
                        size={20}
                        className="mr-3 shrink-0 text-slate-500 sm:mr-4"
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="username"
                        value={phone}
                        onChange={(event) =>
                          setPhone(event.target.value)
                        }
                        placeholder="059xxxxxxx أو البريد الإلكتروني"
                        className="min-w-0 flex-1 bg-transparent px-2 py-3.5 text-xs outline-none placeholder:text-slate-400 sm:px-3 sm:text-sm"
                      />

                      <span className="shrink-0 border-r border-slate-200 px-2 text-[10px] font-semibold text-slate-500 sm:px-3 sm:text-xs">
                        +970
                      </span>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <label
                        htmlFor="password"
                        className="text-sm font-bold text-slate-800"
                      >
                        كلمة المرور
                      </label>

                      <span className="text-[10px] text-slate-500 sm:text-xs">
                        {isCustomer
                          ? 'الدخول السريع عبر OTP'
                          : 'دخول آمن'}
                      </span>
                    </div>

                    <div className="flex min-h-13 min-w-0 items-center rounded-xl border border-slate-300 bg-white transition focus-within:border-[#0c4168] focus-within:ring-2 focus-within:ring-[#0c4168]/10">
                      <LockKeyhole
                        size={20}
                        className="mr-3 shrink-0 text-slate-500 sm:mr-4"
                      />

                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) =>
                          setPassword(event.target.value)
                        }
                        placeholder="أدخل كلمة المرور"
                        className="min-w-0 flex-1 bg-transparent px-2 py-3.5 text-xs outline-none placeholder:text-slate-400 sm:px-3 sm:text-sm"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword((previous) => !previous)
                        }
                        aria-label={
                          showPassword
                            ? 'إخفاء كلمة المرور'
                            : 'إظهار كلمة المرور'
                        }
                        aria-pressed={showPassword}
                        className="ml-3 flex min-h-10 min-w-10 shrink-0 items-center justify-center text-slate-500 transition hover:text-[#082b4c] sm:ml-4"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Device and Forgot Password */}
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                    <label className="flex cursor-pointer items-center gap-2 text-slate-600">
                      <input
                        type="checkbox"
                        checked={rememberDevice}
                        onChange={(event) =>
                          setRememberDevice(event.target.checked)
                        }
                        className="h-4 w-4 shrink-0 accent-[#082b4c]"
                      />

                      تذكر هذا الجهاز
                    </label>

                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="font-semibold text-slate-600 transition hover:text-[#082b4c]"
                    >
                      نسيت كلمة المرور؟
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#082b4c] px-3 py-3.5 text-sm font-bold text-white transition hover:bg-[#10436e] focus:outline-none focus:ring-2 focus:ring-[#082b4c] focus:ring-offset-2 sm:gap-3 sm:text-base"
                  >
                    <LogIn size={20} className="shrink-0" />

                    <span>
                      {isCustomer
                        ? 'تسجيل الدخول إلى محفظتي'
                        : 'تسجيل الدخول إلى لوحة التاجر'}
                    </span>
                  </button>

                  {/* OTP Button */}
                  <button
                    type="button"
                    onClick={handleOTPLogin}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#b9c9c5] bg-slate-50 px-3 py-3.5 text-xs font-bold text-[#31584c] transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 sm:gap-3 sm:text-sm"
                  >
                    <MessageSquare size={20} className="shrink-0" />

                    <span>
                      {isCustomer
                        ? 'تسجيل دخول فوري برمز واتساب'
                        : 'الدخول السريع للمتجر'}
                    </span>
                  </button>
                </form>

                {/* Register Link */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 text-center text-xs leading-7 text-slate-500 sm:mt-7 sm:text-sm">
                  <span>
                    {isCustomer
                      ? 'ليس لديك حساب مكافآت حتى الآن؟'
                      : 'هل تريد الانضمام إلى منصة تبادل؟'}
                  </span>

                  <button
                    type="button"
                    onClick={handleRegister}
                    className="font-extrabold text-[#a17b16] transition hover:underline"
                  >
                    {isCustomer
                      ? 'انضم مجانًا كمتسوق'
                      : 'سجّل متجرك الآن'}
                  </button>
                </div>
              </div>
            </section>

            {/* Information Section */}
            <section className="order-2 flex min-w-0 flex-col gap-4 sm:gap-5 lg:order-2">

              {/* Main Information Card */}
              <div className="min-w-0 overflow-hidden rounded-2xl border border-[#244866] bg-[#06294b] p-5 text-white shadow-sm sm:p-7 lg:p-6 xl:p-9">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-white/10 px-3 py-2 text-[10px] font-semibold text-slate-200 sm:px-4 sm:text-xs">
                    المتاجر المحلية المعتمدة
                  </span>

                  <span className="rounded-full bg-[#a17b16] px-3 py-2 text-[10px] font-bold text-white sm:px-4 sm:text-xs">
                    شبكة غزة 2026
                  </span>
                </div>

                <h2 className="mb-4 text-xl font-extrabold leading-relaxed sm:text-2xl xl:text-3xl">
                  {isCustomer
                    ? 'بوابة الدخول الموحدة لمنظومة مكافآت غزة'
                    : 'بوابة التاجر لإدارة المبيعات ومكافآت الزبائن'}
                </h2>

                <p className="mb-6 text-xs leading-7 text-slate-300 sm:mb-7 sm:text-sm sm:leading-8">
                  {isCustomer
                    ? 'منصة تجمع متاجر الأزياء في قطاع غزة ضمن برنامج ولاء ذكي ومترابط يكافئك على كل عملية تسوق.'
                    : 'منصة تساعدك على إدارة متجر الأزياء وعروضك ونقاط الولاء، ومتابعة عمليات البيع واستبدال المكافآت من مكان واحد.'}
                </p>

                {/* Information Box */}
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 sm:p-5">
                  <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#a17b16] text-white sm:h-12 sm:w-12">
                      {isCustomer ? (
                        <Gift size={23} />
                      ) : (
                        <Store size={23} />
                      )}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="mb-2 text-sm font-bold sm:text-base">
                        {isCustomer
                          ? 'رصيدك بانتظارك كمتسوق!'
                          : 'متجرك يستحق فرصًا أكبر!'}
                      </h3>

                      <p className="text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">
                        {isCustomer
                          ? 'استبدل نقاطك بمكافآت لدى متاجر الأزياء المشاركة في المنصة.'
                          : 'أنشئ عروضًا مناسبة لعملائك وتابع نتائجها من لوحة تحكم واحدة.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">

                {/* OTP Feature */}
                <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#a17b16] sm:h-12 sm:w-12">
                    <MessageSquare size={22} />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-800">
                      OTP سريع عبر واتساب
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      دخول سريع وسهل
                    </p>
                  </div>
                </div>

                {/* Security Feature */}
                <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#082b4c] sm:h-12 sm:w-12">
                    <ShieldCheck size={22} />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-800">
                      أمان موثوق
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      حماية بيانات الحساب
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;