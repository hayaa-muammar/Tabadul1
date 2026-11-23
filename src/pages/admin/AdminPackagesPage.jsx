import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminPackagesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // VIP Plan price configuration
  const [planPrice, setPlanPrice] = useState('79');
  const [isSaved, setIsSaved] = useState(true);

  // Subscribers Table Data
  const [subscribers, setSubscribers] = useState([
    {
      id: 'SUB-101',
      storeName: 'بوتيك لمسة فاشون',
      storeCode: 'TBD-STR-0482',
      startDate: '1 أكتوبر 2026',
      renewalDate: '1 نوفمبر 2026',
      daysRemaining: 4,
      amount: 79,
      method: 'خصم تلقائي من الرصيد',
      status: 'active',
      statusLabel: 'نشط',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
      id: 'SUB-102',
      storeName: 'دار الأناقة للأزياء',
      storeCode: 'TBD-STR-0519',
      startDate: '15 أكتوبر 2026',
      renewalDate: '15 نوفمبر 2026',
      daysRemaining: 18,
      amount: 79,
      method: 'خصم تلقائي من الرصيد',
      status: 'active',
      statusLabel: 'نشط',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
      id: 'SUB-103',
      storeName: 'أحذية النصر كلاسيك',
      storeCode: 'TBD-STR-0610',
      startDate: '28 سبتمبر 2026',
      renewalDate: '28 أكتوبر 2026',
      daysRemaining: 0,
      amount: 79,
      method: 'محفظة PalPay',
      status: 'pending_renewal',
      statusLabel: 'مستحق التجديد اليوم',
      statusColor: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    {
      id: 'SUB-104',
      storeName: 'ريماس للملابس التركية',
      storeCode: 'TBD-STR-0804',
      startDate: '10 أكتوبر 2026',
      renewalDate: '10 نوفمبر 2026',
      daysRemaining: 13,
      amount: 79,
      method: 'خصم تلقائي من الرصيد',
      status: 'active',
      statusLabel: 'نشط',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
    {
      id: 'SUB-105',
      storeName: 'سنيكرز فوتوير',
      storeCode: 'TBD-STR-0881',
      startDate: '22 سبتمبر 2026',
      renewalDate: '22 أكتوبر 2026',
      daysRemaining: -6,
      amount: 79,
      method: 'محفظة PalPay',
      status: 'overdue',
      statusLabel: 'متأخر 6 أيام',
      statusColor: 'bg-red-100 text-red-800 border-red-300',
    },
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  const handleSavePlanPrice = (e) => {
    e.preventDefault();
    if (!planPrice || isNaN(planPrice) || Number(planPrice) <= 0) {
      showToast('يرجى إدخال سعر اشتراك صحيح.');
      return;
    }
    setIsSaved(true);
    showToast(`تم تحديث سعر باقة VIP Pro إلى ${planPrice} ₪ وتوثيقها في سجل التدقيق A-18 بنجاح!`);
  };

  const handleRenewStore = (storeId) => {
    setSubscribers((prev) =>
      prev.map((s) =>
        s.id === storeId
          ? {
              ...s,
              status: 'active',
              statusLabel: 'تم التجديد بنجاح',
              statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
              renewalDate: '28 نوفمبر 2026',
              daysRemaining: 30,
            }
          : s
      )
    );
    showToast('تم تجديد اشتراك المتجر بنجاح وخصم الرسوم من المحفظة');
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
      <AdminSidebar activeItem="packages" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      {/* Main Workspace */}
      <main className="flex-1 lg:mr-64 flex flex-col min-w-0 pb-16">
        {/* Sticky Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 lg:px-8 py-3.5 border-b border-[#e6e2d8] flex items-center justify-between shadow-sm">
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
                <span className="text-[#12302b] font-bold">إدارة الباقات والاشتراكات (A-20)</span>
              </nav>
              <h1 className="text-base sm:text-lg font-bold text-[#12302b]">
                إدارة باقات المتاجر والاشتراكات الشهرية
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/admin/audit-log"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#12302b] hover:bg-[#183d37] text-white rounded-xl text-xs font-bold shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base text-[#e9b44c]">history_edu</span>
              <span>سجل التدقيق A-18</span>
            </Link>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1200px] mx-auto w-full">
          {/* 4 SUMMARY METRICS */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Metric 1 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">مشتركو باقة VIP Pro</span>
                <div className="w-10 h-10 rounded-xl bg-[#12302b]/10 text-[#12302b] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">diamond</span>
                </div>
              </div>
              <div className="mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#12302b]">18</span>
                <span className="text-xs text-gray-500 mr-1.5 font-medium">متجر نشط</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                <span className="material-symbols-outlined text-xs">trending_up</span>
                <span>+2 متاجر جديدة هذا الأسبوع</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">الإيراد الشهري المحصل</span>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#835400] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    payments
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#12302b]">1,422</span>
                <span className="text-xs text-gray-500 mr-1.5 font-medium">₪ / شهرياً</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-[11px] text-gray-500">
                <span className="text-emerald-700 font-bold">100%</span>
                <span>نسبة تحصيل الالتزامات</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">معلقة أو بانتظار التجديد</span>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">pending_actions</span>
                </div>
              </div>
              <div className="mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#835400]">3</span>
                <span className="text-xs text-gray-500 mr-1.5 font-medium">متاجر خلال 7 أيام</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-[11px] text-amber-700 font-bold">
                <span className="material-symbols-outlined text-xs">notifications_active</span>
                <span>تم إرسال إشعارات التجديد</span>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">معدل تجديد الاشتراكات</span>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1f7a6e] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">autorenew</span>
                </div>
              </div>
              <div className="mt-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#1f7a6e]">92%</span>
                <span className="text-xs text-gray-500 mr-1.5 font-medium">معدل استبقاء شهري</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-[11px] text-emerald-700 font-bold">
                <span className="material-symbols-outlined text-xs">verified</span>
                <span>استقرار وموثوقية تشغيلية</span>
              </div>
            </div>
          </section>

          {/* 1. SINGLE PLAN CONFIGURATION CARD */}
          <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#12302b] to-[#1f7a6e] flex items-center justify-center text-[#e9b44c] shadow-lg shadow-[#12302b]/10 shrink-0">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    diamond
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-[#12302b]">باقة التاجر المميز VIP Pro</h2>
                    <span className="bg-[#e9b44c]/15 text-[#835400] border border-[#e9b44c]/30 text-[11px] px-2.5 py-0.5 rounded-full font-bold">
                      الباقة المعتمدة حالياً في V1
                    </span>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] px-2 py-0.5 rounded-full font-bold">
                      نشطة
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    الاشتراك المهني الاختياري لتمكين المتاجر من امتيازات الظهور والحملات الترويجية المتقدمة.
                  </p>
                </div>
              </div>

              {/* Price Form */}
              <form onSubmit={handleSavePlanPrice} className="bg-[#f6f3ec] rounded-2xl p-4 border border-gray-200 flex items-center gap-4 text-xs">
                <div>
                  <label className="block text-gray-600 font-medium mb-1">سعر الاشتراك الشهري</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      value={planPrice}
                      onChange={(e) => {
                        setPlanPrice(e.target.value);
                        setIsSaved(false);
                      }}
                      className="w-24 h-10 text-center font-bold font-mono text-base text-[#12302b] bg-white border border-gray-300 rounded-xl outline-none focus:border-[#1f7a6e]"
                      type="number"
                    />
                    <span className="font-bold text-gray-500">₪ / شهرياً</span>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSaved}
                  className="h-10 px-4 mt-4 bg-[#12302b] hover:bg-[#1f7a6e] text-white font-bold rounded-xl disabled:opacity-50 transition-all flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">save</span>
                  <span>حفظ السعر</span>
                </button>
              </form>
            </div>

            {/* Perks Checklist */}
            <div>
              <h3 className="font-bold text-xs text-[#12302b] uppercase tracking-wider mb-3">
                المزايا المضمنة في باقة VIP Pro:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-[#faf8f4] rounded-xl border border-gray-200 flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#1f7a6e]">verified</span>
                  <span className="font-bold text-[#12302b]">شارة التاجر المعتمد الذهبية</span>
                </div>
                <div className="p-3 bg-[#faf8f4] rounded-xl border border-gray-200 flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#1f7a6e]">stars</span>
                  <span className="font-bold text-[#12302b]">صلاحية إطلاق عروض الكاش باك 2X</span>
                </div>
                <div className="p-3 bg-[#faf8f4] rounded-xl border border-gray-200 flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#1f7a6e]">trending_up</span>
                  <span className="font-bold text-[#12302b]">أولوية الظهور في نتائج البحث الميداني</span>
                </div>
                <div className="p-3 bg-[#faf8f4] rounded-xl border border-gray-200 flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#1f7a6e]">support_agent</span>
                  <span className="font-bold text-[#12302b]">خط دعم هاتفي مالي مخصص</span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. SUBSCRIBER MERCHANTS TABLE */}
          <section className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-[#12302b]">
                  سجل اشتراكات المتاجر النشطة
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  متابعة تجديد الاشتراكات الدورية وسندات التحصيل
                </p>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full font-bold text-xs">
                18 متجر مفعل
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse text-xs">
                <thead>
                  <tr className="bg-[#faf8f4] text-gray-600 font-bold border-b border-gray-200 whitespace-nowrap">
                    <th className="py-3 px-4">المتجر المشترك</th>
                    <th className="py-3 px-3">تاريخ الاشتراك</th>
                    <th className="py-3 px-3">موعد التجديد القادم</th>
                    <th className="py-3 px-3 text-center">الرسم الشهري</th>
                    <th className="py-3 px-3">طريقة التحصيل</th>
                    <th className="py-3 px-3 text-center">الحالة</th>
                    <th className="py-3 px-4 text-center">الإجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {subscribers.map((sub) => (
                    <tr key={sub.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="font-bold text-[#12302b]">{sub.storeName}</div>
                        <div className="text-[11px] text-gray-400 font-mono">#{sub.storeCode}</div>
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap text-gray-600">
                        {sub.startDate}
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <div className="font-bold text-[#12302b]">{sub.renewalDate}</div>
                        <div className="text-[11px] text-gray-400">
                          {sub.daysRemaining > 0
                            ? `متبقي ${sub.daysRemaining} يوماً`
                            : sub.daysRemaining === 0
                            ? 'مستحق اليوم'
                            : `متأخر ${Math.abs(sub.daysRemaining)} يوماً`}
                        </div>
                      </td>

                      <td className="py-3.5 px-3 text-center whitespace-nowrap font-mono font-bold text-[#12302b]">
                        {sub.amount} ₪
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap text-gray-600">
                        {sub.method}
                      </td>

                      <td className="py-3.5 px-3 text-center whitespace-nowrap">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full font-bold text-[10px] border ${sub.statusColor}`}>
                          {sub.statusLabel}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        {sub.status !== 'active' ? (
                          <button
                            onClick={() => handleRenewStore(sub.id)}
                            className="px-3 py-1.5 rounded-lg bg-[#12302b] hover:bg-[#1f7a6e] text-white font-bold text-[11px] shadow-sm flex items-center gap-1 mx-auto"
                          >
                            <span className="material-symbols-outlined text-xs">autorenew</span>
                            <span>تجديد الآن</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => showToast(`تم إرسال إشعار تذكير بالتجديد إلى ${sub.storeName}`)}
                            className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-600"
                            title="إرسال إشعار تذكير"
                          >
                            <span className="material-symbols-outlined text-base">notifications</span>
                          </button>
                        )}
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
