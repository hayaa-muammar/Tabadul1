import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminLedgerPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Filters state
  const [txTypeFilter, setTxTypeFilter] = useState('all');
  const [merchantFilter, setMerchantFilter] = useState('all');
  const [clientFilter, setClientFilter] = useState('all');
  const [periodFilter, setPeriodFilter] = useState('oct2026');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Correction Modal State
  const [isCorrectionModalOpen, setIsCorrectionModalOpen] = useState(false);
  const [corrAccount, setCorrAccount] = useState('بوتيك الياسمين - حساب الأمانات المعلقة');
  const [corrOrderRef, setCorrOrderRef] = useState('ORD-9278');
  const [corrAmount, setCorrAmount] = useState('12.00');
  const [corrAuditRef, setCorrAuditRef] = useState('AUD-0419-PALPAY');
  const [corrReason, setCorrReason] = useState('تصحيح فارق احتساب كسر نقاط الولاء بقيمة 12 شيكل تم تحصيلها كأمانة فائضة عند إلغاء جزئي لحذاء رياضي لبوتيك الياسمين قبل تأكيد التسليم النهائي.');
  const [formErrors, setFormErrors] = useState({});

  // Ledger entries initial data
  const [ledgerEntries, setLedgerEntries] = useState([
    {
      id: 'TXN-08914',
      date: '28 أكتوبر 2026',
      time: '14:32:05',
      type: 'بيع واحتجاز أمانة',
      typeColor: 'bg-primary/10 text-primary',
      entity: 'بوتيك لمسة فاشون',
      entitySub: 'غزة - الرمال',
      client: 'سارة شبير',
      escrowChange: '+235.00 ₪',
      escrowColor: 'text-[#005232] font-bold',
      merchantChange: '+221.00 ₪',
      merchantColor: 'text-on-surface font-semibold',
      commission: '+14.00 ₪',
      commissionRate: '3% + ثابت',
      pointsDelta: '+1,175 نقطة',
      pointsColor: 'text-secondary font-bold',
      status: 'معلقة كضمان',
      statusBadge: 'bg-amber-100 text-amber-900 border-amber-300',
      orderRef: 'ORD-10482',
      isDisputed: true,
    },
    {
      id: 'TXN-08912',
      date: '28 أكتوبر 2026',
      time: '12:15:18',
      type: 'تسوية حوالة PalPay',
      typeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      entity: 'دار الأناقة للأزياء',
      entitySub: 'غزة - شارع النصر',
      client: 'نظام المنصة المركزي',
      escrowChange: '-840.00 ₪',
      escrowColor: 'text-error font-bold',
      merchantChange: '-840.00 ₪',
      merchantColor: 'text-error font-bold',
      commission: '0.00 ₪',
      commissionRate: 'مستقطعة مسبقاً',
      pointsDelta: '0 نقطة',
      pointsColor: 'text-outline',
      status: 'مقفلة ومسوّاة بنكياً',
      statusBadge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      orderRef: 'BATCH-4091',
      isDisputed: false,
    },
    {
      id: 'TXN-08908',
      date: '28 أكتوبر 2026',
      time: '10:45:22',
      type: 'كسب نقاط ولاء (5%)',
      typeColor: 'bg-secondary-fixed/50 text-on-secondary-fixed-variant',
      entity: 'أحذية النصر',
      entitySub: 'عمر المختار',
      client: 'مريم رضوان',
      escrowChange: '+120.00 ₪',
      escrowColor: 'text-[#005232]',
      merchantChange: '+114.00 ₪',
      merchantColor: 'text-on-surface',
      commission: '+6.00 ₪',
      commissionRate: '5%',
      pointsDelta: '+600 نقطة',
      pointsColor: 'text-secondary font-bold',
      status: 'نشطة ومتاحة للصرف',
      statusBadge: 'bg-blue-100 text-blue-900 border-blue-200',
      orderRef: 'ORD-9261',
      isDisputed: false,
    },
    {
      id: 'TXN-08901',
      date: '27 أكتوبر 2026',
      time: '19:10:44',
      type: 'استبدال نقاط خصم',
      typeColor: 'bg-purple-100 text-purple-900 border-purple-200',
      entity: 'بوتيك الياسمين',
      entitySub: 'غزة - النصر',
      client: 'هند الشوا',
      escrowChange: '0.00 ₪',
      escrowColor: 'text-outline',
      merchantChange: '+15.00 ₪',
      merchantColor: 'text-[#005232]',
      commission: '0.00 ₪',
      commissionRate: 'مقاصة نقاط',
      pointsDelta: '-3,000 نقطة',
      pointsColor: 'text-error font-bold',
      status: 'نشطة ومتاحة للصرف',
      statusBadge: 'bg-blue-100 text-blue-900 border-blue-200',
      orderRef: 'ORD-9242',
      isDisputed: false,
    },
    {
      id: 'TXN-08894',
      date: '27 أكتوبر 2026',
      time: '16:04:12',
      type: 'قيد تصحيحي استثنائي',
      typeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      entity: 'بوتيك الياسمين',
      entitySub: 'غزة - النصر',
      client: 'مراجعة تدقيق A-18',
      escrowChange: '-12.00 ₪',
      escrowColor: 'text-error font-bold',
      merchantChange: '-12.00 ₪',
      merchantColor: 'text-error font-bold',
      commission: '0.00 ₪',
      commissionRate: 'تسوية فارق',
      pointsDelta: '0 نقطة',
      pointsColor: 'text-outline',
      status: 'مقفلة ومسوّاة بنكياً',
      statusBadge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      orderRef: 'ORD-9278',
      isDisputed: false,
    },
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  // Handle Correction Journal Form Submission
  const handleSaveCorrection = (e) => {
    e.preventDefault();
    const errors = {};

    if (!corrAccount.trim()) errors.corrAccount = 'يرجى اختيار الحساب المتأثر.';
    if (!corrOrderRef.trim()) errors.corrOrderRef = 'يرجى إدخال رقم الطلب المرتبط.';
    if (!corrAmount || isNaN(corrAmount) || Number(corrAmount) <= 0) errors.corrAmount = 'يرجى إدخال مبلغ صحيح أكبر من الصفر.';
    if (!corrAuditRef.trim()) errors.corrAuditRef = 'يرجى إدخال رقم المستند الداعم (Audit Ref).';
    if (!corrReason.trim() || corrReason.trim().length < 10) errors.corrReason = 'يرجى كتابة مبرر قانوني ومحاسبي وافٍ (10 أحرف على الأقل).';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const newTxn = {
      id: `TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' }),
      time: new Date().toLocaleTimeString('ar-EG', { hour12: false }),
      type: 'قيد تصحيحي استثنائي',
      typeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      entity: corrAccount.split(' - ')[0] || 'حساب التدقيق',
      entitySub: corrAccount.split(' - ')[1] || 'تسوية إدارية',
      client: 'المشرف المالي العام (A-18)',
      escrowChange: `-${Number(corrAmount).toFixed(2)} ₪`,
      escrowColor: 'text-error font-bold',
      merchantChange: `-${Number(corrAmount).toFixed(2)} ₪`,
      merchantColor: 'text-error font-bold',
      commission: '0.00 ₪',
      commissionRate: 'قيد تسوية',
      pointsDelta: '0 نقطة',
      pointsColor: 'text-outline',
      status: 'مقفلة ومسوّاة بنكياً',
      statusBadge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      orderRef: corrOrderRef,
      isDisputed: false,
    };

    setLedgerEntries([newTxn, ...ledgerEntries]);
    setIsCorrectionModalOpen(false);
    setFormErrors({});
    showToast(`تم ترحيل القيد التصحيحي ${newTxn.id} وتوثيقه في سجل التدقيق A-18 بنجاح!`);
  };

  // Filter entries
  const filteredEntries = ledgerEntries.filter((row) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        row.id.toLowerCase().includes(q) ||
        row.entity.toLowerCase().includes(q) ||
        row.client.toLowerCase().includes(q) ||
        row.orderRef.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (txTypeFilter !== 'all' && !row.type.includes(txTypeFilter)) return false;
    if (merchantFilter !== 'all' && !row.entity.includes(merchantFilter)) return false;
    if (clientFilter !== 'all' && !row.client.includes(clientFilter)) return false;
    if (statusFilter !== 'all' && !row.status.includes(statusFilter)) return false;
    return true;
  });

  // Export CSV
  const handleExportCsv = () => {
    const headers = 'معرف القيد,التاريخ,الوقت,نوع الحركة,الجهة / المتجر,العميل,أمانات المنصة,استحقاق التاجر,عمولة المنصة,نقاط الولاء,الحالة,المرجع\n';
    const rows = filteredEntries
      .map(
        (r) =>
          `"${r.id}","${r.date}","${r.time}","${r.type}","${r.entity}","${r.client}","${r.escrowChange}","${r.merchantChange}","${r.commission}","${r.pointsDelta}","${r.status}","${r.orderRef}"`
      )
      .join('\n');
    const blob = new Blob(['\uFEFF' + headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tabadul_ledger_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('تم تصدير الدفتر المالي العام بصيغة CSV بنجاح!');
  };

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
      <AdminSidebar activeItem="ledger" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      {/* Main Content Workspace */}
      <main className="flex-1 lg:mr-64 flex flex-col min-w-0 pb-16">
        {/* Sticky Top Header */}
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
                placeholder="بحث برقم القيد، كود الطلب، المتجر، أو العميل..."
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
              <span className="hidden sm:inline">سجل التدقيق A-18</span>
            </Link>
          </div>
        </header>

        {/* Canvas Body Container */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1440px] mx-auto w-full">
          {/* Header Title & Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <nav className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <Link to="/admin/dashboard" className="hover:text-[#12302b]">الإدارة العامة</Link>
                <span className="material-symbols-outlined text-xs">chevron_left</span>
                <span className="text-gray-400">المالية والحسابات</span>
                <span className="material-symbols-outlined text-xs">chevron_left</span>
                <span className="text-[#032448] font-bold">الدفتر المالي والتسويات (A-09)</span>
              </nav>
              <h1 className="text-xl sm:text-2xl font-bold text-[#032448] tracking-tight">
                دفتر المعاملات ونقاط الولاء العام
              </h1>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-full text-xs font-bold w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>دفتر أستاذ مزدوج غير قابل للتعديل (Double-Entry Ledger)</span>
            </div>
          </div>

          {/* 1. RECONCILIATION BANNER CARDS */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Main Balanced Escrow Equation Card */}
            <div className="lg:col-span-8 bg-white border border-[#c4c6cf]/50 rounded-2xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#032448]/5 text-[#032448] rounded-xl">
                    <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#032448]">شريط المطابقة المالية اللحظية (Reconciliation Banner)</h3>
                    <p className="text-xs text-gray-500">معادلة تطابق الأمانات المحتجزة مع استحقاقات التجار وعمولة المنصة</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2E9E6B]/10 border border-[#2E9E6B]/30 text-[#005232] rounded-full text-xs font-bold w-fit">
                  <span className="material-symbols-outlined text-sm text-[#2E9E6B]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span>متطابق 100% محاسبياً</span>
                </div>
              </div>

              {/* Equation Visual Representation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 items-center">
                {/* Part 1: Escrow Held */}
                <div className="p-3.5 bg-[#f2f3fc] rounded-xl border border-gray-200 flex flex-col gap-1">
                  <span className="text-xs text-gray-500 font-medium">المحتجز كأمانات للمنصة</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#032448]">9,820</span>
                    <span className="text-xs font-bold text-gray-400">₪</span>
                  </div>
                  <span className="text-[11px] text-[#005232] font-medium">100% متطابق مع محافظ بال باي</span>
                </div>

                {/* Equal Sign & Merchant Net */}
                <div className="p-3.5 bg-[#f2f3fc] rounded-xl border border-gray-200 flex flex-col gap-1 relative">
                  <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-gray-300 items-center justify-center text-xs font-bold text-gray-500 z-10">
                    =
                  </div>
                  <span className="text-xs text-gray-500 font-medium">المستحق النهائي للتجار (94.4%)</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#032448]">9,267</span>
                    <span className="text-xs font-bold text-gray-400">₪</span>
                  </div>
                  <span className="text-[11px] text-gray-600 font-medium">صافي 42 طلب مؤكد التسليم</span>
                </div>

                {/* Plus Sign & Platform Commission */}
                <div className="p-3.5 bg-[#f2f3fc] rounded-xl border border-gray-200 flex flex-col gap-1 relative">
                  <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-gray-300 items-center justify-center text-xs font-bold text-gray-500 z-10">
                    +
                  </div>
                  <span className="text-xs text-gray-500 font-medium">عمولة منصة تبادل (5.6%)</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#835400]">553</span>
                    <span className="text-xs font-bold text-gray-400">₪</span>
                  </div>
                  <span className="text-[11px] text-[#835400] font-medium">إيراد الوساطة التشغيلية المحقق</span>
                </div>
              </div>
            </div>

            {/* Mismatch Warning & Correction Trigger Card */}
            <div className="lg:col-span-4 bg-white border border-[#835400]/30 rounded-2xl p-5 shadow-sm flex flex-col justify-between bg-gradient-to-br from-white to-amber-50/30">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-amber-100 text-[#835400] rounded-xl">
                    <span className="material-symbols-outlined text-xl">warning</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#835400]">إطار كشف عدم التطابق (Mismatch)</h4>
                    <span className="text-xs text-gray-500">فحص الأمانات المعلقة للطلبات المرتجعة</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-amber-200 text-amber-900 font-bold rounded text-[11px]">
                  تنبيه تدقيقي
                </span>
              </div>

              <div className="my-3 p-3 bg-white/90 rounded-xl border border-amber-200">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-[#191c22]">فارق 12 ₪ في أمانات الضمان</span>
                  <span className="text-red-600 font-bold font-mono">#ORD-9278</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  فارق كسر كسوة بقيمة 12 شيكل نتج عن استرجاع جزئي لحذاء رياضي لبوتيك الياسمين قبل مزامنة نقاط الولاء.
                </p>
              </div>

              <button
                onClick={() => setIsCorrectionModalOpen(true)}
                className="w-full py-2.5 px-4 bg-[#835400] hover:bg-[#643f00] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base">history_edu</span>
                <span>إنشاء قيد تصحيح لهذا الفارق</span>
              </button>
            </div>
          </section>

          {/* 2. ADVANCED FILTER BAR */}
          <section className="bg-white border border-[#c4c6cf]/40 rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#032448] font-bold text-xs sm:text-sm">
                <span className="material-symbols-outlined text-lg">filter_alt</span>
                <span>فلاتر التدقيق المالي المتقدمة</span>
              </div>
              <button
                onClick={() => {
                  setTxTypeFilter('all');
                  setMerchantFilter('all');
                  setClientFilter('all');
                  setStatusFilter('all');
                  setSearchQuery('');
                }}
                className="text-xs text-gray-500 hover:text-[#032448] transition-colors flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">restart_alt</span>
                <span>إعادة ضبط المعايير</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-1">
              {/* Filter 1: Type */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-500 font-medium">نوع الحركة المحاسبية</label>
                <select
                  value={txTypeFilter}
                  onChange={(e) => setTxTypeFilter(e.target.value)}
                  className="w-full h-10 px-3 bg-[#f2f3fc] rounded-xl border border-gray-200 text-xs font-medium focus:border-[#032448] outline-none"
                >
                  <option value="all">الكل (جميع العمليات)</option>
                  <option value="بيع واحتجاز">بيع واحتجاز أمانة</option>
                  <option value="كسب نقاط">كسب نقاط ولاء (5%)</option>
                  <option value="استبدال نقاط">استبدال نقاط خصم</option>
                  <option value="تسوية حوالة">تسوية حوالة PalPay</option>
                  <option value="قيد تصحيحي">قيد تصحيحي استثنائي</option>
                </select>
              </div>

              {/* Filter 2: Merchant */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-500 font-medium">التاجر / المتجر (غزة)</label>
                <select
                  value={merchantFilter}
                  onChange={(e) => setMerchantFilter(e.target.value)}
                  className="w-full h-10 px-3 bg-[#f2f3fc] rounded-xl border border-gray-200 text-xs font-medium focus:border-[#032448] outline-none"
                >
                  <option value="all">الكل (جميع الشركاء)</option>
                  <option value="لمسة">بوتيك لمسة فاشون</option>
                  <option value="الياسمين">بوتيك الياسمين</option>
                  <option value="النصر">أحذية النصر</option>
                  <option value="الأناقة">دار الأناقة للأزياء</option>
                </select>
              </div>

              {/* Filter 3: Customer */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-500 font-medium">العميل المستفيد</label>
                <select
                  value={clientFilter}
                  onChange={(e) => setClientFilter(e.target.value)}
                  className="w-full h-10 px-3 bg-[#f2f3fc] rounded-xl border border-gray-200 text-xs font-medium focus:border-[#032448] outline-none"
                >
                  <option value="all">الكل (جميع الزبائن)</option>
                  <option value="سارة">سارة شبير (VIP)</option>
                  <option value="مريم">مريم رضوان</option>
                  <option value="هند">هند الشوا</option>
                </select>
              </div>

              {/* Filter 4: Period */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-500 font-medium">الفترة المحاسبية</label>
                <select
                  value={periodFilter}
                  onChange={(e) => setPeriodFilter(e.target.value)}
                  className="w-full h-10 px-3 bg-[#f2f3fc] rounded-xl border border-gray-200 text-xs font-medium focus:border-[#032448] outline-none"
                >
                  <option value="oct2026">أكتوبر 2026 (الشهر الحالي)</option>
                  <option value="sep2026">سبتمبر 2026 (مقفلة ومطابقة)</option>
                  <option value="q3">الربع الثالث Q3 2026</option>
                </select>
              </div>

              {/* Filter 5: Status */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-500 font-medium">حالة القيد والضمان</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full h-10 px-3 bg-[#f2f3fc] rounded-xl border border-gray-200 text-xs font-medium focus:border-[#032448] outline-none"
                >
                  <option value="all">الكل (نشط ومعلق)</option>
                  <option value="معلقة كضمان">معلقة كضمان (Escrow)</option>
                  <option value="نشطة">نشطة ومتاحة للصرف</option>
                  <option value="مقفلة">مقفلة ومسوّاة بنكياً</option>
                </select>
              </div>
            </div>
          </section>

          {/* 3. DENSE DOUBLE-ENTRY LEDGER TABLE */}
          <section className="bg-white border border-[#c4c6cf]/40 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="bg-[#032448]/5 border-b border-[#032448]/10 px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-[#032448]">
                <span className="material-symbols-outlined text-lg">lock</span>
                <span className="text-xs sm:text-sm font-bold">
                  لا يمكن تعديل أو حذف أي قيد مالي إطلاقاً (Double-Entry Ledger) - جميع القيود للقراءة والتدقيق فقط
                </span>
              </div>
              <div className="text-xs text-gray-500">
                إجمالي القيود المعروضة: <strong className="text-[#191c22] font-bold">{filteredEntries.length} قيد</strong>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse text-xs">
                <thead>
                  <tr className="bg-[#f2f3fc] text-gray-600 font-bold border-b border-gray-200 whitespace-nowrap">
                    <th className="py-3 px-4">رقم القيد والتاريخ</th>
                    <th className="py-3 px-3">نوع الحركة</th>
                    <th className="py-3 px-3">الجهة / المتجر</th>
                    <th className="py-3 px-3">العميل المستفيد</th>
                    <th className="py-3 px-3 text-center">أمانات المنصة</th>
                    <th className="py-3 px-3 text-center">استحقاق التاجر</th>
                    <th className="py-3 px-3 text-center">عمولة المنصة</th>
                    <th className="py-3 px-3 text-center">نقاط الولاء</th>
                    <th className="py-3 px-3 text-center">حالة القيد</th>
                    <th className="py-3 px-4 text-center">المرجع</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredEntries.map((row) => (
                    <tr
                      key={row.id}
                      className={`hover:bg-gray-50/80 transition-colors ${
                        row.isDisputed ? 'bg-amber-50/40 border-r-4 border-amber-500' : ''
                      }`}
                    >
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="font-bold font-mono text-[#032448]">{row.id}</div>
                        <div className="text-[11px] text-gray-400">
                          {row.date} • {row.time}
                        </div>
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-0.5 rounded-md font-bold text-[11px] ${row.typeColor}`}>
                          {row.type}
                        </span>
                      </td>

                      <td className="py-3.5 px-3">
                        <div className="font-bold text-[#191c22]">{row.entity}</div>
                        <div className="text-[11px] text-gray-400">{row.entitySub}</div>
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <div className="font-medium text-[#191c22]">{row.client}</div>
                      </td>

                      <td className={`py-3.5 px-3 text-center font-mono font-bold ${row.escrowColor}`}>
                        {row.escrowChange}
                      </td>

                      <td className={`py-3.5 px-3 text-center font-mono ${row.merchantColor}`}>
                        {row.merchantChange}
                      </td>

                      <td className="py-3.5 px-3 text-center whitespace-nowrap">
                        <div className="font-bold text-[#835400] font-mono">{row.commission}</div>
                        <div className="text-[10px] text-gray-400">{row.commissionRate}</div>
                      </td>

                      <td className={`py-3.5 px-3 text-center font-mono whitespace-nowrap ${row.pointsColor}`}>
                        {row.pointsDelta}
                      </td>

                      <td className="py-3.5 px-3 text-center whitespace-nowrap">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full font-bold text-[10px] border ${row.statusBadge}`}>
                          {row.status}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        {row.isDisputed ? (
                          <Link
                            to="/admin/disputes"
                            className="text-[#1f7a6e] hover:underline font-mono font-bold inline-flex items-center gap-0.5"
                            title="الانتقال لملف النزاع A-11"
                          >
                            <span>#{row.orderRef}</span>
                            <span className="material-symbols-outlined text-[13px]">gavel</span>
                          </Link>
                        ) : (
                          <span className="font-mono text-gray-500 font-semibold">#{row.orderRef}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="px-5 py-3 border-t border-gray-200 bg-[#f2f3fc] flex items-center justify-between text-xs text-gray-500">
              <span>عرض 1 إلى {filteredEntries.length} من أصل 1,489 قيد مرحّل</span>
              <div className="flex items-center gap-1.5">
                <button disabled className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg text-gray-400 cursor-not-allowed">
                  السابق
                </button>
                <span className="px-2.5 py-1 bg-[#032448] text-white rounded-lg font-bold">1</span>
                <button className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100">
                  2
                </button>
                <button className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100">
                  التالي
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* CORRECTION DIALOG MODAL (560px) */}
      {isCorrectionModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-[560px] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#032448] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-[#feb64e] text-[#2a1800] rounded-xl font-bold">
                  <span className="material-symbols-outlined text-lg">edit_document</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">إنشاء قيد تصحيحي استثنائي</h3>
                  <p className="text-xs text-gray-300">تسجيل قيد تسوية إلحاقي بدفتر الأستاذ العام</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsCorrectionModalOpen(false);
                  setFormErrors({});
                }}
                className="text-gray-300 hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Note banner */}
            <div className="px-6 py-3 bg-amber-50 border-b border-amber-200 flex items-start gap-2.5 text-amber-900 text-xs">
              <span className="material-symbols-outlined text-amber-600 text-lg mt-0.5">verified_user</span>
              <div className="leading-tight">
                <span className="font-bold">الملاحظة الحتمية:</span> لا تُحذف القيود أبدًا - يتم ترحيل قيد مستقل وموثق برقم فريد في سجل التدقيق <strong className="underline font-bold">A-18</strong> تلقائيًا.
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSaveCorrection} className="p-6 space-y-4 text-xs">
              {/* Field 1: Affected Party */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[#191c22]">
                  الطرف المتأثر (الحساب المحاسبي) <span className="text-red-500">*</span>
                </label>
                <select
                  value={corrAccount}
                  onChange={(e) => setCorrAccount(e.target.value)}
                  className={`w-full h-11 px-3 bg-[#f2f3fc] rounded-xl border ${
                    formErrors.corrAccount ? 'border-red-500' : 'border-gray-300'
                  } text-xs font-medium focus:border-[#032448] outline-none`}
                >
                  <option value="">اختر الحساب الدائن / المدين المتأثر</option>
                  <option value="بوتيك الياسمين - حساب الأمانات المعلقة">بوتيك الياسمين - حساب الأمانات المعلقة</option>
                  <option value="بوتيك لمسة - حساب الرصيد القابل للسحب">بوتيك لمسة - حساب الرصيد القابل للسحب</option>
                  <option value="أحذية النصر - رصيد نقاط المكافآت">أحذية النصر - رصيد نقاط المكافآت</option>
                  <option value="سارة شبير - محفظة الكاش باك المستردة">سارة شبير - محفظة الكاش باك المستردة</option>
                </select>
                {formErrors.corrAccount && <span className="text-[11px] text-red-500">{formErrors.corrAccount}</span>}
              </div>

              {/* Two Column: Order Number & Amount */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[#191c22]">
                    رقم الطلب المرتبط <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={corrOrderRef}
                    onChange={(e) => setCorrOrderRef(e.target.value)}
                    className={`w-full h-11 px-3 bg-[#f2f3fc] rounded-xl border ${
                      formErrors.corrOrderRef ? 'border-red-500' : 'border-gray-300'
                    } text-xs font-mono focus:border-[#032448] outline-none`}
                    placeholder="ORD-9278"
                    type="text"
                  />
                  {formErrors.corrOrderRef && <span className="text-[11px] text-red-500">{formErrors.corrOrderRef}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[#191c22]">
                    المبلغ بالشيكل (₪) <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={corrAmount}
                    onChange={(e) => setCorrAmount(e.target.value)}
                    className={`w-full h-11 px-3 bg-[#f2f3fc] rounded-xl border ${
                      formErrors.corrAmount ? 'border-red-500' : 'border-gray-300'
                    } text-xs font-mono font-bold focus:border-[#032448] outline-none`}
                    type="number"
                    step="0.01"
                    placeholder="12.00"
                  />
                  {formErrors.corrAmount && <span className="text-[11px] text-red-500">{formErrors.corrAmount}</span>}
                </div>
              </div>

              {/* Field 3: Audit Ref Document */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[#191c22]">
                  رقم المستند الداعم (Audit Note Ref) <span className="text-red-500">*</span>
                </label>
                <input
                  value={corrAuditRef}
                  onChange={(e) => setCorrAuditRef(e.target.value)}
                  className={`w-full h-11 px-3 bg-[#f2f3fc] rounded-xl border ${
                    formErrors.corrAuditRef ? 'border-red-500' : 'border-gray-300'
                  } text-xs font-mono focus:border-[#032448] outline-none`}
                  placeholder="AUD-0419-PALPAY"
                  type="text"
                />
                {formErrors.corrAuditRef && <span className="text-[11px] text-red-500">{formErrors.corrAuditRef}</span>}
              </div>

              {/* Field 4: Justification */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[#191c22]">
                  سبب التصحيح والمبرر القانوني / المحاسبي <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={corrReason}
                  onChange={(e) => setCorrReason(e.target.value)}
                  className={`w-full p-3 bg-[#f2f3fc] rounded-xl border ${
                    formErrors.corrReason ? 'border-red-500' : 'border-gray-300'
                  } text-xs focus:border-[#032448] outline-none resize-none`}
                  rows="3"
                  placeholder="أدخل مبرر التعديل بالتفصيل لتسجيله في سجل الامتثال..."
                />
                {formErrors.corrReason && <span className="text-[11px] text-red-500">{formErrors.corrReason}</span>}
              </div>

              {/* Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setIsCorrectionModalOpen(false);
                    setFormErrors({});
                  }}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium transition-colors"
                >
                  إلغاء الأمر
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#feb64e] hover:bg-[#ffb956] text-[#2a1800] font-bold rounded-xl flex items-center gap-2 shadow-sm transition-all"
                >
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>ترحيل القيد واعتماده نهائياً</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
