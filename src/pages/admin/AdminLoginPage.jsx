import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState('admin.ops@tabadul.ps');
  const [password, setPassword] = useState('••••••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [lockoutTime, setLockoutTime] = useState(299); // 04:59

  useEffect(() => {
    const timer = setInterval(() => {
      setLockoutTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Proceed to Step 2: 2FA Authentication
    navigate('/admin/2fa');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F6F3EC] text-[#191c22] font-tajawal antialiased selection:bg-[#ffddb5] selection:text-[#2a1800]">
      {/* ================= Top Sovereign Security Bar ================= */}
      <header className="w-full bg-white border-b border-[#c4c6cf]/30 px-6 py-3 shadow-xs sticky top-0 z-40">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Brand Cluster */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <img
                alt="شعار منصة تبادل الإدارية"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105 rounded-lg"
                src="/logo.png"
              />
              <div className="h-6 w-px bg-[#c4c6cf]/50 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg text-[#032448] font-bold leading-tight">
                  بوابة الإدارة المركزية والتشغيل
                </span>
                <span className="text-xs text-[#43474e] font-medium">
                  Tabadul Enterprise Sovereign Admin • قطاع غزة
                </span>
              </div>
            </Link>
          </div>

          {/* Security Meta Badges */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#ecedf6] rounded-lg border border-[#c4c6cf]/40">
              <span className="w-2 h-2 rounded-full bg-[#004328] animate-pulse"></span>
              <span className="text-xs text-[#43474e] font-mono">محطة العمل: GZ-SEC-SRV-901</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#004328]/10 border border-[#004328]/20 rounded-lg text-[#004328]">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span className="text-xs font-semibold tracking-wide">TLS 1.3 / EAL4+ المشفرة</span>
            </div>
          </div>
        </div>
      </header>

      {/* ================= Main Canvas (1280px Desktop Centered Architecture) ================= */}
      <main className="flex-grow flex items-center justify-center p-6 lg:p-10">
        <div className="w-full max-w-[1180px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Right Side: Sovereign Security Briefing & Policy (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-xl border border-[#E1DACB] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1f3a5f] text-white flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-[22px]">admin_panel_settings</span>
                </div>
                <div>
                  <h2 className="text-base sm:text-lg text-[#032448] font-bold">نظام الوصول السيادي المقيّد</h2>
                  <p className="text-xs text-[#43474e]">الوصول حصري للمشرفين المعتمدين والمشغلين</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#191c22]">
                <div className="p-3 bg-[#e3f2ef] rounded-lg flex items-start gap-2.5 border border-[#1f7a6e]/20">
                  <span className="material-symbols-outlined text-[#1f3a5f] mt-0.5 text-[18px]">verified</span>
                  <span>تسجيل دخول ثنائي إلزامي بموجب المعايير الرقابية لأنظمة النقد والمكافآت.</span>
                </div>
                <div className="p-3 bg-[#e3f2ef] rounded-lg flex items-start gap-2.5 border border-[#1f7a6e]/20">
                  <span className="material-symbols-outlined text-[#1f3a5f] mt-0.5 text-[18px]">lock_clock</span>
                  <span>الإغلاق الآلي الفوري للجلسات بعد 3 محاولات غير متطابقة لحماية الخوادم.</span>
                </div>
              </div>

              {/* Strict Policy Alert */}
              <div className="mt-5 p-4 bg-[#e3f2ef] rounded-xl border-r-4 border-[#12302B]">
                <h4 className="text-sm text-[#032448] font-bold mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">policy</span>
                  بروتوكول استعادة الصلاحيات
                </h4>
                <p className="text-xs text-[#43474e] leading-relaxed">
                  استعادة الصلاحيات وكلمة المرور تتم حصراً عبر مراجعة مسؤول أمن المعلومات الميداني المشفر وفق بروتوكول الأمان الداخلي المعتمد في غزة. لا يتوفر استرجاع آلي عبر البريد.
                </p>
              </div>
            </div>

            {/* Infrastructure Status Card */}
            <div className="bg-white/80 p-4 rounded-xl border border-[#E1DACB] flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#43474e] text-[20px]">hub</span>
                <div>
                  <span className="block text-xs text-[#191c22] font-semibold">عقدة الاتصال الإقليمية: خانيونس / غزة</span>
                  <span className="block text-[11px] text-[#43474e]">وقت الاستجابة: 24ms • التشفير نشط</span>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#8df8bd] text-[#002112]">
                مستقر 100%
              </span>
            </div>
          </div>

          {/* Left Side: Interactive Two-Step Secure Login Panel (7 Columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white rounded-2xl border border-[#E1DACB] shadow-sm p-6 sm:p-8 lg:p-10 relative">
              {/* Security Lockout Alert Banner */}
              <Link
                to="/admin/lockout"
                className="mb-6 p-4 bg-[#ffdad6]/40 border border-[#ba1a1a]/30 rounded-xl flex items-start gap-3 hover:bg-[#ffdad6]/60 transition-colors cursor-pointer group"
                title="اضغط لمعاينة شاشة القفل الأمني المؤقت"
              >
                <span className="material-symbols-outlined text-[#ba1a1a] text-[24px] mt-0.5">lock_clock</span>
                <div className="flex-grow">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs sm:text-sm font-bold text-[#ba1a1a] flex items-center gap-1.5">
                      <span>حالة القفل الأمني المؤقت الذكي</span>
                      <span className="text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded font-mono font-bold">
                        A-01 LOCKOUT
                      </span>
                    </span>
                    <span className="text-xs bg-white text-[#ba1a1a] px-2.5 py-0.5 rounded border border-[#ba1a1a]/20 font-bold font-mono">
                      {formatTime(lockoutTime)}
                    </span>
                  </div>
                  <p className="text-xs text-[#43474e] mt-1 leading-relaxed">
                    تم قفل إمكانية المحاولة مؤقتاً لمدة 04:59 دقيقة لحماية الحساب من الهجمات بعد تسجيل محاولات غير متطابقة. اضغط للاطلاع على تفاصيل العزل.
                  </p>
                </div>
              </Link>

              {/* Panel Heading */}
              <div className="mb-8">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h1 className="text-xl sm:text-2xl text-[#032448] font-bold">تسجيل دخول المشرفين</h1>
                  <span className="text-xs px-2.5 py-1 bg-[#e3f2ef] text-[#12302B] rounded font-bold">
                    الخطوة 1 من 2: التحقق من الهوية
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#43474e] mt-1">
                  الخطوة 1 من 2: التحقق من بيانات الاعتماد الإدارية. أدخل المعرّف الوظيفي المعتمد وكلمة المرور المشفرة للمتابعة.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleLoginSubmit}>
                {/* Step 1: Identifier */}
                <div>
                  <label className="block text-xs sm:text-sm text-[#191c22] mb-2 font-bold" htmlFor="admin-id">
                    البريد الإلكتروني الإداري المعتمد أو رقم الهاتف المصرح به
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 pr-11 pl-4 rounded-xl bg-white border border-[#E1DACB] text-[#191c22] text-xs sm:text-sm focus:border-[#1f3a5f] focus:ring-2 focus:ring-[#1f3a5f]/20 transition-colors font-mono"
                      id="admin-id"
                      name="admin-id"
                      placeholder="name@tabadul.ps أو +970 59..."
                      required
                      type="text"
                      value={adminId}
                      onChange={(e) => setAdminId(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#43474e]">
                      <span className="material-symbols-outlined text-[20px]">badge</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#004328] mt-1.5 flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    تم التحقق من نطاق الهوية الإدارية المعتمدة
                  </p>
                </div>

                {/* Step 1: Password with visibility toggle */}
                <div>
                  <label className="block text-xs sm:text-sm text-[#191c22] mb-2 font-bold" htmlFor="admin-pwd">
                    كلمة المرور الإدارية المعقدة
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 pr-11 pl-12 rounded-xl bg-white border border-[#E1DACB] text-[#191c22] text-xs sm:text-sm focus:border-[#1f3a5f] focus:ring-2 focus:ring-[#1f3a5f]/20 transition-colors font-mono tracking-wider"
                      id="admin-pwd"
                      name="admin-pwd"
                      placeholder="أدخل كلمة المرور المشفرة"
                      required
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#43474e]">
                      <span className="material-symbols-outlined text-[20px]">lock</span>
                    </div>
                    <button
                      className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-[#43474e] hover:text-[#032448] transition-colors focus:outline-none cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                      title="كشف/إخفاء كلمة المرور"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                  <p className="text-xs text-[#43474e] mt-1.5">
                    يجب ألا تقل عن 12 خانة مع تضمين أحرف كبيرة وصغيرة ورموز خاصة.
                  </p>
                </div>

                {/* Action Controls Group */}
                <div className="pt-4 space-y-3">
                  {/* Primary 48px Height Sovereign Submission Button */}
                  <button
                    className="w-full h-12 bg-[#12302B] hover:bg-[#12302B]/90 text-white text-sm rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all duration-150 active:scale-[0.99] font-bold cursor-pointer"
                    type="submit"
                  >
                    <span>متابعة التحقق (إلى الخطوة 2)</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                  </button>

                  {/* Secondary Support Trigger & Telemetry */}
                  <div className="flex items-center justify-between flex-wrap gap-2 pt-2">
                    <button
                      className="h-10 px-4 rounded-xl border border-[#c4c6cf]/60 text-[#032448] hover:bg-[#ecedf6] text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                      onClick={() => setShowSupportModal(true)}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">support_agent</span>
                      <span>طلب دعم الأمان الداخلي (IT Sec)</span>
                    </button>

                    <div className="text-xs text-[#43474e] flex items-center gap-1 font-mono">
                      <span className="material-symbols-outlined text-[16px] text-[#004328]">verified</span>
                      <span>IP موثق: 192.168.10.42</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Sovereign IT Support Modal (Overlay) */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-[#032448]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full border border-[#E1DACB] shadow-xl p-6 relative">
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

            <p className="text-xs sm:text-sm text-[#43474e] mb-4 leading-relaxed">
              للحالات الطارئة الخاصة بتعطيل حسابات المشرفين أو تجديد مفاتيح 2FA المادية:
            </p>

            <div className="bg-[#ecedf6] p-4 rounded-xl space-y-2 mb-5 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[#43474e]">الخط الداخلي المباشر:</span>
                <span className="font-bold text-[#032448] font-mono">#4409 (المقر الميداني)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#43474e]">البريد المشفر (PGP):</span>
                <span className="font-bold text-[#032448] font-mono">sec-ops@tabadul.gaza</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#43474e]">رمز الاستجابة السريعة:</span>
                <span className="font-bold text-[#004328] font-mono">Sovereign-Ops-2025</span>
              </div>
            </div>

            <button
              className="w-full h-11 bg-[#12302B] text-white rounded-xl text-xs sm:text-sm font-bold cursor-pointer hover:bg-[#12302B]/90 transition-colors"
              onClick={() => setShowSupportModal(false)}
              type="button"
            >
              إغلاق النافذة والعودة
            </button>
          </div>
        </div>
      )}

      {/* Persistent Sovereign Legal and Technical Footer */}
      <footer className="w-full border-t border-[#c4c6cf]/30 bg-white px-6 py-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#43474e]">
          <div className="flex items-center gap-2">
            <span>© 2025 منصة تبادل للولاء والمكافآت • ترخيص المشغل الوطني الموحد</span>
            <span>•</span>
            <span className="font-semibold text-[#032448]">v4.8.2 Enterprise</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#004328]">lock</span>
              اتصال مُعمّى بالكامل بموجب معايير حماية البيانات
            </span>
            <span className="hidden sm:inline">•</span>
            <span>المنطقة: فلسطين - قطاع غزة</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
