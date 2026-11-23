import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminRulesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Form Settings State
  const defaultSettings = {
    earnRate: '10', // 10 points per 1 ILS (5%)
    pointValue: '200', // 200 points = 1 ILS
    crossStoreDiscount: '20', // 20%
    pointsExpiryDays: '30',
    minRedeemPoints: '100',
    escrowHours: '48',
    requirePin: true,
    payoutCycleHours: '24',
    platformCommissionPercent: '3.0',
    vipSubscriptionPrice: '79',
  };

  const [settings, setSettings] = useState({ ...defaultSettings });
  const [hasChanges, setHasChanges] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  const handleChange = (field, value) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handleReset = () => {
    setSettings({ ...defaultSettings });
    setHasChanges(false);
    showToast('تمت استعادة الإعدادات الافتراضية للنظام بنجاح');
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsConfirmModalOpen(true);
  };

  const confirmSaveSettings = () => {
    setIsConfirmModalOpen(false);
    setHasChanges(false);
    showToast('تم اعتماد وتعميم السياسات الجديدة وتوثيقها في سجل التدقيق A-18 بنجاح!');
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
      <AdminSidebar activeItem="rules" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      {/* Main Workspace */}
      <main className="flex-1 lg:mr-64 flex flex-col min-w-0 pb-24">
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
                <span className="text-[#12302b] font-bold">قواعد النقاط والإعدادات العامة (A-16)</span>
              </nav>
              <h1 className="text-base sm:text-lg font-bold text-[#12302b]">
                إعدادات منظومة تبادل وقواعد النقاط
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="px-3.5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 text-xs font-bold text-gray-700 flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">restart_alt</span>
              <span>استعادة الافتراضي</span>
            </button>
            <Link
              to="/admin/audit-log"
              className="px-3.5 py-2 bg-[#12302b] hover:bg-[#183d37] text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm text-[#e9b44c]">history_edu</span>
              <span>سجل الإجراءات A-18</span>
            </Link>
          </div>
        </header>

        {/* Content Canvas */}
        <form onSubmit={handleSave} className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1140px] mx-auto w-full">
          {/* Status Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-l from-[#12302b] to-[#1f7a6e] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#e9b44c]/20 border border-[#e9b44c]/40 flex items-center justify-center text-[#e9b44c] shrink-0">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base text-white">
                  السياسات الحالية مطبقة على 48 متجر شريك نشط في قطاع غزة
                </div>
                <div className="text-xs text-white/70 mt-0.5">
                  آخر مزامنة للمعاملات المالية الميدانية تمت اليوم الساعة 11:30 صباحاً وفق الدفتر المحاسبي الموحد.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs bg-white/10 px-3 py-1.5 rounded-xl border border-white/15 w-fit">
              <span className="material-symbols-outlined text-base text-[#e9b44c]">lock_clock</span>
              <span>جلسة المشرف موثقة بالبصمة</span>
            </div>
          </div>

          {/* CARD 1: Points Tokenomics */}
          <section className="bg-white rounded-2xl border border-[#e4dfd3] shadow-sm overflow-hidden">
            <div className="p-5 border-b border-[#e4dfd3] bg-[#fcfbf8] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#e9b44c]/15 text-[#835400] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-xl">toll</span>
                </span>
                <div>
                  <h2 className="text-base font-bold text-[#12302b]">
                    1. إعدادات ومعايير نقاط الولاء (Points Tokenomics)
                  </h2>
                  <p className="text-xs text-gray-500">
                    تحديد معدلات الاكتساب والتحويل النقدي والقيود الزمنية للرصيد المشترك
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 bg-amber-50 text-[#835400] border border-amber-200 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">shield</span> معايير حساسة
              </span>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
              {/* Field 1 */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-[#12302b]">معدل كسب النقاط للعميل</label>
                  <span className="text-[11px] font-bold text-[#1f7a6e]">5% كاش باك</span>
                </div>
                <div className="relative">
                  <input
                    value={settings.earnRate}
                    onChange={(e) => handleChange('earnRate', e.target.value)}
                    className="w-full px-3.5 py-2.5 font-bold text-[#12302b] bg-[#f6f3ec]/50 border border-[#e4dfd3] rounded-xl outline-none focus:border-[#1f7a6e]"
                    type="number"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400 font-medium">نقاط لكل 1 ₪</span>
                </div>
                <p className="text-[11px] text-gray-500">يحصل العميل على 100 نقطة عند شراء بقيمة 10 شيكل.</p>
              </div>

              {/* Field 2 */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-[#12302b]">القيمة النقدية للنقاط عند الشراء</label>
                  <span className="text-[11px] font-bold text-gray-500">ثابت الصرف</span>
                </div>
                <div className="relative">
                  <input
                    value={settings.pointValue}
                    onChange={(e) => handleChange('pointValue', e.target.value)}
                    className="w-full px-3.5 py-2.5 font-bold text-[#12302b] bg-[#f6f3ec]/50 border border-[#e4dfd3] rounded-xl outline-none focus:border-[#1f7a6e]"
                    type="number"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400 font-medium">نقطة = 1 ₪</span>
                </div>
                <p className="text-[11px] text-gray-500">1,000 نقطة تعادل 5 شيكل عند الاستبدال.</p>
              </div>

              {/* Field 3 */}
              <div className="space-y-1.5 bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-[#12302b] flex items-center gap-1">
                    <span>معامل التخفيض البيني</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  </label>
                  <span className="text-[11px] font-bold text-amber-800">حماية سيولة المتاجر</span>
                </div>
                <div className="relative">
                  <input
                    value={settings.crossStoreDiscount}
                    onChange={(e) => handleChange('crossStoreDiscount', e.target.value)}
                    className="w-full px-3.5 py-2.5 font-bold text-[#12302b] bg-white border border-amber-300 rounded-xl outline-none focus:border-amber-500"
                    type="number"
                  />
                  <span className="absolute left-3 top-2.5 text-amber-900 font-bold">%</span>
                </div>
                <p className="text-[11px] text-amber-800 leading-tight">
                  خصم تشغيلي عند صرف النقاط في متجر شريك مختلف عن متجر الاكتساب.
                </p>
              </div>

              {/* Field 4 */}
              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">مدة صلاحية النقاط المكتسبة</label>
                <div className="relative">
                  <input
                    value={settings.pointsExpiryDays}
                    onChange={(e) => handleChange('pointsExpiryDays', e.target.value)}
                    className="w-full px-3.5 py-2.5 font-bold text-[#12302b] bg-[#f6f3ec]/50 border border-[#e4dfd3] rounded-xl outline-none focus:border-[#1f7a6e]"
                    type="number"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400 font-medium">يوماً</span>
                </div>
                <p className="text-[11px] text-gray-500">تجدد تلقائياً عند أي حركة شراء جديدة بالمحفظة.</p>
              </div>

              {/* Field 5 */}
              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">الحد الأدنى لاستبدال النقاط</label>
                <div className="relative">
                  <input
                    value={settings.minRedeemPoints}
                    onChange={(e) => handleChange('minRedeemPoints', e.target.value)}
                    className="w-full px-3.5 py-2.5 font-bold text-[#12302b] bg-[#f6f3ec]/50 border border-[#e4dfd3] rounded-xl outline-none focus:border-[#1f7a6e]"
                    type="number"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400 font-medium">نقطة (0.5 ₪)</span>
                </div>
                <p className="text-[11px] text-gray-500">أقل رصيد مسموح بخصمه من فاتورة الشراء.</p>
              </div>
            </div>
          </section>

          {/* CARD 2: Escrow & PIN Protection */}
          <section className="bg-white rounded-2xl border border-[#e4dfd3] shadow-sm overflow-hidden">
            <div className="p-5 border-b border-[#e4dfd3] bg-[#fcfbf8] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#1f7a6e]/15 text-[#1f7a6e] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-xl">shield_lock</span>
                </span>
                <div>
                  <h2 className="text-base font-bold text-[#12302b]">
                    2. شروط دورة الطلب والضمان (Escrow & PIN Protection)
                  </h2>
                  <p className="text-xs text-gray-500">
                    ضوابط الأمانات المحتجزة وحماية التسليم الفعلي لطلبات الأزياء
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">مهلة حسم النزاع واستلام الطرد</label>
                <div className="relative">
                  <input
                    value={settings.escrowHours}
                    onChange={(e) => handleChange('escrowHours', e.target.value)}
                    className="w-full px-3.5 py-2.5 font-bold text-[#12302b] bg-[#f6f3ec]/50 border border-[#e4dfd3] rounded-xl outline-none focus:border-[#1f7a6e]"
                    type="number"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400 font-medium">ساعة (يومان)</span>
                </div>
                <p className="text-[11px] text-gray-500">فترة بقاء المبلغ في الضمان قبل الصرف التلقائي.</p>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">دورة تحويل المستحقات للتجار</label>
                <div className="relative">
                  <input
                    value={settings.payoutCycleHours}
                    onChange={(e) => handleChange('payoutCycleHours', e.target.value)}
                    className="w-full px-3.5 py-2.5 font-bold text-[#12302b] bg-[#f6f3ec]/50 border border-[#e4dfd3] rounded-xl outline-none focus:border-[#1f7a6e]"
                    type="number"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400 font-medium">ساعة (دورة يومية)</span>
                </div>
                <p className="text-[11px] text-gray-500">جدولة أوامر الصرف عبر PalPay يومياً.</p>
              </div>

              <div className="space-y-1.5 p-3 rounded-xl bg-teal-50 border border-teal-200 flex flex-col justify-between">
                <div>
                  <span className="font-bold text-teal-900 block">إلزامية رمز PIN عند التسليم</span>
                  <span className="text-[11px] text-teal-800">
                    لا يتم تحرير الأمانة للمتجر إلا بعد إدخال كود PIN السري الممنوح للزبون.
                  </span>
                </div>
                <span className="text-emerald-700 font-bold flex items-center gap-1 mt-2 text-[11px]">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                  مفعّل بصورة إلزامية في كافة المتاجر
                </span>
              </div>
            </div>
          </section>

          {/* CARD 3: Commissions & Subscriptions */}
          <section className="bg-white rounded-2xl border border-[#e4dfd3] shadow-sm overflow-hidden">
            <div className="p-5 border-b border-[#e4dfd3] bg-[#fcfbf8] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-xl">percent</span>
                </span>
                <div>
                  <h2 className="text-base font-bold text-[#12302b]">
                    3. عمولات المنصة والتسويات المالية (Platform Fees)
                  </h2>
                  <p className="text-xs text-gray-500">
                    نسبة الاستقطاع ورسوم باقات الاشتراك لشركاء المنصة
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">نسبة عمولة الوساطة الأساسية</label>
                <div className="relative">
                  <input
                    value={settings.platformCommissionPercent}
                    onChange={(e) => handleChange('platformCommissionPercent', e.target.value)}
                    className="w-full px-3.5 py-2.5 font-bold text-[#12302b] bg-[#f6f3ec]/50 border border-[#e4dfd3] rounded-xl outline-none focus:border-[#1f7a6e]"
                    type="number"
                    step="0.1"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400 font-bold">% لكل عملية بيع</span>
                </div>
                <p className="text-[11px] text-gray-500">تستقطع تلقائياً من قيمة الطلب المسلم برمز PIN.</p>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">رسم اشتراك باقة VIP Pro الشهري</label>
                <div className="relative">
                  <input
                    value={settings.vipSubscriptionPrice}
                    onChange={(e) => handleChange('vipSubscriptionPrice', e.target.value)}
                    className="w-full px-3.5 py-2.5 font-bold text-[#12302b] bg-[#f6f3ec]/50 border border-[#e4dfd3] rounded-xl outline-none focus:border-[#1f7a6e]"
                    type="number"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400 font-bold">₪ / شهرياً</span>
                </div>
                <p className="text-[11px] text-gray-500">الاشتراك الاختياري لترقية مزايا متجر الشريك.</p>
              </div>
            </div>
          </section>

          {/* UNSAVED CHANGES FLOATING BAR */}
          {hasChanges && (
            <div className="fixed bottom-6 right-6 lg:right-72 left-6 z-40 bg-[#12302b] text-white p-4 rounded-2xl shadow-2xl border border-[#e9b44c] flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#e9b44c] text-2xl animate-spin">sync</span>
                <div>
                  <h4 className="font-bold text-sm text-white">لديك تعديلات غير محفوظة على قواعد النظام!</h4>
                  <p className="text-xs text-white/70">
                    لن يتم تفعيل المعايير الجديدة حتى تقوم بتأكيد الحفظ واعتمادها برقم قيد رقابي.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-xs font-bold transition-colors"
                >
                  إلغاء التعديلات
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#e9b44c] hover:bg-[#d8a238] text-[#12302b] font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">save</span>
                  <span>حفظ واعتماد التعديلات</span>
                </button>
              </div>
            </div>
          )}
        </form>
      </main>

      {/* CONFIRMATION SAVE MODAL */}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-gray-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-5 bg-[#12302b] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-2xl text-[#e9b44c]">security</span>
                <h3 className="font-bold text-base">تأكيد تعديل السياسات والقواعد</h3>
              </div>
              <button onClick={() => setIsConfirmModalOpen(false)} className="text-white/70 hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 leading-relaxed">
                تنبيه: سيتم تطبيق التعديلات فوراً على كافة حسابات العملاء ومحفظة الـ 48 متجر شريك، وسيتم تسجيل العملية باسم المشرف العام (<strong>أحمد المقيد</strong>) في سجل الامتثال <strong>A-18</strong>.
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-gray-50">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="material-symbols-outlined text-[#1f7a6e] text-base">verified_user</span>
                  <span>بصمة التوثيق الأمني (2FA)</span>
                </div>
                <span className="text-emerald-700 font-bold text-[11px]">متحقق منها</span>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsConfirmModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold"
                >
                  تراجع
                </button>
                <button
                  type="button"
                  onClick={confirmSaveSettings}
                  className="px-5 py-2 rounded-xl bg-[#12302b] hover:bg-[#1f7a6e] text-white font-bold shadow-sm"
                >
                  تأكيد وتعميم السياسات
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
