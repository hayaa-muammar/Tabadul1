import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BackButton from '../../components/common/BackButton';
import OtpInputGroup from '../../components/common/OtpInputGroup';
import CountdownTimer from '../../components/common/CountdownTimer';
import { useAuth } from '../../context/AuthContext';
import { usePoints } from '../../context/PointsContext';

export default function ShopperOtpVerificationPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();
  const { addPoints } = usePoints();

  const handleVerify = (e) => {
    if (e) e.preventDefault();
    const code = otp.join('');

    if (code.length < 4) {
      setHasError(true);
      setErrorMessage("يرجى إدخال كامل أرقام الرمز المكون من 4 خانات.");
      return;
    }

    // Demo simulation: if code is 7294, show the error state from 10code.html
    if (code === "7294") {
      setHasError(true);
      setErrorMessage("رمز التحقق المدخل غير صحيح أو انتهت صلاحيته. متبقي لك 2 محاولات.");
      return;
    }

    setIsVerifying(true);
    setHasError(false);

    setTimeout(() => {
      setIsVerifying(false);
      addPoints(200); // Award welcome bonus
      navigate('/stores');
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface text-right">
      <Header />

      <main className="flex-1 flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="w-full max-w-xl mx-auto space-y-4">
          
          {/* Top Return Link */}
          <div className="flex items-center justify-between">
            <BackButton label="الرجوع لتعديل رقم الجوال" fallbackRoute="/login" />
            <span className="text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-outline-variant/40">
              خطوة التحقق • 2026
            </span>
          </div>

          {/* Core Verification Card */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 shadow-sm border border-outline-variant/60 relative space-y-6">
            
            {/* Header Icon & Title */}
            <div className="text-center space-y-2">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary shadow-xs">
                <span className="material-symbols-outlined text-3xl">shield_person</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-primary">
                أدخل رمز التحقق السري
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                تم إرسال رمز الأمان المكون من 4 أرقام إلى جوالك 
                <span className="font-bold text-primary mx-1 dir-ltr inline-block font-numeral-hero">
                  {user.phone || "059-9123456"}
                </span> 
                عبر تطبيق واتساب.
              </p>
              <div>
                <Link to="/login" className="text-xs text-gaza-teal font-bold hover:underline inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">edit</span>
                  <span>تعديل الرقم</span>
                </Link>
              </div>
            </div>

            {/* Error Message if any */}
            {hasError && (
              <div className="p-3 bg-error-container/40 border border-error/40 text-error rounded-xl text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                <span>{errorMessage}</span>
              </div>
            )}

            {/* OTP Form */}
            <form onSubmit={handleVerify} className="space-y-6">
              <OtpInputGroup
                otp={otp}
                setOtp={setOtp}
                hasError={hasError}
                onComplete={() => setHasError(false)}
              />

              {/* Welcome Loyalty Bonus Card */}
              <div className="rounded-2xl p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e9b44c] text-primary flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-2xl icon-fill">card_giftcard</span>
                </div>
                <div>
                  <span className="inline-block text-[#835400] text-[10px] font-bold bg-[#ffddb5] px-2 py-0.5 rounded-full mb-0.5">
                    مكافأة الانضمام الترحيبية
                  </span>
                  <p className="text-xs text-on-surface font-medium leading-tight">
                    <strong className="text-emerald-800 font-bold">+200 نقطة ولاء مجانية</strong> ستضاف فوراً لمحفظتك بمجرد إتمام التحقق.
                  </p>
                </div>
              </div>

              {/* Countdown Timer */}
              <CountdownTimer
                initialSeconds={48}
                onResend={() => {
                  setOtp(["", "", "", ""]);
                  setHasError(false);
                }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full h-12 sm:h-13 bg-primary hover:bg-primary-container text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isVerifying ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>جاري التحقق والدخول...</span>
                  </>
                ) : (
                  <>
                    <span>تأكيد والدخول للمنصة والمحفظة</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            {/* Footer Trust Subtext */}
            <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-center gap-3 text-xs text-outline">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span>تشفير مالي 256-bit</span>
              </span>
              <span>•</span>
              <span>منصة تبادل المعتمدة</span>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
