import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sidebarItems = [
    { id: 'dashboard', title: 'الرئيسية', icon: 'dashboard', path: '/admin/dashboard', active: true },
    { id: 'applications', title: 'طلبات الانضمام', icon: 'person_add', badge: '12', badgeColor: 'bg-[#B3261E]', path: '/admin/applications' },
    { id: 'merchants', title: 'التجار', icon: 'storefront', badge: '48', badgeColor: 'bg-[#1F7A6E]', path: '/admin/merchants' },
    { id: 'customers', title: 'العملاء', icon: 'group', path: '/admin/customers' },
    { id: 'ledger', title: 'الدفتر المالي', icon: 'account_balance_wallet', path: '/admin/ledger' },
    { id: 'transfers', title: 'التحويلات', icon: 'payments', path: '/admin/transfers' },
    { id: 'disputes', title: 'العمليات المتنازع عليها', icon: 'gavel', badge: '3', badgeColor: 'bg-[#8A6420]', path: '/admin/disputes' },
    { id: 'complaints', title: 'الشكاوى', icon: 'support_agent', badge: '5', badgeColor: 'bg-[#B3261E]', path: '/admin/complaints' },
    { id: 'products', title: 'العروض والمنتجات', icon: 'loyalty', path: '/admin/products' },
    { id: 'reviews', title: 'التقييمات', icon: 'star', path: '/admin/reviews' },
    { id: 'reports', title: 'التقارير', icon: 'bar_chart', path: '/admin/reports' },
    { id: 'packages', title: 'الباقات', icon: 'inventory_2', path: '/admin/packages' },
    { id: 'ads', title: 'الإعلانات', icon: 'campaign', path: '/admin/ads' },
    { id: 'rules', title: 'الإعدادات والقواعد', icon: 'tune', path: '/admin/rules' },
    { id: 'audit-log', title: 'سجل الإجراءات', icon: 'history', path: '/admin/audit-log' },
  ];

  const auditRows = [
    { time: '14:45 - 24 أكتوبر', action: 'اعتماد تسوية مالية', entity: 'متجر أزياء الشرق (#M-102)', note: 'صرف دفعة مستحقة بقيمة 2,450 ₪ بعد اكتمال التسليمات', user: 'م. أسامة (مدير مالي)', type: 'success' },
    { time: '14:20 - 24 أكتوبر', action: 'تجميد رصيد متنازع عليه', entity: 'طلب #TBD-7841', note: 'تعليق مبلغ 240 ₪ في حساب الأمانة بسبب شكوى استبدال', user: 'سارة ح. (مشرف تدقيق)', type: 'warning' },
    { time: '13:55 - 24 أكتوبر', action: 'رفض متجر غير مطابق', entity: 'بوتيك روز باريس (#REQ-091)', note: 'عدم مطابقة بيانات السجل التجاري للشروط المعتمدة', user: 'سارة ح. (مشرف تدقيق)', type: 'danger' },
    { time: '13:10 - 24 أكتوبر', action: 'ترقية باقة متجر', entity: 'إلكترونيات السلام (#M-045)', note: 'ترقية من الباقة الأساسية إلى باقة VIP السنوية', user: 'خالد م. (علاقات التجار)', type: 'info' },
    { time: '12:30 - 24 أكتوبر', action: 'تعديل سقف عمولة', entity: 'فئة المخابز والحلويات', note: 'تطبيق نسبة عمولة تشجيعية مؤقتة 2.5% بدلاً من 3%', user: 'مدير النظام (أحمد ك.)', type: 'neutral' },
    { time: '11:45 - 24 أكتوبر', action: 'إلغاء نقاط طلب ملغى', entity: 'محفظة العميل (#C-8821)', note: 'خصم 450 نقطة كاش باك بعد إرجاع الطلب المرفوض', user: 'نظام آلي (System Bot)', type: 'danger' },
    { time: '11:05 - 24 أكتوبر', action: 'إيداع تعويض يدوي', entity: 'الزبونة رغد ناصر (#C-4091)', note: 'إضافة 500 نقطة ولاء كاعتذار عن تأخر وصول الطلب', user: 'هند ع. (الدعم الفني)', type: 'info' },
    { time: '10:30 - 24 أكتوبر', action: 'توثيق مستند بنكي', entity: 'مجوهرات الماسة (#M-018)', note: 'المصادقة على شهادة IBAN جديدة من بنك فلسطين', user: 'م. أسامة (مدير مالي)', type: 'info' },
    { time: '09:50 - 24 أكتوبر', action: 'فك حظر حساب', entity: 'متجر التوفير (#M-076)', note: 'إعادة التفعيل بعد تسوية الشكاوى العالقة بنجاح', user: 'سارة ح. (مشرف تدقيق)', type: 'success' },
    { time: '09:15 - 24 أكتوبر', action: 'اعتماد خصم متجر', entity: 'صيدلية النور (#M-033)', note: 'الموافقة على حملة مضاعفة النقاط (10% كاش باك)', user: 'خالد م. (علاقات التجار)', type: 'success' },
  ];

  return (
    <div className="bg-[#F6F3EC] text-[#12302B] antialiased min-h-screen flex selection:bg-[#1F7A6E] selection:text-white font-tajawal">
      {/* ========================================================
          1. RIGHT-SIDE VERTICAL SIDEBAR (260px wide, fixed, #12302B)
          ======================================================== */}
      <aside
        aria-label="شريط التنقل الإداري"
        className={`fixed top-0 right-0 h-screen w-[260px] flex flex-col z-40 bg-[#12302B] text-[#F6F3EC] border-l border-[#E4DFD3]/20 select-none transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Platform Header & SVG Logo */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <div className="h-10 sm:h-11 w-auto flex items-center justify-center shrink-0">
              <img
                alt="شعار منصة تبادل"
                className="h-full w-auto object-contain rounded-lg shadow-xs"
                src="/logo.png"
              />
            </div>
            <div className="overflow-hidden">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black text-white tracking-tight leading-none">تبادل</h1>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/10 text-[#E9B44C]">A-02</span>
              </div>
              <p className="text-xs text-[#F6F3EC]/70 font-medium truncate mt-1">الإدارة والتشغيل المركزية</p>
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden p-1.5 rounded-lg text-white/70 hover:text-white"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* 15 Ordered Navigation Items */}
        <nav aria-label="القائمة الرئيسية" className="flex-1 overflow-y-auto py-2 px-2.5 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = item.active;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl font-bold transition-colors relative ${
                  isActive
                    ? 'bg-white/10 text-white border-r-4 border-[#E9B44C]'
                    : 'text-[#F6F3EC]/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`material-symbols-outlined text-[20px] ${
                      isActive ? 'text-[#E9B44C]' : 'text-[#F6F3EC]/60'
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="text-xs sm:text-sm">{item.title}</span>
                </div>
                {item.badge ? (
                  <span className={`px-2 py-0.5 text-xs font-bold rounded-full text-white ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                ) : isActive ? (
                  <span className="w-2 h-2 rounded-full bg-[#E9B44C]"></span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Bottom Footer */}
        <div className="p-3 border-t border-white/10 bg-black/10">
          <Link
            to="/admin/login"
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[#F6F3EC]/80 hover:text-white hover:bg-[#B3261E]/20 text-xs sm:text-sm font-semibold transition-colors min-h-[44px]"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#B3261E]">logout</span>
              <span>تسجيل الخروج</span>
            </div>
            <span className="text-xs text-[#F6F3EC]/40 font-mono">v2.4</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-30 lg:hidden"
        />
      )}

      {/* ========================================================
          2. MAIN CONTENT AREA (Offset by 260px right sidebar)
          ======================================================== */}
      <div className="flex-1 lg:mr-[260px] flex flex-col min-w-0 min-h-screen">
        {/* Top Bar (64px height, #FFFFFF, border-b #E4DFD3) */}
        <header className="sticky top-0 z-20 h-16 bg-white border-b border-[#E4DFD3] px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Right: Page title + Breadcrumb + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-[#12302B] hover:bg-gray-100"
              aria-label="فتح القائمة"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <nav aria-label="مسار التصفح" className="text-xs text-[#12302B]/70 flex items-center gap-1.5 flex-wrap">
              <span className="font-medium text-[#12302B]">منصة تبادل</span>
              <span>/</span>
              <span className="font-bold text-[#1F7A6E] bg-[#1F7A6E]/10 px-2 py-0.5 rounded">
                الرئيسية / لوحة الإدارة العامة (A-02)
              </span>
            </nav>
          </div>

          {/* Center: Global Search Bar */}
          <div className="flex-1 max-w-lg hidden md:block mx-4">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#12302B]/40">
                search
              </span>
              <input
                className="w-full h-10 pl-4 pr-11 text-xs bg-[#F6F3EC]/50 border border-[#E4DFD3] rounded-xl text-[#12302B] placeholder:text-[#12302B]/40 focus:outline-none focus:border-[#1F7A6E] focus:bg-white transition-colors"
                placeholder="ابحث برقم الطلب أو اسم المتجر أو الهاتف..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Left: Controls, Notification, Status Badge, Admin Profile */}
          <div className="flex items-center gap-3">
            {/* Notification Bell with Count Badge (4) */}
            <button
              className="relative p-2 text-[#12302B]/70 hover:text-[#12302B] hover:bg-[#F6F3EC] rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              title="الإشعارات العاجلة"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#B3261E] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                4
              </span>
            </button>

            <div className="h-6 w-px bg-[#E4DFD3] hidden sm:block"></div>

            {/* Admin Status Badge & Avatar */}
            <div className="flex items-center gap-2.5 pl-1 pr-2 py-1 bg-[#F6F3EC]/60 border border-[#E4DFD3] rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#12302B] text-white font-bold text-xs flex items-center justify-center">
                م.ن
              </div>
              <div className="text-right hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#12302B]">مدير النظام</span>
                  <span className="px-1.5 py-0.2 bg-[#1F7A6E]/15 text-[#1F7A6E] text-[10px] font-bold rounded">
                    2FA مفعّل
                  </span>
                </div>
                <span className="text-[11px] text-[#12302B]/60 block font-mono">admin@tabadul.ps</span>
              </div>
            </div>
          </div>
        </header>

        {/* Subtle Connection Status Bar Under Top Bar */}
        <div className="h-7 bg-[#1F7A6E]/10 border-b border-[#1F7A6E]/20 px-6 flex items-center justify-between text-xs text-[#12302B] flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1F7A6E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1F7A6E]"></span>
            </span>
            <span className="font-bold">
              حالة النظام: متصل بالخادم المركزي (GAZA-NODE-01) ومطابق بنسبة 100%
            </span>
          </div>
          <span className="text-[#12302B]/60 text-[11px]">آخر تحديث مباشر: منذ 12 ثانية</span>
        </div>

        {/* ========================================================
            MAIN DASHBOARD CANVAS (max-w-7xl, #F6F3EC)
            ======================================================== */}
        <main className="flex-1 p-4 sm:p-6 space-y-6 max-w-7xl w-full mx-auto">
          {/* ================= SECTION: يحتاج إجراءً الآن ================= */}
          <section aria-labelledby="urgent-actions-title">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#B3261E]">notification_important</span>
                <h2 className="text-sm sm:text-base font-bold text-[#12302B]" id="urgent-actions-title">
                  يحتاج إجراءً الآن
                </h2>
                <span className="text-xs text-[#12302B]/60 hidden sm:inline">مرتبة حسب أقرب مهلة زمنية</span>
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white border border-[#E4DFD3] text-[#12302B]">
                4 بنود تتطلب التدخل
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {/* Urgent Card 1: 12 طلب انضمام تنتظر المراجعة */}
              <div className="bg-white border border-[#E4DFD3] rounded-xl p-4 flex flex-col justify-between hover:border-[#12302B]/40 transition-colors shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#B3261E] text-white flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">timer</span>
                      <span>متبقي 6 ساعات</span>
                    </span>
                    <span className="text-xs font-bold text-[#B3261E]">مهلة 48 ساعة</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#12302B] mb-1 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-base">person_add</span>
                    <span>12 طلب انضمام تنتظر المراجعة</span>
                  </h3>
                  <p className="text-xs text-[#12302B]/70 leading-relaxed mb-3">
                    متاجر وشركاء جدد بحاجة للتدقيق والاعتماد المالي والتجاري.
                  </p>
                </div>
                <Link
                  to="/admin/applications"
                  className="w-full h-11 px-3 bg-[#E9B44C] text-[#12302B] hover:bg-[#E9B44C]/90 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span className="material-symbols-outlined text-base">fact_check</span>
                  <span>فحص الطلبات</span>
                </Link>
              </div>

              {/* Urgent Card 2: 3 عمليات متنازع عليها تحتاج قرارًا */}
              <div className="bg-white border border-[#E4DFD3] rounded-xl p-4 flex flex-col justify-between hover:border-[#12302B]/40 transition-colors shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#FBF1DC] text-[#8A6420] border border-[#8A6420]/30 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">gavel</span>
                      <span>قيد النظر</span>
                    </span>
                    <span className="text-xs font-mono font-bold text-[#8A6420]">نزاع مالي معلق</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#12302B] mb-1 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#8A6420] text-base">balance</span>
                    <span>3 عمليات متنازع عليها تحتاج قرارًا</span>
                  </h3>
                  <p className="text-xs text-[#12302B]/70 leading-relaxed mb-3">
                    نزاعات بين المشتري والتاجر حول تسليم الشحنات واسترداد المبالغ.
                  </p>
                </div>
                <button
                  onClick={() => navigate('/admin/applications')}
                  className="w-full h-11 px-3 bg-white border border-[#E4DFD3] text-[#12302B] hover:bg-[#F6F3EC] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base text-[#8A6420]">policy</span>
                  <span>اتخاذ قرار</span>
                </button>
              </div>

              {/* Urgent Card 3: 5 شكاوى مفتوحة */}
              <div className="bg-white border border-[#E4DFD3] rounded-xl p-4 flex flex-col justify-between hover:border-[#12302B]/40 transition-colors shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#B3261E]/10 text-[#B3261E] border border-[#B3261E]/20 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">headset_mic</span>
                      <span>خدمة الزبائن</span>
                    </span>
                    <span className="text-xs font-bold text-[#B3261E]">SLA ساعتان</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#12302B] mb-1 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#B3261E] text-base">mark_chat_unread</span>
                    <span>5 شكاوى مفتوحة</span>
                  </h3>
                  <p className="text-xs text-[#12302B]/70 leading-relaxed mb-3">
                    شكاوى عملاء مستعجلة تتطلب الرد المباشر قبل انقضاء المهلة.
                  </p>
                </div>
                <button
                  onClick={() => navigate('/merchant/help')}
                  className="w-full h-11 px-3 bg-white border border-[#E4DFD3] text-[#12302B] hover:bg-[#F6F3EC] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base text-[#1F7A6E]">support</span>
                  <span>معالجة الشكاوى</span>
                </button>
              </div>

              {/* Urgent Card 4: تحويلات مجدولة اليوم: 8 تجار */}
              <div className="bg-white border border-[#E4DFD3] rounded-xl p-4 flex flex-col justify-between hover:border-[#12302B]/40 transition-colors shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#1F7A6E]/10 text-[#1F7A6E] border border-[#1F7A6E]/20 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">schedule_send</span>
                      <span>دفعة اليوم</span>
                    </span>
                    <span className="text-xs font-bold text-[#1F7A6E] font-mono">8,450 ₪</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#12302B] mb-1 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-base">account_balance</span>
                    <span>تحويلات مجدولة اليوم: 8 تجار</span>
                  </h3>
                  <p className="text-xs text-[#12302B]/70 leading-relaxed mb-3">
                    مستحقات دورية معتمدة بانتظار أمر الصرف والتوقيع الإداري.
                  </p>
                </div>
                <button
                  onClick={() => navigate('/merchant/wallet')}
                  className="w-full h-11 px-3 bg-white border border-[#E4DFD3] text-[#12302B] hover:bg-[#F6F3EC] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base text-[#1F7A6E]">check_circle</span>
                  <span>اعتماد التحويلات</span>
                </button>
              </div>
            </div>
          </section>

          {/* ================= ALERT BANNER: Matching Warning Card ================= */}
          <section aria-label="تنبيه مطابقة مالية" className="bg-[#FBF1DC] border border-[#8A6420]/30 rounded-xl p-3.5 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#8A6420] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">warning</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-[#8A6420]">تنبيه مطابقة: فرق 12 ₪ في الدفتر</h3>
                  <span className="px-2 py-0.2 rounded text-[10px] font-bold bg-[#8A6420] text-white">تحت المراجعة</span>
                </div>
                <p className="text-xs text-[#8A6420]/90 mt-0.5">
                  تم رصد فارق تسوية قدره 12 ₪ بين رصيد الإسكرو اللحظي وقيد التسوية اليومي، يرجى إجراء المطابقة الدفترية.
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate('/merchant/wallet')}
              className="px-3.5 py-2 bg-white border border-[#8A6420]/40 hover:bg-[#FBF1DC] rounded-xl text-xs font-bold text-[#8A6420] transition-colors flex items-center gap-1.5 shrink-0 min-h-[44px] cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">sync_alt</span>
              <span>المطابقة السريعة للدفتر</span>
            </button>
          </section>

          {/* ================= SECTION: 6 KPI CARDS ================= */}
          <section aria-labelledby="kpi-heading">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm sm:text-base font-bold text-[#12302B]" id="kpi-heading">
                مؤشرات الأداء الرئيسية والسيولة
              </h2>
              <span className="text-xs text-[#12302B]/60">تحديث آلي مباشر</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* KPI 1: التجار النشطون */}
              <div className="bg-white border border-[#E4DFD3] rounded-xl p-4 hover:border-[#12302B]/30 transition-colors shadow-xs">
                <div className="flex items-center justify-between text-[#12302B]/60 mb-2">
                  <span className="text-xs font-bold">التجار النشطون</span>
                  <span className="p-1.5 rounded-lg bg-[#F6F3EC] text-[#12302B]">
                    <span className="material-symbols-outlined text-lg">store</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-extrabold text-[#12302B]">48</span>
                  <span className="text-xs font-bold text-[#12302B]/70">متجر معتمد</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#1F7A6E] font-semibold">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>100% متاجر موثقة بالهوية التجارية</span>
                </div>
              </div>

              {/* KPI 2: طلبات اليوم */}
              <div className="bg-white border border-[#E4DFD3] rounded-xl p-4 hover:border-[#12302B]/30 transition-colors shadow-xs">
                <div className="flex items-center justify-between text-[#12302B]/60 mb-2">
                  <span className="text-xs font-bold">طلبات اليوم</span>
                  <span className="p-1.5 rounded-lg bg-[#F6F3EC] text-[#12302B]">
                    <span className="material-symbols-outlined text-lg">shopping_bag</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-extrabold text-[#12302B]">126</span>
                  <span className="text-xs font-bold text-[#12302B]/70">طلباً منجزاً</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#1F7A6E] font-semibold">
                  <span className="material-symbols-outlined text-sm">local_shipping</span>
                  <span>معدل التسليم الناجح: 98.4%</span>
                </div>
              </div>

              {/* KPI 3: المبيعات (GMV) */}
              <div className="bg-white border border-[#E4DFD3] rounded-xl p-4 hover:border-[#12302B]/30 transition-colors shadow-xs">
                <div className="flex items-center justify-between text-[#12302B]/60 mb-2">
                  <span className="text-xs font-bold">المبيعات</span>
                  <span className="p-1.5 rounded-lg bg-[#F6F3EC] text-[#1F7A6E]">
                    <span className="material-symbols-outlined text-lg">payments</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl font-extrabold text-[#12302B]">18,450</span>
                  <span className="text-base font-bold text-[#1F7A6E]">₪</span>
                  <span className="text-xs text-[#12302B]/70 mr-1">(حجم مبيعات اليوم GMV)</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#1F7A6E] font-semibold">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span>+14.2% مقارنة بمتوسط الأسبوع</span>
                </div>
              </div>

              {/* KPI 4: النقاط الصادرة */}
              <div className="bg-white border border-[#E4DFD3] rounded-xl p-4 hover:border-[#12302B]/30 transition-colors shadow-xs">
                <div className="flex items-center justify-between text-[#12302B]/60 mb-2">
                  <span className="text-xs font-bold">النقاط الصادرة</span>
                  <span className="p-1.5 rounded-lg bg-[#F6F3EC] text-[#E9B44C]">
                    <span className="material-symbols-outlined text-lg">stars</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl font-extrabold text-[#12302B]">214,000</span>
                  <span className="text-xs font-bold text-[#12302B]/70">نقطة</span>
                  <span className="text-xs text-[#12302B]/60 mr-1">(كاش باك 5%)</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#12302B]/70 font-semibold">
                  <span className="material-symbols-outlined text-sm text-[#1F7A6E]">savings</span>
                  <span>ما يعادل نقدياً: 1,070 ₪ للمستهلكين</span>
                </div>
              </div>

              {/* KPI 5: عمولة المنصة المستحقة */}
              <div className="bg-white border border-[#E4DFD3] rounded-xl p-4 hover:border-[#12302B]/30 transition-colors shadow-xs">
                <div className="flex items-center justify-between text-[#12302B]/60 mb-2">
                  <span className="text-xs font-bold">عمولة المنصة المستحقة</span>
                  <span className="p-1.5 rounded-lg bg-[#F6F3EC] text-[#12302B]">
                    <span className="material-symbols-outlined text-lg">percent</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl font-extrabold text-[#12302B]">553</span>
                  <span className="text-base font-bold text-[#1F7A6E]">₪</span>
                  <span className="text-xs text-[#12302B]/70 mr-1">(عمولة 3%)</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#1F7A6E] font-semibold">
                  <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                  <span>صافي الإيراد التشغيلي المستحق اليوم</span>
                </div>
              </div>

              {/* KPI 6: الأموال المحتجزة (Escrow) */}
              <div className="bg-white border border-[#E4DFD3] rounded-xl p-4 hover:border-[#12302B]/30 transition-colors shadow-xs">
                <div className="flex items-center justify-between text-[#12302B]/60 mb-2">
                  <span className="text-xs font-bold">الأموال المحتجزة (Escrow)</span>
                  <span className="p-1.5 rounded-lg bg-[#F6F3EC] text-[#1F7A6E]">
                    <span className="material-symbols-outlined text-lg">lock</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl font-extrabold text-[#12302B]">9,820</span>
                  <span className="text-base font-bold text-[#1F7A6E]">₪</span>
                  <span className="text-xs text-[#12302B]/70 mr-1">(أمانة للمتسوقين)</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#1F7A6E] font-semibold">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  <span>محمية بالكامل لحين تأكيد التسليم</span>
                </div>
              </div>
            </div>
          </section>

          {/* ================= SECTION: آخر الإجراءات الحساسة (Audit Log) ================= */}
          <section aria-labelledby="audit-table-heading" className="bg-white border border-[#E4DFD3] rounded-xl overflow-hidden shadow-xs">
            {/* Table Header & Link */}
            <div className="p-4 border-b border-[#E4DFD3] flex flex-wrap items-center justify-between gap-3 bg-white">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#12302B]">history_toggle_off</span>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-[#12302B]" id="audit-table-heading">
                    آخر الإجراءات الحساسة (Audit Log)
                  </h2>
                  <p className="text-xs text-[#12302B]/60">
                    تسجيل وتوثيق فوري لجميع العمليات الإدارية والمالية مع هوية المنفذ
                  </p>
                </div>
              </div>
              <Link
                to="/admin/audit-log"
                className="px-3 py-1.5 rounded-xl border border-[#E4DFD3] bg-[#F6F3EC] hover:bg-[#E4DFD3]/60 text-xs font-bold text-[#12302B] transition-colors flex items-center gap-1.5 min-h-[44px]"
              >
                <span>عرض السجل الكامل (A-18)</span>
                <span className="material-symbols-outlined text-base">arrow_left</span>
              </Link>
            </div>

            {/* 10 Detailed Rows Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse text-xs">
                <thead>
                  <tr className="bg-[#F6F3EC]/70 border-b border-[#E4DFD3] text-[#12302B] font-bold h-11">
                    <th className="px-4 py-2">الوقت والتاريخ</th>
                    <th className="px-4 py-2">الإجراء الحساس</th>
                    <th className="px-4 py-2">الكيان / الحساب المتأثر</th>
                    <th className="px-4 py-2">السبب / الملاحظة</th>
                    <th className="px-4 py-2">المنفذ المسؤول</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4DFD3] text-[#12302B]">
                  {auditRows.map((row, idx) => (
                    <tr key={idx} className="h-12 hover:bg-[#F6F3EC]/40 transition-colors">
                      <td className="px-4 py-2 text-[#12302B]/70 font-mono">{row.time}</td>
                      <td className="px-4 py-2 font-semibold">
                        <span
                          className={`inline-flex items-center gap-1.5 font-bold ${
                            row.type === 'success'
                              ? 'text-[#1F7A6E]'
                              : row.type === 'warning'
                              ? 'text-[#8A6420]'
                              : row.type === 'danger'
                              ? 'text-[#B3261E]'
                              : 'text-[#12302B]'
                          }`}
                        >
                          <span className="material-symbols-outlined text-sm">
                            {row.type === 'success'
                              ? 'check_circle'
                              : row.type === 'warning'
                              ? 'pause_circle'
                              : row.type === 'danger'
                              ? 'cancel'
                              : 'tune'}
                          </span>
                          <span>{row.action}</span>
                        </span>
                      </td>
                      <td className="px-4 py-2 font-bold">{row.entity}</td>
                      <td className="px-4 py-2 text-[#12302B]/80">{row.note}</td>
                      <td className="px-4 py-2 font-medium">{row.user}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Summary Footer */}
            <div className="p-3 bg-[#F6F3EC]/50 border-t border-[#E4DFD3] flex items-center justify-between text-xs text-[#12302B]/70 flex-wrap gap-2">
              <span>يتم الاحتفاظ بجميع السجلات مشفرة وفق معايير الحوكمة والتدقيق المالي (A-18).</span>
              <span className="font-mono font-bold text-[#12302B]">10 / 1,842 حركة مسجلة</span>
            </div>
          </section>
        </main>

        {/* Operational Footer */}
        <footer className="mt-auto border-t border-[#E4DFD3] bg-white px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-[#12302B]/70">
          <div className="flex items-center gap-3">
            <span>© 2026 منصة «تبادل» لإدارة الولاء والتجارة المحلية</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#1F7A6E] font-bold">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span>شهادة تشفير بنكي TLS 1.3 مفعّلة</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono">زمن الاستجابة: 24ms</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
