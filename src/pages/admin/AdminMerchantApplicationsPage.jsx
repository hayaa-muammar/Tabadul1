import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminMerchantApplicationsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchFilter, setSearchFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [deliveryFilter, setDeliveryFilter] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const applications = [
    {
      id: 'REQ-2026-0842',
      name: 'بوتيك الياسمين للأزياء',
      location: 'غزة - شارع عمر المختار',
      icon: 'checkroom',
      iconBg: 'from-[#12302B] to-[#1F7A6E]',
      owner: 'سارة عبد الرحمن',
      phone: '059-9821430',
      category: 'فساتين سهرة وعبايات راقية',
      categoryTag: 'أزياء راقية نسائية',
      deliveryType: 'مندوب خاص',
      deliveryFee: '15 شيكل ثابت',
      timeText: 'اليوم (منذ ساعتين)',
      slaUrgent: 'متبقي 11 ساعة',
      status: 'pending',
      statusLabel: 'جديد - بانتظار المراجعة',
      statusClass: 'bg-amber-100/80 text-amber-800 border-amber-300',
    },
    {
      id: 'REQ-2026-0839',
      name: 'أحذية النصر سنيكرز',
      location: 'غزة - الرمال الشمالي',
      icon: 'steps',
      iconBg: 'from-[#835400] to-[#E9B44C]',
      owner: 'م. إبراهيم كمال',
      phone: '059-4112095',
      category: 'سنيكرز رجالي وأحذية رياضية',
      categoryTag: 'أحذية ورياضة',
      deliveryType: 'شركة توصيل',
      deliveryFee: '12 شيكل',
      timeText: 'اليوم (منذ 5 ساعات)',
      slaUrgent: 'متبقي 19 ساعة',
      status: 'pending',
      statusLabel: 'جديد - بانتظار المراجعة',
      statusClass: 'bg-amber-100/80 text-amber-800 border-amber-300',
    },
    {
      id: 'REQ-2026-0835',
      name: 'بوتيك لمسة فاشون',
      location: 'خانيونس - شارع جلال',
      icon: 'styler',
      iconBg: 'from-[#12302B] to-[#2E9E6B]',
      owner: 'ندى القدوة',
      phone: '059-7334812',
      category: 'أزياء كاجوال وشالات وحقائب',
      categoryTag: 'كاجوال وإكسسوارات',
      deliveryType: 'مندوب خاص',
      deliveryFee: '10 شيكل',
      timeText: 'أمس',
      slaUrgent: 'متبقي 28 ساعة',
      status: 'pending',
      statusLabel: 'جديد - بانتظار المراجعة',
      statusClass: 'bg-amber-100/80 text-amber-800 border-amber-300',
    },
    {
      id: 'REQ-2026-0820',
      name: 'دار الحرير للمطرزات',
      location: 'دير البلح - السوق القديم',
      icon: 'pattern',
      iconBg: 'from-[#E07B2F] to-amber-600',
      owner: 'أمينة صالحة',
      phone: '059-2559041',
      category: 'مطرزات تراثية وشالات فخمة',
      categoryTag: 'تراث وحرف يدوية',
      deliveryType: 'مندوب خاص',
      deliveryFee: '15 شيكل',
      timeText: 'قبل يومين',
      slaUrgent: 'تم إرسال تنبيه',
      status: 'needs_revision',
      statusLabel: 'بانتظار صورة الهوية',
      statusClass: 'bg-orange-100 text-orange-800 border-orange-300',
    },
    {
      id: 'REQ-2026-0811',
      name: 'كيدز لاند للأطفال',
      location: 'غزة - شارع النصر',
      icon: 'child_care',
      iconBg: 'from-sky-700 to-sky-500',
      owner: 'رامي الشوا',
      phone: '059-8874120',
      category: 'ملابس أطفال ومواليد',
      categoryTag: 'أطفال وحديثي الولادة',
      deliveryType: 'شركة توصيل',
      deliveryFee: '14 شيكل',
      timeText: 'قبل 3 أيام',
      slaUrgent: 'مهلة إضافية 24 س',
      status: 'needs_revision',
      statusLabel: 'بانتظار السجل التجاري',
      statusClass: 'bg-orange-100 text-orange-800 border-orange-300',
    },
    {
      id: 'REQ-2026-0790',
      name: 'أزياء السعادة الرجالية',
      location: 'غزة - شارع الوحدة',
      icon: 'dry_cleaning',
      iconBg: 'from-[#12302B] to-[#1F7A6E]',
      owner: 'طارق النجار',
      phone: '059-3329910',
      category: 'بدلات ورسمي وقمصان',
      categoryTag: 'أزياء رجالي',
      deliveryType: 'مندوب خاص',
      deliveryFee: '15 شيكل',
      timeText: '18 أكتوبر 2023',
      slaUrgent: 'تم التدقيق من المشرف',
      status: 'approved',
      statusLabel: 'تم الاعتماد والتوثيق',
      statusClass: 'bg-emerald-100 text-[#2E9E6B] border-emerald-300',
    },
    {
      id: 'REQ-2026-0775',
      name: 'عطور وجمال باريس',
      location: 'غزة - الرمال الجنوبي',
      icon: 'auto_fix_high',
      iconBg: 'from-rose-900 to-rose-700',
      owner: 'وائل حلس',
      phone: '059-6611299',
      category: 'عطور ومستحضرات تجميل',
      categoryTag: 'عطور ومكياج',
      deliveryType: 'مندوب خاص',
      deliveryFee: '10 شيكل',
      timeText: '16 أكتوبر 2023',
      slaUrgent: 'تم إرسال سبب الرفض',
      status: 'rejected',
      statusLabel: 'مرفوض: خارج قطاع الأزياء',
      statusClass: 'bg-rose-100 text-rose-800 border-rose-300',
    },
  ];

  const filteredApplications = applications.filter((app) => {
    if (activeTab === 'pending' && app.status !== 'pending') return false;
    if (activeTab === 'needs_revision' && app.status !== 'needs_revision') return false;
    if (activeTab === 'approved' && app.status !== 'approved') return false;
    if (activeTab === 'rejected' && app.status !== 'rejected') return false;

    if (searchFilter && !app.name.includes(searchFilter) && !app.owner.includes(searchFilter)) return false;
    return true;
  });

  return (
    <div className="bg-[#F6F3EC] text-[#191c22] min-h-screen flex font-tajawal antialiased selection:bg-[#1F7A6E] selection:text-white">
      {/* ================= SIDEBAR (260px) ================= */}
      <aside
        className={`w-[260px] bg-[#12302B] text-[#F6F3EC] flex flex-col shrink-0 h-screen sticky top-0 border-l border-white/10 z-40 select-none shadow-xl transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0 fixed lg:sticky'
        }`}
      >
        {/* Brand Logo & Platform Title */}
        <div className="px-5 py-4 flex items-center justify-between border-b border-white/10 bg-[#0d2420]">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <div className="h-10 sm:h-11 w-auto flex items-center justify-center shrink-0">
              <img
                alt="شعار منصة تبادل"
                className="h-full w-auto object-contain rounded-lg shadow-sm"
                src="/logo.png"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-white tracking-wide">مـنـصـة تـبـادل</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#E9B44C]/20 text-[#E9B44C] border border-[#E9B44C]/30 font-bold">
                  إداري
                </span>
              </div>
              <span className="text-xs text-[#F6F3EC]/70">الإدارة المركزية العامة</span>
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden p-1 text-white/70 hover:text-white"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Navigation List (15 Management Tabs) */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          <div className="px-3 py-1.5 text-xs text-[#F6F3EC]/40 tracking-wider">لوحات التحكم والمتاجر</div>

          {/* 1. الرئيسية */}
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-[#F6F3EC]/80 hover:bg-white/5 hover:text-white transition-colors duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span>الرئيسية</span>
          </Link>

          {/* 2. طلبات الانضمام (ACTIVE) */}
          <Link
            to="/admin/applications"
            className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs bg-[#1F7A6E] text-white shadow-xs font-bold transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px]">person_add</span>
              <span>طلبات الانضمام</span>
            </div>
            <span className="bg-[#E9B44C] text-[#12302B] px-2 py-0.5 rounded-full text-xs font-extrabold shadow-xs">
              3 جديدة
            </span>
          </Link>

          {/* 3. التجار */}
          <Link
            to="/admin/merchants"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-[#F6F3EC]/80 hover:bg-white/5 hover:text-white transition-colors duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">storefront</span>
            <span>التجار والشركاء</span>
          </Link>

          {/* 4. العملاء */}
          <Link
            to="/admin/customers"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-[#F6F3EC]/80 hover:bg-white/5 hover:text-white transition-colors duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">group</span>
            <span>العملاء والمستخدمين</span>
          </Link>

          {/* 5. الدفتر المالي */}
          <Link
            to="/admin/ledger"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-[#F6F3EC]/80 hover:bg-white/5 hover:text-white transition-colors duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
            <span>الدفتر المالي المركزي</span>
          </Link>

          {/* 6. التحويلات */}
          <Link
            to="/admin/transfers"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-[#F6F3EC]/80 hover:bg-white/5 hover:text-white transition-colors duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">payments</span>
            <span>التحويلات والتسويات</span>
          </Link>

          <div className="pt-3 px-3 py-1 text-xs text-[#F6F3EC]/40 tracking-wider">العمليات والنزاعات</div>

          {/* 7. العمليات المتنازع عليها */}
          <Link
            to="/admin/disputes"
            className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-[#F6F3EC]/80 hover:bg-white/5 hover:text-white transition-colors duration-150"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px]">gavel</span>
              <span>العمليات المتنازع عليها</span>
            </div>
            <span className="bg-[#ba1a1a]/30 text-rose-200 border border-[#ba1a1a]/40 px-1.5 py-0.2 rounded-full text-xs">
              2
            </span>
          </Link>

          {/* 8. الشكاوى والدعم */}
          <Link
            to="/admin/complaints"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-[#F6F3EC]/80 hover:bg-white/5 hover:text-white transition-colors duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">support_agent</span>
            <span>الشكاوى والتذاكر</span>
          </Link>

          {/* 9. المكافآت */}
          <Link
            to="/admin/rewards"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-[#F6F3EC]/80 hover:bg-white/5 hover:text-white transition-colors duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">loyalty</span>
            <span>برنامج المكافآت والنقاط</span>
          </Link>

          {/* 10. سجل التدقيق */}
          <Link
            to="/admin/audit-log"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-[#F6F3EC]/80 hover:bg-white/5 hover:text-white transition-colors duration-150"
          >
            <span className="material-symbols-outlined text-[20px]">security</span>
            <span>سجل التدقيق والامتثال</span>
          </Link>
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-white/10 bg-[#0e2723]">
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center font-bold text-sm">
                غـ
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">غزة - فلسطين</span>
                <span className="text-[10px] text-[#F6F3EC]/60">خادم تشغيل محلي</span>
              </div>
            </div>
            <Link to="/admin/login" className="text-[#F6F3EC]/60 hover:text-[#E9B44C] p-1" title="تسجيل الخروج">
              <span className="material-symbols-outlined text-[20px]">logout</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-30 lg:hidden"
        />
      )}

      {/* ================= MAIN CONTENT CANVAS ================= */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#F6F3EC]">
        {/* ================= TOP APP BAR (64px) ================= */}
        <header className="h-16 bg-white border-b border-[#E5E7EB] px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          {/* Breadcrumb Navigation + Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#12302B] hover:bg-gray-100 rounded-xl"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="flex items-center gap-2 text-[#43474e] text-xs font-medium flex-wrap">
              <Link to="/admin/dashboard" className="hover:text-[#12302B]">
                الإدارة العامة
              </Link>
              <span className="text-[#c4c6cf]">/</span>
              <span>المتاجر والشركاء</span>
              <span className="text-[#c4c6cf]">/</span>
              <span className="text-[#1F7A6E] font-bold bg-[#1F7A6E]/10 px-2.5 py-1 rounded-md">
                طلبات الانضمام والتوثيق (A-03)
              </span>
            </div>
          </div>

          {/* Search & System Status & Profile */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative w-64 hidden md:block">
              <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#74777f] text-[20px]">
                search
              </span>
              <input
                className="w-full h-10 pr-10 pl-4 bg-[#F6F3EC] border border-[#E5E7EB] rounded-xl text-xs focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 outline-none transition-all placeholder:text-[#74777f]"
                placeholder="بحث باسم المتجر، المالك، الهوية..."
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
              />
            </div>

            <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>

            {/* System Status Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2E9E6B]/10 border border-[#2E9E6B]/30">
              <span className="w-2 h-2 rounded-full bg-[#2E9E6B] animate-pulse"></span>
              <span className="text-xs text-[#2E9E6B] font-bold">النظام متصل 100%</span>
            </div>

            {/* Super Admin Profile Cluster */}
            <div className="flex items-center gap-3 pr-1">
              <div className="w-9 h-9 rounded-xl bg-[#12302B] text-white flex items-center justify-center font-bold text-sm shadow-xs ring-2 ring-[#E9B44C]/40">
                أ.م
              </div>
              <div className="flex flex-col text-right hidden sm:block">
                <span className="text-xs font-bold text-[#12302B] leading-tight">أحمد المقيد</span>
                <span className="text-[11px] text-[#74777f] leading-tight">المشرف العام للنظام</span>
              </div>
            </div>
          </div>
        </header>

        {/* ================= MAIN SCROLLABLE BODY ================= */}
        <main className="p-4 sm:p-6 space-y-6 max-w-[1440px] mx-auto w-full">
          {/* Page Headline & Quick Action Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold text-[#12302B]">طلبات انضمام المتاجر وبوتيكات الأزياء</h1>
                <span className="bg-[#1F7A6E] text-white px-2.5 py-0.5 rounded-full text-xs font-bold shadow-xs">
                  غزة والوسطى
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#43474e] mt-1">
                مراجعة بيانات التاجر، سجل التوصيل، فئات المنتجات، واعتماد حسابات التجار لمنصة تبادل
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
              <button
                onClick={() => alert('تم تصدير كشف الطلبات بنجاح بصيغة CSV')}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E5E7EB] hover:bg-gray-50 text-[#12302B] rounded-xl text-xs font-semibold shadow-xs transition-all hover:border-[#1F7A6E] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-[#1F7A6E]">file_download</span>
                <span>تصدير كشف الطلبات CSV</span>
              </button>
              <button
                onClick={() => alert('تم تفعيل التوثيق الجماعي للطلبات المستوفية للشروط')}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#12302B] hover:bg-[#0c221e] text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-[#E9B44C]">done_all</span>
                <span>توثيق جماعي سريع (3)</span>
              </button>
            </div>
          </div>

          {/* ================= 4 METRICS CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: طلبات جديدة */}
            <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB] shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#74777f]">طلبات جديدة تنتظر المراجعة</span>
                  <span className="w-8 h-8 rounded-lg bg-amber-50 text-[#835400] border border-[#E9B44C]/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">hourglass_top</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="text-3xl font-extrabold text-[#12302B]">3</span>
                  <span className="text-xs text-amber-700 font-bold bg-amber-100/60 px-2 py-0.5 rounded-full">
                    طلبات عاجلة
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#43474e]">
                <span className="flex items-center gap-1 text-amber-800">
                  <span className="material-symbols-outlined text-[16px]">timer</span>
                  <span>أقصى مهلة: 48 ساعة</span>
                </span>
                <span className="font-bold text-[#1F7A6E]">فحص فوري ←</span>
              </div>
            </div>

            {/* Card 2: تحتاج تعديلاً */}
            <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB] shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#74777f]">تحتاج تعديلاً من التاجر</span>
                  <span className="w-8 h-8 rounded-lg bg-orange-50 text-[#E07B2F] border border-orange-200 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">edit_note</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="text-3xl font-extrabold text-[#12302B]">2</span>
                  <span className="text-xs text-orange-800 font-bold bg-orange-100/80 px-2 py-0.5 rounded-full">
                    قيد الاستكمال
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#43474e]">
                <span>نقص السجل وصور الهوية</span>
                <span className="text-xs text-[#74777f]">إشعار مرسل</span>
              </div>
            </div>

            {/* Card 3: مقبولة هذا الشهر */}
            <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB] shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#74777f]">مقبولة هذا الشهر</span>
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 text-[#2E9E6B] border border-emerald-200 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="text-3xl font-extrabold text-[#12302B]">28</span>
                  <span className="text-xs text-[#2E9E6B] font-bold bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    +12% نسبة القبول
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#43474e]">
                <span>معدل النجاح: 82%</span>
                <span className="font-bold text-[#2E9E6B]">متاجر نشطة</span>
              </div>
            </div>

            {/* Card 4: مرفوضة وغير مطابقة */}
            <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB] shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#74777f]">مرفوضة وغير مطابقة</span>
                  <span className="w-8 h-8 rounded-lg bg-rose-50 text-[#ba1a1a] border border-rose-200 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">cancel</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="text-3xl font-extrabold text-[#ba1a1a]">6</span>
                  <span className="text-xs text-rose-800 font-bold bg-rose-100/70 px-2 py-0.5 rounded-full">
                    عدم مطابقة
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#43474e]">
                <span>خارج قطاع الأزياء والجمال</span>
                <span className="text-xs text-[#74777f]">أرشيف الاستبعاد</span>
              </div>
            </div>
          </div>

          {/* ================= TOOLBAR & FILTERS TRAY ================= */}
          <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB] shadow-xs space-y-3">
            {/* Status Tabs Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'all'
                      ? 'bg-[#12302B] text-white shadow-xs'
                      : 'bg-[#F6F3EC] text-[#12302B] hover:bg-gray-200'
                  }`}
                >
                  <span>الكل</span>
                  <span className="bg-white/20 text-white px-1.5 py-0.2 rounded-md text-[11px]">39</span>
                </button>

                <button
                  onClick={() => setActiveTab('pending')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer border ${
                    activeTab === 'pending'
                      ? 'bg-[#12302B] text-white border-transparent'
                      : 'bg-[#F6F3EC] text-[#12302B] border-[#E9B44C]/40 hover:bg-gray-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#E9B44C]"></span>
                  <span>جديدة تنتظر الفحص</span>
                  <span className="bg-[#E9B44C]/20 text-[#835400] px-1.5 py-0.2 rounded-md text-[11px] font-bold">
                    3
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('needs_revision')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'needs_revision'
                      ? 'bg-[#12302B] text-white'
                      : 'bg-[#F6F3EC] text-[#43474e] hover:bg-gray-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#E07B2F]"></span>
                  <span>تحتاج تعديلاً</span>
                  <span className="bg-gray-200 text-[#74777f] px-1.5 py-0.2 rounded-md text-[11px]">2</span>
                </button>

                <button
                  onClick={() => setActiveTab('approved')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'approved'
                      ? 'bg-[#12302B] text-white'
                      : 'bg-[#F6F3EC] text-[#43474e] hover:bg-gray-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#2E9E6B]"></span>
                  <span>مقبولة ونشطة</span>
                  <span className="bg-gray-200 text-[#74777f] px-1.5 py-0.2 rounded-md text-[11px]">28</span>
                </button>

                <button
                  onClick={() => setActiveTab('rejected')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'rejected'
                      ? 'bg-[#12302B] text-white'
                      : 'bg-[#F6F3EC] text-[#43474e] hover:bg-gray-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#ba1a1a]"></span>
                  <span>مرفوضة</span>
                  <span className="bg-gray-200 text-[#74777f] px-1.5 py-0.2 rounded-md text-[11px]">6</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#74777f]">
                <span>عرض:</span>
                <span className="font-bold text-[#12302B]">الأحدث أولاً</span>
              </div>
            </div>

            {/* Filter Selectors Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-1">
              <div className="relative">
                <span className="material-symbols-outlined absolute right-3 top-2 text-[#74777f] text-[18px]">
                  store
                </span>
                <input
                  className="w-full h-9 pr-9 pl-3 bg-[#F6F3EC] border border-[#E5E7EB] rounded-xl text-xs focus:border-[#1F7A6E] outline-none"
                  placeholder="فلترة باسم المتجر أو المالك..."
                  type="text"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                />
              </div>

              <div className="relative">
                <span className="material-symbols-outlined absolute right-3 top-2 text-[#74777f] text-[18px]">
                  category
                </span>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full h-9 pr-9 pl-3 bg-[#F6F3EC] border border-[#E5E7EB] rounded-xl text-xs text-[#43474e] focus:border-[#1F7A6E] outline-none appearance-none"
                >
                  <option value="">جميع فئات الأزياء والجمال</option>
                  <option value="fashion">فساتين سهرة وعبايات</option>
                  <option value="shoes">أحذية وسنيكرز</option>
                  <option value="casual">أزياء كاجوال وشالات</option>
                  <option value="heritage">مطرزات تراثية</option>
                </select>
                <span className="material-symbols-outlined absolute left-2.5 top-2 text-[#74777f] text-[16px] pointer-events-none">
                  expand_more
                </span>
              </div>

              <div className="relative">
                <span className="material-symbols-outlined absolute right-3 top-2 text-[#74777f] text-[18px]">
                  local_shipping
                </span>
                <select
                  value={deliveryFilter}
                  onChange={(e) => setDeliveryFilter(e.target.value)}
                  className="w-full h-9 pr-9 pl-3 bg-[#F6F3EC] border border-[#E5E7EB] rounded-xl text-xs text-[#43474e] focus:border-[#1F7A6E] outline-none appearance-none"
                >
                  <option value="">طريقة ورسوم التوصيل</option>
                  <option value="private">مندوب خاص للمتجر (10-15 شيكل)</option>
                  <option value="company">شركة توصيل معتمدة (12-14 شيكل)</option>
                </select>
                <span className="material-symbols-outlined absolute left-2.5 top-2 text-[#74777f] text-[16px] pointer-events-none">
                  expand_more
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {}}
                  className="flex-1 h-9 bg-[#1F7A6E] hover:bg-[#165c53] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">tune</span>
                  <span>تطبيق الفلاتر</span>
                </button>
                <button
                  onClick={() => {
                    setSearchFilter('');
                    setCategoryFilter('');
                    setDeliveryFilter('');
                    setActiveTab('all');
                  }}
                  className="h-9 px-3 bg-gray-100 hover:bg-gray-200 text-[#43474e] rounded-xl text-xs flex items-center justify-center transition-colors cursor-pointer"
                  title="إعادة تعيين"
                >
                  <span className="material-symbols-outlined text-[16px]">refresh</span>
                </button>
              </div>
            </div>
          </div>

          {/* ================= APPLICATIONS DATA TABLE ================= */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse text-xs">
                <thead>
                  <tr className="bg-[#F8F7F3] border-b border-[#E5E7EB] text-[#74777f] font-bold h-12">
                    <th className="py-3.5 px-4">المتجر والشعار</th>
                    <th className="py-3.5 px-4">المالك / المفوض</th>
                    <th className="py-3.5 px-4">التصنيف والمنتجات</th>
                    <th className="py-3.5 px-4">نموذج التوصيل والرسوم</th>
                    <th className="py-3.5 px-4">تاريخ التقديم والمهلة</th>
                    <th className="py-3.5 px-4 text-center">حالة الطلب والتوثيق</th>
                    <th className="py-3.5 px-4 text-center">الإجراءات والقرار</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-amber-50/40 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${app.iconBg} text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0`}
                          >
                            <span className="material-symbols-outlined text-[22px]">{app.icon}</span>
                          </div>
                          <div>
                            <div className="font-bold text-[#12302B] flex items-center gap-1.5 text-xs sm:text-sm">
                              <span>{app.name}</span>
                              {app.status === 'pending' && (
                                <span className="w-2 h-2 rounded-full bg-[#E9B44C]"></span>
                              )}
                            </div>
                            <span className="text-[#74777f] text-[11px]">{app.location}</span>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        <div className="font-bold text-[#12302B]">{app.owner}</div>
                        <span className="text-[#74777f] text-xs font-mono" dir="ltr">
                          {app.phone}
                        </span>
                      </td>

                      <td className="py-4 px-4">
                        <div className="font-medium text-[#12302B]">{app.category}</div>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-[#1F7A6E]/10 text-[#1F7A6E] font-bold">
                          {app.categoryTag}
                        </span>
                      </td>

                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1 font-medium text-[#12302B]">
                          <span className="material-symbols-outlined text-[16px] text-[#1F7A6E]">
                            {app.deliveryType === 'مندوب خاص' ? 'person_pin' : 'local_shipping'}
                          </span>
                          <span>{app.deliveryType}</span>
                        </div>
                        <span className="font-bold text-[#835400] text-xs">{app.deliveryFee}</span>
                      </td>

                      <td className="py-4 px-4">
                        <div className="text-[#12302B] font-bold">{app.timeText}</div>
                        <div className="flex items-center gap-1 text-amber-700 text-xs font-bold mt-0.5">
                          <span className="material-symbols-outlined text-[14px]">alarm</span>
                          <span>{app.slaUrgent}</span>
                        </div>
                      </td>

                      <td className="py-4 px-4 text-center">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${app.statusClass}`}
                        >
                          {app.status === 'pending' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E9B44C] animate-pulse"></span>
                          )}
                          <span>{app.statusLabel}</span>
                        </span>
                      </td>

                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <Link
                            to={`/admin/applications/${app.id}`}
                            className="px-3 py-1.5 bg-[#1F7A6E] hover:bg-[#165c53] text-white rounded-lg text-xs font-bold shadow-xs transition-all"
                            title="مراجعة واعتماد"
                          >
                            فحص الطلب
                          </Link>
                          <button
                            onClick={() => navigate(`/admin/applications/${app.id}`)}
                            className="p-1.5 text-[#74777f] hover:text-[#12302B] hover:bg-gray-100 rounded-lg cursor-pointer"
                            title="التفاصيل الكاملة"
                          >
                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Pagination Footer */}
            <div className="p-4 border-t border-[#E5E7EB] bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#43474e]">
              <div className="flex items-center gap-2">
                <span>إظهار</span>
                <select className="h-8 px-2 bg-white border border-[#E5E7EB] rounded-lg text-xs font-bold text-[#12302B] outline-none">
                  <option>7 من أصل 39 متجر</option>
                  <option>15 متجر</option>
                  <option>30 متجر</option>
                </select>
                <span className="text-[#74777f]">تم التحقق من 28 متجراً بنجاح في قطاع غزة</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  className="w-8 h-8 rounded-lg border border-[#E5E7EB] bg-white flex items-center justify-center text-[#74777f] hover:text-[#12302B] disabled:opacity-40"
                  disabled
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
                <button className="w-8 h-8 rounded-lg bg-[#12302B] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  1
                </button>
                <button className="w-8 h-8 rounded-lg border border-[#E5E7EB] bg-white text-[#12302B] font-bold text-xs flex items-center justify-center hover:bg-gray-100">
                  2
                </button>
                <button className="w-8 h-8 rounded-lg border border-[#E5E7EB] bg-white text-[#12302B] font-bold text-xs flex items-center justify-center hover:bg-gray-100">
                  3
                </button>
                <button className="w-8 h-8 rounded-lg border border-[#E5E7EB] bg-white flex items-center justify-center text-[#74777f] hover:text-[#12302B]">
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
              </div>
            </div>
          </div>

          {/* ================= COMPLIANCE & VERIFICATION AUDIT NOTICE (BENTO FOOTER) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-[#E5E7EB] shadow-xs flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1F7A6E]/10 text-[#1F7A6E] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">policy</span>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#12302B]">سياسة قبول المتاجر - منصة تبادل</h4>
                <p className="text-xs text-[#43474e] mt-1 leading-relaxed">
                  يقتصر القبول حالياً على قطاع الأزياء النسائية والرجالية، الأحذية، والمطرزات التراثية المحلية للحفاظ على هوية المنصة وجودة الخدمة.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#E5E7EB] shadow-xs flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E9B44C]/15 text-[#835400] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">local_shipping</span>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#12302B]">اتفاقية الشحن والتوصيل المحلي</h4>
                <p className="text-xs text-[#43474e] mt-1 leading-relaxed">
                  تحديد سقف التوصيل في محافظات غزة بين 10 إلى 15 شيكل كحد أقصى مع توفير خاصية تتبع الطلب واستبدال المقاس خلال 48 ساعة.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#12302B] to-[#1F7A6E] text-white p-4 rounded-2xl border border-white/10 shadow-xs flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E9B44C] text-[#12302B] flex items-center justify-center shrink-0 font-bold">
                <span className="material-symbols-outlined text-2xl">stars</span>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">حافز انضمام الشركاء الجدد</h4>
                <p className="text-xs text-[#F6F3EC]/80 mt-1 leading-relaxed">
                  يحصل كل متجر معتمد على رصيد 500 نقطة ترويجية مجانية ضمن محفظة تبادل لدعم أول 50 عملية شراء للزبائن عبر التطبيق.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
