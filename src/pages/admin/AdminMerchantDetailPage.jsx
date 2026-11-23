import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function AdminMerchantDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Store state
  const [isSuspended, setIsSuspended] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');

  // Suspend modal state
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
  const [orderActionPolicy, setOrderActionPolicy] = useState('complete_delivery');
  const [suspendReason, setSuspendReason] = useState('fashion_rules');
  const [adminNotes, setAdminNotes] = useState('');
  const [suspendError, setSuspendError] = useState('');

  // Message modal state
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [messageSubject, setMessageSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [messageError, setMessageError] = useState('');

  // Edit details modal state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [storeName, setStoreName] = useState('بوتيك لمسة فاشون');
  const [ownerName, setOwnerName] = useState('ندى رفيق القدوة');
  const [phone, setPhone] = useState('059-9481230');
  const [location, setLocation] = useState('غزة - خانيونس، شارع جلال');
  const [editError, setEditError] = useState('');

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Confirm Suspension Action with validation
  const handleConfirmSuspend = (e) => {
    e.preventDefault();
    setSuspendError('');

    if (!suspendReason) {
      setSuspendError('يرجى اختيار سبب التعليق الإلزامي.');
      return;
    }

    setIsSuspended(true);
    setIsSuspendModalOpen(false);
    showToast('تم تعليق متجر بوتيك لمسة فاشون وتوثيق الإجراء في سجل التدقيق A-18');
  };

  // Restore Store Action
  const handleRestoreStore = () => {
    setIsSuspended(false);
    showToast('تمت إعادة تفعيل المتجر بنجاح وأصبح متاحاً للمتسوقين');
  };

  // Send message with validation
  const handleSendMessage = (e) => {
    e.preventDefault();
    setMessageError('');

    if (!messageSubject.trim()) {
      setMessageError('يرجى إدخال عنوان الرسالة.');
      return;
    }
    if (!messageBody.trim()) {
      setMessageError('يرجى كتابة نص الرسالة للتاجر.');
      return;
    }

    showToast(`تم إرسال الرسالة إلى تاجر ${storeName} بنجاح`);
    setMessageSubject('');
    setMessageBody('');
    setIsMessageModalOpen(false);
  };

  // Edit details with validation
  const handleSaveEdit = (e) => {
    e.preventDefault();
    setEditError('');

    if (!storeName.trim() || !ownerName.trim() || !phone.trim() || !location.trim()) {
      setEditError('يرجى ملء جميع الحقول المطلوبة.');
      return;
    }

    showToast('تم تحديث بيانات المتجر بنجاح');
    setIsEditModalOpen(false);
  };

  return (
    <div className="h-full min-h-screen bg-[#F6F3EC] text-[#191c22] antialiased flex flex-row font-tajawal selection:bg-[#835400] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#12302B] text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-[#E9B44C] flex items-center gap-3 animate-bounce">
          <span className="material-symbols-outlined text-[#E9B44C] text-xl">check_circle</span>
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-white/60 hover:text-white mr-2">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SIDEBAR (Shared Component: SideNavBar)                                    */}
      {/* ========================================================================= */}
      <aside className="w-64 bg-[#12302B] text-white flex-shrink-0 flex flex-col justify-between border-l border-white/10 z-30 shadow-xl select-none min-h-screen">
        {/* Top Branding Block */}
        <div>
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <Link to="/admin/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E9B44C] flex items-center justify-center text-[#12302B] font-black text-xl shadow-md">
                ت
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white leading-tight">تبادل للمشغلين</span>
                <span className="text-xs text-[#E9B44C] font-medium">الإدارة المركزية العامة</span>
              </div>
            </Link>
            <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white border border-white/20">
              غزة
            </span>
          </div>

          {/* Quick Action CTA */}
          <div className="p-3">
            <Link
              to="/admin/merchants"
              className="w-full py-2.5 px-3 bg-[#1F7A6E] hover:bg-[#186258] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors duration-150 shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">add_business</span>
              <span>إضافة متجر جديد</span>
            </Link>
          </div>

          {/* Main Navigation Links */}
          <nav className="px-3 py-2 space-y-1.5 text-xs">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150 font-bold"
            >
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <span>لوحة التحكم</span>
            </Link>

            {/* 2: المتاجر والشركاء (ACTIVE MATCH) */}
            <Link
              to="/admin/merchants"
              className="flex items-center justify-between px-4 py-2.5 bg-[#E9B44C] text-[#12302B] rounded-xl font-bold transition-all duration-150 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  storefront
                </span>
                <span>المتاجر والشركاء</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#12302B]"></span>
            </Link>

            <Link
              to="/admin/customers"
              className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150 font-bold"
            >
              <span className="material-symbols-outlined text-[20px]">groups</span>
              <span>إدارة العملاء</span>
            </Link>

            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150 font-bold"
            >
              <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              <span>العمليات والطلبات</span>
            </Link>

            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150 font-bold"
            >
              <span className="material-symbols-outlined text-[20px]">loyalty</span>
              <span>برنامج المكافآت</span>
            </Link>

            <Link
              to="/admin/dashboard"
              className="flex items-center justify-between px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150 font-bold"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px]">payments</span>
                <span>التقارير المالية</span>
              </div>
              <span className="text-[10px] text-[#E9B44C] bg-white/5 px-1.5 py-0.5 rounded">A-09</span>
            </Link>

            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150 font-bold"
            >
              <span className="material-symbols-outlined text-[20px]">settings</span>
              <span>إعدادات النظام</span>
            </Link>
          </nav>
        </div>

        {/* Sidebar Bottom Footer Area */}
        <div className="p-3 border-t border-white/10 space-y-1">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150 text-xs"
          >
            <span className="material-symbols-outlined text-[20px]">help_center</span>
            <span>مركز المساعدة والتوثيق</span>
          </Link>
          <button
            onClick={() => navigate('/admin/login')}
            className="w-full flex items-center gap-3 px-4 py-2 text-rose-300 hover:text-rose-100 hover:bg-rose-500/10 rounded-xl transition-all duration-150 text-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span>تسجيل الخروج</span>
          </button>

          {/* Operator Badge */}
          <div className="mt-2 pt-2 border-t border-white/5 px-2 flex items-center gap-2.5 text-white/60">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xs">
              ع.م
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xs font-bold text-white">علي مقداد</span>
              <span className="text-[10px] text-white/50">مشرف أول - منطقة خانيونس</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* MAIN WORKSPACE & CONTENT CANVAS                                           */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Top Navigation Bar */}
        <header className="h-16 bg-white border-b border-[#e4dfd3] flex items-center justify-between px-6 z-20 flex-shrink-0 shadow-sm">
          {/* Right Cluster: Breadcrumb & Search Context */}
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-1.5 text-xs text-[#43474e]">
              <Link to="/admin/dashboard" className="hover:text-[#032448] transition-colors">
                الإدارة العامة
              </Link>
              <span className="material-symbols-outlined text-[16px] text-gray-400">chevron_left</span>
              <Link to="/admin/merchants" className="hover:text-[#032448] transition-colors">
                المتاجر والشركاء
              </Link>
              <span className="material-symbols-outlined text-[16px] text-gray-400">chevron_left</span>
              <Link to="/admin/merchants" className="hover:text-[#032448] transition-colors">
                التجار
              </Link>
              <span className="material-symbols-outlined text-[16px] text-gray-400">chevron_left</span>
              <span className="text-[#12302B] font-bold bg-[#f2f3fc] px-2 py-0.5 rounded-md text-[11px] text-[#1F7A6E]">
                {storeName} (#{id || 'TBD-STR-0482'})
              </span>
            </nav>
          </div>

          {/* Left Cluster: System Actions, Search & Profile */}
          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <input
                className="w-full h-9 pr-9 pl-3 text-xs bg-[#f2f3fc] border border-[#c4c6cf]/50 rounded-xl focus:outline-none focus:border-[#1F7A6E] focus:ring-1 focus:ring-[#1F7A6E] placeholder:text-gray-400 text-right"
                placeholder="بحث بالاسم، الكود، أو رقم الهاتف..."
                type="text"
              />
              <span className="material-symbols-outlined absolute right-2.5 top-2 text-[18px] text-gray-400 pointer-events-none">
                search
              </span>
            </div>
            <div className="h-6 w-px bg-gray-200 mx-1"></div>
            <button
              onClick={() => showToast('جاري تصدير الملف الرقابي للمتجر')}
              className="h-9 px-3 rounded-lg border border-[#c4c6cf]/60 text-[#191c22] hover:bg-gray-100 transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#1F7A6E]">file_download</span>
              <span>تصدير التقارير</span>
            </button>
            <button
              onClick={() => showToast('تم فتح قناة الدعم المباشر مع مشرف المنطقة')}
              className="h-9 px-3 rounded-lg bg-[#f2f3fc] text-[#43474e] hover:text-[#191c22] transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span>دعم المشغل</span>
            </button>
            <button className="relative p-2 text-[#43474e] hover:text-[#191c22] rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" title="التنبيهات">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-600 ring-2 ring-white"></span>
            </button>
            <div className="flex items-center gap-2 pl-2">
              <div className="w-8 h-8 rounded-full bg-[#12302B] text-[#E9B44C] flex items-center justify-center font-bold text-xs ring-1 ring-[#1F7A6E]">
                ع.م
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Canvas Area */}
        <main className="flex-1 p-6 space-y-5 overflow-y-auto">
          {/* =================================================================== */}
          {/* SUSPENDED STATE PREVIEW BANNER (Conditional Administrative Alert)   */}
          {/* =================================================================== */}
          {isSuspended && (
            <div className="rounded-2xl bg-red-50 border-2 border-red-500 p-4 shadow-sm flex items-center justify-between transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">block</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-red-900">المتجر معلق مؤقتاً بواسطة الإدارة</span>
                    <span className="px-2 py-0.5 rounded text-xs bg-red-600 text-white font-bold">حالة التجميد سارية</span>
                  </div>
                  <p className="text-xs text-red-800/90 mt-0.5">
                    لا يستقبل هذا المتجر طلبات جديدة ولا تظهر منتجاته للمتسوقين في تطبيق تبادل حتى إشعار آخر، مع الحفاظ
                    على الأرصدة المعلقة بحساب الأمانات.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleRestoreStore}
                  className="px-4 py-2 bg-[#E9B44C] hover:bg-[#d49a32] text-[#12302B] rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">lock_open</span>
                  <span>إعادة تفعيل المتجر</span>
                </button>
              </div>
            </div>
          )}

          {/* =================================================================== */}
          {/* STORE HEADER CARD (Primary Store Dossier)                           */}
          {/* =================================================================== */}
          <section className="bg-white rounded-2xl border border-[#e4dfd3] shadow-sm p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-l from-[#12302B] via-[#1F7A6E] to-[#E9B44C]"></div>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Identity and Metrics Stack */}
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-2xl bg-[#12302B] border-2 border-[#E9B44C]/60 p-2 flex flex-col items-center justify-center text-center relative flex-shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[#E9B44C] text-[34px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    straighten
                  </span>
                  <span className="text-[9px] font-bold text-white tracking-widest uppercase mt-0.5">LAMSAH</span>
                  <span className="absolute -top-1.5 -left-1.5 w-6 h-6 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center shadow-sm" title="متجر موثق">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h1 className="text-2xl font-extrabold text-[#12302B] tracking-tight">{storeName}</h1>
                    <span className="text-sm text-gray-500 font-medium" dir="ltr">Lamsah Fashion</span>

                    {/* Status Chip */}
                    {isSuspended ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 border border-red-300">
                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                        <span>معلق مؤقتاً (موقوف)</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#1F7A6E] border border-emerald-200">
                        <span className="w-2 h-2 rounded-full bg-[#1F7A6E] animate-pulse"></span>
                        <span>نشط ومتاح للتسوق</span>
                      </span>
                    )}

                    {/* VIP Tier Badge */}
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-amber-50 text-[#835400] border border-amber-300 font-bold">
                      <span className="material-symbols-outlined text-[14px] text-[#E9B44C]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        stars
                      </span>
                      <span>باقة VIP Pro (79 ₪/شهرياً)</span>
                    </span>
                  </div>

                  {/* Secondary Details Row */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#43474e]">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="font-bold text-[#12302B]">4.8</span>
                      <span className="text-gray-400">(142 تقييم عملاء)</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-[#1F7A6E]">calendar_today</span>
                      <span>تاريخ الانضمام: <strong>14 أكتوبر 2024</strong></span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-gray-400">location_on</span>
                      <span>{location}</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span className="font-mono text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      كود: {id || 'TBD-STR-0482'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Group */}
              <div className="flex flex-wrap items-center gap-2.5 self-end lg:self-center">
                {isSuspended ? (
                  <button
                    onClick={handleRestoreStore}
                    className="h-10 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">lock_open</span>
                    <span>فك تعليق المتجر</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setIsSuspendModalOpen(true)}
                    className="h-10 px-4 rounded-xl border border-red-500 text-red-600 hover:bg-red-50 transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">pause_circle</span>
                    <span>تعليق المتجر</span>
                  </button>
                )}

                <button
                  onClick={() => setIsMessageModalOpen(true)}
                  className="h-10 px-4 rounded-xl border border-[#1F7A6E] text-[#1F7A6E] hover:bg-[#1F7A6E]/5 transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>إرسال رسالة للتاجر</span>
                </button>

                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="h-10 px-4 rounded-xl bg-[#12302B] hover:bg-[#1c4740] text-white transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">edit_note</span>
                  <span>تعديل البيانات</span>
                </button>
              </div>
            </div>

            {/* System Tab Navigation */}
            <div className="mt-6 pt-2 border-t border-gray-200 flex items-center justify-between overflow-x-auto text-xs">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setActiveTab('summary')}
                  className={`pb-3 font-bold flex items-center gap-2 border-b-2 cursor-pointer transition-colors ${
                    activeTab === 'summary' ? 'text-[#1F7A6E] border-[#1F7A6E]' : 'text-gray-500 border-transparent hover:text-black'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    analytics
                  </span>
                  <span>ملخص الأداء والبيانات</span>
                </button>

                <button
                  onClick={() => setActiveTab('products')}
                  className={`pb-3 font-semibold flex items-center gap-2 border-b-2 cursor-pointer transition-colors ${
                    activeTab === 'products' ? 'text-[#1F7A6E] border-[#1F7A6E]' : 'text-gray-500 border-transparent hover:text-black'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">checkroom</span>
                  <span>المنتجات والمخزون</span>
                  <span className="bg-gray-100 text-gray-600 text-[11px] px-1.5 py-0.2 rounded-full font-sans">86</span>
                </button>

                <button
                  onClick={() => setActiveTab('orders')}
                  className={`pb-3 font-semibold flex items-center gap-2 border-b-2 cursor-pointer transition-colors ${
                    activeTab === 'orders' ? 'text-[#1F7A6E] border-[#1F7A6E]' : 'text-gray-500 border-transparent hover:text-black'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                  <span>الطلبات والتسليم</span>
                  <span className="bg-amber-100 text-amber-800 text-[11px] px-1.5 py-0.2 rounded-full font-bold">4 جارية</span>
                </button>

                <Link
                  to="/admin/dashboard"
                  className="pb-3 text-gray-500 hover:text-black transition-colors flex items-center gap-2 border-b-2 border-transparent group"
                  title="يوجه إلى شاشة A-09 و A-10 للتسويات والمالية"
                >
                  <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                  <span>المال والتحويلات</span>
                  <span className="text-[10px] text-[#1F7A6E] font-mono bg-teal-50 px-1 rounded border border-teal-200">
                    A-09 / A-10
                  </span>
                </Link>

                <Link
                  to="/admin/dashboard"
                  className="pb-3 text-gray-500 hover:text-black transition-colors flex items-center gap-2 border-b-2 border-transparent group"
                  title="يوجه إلى سجل الشكاوى والنزاعات A-12"
                >
                  <span className="material-symbols-outlined text-[20px]">gavel</span>
                  <span>الشكاوى والنزاعات</span>
                  <span className="text-[10px] text-amber-700 font-mono bg-amber-50 px-1 rounded border border-amber-200">
                    A-12
                  </span>
                </Link>

                <Link
                  to="/admin/dashboard"
                  className="pb-3 text-gray-500 hover:text-black transition-colors flex items-center gap-2 border-b-2 border-transparent group"
                  title="يوجه إلى سجل التدقيق والإجراءات A-18"
                >
                  <span className="material-symbols-outlined text-[20px]">history_edu</span>
                  <span>سجل الإجراءات والتدقيق</span>
                  <span className="text-[10px] text-slate-700 font-mono bg-slate-100 px-1 rounded border border-slate-300">
                    A-18
                  </span>
                </Link>
              </div>

              <div className="text-[11px] text-gray-400 flex items-center gap-1 pb-3">
                <span className="material-symbols-outlined text-[14px]">sync</span>
                <span>آخر تدقيق آلي: منذ 12 دقيقة</span>
              </div>
            </div>
          </section>

          {/* TAB 1: SUMMARY */}
          {activeTab === 'summary' && (
            <>
              {/* 1. 4 KPI Cards (Bento Metric Layout) */}
              <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {/* KPI 1: 30-Day Sales */}
                <div className="bg-white p-5 rounded-2xl border border-[#e4dfd3] shadow-sm flex flex-col justify-between hover:border-[#1F7A6E]/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#43474e] font-semibold">مبيعات 30 يوماً</span>
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#1F7A6E] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">trending_up</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-[#12302B] font-mono">24,800</span>
                      <span className="text-lg text-[#1F7A6E] font-bold">₪</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-700">
                      <span className="material-symbols-outlined text-[16px]">north_east</span>
                      <span className="font-bold">+12%</span>
                      <span className="text-gray-400">مقارنة بالشهر السابق (22,140 ₪)</span>
                    </div>
                  </div>
                </div>

                {/* KPI 2: Total Orders */}
                <div className="bg-white p-5 rounded-2xl border border-[#e4dfd3] shadow-sm flex flex-col justify-between hover:border-[#1F7A6E]/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#43474e] font-semibold">إجمالي الطلبات المنفذة</span>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#032448] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-[#12302B] font-mono">352</span>
                      <span className="text-sm text-gray-500 font-medium">طلباً</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-xs">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
                        <span>4 طلبات جارية قيد التوصيل الآن</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* KPI 3: Loyalty Points Accrued */}
                <div className="bg-white p-5 rounded-2xl border border-[#e4dfd3] shadow-sm flex flex-col justify-between hover:border-[#1F7A6E]/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#43474e] font-semibold">نقاط صادرة للزبائن</span>
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#835400] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        loyalty
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-[#12302B] font-mono">124,000</span>
                      <span className="text-sm text-[#C89531] font-bold">نقطة</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-[#43474e]">
                      <span className="material-symbols-outlined text-[15px] text-[#1F7A6E]">verified_user</span>
                      <span>كاش باك 5% مكفولة بالكامل بأمانات تبادل</span>
                    </div>
                  </div>
                </div>

                {/* KPI 4: Customer Satisfaction & PIN Compliance */}
                <div className="bg-white p-5 rounded-2xl border border-[#e4dfd3] shadow-sm flex flex-col justify-between hover:border-[#1F7A6E]/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#43474e] font-semibold">التقييم ومعدل الالتزام</span>
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">pin</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-[#12302B] font-mono">4.8</span>
                        <span className="text-lg text-amber-500">★</span>
                      </div>
                      <div className="text-left font-mono">
                        <span className="text-xl font-bold text-emerald-700">99.1%</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-[#43474e]">
                      <span>التزام كامل برمز التسليم الآمن PIN</span>
                      <span className="text-emerald-700 font-bold">ممتاز</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. Detailed Tri-Fold Information Modules */}
              <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* CARD A: Owner & Contact Dossier */}
                <div className="bg-white rounded-2xl border border-[#e4dfd3] p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-2 text-base font-bold text-[#12302B]">
                      <span className="material-symbols-outlined text-[#1F7A6E]">badge</span>
                      <h2>معلومات المالك والاتصال</h2>
                    </div>
                    <span className="px-2 py-0.5 rounded text-xs bg-teal-50 text-[#1F7A6E] font-bold border border-teal-200">
                      تاجر معتمد
                    </span>
                  </div>
                  <div className="space-y-3.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">المالك المسؤول:</span>
                      <span className="font-bold text-[#12302B] text-sm">{ownerName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">رقم الهاتف المباشر:</span>
                      <div className="flex items-center gap-1.5" dir="ltr">
                        <span className="font-mono font-bold text-[#12302B]">{phone}</span>
                        <a
                          className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-[#1F7A6E] hover:bg-[#1F7A6E] hover:text-white transition-colors cursor-pointer"
                          href={`tel:${phone.replace(/-/g, '')}`}
                          title="اتصال"
                        >
                          <span className="material-symbols-outlined text-[14px]">call</span>
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">الموقع الجغرافي:</span>
                      <span className="font-medium text-[#12302B]">{location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">السجل التجاري / الهوية:</span>
                      <span className="font-mono text-gray-600 font-bold">402918841-ID</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">قناة التواصل المفضلة:</span>
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                        <span className="material-symbols-outlined text-[16px]">mark_chat_unread</span>
                        <span>واتساب الأعمال المتصل</span>
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-100 flex gap-2">
                    <button
                      onClick={() => showToast('عرض الوثائق الرسمية والسجل التجاري')}
                      className="flex-1 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-[#12302B] text-xs font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">file_open</span>
                      <span>عرض وثائق الهوية والترخيص</span>
                    </button>
                  </div>
                </div>

                {/* CARD B: Delivery Zones & Shipping Rules */}
                <div className="bg-white rounded-2xl border border-[#e4dfd3] p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-2 text-base font-bold text-[#12302B]">
                      <span className="material-symbols-outlined text-[#1F7A6E]">local_shipping</span>
                      <h2>مناطق التوصيل والرسوم</h2>
                    </div>
                    <span className="text-xs text-gray-400">مندوب خاص معتمد</span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-gray-50 flex items-center justify-between border border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                        <span className="font-bold text-[#12302B]">داخل خانيونس والقرى المحيطة</span>
                      </div>
                      <span className="font-bold text-[#12302B]">10 ₪</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-50 flex items-center justify-between border border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                        <span className="font-bold text-[#12302B]">المحافظة الوسطى (دير البلح، النصيرات) ورفح</span>
                      </div>
                      <span className="font-bold text-[#12302B]">15 ₪</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-50 flex items-center justify-between border border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                        <span className="font-bold text-[#12302B]">مدينة غزة وشمال القطاع</span>
                      </div>
                      <span className="font-bold text-[#12302B]">15 ₪</span>
                    </div>
                  </div>

                  {/* Fashion Exchange Guarantee Banner */}
                  <div className="p-3 rounded-xl bg-[#E9B44C]/10 border border-[#E9B44C]/40 flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#C89531] text-[20px] mt-0.5">published_with_changes</span>
                    <div>
                      <span className="text-xs font-bold text-[#12302B] block">سياسة مقاسات الأزياء:</span>
                      <p className="text-[#43474e] text-[11px] leading-relaxed mt-0.5">
                        نافذة استبدال المقاس متاحة خلال <strong>24 ساعة مجاناً</strong> للمتسوق في حال عدم ملاءمة المقاس،
                        وتتحمل المنصة مع التاجر تنسيق المندوب البديل.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CARD C: Masked Payout Account & Settlements */}
                <div className="bg-white rounded-2xl border border-[#e4dfd3] p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-2 text-base font-bold text-[#12302B]">
                      <span className="material-symbols-outlined text-[#1F7A6E]">account_balance</span>
                      <h2>حساب الاستلام والمستحقات</h2>
                    </div>
                    <Link
                      to="/admin/dashboard"
                      className="text-xs text-[#1F7A6E] hover:underline flex items-center gap-0.5"
                      title="الانتقال إلى A-09 شاشة التسويات المالية"
                    >
                      <span>A-09 التسويات</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </Link>
                  </div>

                  {/* Masked PalPay Card */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#12302B] to-[#1F7A6E] text-white space-y-3 relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-bold text-xs text-white">
                          PP
                        </span>
                        <span className="text-xs font-bold">محفظة بال باي (PalPay) معتمدة</span>
                      </div>
                      <span className="material-symbols-outlined text-white/50 text-[20px]">contactless</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-white/60 block">رقم الحساب الإلكتروني المموّه:</span>
                      <span className="font-mono text-lg tracking-widest text-[#E9B44C]">059-***1230</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-white/10 text-xs text-white/80">
                      <span>المستفيد: {ownerName}</span>
                      <span className="text-emerald-300 flex items-center gap-1 font-bold">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        <span>مطابق وموثق بنكياً</span>
                      </span>
                    </div>
                  </div>

                  {/* Settlement Cycle Details */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                      <span className="text-gray-500">الرصيد المعلق الجاهز للتسوية:</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-bold text-base text-emerald-800">4,820</span>
                        <span className="text-xs font-bold text-emerald-800">₪</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[#43474e]">
                      <span className="text-gray-500">دورة التسوية الدورية:</span>
                      <span className="font-bold text-[#12302B] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-[#1F7A6E]">event_repeat</span>
                        <span>أسبوعية (كل خميس صباحاً)</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#43474e]">
                      <span className="text-gray-500">تاريخ التحويل القادم:</span>
                      <span className="font-mono font-medium">الخميس القادم (10:00 ص)</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Mini Action Ledger Preview (Linking to A-18) */}
              <section className="bg-white rounded-2xl border border-[#e4dfd3] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#1F7A6E]">history</span>
                    <h3 className="text-base font-bold text-[#12302B]">آخر الإجراءات الرقابية والتدقيقية على المتجر</h3>
                    <span className="text-xs text-gray-400">(نظام A-18 الموحد)</span>
                  </div>
                  <Link to="/admin/dashboard" className="text-xs font-bold text-[#1F7A6E] hover:underline flex items-center gap-1">
                    <span>فتح سجل التدقيق الكامل A-18</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead className="bg-gray-50 text-[#43474e] border-b border-gray-200 font-bold">
                      <tr>
                        <th className="py-2.5 px-4">رقم العملية</th>
                        <th className="py-2.5 px-4">نوع الإجراء الإداري</th>
                        <th className="py-2.5 px-4">المشرف المنفذ</th>
                        <th className="py-2.5 px-4">التفاصيل والأثر</th>
                        <th className="py-2.5 px-4">التوقيت</th>
                        <th className="py-2.5 px-4">الحالة</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-[#191c22]">
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-3 px-4 font-mono text-gray-500">#AUD-99201</td>
                        <td className="py-3 px-4 font-medium flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px] text-[#1F7A6E]">verified</span>
                          <span>تجديد اعتماد باقة VIP Pro</span>
                        </td>
                        <td className="py-3 px-4">علي مقداد (مشرف أول)</td>
                        <td className="py-3 px-4 text-gray-500">خصم رسوم الاشتراك الشهري 79 ₪ وتسوية المستحقات</td>
                        <td className="py-3 px-4 font-mono text-gray-500">أمس 14:22</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded text-xs bg-emerald-50 text-emerald-700 font-bold">مكتمل وموثق</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-3 px-4 font-mono text-gray-500">#AUD-98714</td>
                        <td className="py-3 px-4 font-medium flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px] text-blue-600">local_shipping</span>
                          <span>تحديث نطاق تسليم الشمال</span>
                        </td>
                        <td className="py-3 px-4">ندى القدوة (التاجر)</td>
                        <td className="py-3 px-4 text-gray-500">إضافة مدينة غزة بقيمة 15 ₪ بالتنسيق مع المندوب الخاص</td>
                        <td className="py-3 px-4 font-mono text-gray-500">18 نوفمبر 2024</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded text-xs bg-blue-50 text-blue-700 font-bold">معتمد آلياً</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </>
          )}

          {/* TAB 2: PRODUCTS */}
          {activeTab === 'products' && (
            <div className="bg-white rounded-2xl border border-[#e4dfd3] p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h3 className="font-bold text-base text-[#12302B]">أصناف المتجر المعتمدة (86 صنف نشط)</h3>
                <Link to="/stores/lamsa-boutique" className="text-xs font-bold text-[#1F7A6E] hover:underline">
                  معاينة المتجر كمتسوق
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 rounded-xl border border-gray-200">
                  <p className="font-bold text-sm">فساتين سهرة مطرزة (32)</p>
                  <p className="text-xs text-gray-500 mt-1">كاش باك 10% • متوفر المقاسات 36-44</p>
                </div>
                <div className="p-3 rounded-xl border border-gray-200">
                  <p className="font-bold text-sm">عبايات مخمل وشيفون (28)</p>
                  <p className="text-xs text-gray-500 mt-1">كاش باك 8% • شحن فوري</p>
                </div>
                <div className="p-3 rounded-xl border border-gray-200">
                  <p className="font-bold text-sm">أطقم مناسبات فاخرة (26)</p>
                  <p className="text-xs text-gray-500 mt-1">كاش باك 10% • ضمان استبدال 24 ساعة</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ORDERS */}
          {activeTab === 'orders' && (
            <div className="bg-white rounded-2xl border border-[#e4dfd3] p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-[#12302B]">الطلبات الجارية حالياً (4 طلبات)</h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/30 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[#12302B] block">طلب #ORD-9841 - فستان سهرة مخمل كحلي</span>
                    <span className="text-gray-500">العميل: سارة شبير • رمز التسليم PIN: 8831</span>
                  </div>
                  <span className="font-bold text-amber-800">قيد التوصيل (220 ₪)</span>
                </div>
                <div className="p-3 rounded-xl border border-gray-200 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[#12302B] block">طلب #ORD-9830 - فستان زمردي حرير</span>
                    <span className="text-gray-500">العميل: رنا الزهارنة • تم تأكيد الاستلام بالـ PIN</span>
                  </div>
                  <span className="font-bold text-emerald-800">مكتمل (280 ₪)</span>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ========================================================================= */}
      {/* SUSPEND STORE MODAL DIALOG (Interactive Administrative Window)            */}
      {/* ========================================================================= */}
      {isSuspendModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl border border-[#c4c6cf] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="bg-red-50 border-b border-red-200 p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[24px]">warning</span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-red-950">تعليق متجر: {storeName}</h3>
                  <span className="text-xs text-red-800 font-mono">
                    رمز المتجر: {id || 'TBD-STR-0482'}
                  </span>
                </div>
              </div>
              <button
                className="text-red-800/70 hover:text-red-950 p-1 rounded-lg hover:bg-red-100 cursor-pointer"
                onClick={() => setIsSuspendModalOpen(false)}
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleConfirmSuspend} className="p-6 space-y-5 overflow-y-auto max-h-[768px] text-xs">
              {suspendError && (
                <div className="p-3 bg-red-100 text-red-800 rounded-xl border border-red-300 font-bold">
                  {suspendError}
                </div>
              )}

              {/* Impact Summary Callout */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#12302B]">
                  <span className="material-symbols-outlined text-amber-600">report_problem</span>
                  <h4>ملخص الأثر الإداري الفوري للتعليق:</h4>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                    <span className="text-gray-500 block text-xs">الطلبات الجارية حالياً:</span>
                    <span className="font-bold text-base text-amber-700">4 طلبات</span>
                    <span className="text-[11px] text-gray-500 block mt-0.5">تحتاج قراراً فورياً للمعالجة</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                    <span className="text-gray-500 block text-xs">أموال معلقة تحت التسوية:</span>
                    <span className="font-bold text-base text-red-600">310 ₪</span>
                    <span className="text-[11px] text-gray-500 block mt-0.5">سيتم حجزها في حساب الأمانات</span>
                  </div>
                </div>
              </div>

              {/* Ongoing Orders Policy Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#191c22]">
                  إجراءات التعامل مع الطلبات الأربعة الجارية: <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  <label className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-[#1F7A6E] bg-white cursor-pointer transition-colors">
                    <input
                      checked={orderActionPolicy === 'complete_delivery'}
                      onChange={() => setOrderActionPolicy('complete_delivery')}
                      className="mt-1 accent-[#1F7A6E]"
                      name="order_action"
                      type="radio"
                    />
                    <div>
                      <span className="text-xs font-bold text-[#191c22] block">
                        استكمال التوصيل الجاري واحتجاز مبالغ الصرف
                      </span>
                      <span className="text-gray-500 text-[11px]">
                        يستمر المندوب بتسليم الأزياء، وتُحتجز قيمة المبيعات حتى فك التعليق أو تسوية الشكاوى.
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-[#1F7A6E] bg-white cursor-pointer transition-colors">
                    <input
                      checked={orderActionPolicy === 'cancel_orders'}
                      onChange={() => setOrderActionPolicy('cancel_orders')}
                      className="mt-1 accent-[#1F7A6E]"
                      name="order_action"
                      type="radio"
                    />
                    <div>
                      <span className="text-xs font-bold text-[#191c22] block">
                        إلغاء الطلبات فوراً وإعادة الأرصدة والمكافآت للمتسوقين
                      </span>
                      <span className="text-gray-500 text-[11px]">
                        إلغاء أذونات التوصيل، إعادة نقاط الكاش باك ورصيد المحافظ لحسابات الزبائن مباشرة.
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Mandatory Reason Select & Text */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-[#191c22] mb-1">
                    سبب التعليق الإلزامي: <span className="text-red-600">*</span>
                  </label>
                  <select
                    required
                    value={suspendReason}
                    onChange={(e) => setSuspendReason(e.target.value)}
                    className="w-full h-10 px-3 bg-white border border-[#c4c6cf] rounded-xl text-xs focus:border-[#1F7A6E] focus:ring-1 focus:ring-[#1F7A6E]"
                  >
                    <option value="fashion_rules">مخالفة معايير الأزياء وسياسة المقاسات (شكاوى متكررة)</option>
                    <option value="financial_dispute">نزاع مالي أو شيكات مرتجعة غير محلولة</option>
                    <option value="quality_complaints">شكاوى جودة متكررة وتدني تقييم الزبائن عن 3.5</option>
                    <option value="logistics_pin">عدم الالتزام المتكرر بتأكيد رمز التسليم PIN</option>
                    <option value="other">أسباب رقابية وإدارية خاصة أخرى</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#191c22] mb-1">
                    ملاحظات وتوجيهات المشرف الداخلي:
                  </label>
                  <textarea
                    rows={3}
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    placeholder="اكتب التفاصيل والملاحظات التي ستظهر لتاجر بوتيك لمسة ولفريق الدعم..."
                    className="w-full p-3 bg-white border border-[#c4c6cf] rounded-xl text-xs focus:border-[#1F7A6E] focus:ring-1 focus:ring-[#1F7A6E] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Audit Notice Warning */}
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-300 flex items-center gap-2 text-xs text-slate-700">
                <span className="material-symbols-outlined text-[18px]">gavel</span>
                <span>
                  تنبيه نظامي: يتم قيد وتوثيق هذا الإجراء الإداري برقم هوية المشرف فوراً في سجل التدقيق الموحد <strong>A-18</strong>.
                </span>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 border-t border-gray-200 -mx-6 -mb-6 p-4 flex items-center justify-between">
                <button
                  type="button"
                  className="h-10 px-5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors text-xs font-medium cursor-pointer"
                  onClick={() => setIsSuspendModalOpen(false)}
                >
                  إلغاء وتراجع
                </button>
                <button
                  type="submit"
                  className="h-10 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all text-xs font-bold shadow-md flex items-center gap-2 active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">block</span>
                  <span>تأكيد تعليق المتجر فوراً</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SEND MESSAGE MODAL                                                        */}
      {/* ========================================================================= */}
      {isMessageModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl border border-gray-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-150">
            <div className="bg-[#12302B] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E9B44C]">chat</span>
                <h3 className="font-bold text-sm">إرسال رسالة رسمية إلى تاجر: {storeName}</h3>
              </div>
              <button
                onClick={() => setIsMessageModalOpen(false)}
                className="text-white/70 hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSendMessage} className="p-5 space-y-4 text-xs">
              {messageError && (
                <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 font-bold">
                  {messageError}
                </div>
              )}

              <div>
                <label className="block font-bold text-[#12302B] mb-1">
                  موضوع الرسالة: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={messageSubject}
                  onChange={(e) => setMessageSubject(e.target.value)}
                  placeholder="مثال: استفسار بخصوص تسوية مبيعات الأسبوع"
                  className="w-full border border-gray-300 rounded-xl p-2.5 outline-none focus:border-[#1F7A6E]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#12302B] mb-1">
                  نص الرسالة: <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  placeholder="اكتب التوجيهات أو الملاحظات للتاجر بالتفصيل..."
                  className="w-full border border-gray-300 rounded-xl p-2.5 outline-none focus:border-[#1F7A6E]"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsMessageModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#12302B] hover:bg-[#1c4740] text-white rounded-xl font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">send</span>
                  <span>إرسال الرسالة</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EDIT STORE DETAILS MODAL                                                  */}
      {/* ========================================================================= */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl border border-gray-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-150">
            <div className="bg-[#12302B] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E9B44C]">edit_note</span>
                <h3 className="font-bold text-sm">تعديل بيانات المتجر والمالك</h3>
              </div>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-white/70 hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="p-5 space-y-4 text-xs">
              {editError && (
                <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 font-bold">
                  {editError}
                </div>
              )}

              <div>
                <label className="block font-bold text-[#12302B] mb-1">
                  اسم المتجر التجاري: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-2.5 outline-none focus:border-[#1F7A6E]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#12302B] mb-1">
                  اسم المالك المسؤول: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-2.5 outline-none focus:border-[#1F7A6E]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#12302B] mb-1">
                  رقم الهاتف المباشر: <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-2.5 outline-none focus:border-[#1F7A6E] font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-[#12302B] mb-1">
                  المقر والعنوان: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-2.5 outline-none focus:border-[#1F7A6E]"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#12302B] hover:bg-[#1c4740] text-white rounded-xl font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">save</span>
                  <span>حفظ التعديلات</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
