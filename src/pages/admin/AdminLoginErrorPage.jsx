import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminLoginErrorPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin.ops@tabadul.ps');
  const [password, setPassword] = useState('••••••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [attemptsRemaining, setAttemptsRemaining] = useState(2);

  const handleRetry = (e) => {
    e.preventDefault();
    if (attemptsRemaining > 1) {
      setAttemptsRemaining(attemptsRemaining - 1);
    } else {
      // Third failed attempt triggers lockout
      navigate('/admin/lockout');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F6F3EC] text-[#191C22] font-tajawal antialiased selection:bg-[#002b18] selection:text-white">
      {/* ================= TOP ADMINISTRATIVE SOVEREIGN HEADER ================= */}
      <header className="w-full bg-white border-b border-[#E1DACB] sticky top-0 z-30 shadow-xs">
        <div className="max-w-[1280px] mx-auto px-6 h-18 py-3.5 flex items-center justify-between">
          {/* Brand & Sovereign Identifier */}
          <div className="flex items-center gap-4">
            <Link to="/admin/login" className="flex items-center justify-center p-1 bg-[#f2f3fc] rounded-xl border border-[#E1DACB] hover:border-[#1F7A6E] transition-colors">
              <img
                alt="شعار منصة تبادل"
                className="h-10 w-auto object-contain rounded-lg"
                src="/logo.png"
              />
            </Link>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg text-[#002b18] font-bold tracking-tight">منصة تبادل</span>
                <span className="bg-[#004328]/10 text-[#002b18] text-xs font-semibold px-2 py-0.5 rounded-full border border-[#002b18]/20">
                  بوابة الإدارة المركزية والتشغيل
                </span>
              </div>
              <p className="text-[#43474e] text-xs flex items-center gap-1.5 mt-0.5" dir="ltr">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] animate-ping"></span>
                TABADUL ENTERPRISE SOVEREIGN ADMIN • 2026
              </p>
            </div>
          </div>

          {/* Security Telemetry Badges & Terminal Node */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f2f3fc] border border-[#E1DACB] text-[#43474e] text-xs font-semibold">
              <span className="material-symbols-outlined text-[#002b18] text-[18px]">verified_user</span>
              <span>بروتوكول الأمان: <strong className="text-[#191c22] font-bold">TLS 1.3 / EAL4+</strong></span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f2f3fc] border border-[#E1DACB] text-[#43474e] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#ba1a1a]"></span>
              <span>المحطة: <span className="font-mono text-[#191c22]" dir="ltr">GZA-SEC-NODE#04</span></span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ffdad6]/40 border border-[#ba1a1a]/20 text-[#ba1a1a] text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px]">gpp_maybe</span>
              <span className="font-bold">فشل المصادقة</span>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN WORKSPACE (1280px Grid) ================= */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 py-10 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* RIGHT COLUMN: Security Telemetry & Governance Panel (5 Cols) */}
          <aside className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-5">
            {/* Security Rules Card */}
            <div className="bg-white border border-[#E1DACB] rounded-xl p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#E1DACB]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#004328]/10 flex items-center justify-center text-[#002b18]">
                    <span className="material-symbols-outlined text-[20px]">shield</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#191c22]">بروتوكول الامتثال والتحكم السيادي</h3>
                    <p className="text-xs text-[#43474e]">الضوابط المركزية لمشغلي شبكة تبادل</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-xs bg-[#ffdad6] text-[#93000a] font-semibold">
                  تأهب أمني
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {/* Rule 1 */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f2f3fc] border border-[#E1DACB]">
                  <span className="material-symbols-outlined text-[#ba1a1a] text-[20px] mt-0.5">block</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#191c22]">حظر الاسترجاع الآلي لكلمات المرور</h4>
                    <p className="text-xs text-[#43474e] mt-0.5 leading-relaxed">
                      حسابات المشرفين العامين محمية بسياسة عدم التراجع الذاتي؛ لا يُسمح بإعادة التعيين عبر البريد دون توقيع يدوي معتمد.
                    </p>
                  </div>
                </div>

                {/* Rule 2 */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f2f3fc] border border-[#E1DACB]">
                  <span className="material-symbols-outlined text-[#835400] text-[20px] mt-0.5">timer</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#191c22]">سياسة القفل الصارم (3 محاولات)</h4>
                    <p className="text-xs text-[#43474e] mt-0.5 leading-relaxed">
                      يتم حظر عنوان IP ورقم بصمة الجهاز لمدة 45 دقيقة تلقائياً عند استنفاد 3 محاولات غير متطابقة.
                    </p>
                  </div>
                </div>

                {/* Rule 3 */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f2f3fc] border border-[#E1DACB]">
                  <span className="material-symbols-outlined text-[#002b18] text-[20px] mt-0.5">history_edu</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#191c22]">تسجيل وتوثيق التدقيق الرقابي (Audit Log)</h4>
                    <p className="text-xs text-[#43474e] mt-0.5 leading-relaxed">
                      تم قيد هذه المحاولة الفاشلة برقم البصمة <span className="font-mono text-[#002b18] font-bold" dir="ltr">#LOG-9924-ERR</span> وتصديرها لخادم الرقابة المستقل.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E1DACB] flex items-center justify-between text-xs text-[#43474e]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#002b18]">fingerprint</span>
                  بصمة التوقيع الرقمي: SHA-512
                </span>
                <span className="font-mono text-[#191c22] font-semibold" dir="ltr">0x8B...FA19</span>
              </div>
            </div>

            {/* Terminal Status Card */}
            <div className="p-5 rounded-xl border border-[#E1DACB] bg-white flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ecedf6] flex items-center justify-center text-[#43474e]">
                  <span className="material-symbols-outlined text-[22px]">dns</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#191c22]">بوابة النفاذ السيادية - غزة المركزية</p>
                  <p className="text-xs text-[#43474e]">حالة الشبكة: مؤمنة ومتصلة بالخدمات السحابية المعزولة</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#71dba2]"></span>
                <span className="text-xs text-[#002b18] font-bold">نشط</span>
              </div>
            </div>
          </aside>

          {/* LEFT COLUMN: Main Form Card with Error State (7 Cols) */}
          <section className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-sm">
              {/* Subtle top error accent line */}
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-[#ba1a1a]"></div>

              {/* Card Header & Error Context */}
              <div className="flex items-start justify-between mb-6 flex-wrap gap-2">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ffdad6]/60 text-[#ba1a1a] text-xs font-bold mb-2">
                    <span className="material-symbols-outlined text-[16px]">report_problem</span>
                    خطأ في المصادقة الأمنية [رمز A-01]
                  </div>
                  <h1 className="text-xl sm:text-2xl font-bold text-[#191c22]">تسجيل دخول المشرف العام</h1>
                  <p className="text-xs sm:text-sm text-[#43474e] mt-1">
                    الوصول محصور حصرياً بمديري العمليات والشركاء المخولين بمنصة تبادل.
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-mono text-xs font-semibold text-[#ba1a1a] bg-[#ffdad6]/40 px-2.5 py-1 rounded border border-[#ba1a1a]/20" dir="ltr">
                    ATTEMPTS: {3 - attemptsRemaining} / 3
                  </span>
                  <span className="text-xs text-[#43474e] mt-1">جلسة مشفرة</span>
                </div>
              </div>

              {/* CRITICAL ERROR BANNER */}
              <div className="mb-6 p-4 rounded-xl bg-[#ffdad6]/30 border border-[#ba1a1a]/30 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#ba1a1a] text-white shrink-0 flex items-center justify-center mt-0.5">
                  <span className="material-symbols-outlined text-[24px]">crisis_alert</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-sm sm:text-base text-[#93000a] font-bold">بيانات الاعتماد غير متطابقة</h2>
                  <p className="text-xs sm:text-sm text-[#43474e] mt-1 leading-relaxed">
                    يرجى التحقق من المعرّف الوظيفي وكلمة المرور المشفرة. متبقي{' '}
                    <strong className="text-[#ba1a1a] font-bold underline decoration-[#ba1a1a]/50 mx-1">
                      {attemptsRemaining} {attemptsRemaining === 1 ? 'محاولة واحدة' : 'محاولتان'}
                    </strong>
                    قبل القفل الأمني المؤقت للمحطة وإشعار إدارة الرقابة الداخلية.
                  </p>
                </div>
              </div>

              {/* AUTHENTICATION FORM */}
              <form className="space-y-5" onSubmit={handleRetry}>
                {/* Email / Admin ID Input with Error State */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs sm:text-sm text-[#191c22] font-bold" htmlFor="admin-email">
                      المعرّف الوظيفي / البريد الإداري المعتمد
                    </label>
                    <span className="text-xs text-[#ba1a1a] font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">warning</span>
                      معرّف غير مطابق للشهادة
                    </span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#ba1a1a]">
                      <span className="material-symbols-outlined text-[20px]">badge</span>
                    </div>
                    <input
                      aria-describedby="email-error-text"
                      aria-invalid="true"
                      className="w-full h-12 pr-11 pl-10 rounded-xl bg-white border-2 border-[#ba1a1a] text-[#191c22] text-xs sm:text-sm focus:ring-4 focus:ring-[#ba1a1a]/15 focus:outline-none transition-all shadow-xs font-mono"
                      dir="ltr"
                      id="admin-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#ba1a1a]">
                      <span className="material-symbols-outlined text-[20px]">error</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#ba1a1a] flex items-center gap-1 mt-1" id="email-error-text">
                    المعرف الوظيفي أو كلمة المرور غير صحيحة، تأكد من نطاق المؤسسة (@tabadul.ps).
                  </p>
                </div>

                {/* Password Input with Error State */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs sm:text-sm text-[#191c22] font-bold" htmlFor="admin-password">
                      كلمة المرور المشفرة (Sovereign Token)
                    </label>
                    <span className="text-xs text-[#43474e]">مستوى الأمان: عالي (FIPS 140-3)</span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#ba1a1a]">
                      <span className="material-symbols-outlined text-[20px]">key</span>
                    </div>
                    <input
                      aria-invalid="true"
                      className="w-full h-12 pr-11 pl-12 rounded-xl bg-[#ffdad6]/10 border-2 border-[#ba1a1a]/80 text-[#191c22] text-xs sm:text-sm focus:ring-4 focus:ring-[#ba1a1a]/15 focus:outline-none transition-all tracking-widest font-mono"
                      id="admin-password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-[#43474e] hover:text-[#191c22] focus:outline-none cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                      title="إظهار / إخفاء"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? 'visibility' : 'visibility_off'}
                      </span>
                    </button>
                  </div>
                  <p className="text-xs text-[#43474e] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-[#835400]">info</span>
                    يجب إدخال مفتاح المرور الحركي المشفر الخاص بمدير النظام المركزي.
                  </p>
                </div>

                {/* Secondary Token / Security Key Prompt */}
                <div className="p-3.5 rounded-xl bg-[#f2f3fc] border border-[#E1DACB] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#002b18] text-[20px]">token</span>
                    <div>
                      <span className="block text-xs sm:text-sm font-bold text-[#191c22]">
                        مفتاح الحماية الخارجي (FIDO2 / U2F)
                      </span>
                      <span className="block text-xs text-[#43474e]">جاهز للتحقق المادي بمجرد قبول بيانات الاعتماد</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#002b18] font-bold bg-white px-2 py-1 rounded border border-[#E1DACB]" dir="ltr">
                    STANDBY
                  </span>
                </div>

                {/* ACTION BUTTONS */}
                <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                  {/* Primary Retry Button */}
                  <button
                    className="w-full sm:flex-1 h-12 px-6 rounded-xl bg-[#12302B] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#0e2723] active:scale-[0.98] transition-all shadow-md focus:ring-4 focus:ring-[#002b18]/20 cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[20px]">refresh</span>
                    <span>إعادة محاولة المصادقة</span>
                  </button>

                  {/* Secondary IT Sec Support Button */}
                  <button
                    onClick={() => setShowSupportModal(true)}
                    className="w-full sm:w-auto h-12 px-5 rounded-xl border-2 border-[#12302B] text-[#12302B] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#f2f3fc] transition-all active:scale-[0.98] cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">support_agent</span>
                    <span>طلب مساعدة أمان المعلومات IT Sec</span>
                  </button>
                </div>
              </form>

              {/* Warning Notice Footer inside Card */}
              <div className="mt-8 pt-5 border-t border-[#E1DACB] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#43474e]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ba1a1a] text-[18px]">lock_clock</span>
                  <span>
                    المحاولات المتبقية: <strong>{attemptsRemaining} محاولات</strong> قبل الإغلاق التلقائي للمحطة
                  </span>
                </div>
                <Link to="/admin/lockout" className="text-[#002b18] hover:underline font-bold flex items-center gap-1">
                  <span>بروتوكول تفويض الطوارئ</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* IT Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-[#032448]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full border border-[#E1DACB] shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-[#032448] font-bold text-base">
                <span className="material-symbols-outlined text-[#1f3a5f]">shield</span>
                <span>وحدة أمن المعلومات (Gaza IT-Sec)</span>
              </div>
              <button
                className="text-[#43474e] hover:text-[#191c22] p-1 rounded-lg cursor-pointer"
                onClick={() => setShowSupportModal(false)}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-[#43474e] mb-4">
              لإعادة ضبط بيانات الدخول بعد تعثر المصادقة، يرجى تزويد مسؤول أمان العمليات بالمعلومات التالية:
            </p>
            <div className="bg-[#f2f3fc] p-4 rounded-xl space-y-2 mb-5 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-[#43474e]">رقم البصمة:</span>
                <span className="font-bold text-[#ba1a1a]">#LOG-9924-ERR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#43474e]">المحطة:</span>
                <span className="font-bold text-[#002b18]">GZA-SEC-NODE#04</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#43474e]">الخط الداخلي:</span>
                <span className="font-bold text-[#191c22]">#4409 (المقر الميداني)</span>
              </div>
            </div>
            <button
              className="w-full h-11 bg-[#12302B] text-white rounded-xl text-xs sm:text-sm font-bold cursor-pointer hover:bg-[#12302B]/90 transition-colors"
              onClick={() => setShowSupportModal(false)}
              type="button"
            >
              تم التواصل والعودة
            </button>
          </div>
        </div>
      )}

      {/* ================= SOVEREIGN FOOTER BAR ================= */}
      <footer className="w-full bg-white border-t border-[#E1DACB] py-4 mt-8">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#43474e]">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 text-[#002b18] font-bold">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Zero-Trust Architecture</span>
            </div>
            <span className="text-[#c4c6cf]">•</span>
            <div className="flex items-center gap-1.5 font-mono" dir="ltr">
              <span className="material-symbols-outlined text-[18px] text-[#43474e]">lock</span>
              <span>AES-256 GCM ENCRYPTED</span>
            </div>
            <span className="text-[#c4c6cf] hidden sm:inline">•</span>
            <span className="hidden sm:inline">نظام تشغيل وإدارة المتاجر المحلية المعتمدة - 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <span>
              مركز الاستجابة للحوادث السيبرانية:{' '}
              <strong className="text-[#002b18] font-bold font-mono" dir="ltr">
                sec-ops@tabadul.ps
              </strong>
            </span>
            <span className="font-mono text-[11px] bg-[#ecedf6] px-2 py-0.5 rounded text-[#191c22] border border-[#E1DACB]" dir="ltr">
              BUILD 4.19.2-GAZA
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
