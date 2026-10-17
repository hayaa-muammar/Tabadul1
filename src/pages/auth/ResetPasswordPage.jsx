import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BackButton from '../../components/common/BackButton';
import PasswordInputField from '../../components/common/PasswordInputField';

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      setError("يجب أن تتكون كلمة المرور من 8 خانات على الأقل.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("كلمات المرور غير متطابقة، يرجى إعادة التأكد.");
      return;
    }
    setError(null);
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/login');
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f3ec] text-on-surface text-right">
      <Header />

      <main className="flex-1 flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="w-full max-w-xl mx-auto space-y-4">
          
          <div className="flex items-center justify-between">
            <BackButton label="العودة للخطوة السابقة" fallbackRoute="/forgot-password" />
            <span className="text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-outline-variant/40">
              خطوة الحماية الأخيرة
            </span>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 shadow-sm border border-outline-variant/60 relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-[#e9b44c] via-[#1f7a6e] to-[#12302b]" />

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <span className="material-symbols-outlined text-[15px] icon-fill text-emerald-600">verified</span>
                <span>تم تأكيد كود الأمان بنجاح</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-primary">
                تعيين كلمة مرور جديدة
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                أدخل كلمة المرور الجديدة لحسابك وقم بتأكيدها لضمان حماية محفظتك ورصيد مكافآتك.
              </p>
            </div>

            {error && (
              <div className="p-3 bg-error-container/40 border border-error/40 text-error rounded-xl text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                <span>{error}</span>
              </div>
            )}

            {isSuccess ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-2">
                <span className="material-symbols-outlined text-4xl text-emerald-600 icon-fill animate-bounce">
                  check_circle
                </span>
                <p className="font-bold text-base text-emerald-900">تم حفظ كلمة المرور بنجاح!</p>
                <p className="text-xs text-emerald-700">جاري تحويلك إلى شاشة تسجيل الدخول...</p>
              </div>
            ) : (
              <form onSubmit={handleReset} className="space-y-5">
                <PasswordInputField
                  id="new-pwd"
                  label="كلمة المرور الجديدة"
                  placeholder="8 أحرف وأرقام على الأقل"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />

                <PasswordInputField
                  id="confirm-new-pwd"
                  label="تأكيد كلمة المرور الجديدة"
                  icon="lock_reset"
                  placeholder="أعد إدخال كلمة المرور"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <div className="p-3.5 bg-surface-container-low rounded-xl text-xs text-on-surface-variant space-y-1">
                  <span className="font-bold text-primary block">معايير أمان كلمة المرور:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] pr-1">
                    <li className={newPassword.length >= 8 ? "text-emerald-700 font-bold" : ""}>
                      8 خانات على الأقل (أحرف أو أرقام)
                    </li>
                    <li className={/[0-9]/.test(newPassword) ? "text-emerald-700 font-bold" : ""}>
                      تحتوي على أرقام لتعزيز أمان الحساب
                    </li>
                  </ul>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 sm:h-13 bg-primary hover:bg-primary-container text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>حفظ كلمة المرور وتسجيل الدخول</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
