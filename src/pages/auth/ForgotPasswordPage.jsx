import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BackButton from '../../components/common/BackButton';
import PhoneInputField from '../../components/common/PhoneInputField';

export default function ForgotPasswordPage() {
  const [phone, setPhone] = useState("");
  const [otpMethod, setOtpMethod] = useState("whatsapp");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/reset-password');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f3ec] text-on-surface text-right">
      <Header />

      <main className="flex-1 flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="w-full max-w-xl mx-auto space-y-4">
          
          {/* Top Return */}
          <div className="flex items-center justify-between">
            <BackButton label="العودة لتسجيل الدخول" fallbackRoute="/login" />
            <span className="text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-outline-variant/40">
              استعادة الحساب • 2026
            </span>
          </div>

          {/* Form Card */}
          <section className="w-full bg-surface-container-lowest rounded-3xl p-6 sm:p-10 shadow-sm border border-outline-variant/50 relative overflow-hidden space-y-6">
            
            <div className="space-y-2">
              <h1 className="text-xl sm:text-2xl font-black text-primary">
                استعادة كلمة المرور
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                أدخل رقم الجوال الفلسطيني المرتبط بحسابك وسنرسل لك رمز تحقق فريد (OTP) لتعيين كلمة مرور جديدة فوراً.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Phone Input */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-on-surface mb-1.5" htmlFor="forgot-phone">
                  رقم الجوال الفلسطيني (059 أو 056) <span className="text-error">*</span>
                </label>
                <PhoneInputField
                  id="forgot-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="59X XXX XXX"
                  required
                />
              </div>

              {/* Delivery Channel Radio Cards */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-on-surface mb-2">
                  طريقة استلام رمز التحقق (OTP)
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* WhatsApp */}
                  <label className={`cursor-pointer rounded-2xl p-4 border-2 transition-all block ${
                    otpMethod === "whatsapp" 
                      ? 'border-primary bg-primary/5' 
                      : 'border-outline-variant bg-surface-container-lowest'
                  }`}>
                    <input
                      type="radio"
                      name="otp_method"
                      value="whatsapp"
                      checked={otpMethod === "whatsapp"}
                      onChange={() => setOtpMethod("whatsapp")}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2 font-bold text-primary">
                        <span className="material-symbols-outlined text-emerald-600 text-[20px] icon-fill">chat</span>
                        <span>واتساب مباشر</span>
                      </div>
                      <span className="text-[10px] bg-[#e9b44c] text-primary px-2 py-0.5 rounded-full font-bold">
                        موصى به ⚡
                      </span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant leading-tight">
                      استلام فوري للرمز عبر محادثة منصة تبادل الموثقة
                    </p>
                  </label>

                  {/* SMS */}
                  <label className={`cursor-pointer rounded-2xl p-4 border transition-all block ${
                    otpMethod === "sms" 
                      ? 'border-primary bg-primary/5 ring-1 ring-primary' 
                      : 'border-outline-variant bg-surface-container-lowest'
                  }`}>
                    <input
                      type="radio"
                      name="otp_method"
                      value="sms"
                      checked={otpMethod === "sms"}
                      onChange={() => setOtpMethod("sms")}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2 font-bold text-on-surface">
                        <span className="material-symbols-outlined text-outline text-[20px]">sms</span>
                        <span>رسائل قصيرة SMS</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-on-surface-variant leading-tight">
                      إرسال الرمز عبر شبكة الاتصالات الفلسطينية المعتمدة
                    </p>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 sm:h-13 bg-primary hover:bg-primary-container text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>جاري إرسال الرمز...</span>
                  </>
                ) : (
                  <>
                    <span>إرسال رمز التحقق (OTP)</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            {/* Bottom Support & Return */}
            <div className="pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <Link to="/login" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                <span>تذكرت كلمة المرور؟ تسجيل الدخول</span>
              </Link>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">support_agent</span>
                <span>مساعدة الدعم الفني 24/7</span>
              </a>
            </div>

          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
