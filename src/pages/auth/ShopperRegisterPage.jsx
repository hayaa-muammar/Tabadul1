import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BackButton from '../../components/common/BackButton';
import PhoneInputField from '../../components/common/PhoneInputField';
import PasswordInputField from '../../components/common/PasswordInputField';
import { useAuth } from '../../context/AuthContext';

export default function ShopperRegisterPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [otpChannel, setOtpChannel] = useState("whatsapp");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { loginAsShopper } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("كلمات المرور غير متطابقة، يرجى التأكد وإعادة المحاولة.");
      return;
    }
    setError(null);
    loginAsShopper(phone || "059-9123456", fullName || "سارة أحمد");
    navigate('/verify-otp');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f3ec] text-on-surface text-right">
      <Header />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Right/Primary Column: Registration Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl border border-outline-variant/60 p-6 sm:p-8 md:p-10 shadow-sm relative space-y-6">
            
            {/* Top Back Action */}
            <div className="flex items-center justify-between pb-2">
              <BackButton label="العودة لتسجيل الدخول" fallbackRoute="/login" />
              <span className="text-xs font-bold text-gaza-teal bg-gaza-teal/10 px-3 py-1 rounded-full">
                حساب جديد • 2026
              </span>
            </div>

            {/* Welcome Reward Highlight Banner */}
            <div className="bg-gradient-to-r from-primary to-[#1f7a6e] text-white p-4 sm:p-5 rounded-2xl flex items-center justify-between shadow-md relative overflow-hidden">
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-11 h-11 rounded-xl bg-[#e9b44c] text-primary flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-[24px] icon-fill">featured_seasonal_and_gifts</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#ffddb5]">هدية ترحيبية فورية للمتسوقين</p>
                  <h2 className="text-base sm:text-lg font-bold text-white mt-0.5">200 نقطة (1 ₪) مجاناً بمحفظتك</h2>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold bg-white/15 px-2.5 py-1 rounded-full text-white backdrop-blur-xs">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                <span>تفعيل فوري</span>
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl font-black text-primary">
                إنشاء حساب متسوق جديد في تبادل
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                انضم لشبكة ولاء ومكافآت الأزياء والأحذية في غزة واكسب كاش باك 5% على كل طلب.
              </p>
            </div>

            {error && (
              <div className="p-3 bg-error-container/40 border border-error/40 text-error rounded-xl text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                <span>{error}</span>
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleRegister} className="space-y-4 sm:space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-on-surface mb-1.5" htmlFor="full-name">
                  الاسم الكامل (الثلاثي) <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="full-name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: يوسف أحمد حمدان"
                    className="w-full h-12 pr-11 pl-4 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface text-sm sm:text-base focus:border-gaza-teal focus:ring-2 focus:ring-gaza-teal/20 outline-none"
                  />
                  <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-outline text-[20px]">
                    person
                  </span>
                </div>
              </div>

              {/* Mobile Phone */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-on-surface mb-1.5" htmlFor="reg-phone">
                  رقم الجوال الفلسطيني <span className="text-error">*</span>
                </label>
                <PhoneInputField
                  id="reg-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="059 123 4567"
                  required
                />
              </div>

              {/* OTP Delivery Channel Choice */}
              <div>
                <span className="block text-xs sm:text-sm font-bold text-on-surface mb-2">
                  طريقة استلام رمز التأكيد (OTP من 4 أرقام) <span className="text-error">*</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* WhatsApp Option */}
                  <label className={`cursor-pointer rounded-xl p-3 flex items-center justify-between border-2 transition-all ${
                    otpChannel === "whatsapp" 
                      ? 'border-gaza-teal bg-gaza-teal/5' 
                      : 'border-outline-variant bg-surface-container-lowest'
                  }`}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px] icon-fill">chat</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 font-bold text-primary">
                          <span>واتساب مباشر</span>
                          <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.2 rounded font-bold">فوري</span>
                        </div>
                        <span className="text-[10px] text-on-surface-variant">توصيل سريع مضمون</span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="otp_channel"
                      value="whatsapp"
                      checked={otpChannel === "whatsapp"}
                      onChange={() => setOtpChannel("whatsapp")}
                      className="text-gaza-teal focus:ring-gaza-teal"
                    />
                  </label>

                  {/* SMS Option */}
                  <label className={`cursor-pointer rounded-xl p-3 flex items-center justify-between border transition-all ${
                    otpChannel === "sms" 
                      ? 'border-gaza-teal bg-gaza-teal/5 ring-1 ring-gaza-teal' 
                      : 'border-outline-variant bg-surface-container-lowest'
                  }`}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">sms</span>
                      </div>
                      <div>
                        <span className="font-bold text-primary block">رسائل نصية SMS</span>
                        <span className="text-[10px] text-on-surface-variant">عبر شبكة الاتصالات</span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="otp_channel"
                      value="sms"
                      checked={otpChannel === "sms"}
                      onChange={() => setOtpChannel("sms")}
                      className="text-gaza-teal focus:ring-gaza-teal"
                    />
                  </label>
                </div>
              </div>

              {/* Password Pair Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <PasswordInputField
                  id="reg-pwd"
                  label="كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <PasswordInputField
                  id="reg-pwd-confirm"
                  label="تأكيد كلمة المرور"
                  icon="lock_reset"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                    className="mt-0.5 rounded text-gaza-teal focus:ring-gaza-teal"
                  />
                  <span className="text-xs text-on-surface-variant leading-relaxed">
                    أوافق على <strong>شروط الاستخدام</strong> و <strong>سياسة الخصوصية</strong> الخاصة بشبكة مكافآت تبادل لعام 2026.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 sm:h-13 bg-primary hover:bg-primary-container text-white rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>إنشاء الحساب وتفعيل الهدية</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </form>

            {/* Bottom Return to Login */}
            <div className="pt-4 border-t border-outline-variant/40 text-center text-xs sm:text-sm text-on-surface-variant">
              <span>لديك حساب بالفعل في تبادل؟</span>
              <Link to="/login" className="font-bold text-gaza-teal hover:underline mr-1 inline-flex items-center gap-1">
                <span>تسجيل الدخول</span>
                <span className="material-symbols-outlined text-sm">arrow_back</span>
              </Link>
            </div>

          </div>

          {/* Left Column: Consumer Benefits & Trust Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-[#12302b] text-white p-6 rounded-3xl shadow-sm space-y-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#e9b44c] text-primary text-[10px] font-black uppercase">
                الشبكة الموحدة
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                تسوّق بذكاء واجمع مكافآتك في مكان واحد
              </h2>
              <p className="text-xs text-white/85 leading-relaxed">
                لا داعي لبطاقات الولاء المشتتة. بطاقة رقمية واحدة تعمل بسلاسة في أرقى معارض الأزياء والأحذية في غزة.
              </p>
            </div>

            {/* 3 Core Benefits */}
            <div className="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl border border-outline-variant/60 space-y-1">
              <div className="flex items-center gap-2 text-primary font-bold text-xs sm:text-sm">
                <span className="material-symbols-outlined text-emerald-600 icon-fill text-lg">percent</span>
                <span>كاش باك 5% دائم ومستمر</span>
              </div>
              <p className="text-xs text-on-surface-variant pr-6">
                اكسب 5% نقاط كاش باك على مشتريات الملابس والأحذية في جميع المتاجر الشريكة.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl border border-outline-variant/60 space-y-1">
              <div className="flex items-center gap-2 text-primary font-bold text-xs sm:text-sm">
                <span className="material-symbols-outlined text-[#835400] icon-fill text-lg">sync_alt</span>
                <span>رصيد موحد ومتنقل بين المتاجر</span>
              </div>
              <p className="text-xs text-on-surface-variant pr-6">
                النقاط التي تكتسبها في متجر أحذية يمكنك استبدالها فوراً لخصم مشترياتك في متجر ملابس آخر.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl border border-outline-variant/60 space-y-1">
              <div className="flex items-center gap-2 text-primary font-bold text-xs sm:text-sm">
                <span className="material-symbols-outlined text-primary icon-fill text-lg">verified_user</span>
                <span>حماية برمز استلام فريد (OTP)</span>
              </div>
              <p className="text-xs text-on-surface-variant pr-6">
                لا تخصم نقاطك ولا يتم تأكيد الطلب إلا عبر رمز استلام شخصي مكون من 4 أرقام يصلك أنت فقط.
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
