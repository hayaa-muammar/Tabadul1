import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminTwoFactorPage() {
  const navigate = useNavigate();
  const [digits, setDigits] = useState(['1', '0', '9', '2', '4', '7']);
  const [seconds, setSeconds] = useState(44);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [fidoActive, setFidoActive] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDigitChange = (index, value) => {
    const char = value.slice(-1);
    if (!/^\d*$/.test(char)) return;

    const newDigits = [...digits];
    newDigits[index] = char;
    setDigits(newDigits);

    if (char && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      // Sovereign login success -> redirect to Admin Operations Dashboard
      navigate('/admin/dashboard');
    }, 800);
  };

  const handleRegenerate = () => {
    setDigits(['', '', '', '', '', '']);
    setSeconds(60);
    inputRefs.current[0]?.focus();
  };

  const handleFidoAuth = () => {
    setFidoActive(true);
    setTimeout(() => {
      setFidoActive(false);
      navigate('/merchant/dashboard');
    }, 1200);
  };

  return (
    <div className="bg-[#F6F3EC] text-[#191c22] font-tajawal min-h-screen flex flex-col justify-between selection:bg-[#ffddb5] selection:text-[#2a1800] antialiased">
      {/* ========================================== */}
      {/* 1. OFFICIAL ADMINISTRATIVE HEADER */}
      {/* ========================================== */}
      <header className="w-full bg-white border-b border-[#E1DACB] shadow-xs sticky top-0 z-30">
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand & Platform Identity */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-4 group focus:outline-none">
              <div className="h-12 w-auto flex items-center justify-center">
                <img
                  alt="شعار منصة تبادل"
                  className="h-11 w-auto object-contain transition-transform group-hover:scale-105 rounded-lg"
                  src="/logo.png"
                />
              </div>
              <div className="h-8 w-px bg-[#E1DACB] hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg text-[#12302B] font-bold tracking-tight leading-tight">
                  بوابة الإدارة المركزية والتشغيل
                </span>
                <span className="text-[11px] text-[#43474e] font-mono uppercase tracking-wider">
                  Tabadul Enterprise Sovereign Admin • 2026
                </span>
              </div>
            </Link>
          </div>

          {/* Security Protocol Telemetry Badges */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-[#F6F3EC] border border-[#E1DACB] rounded-lg px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1F7A6E] animate-pulse"></span>
              <span className="text-xs text-[#12302B] font-mono font-semibold">
                TLS 1.3 / EAL4+ ENCRYPTED
              </span>
            </div>
            <div className="flex items-center gap-2 bg-[#1F7A6E]/10 border border-[#1F7A6E]/20 text-[#1F7A6E] rounded-lg px-3 py-1.5 text-xs font-semibold">
              <span className="material-symbols-outlined text-base">verified_user</span>
              <span>المحطة الآمنة المصادق عليها</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#43474e] border border-[#E1DACB] rounded-lg px-2.5 py-1.5 bg-white">
              <span className="material-symbols-outlined text-sm text-[#E9B44C] icon-fill">shield_lock</span>
              <span className="text-xs text-[#43474e] font-mono">GZA-NODE-01</span>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================== */}
      {/* MAIN WORKSPACE CANVAS (1280px Benchmarked) */}
      {/* ========================================== */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 py-10 flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ========================================== */}
          {/* 2. CENTRAL 2FA AUTHENTICATION CARD (7 Cols) */}
          {/* ========================================== */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E1DACB] p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden">
            {/* Subtle Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l from-[#E9B44C] via-[#1F7A6E] to-[#12302B]"></div>

            {/* Header of the Card */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#12302B] text-white flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-3xl text-[#E9B44C] icon-fill">security</span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] text-xs font-semibold mb-1">
                    <span className="material-symbols-outlined text-xs">lock</span>
                    <span>الخطوة 2 من 2: التحقق الإلزامي</span>
                  </div>
                  <h1 className="text-xl sm:text-2xl text-[#12302B] font-bold">
                    إثبات الهوية والتحقق الثنائي (2FA)
                  </h1>
                </div>
              </div>

              <div className="text-left hidden sm:block">
                <span className="text-xs text-[#43474e] block font-mono">FLOW: A-01-SEC</span>
                <span className="text-xs text-[#1F7A6E] font-bold bg-[#1F7A6E]/10 px-2 py-0.5 rounded font-mono">
                  SESSION: ACTIVE
                </span>
              </div>
            </div>

            {/* Authenticated Target Admin Banner */}
            <div className="mb-7 bg-[#F6F3EC] border border-[#E1DACB] rounded-xl p-4 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#12302B] text-[#E9B44C] flex items-center justify-center font-bold font-mono">
                  OP
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#12302B] font-semibold font-mono" dir="ltr">
                      admin.ops@tabadul.ps
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-[#E1DACB] text-[#191c22] font-mono rounded">
                      UID: #ADM-4402
                    </span>
                  </div>
                  <p className="text-xs text-[#43474e]">
                    حساب مشرف العمليات المركزية - سلطة تشغيل المتاجر والنقاط
                  </p>
                </div>
              </div>
              <Link
                to="/admin/login"
                className="text-[#1F7A6E] hover:text-[#12302B] text-xs flex items-center gap-1 font-semibold transition-colors duration-150 py-1.5 px-2.5 rounded-lg hover:bg-white/80 border border-[#1F7A6E]/20"
              >
                <span>تبديل الحساب</span>
                <span className="material-symbols-outlined text-base">swap_horiz</span>
              </Link>
            </div>

            {/* Instructional Guidance */}
            <div className="mb-6">
              <p className="text-xs sm:text-sm text-[#43474e] leading-relaxed">
                يرجى إدخال رمز الأمان المكوّن من <strong className="text-[#191c22] font-semibold">6 أرقام</strong> والمُولّد فورياً من تطبيق المصادقة المعتمد (<span className="font-mono text-xs">Google Authenticator</span> أو <span className="font-mono text-xs">Microsoft Authenticator</span>) أو من خلال مفتاح المصادقة الفيزيائي.
              </p>
            </div>

            {/* Interactive 6-Digit Verification Inputs */}
            <form className="space-y-6" onSubmit={handleVerify}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs sm:text-sm font-semibold text-[#12302B] flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#1F7A6E]">pin</span>
                    <span>رمز التحقق المؤقت (TOTP)</span>
                  </label>

                  {/* Dynamic Countdown Timer Badge */}
                  <div className="flex items-center gap-2 bg-[#ffddb5]/30 border border-[#ffddb5] text-[#835400] rounded-lg px-2.5 py-1">
                    <span className="material-symbols-outlined text-sm animate-spin text-[#835400]">autorenew</span>
                    <span className="text-xs font-semibold">تنتهي الصلاحية خلال:</span>
                    <span className="font-mono font-bold text-xs text-[#835400]">
                      00:{String(seconds).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* 6 Segmented Digit Boxes with LTR Alignment */}
                <div className="grid grid-cols-6 gap-2 sm:gap-3.5" dir="ltr">
                  {digits.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => (inputRefs.current[idx] = el)}
                      className="h-14 sm:h-16 text-center font-mono text-2xl sm:text-3xl font-bold rounded-xl border-2 border-[#1F7A6E] bg-white text-[#12302B] shadow-xs focus:border-[#1F7A6E] focus:ring-4 focus:ring-[#1F7A6E]/15 transition-all outline-none"
                      maxLength={1}
                      type="text"
                      value={digit}
                      onChange={(e) => handleDigitChange(idx, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(idx, e)}
                    />
                  ))}
                </div>

                {/* Helper action below input */}
                <div className="flex items-center justify-between mt-3 text-xs">
                  <span className="text-[#43474e] flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-[#1F7A6E]">check_circle</span>
                    <span>تم التحقق من تشفير تسلسل الخانات محلياً</span>
                  </span>
                  <button
                    onClick={handleRegenerate}
                    className="text-[#1F7A6E] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm">refresh</span>
                    <span>إعادة توليد الرمز</span>
                  </button>
                </div>
              </div>

              {/* Primary Submit Action Button */}
              <div className="pt-2">
                <button
                  className="w-full h-14 bg-[#12302B] hover:bg-[#12302B]/90 text-white text-sm sm:text-base font-bold rounded-xl shadow-md flex items-center justify-center gap-3 transition-all duration-150 active:scale-[0.99] group cursor-pointer disabled:opacity-75"
                  disabled={isVerifying}
                  type="submit"
                >
                  {isVerifying ? (
                    <>
                      <span className="inline-block animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full ml-2"></span>
                      <span>جاري مطابقة الشهادة الرقمية وفك تشفير الجلسة...</span>
                    </>
                  ) : (
                    <>
                      <span>تأكيد الرمز والدخول</span>
                      <span className="material-symbols-outlined text-xl text-[#E9B44C] group-hover:-translate-x-1 transition-transform duration-150">
                        arrow_back
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Secondary Alternative Authentication Triggers */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Hardware Token Trigger */}
                <button
                  onClick={handleFidoAuth}
                  disabled={fidoActive}
                  className="h-12 px-4 rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/60 hover:bg-[#F6F3EC] text-[#12302B] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-lg text-[#1F7A6E]">usb</span>
                  <span>{fidoActive ? 'جاري قراءة المفتاح...' : 'استخدام المفتاح المادي FIDO2 / YubiKey'}</span>
                </button>

                {/* IT Security Assistance */}
                <button
                  onClick={() => setShowSupportModal(true)}
                  className="h-12 px-4 rounded-xl border border-[#E1DACB] bg-white hover:bg-[#F6F3EC] text-[#43474e] text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-lg text-[#ba1a1a]">support_agent</span>
                  <span>طلب مساعدة أمان المعلومات (IT Sec)</span>
                </button>
              </div>
            </form>

            {/* Trust footer on card */}
            <div className="mt-8 pt-6 border-t border-[#E1DACB] flex items-center justify-between text-xs text-[#43474e]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#1F7A6E]">vpn_key</span>
                <span>جلسة التشفير المشفرة بمعيار PKI 4096-bit</span>
              </div>
              <span className="font-mono text-[11px] text-[#74777f]">TERMINAL_ID: GZ-HQ-ADM-09</span>
            </div>
          </div>

          {/* ========================================== */}
          {/* 3. SOVEREIGN POLICY & SECURITY AUDIT PANEL (5 Cols) */}
          {/* ========================================== */}
          <div className="lg:col-span-5 space-y-5">
            {/* Sovereign Protocol Assurance Card */}
            <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1F7A6E]/15 text-[#1F7A6E] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">gavel</span>
                </div>
                <div>
                  <h2 className="text-base sm:text-lg text-[#12302B] font-bold">
                    بروتوكول الوصول السيادي للمنصة
                  </h2>
                  <p className="text-xs text-[#43474e]">معايير الحوكمة والتحكم المركزي المعتمدة</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F3EC] border border-[#E1DACB]/60">
                  <span className="material-symbols-outlined text-[#ba1a1a] text-lg shrink-0 mt-0.5">block</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#12302B]">
                      حظر الاسترجاع الآلي لكلمات المرور
                    </h4>
                    <p className="text-xs text-[#43474e] mt-0.5 leading-relaxed">
                      تمنع السياسة الأمنية استرجاع الرموز عبر البريد العادي أو الرسائل النصية غير المشفرة لمنع هجمات الاستيلاء على البطاقات والحسابات.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F3EC] border border-[#E1DACB]/60">
                  <span className="material-symbols-outlined text-[#835400] text-lg shrink-0 mt-0.5">timer_off</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#12302B]">
                      الإغلاق الفوري للجلسات غير المتطابقة
                    </h4>
                    <p className="text-xs text-[#43474e] mt-0.5 leading-relaxed">
                      يتم إنهاء محاولة الدخول وتجميد الحساب لمدة 15 دقيقة تلقائياً عند تسجيل 3 محاولات غير متطابقة متتالية.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F3EC] border border-[#E1DACB]/60">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-lg shrink-0 mt-0.5">policy</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#12302B]">
                      التدقيق الرقابي الصارم (Audit Log)
                    </h4>
                    <p className="text-xs text-[#43474e] mt-0.5 leading-relaxed">
                      جميع محاولات المصادقة يتم تدوينها فوراً في سجل التحقق الرقمي غير القابل للتعديل مع توثيق بصمة الجهاز.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware Key Quick Prompt Card */}
            <div className="bg-gradient-to-br from-[#12302B] to-[#1F7A6E] text-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E9B44C] text-[#12302B] text-xs font-bold">
                  <span className="material-symbols-outlined text-xs icon-fill">star</span>
                  <span>خيار الأمان الأقصى</span>
                </span>
                <span className="font-mono text-xs text-white/70">FIDO2 / WebAuthn</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                هل تستخدم مفتاح YubiKey الفعلي؟
              </h3>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                أدخل المفتاح بمنفذ USB واضغط على حساس الذهب لإتمام المصادقة اللحظية دون الحاجة إلى كتابة الرموز اليدوية.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleFidoAuth}
                  className="bg-white hover:bg-[#F6F3EC] text-[#12302B] text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-base text-[#1F7A6E]">contactless</span>
                  <span>تنشيط المصادقة اللاتلامسية</span>
                </button>
                <span className="text-xs text-white/60 font-mono">STATUS: READY</span>
              </div>
            </div>

            {/* Emergency IT Helpdesk Quick Contact */}
            <div className="bg-white rounded-xl border border-[#E1DACB] p-4 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#12302B] text-2xl">call</span>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#12302B] block">
                    طوارئ أمان العمليات والتشغيل
                  </span>
                  <span className="text-xs text-[#43474e] font-mono" dir="ltr">
                    +970 (8) 288-4400 / EXT 102
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-[#1F7A6E]/10 text-[#1F7A6E] rounded-md text-xs font-bold">
                متاح 24/7
              </span>
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

      {/* ========================================== */}
      {/* 4. INSTITUTIONAL 2026 FOOTER */}
      {/* ========================================== */}
      <footer className="w-full bg-white border-t border-[#E1DACB] py-5 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright and Compliance Info */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm text-[#12302B] font-bold">
              منصة تبادل للمكافآت والولاء التجاري © 2026
            </span>
            <span className="h-3.5 w-px bg-[#E1DACB]"></span>
            <span className="text-xs text-[#43474e]">
              نظام تشغيل وإدارة المتاجر المحلية المعتمدة - غزة، فلسطين
            </span>
          </div>

          {/* Trust Standards & Cryptographic Integrity Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#43474e]">
            <span className="flex items-center gap-1 hover:text-[#12302B] transition-colors">
              <span className="material-symbols-outlined text-sm text-[#1F7A6E]">verified</span>
              <span>ISO/IEC 27001</span>
            </span>
            <span className="h-3 w-px bg-[#E1DACB]"></span>
            <span className="flex items-center gap-1 hover:text-[#12302B] transition-colors">
              <span className="material-symbols-outlined text-sm text-[#E9B44C] icon-fill">lock</span>
              <span>AES-256 GCM</span>
            </span>
            <span className="h-3 w-px bg-[#E1DACB]"></span>
            <span className="flex items-center gap-1 hover:text-[#12302B] transition-colors">
              <span className="material-symbols-outlined text-sm text-[#12302B]">lan</span>
              <span>Zero-Trust Architecture</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
