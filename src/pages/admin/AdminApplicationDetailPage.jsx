import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function AdminApplicationDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const requestId = id || 'REQ-2026-0842';

  // Audit checklist items state
  const [checklist, setChecklist] = useState([
    {
      id: 1,
      title: 'هل المتجر ضمن قطاع الأزياء والأحذية حصراً؟',
      desc: 'نعم - مطابق لسياسة منصة تبادل بدون مخالفات',
      checked: true,
    },
    {
      id: 2,
      title: 'هل رابط صفحة الإنستغرام حقيقي ونشط داخل غزة؟',
      desc: 'نعم - متجر نشط بتفاعل حقيقي وقاعدة 18.4K متابع',
      checked: true,
    },
    {
      id: 3,
      title: 'هل صور المنتجات واضحة وتطابق معايير الجودة؟',
      desc: 'نعم - تصوير احترافي أصلي وخالٍ من العلامات المسروقة',
      checked: true,
    },
    {
      id: 4,
      title: 'هل بيانات التواصل والحساب المالي موثقة؟',
      desc: 'نعم - رمز OTP صحيح ومحفظة PalPay مطابقة للاسم',
      checked: true,
    },
  ]);

  const [notes, setNotes] = useState(
    'تم التحقق هاتفياً من مالكة المتجر الأستاذة سارة عبد الرحمن، تم التأكد من نشاط المتجر في شارع الرمال بغزة ووضوح الكتالوج، الطلب ممتاز وجاهز للاعتماد الفوري ومنح فترة التجربة المجانية.'
  );

  const [decisionState, setDecisionState] = useState(null); // 'approved' | 'revision' | 'rejected'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleCheck = (idToToggle) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === idToToggle ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const completedCount = checklist.filter((i) => i.checked).length;

  const handleDecision = (type) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setDecisionState(type);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#191c22] font-['Tajawal',sans-serif] flex flex-row antialiased selection:bg-[#12302b] selection:text-white" dir="rtl">
      {/* ========================================================================= */}
      {/* 1. RIGHT SIDEBAR (قائمة إدارة المنصة - الإدارة المركزية)                 */}
      {/* ========================================================================= */}
      <aside className="fixed top-0 right-0 h-screen w-64 flex flex-col z-30 border-l border-[#c4c6cf]/40 bg-[#12302b] text-white shadow-xl">
        {/* Brand identity */}
        <div className="p-5 border-b border-[#1b433c] flex items-center gap-3">
          <div className="h-10 sm:h-11 w-auto flex items-center justify-center shrink-0">
            <img
              alt="شعار منصة تبادل"
              className="h-full w-auto object-contain rounded-lg shadow-md"
              src="/logo.png"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">تبادل للمشغلين</h1>
            <p className="text-xs text-[#8df8bd]/80">الإدارة المركزية العامة</p>
          </div>
        </div>

        {/* Navigation List */}
        <div className="h-full flex flex-col justify-between p-4 overflow-y-auto">
          <nav aria-label="شريط التنقل الجانبي" className="space-y-1.5">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-150"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
              </svg>
              <span className="text-sm font-semibold">لوحة التحكم</span>
            </Link>

            {/* Active section: المتاجر والشركاء */}
            <div className="space-y-1">
              <Link
                to="/admin/applications"
                className="flex items-center justify-between px-4 py-3 bg-[#1e4840] text-[#8df8bd] rounded-xl font-bold transition-all duration-150 shadow-inner"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M4 4h16l1.2 5H2.8L4 4zm-1.8 7l.8 9a2 2 0 002 2h14a2 2 0 002-2l.8-9H2.2zm7.8 2h4v5h-4v-5z" />
                  </svg>
                  <span className="text-sm font-bold">المتاجر والشركاء</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-xs bg-[#8df8bd] text-[#002112] font-bold">A-04</span>
              </Link>

              {/* Sub-items */}
              <div className="pr-6 space-y-1 pt-1 pb-1">
                <Link
                  to="/admin/applications"
                  className="flex items-center justify-between px-3 py-2 text-[#8df8bd] font-bold bg-white/5 rounded-lg border-r-2 border-[#8df8bd] text-xs"
                >
                  <span>طلبات الانضمام (A-03 / A-04)</span>
                  <span className="text-[11px] bg-red-500/90 text-white px-1.5 py-0.5 rounded-full font-mono">3 قيد الفحص</span>
                </Link>
                <a
                  href="#approved-stores"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 px-3 py-1.5 text-white/70 hover:text-white text-xs transition-colors"
                >
                  <span>المتاجر النشطة والمعتمدة</span>
                </a>
              </div>
            </div>

            <a href="#ops" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-150">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span className="text-sm">العمليات والطلبات</span>
            </a>

            <a href="#loyalty" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-150">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V5a2 2 0 012-2z" />
              </svg>
              <span className="text-sm">برنامج المكافآت</span>
            </a>

            <a href="#finance" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-150">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="5" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20M7 15h2" />
              </svg>
              <span className="text-sm">التقارير المالية</span>
            </a>

            <a href="#settings" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-150">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="text-sm">إعدادات النظام</span>
            </a>
          </nav>

          {/* Sidebar Footer */}
          <div className="pt-4 border-t border-[#1b433c] space-y-2">
            <a href="#help" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg text-xs transition-colors">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01" />
              </svg>
              <span>مركز المساعدة والتوثيق</span>
            </a>
            <Link
              to="/admin/login"
              className="flex items-center gap-3 px-3 py-2 text-red-300 hover:text-red-200 hover:bg-red-950/40 rounded-lg text-xs transition-colors"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>تسجيل الخروج</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT AREA (مرصعة بالهيدر العلوي ونظام العمودين 1280px Desktop) */}
      {/* ========================================================================= */}
      <div className="mr-64 flex-1 min-h-screen flex flex-col bg-[#F6F3EC]">
        {/* Top App Bar / Navigation */}
        <header className="sticky top-0 w-full z-20 bg-white border-b border-gray-200 shadow-xs px-8 py-3.5 flex items-center justify-between">
          {/* Breadcrumbs & Quick Return */}
          <div className="flex items-center gap-4">
            <Link
              to="/admin/applications"
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-transform active:scale-95 shrink-0 shadow-xs"
              title="العودة لقائمة الطلبات A-03"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-sm flex-wrap">
              <Link to="/admin/dashboard" className="text-gray-500 hover:text-[#032448] font-medium transition-colors hover:underline">
                منصة تبادل
              </Link>
              <span className="text-gray-400 text-xs px-0.5">/</span>
              <Link to="/admin/applications" className="text-gray-500 hover:text-[#032448] font-medium transition-colors hover:underline">
                طلبات الانضمام
              </Link>
              <span className="text-gray-400 text-xs px-0.5">/</span>
              <div className="flex items-center gap-2 font-bold text-[#032448]">
                <span>مراجعة طلب: بوتيك الياسمين للأزياء</span>
                <span className="text-xs bg-[#032448]/10 text-[#032448] px-2.5 py-0.5 rounded-full font-mono font-bold border border-[#032448]/20 shrink-0">
                  #{requestId}
                </span>
              </div>
            </nav>
          </div>

          {/* Controls, SLA Tracker & Supervisor Profile */}
          <div className="flex items-center gap-4">
            {/* SLA Urgency Chip */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 shadow-xs">
              <svg className="w-4 h-4 text-amber-700 animate-pulse shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
              </svg>
              <div className="text-right">
                <div className="text-[10px] text-amber-700 leading-tight">مهلة الـ SLA المتبقية</div>
                <div className="text-xs font-bold font-mono text-amber-950">11 ساعة و 45 دقيقة (من 48 ساعة)</div>
              </div>
            </div>

            {/* 2FA Badge */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
              <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <span className="text-xs font-bold">جلسة 2FA موثقة</span>
            </div>

            <div className="h-6 w-[1px] bg-gray-200"></div>

            {/* Supervisor Info */}
            <div className="flex items-center gap-3">
              <div className="text-left leading-tight hidden md:block">
                <div className="text-xs font-bold text-gray-900">م. إياد كحيل</div>
                <div className="text-[11px] text-gray-500">مدير العمليات والرقابة</div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#032448] text-white flex items-center justify-center font-bold text-sm shadow-sm border border-[#032448]/20">
                إك
              </div>
            </div>
          </div>
        </header>

        {/* Main Canvas Viewport (1280px optimized Container) */}
        <main className="w-full max-w-[1280px] mx-auto p-6 md:p-8 space-y-6">
          {/* Decision Notification Feedback if an action was taken */}
          {decisionState && (
            <div
              className={`w-full rounded-2xl p-4 flex items-center justify-between border shadow-sm transition-all animate-fadeIn ${
                decisionState === 'approved'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : decisionState === 'revision'
                  ? 'bg-amber-50 border-amber-300 text-amber-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 ${
                    decisionState === 'approved'
                      ? 'bg-emerald-600'
                      : decisionState === 'revision'
                      ? 'bg-amber-600'
                      : 'bg-rose-600'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm">
                    {decisionState === 'approved' && 'تم اعتماد وقبول المتجر بنجاح! تم تفعيل 14 يوماً تجربة مجانية وتوليد كود التاجر.'}
                    {decisionState === 'revision' && 'تم إرسال إشعار طلب تعديل البيانات للتاجر عبر رسالة SMS وواتساب.'}
                    {decisionState === 'rejected' && 'تم رفض الطلب وتوثيق السبب في السجل الإداري وإشعار التاجر.'}
                  </h3>
                  <p className="text-xs opacity-80 mt-0.5">
                    رقم الطلب: #{requestId} • التوقيت: الآن • المشرف المسؤول: م. إياد كحيل
                  </p>
                </div>
              </div>
              <Link
                to="/admin/applications"
                className="px-4 py-2 bg-white/90 hover:bg-white text-xs font-bold rounded-xl border border-current transition-colors"
              >
                العودة لقائمة الطلبات
              </Link>
            </div>
          )}

          {/* Alert Banner: Security & Clean State Verification */}
          <div className="w-full bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-sm font-bold text-emerald-950">
                  فحص النزاهة وكشف التكرار (Deduplication Check): سجل نظيف 100%
                </h2>
                <p className="text-xs text-emerald-800 mt-0.5">
                  لم يتم العثور على أرقام هواتف، حسابات بنكية، أو عناوين متاجر مكررة في غزة. حساب الإنستغرام{' '}
                  <span className="font-mono font-bold">@alyasmeen_boutique</span> غير مسجل في أي طلبات سابقة أو محظورة.
                </p>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <span className="px-3 py-1 bg-white border border-emerald-300 text-emerald-800 text-xs font-bold rounded-lg font-mono">
                0 مخاطر مسجلة
              </span>
              <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-lg">
                فحص آلي ناجح
              </span>
            </div>
          </div>

          {/* Two-Column Review Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* ================================================================= */}
            {/* COLUMN 1 (RIGHT 7/12): STORE DETAILS & APPLICANT DATA CANVAS     */}
            {/* ================================================================= */}
            <section className="lg:col-span-7 space-y-6">
              {/* Card 1: Main Store & Owner Profile */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    {/* Store Brand Avatar */}
                    <div className="w-20 h-20 rounded-2xl bg-[#F6F3EC] border-2 border-emerald-100 flex items-center justify-center overflow-hidden shrink-0 shadow-xs relative">
                      <img
                        className="w-full h-full object-cover"
                        alt="بوتيك الياسمين للأزياء"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHEgAVFy_u3MiZWP0bjj63KNryUrlJ0COvlv9i2BiI_gTLaI9ZwYMBvF6rBxvdM4GegeJihwo2hT0GDKzMWYQm_nKHwbdTGcWIs7DHXuae2FK7RJc1KKMDZFP33ThD7xETTEI6sVCIVipT4RGd0yJjrlyuKtULTRgDAFNcZVltEwS0YYbOX4SublcJcdb1xS8AJZ3zoj64RcgyFe9DRG094FSd-rsy3SFxUsMivgJd"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-lg font-bold text-gray-900">بوتيك الياسمين للأزياء</h3>
                        <span className="bg-[#032448]/10 text-[#032448] text-xs px-2.5 py-0.5 rounded-full font-bold">
                          طلب جديد A-04
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">تخصص فساتين السهرة والأزياء النسائية المحتشمة - مدينة غزة</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5 text-gray-400 inline-block shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                          </svg>
                          تاريخ التقديم: اليوم 02:15 ص
                        </span>
                        <span>•</span>
                        <span className="text-emerald-700 font-medium">سجل تجاري رقم: GZ-99420-2025</span>
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    جاهز للمراجعة
                  </span>
                </div>

                {/* Key Store Attributes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-4 border-t border-gray-100">
                  {/* Owner Contact */}
                  <div className="p-3.5 rounded-xl bg-[#F6F3EC]/70 border border-gray-200/60 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500">المالك المسؤول</div>
                      <div className="text-sm font-bold text-gray-900">سارة عبد الرحمن</div>
                      <div className="text-xs font-mono text-gray-600 mt-0.5" dir="ltr">+970 59 912 3456</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                        <svg className="w-3.5 h-3.5 text-emerald-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="9" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                        </svg>
                        موثق OTP
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono">02:14 ص</span>
                    </div>
                  </div>

                  {/* Instagram Verification Widget */}
                  <div className="p-3.5 rounded-xl bg-[#F6F3EC]/70 border border-gray-200/60 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500">حساب الإنستغرام للمتجر</div>
                      <a
                        className="text-sm font-bold text-[#032448] hover:underline flex items-center gap-1 font-mono"
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        dir="ltr"
                      >
                        @alyasmeen_boutique
                        <svg className="w-3.5 h-3.5 text-[#032448] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <div className="text-xs text-emerald-700 font-medium mt-0.5">18.4K متابع • حساب نشط وتفاعلي</div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Store Description */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80 space-y-1.5">
                  <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#032448] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    الوصف التعريفي للعلامة التجارية:
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    «بوتيك فلسطيني محلي في قلب غزة متخصص في تفصيل وتصميم فساتين السهرة الراقية والعبايات المطرّزة يدوياً بخيوط الحرير، نهدف للانضمام لمنصة تبادل لمكافأة عميلاتنا بنقاط ولاء حقيقية وكوبونات استبدال مباشرة تشجع على دعم المنتجات الوطنية».
                  </p>
                </div>
              </div>

              {/* Card 2: Specialized Fashion Category (Strict Scope) */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#032448] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a3 3 0 013 3c0 .825-.333 1.575-.875 2.125L19 13.5v6.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-6.5l4.875-4.375C9.333 8.575 9 7.825 9 7a3 3 0 013-3z" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-900">فئات الأزياء والتخصص الحصري</h3>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-900 font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                    مطابق لسياسة المنصة (أزياء فقط)
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  يقتصر قبول المتاجر في منصة تبادل على قطاعات الأزياء والمنسوجات والأحذية والحقائب حصراً، ويحظر قبول مستحضرات التجميل أو العطور في هذه الفئة.
                </p>

                <div className="flex flex-wrap gap-2.5 pt-1">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-800">
                    <svg className="w-4 h-4 text-[#032448] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l6 4 6-4v14l-6 4-6-4V3z" />
                    </svg>
                    <span className="text-xs font-bold">فساتين سهرة ومناسبات</span>
                    <span className="text-[11px] bg-white text-gray-700 px-2 py-0.5 rounded font-mono border">65% المعروض</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-800">
                    <svg className="w-4 h-4 text-[#032448] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m8 0V2H8v2m8 0H8" />
                    </svg>
                    <span className="text-xs font-bold">عبايات راقية وتطريز فاخر</span>
                    <span className="text-[11px] bg-white text-gray-700 px-2 py-0.5 rounded font-mono border">25% المعروض</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-800">
                    <svg className="w-4 h-4 text-[#032448] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a4 4 0 014 4c0 2-4 6-4 6s-4-4-4-6a4 4 0 014-4zm0 20a4 4 0 01-4-4c0-2 4-6 4-6s4 4 4 6a4 4 0 01-4 4z" />
                    </svg>
                    <span className="text-xs font-bold">شالات وإكسسوارات قماشية</span>
                    <span className="text-[11px] bg-white text-gray-700 px-2 py-0.5 rounded font-mono border">10% المعروض</span>
                  </div>
                </div>

                {/* Confirmation note */}
                <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50/80 p-3 rounded-xl border border-emerald-200">
                  <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  <span>خالٍ تماماً من فئات المكياج، العطور، أو الأجهزة الإلكترونية المخالفة.</span>
                </div>
              </div>

              {/* Card 3: Sample Product Uploads & Visual Inspection */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#032448] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
                      </svg>
                      نماذج صور المنتجات المرفوعة للفحص
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">3 نماذج تم رفعها كعينة للتحقق من جودة التصوير وواقعية القطع</p>
                  </div>
                  <span className="text-xs font-bold text-[#032448] bg-[#032448]/10 px-2.5 py-1 rounded-full">
                    3 من 3 مطابقة
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3.5 pt-1">
                  {/* Sample 1 */}
                  <div className="group relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-square shadow-2xs">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      alt="فستان سهرة زمردي"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBduEbD_ej7cZKSCkfQjaBOxnwFziyHLX7zi_U0-XlcKxF08NLQrjf8u20qNnBt8ERI6sZkOLM_wH3AK0uuT6bzcxIwgI2fHoEm7_d8HYrWWJRXPPp792PVMYT2Mzwib9rnLWjhia1WjIlcI5Adq3KvorOGTG04win0NuD_GHtvTDqvUQksLw0uSSrdKAUTySVoNnzdMdAsaBpRRYl1DEQ5t-UARuhrOsGoculhUDMW"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 text-white">
                      <span className="text-xs font-bold">فستان سهرة زمردي</span>
                      <span className="text-[11px] text-emerald-200 font-mono">180 ₪ • جودة عالية</span>
                    </div>
                  </div>

                  {/* Sample 2 */}
                  <div className="group relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-square shadow-2xs">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      alt="عباية حرير مطرزة"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7n9smItAaDeKlwuTqpni9r8KmODqEnrdt8osmQvh2JYtTKJa2o8Fy5OGBw47eiAOaQ3Evk3YH3PR2O_AMLy4kqc_ajZbvi0nggz9MkW541Sc7ViKIGWoPZIi20NKhi9Xp2ZHLeeEboy1uZsQJJpy-waKeGHTIL3cAOQstH_OWkQoqgPXBY4UBY188BA0NU6b7tQOkdQ7uGC5P7blqQNQVhC2v4IhAtX1urdP5WZf5"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 text-white">
                      <span className="text-xs font-bold">عباية حرير مطرزة</span>
                      <span className="text-[11px] text-emerald-200 font-mono">220 ₪ • متطابق</span>
                    </div>
                  </div>

                  {/* Sample 3 */}
                  <div className="group relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-square shadow-2xs">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      alt="شال صوف ناعم مطرز"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO0hmKjQOCWXmlMYQhogS83Xv-Xln9M8Z3NbFp24PlVoVKZ8ZdF1Q5m1qorFP8SmsDAO2fFJiZG93mDIObbUdblN_bn0qOYwdPVPDoPYMMxQu-cCn2ERpbwEPGLtnBoBuOoRDUEAzHrNmx2fztsbWCC75isFpXY5DDpoiFvuN85yvwbB_aZ6ITXHaj1lEmiFD8R_bP1ve7z-yHfUTBnyLaDr38PEKGxGLR-sIOIpQq"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 text-white">
                      <span className="text-xs font-bold">شال صوف ناعم مطرز</span>
                      <span className="text-[11px] text-emerald-200 font-mono">65 ₪ • تصوير أصلي</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Logistics & Payout Information */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-5">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#032448] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a2 2 0 114 0m-4 0h-4m8 0h3l3-4v-5a1 1 0 00-1-1h-5v10z" />
                    <circle cx="6.5" cy="16.5" r="2.5" />
                    <circle cx="17.5" cy="16.5" r="2.5" />
                  </svg>
                  اللوجستيات والتوصيل وبيانات الاستلام المالي
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Logistics details */}
                  <div className="p-4 rounded-xl bg-[#F6F3EC]/70 border border-gray-200/80 space-y-3">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                      <span className="text-xs font-bold text-gray-900">آلية الشحن والتوصيل</span>
                      <span className="text-xs bg-[#032448]/10 text-[#032448] font-bold px-2 py-0.5 rounded">
                        مندوب خاص
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">رسوم التوصيل داخل غزة:</span>
                        <span className="font-bold text-gray-900 font-mono">15 ₪ ثابت</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">مدة التوصيل المعتمدة:</span>
                        <span className="font-bold text-emerald-700">خلال 24 ساعة كحد أقصى</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">مقر التجهيز والانطلاق:</span>
                        <span className="font-medium text-gray-800">غزة - الرمال الشمالي، مفرق الميناء</span>
                      </div>
                    </div>
                  </div>

                  {/* Payout Accounts */}
                  <div className="p-4 rounded-xl bg-[#F6F3EC]/70 border border-gray-200/80 space-y-3">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                      <span className="text-xs font-bold text-gray-900">الحساب المالي (مقنّع للأمان)</span>
                      <span className="text-xs bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">
                        موثق بالكامل
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">محفظة بال باي (PalPay):</span>
                        <span className="font-bold font-mono text-gray-900 bg-white px-2 py-0.5 rounded border border-gray-200" dir="ltr">
                          0599***456
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">البنك المعتمد:</span>
                        <span className="font-bold text-gray-900">بنك فلسطين - فرع الرمال</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">رقم الآيبان (IBAN):</span>
                        <span className="font-mono text-[11px] text-gray-800 bg-white px-1.5 py-0.5 rounded border border-gray-200" dir="ltr">
                          PS88PALS0452*******001
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ================================================================= */}
            {/* COLUMN 2 (LEFT 5/12): AUDIT CHECKLIST, NOTES & ACTION PANEL       */}
            {/* ================================================================= */}
            <section className="lg:col-span-5 space-y-6">
              {/* 1. Mandatory Audit Checklist */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-900">قائمة التدقيق الإلزامية للمشرف</h3>
                  </div>
                  <span className="text-xs bg-emerald-50 text-emerald-700 font-mono font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {completedCount}/4 مكتمل
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  يجب على المشرف مراجعة كافة المعايير النظامية قبل تفعيل المتجر أو منح رصيد التجربة.
                </p>

                <div className="space-y-2.5 pt-1">
                  {checklist.map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                        item.checked
                          ? 'bg-[#F6F3EC]/50 border-emerald-300/80'
                          : 'bg-white border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => toggleCheck(item.id)}
                        className="mt-1 w-5 h-5 rounded text-emerald-600 focus:ring-emerald-500 border-gray-300"
                      />
                      <div className="flex-1">
                        <div className="text-xs font-bold text-gray-900">{item.title}</div>
                        <div className="text-xs text-emerald-700 mt-0.5 flex items-center gap-1.5 font-medium">
                          <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {item.desc}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* 2. Internal Supervisor Confidential Notes */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-3.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 018 0v4" />
                    </svg>
                    ملاحظات المشرف الداخلية (سرية لا تظهر للتاجر)
                  </h3>
                  <span className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-mono">سجل التدقيق</span>
                </div>
                <p className="text-xs text-gray-500">
                  اكتب تقرير الفحص الداخلي؛ ستُحفظ هذه الملاحظات في سجل التدقيق ومتابعة الجودة الإدارية.
                </p>

                <div className="relative">
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-[#F6F3EC]/40 p-3 text-xs leading-relaxed text-gray-900 focus:border-[#032448] focus:ring-1 focus:ring-[#032448] placeholder-gray-400 resize-none"
                    rows="3"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                  <span>آخر تعديل بواسطة: م. إياد كحيل</span>
                  <span className="font-mono">اليوم 09:30 ص</span>
                </div>
              </div>

              {/* 3. Decision Action Box A-05 (بطاقة اتخاذ القرار) */}
              <div className="bg-white rounded-2xl p-6 border-2 border-[#12302b]/15 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#032448] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5l3.5-3.5a1.414 1.414 0 00-2-2L12.5 7.5M9.5 14.5l-6 6a1.414 1.414 0 002 2l6-6M13.5 13.5l4 4M7 7l4 4" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-900">اتخاذ القرار الإداري (A-05)</h3>
                  </div>
                  <span className="text-xs font-mono text-gray-400">Action Panel</span>
                </div>

                <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="8" width="18" height="13" rx="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13M3 12h18M12 8a3 3 0 10-3-3 3 3 0 003 3zm0 0a3 3 0 113-3 3 3 0 01-3 3z" />
                  </svg>
                  <span>الاعتماد يفعّل تلقائياً <strong>14 يوماً تجربة مجانية</strong> مع إصدار كود التاجر ورصيد 100 نقطة ترحيبية.</span>
                </div>

                {/* Action Buttons Stacking */}
                <div className="space-y-2.5 pt-1">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => handleDecision('approved')}
                    className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>قبول واعتماد المتجر (تفعيل تجربة 14 يوماً)</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => handleDecision('revision')}
                      className="h-11 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4 text-amber-700 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <span>طلب تعديل بيانات</span>
                    </button>

                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => handleDecision('rejected')}
                      className="h-11 bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-300 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4 text-rose-700 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6m0-6l6 6" />
                      </svg>
                      <span>رفض الطلب مع ذكر السبب</span>
                    </button>
                  </div>
                </div>

                <div className="text-center pt-1">
                  <span className="text-[11px] text-gray-400">
                    سيتم إرسال إشعار SMS ورسالة واتساب تلقائية للرقم المسجل عند تأكيد القرار
                  </span>
                </div>
              </div>

              {/* Quick Metadata Stamp */}
              <div className="p-3 rounded-xl bg-[#F6F3EC]/50 border border-dashed border-gray-300 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm0 0c0 3.31-2.69 6-6 6m12-6c0-3.31-2.69-6-6-6m6 6c0 1.66-.67 3.16-1.76 4.24M6.76 15.24A5.98 5.98 0 016 11" />
                  </svg>
                  REQ-HASH: 8f9b2026-alyasmeen-gz
                </span>
                <span className="text-[11px]">خوادم منصة تبادل الآمنة</span>
              </div>
            </section>
          </div>
        </main>

        {/* System Footer */}
        <footer className="mt-auto py-4 px-8 border-t border-gray-200 bg-white/70 text-center text-xs text-gray-500 flex items-center justify-between">
          <span>نظام إدارة المشغلين - منصة تبادل للولاء والأزياء © 2026 (غزة - فلسطين)</span>
          <span className="font-mono text-[11px]">نسخة النظام v2.4.8 • تدقيق امتثال العمليات</span>
        </footer>
      </div>
    </div>
  );
}
