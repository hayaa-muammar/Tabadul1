import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function MerchantProfilePage() {
  const navigate = useNavigate();

  // Notification toggles state
  const [notifications, setNotifications] = useState({
    otpHandover: true,
    lowStock: true,
    weeklyPayout: true,
  });

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState(null);

  // Modal for showing verified official documents
  const [showDocumentsModal, setShowDocumentsModal] = useState(false);

  // Trigger feedback toast
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Copy store link to clipboard
  const handleShareStoreLink = () => {
    const storeUrl = `${window.location.origin}/stores/lamsa`;
    navigator.clipboard?.writeText(storeUrl).then(() => {
      triggerToast('تم نسخ رابط متجر بوتيك لمسة بنجاح إلى الحافظة!');
    }).catch(() => {
      triggerToast(`رابط المتجر: ${storeUrl}`);
    });
  };

  // Copy PalPay number
  const handleCopyPalPay = () => {
    navigator.clipboard?.writeText('PAL-970-59-9123456').then(() => {
      triggerToast('تم نسخ رقم محفظة PalPay بنجاح!');
    });
  };

  return (
    <div className="bg-[#f6f3ec] min-h-screen flex flex-col font-tajawal text-[#191c22] antialiased selection:bg-[#1f7a6e] selection:text-white">
      {/* Global Merchant Header */}
      <MerchantHeader />

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#12302b] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-[#e9b44c]/40 text-sm font-bold animate-bounce">
          <span className="material-symbols-outlined text-[#e9b44c] text-xl">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. Breadcrumb Navigation */}
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-6 pt-4 pb-2">
        <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium">
          <Link to="/merchant/dashboard" className="hover:text-[#1f7a6e] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">storefront</span>
            الرئيسية
          </Link>
          <span className="text-gray-300">/</span>
          <Link to="/merchant/dashboard" className="hover:text-[#1f7a6e] transition-colors">
            لوحة التحكم
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#12302b] font-bold">الملف الشخصي للتاجر</span>
        </nav>
      </div>

      {/* Main Content Container (Desktop 1280px target) */}
      <main className="max-w-[1280px] w-full mx-auto px-4 md:px-6 pb-16 flex-1 flex flex-col gap-6">

        {/* 3. Merchant Hero Profile Card */}
        <section className="bg-white rounded-2xl border border-[#e5e7eb] shadow-sm overflow-hidden relative">
          {/* Cover Banner */}
          <div className="h-48 md:h-56 relative overflow-hidden bg-gradient-to-r from-[#12302b] via-[#1a4a42] to-[#1f7a6e]">
            <div
              className="w-full h-full bg-cover bg-center opacity-30 mix-blend-overlay"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGf1U8l31O_6pHYcsq0ULMMO3mKYWCSk_csQE03ZNkNmfCj9RHpOD1zmv_uNaT4aX-yXHdZZA_X-aPlQ2bOiCNUbDTRGoGXgqzc5zm61VFq7GsrvMYWyIjdQ4IS9ubjTtxQKAl3cxZnQR9AF9hSDInqogcwKkpxYqcZIuCzNHSjZEU8jSDS3qrYK2_lwqfku-2SjiWL-KazY6EtRsqJmX64aZV3l3biRRqYC2aDCEA')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12302b]/90 via-transparent to-black/20" />

            {/* Change Cover Button */}
            <button
              onClick={() => triggerToast('خاصية تحديث الغلاف متاحة أيضاً عبر شاشة إعدادات المتجر.')}
              type="button"
              className="absolute top-4 left-4 bg-white/90 hover:bg-white text-[#12302b] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-xs flex items-center gap-1.5 transition-all"
            >
              <span className="material-symbols-outlined text-base">photo_camera</span>
              تغيير الغلاف
            </button>

            {/* Subscription Badge Flag */}
            <Link
              to="/merchant/subscription"
              className="absolute top-4 right-4 bg-[#e9b44c] hover:bg-[#d89f38] text-[#12302b] px-3.5 py-1.5 rounded-full font-bold text-xs shadow-md flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-sm icon-fill">workspace_premium</span>
              باقة التاجر المميز Pro (نشطة حتى نهاية 2026)
            </Link>
          </div>

          {/* Store Info Bar Under Cover */}
          <div className="px-6 pb-6 pt-0 relative">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 -mt-16 lg:-mt-20">
              {/* Avatar & Meta Group */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
                {/* Boutique Logo with Verification Badge */}
                <div className="relative group">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white p-1.5 shadow-lg border-2 border-white ring-2 ring-[#1f7a6e]/20 overflow-hidden flex items-center justify-center">
                    <img
                      alt="شعار بوتيك لمسة المعتمد للأزياء"
                      className="w-full h-full object-cover rounded-xl"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1X1OBwErmhl34UQOX_Sf-c2weTFs0q8L8TzzWFi8jfexHmf54Q91lHAnuf1Y_hZo9DiEZQfpGlblW68UgN2aIH7niyYgHN-Ozlz8Cy5eZfsuMbvh-GF8hiyJg312X5cUWS7HWJYMjra_JikWt2bZIXNcMZZFlZcYsaVK4s21-ZSr13_XUQHQ-32NGxhuijldFF3DhiC1CSFHYyX20rXp4A79IHQ2MLiNTrgO9uf6FxD"
                    />
                  </div>
                  <span
                    className="absolute -bottom-2 -left-2 bg-[#e9b44c] text-[#12302b] rounded-full p-1 shadow-md border-2 border-white flex items-center justify-center"
                    title="متجر شريك معتمد"
                  >
                    <span className="material-symbols-outlined text-base icon-fill text-[#12302b]">verified</span>
                  </span>
                </div>

                {/* Identity Info */}
                <div className="flex flex-col gap-1 pb-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-bold text-[#12302b]">
                      بوتيك لمسة للأزياء والأحذية
                    </h1>
                    <span className="bg-[#1f7a6e]/10 text-[#1f7a6e] font-bold text-xs px-2.5 py-0.5 rounded-full border border-[#1f7a6e]/20">
                      متجر شريك معتمد
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs md:text-sm text-gray-600 mt-1">
                    <span className="inline-flex items-center gap-1 text-[#12302b] font-medium">
                      <span className="material-symbols-outlined text-sm text-[#1f7a6e]">person</span>
                      أ. سناء خليل (مديرة العمليات والمبيعات)
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#25D366]">chat</span>
                      <span className="font-semibold" dir="ltr">+970 59 912 3456</span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">بوت واتساب فعال</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#1f7a6e]">
                      <span className="material-symbols-outlined text-sm">photo_camera</span>
                      <span dir="ltr">@lamsa_fashion_boutique</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#1f7a6e]">location_on</span>
                      غزة - حي الرمال، شارع النصر
                    </span>
                  </div>
                </div>
              </div>

              {/* Profile Buttons CTA */}
              <div className="flex items-center gap-3 w-full sm:w-auto self-stretch sm:self-auto justify-end">
                <button
                  onClick={() => navigate('/merchant/profile/edit')}
                  type="button"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1f7a6e] hover:bg-[#186258] text-white font-bold text-sm shadow-sm transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-base">edit</span>
                  تعديل البيانات الشخصية
                </button>
                <button
                  onClick={handleShareStoreLink}
                  type="button"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-100 text-[#12302b] font-bold text-sm shadow-xs transition-all active:scale-95 bg-white"
                >
                  <span className="material-symbols-outlined text-base">share</span>
                  مشاركة رابط المتجر
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Quick Stats Cards (4 Horizontal Cards) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Membership Duration */}
          <div className="bg-white p-4 rounded-xl border border-[#e5e7eb] shadow-2xs flex items-center gap-3.5 hover:border-[#1f7a6e]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#12302b]/5 flex items-center justify-center text-[#12302b] shrink-0">
              <span className="material-symbols-outlined text-2xl text-[#12302b]">history_edu</span>
            </div>
            <div>
              <span className="block text-xs text-gray-500 font-medium">مدة الانضمام والشراكة</span>
              <span className="text-lg font-bold text-[#12302b] leading-tight">8 أشهر</span>
              <span className="block text-[11px] text-[#1f7a6e] font-semibold mt-0.5">شريك مؤسس (مارس 2026)</span>
            </div>
          </div>

          {/* Card 2: Rating */}
          <Link
            to="/merchant/reviews"
            className="bg-white p-4 rounded-xl border border-[#e5e7eb] shadow-2xs flex items-center gap-3.5 hover:border-[#e9b44c] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[#e9b44c]/15 flex items-center justify-center text-[#835400] shrink-0">
              <span className="material-symbols-outlined text-2xl icon-fill text-[#e9b44c]">star</span>
            </div>
            <div>
              <span className="block text-xs text-gray-500 font-medium">تقييم المشترين المعتمد</span>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold text-[#12302b] leading-tight">4.8</span>
                <span className="text-xs text-gray-400">/ 5.0</span>
              </div>
              <span className="block text-[11px] text-gray-500 mt-0.5">من 128 تقييماً موثقاً</span>
            </div>
          </Link>

          {/* Card 3: Safe Handover Commitment */}
          <div className="bg-white p-4 rounded-xl border border-[#e5e7eb] shadow-2xs flex items-center gap-3.5 hover:border-[#1f7a6e]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#2E9E6B]/15 flex items-center justify-center text-[#2E9E6B] shrink-0">
              <span className="material-symbols-outlined text-2xl text-[#2E9E6B]">pin</span>
            </div>
            <div>
              <span className="block text-xs text-gray-500 font-medium">الالتزام بكود التسليم (4 أرقام)</span>
              <span className="text-lg font-bold text-[#2E9E6B] leading-tight">99.2%</span>
              <span className="block text-[11px] text-gray-500 mt-0.5">تسليم موثق بدون منازعات</span>
            </div>
          </div>

          {/* Card 4: Issued Loyalty Points */}
          <div className="bg-white p-4 rounded-xl border border-[#e5e7eb] shadow-2xs flex items-center gap-3.5 hover:border-[#1f7a6e]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#1f7a6e]/10 flex items-center justify-center text-[#1f7a6e] shrink-0">
              <span className="material-symbols-outlined text-2xl text-[#1f7a6e]">loyalty</span>
            </div>
            <div>
              <span className="block text-xs text-gray-500 font-medium">نقاط الولاء المصدرة للزبائن</span>
              <span className="text-lg font-bold text-[#12302b] leading-tight">68,400</span>
              <span className="block text-[11px] text-[#2E9E6B] font-semibold mt-0.5">برنامج كاش باك 5% فعال</span>
            </div>
          </div>
        </section>

        {/* 5. Two-Column Detailed Operational Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Right Column: Administrative & Personal Data */}
          <div className="flex flex-col gap-6">
            {/* Module 1: Account Holder & Official Verification */}
            <section className="bg-white rounded-2xl border border-[#e5e7eb] p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1f7a6e]">badge</span>
                  <h2 className="text-base font-bold text-[#12302b]">بيانات مالك الحساب والتوثيق الرسمي</h2>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs icon-fill">check_circle</span>
                  تم التحقق المالي
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-[#f6f3ec]/60 border border-gray-200/60">
                  <span className="text-xs text-gray-500 block mb-1">الاسم الكامل للمالك</span>
                  <span className="font-bold text-[#12302b] text-sm">سناء يوسف خليل</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f6f3ec]/60 border border-gray-200/60">
                  <span className="text-xs text-gray-500 block mb-1">البريد الإلكتروني المعتمد</span>
                  <span className="font-bold text-[#12302b] text-sm font-mono" dir="ltr">sana.lamsa@tabadul.ps</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f6f3ec]/60 border border-gray-200/60">
                  <span className="text-xs text-gray-500 block mb-1">رقم الهوية الوطنية / السجل</span>
                  <span className="font-bold text-[#12302b] text-sm font-mono tracking-wider">402981774</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f6f3ec]/60 border border-gray-200/60">
                  <span className="text-xs text-gray-500 block mb-1">السجل التجاري لوزارة الاقتصاد</span>
                  <span className="font-bold text-[#12302b] text-sm font-mono">CR-GZ-2025-8831</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>تم استكمال ومصادقة مستندات الهوية والسجل بتاريخ 15 مارس 2026</span>
                <button
                  onClick={() => setShowDocumentsModal(true)}
                  type="button"
                  className="text-[#1f7a6e] hover:underline font-bold"
                >
                  عرض المستندات
                </button>
              </div>
            </section>

            {/* Module 2: Security & Login Configuration */}
            <section className="bg-white rounded-2xl border border-[#e5e7eb] p-6 shadow-sm">
              <div className="flex items-center gap-2 pb-4 border-b border-gray-100 mb-5">
                <span className="material-symbols-outlined text-[#1f7a6e]">lock</span>
                <h2 className="text-base font-bold text-[#12302b]">إعدادات الأمان وتسجيل الدخول</h2>
              </div>

              <div className="flex flex-col gap-4">
                {/* 2FA WhatsApp Toggle */}
                <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#1f7a6e]/20 bg-[#1f7a6e]/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-[#12302b]">
                      <span className="material-symbols-outlined text-2xl text-[#0b8043]">security</span>
                    </div>
                    <div>
                      <span className="font-bold text-sm text-[#12302b] block">التحقق بخطوتين (2FA عبر واتساب)</span>
                      <span className="text-xs text-gray-500">يتم إرسال كود تأكيد لمرة واحدة لكل محاولة دخول جديدة</span>
                    </div>
                  </div>
                  <span className="bg-[#2E9E6B] text-white text-xs font-bold px-3 py-1 rounded-full">مفعّل</span>
                </div>

                {/* Password Change Row */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#f6f3ec]/60 border border-gray-200/60">
                  <div>
                    <span className="font-bold text-sm text-[#12302b] block">كلمة مرور الحساب</span>
                    <span className="text-xs text-gray-500">آخر تحديث لكلمة المرور كان قبل 45 يوماً</span>
                  </div>
                  <button
                    onClick={() => navigate('/merchant/profile/edit')}
                    type="button"
                    className="px-3 py-1.5 text-xs font-bold rounded-lg border border-gray-300 hover:bg-white text-[#12302b] transition-colors"
                  >
                    تحديث كلمة المرور
                  </button>
                </div>

                {/* Active Devices */}
                <div className="p-3.5 rounded-xl bg-[#f6f3ec]/60 border border-gray-200/60">
                  <span className="font-bold text-xs text-[#12302b] block mb-2">الجلسات والأجهزة النشطة الآن (2):</span>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="material-symbols-outlined text-sm">laptop_mac</span>
                        <span>متصفح Chrome - ماك بوك (غزة، الرمال - هذه الجلسة)</span>
                      </div>
                      <span className="text-emerald-700 font-bold">نشط الآن</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="material-symbols-outlined text-sm">smartphone</span>
                        <span>تطبيق تاجر تبادل - iPhone 14 Pro</span>
                      </div>
                      <span className="text-gray-400">منذ 3 ساعات</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Module 3: Instant Notification Preferences */}
            <section className="bg-white rounded-2xl border border-[#e5e7eb] p-6 shadow-sm">
              <div className="flex items-center gap-2 pb-4 border-b border-gray-100 mb-5">
                <span className="material-symbols-outlined text-[#1f7a6e]">notifications_active</span>
                <h2 className="text-base font-bold text-[#12302b]">تفضيلات الإشعارات والتنبيهات المباشرة</h2>
              </div>

              <div className="space-y-3.5">
                {/* WhatsApp Handover OTP */}
                <label className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50/70 cursor-pointer transition-colors">
                  <input
                    checked={notifications.otpHandover}
                    onChange={(e) => {
                      setNotifications({ ...notifications, otpHandover: e.target.checked });
                      triggerToast('تم تحديث تفضيلات إشعارات كود التسليم');
                    }}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1f7a6e] focus:ring-[#1f7a6e]"
                    type="checkbox"
                  />
                  <div>
                    <span className="font-bold text-sm text-[#12302b] block">إشعار واتساب الفوري عند إدخال كود التسليم</span>
                    <span className="text-xs text-gray-500">إشعار صوتي فوري مع تفاصيل الطلب وتأكيد تسليم الزبون بنجاح</span>
                  </div>
                </label>

                {/* Critical Low Stock Alerts */}
                <label className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50/70 cursor-pointer transition-colors">
                  <input
                    checked={notifications.lowStock}
                    onChange={(e) => {
                      setNotifications({ ...notifications, lowStock: e.target.checked });
                      triggerToast('تم تحديث تنبيهات المخزون الحرج');
                    }}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1f7a6e] focus:ring-[#1f7a6e]"
                    type="checkbox"
                  />
                  <div>
                    <span className="font-bold text-sm text-[#12302b] block">تنبيهات المخزون الحرج للمقاسات والألوان</span>
                    <span className="text-xs text-gray-500">إشعار عندما يتبقى أقل من قطعتين من أي فستان أو مقاس حذاء</span>
                  </div>
                </label>

                {/* Payout & Settlements Alert */}
                <label className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50/70 cursor-pointer transition-colors">
                  <input
                    checked={notifications.weeklyPayout}
                    onChange={(e) => {
                      setNotifications({ ...notifications, weeklyPayout: e.target.checked });
                      triggerToast('تم تحديث إشعارات التحويلات المالية');
                    }}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1f7a6e] focus:ring-[#1f7a6e]"
                    type="checkbox"
                  />
                  <div>
                    <span className="font-bold text-sm text-[#12302b] block">إشعارات التحويلات المالية الأسبوعية</span>
                    <span className="text-xs text-gray-500">إشعار فوري بكشف الحساب عند إيداع الرصيد في محفظة بال باي</span>
                  </div>
                </label>
              </div>
            </section>
          </div>

          {/* Left Column: Commercial Activity & Financial Integration */}
          <div className="flex flex-col gap-6">
            {/* Module 4: Certified Financial Account & PalPay Integration */}
            <section className="bg-white rounded-2xl border border-[#e5e7eb] p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1f7a6e]">account_balance</span>
                  <h2 className="text-base font-bold text-[#12302b]">الحساب المالي المعتمد والربط الرقمي</h2>
                </div>
                <span className="bg-[#12302b] text-[#e9b44c] font-bold text-xs px-2.5 py-1 rounded-md">
                  PalPay معتمد
                </span>
              </div>

              {/* PalPay Primary Wallet Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#12302b] to-[#1f7a6e] text-white shadow-sm mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e9b44c]">wallet</span>
                    <span className="font-bold text-sm">محفظة بال باي (PalPay) الإلكترونية</span>
                  </div>
                  <span className="text-[11px] bg-white/20 text-white px-2 py-0.5 rounded-full font-semibold">حساب التحويل الأساسي</span>
                </div>
                <div className="font-mono text-base tracking-wider bg-black/20 p-2.5 rounded-lg flex items-center justify-between" dir="ltr">
                  <span>PAL-970-59-9123456</span>
                  <button
                    onClick={handleCopyPalPay}
                    type="button"
                    title="نسخ رقم المحفظة"
                    className="hover:text-[#e9b44c] transition-colors flex items-center gap-1 text-xs"
                  >
                    <span className="material-symbols-outlined text-sm text-emerald-400">content_copy</span>
                  </button>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-200 mt-2.5">
                  <span>الاسم المسجل: بوتيك لمسة للأزياء</span>
                  <span>الحالة: نشط ومتصل تلقائياً</span>
                </div>
              </div>

              {/* Secondary Bank Account */}
              <div className="p-3.5 rounded-xl bg-[#f6f3ec]/60 border border-gray-200/60 mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500 font-medium">الحساب البنكي المعتمد للسحب المباشر:</span>
                  <span className="text-xs text-gray-600 font-bold">بنك فلسطين - فرع الرمال</span>
                </div>
                <span className="font-mono text-sm font-bold text-[#12302b] block" dir="ltr">
                  PS92 PALS 0458 0000 0128 4492 100
                </span>
              </div>

              {/* Payout Cycle Selection */}
              <div className="p-4 rounded-xl border border-[#e9b44c]/30 bg-[#e9b44c]/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="material-symbols-outlined text-[#835400] text-lg">event_repeat</span>
                  <span className="font-bold text-sm text-[#12302b]">دورة التحويلات التلقائية المختارة:</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  تحويل أسبوعي دوري <strong>(كل يوم خميس الساعة 02:00 ظهراً)</strong> مباشرة إلى محفظة بال باي بدون رسوم تحويل إضافية.
                </p>
              </div>
            </section>

            {/* Module 5: Fashion & Footwear Exclusivity Categories */}
            <section className="bg-white rounded-2xl border border-[#e5e7eb] p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1f7a6e]">checkroom</span>
                  <h2 className="text-base font-bold text-[#12302b]">فئات المنتجات النشطة بالمتجر</h2>
                </div>
                <span className="text-xs bg-[#1f7a6e]/10 text-[#1f7a6e] font-bold px-2 py-0.5 rounded">4 فئات معتمدة</span>
              </div>

              {/* Platform Rule Notice */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200/70 text-xs text-amber-900 mb-4">
                <span className="material-symbols-outlined text-base text-amber-700 shrink-0">info</span>
                <p>
                  <strong>تذكير بسياسة المنصة:</strong> منصة تبادل مخصصة حصرياً للملابس، العبايات، الأحذية، ومستلزمات الأناقة النسائية والرجالية والأطفال لضمان تجربة تسوق متخصصة وعالية الجودة.
                </p>
              </div>

              {/* Active Boutique Categories Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl border border-gray-200 bg-white flex items-center gap-2.5 hover:border-[#1f7a6e]/40 transition-colors">
                  <span className="material-symbols-outlined text-[#1f7a6e] text-xl">styler</span>
                  <div>
                    <span className="font-bold text-xs text-[#12302b] block">فساتين وسهرة</span>
                    <span className="text-[10px] text-gray-500">34 منتج متاح</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-gray-200 bg-white flex items-center gap-2.5 hover:border-[#1f7a6e]/40 transition-colors">
                  <span className="material-symbols-outlined text-[#1f7a6e] text-xl">dry_cleaning</span>
                  <div>
                    <span className="font-bold text-xs text-[#12302b] block">عبايات وشالات مطرزة</span>
                    <span className="text-[10px] text-gray-500">22 منتج متاح</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-gray-200 bg-white flex items-center gap-2.5 hover:border-[#1f7a6e]/40 transition-colors">
                  <span className="material-symbols-outlined text-[#1f7a6e] text-xl">steps</span>
                  <div>
                    <span className="font-bold text-xs text-[#12302b] block">أحذية وسنيكرز نسائي</span>
                    <span className="text-[10px] text-gray-500">18 منتج متاح</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-gray-200 bg-white flex items-center gap-2.5 hover:border-[#1f7a6e]/40 transition-colors">
                  <span className="material-symbols-outlined text-[#1f7a6e] text-xl">child_friendly</span>
                  <div>
                    <span className="font-bold text-xs text-[#12302b] block">أزياء مناسبات أطفال</span>
                    <span className="text-[10px] text-gray-500">12 منتج متاح</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Module 6: Shipping Policies & Delivery Zones */}
            <section className="bg-white rounded-2xl border border-[#e5e7eb] p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1f7a6e]">local_shipping</span>
                  <h2 className="text-base font-bold text-[#12302b]">شروط ومناطق التوصيل المسجلة</h2>
                </div>
                <Link to="/merchant/settings" className="text-xs text-[#1f7a6e] font-bold hover:underline">
                  تعديل التسعيرة
                </Link>
              </div>

              <div className="space-y-3">
                {/* Delivery Zone 1: Gaza City */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f3ec]/60 border border-gray-200/60">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#1f7a6e] shadow-2xs font-bold text-xs">
                      <span className="material-symbols-outlined text-sm">location_city</span>
                    </span>
                    <div>
                      <span className="font-bold text-xs text-[#12302b] block">مدينة غزة (الرمال، النصر، تل الهوا، الشجاعية)</span>
                      <span className="text-[11px] text-gray-500">مندوب البوتيك الخاص (توصيل سريع بنفس اليوم)</span>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-[#12302b] font-mono">10 ₪</span>
                </div>

                {/* Delivery Zone 2: Middle & South */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f3ec]/60 border border-gray-200/60">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#1f7a6e] shadow-2xs font-bold text-xs">
                      <span className="material-symbols-outlined text-sm">commute</span>
                    </span>
                    <div>
                      <span className="font-bold text-xs text-[#12302b] block">المحافظة الوسطى وخانيونس ورفح</span>
                      <span className="text-[11px] text-gray-500">خلال 24-48 ساعة عبر شركة شحن شريكة</span>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-[#12302b] font-mono">15 ₪</span>
                </div>

                {/* In-Store Pickup Option */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#2E9E6B] shadow-2xs font-bold text-xs">
                      <span className="material-symbols-outlined text-sm">store</span>
                    </span>
                    <div>
                      <span className="font-bold text-xs text-emerald-900 block">الاستلام المباشر من مقر البوتيك</span>
                      <span className="text-[11px] text-emerald-700">غزة - حي الرمال، شارع النصر بجوار مجمع الأزياء</span>
                    </div>
                  </div>
                  <span className="font-bold text-xs text-emerald-700 bg-white px-2.5 py-1 rounded-full border border-emerald-200">
                    مجاناً 0 ₪
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Official Documents Verification Modal */}
      {showDocumentsModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-200 space-y-4 animate-scaleIn">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1f7a6e]">verified</span>
                <h3 className="font-bold text-[#12302b] text-base">المستندات الرسمية والتوثيق المالي</h3>
              </div>
              <button
                onClick={() => setShowDocumentsModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/70 flex items-center justify-between">
                <div>
                  <span className="font-bold text-emerald-900 block">شهادة السجل التجاري المعتمد</span>
                  <span className="text-emerald-700 text-[11px]">رقم: CR-GZ-2025-8831 • صادرة عن وزارة الاقتصاد الوطني</span>
                </div>
                <span className="bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[10px]">موثق</span>
              </div>

              <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/70 flex items-center justify-between">
                <div>
                  <span className="font-bold text-emerald-900 block">بطاقة الهوية الشخصية لمالك المتجر</span>
                  <span className="text-emerald-700 text-[11px]">سناء يوسف خليل • رقم الهوية: 402981774</span>
                </div>
                <span className="bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[10px]">موثق</span>
              </div>

              <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/70 flex items-center justify-between">
                <div>
                  <span className="font-bold text-emerald-900 block">شهادة اعتماد محفظة PalPay الإلكترونية</span>
                  <span className="text-emerald-700 text-[11px]">PAL-970-59-9123456 • متصل ومصرح بالتحويل المباشر</span>
                </div>
                <span className="bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[10px]">معتمد</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowDocumentsModal(false)}
                className="px-5 py-2 bg-[#12302b] text-white rounded-xl text-xs font-bold hover:bg-[#1f7a6e] transition-colors"
              >
                إغلاق النافذة
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
