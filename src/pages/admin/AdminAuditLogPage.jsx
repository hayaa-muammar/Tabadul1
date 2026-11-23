import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminAuditLogPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [actionTypeFilter, setActionTypeFilter] = useState('all');
  const [merchantFilter, setMerchantFilter] = useState('all');

  // Selected Log Entry for Cryptographic Verification Modal
  const [selectedLog, setSelectedLog] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  // Initial Audit Log Data (WORM Immutable Records)
  const [logs] = useState([
    {
      id: 'LOG-98241',
      date: '28 أكتوبر 2026',
      time: '14:45:10',
      action: 'اعتماد تسوية مالية',
      actionType: 'finance',
      actionColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      entity: 'متجر أزياء الشرق (#TBD-STR-0102)',
      performedBy: 'أحمد المقيد (المشرف العام)',
      ipAddress: '192.168.10.42 (غزة)',
      note: 'صرف دفعة مستحقة بقيمة 2,450 ₪ بعد اكتمال التسليمات ورمز PIN',
      sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      verified: true,
    },
    {
      id: 'LOG-98239',
      date: '28 أكتوبر 2026',
      time: '14:20:05',
      action: 'تجميد رصيد متنازع عليه',
      actionType: 'dispute',
      actionColor: 'bg-amber-100 text-amber-800 border-amber-200',
      entity: 'طلب #ORD-10482 (بوتيك لمسة)',
      performedBy: 'أحمد المقيد (المشرف العام)',
      ipAddress: '192.168.10.42 (غزة)',
      note: 'تعليق مبلغ 235 ₪ في حساب الأمانات بسبب شكوى استبدال ومقاس خاطئ',
      sha256: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
      verified: true,
    },
    {
      id: 'LOG-98227',
      date: '28 أكتوبر 2026',
      time: '13:55:40',
      action: 'رفض طلب متجر غير مطابق',
      actionType: 'application',
      actionColor: 'bg-red-100 text-red-800 border-red-200',
      entity: 'بوتيك روز باريس (#REQ-091)',
      performedBy: 'أحمد المقيد (المشرف العام)',
      ipAddress: '192.168.10.42 (غزة)',
      note: 'عدم مطابقة بيانات السجل التجاري للشروط المعتمدة في قطاع غزة',
      sha256: 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e',
      verified: true,
    },
    {
      id: 'LOG-98215',
      date: '28 أكتوبر 2026',
      time: '13:10:12',
      action: 'ترقية باقة متجر',
      actionType: 'package',
      actionColor: 'bg-purple-100 text-purple-800 border-purple-200',
      entity: 'إلكترونيات السلام (#M-045)',
      performedBy: 'أحمد المقيد (المشرف العام)',
      ipAddress: '192.168.10.42 (غزة)',
      note: 'ترقية من الباقة الأساسية إلى باقة VIP Pro السنوية',
      sha256: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae',
      verified: true,
    },
    {
      id: 'LOG-98202',
      date: '28 أكتوبر 2026',
      time: '12:30:19',
      action: 'تعديل سقف عمولة تشجيعية',
      actionType: 'rules',
      actionColor: 'bg-blue-100 text-blue-800 border-blue-200',
      entity: 'فئة المخابز والحلويات',
      performedBy: 'أحمد المقيد (المشرف العام)',
      ipAddress: '192.168.10.42 (غزة)',
      note: 'تطبيق نسبة عمولة تشجيعية مؤقتة 2.5% بدلاً من 3%',
      sha256: 'fcde2b2edba56bf408686cf1a7a0b0d3a54fd3f07a0f7e4c9657b077a726fa74',
      verified: true,
    },
    {
      id: 'LOG-98188',
      date: '28 أكتوبر 2026',
      time: '11:45:33',
      action: 'إلغاء نقاط طلب ملغى',
      actionType: 'points',
      actionColor: 'bg-red-100 text-red-800 border-red-200',
      entity: 'محفظة العميل (#C-8821)',
      performedBy: 'نظام آلي (System Bot)',
      ipAddress: '127.0.0.1 (Local Daemon)',
      note: 'خصم 450 نقطة كاش باك بعد إرجاع طلب ملغى بالتراضي',
      sha256: 'dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f',
      verified: true,
    },
  ]);

  // CSV Export
  const handleExportCsv = () => {
    const headers = 'رقم القيد,التاريخ,الوقت,نوع الإجراء,الكيان المتأثر,المنفذ,عنوان IP,الملاحظات,بصمة SHA-256\n';
    const rows = logs
      .map(
        (l) =>
          `"${l.id}","${l.date}","${l.time}","${l.action}","${l.entity}","${l.performedBy}","${l.ipAddress}","${l.note}","${l.sha256}"`
      )
      .join('\n');
    const blob = new Blob(['\uFEFF' + headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tabadul_audit_log_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('تم تصدير سجل التدقيق والامتثال بصيغة CSV بنجاح!');
  };

  const filteredLogs = logs.filter((l) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        l.id.toLowerCase().includes(q) ||
        l.action.toLowerCase().includes(q) ||
        l.entity.toLowerCase().includes(q) ||
        l.ipAddress.includes(q) ||
        l.note.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (actionTypeFilter !== 'all' && l.actionType !== actionTypeFilter) return false;
    if (merchantFilter !== 'all' && !l.entity.includes(merchantFilter)) return false;
    return true;
  });

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
      <AdminSidebar activeItem="audit-log" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

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
                <span className="text-gray-400">الحوكمة والامتثال</span>
                <span className="material-symbols-outlined text-xs">chevron_left</span>
                <span className="text-[#12302b] font-bold">سجل الإجراءات الإدارية (A-18)</span>
              </nav>
              <h1 className="text-base sm:text-lg font-bold text-[#12302b]">
                سجل التدقيق والامتثال الإداري (A-18)
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-xs font-bold text-[#12302b]"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              <span>طباعة</span>
            </button>
            <button
              onClick={handleExportCsv}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#12302b] hover:bg-[#183d37] text-white text-xs font-bold shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base text-[#e9b44c]">download</span>
              <span>تصدير CSV</span>
            </button>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1440px] mx-auto w-full">
          {/* STRICT IMMUTABLE REGULATORY COMPLIANCE BANNER */}
          <section className="bg-[#12302b] text-white rounded-2xl p-5 shadow-sm border border-[#1f7a6e]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden">
            <div className="flex items-start gap-3.5 z-10">
              <div className="w-10 h-10 rounded-xl bg-[#e9b44c]/20 border border-[#e9b44c]/40 flex items-center justify-center text-[#e9b44c] shrink-0">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm sm:text-base font-bold text-white">
                    سجل تدقيق رقابي غير قابل للتعديل أو الحذف (WORM - Write Once, Read Many)
                  </h2>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1f7a6e] text-emerald-100">
                    بروتوكول حظر الإلغاء نشط
                  </span>
                </div>
                <p className="text-xs text-white/70 mt-1 leading-relaxed max-w-3xl">
                  كافة السجلات موثقة ومحمية رقمياً بالختم الزمني المشفر وموقعة إلكترونياً بالتوافق مع المعايير الدولية للحوكمة المحاسبية ومكافحة التلاعب المالي.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl border border-white/10 text-white/80 text-xs shrink-0 self-end sm:self-center">
              <span className="material-symbols-outlined text-sm text-[#e9b44c]">lock</span>
              <span>وضع القراءة الإلزامية فقط (Read-Only)</span>
            </div>
          </section>

          {/* COMPREHENSIVE FILTERS BAR */}
          <section className="bg-white rounded-2xl p-4 border border-[#e4dfd3] shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center text-xs">
              {/* Search */}
              <div className="sm:col-span-5 relative">
                <span className="material-symbols-outlined absolute right-3 top-2.5 text-gray-400 text-lg">search</span>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-9 pl-3 py-2 bg-[#f6f3ec]/60 border border-[#e4dfd3] rounded-xl text-[#12302b] placeholder:text-gray-400 focus:bg-white outline-none"
                  placeholder="بحث برقم القيد (#LOG)، الكيان، السبب، أو عنوان IP..."
                  type="text"
                />
              </div>

              {/* Action Filter */}
              <div className="sm:col-span-4">
                <select
                  value={actionTypeFilter}
                  onChange={(e) => setActionTypeFilter(e.target.value)}
                  className="w-full py-2 px-3 bg-white border border-[#e4dfd3] rounded-xl font-bold text-[#12302b] outline-none"
                >
                  <option value="all">كافة الإجراءات (الكل)</option>
                  <option value="finance">اعتماد تسوية مالية / صرف</option>
                  <option value="dispute">قرار نزاع وتحكيم فوري</option>
                  <option value="application">قبول أو رفض متجر جديد</option>
                  <option value="package">ترقية باقة واشتراك</option>
                  <option value="rules">تعديل سياسات وقواعد نقاط</option>
                  <option value="points">تسوية نقاط ومكافآت</option>
                </select>
              </div>

              {/* Merchant Filter */}
              <div className="sm:col-span-3">
                <select
                  value={merchantFilter}
                  onChange={(e) => setMerchantFilter(e.target.value)}
                  className="w-full py-2 px-3 bg-white border border-[#e4dfd3] rounded-xl font-bold text-[#12302b] outline-none"
                >
                  <option value="all">كافة الكيانات والمتاجر</option>
                  <option value="أزياء الشرق">متجر أزياء الشرق</option>
                  <option value="لمسة">بوتيك لمسة فاشون</option>
                  <option value="روز باريس">بوتيك روز باريس</option>
                  <option value="السلام">إلكترونيات السلام</option>
                </select>
              </div>
            </div>
          </section>

          {/* AUDIT EVENTS TABLE */}
          <div className="bg-white rounded-2xl border border-[#e4dfd3] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse text-xs">
                <thead>
                  <tr className="bg-[#faf8f4] text-gray-600 font-bold border-b border-[#e6e2d8] whitespace-nowrap">
                    <th className="py-3 px-4">رقم القيد والوقت</th>
                    <th className="py-3 px-3">نوع الإجراء</th>
                    <th className="py-3 px-3">الكيان المتأثر</th>
                    <th className="py-3 px-3">المنفذ وعنوان IP</th>
                    <th className="py-3 px-3">حيثيات الإجراء والملاحظات</th>
                    <th className="py-3 px-4 text-center">بصمة التشفير (SHA-256)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ece8df]">
                  {filteredLogs.map((log) => (
                    <tr
                      key={log.id}
                      onClick={() => setSelectedLog(log)}
                      className="hover:bg-gray-50/80 transition-colors cursor-pointer"
                    >
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="font-bold font-mono text-[#12302b]">{log.id}</div>
                        <div className="text-[11px] text-gray-400">
                          {log.date} • {log.time}
                        </div>
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <span className={`inline-flex px-2.5 py-1 rounded-full font-bold text-[10px] border ${log.actionColor}`}>
                          {log.action}
                        </span>
                      </td>

                      <td className="py-3.5 px-3">
                        <div className="font-bold text-[#12302b]">{log.entity}</div>
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <div className="font-bold text-[#191c22]">{log.performedBy}</div>
                        <div className="text-[11px] text-gray-400 font-mono dir-ltr text-right">{log.ipAddress}</div>
                      </td>

                      <td className="py-3.5 px-3 max-w-sm">
                        <div className="text-gray-700 leading-relaxed truncate" title={log.note}>
                          {log.note}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-mono text-[10px] border border-emerald-200 font-bold hover:bg-emerald-100 transition-colors">
                          <span className="material-symbols-outlined text-[12px] text-emerald-600">fingerprint</span>
                          <span>{log.sha256.slice(0, 10)}...</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3.5 bg-[#faf8f4] border-t border-[#e6e2d8] flex items-center justify-between text-xs text-gray-500">
              <span>عرض {filteredLogs.length} سجل من أصل {logs.length} حدث تدقيقي موثق</span>
              <span className="text-emerald-700 font-bold">100% تطابق سلامة السجلات الرقمية</span>
            </div>
          </div>
        </div>
      </main>

      {/* CRYPTOGRAPHIC VERIFICATION MODAL */}
      {selectedLog && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-5 bg-[#12302b] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-2xl text-[#e9b44c]">verified_user</span>
                <div>
                  <h3 className="font-bold text-base">سند التدقيق الرقمي: {selectedLog.id}</h3>
                  <p className="text-xs text-white/70">WORM Cryptographic Immutable Proof</p>
                </div>
              </div>
              <button onClick={() => setSelectedLog(null)} className="text-white/70 hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-xl">check_circle</span>
                <span className="font-bold">تم التحقق من سلامة البصمة المشفرة بنجاح - القيد أصلي وغير معدل</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-400">الإجراء:</span>
                  <span className="font-bold text-[#12302b]">{selectedLog.action}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-400">الكيان:</span>
                  <span className="font-bold text-[#12302b]">{selectedLog.entity}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-400">المنفذ:</span>
                  <span className="font-bold text-[#12302b]">{selectedLog.performedBy}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-400">الوقت والتاريخ:</span>
                  <span className="font-mono text-gray-700">{selectedLog.date} • {selectedLog.time}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-400">عنوان IP:</span>
                  <span className="font-mono text-gray-700 dir-ltr">{selectedLog.ipAddress}</span>
                </div>
              </div>

              <div>
                <span className="text-gray-400 block mb-1">الملاحظات المسجلة:</span>
                <div className="p-3 bg-[#f6f3ec] rounded-xl border border-gray-200 text-gray-800 leading-relaxed">
                  {selectedLog.note}
                </div>
              </div>

              <div>
                <span className="text-gray-400 block mb-1">بصمة التجزئة الرقمية (SHA-256 Hash):</span>
                <div className="p-2.5 bg-gray-900 text-emerald-400 font-mono text-[11px] rounded-xl break-all">
                  {selectedLog.sha256}
                </div>
              </div>

              <div className="flex items-center justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedLog(null)}
                  className="px-5 py-2 rounded-xl bg-[#12302b] text-white font-bold"
                >
                  إغلاق السند
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
