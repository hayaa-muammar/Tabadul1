import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminComplaintsPage() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Status Tab
  const [activeTab, setActiveTab] = useState('in_progress'); // 'new' | 'in_progress' | 'resolved'
  const [searchQuery, setSearchQuery] = useState('');
  const [sourceFilter, setSourceFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [merchantFilter, setMerchantFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  // Complaints List
  const [complaints, setComplaints] = useState([
    {
      id: 'DS-3029',
      source: 'عميل',
      sourceIcon: 'person',
      sourceColor: 'bg-[#1f7a6e]/10 text-[#1f7a6e] border-[#1f7a6e]/20',
      title: 'تلف في قماش الفستان الحريري',
      summary: 'تمزق في الخياطة الجانبية للفستان قبل الارتداء، والمقاس المستلم M بدلاً من L',
      orderId: 'ORD-10495',
      orderAmount: 340,
      merchantName: 'بوتيك لمسة فاشون',
      merchantLocation: 'حي الرمال، شارع عمر المختار',
      customerName: 'سارة محمود أبو العوف',
      customerPhone: '+970 59-941-2830',
      age: 'منذ 52 ساعة',
      isOverdue: true,
      priority: 'حرجة جداً',
      priorityColor: 'bg-red-100 text-red-800 border-red-200',
      slaStatus: 'تجاوزت مهلة 48 ساعة (تصعيد إداري)',
      tabStatus: 'in_progress',
    },
    {
      id: 'DS-3028',
      source: 'عميل',
      sourceIcon: 'person',
      sourceColor: 'bg-[#1f7a6e]/10 text-[#1f7a6e] border-[#1f7a6e]/20',
      title: 'عدم تطابق المقاس المستلم',
      summary: 'حذاء كلاسيكي مقاس 41 بدلاً من 43 المذكور بالفاتورة',
      orderId: 'ORD-10488',
      orderAmount: 220,
      merchantName: 'أحذية النصر كلاسيك',
      merchantLocation: 'غزة - شارع عمر المختار',
      customerName: 'خالد عمر الشرفا',
      customerPhone: '+970 59-982-1402',
      age: 'منذ 50 ساعة',
      isOverdue: true,
      priority: 'حرجة جداً',
      priorityColor: 'bg-red-100 text-red-800 border-red-200',
      slaStatus: 'تجاوزت مهلة 48 ساعة (تصعيد إداري)',
      tabStatus: 'in_progress',
    },
    {
      id: 'DS-3025',
      source: 'تاجر',
      sourceIcon: 'storefront',
      sourceColor: 'bg-amber-100 text-amber-900 border-amber-300',
      title: 'رفض استلام الطرد بعد فتحه',
      summary: 'الزبون فتح الغلاف وقاس الفستان ثم رفض الاستلام دون مبرر مقنع',
      orderId: 'ORD-10470',
      orderAmount: 410,
      merchantName: 'دار الأناقة للأزياء',
      merchantLocation: 'غزة - شارع النصر',
      customerName: 'أمل العشي',
      customerPhone: '+970 59-911-3344',
      age: 'منذ 22 ساعة',
      isOverdue: false,
      priority: 'متوسطة',
      priorityColor: 'bg-blue-100 text-blue-800 border-blue-200',
      slaStatus: 'متبقي 26 ساعة على المهلة',
      tabStatus: 'in_progress',
    },
    {
      id: 'DS-3033',
      source: 'عميل',
      sourceIcon: 'person',
      sourceColor: 'bg-[#1f7a6e]/10 text-[#1f7a6e] border-[#1f7a6e]/20',
      title: 'تأخر التوصيل لأكثر من 4 أيام',
      summary: 'الطلب لم يصل حتى الآن رغم سحب المبلغ من المحفظة',
      orderId: 'ORD-10521',
      orderAmount: 185,
      merchantName: 'سنيكرز بالاس',
      merchantLocation: 'خانيونس - البلد',
      customerName: 'تسنيم مرتجى',
      customerPhone: '+970 59-940-1928',
      age: 'منذ 3 ساعات',
      isOverdue: false,
      priority: 'عالية',
      priorityColor: 'bg-amber-100 text-amber-800 border-amber-200',
      slaStatus: 'جديدة بانتظار التواصل الأولي',
      tabStatus: 'new',
    },
    {
      id: 'DS-3010',
      source: 'عميل',
      sourceIcon: 'person',
      sourceColor: 'bg-[#1f7a6e]/10 text-[#1f7a6e] border-[#1f7a6e]/20',
      title: 'استبدال فستان سهرة',
      summary: 'تم تبديل المقاس بالتراضي وتسليم القطعة الجديدة',
      orderId: 'ORD-10382',
      orderAmount: 290,
      merchantName: 'بوتيك لمسة فاشون',
      merchantLocation: 'غزة - الرمال',
      customerName: 'رغد حامد',
      customerPhone: '+970 59-923-8811',
      age: 'منذ 6 أيام',
      isOverdue: false,
      priority: 'عادية',
      priorityColor: 'bg-gray-100 text-gray-800 border-gray-200',
      slaStatus: 'محسومة ومغلقة',
      tabStatus: 'resolved',
    },
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  // Filter complaints
  const filteredComplaints = complaints.filter((c) => {
    if (activeTab === 'new' && c.tabStatus !== 'new') return false;
    if (activeTab === 'in_progress' && c.tabStatus !== 'in_progress') return false;
    if (activeTab === 'resolved' && c.tabStatus !== 'resolved') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        c.id.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.merchantName.toLowerCase().includes(q) ||
        c.customerName.toLowerCase().includes(q) ||
        c.orderId.toLowerCase().includes(q);
      if (!match) return false;
    }

    if (sourceFilter !== 'all') {
      if (sourceFilter === 'customer' && c.source !== 'عميل') return false;
      if (sourceFilter === 'merchant' && c.source !== 'تاجر') return false;
    }

    if (merchantFilter !== 'all' && !c.merchantName.includes(merchantFilter)) return false;
    if (priorityFilter !== 'all' && !c.priority.includes(priorityFilter)) return false;

    return true;
  });

  const handleExportCsv = () => {
    const headers = 'رقم الشكوى,المصدر,العنوان,رقم الطلب,القيمة,المتجر,العميل,العمر,الأولوية,الحالة\n';
    const rows = filteredComplaints
      .map(
        (c) =>
          `"${c.id}","${c.source}","${c.title}","${c.orderId}",${c.orderAmount},"${c.merchantName}","${c.customerName}","${c.age}","${c.priority}","${c.slaStatus}"`
      )
      .join('\n');
    const blob = new Blob(['\uFEFF' + headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tabadul_complaints_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('تم تصدير كشف الشكاوى بصيغة CSV بنجاح!');
  };

  return (
    <div className="bg-[#f6f3ec] text-[#191c22] min-h-screen flex antialiased select-none font-tajawal">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#12302b] text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-[#e9b44c] flex items-center gap-3 animate-bounce">
          <span className="material-symbols-outlined text-[#e9b44c] text-xl">check_circle</span>
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-white/60 hover:text-white mr-2">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

      {/* Sovereign Sidebar Navigation */}
      <AdminSidebar activeItem="complaints" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      {/* Main Workspace */}
      <main className="flex-1 lg:mr-64 flex flex-col min-w-0 pb-16">
        {/* Sticky Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 lg:px-8 py-3.5 border-b border-[#e6e2d8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-2 text-xs bg-[#faf8f4] border border-[#ded9cd] rounded-xl text-gray-800 placeholder:text-gray-400 focus:bg-white focus:border-[#12302b] outline-none transition-all shadow-sm"
                placeholder="ابحث برقم الشكوى (#DS)، المتجر أو العميل..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleExportCsv}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-[#ded9cd] hover:border-[#12302b] text-[#12302b] rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-base text-[#1f7a6e]">file_download</span>
              <span>تصدير CSV</span>
            </button>
            <Link
              to="/admin/audit-log"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#12302b] hover:bg-[#183d37] text-white rounded-xl text-xs font-bold shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base text-[#e9b44c]">history_edu</span>
              <span>سجل التدقيق A-18</span>
            </Link>
          </div>
        </header>

        {/* Canvas Body */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1440px] mx-auto w-full">
          {/* Breadcrumbs & Title */}
          <div>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <Link to="/admin/dashboard" className="hover:text-[#12302b]">الإدارة العامة</Link>
              <span className="material-symbols-outlined text-xs">chevron_left</span>
              <span className="text-gray-400">العمليات والمتابعة</span>
              <span className="material-symbols-outlined text-xs">chevron_left</span>
              <span className="text-[#12302b] font-bold">مركز الشكاوى وفض النزاعات (A-12)</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-xl sm:text-2xl font-bold text-[#12302b] tracking-tight">
                قائمة الشكاوى وفض النزاعات
              </h1>
              <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-[#1f7a6e]/10 text-[#1f7a6e] border border-[#1f7a6e]/20 inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">verified</span>
                <span>منظومة قطاع غزة للضمان</span>
              </span>
            </div>
          </div>

          {/* 4 SUMMARY KPI CARDS */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-5 border border-[#e6e2d8] shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 font-semibold">جديدة بانتظار المراجعة</span>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">inbox</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#12302b]">6</span>
                <span className="text-xs text-gray-500">شكاوى واردة حديثاً</span>
              </div>
              <div className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg w-fit">
                استجابة مطلوبة خلال 4 ساعات
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-5 border border-[#e6e2d8] shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 font-semibold">شكاوى قيد التحكيم</span>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">hourglass_top</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#12302b]">8</span>
                <span className="text-xs text-gray-500">جلسة تحكيم نشطة</span>
              </div>
              <div className="text-[11px] font-semibold text-[#835400] bg-amber-50 px-2.5 py-1 rounded-lg w-fit">
                بانتظار رد التاجر أو العميل
              </div>
            </div>

            {/* Card 3: Alert Overdue 48h */}
            <div className="bg-gradient-to-br from-[#fff7f5] via-[#fff4f2] to-[#ffeded] rounded-2xl p-5 border-2 border-red-300 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                  <span className="text-xs text-red-900 font-bold">تجاوزت المهلة (48 ساعة)</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-xl">warning</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-red-700">3</span>
                <span className="text-xs text-red-800 font-bold">حالات تستوجب التدخل العاجل</span>
              </div>
              <div className="text-[11px] text-red-900 bg-red-100 font-bold px-2.5 py-1 rounded-lg w-fit border border-red-200">
                تم التصعيد للمشرف العام تلقائياً
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-5 border border-[#e6e2d8] shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 font-semibold">متوسط زمن فض الشكاوى</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">speed</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#1f7a6e]">18.4</span>
                <span className="text-xs text-gray-500">ساعة / تسوية نهائية</span>
              </div>
              <div className="text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg w-fit font-semibold">
                أسرع بـ 4.2 ساعة عن الشهر السابق
              </div>
            </div>
          </section>

          {/* MAIN STATUS TABS & TOOLBAR */}
          <section className="bg-white rounded-2xl border border-[#e6e2d8] shadow-sm overflow-hidden">
            {/* Primary Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 pt-4 border-b border-[#e6e2d8] bg-[#fdfcf9] gap-3">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setActiveTab('new')}
                  className={`relative pb-3.5 text-xs font-semibold flex items-center gap-2 transition-colors ${
                    activeTab === 'new'
                      ? 'font-bold text-[#12302b] border-b-2 border-[#12302b]'
                      : 'text-gray-500 hover:text-[#12302b]'
                  }`}
                >
                  <span>جديدة بانتظار الفرز</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold">1</span>
                </button>

                <button
                  onClick={() => setActiveTab('in_progress')}
                  className={`relative pb-3.5 text-xs font-bold flex items-center gap-2 transition-colors ${
                    activeTab === 'in_progress'
                      ? 'text-[#12302b] border-b-2 border-[#12302b]'
                      : 'text-gray-500 hover:text-[#12302b]'
                  }`}
                >
                  <span>قيد المعالجة والتحكيم</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#12302b] text-white text-[11px] font-bold">3</span>
                  {activeTab === 'in_progress' && (
                    <div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-[#e9b44c]"></div>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('resolved')}
                  className={`relative pb-3.5 text-xs font-semibold flex items-center gap-2 transition-colors ${
                    activeTab === 'resolved'
                      ? 'font-bold text-[#12302b] border-b-2 border-[#12302b]'
                      : 'text-gray-500 hover:text-[#12302b]'
                  }`}
                >
                  <span>محسومة ومغلقة</span>
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-[11px] font-bold">1</span>
                </button>
              </div>

              <div className="pb-3 text-xs text-gray-500 flex items-center gap-1.5 font-medium bg-[#f6f3ec] px-3 py-1 rounded-lg border border-[#ded9cd] w-fit">
                <span className="material-symbols-outlined text-sm text-[#1f7a6e]">policy</span>
                <span>نظام حماية نقاط الولاء وضمان استرجاع الأزياء بغزة</span>
              </div>
            </div>

            {/* Filters Toolbar */}
            <div className="p-4 bg-white flex flex-wrap items-center justify-between gap-3 border-b border-gray-100">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                {/* Source Filter */}
                <div className="flex items-center gap-1.5 bg-[#faf8f4] px-3 py-1.5 rounded-xl border border-[#ded9cd]">
                  <span className="text-gray-500">المصدر:</span>
                  <select
                    value={sourceFilter}
                    onChange={(e) => setSourceFilter(e.target.value)}
                    className="bg-transparent border-0 p-0 text-xs font-bold text-[#12302b] outline-none cursor-pointer"
                  >
                    <option value="all">الكل (عملاء وتجار)</option>
                    <option value="customer">شكوى عميل فقط</option>
                    <option value="merchant">بلاغ تاجر فقط</option>
                  </select>
                </div>

                {/* Merchant Filter */}
                <div className="flex items-center gap-1.5 bg-[#faf8f4] px-3 py-1.5 rounded-xl border border-[#ded9cd]">
                  <span className="text-gray-500">المتجر:</span>
                  <select
                    value={merchantFilter}
                    onChange={(e) => setMerchantFilter(e.target.value)}
                    className="bg-transparent border-0 p-0 text-xs font-bold text-[#12302b] outline-none cursor-pointer"
                  >
                    <option value="all">كافة المتاجر</option>
                    <option value="لمسة">بوتيك لمسة فاشون</option>
                    <option value="النصر">أحذية النصر كلاسيك</option>
                    <option value="الأناقة">دار الأناقة للأزياء</option>
                    <option value="سنيكرز">سنيكرز بالاس</option>
                  </select>
                </div>

                {/* Priority Filter */}
                <div className="flex items-center gap-1.5 bg-[#faf8f4] px-3 py-1.5 rounded-xl border border-[#ded9cd]">
                  <span className="text-gray-500">الأولوية:</span>
                  <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="bg-transparent border-0 p-0 text-xs font-bold text-[#12302b] outline-none cursor-pointer"
                  >
                    <option value="all">جميع الأولويات</option>
                    <option value="حرجة">حرجة جداً (تجاوزت 48 ساعة)</option>
                    <option value="عالية">عالية</option>
                    <option value="متوسطة">متوسطة</option>
                    <option value="عادية">عادية</option>
                  </select>
                </div>

                <button
                  onClick={() => {
                    setSourceFilter('all');
                    setMerchantFilter('all');
                    setPriorityFilter('all');
                    setSearchQuery('');
                  }}
                  className="p-1.5 text-gray-400 hover:text-[#12302b] hover:bg-gray-100 rounded-lg transition-colors"
                  title="إعادة ضبط الفلاتر"
                >
                  <span className="material-symbols-outlined text-base">refresh</span>
                </button>
              </div>

              <div className="text-xs text-gray-500">
                النتائج: <strong className="text-[#12302b] font-bold">{filteredComplaints.length} شكاوى</strong>
              </div>
            </div>

            {/* Dense Complaints Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse text-xs">
                <thead>
                  <tr className="bg-[#faf8f4] text-gray-600 font-bold border-b border-[#e6e2d8] whitespace-nowrap">
                    <th className="py-3 px-4">الرقم المرجعي</th>
                    <th className="py-3 px-3">المصدر</th>
                    <th className="py-3 px-3">نوع النزاع والمضمون</th>
                    <th className="py-3 px-3">رقم الطلب</th>
                    <th className="py-3 px-4">المتجر المشكو بحقه</th>
                    <th className="py-3 px-4">الطرف الآخر (العميل)</th>
                    <th className="py-3 px-3">عمر النزاع</th>
                    <th className="py-3 px-3">الأولوية</th>
                    <th className="py-3 px-4">حالة المهلة (SLA)</th>
                    <th className="py-3 px-4 text-center">الإجراء والتحكيم</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ece8df]">
                  {filteredComplaints.map((c) => (
                    <tr
                      key={c.id}
                      className={`hover:bg-gray-50/80 transition-colors ${
                        c.isOverdue ? 'bg-red-50/50 border-r-4 border-r-red-600' : ''
                      }`}
                    >
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {c.isOverdue && (
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" title="تصعيد إداري فوري"></span>
                          )}
                          <span className={`font-bold font-mono text-sm tracking-wide ${c.isOverdue ? 'text-red-900' : 'text-[#12302b]'}`}>
                            #{c.id}
                          </span>
                        </div>
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${c.sourceColor}`}>
                          <span className="material-symbols-outlined text-[13px]">{c.sourceIcon}</span>
                          <span>{c.source}</span>
                        </span>
                      </td>

                      <td className="py-3.5 px-3 max-w-[210px]">
                        <div className="font-bold text-[#12302b] truncate" title={c.title}>
                          {c.title}
                        </div>
                        <div className="text-[11px] text-gray-500 truncate" title={c.summary}>
                          {c.summary}
                        </div>
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <div className="font-bold text-[#1f7a6e] font-mono">#{c.orderId}</div>
                        <span className="text-[10px] text-gray-500 font-medium">قيمة: {c.orderAmount} ₪</span>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="font-bold text-[#12302b]">{c.merchantName}</div>
                        <div className="text-[11px] text-gray-400">{c.merchantLocation}</div>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="font-bold text-[#12302b]">{c.customerName}</div>
                        <div className="text-[11px] text-gray-400 font-mono dir-ltr text-right">{c.customerPhone}</div>
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${c.isOverdue ? 'text-red-700 bg-red-100' : 'text-gray-700 bg-gray-100'}`}>
                          {c.age}
                        </span>
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${c.priorityColor}`}>
                          {c.priority}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold text-[11px] ${c.isOverdue ? 'bg-red-100 text-red-900 border border-red-300' : 'bg-gray-100 text-gray-700'}`}>
                          <span className={`material-symbols-outlined text-sm ${c.isOverdue ? 'text-red-700' : 'text-gray-500'}`}>
                            {c.isOverdue ? 'alarm' : 'timer'}
                          </span>
                          <span>{c.slaStatus}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <Link
                          to={`/admin/complaints/${c.id}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#12302b] hover:bg-[#183d37] text-white rounded-xl font-bold text-xs shadow-sm transition-all group"
                        >
                          <span>فتح ملف الشكوى A-13</span>
                          <span className="material-symbols-outlined text-sm text-[#e9b44c] group-hover:-translate-x-0.5 transition-transform">
                            arrow_back
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
