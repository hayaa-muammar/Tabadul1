import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminSecurityLockoutPage() {
  const navigate = useNavigate();
  const [totalSeconds, setTotalSeconds] = useState(296); // 04:56 matching screenshot
  const totalInitial = 300;
  const [showCallModal, setShowCallModal] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const progressPercent = Math.max(0, Math.min(100, (totalSeconds / totalInitial) * 100));

  const handleUnlockWithKey = () => {
    setShowKeyModal(true);
    setTimeout(() => {
      setShowKeyModal(false);
      navigate('/admin/2fa');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#191c22] font-tajawal antialiased selection:bg-[#ffddb5] selection:text-[#2a1800]">
      {/* ================= Top Administrative Sovereign Header ================= */}
      <header className="w-full bg-[#12302B] text-white border-b border-[#234B44] shadow-md sticky top-0 z-50">
        <div className="max-w-[1360px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand & Sovereign Identity */}
          <div className="flex items-center gap-4">
            <Link to="/admin/login" className="flex items-center gap-3 bg-[#0c221e] px-3.5 py-1.5 rounded-xl border border-[#1b3d37] hover:border-[#E9B44C]/40 transition-colors">
              <img
                alt="شعار منصة تبادل السيادية"
                className="h-8 w-auto object-contain rounded-md"
                src="/logo.png"
              />
              <div className="h-6 w-px bg-[#234B44]"></div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-wide text-white">بوابة الإدارة المركزية والتشغيل</span>
                <span className="text-[10px] text-[#A6BAAD] font-mono tracking-wider">
                  TABADUL ENTERPRISE SOVEREIGN ADMIN • 2026
                </span>
              </div>
            </Link>

            {/* Security Level Badge */}
            <div className="hidden md:flex items-center gap-2 bg-[#1b3e37] text-[#8DF8BD] px-3 py-1 rounded-full text-xs font-medium border border-[#27594f]">
              <span className="material-symbols-outlined text-[16px] icon-fill">security</span>
              <span>تشفير عالي الحصانة TLS 1.3 / HSM Grade</span>
            </div>
          </div>

          {/* State & Audit Capsule */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#B34024]/15 border border-[#B34024]/40 px-3.5 py-1.5 rounded-lg text-[#FFB4A3] text-xs font-semibold animate-pulse">
              <span className="h-2 w-2 rounded-full bg-[#FF5449]"></span>
              <span>المحطة مقفلة مؤقتاً للتدقيق الأمني</span>
            </div>
            <div className="h-6 w-px bg-[#234B44] hidden sm:block"></div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-[#A6BAAD]">
              <span className="material-symbols-outlined text-base">dns</span>
              <span className="font-mono">WS-GAZA-CORE-09</span>
            </div>
          </div>
        </div>
      </header>

      {/* Security Alert Banner */}
      <div className="w-full bg-[#E58514]/10 border-b border-[#E58514]/30 py-2.5 px-6">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between text-xs sm:text-sm text-[#7D4600] flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#B36000] text-lg icon-fill">warning</span>
            <span className="font-bold">تنبيه نظام الحماية السيبرانية:</span>
            <span className="text-[#8F5104]">
              تم تفعيل بروتوكول العزل اللحظي لمنع الهجمات الموجهة وتأمين حسابات المشغلين ذوي الصلاحيات العليا.
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-xs font-mono font-medium text-[#7D4600]">
            <span>INCIDENT REF: <strong className="text-[#032448]">#SEC-8941</strong></span>
            <span>AUTH_NODE: <strong className="text-[#032448]">CORE_PAL_01</strong></span>
          </div>
        </div>
      </div>

      {/* Main Canvas Container */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 sm:px-6 py-8 md:py-10 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Center Main Security Lock Card (7 Cols) */}
          <section className="lg:col-span-7 bg-white rounded-2xl border border-[#E1DACB] shadow-[0_4px_20px_-4px_rgba(18,48,43,0.06)] overflow-hidden">
            {/* Header Ribbon inside Card */}
            <div className="bg-gradient-to-r from-[#12302B] to-[#1d463f] p-6 text-white relative overflow-hidden">
              <div className="absolute -left-6 -bottom-6 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[140px]">shield_lock</span>
              </div>
              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-[#E58514]/20 border border-[#E58514]/40 flex items-center justify-center p-3 text-[#FFB765] shadow-inner">
                    <span className="material-symbols-outlined text-[32px] icon-fill">lock_clock</span>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E58514]/25 text-[#FFCD93] text-[11px] font-bold border border-[#E58514]/30 mb-1">
                      <span>رمز الكود الأمني: 429-RATE_LIMIT</span>
                    </div>
                    <h1 className="text-xl sm:text-2xl font-bold text-white">
                      محطة العمل الإدارية مقفلة مؤقتاً
                    </h1>
                  </div>
                </div>
                <div className="text-left font-mono">
                  <span className="text-[11px] text-[#A6BAAD] block">حالة العزل</span>
                  <span className="text-xs font-bold text-[#FF8577] bg-[#5C1D13] px-2 py-0.5 rounded">
                    عزل نشط
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              {/* Countdown Hero Module */}
              <div className="bg-[#F8F6F0] rounded-xl border border-[#E7E2D5] p-5 text-center flex flex-col items-center justify-center relative">
                <span className="text-xs sm:text-sm text-[#43474e] font-medium mb-1">
                  الوقت التقديري المتبقي لانتهاء الحظر التلقائي
                </span>
                <div className="flex items-baseline gap-2 text-[#B34024] my-1">
                  <span className="font-mono text-4xl sm:text-5xl font-extrabold tracking-tight">
                    {formatTimer(totalSeconds)}
                  </span>
                  <span className="text-sm font-bold text-[#8A321B]">دقيقة متبقية</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-md h-2 bg-[#E1DACB] rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-gradient-to-r from-[#E58514] to-[#B34024] rounded-full transition-all duration-1000"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>

                <p className="text-xs text-[#43474e] mt-3 text-center max-w-lg leading-relaxed">
                  تم تجميد محاولات الدخول مؤقتاً لمدة <span className="font-bold text-[#191c22]">05:00 دقائق</span> بعد تسجيل <span className="font-bold text-[#191c22]">3 محاولات متتالية غير متطابقة</span>، وذلك لمنع هجمات القوة الغاشمة (Brute-Force Attack) وحماية صلاحيات الإدارة العليا لمنصة تبادل.
                </p>
              </div>

              {/* Disabled Form Fields View */}
              <form className="space-y-4 pointer-events-none opacity-60" onSubmit={(e) => e.preventDefault()}>
                {/* Email Field (Disabled) */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm text-[#191c22] font-semibold">
                    البريد الإلكتروني المعتمد لمدير النظام
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 bg-[#F1EFEA] border border-[#D5CFBF] rounded-xl text-[#43474e] px-4 pr-11 text-xs sm:text-sm cursor-not-allowed select-none font-mono"
                      disabled
                      type="email"
                      value="admin.ops@tabadul-platform.ps"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#74777f]">
                      <span className="material-symbols-outlined text-[20px]">person_off</span>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#74777f]">
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                    </div>
                  </div>
                </div>

                {/* Password Field (Disabled) */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="block text-xs sm:text-sm text-[#191c22] font-semibold">
                      كلمة المرور المشفرة
                    </label>
                    <span className="text-[11px] text-[#74777f]">تشفير خوارزمي مقفل</span>
                  </div>
                  <div className="relative">
                    <input
                      className="w-full h-12 bg-[#F1EFEA] border border-[#D5CFBF] rounded-xl text-[#43474e] px-4 pr-11 tracking-widest text-xs sm:text-sm cursor-not-allowed select-none"
                      disabled
                      type="password"
                      value="••••••••••••••••"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#74777f]">
                      <span className="material-symbols-outlined text-[20px]">password</span>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#74777f]">
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                    </div>
                  </div>
                </div>

                {/* Disabled Primary Action Button */}
                <div className="pt-2">
                  <button
                    className="w-full h-12 bg-[#D1C9BA] text-[#696153] rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-not-allowed border border-[#BDB4A3] shadow-none"
                    disabled
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">lock_clock</span>
                    <span>المحطة قيد القفل الأمني المؤقت ({formatTimer(totalSeconds)})</span>
                  </button>
                </div>
              </form>

              {/* Emergency Restore Action Cards */}
              <div className="pt-4 border-t border-[#E1DACB]">
                <h2 className="text-sm font-bold text-[#12302B] mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#12302B] text-[20px]">emergency</span>
                  <span>مسارات فك العزل والاستعادة الطارئة للمحطة:</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Action 1: Call IT Security */}
                  <div
                    onClick={() => setShowCallModal(true)}
                    className="p-4 rounded-xl border border-[#E1DACB] bg-[#FAF8F4] hover:bg-white hover:border-[#12302B] transition-colors duration-150 flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#12302B]/10 text-[#12302B] flex items-center justify-center">
                          <span className="material-symbols-outlined text-[20px]">support_agent</span>
                        </div>
                        <div>
                          <span className="block text-xs sm:text-sm font-bold text-[#191c22]">
                            مسؤول أمن المعلومات الميداني
                          </span>
                          <span className="text-[11px] text-[#43474e] font-mono">SecOps Direct Hotline</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#43474e] mb-3 leading-relaxed">
                        اتصال آمن ومباشر لإعادة تعيين الجلسة يدوياً بعد التحقق من الهوية البيومترية.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#EAE5D9] flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#12302B]">EXT: 8900-SEC</span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#12302B] font-bold group-hover:underline">
                        <span>طلب الاتصال</span>
                        <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                      </span>
                    </div>
                  </div>

                  {/* Action 2: FIDO2 / YubiKey */}
                  <div
                    onClick={handleUnlockWithKey}
                    className="p-4 rounded-xl border border-[#E1DACB] bg-[#FAF8F4] hover:bg-white hover:border-[#12302B] transition-colors duration-150 flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#E58514]/15 text-[#9E5700] flex items-center justify-center">
                          <span className="material-symbols-outlined text-[20px]">usb</span>
                        </div>
                        <div>
                          <span className="block text-xs sm:text-sm font-bold text-[#191c22]">
                            مفتاح الحماية المادي FIDO2
                          </span>
                          <span className="text-[11px] text-[#43474e] font-mono">YubiKey Hardware Bypass</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#43474e] mb-3 leading-relaxed">
                        إدراج المفتاح المادي المشفر في منفذ المحطة لتخطي القفل الاستثنائي الفوري.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#EAE5D9] flex items-center justify-between">
                      <span className="text-xs font-mono text-[#835400]">SLOT 1 • READY</span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#835400] font-bold group-hover:underline">
                        <span>تحقق من المفتاح</span>
                        <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer strip inside card */}
            <div className="bg-[#F1ECE1] px-6 py-3 border-t border-[#E1DACB] flex items-center justify-between text-xs text-[#43474e]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#2E9E6B]">verified_user</span>
                <span>بيئة عمل منصة تبادل مشفرة ومطابقة لمعايير ISO/IEC 27001</span>
              </div>
              <span className="font-mono text-[11px]">POLICY ID: POL-AUTH-BRUTEFORCE-v4</span>
            </div>
          </section>

          {/* Side Security Governance & Audit Panel (5 Cols) */}
          <aside className="lg:col-span-5 space-y-5">
            {/* Live Incident Tracker Card */}
            <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#EBE6DA] pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#B34024] text-[22px]">quick_reference_all</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#191c22]">سجل الرقابة اللحظي</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#FFDAD6] text-[#93000A]">
                  #SEC-8941
                </span>
              </div>

              {/* Metadata List */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-dashed border-[#EAE5D9]">
                  <span className="text-[#43474e]">نوع الحدث الأمني:</span>
                  <span className="font-bold text-[#ba1a1a]">إخفاق مصادقة متعدد (3 محاولات)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-dashed border-[#EAE5D9]">
                  <span className="text-[#43474e]">عنوان البروتوكول (IP):</span>
                  <span className="font-mono font-bold text-[#191c22]" dir="ltr">192.168.104.42 (Internal LAN)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-dashed border-[#EAE5D9]">
                  <span className="text-[#43474e]">التوقيت الدقيق للحادثة:</span>
                  <span className="font-mono text-[#191c22]" dir="ltr">2026-03-31 • 14:22:18 GMT+3</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-dashed border-[#EAE5D9]">
                  <span className="text-[#43474e]">رقم التذكرة الآلية المولدة:</span>
                  <span className="font-mono font-bold text-[#12302B]">TKT-OPS-2026-0994</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-dashed border-[#EAE5D9]">
                  <span className="text-[#43474e]">حالة الإشعار السيبراني:</span>
                  <span className="inline-flex items-center gap-1 text-[#2E9E6B] font-bold">
                    <span className="material-symbols-outlined text-[14px]">done_all</span>
                    <span>تم إخطار فريق الـ SOC فورياً</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Governance Policy Brief */}
            <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-[#12302B]">
                <span className="material-symbols-outlined text-[22px]">policy</span>
                <h3 className="text-base sm:text-lg font-bold">سياسة حوكمة الدخول الإداري</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#43474e] leading-relaxed">
                وفقاً لضوابط الهيئة الإدارية العليا لمنصة تبادل، يتم إيقاف الجلسة ومصادرة مفاتيح التوثيق المؤقتة تلقائياً عند تجاوز الحد الأقصى للمحاولات غير المصرح بها لحماية شبكة المتاجر ومحافظ نقاط العملاء.
              </p>

              {/* Stepper / Incident Protocol */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#12302B] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ١
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#191c22] block">تجميد الواجهة لمدة 300 ثانية</span>
                    <span className="text-[11px] text-[#43474e]">حظر كافة طلبات الـ POST الموجهة لخدمة الدخول.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E58514] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ٢
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#191c22] block">توليد تقرير تدقيق امتثال فوري</span>
                    <span className="text-[11px] text-[#43474e]">تسجيل رقم الجهاز وبصمة المتصفح في خادم السجلات غير القابل للتعديل.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#74777F] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ٣
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#191c22] block">إعادة التهيئة التلقائية</span>
                    <span className="text-[11px] text-[#43474e]">إتاحة المحاولة الرابعة فقط بعد التحقق بخطوتين (2FA SMS / TOTP).</span>
                  </div>
                </div>
              </div>

              {/* Direct Support Link */}
              <div className="pt-3">
                <button
                  onClick={() => setShowCallModal(true)}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#D5CFBF] bg-[#F8F6F0] hover:bg-[#EFEAE0] text-xs font-bold text-[#12302B] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">contact_support</span>
                  <span>مركز الدعم والتوثيق الأمني للمشغلين</span>
                </button>
              </div>
            </div>

            {/* Terminal Status Card */}
            <div className="bg-[#12302B] text-white rounded-2xl p-5 border border-[#234B44] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#8DF8BD] flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#8DF8BD] animate-ping"></span>
                  SEC_DAEMON_ACTIVE
                </span>
                <span className="text-[10px] text-[#A6BAAD] font-mono">NODE #09-GZ</span>
              </div>
              <p className="text-[11px] text-[#D0E2D6] font-mono leading-relaxed" dir="ltr">
                [14:22:19] WARN: RateLimit breached for user admin.ops<br />
                [14:22:20] ACTION: Terminal locked. Counter started: 300s<br />
                [14:22:20] STATUS: Session isolated under HSM token #HSM-8199
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Emergency Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-[#032448]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full border border-[#E1DACB] shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-[#032448] font-bold text-base">
                <span className="material-symbols-outlined text-[#12302B]">support_agent</span>
                <span>فريق أمن العمليات (SecOps Hotline)</span>
              </div>
              <button
                className="text-[#43474e] hover:text-[#191c22] p-1 rounded-lg cursor-pointer"
                onClick={() => setShowCallModal(false)}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-[#43474e] mb-4">
              لإجراء فك القفل الاستثنائي، يرجى التواصل هاتفياً وتزويد مسؤول الأمان بالرمز المرجعي:
            </p>
            <div className="bg-[#F8F6F0] p-4 rounded-xl space-y-2 mb-5 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-[#43474e]">الخط المباشر:</span>
                <span className="font-bold text-[#12302B]">+970 (8) 288-8900</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#43474e]">رمز الحادثة:</span>
                <span className="font-bold text-[#ba1a1a]">#SEC-8941</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#43474e]">المحطة:</span>
                <span className="font-bold text-[#12302B]">POS-ADM-GAZA-CORE</span>
              </div>
            </div>
            <button
              className="w-full h-11 bg-[#12302B] text-white rounded-xl text-xs sm:text-sm font-bold cursor-pointer hover:bg-[#12302B]/90 transition-colors"
              onClick={() => setShowCallModal(false)}
              type="button"
            >
              تم التواصل والعودة
            </button>
          </div>
        </div>
      )}

      {/* YubiKey Sim Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 bg-[#032448]/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full border border-[#E1DACB] shadow-xl p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E58514]/20 text-[#835400] flex items-center justify-center mx-auto animate-pulse">
              <span className="material-symbols-outlined text-3xl">usb</span>
            </div>
            <h3 className="text-base font-bold text-[#12302B]">جاري المصادقة عبر مفتاح FIDO2...</h3>
            <p className="text-xs text-[#43474e]">
              تم رصد المفتاح الفيزيائي في المنفذ المعتمد. جاري فك العزل والتحقق من التوقيع الرقمي.
            </p>
            <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#1F7A6E] h-full w-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Sovereign Bottom System Bar */}
      <footer className="w-full bg-[#EAE5D9] border-t border-[#D9D2C2] py-3 px-6 mt-auto">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#524B3E]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#12302B]">منصة تبادل</span>
            <span>•</span>
            <span>نظام الولاء والتجارة الرقمية الموحد لقطاع التجزئة في غزة</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>معرف المحطة: <strong className="font-mono text-[#12302B]">POS-ADM-GAZA-CORE</strong></span>
            <span>•</span>
            <span>جميع العمليات الإدارية مراقبة ومسجلة قانونياً</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
