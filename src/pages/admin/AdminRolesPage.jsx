import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminRolesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Add Delegate Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [delegateName, setDelegateName] = useState('');
  const [delegateEmail, setDelegateEmail] = useState('');
  const [delegateRole, setDelegateRole] = useState('financial_auditor');
  const [formError, setFormError] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  const handleAddDelegate = (e) => {
    e.preventDefault();
    setFormError('');

    if (!delegateName.trim() || delegateName.trim().length < 3) {
      setFormError('يرجى إدخال اسم الموظف المفوض (3 أحرف على الأقل).');
      return;
    }
    if (!delegateEmail.trim() || !delegateEmail.includes('@')) {
      setFormError('يرجى إدخال بريد إلكتروني صالح يتبع نطاق المؤسسة.');
      return;
    }

    setIsAddModalOpen(false);
    showToast(`تم تسجيل طلب تفويض جديد للمستخدم "${delegateName}" وسيتم تفعيله مع إصدار V2 وفق خطة الصلاحيات المتعددة.`);
    setDelegateName('');
    setDelegateEmail('');
  };

  const permissions = [
    { title: 'اعتماد المتاجر ومراجعة التراخيص', code: 'A-03 / A-06', icon: 'verified' },
    { title: 'التحكيم وفض النزاعات المالية', code: 'A-11 / A-12', icon: 'gavel' },
    { title: 'إدارة الدفتر المالي والتسويات', code: 'A-09', icon: 'menu_book' },
    { title: 'ضبط معايير النقاط والولاء', code: 'A-16', icon: 'tune' },
    { title: 'الاطلاع الكامل على سجل التدقيق', code: 'A-18', icon: 'receipt_long' },
    { title: 'إدارة مفاتيح الربط وتشفير البيانات', code: 'Security Engine', icon: 'security' },
  ];

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
      <AdminSidebar activeItem="roles" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

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
                <span className="text-[#12302b] font-bold">الأدوار والصلاحيات (A-17)</span>
              </nav>
              <h1 className="text-base sm:text-lg font-bold text-[#12302b]">
                سياسة الحوكمة والأدوار الإدارية
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#12302b] hover:bg-[#1f7a6e] text-white rounded-xl text-xs font-bold shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base text-[#e9b44c]">person_add</span>
              <span>طلب تفويض إداري (V2)</span>
            </button>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1140px] mx-auto w-full">
          {/* V1 Single-Admin Architecture Notice */}
          <section className="bg-gradient-to-l from-[#12302b] to-[#1f7a6e] text-white rounded-2xl p-5 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#e9b44c]/20 border border-[#e9b44c]/40 flex items-center justify-center text-[#e9b44c] shrink-0">
                <span className="material-symbols-outlined text-2xl">shield</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-white">معمارية المشرف الأحادي (V1 Single Super-Admin Policy)</h2>
                  <span className="px-2 py-0.5 rounded bg-emerald-400 text-[#12302b] font-bold text-[10px]">
                    قيد التشغيل الرسمي
                  </span>
                </div>
                <p className="text-xs text-white/80 mt-1 leading-relaxed max-w-3xl">
                  وفق معمارية الإصدار الأول V1، يعمل النظام بصلاحية المشرف الأحادي (Single Super-Admin) لضمان أقصى درجات الانضباط المالي في قطاع غزة وتفادي تضارب قرارات التحكيم، مع تسجيل كل حركة إدارية في سجل التدقيق غير القابل للتعديل A-18.
                </p>
              </div>
            </div>
          </section>

          {/* SUPER ADMIN DOSSIER CARD */}
          <section className="bg-white rounded-2xl border border-[#e4dfd3] shadow-sm p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#12302b] text-[#e9b44c] flex items-center justify-center font-bold text-xl shadow-md">
                  أم
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[#12302b]">أحمد المقيد</h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#e9b44c]/20 text-[#835400] font-bold text-[11px] border border-[#e9b44c]/40">
                      Super Admin
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    المشرف العام ومسؤول التسويات المالية والتحكيم
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-full font-bold w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>الحساب نشط ومصادق بالبصمة الحيوية</span>
              </div>
            </div>

            {/* Profile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-[#f6f3ec] rounded-xl border border-gray-200">
                <span className="text-gray-400 block text-[11px]">الاسم الكامل</span>
                <span className="font-bold text-[#12302b] text-sm">أحمد المقيد</span>
              </div>
              <div className="p-3 bg-[#f6f3ec] rounded-xl border border-gray-200">
                <span className="text-gray-400 block text-[11px]">المسمى الوظيفي</span>
                <span className="font-bold text-[#12302b] text-sm">مدير النظام العام والتحكيم</span>
              </div>
              <div className="p-3 bg-[#f6f3ec] rounded-xl border border-gray-200">
                <span className="text-gray-400 block text-[11px]">البريد الإلكتروني المعتمد</span>
                <span className="font-bold font-mono text-[#1f7a6e] text-sm dir-ltr text-right block">
                  ahmed.admin@tabadul.ps
                </span>
              </div>
              <div className="p-3 bg-[#f6f3ec] rounded-xl border border-gray-200">
                <span className="text-gray-400 block text-[11px]">رقم الهاتف للتوثيق</span>
                <span className="font-bold font-mono text-[#12302b] text-sm dir-ltr text-right block">
                  +970 59 918 2000
                </span>
              </div>
            </div>

            {/* Security Protocol Bar */}
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#12302b]">
                <span className="material-symbols-outlined text-[#1f7a6e] text-lg">lock</span>
                <span className="font-bold">بروتوكول الأمان:</span>
                <span className="text-gray-600">تحقق ثنائي 2FA مفعّل عبر أداة المصادقة الموثقة</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 font-medium">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#1f7a6e]">travel_explore</span>
                  IP ثابت ومخصص
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#835400] font-bold">
                  <span className="material-symbols-outlined text-sm">timer</span>
                  آخر نشاط: منذ لحظات
                </span>
              </div>
            </div>

            {/* Permissions Roster */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-[#1f7a6e]">check_circle</span>
                  <span>قائمة الصلاحيات والامتيازات النشطة</span>
                </h4>
                <span className="text-[11px] text-[#1f7a6e] font-bold">مفعّلة بصورة دائمة ومحمية</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {permissions.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-200 bg-[#faf8f4] text-xs"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#1f7a6e]/10 text-[#1f7a6e] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-base">{p.icon}</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#12302b]">{p.title}</div>
                      <div className="text-[10px] text-gray-400 font-mono">{p.code}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ADD DELEGATE MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-5 bg-[#12302b] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-2xl text-[#e9b44c]">badge</span>
                <h3 className="font-bold text-base">تسجيل تفويض إداري (V2)</h3>
              </div>
              <button onClick={() => setIsAddModalOpen(false)} className="text-white/70 hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleAddDelegate} className="p-6 space-y-4 text-xs">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 leading-relaxed">
                ملاحظة: سيتم جدولة هذا الدور ضمن خارطة ترقية النظام للإصدار V2 (Multi-Admin Delegations) ولن تمنح صلاحيات صرف مالي إلا بعد اعتمادها رسميًا.
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">
                  اسم المفوض الكامل <span className="text-red-500">*</span>
                </label>
                <input
                  value={delegateName}
                  onChange={(e) => setDelegateName(e.target.value)}
                  placeholder="مثال: م. أسامة رضوان"
                  className="w-full h-10 px-3 rounded-xl border border-gray-300 bg-[#faf8f4] outline-none"
                  type="text"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">
                  البريد الإلكتروني المعتمد <span className="text-red-500">*</span>
                </label>
                <input
                  value={delegateEmail}
                  onChange={(e) => setDelegateEmail(e.target.value)}
                  placeholder="osama@tabadul.ps"
                  className="w-full h-10 px-3 rounded-xl border border-gray-300 bg-[#faf8f4] outline-none dir-ltr text-right"
                  type="email"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">الدور المراد تفويضه</label>
                <select
                  value={delegateRole}
                  onChange={(e) => setDelegateRole(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-gray-300 bg-[#faf8f4] font-bold text-[#12302b] outline-none"
                >
                  <option value="financial_auditor">مدقق مالي (قراءة وتقارير فقط)</option>
                  <option value="dispute_mediator">مسؤول تحكيم وفض شكاوى</option>
                  <option value="store_reviewer">مسؤول تدقيق طلبات المتاجر</option>
                </select>
              </div>

              {formError && <span className="text-[11px] text-red-500 block">{formError}</span>}

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#12302b] hover:bg-[#1f7a6e] text-white font-bold shadow-sm"
                >
                  حفظ طلب التفويض
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
