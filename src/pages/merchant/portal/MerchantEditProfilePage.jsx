import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function MerchantEditProfilePage() {
  const navigate = useNavigate();

  // Initial Form Data State
  const initialData = {
    fullNameAr: 'سناء يوسف خليل',
    fullNameEn: 'Sana Y. Khalil',
    adminRole: 'مديرة العمليات والمبيعات - مالك الحساب',
    dob: '1988-06-14',
    gender: 'female',
    phone: '+970 59 912 3456',
    altPhone: '+970 8 282 4411',
    email: 'sana.lamsa@tabadul.ps',
    address: 'غزة - حي الرمال الجنوبي - شارع النصر بالقرب من مفترق الاتصالات',
    palpayWallet: 'PAL-970-59-9123456',
    beneficiaryName: 'سناء يوسف خليل',
    payoutCycle: 'weekly',
    bankIban: 'بنك فلسطين - فرع الرمال (PS42PALS000000012984029)',
    twoFactorAuth: true,
    currentPassword: '••••••••••••',
    newPassword: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState(initialData);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpPhoneInput, setOtpPhoneInput] = useState('+970 59 912 3456');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState(['', '', '', '']);
  const [avatarUrl, setAvatarUrl] = useState(
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCmaLVMj7k3Z-ye6bTSosPYMfzvbpZlJ7C9irpjT2GqzDb5qd8rh84S6lhgkAL0IDHIA9OKDv-2K_G21sXX1UPlHugY727CcEhAvrfFCuYe3VKfxek6-dNriGkDSzuAZVDxcgjj_A2NnCy8mJVmnOd6f5hjo-iJLyh9RTbHMssiU2wtbxWmGTYzrmyDUjFd-_j9vFkki3W27ln5UWx-_tN6cjNXDBkhWV-9S0POZN5P'
  );
  const [palpayStatus, setPalpayStatus] = useState('connected');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handleReset = () => {
    setFormData(initialData);
    setHasChanges(false);
    triggerToast('تمت إعادة تعيين الحقول إلى القيم الأصلية.');
  };

  const handleSave = (e) => {
    if (e) e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setHasChanges(false);
      triggerToast('تم حفظ كافة تعديلات البيانات الشخصية بنجاح!');
    }, 900);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
      setHasChanges(true);
      triggerToast('تم تحميل الصورة الشخصية الجديدة بنجاح.');
    }
  };

  const handleDeleteAvatar = () => {
    setAvatarUrl(
      'https://lh3.googleusercontent.com/aida/AEtjO1X1OBwErmhl34UQOX_Sf-c2weTFs0q8L8TzzWFi8jfexHmf54Q91lHAnuf1Y_hZo9DiEZQfpGlblW68UgN2aIH7niyYgHN-Ozlz8Cy5eZfsuMbvh-GF8hiyJg312X5cUWS7HWJYMjra_JikWt2bZIXNcMZZFlZcYsaVK4s21-ZSr13_XUQHQ-32NGxhuijldFF3DhiC1CSFHYyX20rXp4A79IHQ2MLiNTrgO9uf6FxD'
    );
    setHasChanges(true);
    triggerToast('تم تعيين شعار المتجر الافتراضي كصورة شخصية.');
  };

  const handleTestPalPay = () => {
    setPalpayStatus('testing');
    setTimeout(() => {
      setPalpayStatus('success');
      triggerToast('الاتصال سليم: محفظة PalPay الإلكترونية متصلة ومصرحة بالتحويل.');
      setTimeout(() => setPalpayStatus('connected'), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased flex flex-col pb-28 selection:bg-[#1F7A6E] selection:text-white">
      {/* Top Navigation */}
      <MerchantHeader />

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#12302B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#E9B44C]/50 text-sm font-bold animate-bounce">
          <span className="material-symbols-outlined text-[#E9B44C] text-xl">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <main className="w-full max-w-[1280px] mx-auto px-4 md:px-6 pt-6 pb-12 flex-1">
        {/* 1. BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-500 mb-4 font-medium">
          <Link to="/merchant/dashboard" className="hover:text-[#1F7A6E] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">home</span>
            <span>الرئيسية</span>
          </Link>
          <span className="text-gray-300">/</span>
          <Link to="/merchant/dashboard" className="hover:text-[#1F7A6E] transition-colors">
            لوحة التحكم
          </Link>
          <span className="text-gray-300">/</span>
          <Link to="/merchant/profile" className="hover:text-[#1F7A6E] transition-colors">
            الملف الشخصي
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#1F7A6E] font-bold">تعديل البيانات الشخصية</span>
        </nav>

        {/* 2. HEADER BANNER & ACTION BAR */}
        <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 md:p-8 shadow-sm mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F7A6E]/10 rounded-full text-[#1F7A6E] text-xs font-bold mb-1">
              <span className="material-symbols-outlined text-sm">badge</span>
              <span>حساب التاجر الفردي (مالك الحساب الأساسي)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#12302B]">
              تعديل البيانات الشخصية لمالك الحساب
            </h1>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              تعديل معلوماتك الشخصية، بيانات الاتصال، معلومات التحقق والهوية الوطنية، ووسائل الأمان لحساب التاجر في منصة تبادل.
            </p>
          </div>

          {/* Action Buttons Cluster */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
            <button
              onClick={() => navigate('/merchant/profile')}
              type="button"
              className="px-5 py-3 rounded-xl border border-[#E1DACB] text-[#12302B] bg-white hover:bg-gray-50 text-xs md:text-sm font-bold transition-all active:scale-95 flex items-center justify-center gap-2 shadow-xs"
            >
              <span className="material-symbols-outlined text-lg">close</span>
              <span>إلغاء والعودة للملف الشخصي</span>
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              type="button"
              className="px-6 py-3 rounded-xl bg-[#E9B44C] hover:bg-[#D89F38] text-[#1A1D23] font-black text-xs md:text-sm transition-all active:scale-95 flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-60"
            >
              {isSaving ? (
                <>
                  <span className="material-symbols-outlined text-lg animate-spin">refresh</span>
                  <span>جاري الحفظ...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-lg">save</span>
                  <span>حفظ التغييرات</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3. FORM GRID SECTION (TWO-COLUMN ARCHITECTURE) */}
        <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= RIGHT COLUMN (lg:col-span-5) ================= */}
          <div className="lg:col-span-5 space-y-8">
            {/* CARD 1: PERSONAL AVATAR & VERIFICATION BADGE */}
            <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h2 className="text-base font-bold text-[#12302B] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl">account_circle</span>
                  الصورة الشخصية وحالة التوثيق
                </h2>
                <span className="text-[11px] bg-[#E9B44C]/20 text-[#835400] font-bold px-2.5 py-1 rounded-full border border-[#E9B44C]/40">
                  المستوى الذهبي
                </span>
              </div>

              {/* Avatar & Actions */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-5">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-2xl ring-4 ring-[#F6F3EC] overflow-hidden shadow-inner bg-gray-100">
                    <img
                      className="w-full h-full object-cover"
                      src={avatarUrl}
                      alt="الصورة الشخصية لمالك الحساب سناء خليل"
                    />
                  </div>
                  <div
                    className="absolute -bottom-1.5 -left-1.5 bg-[#2E7D32] text-white p-1 rounded-full border-2 border-white shadow-xs"
                    title="موثق رسمياً"
                  >
                    <span className="material-symbols-outlined text-xs block icon-fill">check</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer px-4 py-2 bg-[#12302B] hover:bg-black text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs">
                      <span className="material-symbols-outlined text-base">photo_camera</span>
                      <span>تغيير الصورة الشخصية</span>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/webp"
                        className="hidden"
                        onChange={handleAvatarChange}
                      />
                    </label>
                    <button
                      type="button"
                      onClick={handleDeleteAvatar}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors border border-gray-200"
                      title="حذف الصورة"
                    >
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                  <span className="text-[11px] text-gray-500">صيغ JPG أو PNG، الحجم الأقصى 3 ميغابايت.</span>
                </div>
              </div>

              {/* Official Status Details */}
              <div className="mt-6 bg-[#FAF8F5] rounded-xl p-4 border border-[#E1DACB] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">رقم المرجع المعتمد:</span>
                  <span className="font-mono font-bold text-[#12302B] bg-white px-2 py-0.5 rounded border border-gray-200">
                    USR-GZ-2026-9142
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">حالة الهوية الوطنية:</span>
                  <span className="inline-flex items-center gap-1 text-[#2E7D32] font-semibold bg-[#E8F5E9] px-2.5 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-xs icon-fill">verified</span>
                    هوية موثقة رسمياً
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">تاريخ آخر تدقيق أمني:</span>
                  <span className="font-bold text-[#12302B]">12 يناير 2025</span>
                </div>
              </div>

              {/* Security Note Alert */}
              <div className="mt-4 p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
                <span className="material-symbols-outlined text-amber-600 text-lg shrink-0 mt-0.5 icon-fill">
                  shield
                </span>
                <span>
                  تنبيه أمان: تحديث البيانات الحساسة مثل رقم الهوية يتطلب التحقق برمز OTP عبر رقم الواتساب المعتمد لضمان حماية الملكية.
                </span>
              </div>
            </div>

            {/* CARD 2: ACCOUNT SECURITY & CREDENTIALS */}
            <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h2 className="text-base font-bold text-[#12302B] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl">lock_reset</span>
                  أمان الحساب وتسجيل الدخول
                </h2>
                <span className="text-[11px] text-green-700 bg-green-50 px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                  مستوى حماية مرتفع
                </span>
              </div>

              {/* 2FA Toggle Switch */}
              <div className="mt-5 p-4 rounded-xl border border-[#E1DACB] bg-[#FCFBF8] flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-lg">verified_user</span>
                    <span className="font-bold text-sm text-[#12302B]">التحقق بخطوتين (2FA عبر واتساب)</span>
                  </div>
                  <p className="text-xs text-gray-500">يصلك رمز تحقق فوري عند تسجيل الدخول من جهاز جديد</p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    checked={formData.twoFactorAuth}
                    onChange={(e) => handleChange('twoFactorAuth', e.target.checked)}
                    className="sr-only peer"
                    type="checkbox"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1F7A6E]"></div>
                </label>
              </div>

              {/* Change Password Fields */}
              <div className="mt-5 space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">كلمة المرور الحالية</label>
                  <div className="relative">
                    <input
                      className="w-full h-11 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] text-[#12302B] font-mono"
                      type={showCurrentPassword ? 'text' : 'password'}
                      value={formData.currentPassword}
                      onChange={(e) => handleChange('currentPassword', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-gray-400 text-lg">
                      key
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute left-3 top-2.5 text-gray-400 hover:text-gray-600"
                    >
                      <span className="material-symbols-outlined text-lg">
                        {showCurrentPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">كلمة المرور الجديدة</label>
                  <div className="relative">
                    <input
                      className="w-full h-11 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] text-[#12302B]"
                      placeholder="أدخل كلمة مرور قوية وجديدة"
                      type="password"
                      value={formData.newPassword}
                      onChange={(e) => handleChange('newPassword', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-gray-400 text-lg">
                      lock
                    </span>
                  </div>

                  {/* Strength meter bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>قوة كلمة المرور:</span>
                      <span className="text-[#2E7D32] font-bold">ممتازة (88%)</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#2E7D32] h-full w-[88%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">تأكيد كلمة المرور الجديدة</label>
                  <div className="relative">
                    <input
                      className="w-full h-11 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] text-[#12302B]"
                      placeholder="أعد إدخال كلمة المرور للتأكيد"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-gray-400 text-lg">
                      check_circle
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Sessions Notification */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-500 text-xl">devices</span>
                  <div>
                    <span className="text-xs font-bold text-[#12302B] block">2 جلسات نشطة حالياً</span>
                    <span className="text-[11px] text-gray-500">جهاز كمبيوتر (غزة) • هاتف آيفون (غزة)</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => triggerToast('تم تسجيل الخروج من كافة الأجهزة الأخرى بنجاح.')}
                  className="text-xs font-bold text-red-600 hover:underline py-1.5 px-3 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 transition-colors"
                >
                  تسجيل الخروج من كافة الأجهزة الأخرى
                </button>
              </div>
            </div>
          </div>

          {/* ================= LEFT COLUMN (lg:col-span-7) ================= */}
          <div className="lg:col-span-7 space-y-8">
            {/* CARD 3: BASIC PERSONAL DETAILS */}
            <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h2 className="text-base font-bold text-[#12302B] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl">person</span>
                  البيانات الأساسية والشخصية
                </h2>
                <span className="text-xs text-gray-500">* الحقول المطلوبة إلزامية للتوثيق</span>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name (Arabic) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">
                    الاسم الكامل بالعربية <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] font-medium text-[#12302B]"
                      type="text"
                      value={formData.fullNameAr}
                      onChange={(e) => handleChange('fullNameAr', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg">
                      badge
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500">مطابق للاسم في بطاقة الهوية الرسمية</span>
                </div>

                {/* Full Name (English) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">
                    الاسم الكامل بالإنجليزية <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] font-medium text-[#12302B] text-right"
                      dir="ltr"
                      type="text"
                      value={formData.fullNameEn}
                      onChange={(e) => handleChange('fullNameEn', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg">
                      translate
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500">يُستخدم في الفواتير والتحويلات البنكية</span>
                </div>

                {/* Administrative Role */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-xs font-bold text-[#12302B]">
                    الصفة / المسمى الإداري في المنصة <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] font-medium text-[#12302B]"
                      type="text"
                      value={formData.adminRole}
                      onChange={(e) => handleChange('adminRole', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg">
                      work
                    </span>
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">
                    تاريخ الميلاد <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] text-[#12302B]"
                      type="date"
                      value={formData.dob}
                      onChange={(e) => handleChange('dob', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg">
                      calendar_today
                    </span>
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">
                    النوع / الجنس
                  </label>
                  <div className="relative">
                    <select
                      className="w-full h-12 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] text-[#12302B] appearance-none bg-white font-medium"
                      value={formData.gender}
                      onChange={(e) => handleChange('gender', e.target.value)}
                    >
                      <option value="female">أنثى</option>
                      <option value="male">ذكر</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg">
                      wc
                    </span>
                    <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400 text-lg pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4: CONTACT & RESIDENCE DETAILS */}
            <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h2 className="text-base font-bold text-[#12302B] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl">contacts</span>
                  بيانات الاتصال والمراسلات الشخصية
                </h2>
                <span className="text-xs text-gray-500">تُستخدم للإشعارات الشخصية فقط</span>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Primary WhatsApp Mobile */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-xs font-bold text-[#12302B]">
                    رقم الجوال الأساسي (المربوط بالتحقق وبوت واتساب) <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <div className="relative flex-1 w-full">
                      <input
                        className="w-full h-12 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] text-[#12302B] font-medium text-right"
                        dir="ltr"
                        type="text"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                      <span className="material-symbols-outlined absolute right-3 top-3 text-[#25D366] text-lg icon-fill">
                        chat
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowOtpModal(true)}
                      className="w-full sm:w-auto px-4 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#12302B] font-bold text-xs transition-all flex items-center justify-center gap-1.5 shrink-0 border border-gray-300"
                    >
                      <span className="material-symbols-outlined text-base">phonelink_ring</span>
                      <span>تغيير الرقم مع التحقق</span>
                    </button>
                  </div>
                  <span className="text-[11px] text-gray-500">
                    تصلك عليه رموز الأمان وتنبيهات التحويلات المالية الفورية.
                  </span>
                </div>

                {/* Alternative / Emergency Phone */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">
                    رقم هاتف بديل / للطوارئ
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] text-[#12302B] text-right font-medium"
                      dir="ltr"
                      type="text"
                      value={formData.altPhone}
                      onChange={(e) => handleChange('altPhone', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg">
                      call
                    </span>
                  </div>
                </div>

                {/* Verified Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">
                    البريد الإلكتروني المعتمد <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-3.5 pr-10 pl-9 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] text-[#12302B] text-right font-medium"
                      dir="ltr"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg">
                      mail
                    </span>
                    <span
                      className="material-symbols-outlined absolute left-3 top-3 text-[#2E7D32] text-lg icon-fill"
                      title="بريد موثق"
                    >
                      check_circle
                    </span>
                  </div>
                </div>

                {/* Residential Address */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-xs font-bold text-[#12302B]">
                    العنوان السكني / الشخصي <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] text-[#12302B]"
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg">
                      home_pin
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500">
                    عنوان الإقامة الفعلي لمالك الحساب لأغراض التوثيق الإداري.
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 5: PERSONAL FINANCIAL ACCOUNT & WITHDRAWALS (PalPay) */}
            <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h2 className="text-base font-bold text-[#12302B] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl">payments</span>
                  الحساب المالي الشخصي وسحب المستحقات (PalPay)
                </h2>
                <span className="text-[11px] font-bold text-[#12302B] bg-[#E9B44C]/25 border border-[#E9B44C]/40 px-2.5 py-0.5 rounded-full">
                  محفظة معتمدة
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* PalPay Wallet Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">
                    رقم محفظة بال باي (PalPay) الشخصية <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] font-mono font-bold text-[#12302B] text-right"
                      dir="ltr"
                      type="text"
                      value={formData.palpayWallet}
                      onChange={(e) => handleChange('palpayWallet', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-[#1F7A6E] text-lg">
                      account_balance_wallet
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500">محفظة سحب أرباح التاجر الشخصية المباشرة</span>
                </div>

                {/* Beneficiary Name Matching Wallet */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">
                    اسم المستفيد المطابق للمحفظة <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] font-medium text-[#12302B]"
                      type="text"
                      value={formData.beneficiaryName}
                      onChange={(e) => handleChange('beneficiaryName', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg">
                      how_to_reg
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500">يجب تطابق الاسم الثلاثي بالكامل مع المحفظة</span>
                </div>

                {/* Preferred Payout Cycle */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">دورة التحويل المالي المفضلة</label>
                  <div className="relative">
                    <select
                      className="w-full h-12 px-3.5 pr-10 text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] text-[#12302B] appearance-none bg-white font-medium"
                      value={formData.payoutCycle}
                      onChange={(e) => handleChange('payoutCycle', e.target.value)}
                    >
                      <option value="weekly">أسبوعي (كل يوم خميس تلقائياً)</option>
                      <option value="biweekly">نصف شهري (اليوم 1 و 15 من الشهر)</option>
                      <option value="monthly">شهري (اليوم الأخير من كل شهر ميلادي)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg">
                      event_repeat
                    </span>
                    <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400 text-lg pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Primary Bank Account for Direct Wire */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">
                    الحساب البنكي المعتمد للسحب (IBAN)
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-3.5 pr-10 text-xs sm:text-sm rounded-xl border border-gray-300 focus:border-[#1F7A6E] text-[#12302B] text-right font-medium"
                      dir="ltr"
                      type="text"
                      value={formData.bankIban}
                      onChange={(e) => handleChange('bankIban', e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg">
                      account_balance
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500">حساب سحب بديل عند تجاوز حدود المحافظ الرقمية</span>
                </div>
              </div>

              {/* PalPay Notice Banner */}
              <div className="mt-4 p-3 bg-[#E8F5E9]/60 border border-[#A5D6A7] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#1B5E20]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#2E7D32] text-lg icon-fill">verified</span>
                  <span>
                    محفظة بال باي الخاصة بك مفعلة وجاهزة لاستقبال الحوالات تلقائياً وبدون عمولات إضافية.
                  </span>
                </div>
                <button
                  onClick={handleTestPalPay}
                  type="button"
                  className="text-xs font-bold underline hover:text-black shrink-0"
                >
                  {palpayStatus === 'testing' ? 'جاري الفحص...' : palpayStatus === 'success' ? '✓ الاتصال ناجح' : 'فحص الاتصال'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>

      {/* OTP Verification Modal for Phone Change */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1F7A6E]">security</span>
                <h3 className="font-bold text-[#12302B] text-base">التحقق من رقم الجوال الجديد</h3>
              </div>
              <button
                onClick={() => setShowOtpModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500"
              >
                ✕
              </button>
            </div>

            {!otpSent ? (
              <div className="space-y-4">
                <p className="text-xs text-gray-600">
                  سيتم إرسال رمز أمان لمرة واحدة عبر واتساب للتأكد من ملكيتك للرقم الجديد قبل اعتماده.
                </p>
                <div>
                  <label className="block text-xs font-bold text-[#12302B] mb-1">رقم الجوال الجديد</label>
                  <input
                    dir="ltr"
                    className="w-full h-11 px-3 text-sm rounded-xl border border-gray-300 text-right font-medium"
                    value={otpPhoneInput}
                    onChange={(e) => setOtpPhoneInput(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setOtpSent(true)}
                  className="w-full py-2.5 bg-[#1F7A6E] hover:bg-[#12302B] text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  إرسال كود التحقق الآن عبر واتساب
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-gray-600">
                  أدخل رمز التحقق المكون من 4 أرقام المرسل إلى <span className="font-bold font-mono" dir="ltr">{otpPhoneInput}</span>
                </p>
                <div className="flex justify-center gap-2 dir-ltr">
                  {[0, 1, 2, 3].map((idx) => (
                    <input
                      key={idx}
                      id={`otp-input-${idx}`}
                      className="w-12 h-12 text-center text-xl font-bold rounded-xl border border-gray-300 focus:border-[#1F7A6E]"
                      maxLength="1"
                      value={otpCode[idx]}
                      onChange={(e) => {
                        const newOtp = [...otpCode];
                        newOtp[idx] = e.target.value;
                        setOtpCode(newOtp);
                        if (e.target.value && idx < 3) {
                          document.getElementById(`otp-input-${idx + 1}`)?.focus();
                        }
                      }}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleChange('phone', otpPhoneInput);
                    setShowOtpModal(false);
                    setOtpSent(false);
                    setOtpCode(['', '', '', '']);
                    triggerToast(`تم التحقق بنجاح واعتماد الرقم الجديد: ${otpPhoneInput}`);
                  }}
                  className="w-full py-2.5 bg-[#E9B44C] hover:bg-[#D89F38] text-[#12302B] rounded-xl text-xs font-black transition-all shadow-sm"
                >
                  تأكيد واعتماد الرقم الجديد
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= STICKY BOTTOM ACTION BAR ================= */}
      <aside className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-[#E1DACB] z-40 py-3.5 px-4 shadow-[0_-4px_20px_rgba(18,48,43,0.08)]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Unsaved Changes Status Indicator */}
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${hasChanges ? 'bg-[#E9B44C] animate-pulse' : 'bg-emerald-500'}`}></div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="text-xs sm:text-sm font-bold text-[#12302B]">
                {hasChanges ? 'لديك تعديلات غير محفوظة في البيانات الشخصية' : 'كافة البيانات الشخصية محفوظة ومحدثة'}
              </span>
              <span className="text-xs text-gray-500 hidden md:inline">
                | سيتم تسجيل وقت التحديث وعنوان IP لأمان حسابك
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={handleReset}
              disabled={!hasChanges}
              type="button"
              className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 text-xs sm:text-sm font-bold transition-all active:scale-95 flex items-center gap-1.5 disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-base">restart_alt</span>
              <span>إعادة التعيين</span>
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              type="button"
              className="px-6 py-2.5 rounded-xl bg-[#E9B44C] hover:bg-[#D89F38] text-[#1A1D23] font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <span className="material-symbols-outlined text-base animate-spin">refresh</span>
                  <span>جاري الحفظ...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>حفظ التغييرات الآن</span>
                </>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Footer */}
      <Footer />
    </div>
  );
}
