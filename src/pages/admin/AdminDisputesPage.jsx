import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminDisputesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [activeTab, setActiveTab] = useState('pending'); // 'pending' | 'resolved'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDisputeId, setSelectedDisputeId] = useState('ORD-10482');

  // Arbitration Decision Form State
  const [arbitrationDecision, setArbitrationDecision] = useState('refund_customer'); // 'refund_customer' | 'release_merchant' | 'split_fifty'
  const [arbitrationNotes, setArbitrationNotes] = useState('');
  const [arbitrationError, setArbitrationError] = useState('');

  // Disputes List Data
  const [disputes, setDisputes] = useState([
    {
      id: 'ORD-10482',
      complaintRef: 'DS-3029',
      storeName: 'بوتيك لمسة فاشون',
      storeLocation: 'غزة - الرمال',
      customerName: 'سارة شبير',
      customerPhone: '059-9182341',
      reason: 'لم يرد التاجر خلال 48 ساعة (تلف قماش ومقاس خاطئ)',
      amountHeld: 235.0,
      age: 'منذ 38 ساعة',
      priority: 'عالية جداً',
      priorityColor: 'bg-red-600 text-white',
      status: 'pending',
      customerClaim: 'تم استلام الفستان بمقاس (M) بدلاً من (L) وتوجد تمزقات في الحاشية، والمندوب سلّم الطرد دون طلب رمز التحقق PIN.',
      merchantClaim: 'المتجر يؤكد فحص القطعة وتغليفها بحالة سليمة، والتسليم تم بدون إدخال PIN بسبب ضغط الشحنات في منطقة الرمال.',
    },
    {
      id: 'ORD-10495',
      complaintRef: 'DS-3031',
      storeName: 'مجوهرات الأناقة',
      storeLocation: 'خانيونس - البلد',
      customerName: 'مريم الأسطل',
      customerPhone: '059-8431092',
      reason: 'فارق عيار الفضة المطبوع عن الفاتورة',
      amountHeld: 480.0,
      age: 'منذ 24 ساعة',
      priority: 'عالية',
      priorityColor: 'bg-amber-600 text-white',
      status: 'pending',
      customerClaim: 'الخاتم المستلم عيار 800 بينما الفاتورة تنص على فضة إيطالية عيار 925.',
      merchantClaim: 'الخطأ مطبعي في الفاتورة ونحن مستعدون للتبديل الفوري دون تأخير.',
    },
    {
      id: 'ORD-10510',
      complaintRef: 'DS-3035',
      storeName: 'سنيكرز بالاس',
      storeLocation: 'غزة - شارع عمر المختار',
      customerName: 'محمد الدلو',
      customerPhone: '059-7124981',
      reason: 'علبة ممزقة ونعل مستخدم',
      amountHeld: 190.0,
      age: 'منذ 16 ساعة',
      priority: 'متوسطة',
      priorityColor: 'bg-blue-600 text-white',
      status: 'pending',
      customerClaim: 'الحذاء الرياضي يظهر عليه آثار تجربة متكررة والعلبة تالفة.',
      merchantClaim: 'المنتج جديد وخرج من المخزن في نفس اليوم.',
    },
    {
      id: 'ORD-10390',
      complaintRef: 'DS-3011',
      storeName: 'دار الأناقة للأزياء',
      storeLocation: 'غزة - النصر',
      customerName: 'هند الشوا',
      customerPhone: '059-3321908',
      reason: 'تأخر التوصيل لأكثر من 5 أيام',
      amountHeld: 320.0,
      age: 'منذ 4 أيام',
      priority: 'عادية',
      priorityColor: 'bg-gray-600 text-white',
      status: 'resolved',
      resolution: 'تم استرجاع المبلغ بالكامل للعميل وإلغاء الطلب.',
    },
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  const selectedDispute = disputes.find((d) => d.id === selectedDisputeId) || disputes[0];

  // Submit Arbitration Decision
  const handleConfirmDecision = (e) => {
    e.preventDefault();
    setArbitrationError('');

    if (!arbitrationNotes.trim() || arbitrationNotes.trim().length < 8) {
      setArbitrationError('يرجى تدوين حيثيات القرار والمبرر التحكيمي (8 أحرف على الأقل).');
      return;
    }

    const decisionText =
      arbitrationDecision === 'refund_customer'
        ? `استرجاع كامل المبلغ (${selectedDispute.amountHeld} ₪) للعميل`
        : arbitrationDecision === 'release_merchant'
        ? `الإفراج عن كامل المبلغ (${selectedDispute.amountHeld} ₪) للتاجر`
        : `تسوية ودية مناصفة (${(selectedDispute.amountHeld / 2).toFixed(2)} ₪ لكل طرف)`;

    setDisputes((prev) =>
      prev.map((d) =>
        d.id === selectedDispute.id
          ? {
              ...d,
              status: 'resolved',
              resolution: `حُسم القرار: ${decisionText} | سند المشرف: ${arbitrationNotes}`,
            }
          : d
      )
    );

    showToast(`تم إصدار الحكم النهائي في النزاع #${selectedDispute.id} وقيده في سجل A-18 والترحيل لـ A-09 بنجاح!`);
    setArbitrationNotes('');
  };

  const pendingDisputes = disputes.filter((d) => d.status === 'pending');
  const resolvedDisputes = disputes.filter((d) => d.status === 'resolved');
  const activeDisputesList = activeTab === 'pending' ? pendingDisputes : resolvedDisputes;

  const filteredList = activeDisputesList.filter((d) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      d.id.toLowerCase().includes(q) ||
      d.storeName.toLowerCase().includes(q) ||
      d.customerName.toLowerCase().includes(q)
    );
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
      <AdminSidebar activeItem="disputes" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      {/* Main Workspace */}
      <main className="flex-1 lg:mr-64 flex flex-col min-w-0 pb-16">
        {/* Sticky Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 lg:px-8 py-3.5 border-b border-[#e1e2ea] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-[#835400] font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span>{pendingDisputes.length} عمليات تنتظر قراراً تحكيمياً</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1 font-bold text-[#032448]">
                <span>3,420 ₪</span>
                <span className="text-gray-500 font-normal">إجمالي أمانات محتجزة قيد التحكيم</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1 text-emerald-700 font-bold">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>14 نزاعاً محسوماً هذا الشهر</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/admin/audit-log"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">history_edu</span>
              <span>سجل التدقيق A-18</span>
            </Link>
          </div>
        </header>

        {/* Canvas Body */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1400px] mx-auto w-full">
          {/* Breadcrumb & Title */}
          <div>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <Link to="/admin/dashboard" className="hover:text-[#12302b]">الإدارة العامة</Link>
              <span className="material-symbols-outlined text-xs">chevron_left</span>
              <span className="text-gray-400">الرقابة والتحكيم</span>
              <span className="material-symbols-outlined text-xs">chevron_left</span>
              <span className="text-[#032448] font-bold">العمليات المتنازع عليها (A-11)</span>
            </nav>
            <h1 className="text-xl sm:text-2xl font-bold text-[#032448] tracking-tight">
              مراجعة العمليات المتنازع عليها والتحكيم المالي
            </h1>
          </div>

          {/* TABLE SECTION */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Tabs and Search Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 bg-[#f2f3fc] p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab('pending')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'pending'
                      ? 'bg-white text-[#032448] shadow-sm'
                      : 'text-gray-600 hover:text-[#032448]'
                  }`}
                >
                  <span className="material-symbols-outlined text-base text-[#835400]">pending_actions</span>
                  <span>تنتظر قراراً ({pendingDisputes.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('resolved')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'resolved'
                      ? 'bg-white text-[#032448] shadow-sm'
                      : 'text-gray-600 hover:text-[#032448]'
                  }`}
                >
                  <span className="material-symbols-outlined text-base text-emerald-600">task_alt</span>
                  <span>محسومة ومغلقة ({resolvedDisputes.length})</span>
                </button>
              </div>

              <div className="relative w-full sm:w-72">
                <span className="material-symbols-outlined absolute right-3 top-2.5 text-gray-400 text-lg">search</span>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-9 pl-3 py-1.5 text-xs bg-[#f2f3fc] border border-gray-200 rounded-xl focus:bg-white focus:border-[#032448] outline-none"
                  placeholder="بحث برقم الطلب، المتجر أو العميل..."
                  type="text"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse text-xs">
                <thead>
                  <tr className="bg-[#f2f3fc] text-gray-600 font-bold border-b border-gray-200 whitespace-nowrap">
                    <th className="py-3 px-4">رقم العملية</th>
                    <th className="py-3 px-3">المتجر</th>
                    <th className="py-3 px-3">العميل</th>
                    <th className="py-3 px-3">سبب النزاع المسجل</th>
                    <th className="py-3 px-3 text-center">المبلغ المحتجز</th>
                    <th className="py-3 px-3">عمر النزاع</th>
                    <th className="py-3 px-3">الأولوية</th>
                    <th className="py-3 px-4 text-center">الإجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredList.map((row) => {
                    const isSelected = selectedDisputeId === row.id;
                    return (
                      <tr
                        key={row.id}
                        onClick={() => setSelectedDisputeId(row.id)}
                        className={`cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-amber-50/60 border-r-4 border-amber-600 font-medium'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[#032448]">#{row.id}</span>
                            {isSelected && (
                              <span className="bg-[#032448] text-white text-[10px] px-1.5 py-0.2 rounded font-mono">
                                محدد
                              </span>
                            )}
                          </div>
                        </td>

                        <td className="py-3.5 px-3 whitespace-nowrap">
                          <div className="font-bold text-[#191c22]">{row.storeName}</div>
                          <div className="text-[11px] text-gray-400">{row.storeLocation}</div>
                        </td>

                        <td className="py-3.5 px-3 whitespace-nowrap">
                          <div className="font-bold text-[#191c22]">{row.customerName}</div>
                          <div className="text-[11px] text-gray-400 font-mono dir-ltr text-right">{row.customerPhone}</div>
                        </td>

                        <td className="py-3.5 px-3">
                          <div className="text-red-700 font-medium">{row.reason}</div>
                        </td>

                        <td className="py-3.5 px-3 text-center whitespace-nowrap font-bold text-[#032448] font-mono text-sm">
                          {row.amountHeld.toFixed(2)} ₪
                        </td>

                        <td className="py-3.5 px-3 whitespace-nowrap">
                          <div className="text-gray-700 font-medium">{row.age}</div>
                        </td>

                        <td className="py-3.5 px-3 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-0.5 rounded-full font-bold text-[10px] ${row.priorityColor}`}>
                            {row.priority}
                          </span>
                        </td>

                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedDisputeId(row.id);
                            }}
                            className={`px-3 py-1 rounded-lg text-xs font-bold shadow-sm transition-all ${
                              isSelected
                                ? 'bg-[#835400] text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {row.status === 'resolved' ? 'عرض المحضر' : isSelected ? 'قيد النظر الآن' : 'معاينة القرار'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* ARBITRATION DOSSIER & DECISION PANEL (FOCUSED FOR SELECTED ROW) */}
          {selectedDispute && (
            <section className="bg-white rounded-2xl border-2 border-[#12302b]/20 shadow-md p-6 space-y-6">
              {/* Panel Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#12302b] text-[#e9b44c] flex items-center justify-center font-bold text-lg shadow-sm">
                    <span className="material-symbols-outlined text-2xl">gavel</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold text-[#12302b]">
                        جلسة التحكيم المالي: عملية #{selectedDispute.id}
                      </h2>
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                        قيد التحكيم النشط
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">
                      مرتبطة بالشكوى الرسمية رقم <strong className="text-[#1f7a6e]">#{selectedDispute.complaintRef}</strong> • بمبلغ محتجز قدره{' '}
                      <strong className="text-[#12302b] font-mono">{selectedDispute.amountHeld} ₪</strong>
                    </p>
                  </div>
                </div>

                <Link
                  to={`/admin/complaints/${selectedDispute.complaintRef}`}
                  className="px-3.5 py-2 rounded-xl bg-[#1f7a6e]/10 hover:bg-[#1f7a6e]/20 text-[#1f7a6e] font-bold text-xs flex items-center gap-1.5 transition-colors w-fit"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  <span>فتح ملف الشكوى الكامل (A-13)</span>
                </Link>
              </div>

              {/* Two Parties Claims Banner */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Customer Claim */}
                <div className="p-4 bg-teal-50/60 rounded-xl border border-teal-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-teal-900 flex items-center gap-1.5 text-xs">
                      <span className="material-symbols-outlined text-sm">person</span>
                      إفادة العميل: {selectedDispute.customerName}
                    </span>
                    <span className="text-[11px] text-teal-700 font-mono dir-ltr">{selectedDispute.customerPhone}</span>
                  </div>
                  <p className="text-xs text-teal-950 leading-relaxed bg-white/80 p-3 rounded-lg border border-teal-100">
                    "{selectedDispute.customerClaim}"
                  </p>
                </div>

                {/* Merchant Claim */}
                <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-900 flex items-center gap-1.5 text-xs">
                      <span className="material-symbols-outlined text-sm">storefront</span>
                      رد المتجر: {selectedDispute.storeName}
                    </span>
                    <span className="text-[11px] text-amber-700">{selectedDispute.storeLocation}</span>
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed bg-white/80 p-3 rounded-lg border border-amber-100">
                    "{selectedDispute.merchantClaim}"
                  </p>
                </div>
              </div>

              {/* Resolution Status if Already Resolved */}
              {selectedDispute.status === 'resolved' ? (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-950 flex items-start gap-3 text-xs">
                  <span className="material-symbols-outlined text-emerald-600 text-xl shrink-0 mt-0.5">verified</span>
                  <div>
                    <h4 className="font-bold text-emerald-900">هذا النزاع محسوم ومغلق رسمياً</h4>
                    <p className="mt-1 leading-relaxed">{selectedDispute.resolution}</p>
                  </div>
                </div>
              ) : (
                /* Interactive Arbitration Choices & Form */
                <form onSubmit={handleConfirmDecision} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#12302b] mb-2">
                      اختر القرار التحكيمي الملزم:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {/* Option 1: Full Refund Customer */}
                      <label
                        className={`p-3.5 rounded-xl border-2 cursor-pointer flex flex-col justify-between transition-all ${
                          arbitrationDecision === 'refund_customer'
                            ? 'border-emerald-600 bg-emerald-50/60 shadow-sm'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="arbitrationDecision"
                            value="refund_customer"
                            checked={arbitrationDecision === 'refund_customer'}
                            onChange={(e) => setArbitrationDecision(e.target.value)}
                            className="text-emerald-600 focus:ring-emerald-500"
                          />
                          <span className="font-bold text-xs text-emerald-950">إرجاع كامل المبلغ للعميل</span>
                        </div>
                        <span className="text-[11px] text-gray-500 mt-2">
                          إعادة {selectedDispute.amountHeld} ₪ لمحفظة العميل وإلغاء استحقاق المتجر.
                        </span>
                      </label>

                      {/* Option 2: Release to Merchant */}
                      <label
                        className={`p-3.5 rounded-xl border-2 cursor-pointer flex flex-col justify-between transition-all ${
                          arbitrationDecision === 'release_merchant'
                            ? 'border-blue-600 bg-blue-50/60 shadow-sm'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="arbitrationDecision"
                            value="release_merchant"
                            checked={arbitrationDecision === 'release_merchant'}
                            onChange={(e) => setArbitrationDecision(e.target.value)}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                          <span className="font-bold text-xs text-blue-950">الإفراج عن المبلغ للتاجر</span>
                        </div>
                        <span className="text-[11px] text-gray-500 mt-2">
                          تحويل {selectedDispute.amountHeld} ₪ لرصيد المتجر القابل للسحب ورد الشكوى.
                        </span>
                      </label>

                      {/* Option 3: Split 50/50 */}
                      <label
                        className={`p-3.5 rounded-xl border-2 cursor-pointer flex flex-col justify-between transition-all ${
                          arbitrationDecision === 'split_fifty'
                            ? 'border-amber-600 bg-amber-50/60 shadow-sm'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="arbitrationDecision"
                            value="split_fifty"
                            checked={arbitrationDecision === 'split_fifty'}
                            onChange={(e) => setArbitrationDecision(e.target.value)}
                            className="text-amber-600 focus:ring-amber-500"
                          />
                          <span className="font-bold text-xs text-amber-950">تسوية ودية مناصفة (50%)</span>
                        </div>
                        <span className="text-[11px] text-gray-500 mt-2">
                          تقسيم الأمانة: {(selectedDispute.amountHeld / 2).toFixed(2)} ₪ لكل طرف بالتراضي.
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Justification & Notes */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#12302b]">
                      حيثيات الحكم وسند المشرف القانوني <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={arbitrationNotes}
                      onChange={(e) => setArbitrationNotes(e.target.value)}
                      rows="3"
                      placeholder="دوّن أسباب الحكم استناداً إلى أدلة الفحص ومراجعة كود PIN لإثباتها في سجل التدقيق A-18..."
                      className={`w-full p-3 rounded-xl border ${
                        arbitrationError ? 'border-red-500' : 'border-gray-300'
                      } text-xs outline-none focus:border-[#12302b] bg-[#f9f9ff] resize-none`}
                    />
                    {arbitrationError && <span className="text-[11px] text-red-500">{arbitrationError}</span>}
                  </div>

                  {/* Impact Breakdown */}
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-600 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-sm text-[#1f7a6e]">account_balance_wallet</span>
                      <span>الأثر المحاسبي: ترحيل قيد تسوية فوري إلى الدفتر المالي (A-09) وتحديث محفظة PalPay</span>
                    </div>
                    <div className="text-[11px] text-gray-400">
                      سيتم تسجيل القرار باسم المشرف: <strong>أحمد المقيد</strong>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#12302b] hover:bg-[#1f7a6e] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-base text-[#e9b44c]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        gavel
                      </span>
                      <span>إصدار الحكم واعتماده نهائياً</span>
                    </button>
                  </div>
                </form>
              )}
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
