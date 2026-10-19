import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../components/common/MerchantHeader';
import Footer from '../../components/common/Footer';
import BackButton from '../../components/common/BackButton';
import PasswordInputField from '../../components/common/PasswordInputField';
import { useAuth } from '../../context/AuthContext';

export default function MerchantLoginPage() {
  const [storeId, setStoreId] = useState("0598342190");
  const [pin, setPin] = useState("1234");
  const [rememberSession, setRememberSession] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { loginAsMerchant } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      loginAsMerchant("059-8342190", "بوتيك لمسة للأزياء");
      setIsSubmitting(false);
      navigate('/merchant/otp');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface text-right font-tajawal">
      <MerchantHeader />

      <main className="flex-1 flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Right Side / Merchant Value Proposition Bento (7 cols) */}
          <section className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-primary via-primary-container to-primary text-white p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden order-2 lg:order-1">
            <div className="relative z-10 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffddb5] text-xs font-bold">
                <span className="material-symbols-outlined text-[16px] text-[#e9b44c] icon-fill">verified</span>
                <span>بوابة التجار المعتمدة — شبكة 2026</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                  منظومة إدارة ولاء وتسويات المتاجر
                </h1>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-xl">
                  لوحة تحكم خفيفة وسريعة مصممة خصيصاً لمتاجر وبوتيكات الأزياء لإدارة عمليات البيع، تسجيل نقاط الزبائن، ومتابعة التسويات المالية لحظة بلحظة.
                </p>
              </div>

              {/* Bento Perks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1">
                  <span className="material-symbols-outlined text-[#e9b44c] text-2xl">percent</span>
                  <h3 className="font-bold text-white text-sm">3% عمولة نجاح فقط</h3>
                  <p className="text-white/75">بدون رسوم شهرية أو اشتراكات ثابتة، تدفع فقط بعد البيع.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1">
                  <span className="material-symbols-outlined text-[#8df8bd] text-2xl">sync</span>
                  <h3 className="font-bold text-white text-sm">مزامنة فورية دون إنترنت</h3>
                  <p className="text-white/75">سجل مبيعات المتجر ونقاط الزبائن حتى مع انقطاع الشبكة.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1">
                  <span className="material-symbols-outlined text-[#8df8bd] text-2xl">payments</span>
                  <h3 className="font-bold text-white text-sm">تسويات نقدية يومية</h3>
                  <p className="text-white/75">تحويلات فورية عبر جوال باي أو تسليم نقدي مباشر مضمون.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1">
                  <span className="material-symbols-outlined text-[#e9b44c] text-2xl">verified_user</span>
                  <h3 className="font-bold text-white text-sm">حماية كاملة من الوهمي</h3>
                  <p className="text-white/75">كل طلب مؤكد برمز استلام OTP مكون من 4 خانات يصل للزبون.</p>
                </div>
              </div>

            </div>

            <div className="relative z-10 pt-4 mt-6 border-t border-white/20 text-xs text-white/75">
              <span>بروتوكول تبادل التجاري المعتمد • تشفير مالي متقدم 256-bit SSL</span>
            </div>
          </section>

          {/* Left Side: Merchant Login Form (5 cols) */}
          <section className="lg:col-span-5 bg-surface-container-lowest rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-outline-variant/60 flex flex-col justify-between order-1 lg:order-2 space-y-6">
            
            <div>
              {/* Back Link */}
              <div className="flex items-center justify-between mb-4">
                <BackButton label="العودة للرئيسية" fallbackRoute="/" />
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  لوحة التاجر
                </span>
              </div>

              {/* Dual-Role Selector Switcher (from 1code.html) */}
              <div className="grid grid-cols-2 gap-2.5 mb-6 p-1 bg-surface-container-low rounded-xl">
                <Link
                  to="/login"
                  className="flex flex-col items-center justify-center gap-1.5 py-3 px-3 rounded-lg text-on-surface-variant hover:text-primary transition-all text-center"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                    <span className="text-xs font-bold">أنا متسوق / زبون</span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant/80">اكسب نقاط 5% كاش باك</span>
                </Link>

                <div
                  className="flex flex-col items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-surface-container-lowest text-primary shadow-xs border border-primary/20 text-center"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-[#e9b44c] icon-fill">storefront</span>
                    <span className="text-xs font-black">أنا تاجر / متجر</span>
                  </div>
                  <span className="text-[10px] text-[#1f7a6e] font-bold">بوابة الشركاء المعتمدة</span>
                </div>
              </div>

              <div className="space-y-1.5 mb-6">
                <h2 className="text-xl sm:text-2xl font-black text-primary">
                  تسجيل دخول التاجر الشريك
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant">
                  أدخل رقم المتجر المفوض والرمز السري للوصول للوحة التحكم.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-on-surface mb-1.5" htmlFor="store-id">
                    رقم هاتف المتجر أو اسم المستخدم <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="store-id"
                    required
                    value={storeId}
                    onChange={(e) => setStoreId(e.target.value)}
                    dir="ltr"
                    className="w-full h-12 px-4 rounded-xl border border-outline-variant text-right font-numeral-hero text-sm sm:text-base focus:border-gaza-teal focus:ring-2 focus:ring-gaza-teal/20 outline-none"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs sm:text-sm font-bold text-on-surface" htmlFor="store-pin">
                      رمز الدخول السري (PIN) <span className="text-error">*</span>
                    </label>
                    <Link to="/forgot-password" className="text-xs text-gaza-teal font-bold hover:underline">
                      نسيت الرمز؟
                    </Link>
                  </div>
                  <PasswordInputField
                    id="store-pin"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="رمز PIN من 4 أرقام"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberSession}
                      onChange={(e) => setRememberSession(e.target.checked)}
                      className="rounded text-gaza-teal focus:ring-gaza-teal"
                    />
                    <span className="text-on-surface-variant">حفظ جلسة المتجر على هذا الجهاز</span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 sm:h-13 bg-primary hover:bg-primary-container text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>جاري التحقق...</span>
                      </>
                    ) : (
                      <>
                        <span>دخول لوحة تحكم التاجر</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Bottom Join CTA */}
            <div className="pt-4 border-t border-outline-variant/30 text-center text-xs sm:text-sm text-on-surface-variant">
              <span>هل تملك متجراً ولم تنضم بعد؟</span>
              <Link to="/#merchant-signup" className="font-bold text-gaza-teal hover:underline mr-1 block sm:inline mt-1 sm:mt-0">
                سجّل متجرك كشريك معتمد مجاناً ➔
              </Link>
            </div>

          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
