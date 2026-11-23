import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminTransfersPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Confirmation Modal & Execution State
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [payoutsExecuted, setPayoutsExecuted] = useState(false);

  // Transfer Rows Initial Data (8 Stores)
  const [transfers, setTransfers] = useState([
    {
      id: 'TR-901',
      storeName: 'بوتيك لمسة فاشون',
      storeCode: 'TBD-STR-0482',
      initials: 'لف',
      avatarBg: 'bg-[#12302b] text-[#e9b44c]',
      cycle: 'دورة يومية',
      ordersCount: 8,
      grossAmount: 1120.0,
      commission: -33.6,
      netAmount: 1086.4,
      accountNumber: '059-***1230',
      accountType: 'محفظة PalPay',
      status: 'ready',
      statusLabel: 'جاهز للصرف',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      id: 'TR-902',
      storeName: 'دار الأناقة للأزياء',
      storeCode: 'TBD-STR-0519',
      initials: 'دا',
      avatarBg: 'bg-teal-700 text-white',
      cycle: 'دورة يومية',
      ordersCount: 6,
      grossAmount: 940.0,
      commission: -28.2,
      netAmount: 911.8,
      accountNumber: '059-***4401',
      accountType: 'محفظة PalPay',
      status: 'ready',
      statusLabel: 'جاهز للصرف',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      id: 'TR-903',
      storeName: 'أحذية النصر كلاسيك',
      storeCode: 'TBD-STR-0610',
      initials: 'نك',
      avatarBg: 'bg-[#1f7a6e] text-white',
      cycle: 'دورة يومية',
      ordersCount: 4,
      grossAmount: 580.0,
      commission: -17.4,
      netAmount: 562.6,
      accountNumber: '059-***8892',
      accountType: 'محفظة PalPay',
      status: 'ready',
      statusLabel: 'جاهز للصرف',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      id: 'TR-904',
      storeName: 'رويال كيدز للأطفال',
      storeCode: 'TBD-STR-0731',
      initials: 'رك',
      avatarBg: 'bg-purple-700 text-white',
      cycle: 'دورة يومية',
      ordersCount: 3,
      grossAmount: 430.0,
      commission: -12.9,
      netAmount: 417.1,
      accountNumber: '056-***9011',
      accountType: 'محفظة Jawwal Pay',
      status: 'ready',
      statusLabel: 'جاهز للصرف',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      id: 'TR-905',
      storeName: 'ريماس للملابس التركية',
      storeCode: 'TBD-STR-0804',
      initials: 'رم',
      avatarBg: 'bg-amber-700 text-white',
      cycle: 'دورة يومية',
      ordersCount: 5,
      grossAmount: 670.0,
      commission: -20.1,
      netAmount: 649.9,
      accountNumber: '059-***3215',
      accountType: 'محفظة PalPay',
      status: 'ready',
      statusLabel: 'جاهز للصرف',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      id: 'TR-906',
      storeName: 'مجوهرات وأناقة الرمال',
      storeCode: 'TBD-STR-0912',
      initials: 'ما',
      avatarBg: 'bg-[#0d221e] text-[#e9b44c]',
      cycle: 'دورة يومية',
      ordersCount: 3,
      grossAmount: 510.0,
      commission: -15.3,
      netAmount: 494.7,
      accountNumber: '059-***7742',
      accountType: 'محفظة PalPay',
      status: 'ready',
      statusLabel: 'جاهز للصرف',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      id: 'TR-907',
      storeName: 'سنيكرز فوتوير',
      storeCode: 'TBD-STR-0881',
      initials: 'سف',
      avatarBg: 'bg-rose-100 text-rose-800 border border-rose-300',
      cycle: 'دورة يومية',
      ordersCount: 2,
      grossAmount: 190.0,
      commission: -5.7,
      netAmount: 184.3,
      accountNumber: '056-***1120',
      accountType: 'محفظة PalPay',
      status: 'failed',
      statusLabel: 'فشل التحويل (رقم الحساب)',
      statusColor: 'bg-rose-100 text-rose-800 border-rose-200',
      failReason: 'رقم المحفظة غير مطابق للسجل التجاري',
    },
    {
      id: 'TR-908',
      storeName: 'فاشون كيدز وورلد',
      storeCode: 'TBD-STR-0677',
      initials: 'فك',
      avatarBg: 'bg-amber-100 text-amber-800 border border-amber-300',
      cycle: 'دورة يومية',
      ordersCount: 1,
      grossAmount: 310.0,
      commission: -9.3,
      netAmount: 300.7,
      accountNumber: '059-***5519',
      accountType: 'محفظة PalPay',
      status: 'disputed',
      statusLabel: 'مستثنى: نزاع نشط (A-12)',
      statusColor: 'bg-amber-100 text-amber-900 border-amber-300',
      isFrozen: true,
    },
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  // Execution Handler
  const handleExecutePayout = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setIsConfirmationModalOpen(false);
      setPayoutsExecuted(true);
      setTransfers((prev) =>
        prev.map((t) =>
          t.status === 'ready'
            ? { ...t, status: 'completed', statusLabel: 'تم التحويل بنجاح', statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            : t
        )
      );
      showToast('تم تنفيذ حوالات المتاجر بنجاح عبر PalPay! تم قيد العملية في الدفتر المالي (A-09) وسجل التدقيق (A-18).');
    }, 1200);
  };

  // CSV Export
  const handleExportCsv = () => {
    const headers = 'معرف الحوالة,المتجر,كود المتجر,الدورة,عدد الطلبات,إجمالي المطالبات,العمولة,الصافي,رقم المحفظة,الحالة\n';
    const rows = transfers
      .map(
        (t) =>
          `"${t.id}","${t.storeName}","${t.storeCode}","${t.cycle}",${t.ordersCount},${t.grossAmount},${t.commission},${t.netAmount},"${t.accountNumber}","${t.statusLabel}"`
      )
      .join('\n');
    const blob = new Blob(['\uFEFF' + headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tabadul_transfers_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('تم تصدير كشف الحوالات المجدولة بصيغة CSV بنجاح!');
  };

  const filteredTransfers = transfers.filter((t) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        t.storeName.toLowerCase().includes(q) ||
        t.storeCode.toLowerCase().includes(q) ||
        t.accountNumber.includes(q) ||
        t.id.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (statusFilter !== 'all' && t.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="bg-[#f9f9ff] text-[#191c22] min-h-screen flex antialiased select-none font-tajawal">
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
      <AdminSidebar activeItem="transfers" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      {/* Main Content Workspace */}
      <main className="flex-1 lg:mr-64 flex flex-col min-w-0 pb-28">
        {/* Sticky Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 lg:px-8 py-3.5 border-b border-[#e1e2ea] flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full">
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                <span className="material-symbols-outlined text-xl">search</span>
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f2f3fc] border border-[#c4c6cf]/60 rounded-xl pr-10 pl-4 py-2 text-xs sm:text-sm font-medium focus:bg-white focus:border-[#1f7a6e] focus:ring-2 focus:ring-[#1f7a6e]/20 outline-none transition-all"
                placeholder="بحث برقم الحوالة، اسم المتجر، أو رقم المحفظة..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleExportCsv}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#c4c6cf] text-[#032448] hover:bg-gray-50 text-xs font-bold transition-colors"
            >
              <span className="material-symbols-outlined text-base text-[#1f7a6e]">file_download</span>
              <span>تصدير CSV</span>
            </button>

            <Link
              to="/admin/audit-log"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#12302b] text-white hover:bg-[#1a443d] text-xs font-bold shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base text-[#e9b44c]">verified_user</span>
              <span className="hidden sm:inline">سجل العمليات A-18</span>
            </Link>
          </div>
        </header>

        {/* Canvas Body */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1440px] mx-auto w-full">
          {/* Top Breadcrumb & Live Integration Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <nav className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <Link to="/admin/dashboard" className="hover:text-[#12302b]">الإدارة العامة</Link>
                <span className="material-symbols-outlined text-xs">chevron_left</span>
                <span className="text-gray-400">المالية والتسويات</span>
                <span className="material-symbols-outlined text-xs">chevron_left</span>
                <span className="text-[#032448] font-bold">جدول تنفيذ حوالات التجار (A-10)</span>
              </nav>
              <h1 className="text-xl sm:text-2xl font-bold text-[#032448] tracking-tight">
                التحويلات لتجار (جدولة وتنفيذ)
              </h1>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-full text-xs font-bold w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>اتصال بنكي مباشر (PalPay API) • نشط ولحظي</span>
            </div>
          </div>

          {/* 4 SUMMARY KPI CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-medium">مستحقة اليوم الجاهزة للصرف</p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#12302b]">4,120</span>
                    <span className="text-xs font-bold text-gray-400">₪</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#1f7a6e]/10 text-[#1f7a6e] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">payments</span>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px]">
                <span className="text-[#1f7a6e] font-bold">صافي معتمد لـ 6 متاجر</span>
                <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                  مكتمل التدقيق
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-medium">عدد المتاجر المستحقة</p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#191c22]">8</span>
                    <span className="text-xs font-medium text-gray-500">متاجر مجدولة</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">storefront</span>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px]">
                <span className="text-gray-500">جاهزة للدفع الفوري</span>
                <span className="text-[#12302b] font-bold">100% تطابق آلي</span>
              </div>
            </div>

            {/* Card 3: Disputed / Frozen */}
            <div className="bg-white rounded-2xl p-4 border border-amber-300 bg-amber-50/20 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-amber-900 font-bold">مستثناة ومجمدة بسبب نزاع نشط</p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-amber-800">310</span>
                    <span className="text-xs font-bold text-amber-900">₪</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">lock_clock</span>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-amber-200 flex items-center justify-between text-[11px]">
                <span className="text-amber-800 font-semibold">متجر واحد بانتظار قرار A-12</span>
                <Link to="/admin/disputes" className="text-[#1f7a6e] font-bold hover:underline flex items-center gap-0.5">
                  <span>فحص النزاع</span>
                  <span className="material-symbols-outlined text-xs">arrow_back</span>
                </Link>
              </div>
            </div>

            {/* Card 4: PalPay Escrow Balance */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-medium">رصيد محفظة PalPay للمنصة</p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#032448]">18,450</span>
                    <span className="text-xs font-bold text-gray-400">₪</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#032448] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">account_balance</span>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px]">
                <span className="text-gray-500">تغطية نقدية كافية</span>
                <span className="text-emerald-700 font-bold">تغطية 4.4 ضعف</span>
              </div>
            </div>
          </div>

          {/* TAB AND FILTER BAR */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-700">تصفية حسب الحالة:</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    statusFilter === 'all' ? 'bg-[#12302b] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  الكل (8)
                </button>
                <button
                  onClick={() => setStatusFilter('ready')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    statusFilter === 'ready' ? 'bg-emerald-700 text-white' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                  }`}
                >
                  جاهز للصرف (6)
                </button>
                <button
                  onClick={() => setStatusFilter('disputed')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    statusFilter === 'disputed' ? 'bg-amber-700 text-white' : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                  }`}
                >
                  مجمد لنزاع (1)
                </button>
                <button
                  onClick={() => setStatusFilter('failed')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    statusFilter === 'failed' ? 'bg-rose-700 text-white' : 'bg-rose-50 text-rose-800 hover:bg-rose-100'
                  }`}
                >
                  فشل التحويل (1)
                </button>
              </div>
            </div>

            <div className="text-xs text-gray-500">
              الدورة الحالية: <strong className="text-[#12302b]">الأربعاء، 28 أكتوبر 2026</strong>
            </div>
          </div>

          {/* TRANSFERS TABLE */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse text-xs">
                <thead>
                  <tr className="bg-[#f2f3fc] text-gray-600 font-bold border-b border-gray-200 whitespace-nowrap">
                    <th className="py-3 px-4">المتجر الشريك</th>
                    <th className="py-3 px-3">دورة الصرف</th>
                    <th className="py-3 px-3 text-center">الطلبات المسلمة</th>
                    <th className="py-3 px-3 text-center">إجمالي المطالبات</th>
                    <th className="py-3 px-3 text-center">العمولة (3%)</th>
                    <th className="py-3 px-3 text-center">الصافي المستحق</th>
                    <th className="py-3 px-3">رقم المحفظة / الحساب</th>
                    <th className="py-3 px-3 text-center">حالة الحوالة</th>
                    <th className="py-3 px-4 text-center">الإجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredTransfers.map((row) => (
                    <tr
                      key={row.id}
                      className={`hover:bg-gray-50/80 transition-colors ${
                        row.isFrozen
                          ? 'bg-amber-50/40 border-r-4 border-amber-400'
                          : row.status === 'failed'
                          ? 'bg-rose-50/40 border-r-4 border-rose-400'
                          : ''
                      }`}
                    >
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${row.avatarBg}`}>
                            {row.initials}
                          </div>
                          <div>
                            <div className="font-bold text-[#191c22]">{row.storeName}</div>
                            <div className="text-[11px] text-gray-400 font-mono">#{row.storeCode}</div>
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-[11px] font-medium">
                          {row.cycle}
                        </span>
                      </td>

                      <td className="py-3.5 px-3 text-center whitespace-nowrap font-bold text-[#191c22]">
                        {row.ordersCount} طلبات
                      </td>

                      <td className="py-3.5 px-3 text-center whitespace-nowrap font-medium text-gray-700 font-mono">
                        {row.grossAmount.toFixed(2)} ₪
                      </td>

                      <td className="py-3.5 px-3 text-center whitespace-nowrap text-rose-600 font-mono font-medium">
                        {row.commission.toFixed(2)} ₪
                      </td>

                      <td className="py-3.5 px-3 text-center whitespace-nowrap font-extrabold font-mono text-sm text-[#12302b]">
                        {row.isFrozen ? (
                          <span className="line-through text-amber-800 opacity-60">
                            {row.netAmount.toFixed(2)} ₪
                          </span>
                        ) : (
                          `${row.netAmount.toFixed(2)} ₪`
                        )}
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <div className="font-mono font-bold text-[#12302b] dir-ltr text-right">{row.accountNumber}</div>
                        <div className="text-[10px] text-gray-400">{row.accountType}</div>
                      </td>

                      <td className="py-3.5 px-3 text-center whitespace-nowrap">
                        <span className={`inline-flex px-2.5 py-1 rounded-full font-bold text-[10px] border ${row.statusColor}`}>
                          {row.statusLabel}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        {row.isFrozen ? (
                          <div className="flex items-center justify-center gap-1">
                            <Link
                              to="/admin/complaints"
                              className="px-2 py-1 rounded bg-amber-100 text-amber-900 border border-amber-300 font-bold text-[11px] hover:bg-amber-200"
                              title="الانتقال لملف الشكوى A-12"
                            >
                              A-12
                            </Link>
                            <Link
                              to="/admin/disputes"
                              className="px-2 py-1 rounded bg-gray-100 text-gray-700 border border-gray-300 font-bold text-[11px] hover:bg-gray-200"
                              title="الانتقال للتحكيم المالي A-11"
                            >
                              A-11
                            </Link>
                          </div>
                        ) : row.status === 'failed' ? (
                          <button
                            onClick={() => showToast(`إرسال طلب تحديث المحفظة للمتجر ${row.storeName}`)}
                            className="px-2.5 py-1 rounded-lg bg-rose-600 text-white hover:bg-rose-700 font-bold text-[11px] shadow-sm flex items-center gap-1 mx-auto"
                          >
                            <span className="material-symbols-outlined text-[13px]">refresh</span>
                            <span>إعادة المحاولة</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => showToast(`تمت مراجعة بيانات الحوالة ${row.id} للمتجر ${row.storeName}`)}
                            className="p-1 hover:bg-gray-100 rounded text-[#1f7a6e]"
                            title="عرض التفاصيل"
                          >
                            <span className="material-symbols-outlined text-base">visibility</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="p-3.5 bg-[#f2f3fc] border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-600 gap-2">
              <div>
                عرض 8 من أصل 8 متاجر مجدولة في دورة الصرف اليومية • إجمالي المطالبات: <strong>4,570.00 ₪</strong> | إجمالي العمولات المستقطعة: <strong>-136.80 ₪</strong>
              </div>
              <div className="text-emerald-700 font-bold">
                الدفعة معتمدة بنكياً بنظام المقاصة الفورية
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STICKY EXECUTION DOCKED BAR */}
        <aside
          aria-label="شريط التنفيذ المالي"
          className="fixed bottom-0 right-0 lg:right-64 left-0 bg-[#12302b] text-white px-6 lg:px-8 py-3.5 border-t border-[#0c231f] shadow-2xl z-30 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#e9b44c]/20 text-[#e9b44c] flex items-center justify-center border border-[#e9b44c]/30 shrink-0">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[#e9b44c] font-bold text-xs sm:text-sm">
                  {payoutsExecuted ? 'تم التنفيذ لجميع المتاجر المعتمدة' : 'جاهز للصرف: تنفيذ 6 تحويلات مؤكدة'}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-sm sm:text-base font-extrabold text-white">4,120.00 ₪</span>
                <span className="text-xs text-white/70">صافي المستحقات</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <p className="text-[11px] text-white/70">
                  التنفيذ المالي متوقف تلقائياً عند انقطاع الاتصال لحماية الأرصدة <span className="text-[#e9b44c] font-mono font-bold">(Offline Protected)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-center">
            <button
              onClick={() => showToast('تم تأجيل الحوالات للدورة القادمة بنجاح')}
              disabled={payoutsExecuted}
              className="h-10 px-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs transition-colors disabled:opacity-40"
            >
              تأجيل للدورة القادمة
            </button>
            <button
              onClick={() => setIsConfirmationModalOpen(true)}
              disabled={payoutsExecuted}
              className="h-10 px-6 rounded-xl bg-[#e9b44c] hover:bg-[#d8a238] text-[#12302b] font-bold text-xs shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                bolt
              </span>
              <span>{payoutsExecuted ? 'تم الصرف بنجاح' : '⚡ نفّذ التحويلات الآن'}</span>
            </button>
          </div>
        </aside>
      </main>

      {/* CONFIRMATION DIALOG MODAL (580px wide) */}
      {isConfirmationModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-[580px] rounded-3xl border border-gray-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 bg-[#f6f3ec] border-b border-gray-200 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#12302b] text-[#e9b44c] flex items-center justify-center shadow-md shrink-0">
                  <span className="material-symbols-outlined text-2xl">account_balance</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#12302b]">تأكيد أمر الصرف الجماعي لحوالات المتاجر</h3>
                  <p className="text-xs text-gray-500 mt-0.5">جدول دورة التحويلات الفورية عبر PalPay API</p>
                </div>
              </div>
              <button
                onClick={() => setIsConfirmationModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-200 text-gray-500 flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 text-xs">
              {/* Summary Strip */}
              <div className="bg-[#f6f3ec] rounded-2xl p-4 border border-gray-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">عدد الحوالات المعتمدة:</span>
                  <span className="font-bold text-[#191c22]">6 حوالات بنكية (مستثنى 2 لنزاع/خطأ)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">الإجمالي الصافي للتحويل:</span>
                  <span className="text-base font-extrabold text-[#12302b]">4,120.00 ₪</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-600 font-medium">الجهة المنفذة للسداد:</span>
                  <span className="font-bold text-[#1f7a6e] flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                    محفظة PalPay التجارية المركزية
                  </span>
                </div>
              </div>

              {/* Compliance note */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-3">
                <span className="material-symbols-outlined text-amber-700 text-xl shrink-0 mt-0.5">policy</span>
                <div className="leading-relaxed">
                  <p className="font-bold text-amber-900 mb-0.5">تنبيه رقابي ونظامي:</p>
                  سيتم تسجيل العملية كأمر صرف رسمي في <strong className="font-bold">الدفتر المالي (A-09)</strong> و<strong className="font-bold">سجل التدقيق والامتثال (A-18)</strong> باسم المشرف العام (<strong>أحمد المقيد</strong>). لا يمكن التراجع عن الحوالة فور استلام كود الموافقة البنكي.
                </div>
              </div>

              {/* 2FA simulated check */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-white">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="material-symbols-outlined text-[#1f7a6e] text-base">verified_user</span>
                  <span className="font-medium">بصمة التوثيق الأمني (2FA)</span>
                </div>
                <span className="text-emerald-700 font-bold text-[11px] inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  تم التحقق من الجلسة
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-[#f6f3ec] border-t border-gray-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsConfirmationModalOpen(false)}
                className="px-5 py-2.5 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 font-medium text-xs transition-colors"
              >
                إلغاء الأمر
              </button>
              <button
                type="button"
                disabled={isExecuting}
                onClick={handleExecutePayout}
                className="px-6 py-2.5 rounded-xl bg-[#e9b44c] hover:bg-[#d8a238] text-[#12302b] font-bold text-xs shadow-md transition-all flex items-center gap-2"
              >
                {isExecuting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-base">progress_activity</span>
                    <span>جارٍ الاتصال بمحفظة PalPay...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                      send
                    </span>
                    <span>تأكيد التنفيذ وتحويل المستحقات</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
