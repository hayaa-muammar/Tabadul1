import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminReportsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('30d'); // 7d | 30d | 90d | custom

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  // 10 KPIs
  const kpis = [
    { id: 1, title: 'تجار جدد', value: '12 تاجر', change: '+18% عن الشهر السابق', isPositive: true, icon: 'person_add' },
    { id: 2, title: 'تجار نشطون', value: '48 متجر', change: '92% نسبة النشاط الفعلي', isPositive: true, icon: 'storefront' },
    { id: 3, title: 'إجمالي الطلبات', value: '2,450 طلب', change: '+24% نمو العمليات', isPositive: true, icon: 'receipt_long' },
    { id: 4, title: 'نسبة التسليم برمز PIN', value: '96.4%', change: 'التزام أمني مرتفع', isPositive: true, icon: 'verified_user' },
    { id: 5, title: 'إجمالي المبيعات', value: '184,200 ₪', change: '+32% عن المستهدف', isPositive: true, icon: 'payments' },
    { id: 6, title: 'نقاط كاش باك مكتسبة', value: '9,210 ₪', change: '184,200 نقطة ولاء', isPositive: true, icon: 'toll' },
    { id: 7, title: 'نقاط مستبدلة', value: '6,850 ₪', change: '137,000 نقطة مصروفة', isPositive: true, icon: 'shopping_bag' },
    { id: 8, title: 'عمولة المنصة المحققة', value: '5,526 ₪', change: 'صافي إيراد الوساطة 3%', isPositive: true, icon: 'account_balance' },
    { id: 9, title: 'نسبة حسم الشكاوى', value: '94.2%', change: 'خلال أقل من 24 ساعة', isPositive: true, icon: 'support_agent' },
    { id: 10, title: 'متوسط قيمة الطلب AOV', value: '75.2 ₪', change: '+6.5 ₪ لكل معاملة', isPositive: true, icon: 'analytics' },
  ];

  // Top 10 Partner Stores
  const topStores = [
    { rank: 1, id: 'TBD-STR-0482', name: 'بوتيك لمسة فاشون', location: 'غزة - الرمال', orders: 342, volume: '25,650 ₪', points: '128,250 نقطة', compliance: 98.2 },
    { rank: 2, id: 'TBD-STR-0519', name: 'دار الأناقة للأزياء', location: 'غزة - النصر', orders: 289, volume: '21,675 ₪', points: '108,375 نقطة', compliance: 97.5 },
    { rank: 3, id: 'TBD-STR-0610', name: 'أحذية النصر كلاسيك', location: 'غزة - عمر المختار', orders: 260, volume: '19,500 ₪', points: '97,500 نقطة', compliance: 96.0 },
    { rank: 4, id: 'TBD-STR-0804', name: 'ريماس للملابس التركية', location: 'خانيونس - جلال', orders: 215, volume: '16,125 ₪', points: '80,625 نقطة', compliance: 95.8 },
    { rank: 5, id: 'TBD-STR-0731', name: 'رويال كيدز للأطفال', location: 'غزة - الرمال', orders: 198, volume: '14,850 ₪', points: '74,250 نقطة', compliance: 94.5 },
    { rank: 6, id: 'TBD-STR-0912', name: 'مجوهرات وأناقة الرمال', location: 'غزة - الرمال', orders: 175, volume: '13,125 ₪', points: '65,625 نقطة', compliance: 99.0 },
    { rank: 7, id: 'TBD-STR-0881', name: 'سنيكرز فوتوير', location: 'خانيونس - البلد', orders: 160, volume: '12,000 ₪', points: '60,000 نقطة', compliance: 91.0 },
    { rank: 8, id: 'TBD-STR-0677', name: 'فاشون كيدز وورلد', location: 'غزة - النصر', orders: 142, volume: '10,650 ₪', points: '53,250 نقطة', compliance: 93.4 },
    { rank: 9, id: 'TBD-STR-0544', name: 'حكايات صبايا للأزياء', location: 'دير البلح', orders: 130, volume: '9,750 ₪', points: '48,750 نقطة', compliance: 95.0 },
    { rank: 10, id: 'TBD-STR-0602', name: 'صبايا ستايل غزة', location: 'غزة - الرمال', orders: 118, volume: '8,850 ₪', points: '44,250 نقطة', compliance: 96.8 },
  ];

  // CSV Export
  const handleExportCsv = () => {
    const headers = 'الترتيب,معرف المتجر,الاسم,الموقع,عدد الطلبات,إجمالي المبيعات,النقاط الممنوحة,نسبة الامتثال PIN\n';
    const rows = topStores
      .map(
        (s) =>
          `${s.rank},"${s.id}","${s.name}","${s.location}",${s.orders},"${s.volume}","${s.points}","${s.compliance}%"`
      )
      .join('\n');
    const blob = new Blob(['\uFEFF' + headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tabadul_reports_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('تم تصدير التقرير التحليلي بصيغة CSV بنجاح!');
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
      <AdminSidebar activeItem="reports" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      {/* Main Workspace */}
      <main className="flex-1 lg:mr-64 flex flex-col min-w-0 pb-16">
        {/* Sticky Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 lg:px-8 py-3.5 border-b border-[#e6e2d8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div>
              <nav className="flex items-center gap-2 text-xs text-gray-500 mb-0.5">
                <Link to="/admin/dashboard" className="hover:text-[#12302b]">الإدارة العامة</Link>
                <span className="material-symbols-outlined text-xs">chevron_left</span>
                <span className="text-[#1f7a6e] font-bold">التقارير ومؤشرات الأداء (A-15)</span>
              </nav>
              <h1 className="text-base sm:text-lg font-bold text-[#12302b]">
                تقارير الأداء والمؤشرات التشغيلية والمالية
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Period Pills */}
            <div className="bg-[#f6f3ec] p-1 rounded-xl border border-gray-200 flex items-center text-xs font-semibold">
              <button
                onClick={() => setSelectedPeriod('7d')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedPeriod === '7d' ? 'bg-[#1f7a6e] text-white font-bold' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                7 أيام
              </button>
              <button
                onClick={() => setSelectedPeriod('30d')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedPeriod === '30d' ? 'bg-[#1f7a6e] text-white font-bold' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                30 يوماً
              </button>
              <button
                onClick={() => setSelectedPeriod('90d')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedPeriod === '90d' ? 'bg-[#1f7a6e] text-white font-bold' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                90 يوماً
              </button>
            </div>

            {/* Date Range Display */}
            <div className="hidden md:flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-bold text-[#12302b]">
              <span className="material-symbols-outlined text-sm text-[#1f7a6e]">calendar_month</span>
              <span>1 أكتوبر 2026 - 31 أكتوبر 2026</span>
            </div>

            {/* CSV Export */}
            <button
              onClick={handleExportCsv}
              className="flex items-center gap-1.5 bg-[#12302b] hover:bg-[#1f7a6e] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base text-[#e9b44c]">download</span>
              <span>تصدير CSV</span>
            </button>

            {/* Print */}
            <button
              onClick={() => window.print()}
              className="p-1.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-gray-700"
              title="طباعة التقرير"
            >
              <span className="material-symbols-outlined text-base">print</span>
            </button>
          </div>
        </header>

        {/* Canvas Body */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-[1440px] mx-auto w-full">
          {/* SECTION 1: 10 DIRECT KPI CARDS */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1f7a6e]"></div>
                <h2 className="text-base font-bold text-[#12302b]">المؤشرات الرئيسية المباشرة</h2>
              </div>
              <span className="text-xs text-gray-400">
                تم التحديث تلقائياً وفق تدفق سندات التسليم PIN المقفلة
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {kpis.map((kpi) => (
                <div
                  key={kpi.id}
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-[#1f7a6e]/50 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-xs font-medium text-gray-600">{kpi.title}</span>
                    <span className="material-symbols-outlined text-lg text-[#1f7a6e]">{kpi.icon}</span>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#12302b] font-mono mb-1">
                      {kpi.value}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                      <span className="material-symbols-outlined text-xs">trending_up</span>
                      <span>{kpi.change}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: CHARTS & BREAKDOWNS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sales vs Points Area Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-bold text-[#12302b] text-sm">
                    تطور المبيعات الشهرية مقابل نقاط الولاء المكتسبة
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    مقارنة حجم التداول الميداني ونقاط الكاش باك المنفذة عبر قطاع غزة
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold">
                  <span className="flex items-center gap-1 text-[#12302b]">
                    <span className="w-3 h-3 rounded-full bg-[#12302b]"></span>
                    المبيعات (₪)
                  </span>
                  <span className="flex items-center gap-1 text-[#e9b44c]">
                    <span className="w-3 h-3 rounded-full bg-[#e9b44c]"></span>
                    النقاط (كاش باك)
                  </span>
                </div>
              </div>

              {/* Responsive SVG Chart */}
              <div className="w-full h-56 pt-2">
                <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="600" y2="40" stroke="#f1ede4" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="0" y1="90" x2="600" y2="90" stroke="#f1ede4" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="0" y1="140" x2="600" y2="140" stroke="#f1ede4" strokeWidth="1" strokeDasharray="3,3" />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#12302b" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#12302b" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="pointsGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e9b44c" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#e9b44c" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Sales Area */}
                  <path
                    d="M0,160 Q100,120 200,100 T400,60 T600,30 L600,200 L0,200 Z"
                    fill="url(#salesGrad)"
                  />
                  <path
                    d="M0,160 Q100,120 200,100 T400,60 T600,30"
                    fill="none"
                    stroke="#12302b"
                    strokeWidth="3"
                  />

                  {/* Points Area */}
                  <path
                    d="M0,180 Q100,150 200,130 T400,100 T600,75 L600,200 L0,200 Z"
                    fill="url(#pointsGrad)"
                  />
                  <path
                    d="M0,180 Q100,150 200,130 T400,100 T600,75"
                    fill="none"
                    stroke="#e9b44c"
                    strokeWidth="2.5"
                  />

                  {/* Highlighting Points */}
                  <circle cx="200" cy="100" r="4" fill="#12302b" />
                  <circle cx="400" cy="60" r="4" fill="#12302b" />
                  <circle cx="600" cy="30" r="5" fill="#12302b" stroke="#e9b44c" strokeWidth="2" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-gray-100">
                <span>الأسبوع 1 (1 - 7 أكتوبر)</span>
                <span>الأسبوع 2 (8 - 14 أكتوبر)</span>
                <span>الأسبوع 3 (15 - 21 أكتوبر)</span>
                <span>الأسبوع 4 (22 - 31 أكتوبر)</span>
              </div>
            </div>

            {/* Category Breakdown Progress */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-[#12302b] text-sm mb-1">توزيع مبيعات الفئات التجارية</h3>
                <p className="text-xs text-gray-400 mb-5">حصة كل قطاع من إجمالي مشتريات الأزياء</p>

                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex items-center justify-between mb-1 font-bold">
                      <span className="text-[#12302b]">فساتين وسهرة فاخرة</span>
                      <span className="font-mono text-[#1f7a6e]">42% (77,364 ₪)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#12302b] rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1 font-bold">
                      <span className="text-[#12302b]">أزياء رجالية وبدل</span>
                      <span className="font-mono text-[#1f7a6e]">26% (47,892 ₪)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#1f7a6e] rounded-full" style={{ width: '26%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1 font-bold">
                      <span className="text-[#12302b]">أحذية ومصنوعات جلدية</span>
                      <span className="font-mono text-[#1f7a6e]">20% (36,840 ₪)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#e9b44c] rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1 font-bold">
                      <span className="text-[#12302b]">أزياء وملابس أطفال</span>
                      <span className="font-mono text-[#1f7a6e]">12% (22,104 ₪)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: '12%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-4 text-[11px] text-gray-500">
                إجمالي المبيعات المحققة لجميع الفئات: <strong>184,200 ₪</strong>
              </div>
            </div>
          </div>

          {/* SECTION 3: TOP 10 PARTNER STORES TABLE */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-[#12302b] text-base">
                  أعلى 10 متاجر شريكة أداءً (Top 10 Stores)
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  تصنيف دوري يعتمد على حجم المبيعات ونسبة الالتزام برمز التسليم PIN
                </p>
              </div>
              <span className="px-3 py-1 bg-[#1f7a6e]/10 text-[#1f7a6e] rounded-full text-xs font-bold w-fit">
                دورة أكتوبر 2026
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse text-xs">
                <thead>
                  <tr className="bg-[#faf8f4] text-gray-600 font-bold border-b border-gray-200 whitespace-nowrap">
                    <th className="py-3 px-4 text-center">الترتيب</th>
                    <th className="py-3 px-3">المتجر الشريك</th>
                    <th className="py-3 px-3">الموقع</th>
                    <th className="py-3 px-3 text-center">الطلبات المسلمة</th>
                    <th className="py-3 px-3 text-center">إجمالي المبيعات</th>
                    <th className="py-3 px-3 text-center">النقاط الصادرة</th>
                    <th className="py-3 px-3 text-center">امتثال PIN</th>
                    <th className="py-3 px-4 text-center">الملف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {topStores.map((s) => (
                    <tr key={s.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <span
                          className={`w-6 h-6 rounded-full inline-flex items-center justify-center font-bold text-xs ${
                            s.rank === 1
                              ? 'bg-[#e9b44c] text-[#12302b]'
                              : s.rank === 2
                              ? 'bg-gray-200 text-gray-800'
                              : s.rank === 3
                              ? 'bg-amber-100 text-amber-800'
                              : 'text-gray-500'
                          }`}
                        >
                          {s.rank}
                        </span>
                      </td>

                      <td className="py-3 px-3 whitespace-nowrap">
                        <div className="font-bold text-[#12302b]">{s.name}</div>
                        <div className="text-[11px] text-gray-400 font-mono">#{s.id}</div>
                      </td>

                      <td className="py-3 px-3 whitespace-nowrap text-gray-600">
                        {s.location}
                      </td>

                      <td className="py-3 px-3 text-center whitespace-nowrap font-bold text-[#12302b]">
                        {s.orders} طلب
                      </td>

                      <td className="py-3 px-3 text-center whitespace-nowrap font-mono font-bold text-[#12302b]">
                        {s.volume}
                      </td>

                      <td className="py-3 px-3 text-center whitespace-nowrap font-mono text-[#835400] font-bold">
                        {s.points}
                      </td>

                      <td className="py-3 px-3 text-center whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-[11px]">
                          {s.compliance}%
                        </span>
                      </td>

                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <Link
                          to={`/admin/merchants/${s.id}`}
                          className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-[#12302b] hover:text-white text-gray-700 font-bold transition-colors inline-flex items-center gap-1 text-[11px]"
                        >
                          <span>عرض</span>
                          <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
