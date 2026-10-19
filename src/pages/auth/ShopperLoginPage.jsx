import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BackButton from '../../components/common/BackButton';
import PhoneInputField from '../../components/common/PhoneInputField';
import PasswordInputField from '../../components/common/PasswordInputField';
import { useAuth } from '../../context/AuthContext';

export default function ShopperLoginPage() {
  const [phone, setPhone] = useState("0599123456");
  const [password, setPassword] = useState("password123");
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { loginAsShopper } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      loginAsShopper(phone, "سارة أحمد");
      setIsSubmitting(false);
      navigate('/stores');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface text-right">
      <Header />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="w-full max-w-5xl bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          
          {/* Right Column: Promotional & Loyalty Incentive Canvas (5 cols) */}
          <section className="lg:col-span-5 bg-primary-container text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden order-2 lg:order-1">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary-container opacity-20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              {/* Brand Header */}
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 inline-flex items-center gap-3">
                <span className="text-xl">🇵🇸</span>
                <div>
                  <p className="font-bold text-sm text-white">منصة وتطبيق تبادل</p>
                  <p className="text-[11px] text-[#ffddb5]">برنامج ولاء المتاجر 2026</p>
                </div>
              </div>

              {/* Instant Joining Gift Highlight Card */}
              <div className="bg-white/10 border border-[#ffddb5]/40 rounded-2xl p-4 sm:p-5 relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1 rounded-lg bg-[#e9b44c] text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px] icon-fill">redeem</span>
                  </span>
                  <span className="text-xs font-bold text-[#ffddb5]">هدية الانضمام الفورية</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-numeral-hero text-3xl font-black text-[#ffddb5]">+200</span>
                  <span className="text-sm font-bold text-white">نقطة مجانية</span>
                </div>
                <p className="text-xs text-white/85 leading-relaxed">
                  تُعادل <strong className="text-[#ffddb5]">1.00 ₪ كاش باك فوري</strong>، تضاف تلقائياً لرصيدك بمجرد تأكيد رقم هاتفك للمرة الأولى.
                </p>
              </div>

              {/* Key Value Pillars */}
              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-7 h-7 rounded-lg bg-emerald-900/60 flex items-center justify-center text-emerald-300 shrink-0">
                    <span className="material-symbols-outlined text-base icon-fill">percent</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xs sm:text-sm">كاش باك 5% على كل مشترى</h3>
                    <p className="text-white/75 mt-0.5">كل 1 شيكل تنفقه في المتاجر المعتمدة يمنحك 10 نقاط ولاء.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-7 h-7 rounded-lg bg-emerald-900/60 flex items-center justify-center text-emerald-300 shrink-0">
                    <span className="material-symbols-outlined text-base icon-fill">sync_alt</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xs sm:text-sm">استبدال بين المتاجر المشتركة</h3>
                    <p className="text-white/75 mt-0.5">اجمع النقاط من محلات الملابس واستبدلها بقسائم أحذية وعبايات.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-7 h-7 rounded-lg bg-emerald-900/60 flex items-center justify-center text-emerald-300 shrink-0">
                    <span className="material-symbols-outlined text-base icon-fill">account_balance_wallet</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xs sm:text-sm">محفظة ولاء موحدة للمتسوقين</h3>
                    <p className="text-white/75 mt-0.5">رقم هاتفك هو بطاقتك الرقمية في كل الأسواق دون بطاقات بلاستيكية.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Trust Note */}
            <div className="relative z-10 pt-4 mt-6 border-t border-white/20 flex items-center gap-2 text-xs text-white/80">
              <span className="material-symbols-outlined text-amber-400 text-base">verified_user</span>
              <span>نظام الولاء الداعم للاقتصاد الوطني والمتاجر 2026</span>
            </div>
          </section>

          {/* Left Column: Customer Authentication Form Canvas (7 cols) */}
          <section className="lg:col-span-7 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-surface-container-lowest order-1 lg:order-2">
            <div>
              {/* Header Action Bar */}
              <div className="flex items-center justify-between mb-6">
                <BackButton label="العودة للرئيسية" fallbackRoute="/" />
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  بوابة المتسوقين
                </span>
              </div>

              {/* Dual-Role Selector Switcher (from 1code.html) */}
              <div className="grid grid-cols-2 gap-2.5 mb-6 p-1 bg-surface-container-low rounded-xl">
                <div
                  className="flex flex-col items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-surface-container-lowest text-primary shadow-xs border border-secondary/30 relative text-center"
                >
                  <span className="absolute -top-2.5 right-3 bg-secondary text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
                    +200 نقطة ترحيب
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-[#e9b44c] icon-fill">shopping_bag</span>
                    <span className="text-xs font-black">أنا متسوق / زبون</span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-medium">اكسب نقاط 5% كاش باك</span>
                </div>

                <Link
                  to="/merchant/login"
                  className="flex flex-col items-center justify-center gap-1.5 py-3 px-3 rounded-lg text-on-surface-variant hover:text-primary transition-all text-center"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">storefront</span>
                    <span className="text-xs font-bold">أنا تاجر / متجر</span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant/80">ضاعف مبيعاتك بدون رسوم</span>
                </Link>
              </div>

              {/* Title & Explanation */}
              <div className="mb-6 space-y-1.5">
                <h1 className="text-xl sm:text-2xl font-black text-primary">
                  تسجيل دخول المتسوق — منصة تبادل
                </h1>
                <p className="text-xs sm:text-sm text-on-surface-variant">
                  أدخل رقم هاتفك لتسجيل الدخول أو الاستفادة الفورية من نقاطك وكاش باك مشترياتك.
                </p>
              </div>

              {/* Authentication Form */}
              <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-on-surface mb-1.5" htmlFor="login-phone">
                    رقم الهاتف المحمول (فلسطين) <span className="text-error">*</span>
                  </label>
                  <PhoneInputField
                    id="login-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs sm:text-sm font-bold text-on-surface" htmlFor="login-pwd">
                      كلمة المرور <span className="text-error">*</span>
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-xs text-gaza-teal hover:text-primary font-bold transition-colors"
                    >
                      نسيت كلمة المرور؟
                    </Link>
                  </div>
                  <PasswordInputField
                    id="login-pwd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Remember & OTP Alternatives */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded text-gaza-teal focus:ring-gaza-teal"
                    />
                    <span className="text-on-surface-variant">تذكر تسجيل دخولي على هذا الجهاز</span>
                  </label>

                  <Link
                    to="/verify-otp"
                    className="text-primary font-bold hover:underline"
                  >
                    الدخول عبر رمز واتساب (OTP)
                  </Link>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 sm:h-13 bg-primary hover:bg-primary-container text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>جاري تسجيل الدخول...</span>
                      </>
                    ) : (
                      <>
                        <span>تسجيل الدخول ومتابعة التسوق</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Bottom Switch to Register Link */}
            <div className="pt-6 mt-6 border-t border-outline-variant/40 text-center text-xs sm:text-sm text-on-surface-variant">
              <span>ليس لديك حساب متسوق بعد؟</span>
              <Link
                to="/register"
                className="font-bold text-gaza-teal hover:text-primary mr-1 underline inline-flex items-center gap-1"
              >
                <span>إنشاء حساب جديد (+200 نقطة مجانية)</span>
                <span className="material-symbols-outlined text-[14px]">arrow_back</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
