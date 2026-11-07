import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function MerchantSettingsPage() {
  const navigate = useNavigate();

  // Active section tab in sidebar
  const [activeTab, setActiveTab] = useState('general');

  // Form states
  const [storeName, setStoreName] = useState('بوتيك لمسة');
  const [storeBio, setStoreBio] = useState(
    'وجهتكم الأولى في غزة لأفخم الفساتين العصرية، العبايات المطرزة بعناية، والأحذية النسائية الأنيقة. نضمن لكم خامات ممتازة وتسليم سريع مع خدمة الدفع عند الاستلام ونقاط الولاء الفورية عبر تبادل.'
  );
  const [storePhone, setStorePhone] = useState('+970 59 912 3456');
  const [instagram, setInstagram] = useState('instagram.com/lamsa_boutique.ps');
  const [location, setLocation] = useState('غزة - الرمال الجنوبي، شارع النصر');

  // Category checkboxes
  const [categories, setCategories] = useState({
    fashion: true,
    abaya: true,
    shoes: true,
    kids: true,
  });

  // Delivery options
  const [deliveryType, setDeliveryType] = useState('self'); // 'self' | 'partner'
  const [gazaFee, setGazaFee] = useState(10);
  const [southFee, setSouthFee] = useState(15);
  const [freeShippingThreshold, setFreeShippingThreshold] = useState(200);
  const [allowPickup, setAllowPickup] = useState(true);

  // Financial
  const [palpayId, setPalpayId] = useState('PAL-970-59-9123456');
  const [settlementCycle, setSettlementCycle] = useState('weekly');

  // Notifications
  const [notifyNewOrder, setNotifyNewOrder] = useState(true);
  const [notifyPinConfirm, setNotifyPinConfirm] = useState(true);
  const [notifyLowStock, setNotifyLowStock] = useState(true);

  // Danger zone
  const [vacationMode, setVacationMode] = useState(false);

  // Has unsaved changes banner
  const [hasChanges, setHasChanges] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSave = () => {
    setHasChanges(false);
    showToast('تم حفظ وتحديث إعدادات المتجر والملف التجاري بنجاح! تم تطبيق التغييرات فوراً.');
  };

  const handleReset = () => {
    setStoreName('بوتيك لمسة');
    setStorePhone('+970 59 912 3456');
    setInstagram('instagram.com/lamsa_boutique.ps');
    setLocation('غزة - الرمال الجنوبي، شارع النصر');
    setGazaFee(10);
    setSouthFee(15);
    setFreeShippingThreshold(200);
    setHasChanges(false);
    showToast('تم التراجع عن التعديلات وإعادة ضبط البيانات الأصلية.');
  };

  const scrollToSection = (id, tabName) => {
    setActiveTab(tabName);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#F6F3EC] text-[#12302B] min-h-screen flex flex-col font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]" dir="rtl">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 left-6 z-50 bg-[#12302B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#E9B44C]/40 animate-fadeIn">
          <span className="material-symbols-outlined text-[#E9B44C] text-xl icon-fill">check_circle</span>
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* 1. TopNavBar: Shared Component with Merchant Controls & Branding */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E1DACB] shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Brand & Store Identity */}
          <div className="flex items-center gap-4">
            <Link to="/merchant/dashboard" className="flex items-center gap-2.5 transition-transform active:scale-95">
              <div className="h-10 sm:h-11 w-auto flex items-center justify-center">
                <img
                  alt="شعار منصة تبادل"
                  className="h-full w-auto object-contain rounded-lg shadow-sm"
                  src="/logo.png"
                />
              </div>
              <span className="hidden sm:inline-block font-extrabold text-base text-[#12302B] tracking-tight">
                تبادل للمتاجر
              </span>
            </Link>

            {/* Vertical Divider */}
            <span className="hidden md:block h-6 w-px bg-[#E1DACB]" />

            {/* Active Store Badge */}
            <div className="flex items-center gap-2 bg-[#F6F3EC]/80 px-3 py-1.5 rounded-lg border border-[#E1DACB]/80">
              <div className="w-7 h-7 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                ل
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-[#12302B] leading-none">بوتيك لمسة</span>
                  <span className="material-symbols-outlined text-[15px] text-[#E9B44C] icon-fill" title="متجر ذهبي معتمد">
                    verified
                  </span>
                </div>
                <span className="text-[10px] text-[#1F7A6E] font-medium mt-0.5">غزة - حي الرمال</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-bold">
            <Link to="/merchant/dashboard" className="text-[#526661] hover:text-[#1F7A6E] transition-colors pb-1">
              الرئيسية
            </Link>
            <Link to="/merchant/orders" className="text-[#526661] hover:text-[#1F7A6E] transition-colors pb-1">
              الطلبات
            </Link>
            <Link to="/merchant/products" className="text-[#526661] hover:text-[#1F7A6E] transition-colors pb-1">
              المنتجات
            </Link>
            <Link to="/merchant/wallet" className="text-[#526661] hover:text-[#1F7A6E] transition-colors pb-1">
              المحفظة والتحويلات
            </Link>
            <Link to="/merchant/offers" className="text-[#526661] hover:text-[#1F7A6E] transition-colors pb-1">
              العروض
            </Link>
            <Link to="/merchant/reviews" className="text-[#526661] hover:text-[#1F7A6E] transition-colors pb-1">
              التقييمات
            </Link>
            <Link to="/merchant/reports" className="text-[#526661] hover:text-[#1F7A6E] transition-colors pb-1">
              التقارير
            </Link>
            {/* Active Link */}
            <Link to="/merchant/settings" className="text-[#1F7A6E] border-b-2 border-[#1F7A6E] pb-1 font-extrabold">
              الإعدادات
            </Link>
          </nav>

          {/* Trailing Controls */}
          <div className="flex items-center gap-3">
            {/* Live Wallet Balance Tag */}
            <div className="hidden sm:flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#E1DACB] text-xs">
              <span className="material-symbols-outlined text-[#E9B44C] text-[18px]">account_balance_wallet</span>
              <span className="text-[#526661]">رصيد المحفظة:</span>
              <span className="font-bold text-[#12302B] text-sm tracking-wide">3,420 ₪</span>
            </div>

            {/* Store Preview Action */}
            <Link
              to="/stores/store-1"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E1DACB] text-[#12302B] hover:border-[#1F7A6E] hover:text-[#1F7A6E] transition-all text-xs font-bold active:scale-95 shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              <span className="hidden md:inline">معاينة متجري</span>
            </Link>

            {/* Notifications Action Icon */}
            <button
              className="relative w-9 h-9 rounded-lg bg-white border border-[#E1DACB] flex items-center justify-center text-[#12302B] hover:text-[#1F7A6E] transition-colors active:scale-95 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-600 ring-2 ring-white" />
            </button>

            {/* Logout Action Icon */}
            <button
              onClick={() => navigate('/merchant/login')}
              className="w-9 h-9 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all active:scale-95 cursor-pointer"
              title="تسجيل الخروج"
              type="button"
            >
              <span className="material-symbols-outlined text-[19px]">logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Breadcrumb & Action Banner */}
      <div className="w-full bg-[#F6F3EC] border-b border-[#E1DACB]/70 py-3">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#526661]">
            <Link to="/merchant/dashboard" className="hover:text-[#1F7A6E] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">home</span>
              الرئيسية
            </Link>
            <span className="material-symbols-outlined text-[14px] text-gray-400">chevron_left</span>
            <Link to="/merchant/dashboard" className="hover:text-[#1F7A6E] transition-colors">
              لوحة التحكم
            </Link>
            <span className="material-symbols-outlined text-[14px] text-gray-400">chevron_left</span>
            <span className="text-[#1F7A6E] font-bold bg-white px-2 py-0.5 rounded border border-[#E1DACB]/60">
              إعدادات المتجر
            </span>
          </nav>
        </div>
      </div>

      {/* 3. Header Hero Section */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#1F7A6E]/10 border border-[#1F7A6E]/20 flex items-center justify-center text-[#1F7A6E] shrink-0">
              <span className="material-symbols-outlined text-3xl">storefront</span>
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold text-[#12302B]">إعدادات المتجر والملف التجاري</h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E9B44C]/20 text-[#12302B] border border-[#E9B44C]/40">
                  <span className="material-symbols-outlined text-[14px] text-[#E9B44C] icon-fill">verified</span>
                  متجر أزياء معتمد في غزة
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#526661] mt-1 max-w-2xl leading-relaxed">
                تحكم ببيانات المتجر وهوية البوتيك، تخصيص فئات الأزياء والأحذية، تحديد سياسة ورسوم التوصيل للزبائن، ربط محفظة بال باي (PalPay) لاستلام المستحقات، وضبط إشعارات الواتساب الفورية.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
            <Link
              to="/stores/store-1"
              className="px-4 py-2.5 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] hover:border-[#1F7A6E] hover:text-[#1F7A6E] transition-all text-xs font-bold flex items-center gap-2 shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              معاينة المتجر للزبائن
            </Link>

            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl bg-[#1F7A6E] text-white hover:bg-[#12302B] transition-all text-xs font-bold flex items-center gap-2 shadow-sm active:scale-95 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">save</span>
              حفظ التعديلات
            </button>
          </div>
        </div>
      </section>

      {/* 4. Main Settings Content Area: Sidebar Tabs + Content Cards */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Sidebar Tabs (col-span-3) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-4">
            <div className="bg-white rounded-2xl border border-[#E1DACB] p-3 shadow-sm space-y-1">
              {[
                { id: 'section-identity', key: 'identity', icon: 'badge', label: 'البيانات الأساسية والهوية' },
                { id: 'section-categories', key: 'categories', icon: 'checkroom', label: 'فئات الأزياء والمخزون' },
                { id: 'section-delivery', key: 'delivery', icon: 'local_shipping', label: 'سياسة ورسوم التوصيل' },
                { id: 'section-financial', key: 'financial', icon: 'payments', label: 'المستحقات وبال باي (PalPay)', badge: 'مفعل' },
                { id: 'section-notifications', key: 'notifications', icon: 'mark_chat_unread', label: 'إشعارات بوت واتساب' },
                { id: 'section-security', key: 'security', icon: 'shield_lock', label: 'أمان الحساب وكلمة المرور' },
              ].map((item) => {
                const isActive = activeTab === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.id, item.key)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl font-bold transition-all text-xs sm:text-sm group cursor-pointer ${
                      isActive
                        ? 'bg-[#1F7A6E] text-white'
                        : 'text-[#526661] hover:bg-[#F6F3EC]/70 hover:text-[#1F7A6E]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                    {item.badge ? (
                      <span className="text-[10px] font-bold text-[#E9B44C] bg-[#12302B] px-1.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    ) : (
                      <span className="material-symbols-outlined text-[16px] transition-transform group-hover:-translate-x-0.5">
                        chevron_left
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Help & Platform Notice Card */}
            <div className="bg-gradient-to-br from-[#12302B] to-[#1a443d] rounded-2xl p-5 text-white border border-[#12302B] shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-[#E9B44C]">
                <span className="material-symbols-outlined text-[20px] icon-fill">stars</span>
                <span className="text-xs font-bold uppercase tracking-wider">ميزة متجر تبادل المعتمد</span>
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-3">
                تأكد من إبقاء رقم الواتساب ورابط الإنستغرام محدثين لضمان وصول زبائن غزة لآخر تشكيلات الأزياء وتأكيد الطلبات عبر كود التسليم الرباعي فوراً.
              </p>
              <Link to="/merchant/help" className="inline-flex items-center gap-1 text-xs text-[#E9B44C] font-bold hover:underline">
                <span>مركز مساعدة المتاجر</span>
                <span className="material-symbols-outlined text-[14px]">arrow_back</span>
              </Link>
            </div>
          </aside>

          {/* Main Content Cards Container (col-span-9) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Card 1: الهوية البصرية وشعار البوتيك */}
            <section id="section-identity" className="bg-white rounded-2xl border border-[#E1DACB] p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#E1DACB] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">palette</span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#12302B]">1. الهوية البصرية وغلاف البوتيك</h2>
                    <p className="text-xs text-[#526661]">الصور والشعارات التي تظهر لزبائن التطبيق عند تصفح متجر الأزياء الخاص بك.</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#2E9E6B] bg-[#2E9E6B]/10 px-2.5 py-1 rounded-full">
                  مكتمل 100%
                </span>
              </div>

              <div className="space-y-6">
                {/* Cover Photo Section */}
                <div>
                  <label className="block text-xs font-bold text-[#12302B] mb-2">
                    صورة غلاف المتجر (Banner)
                  </label>
                  <div className="relative w-full h-44 rounded-xl overflow-hidden border-2 border-dashed border-[#E1DACB] group bg-[#F6F3EC]/40 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#12302B]/80 via-[#1F7A6E]/60 to-transparent z-10 flex flex-col justify-end p-5 text-white">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#E9B44C] text-[18px]">verified</span>
                        <span className="font-bold text-sm">بوتيك لمسة | أحدث صيحات الفساتين والأزياء الراقية</span>
                      </div>
                      <span className="text-xs text-white/80">غزة - شارع عمر المختار مقابل مجمع الرمال</span>
                    </div>

                    <img
                      className="w-full h-full object-cover"
                      alt="غلاف المتجر"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu_-xfIvDaKgjvuFGSzlkH0Q8CI3zncRlYQcKY6yTvUmw4VzY6IoZzMWY9TZM3GMWF2h10lgNI-W6alRa_G37uubzIavArhGdnKDioX8byLAdduvBk1njkNAzHp6nfO-Lq_S3y0cse-X5yuguBgXLuqt_rVr7aK4lLYHU-DOruiWYtMifA5PJ3IHQW9pVR2RDVrq7BHx1BE4yU2WZhHFnsSYynDKjOHi6Gi9VLdbcR"
                    />

                    <div className="absolute top-3 left-3 z-20 flex gap-2">
                      <button
                        onClick={() => showToast('اختر صورة جديدة بدقة 1200×400 بكسل كغلاف للمتجر.')}
                        className="bg-white/90 backdrop-blur text-[#12302B] hover:bg-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                        <span>تغيير الغلاف</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#526661] mt-2">
                    الحجم الموصى به: 1200×400 بكسل. الصيغ المدعومة: PNG, JPG بما لا يتجاوز 3 ميجابايت.
                  </p>
                </div>

                {/* Store Logo & Verification Tier Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Store Logo */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F6F3EC]/50 border border-[#E1DACB]">
                    <div className="relative w-20 h-20 rounded-2xl bg-white border border-[#E1DACB] p-2 flex items-center justify-center shadow-sm shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#12302B] text-[#E9B44C] flex items-center justify-center font-black text-sm">
                        لمسة
                      </div>
                      <span className="absolute -bottom-1 -right-1 bg-[#E9B44C] text-[#12302B] rounded-full p-0.5 border border-white" title="موثق">
                        <span className="material-symbols-outlined text-[14px] icon-fill">verified</span>
                      </span>
                    </div>

                    <div className="flex-grow">
                      <span className="text-xs sm:text-sm font-bold text-[#12302B] block">شعار البوتيك الرسمي</span>
                      <p className="text-[11px] text-[#526661] mt-0.5 mb-2.5">
                        يظهر الشعار في بطاقات المنتجات وقوائم الخصومات وإشعارات واتساب للزبائن.
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => showToast('اختر ملف الشعار الرسمي الجديد بدقة عالية.')}
                          className="bg-white border border-[#E1DACB] hover:border-[#1F7A6E] text-[#12302B] px-2.5 py-1 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer"
                          type="button"
                        >
                          تحديث الشعار
                        </button>
                        <button
                          onClick={() => showToast('لا يمكن حذف الشعار الرئيسي للمتجر المعتمد.')}
                          className="text-red-600 hover:bg-red-50 px-2 py-1 rounded-lg text-xs transition-colors cursor-pointer"
                          type="button"
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Verification Tier */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white to-[#F6F3EC]/80 border border-[#E1DACB] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-[#526661]">مستوى توثيق التاجر</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#E9B44C] text-[#12302B] flex items-center gap-1 shadow-sm">
                          <span className="material-symbols-outlined text-[13px] icon-fill">star</span>
                          المتجر الذهبي المعتمد
                        </span>
                      </div>
                      <p className="text-xs text-[#526661] mt-1 leading-relaxed">
                        متجرك يستفيد من نسبة عمولة مخفضة (3%)، وظهور تفضيلي في قائمة استبدال نقاط الولاء لزبائن قطاع غزة.
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#E1DACB]/60 flex items-center justify-between text-xs">
                      <span className="text-[#2E9E6B] font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">check_circle</span>
                        تم التحقق من السجل التجاري
                      </span>
                      <Link to="/merchant/subscription" className="text-[#1F7A6E] hover:underline font-bold">
                        إدارة الباقة والترقية
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Card 2: البيانات التجارية ومعلومات التواصل */}
            <section id="section-general" className="bg-white rounded-2xl border border-[#E1DACB] p-6 shadow-sm">
              <div className="border-b border-[#E1DACB] pb-4 mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">store</span>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[#12302B]">2. البيانات التجارية وموقع المتجر</h2>
                  <p className="text-xs text-[#526661]">الاسم التجاري، نبذة المتجر، وقنوات التواصل المباشر مع الزبائن داخل غزة.</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Store Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                      اسم المتجر التجاري <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        value={storeName}
                        onChange={(e) => {
                          setStoreName(e.target.value);
                          setHasChanges(true);
                        }}
                        className="w-full h-11 pr-10 pl-3 rounded-xl border border-[#E1DACB] text-xs sm:text-sm text-[#12302B] font-bold focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all font-tajawal"
                        type="text"
                      />
                      <span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-gray-400">
                        storefront
                      </span>
                    </div>
                  </div>

                  {/* Store Category Display */}
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                      تخصص المتجر في المنصة
                    </label>
                    <div className="relative">
                      <input
                        className="w-full h-11 pr-10 pl-3 rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/50 text-xs sm:text-sm text-[#526661] font-medium cursor-not-allowed font-tajawal"
                        readOnly
                        type="text"
                        value="أزياء، فساتين مناسبات، وأحذية راقية"
                      />
                      <span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-[#1F7A6E]">
                        lock
                      </span>
                    </div>
                    <span className="text-[11px] text-[#526661] mt-1 block">
                      المنصة حصرية للأزياء والأحذية وفق معايير الجودة المعتمدة.
                    </span>
                  </div>
                </div>

                {/* Bio / Description */}
                <div>
                  <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                    نبذة عن البوتيك (تظهر للزبائن في التطبيق)
                  </label>
                  <textarea
                    value={storeBio}
                    onChange={(e) => {
                      setStoreBio(e.target.value);
                      setHasChanges(true);
                    }}
                    className="w-full p-3 rounded-xl border border-[#E1DACB] text-xs sm:text-sm text-[#12302B] focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all leading-relaxed font-tajawal"
                    rows="3"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
                  {/* WhatsApp Phone */}
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                      رقم الواتساب والاتصال المعتمد <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        value={storePhone}
                        onChange={(e) => {
                          setStorePhone(e.target.value);
                          setHasChanges(true);
                        }}
                        className="w-full h-11 pl-10 pr-3 text-left rounded-xl border border-[#E1DACB] text-xs sm:text-sm text-[#12302B] font-bold focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all font-mono"
                        dir="ltr"
                        type="text"
                      />
                      <span className="material-symbols-outlined absolute left-3 top-3 text-[18px] text-[#2E9E6B]">
                        call
                      </span>
                    </div>
                    <span className="text-[11px] text-[#2E9E6B] font-medium mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">check</span>
                      مرتبط ببوت الإشعارات المباشر
                    </span>
                  </div>

                  {/* Instagram URL */}
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                      رابط صفحة الإنستغرام الرسمية
                    </label>
                    <div className="relative">
                      <input
                        value={instagram}
                        onChange={(e) => {
                          setInstagram(e.target.value);
                          setHasChanges(true);
                        }}
                        className="w-full h-11 pl-10 pr-3 text-left rounded-xl border border-[#E1DACB] text-xs sm:text-sm text-[#12302B] focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all font-mono"
                        dir="ltr"
                        type="text"
                      />
                      <span className="material-symbols-outlined absolute left-3 top-3 text-[18px] text-[#8A6420]">
                        link
                      </span>
                    </div>
                    <span className="text-[11px] text-[#526661] mt-1 block">
                      لإظهار زر التحويل المباشر في صفحة المتجر
                    </span>
                  </div>

                  {/* Physical Location */}
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                      الموقع الجغرافي والفرع <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        value={location}
                        onChange={(e) => {
                          setLocation(e.target.value);
                          setHasChanges(true);
                        }}
                        className="w-full h-11 pr-10 pl-3 rounded-xl border border-[#E1DACB] text-xs sm:text-sm text-[#12302B] font-bold focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all font-tajawal"
                        type="text"
                      />
                      <span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-[#1F7A6E]">
                        location_on
                      </span>
                    </div>
                    <span className="text-[11px] text-[#526661] mt-1 block">
                      يتيح خيار "استلام من المتجر" للزبائن القريبين.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Card 3: فئات الأزياء المتخصصة */}
            <section id="section-categories" className="bg-white rounded-2xl border border-[#E1DACB] p-6 shadow-sm">
              <div className="border-b border-[#E1DACB] pb-4 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">styler</span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#12302B]">3. فئات الأزياء والأحذية النشطة بالمتجر</h2>
                    <p className="text-xs text-[#526661]">حدد التخصصات التي تعرضها داخل البوتيك لترتيب ظهورها في محرك بحث المنصة.</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#1F7A6E] font-bold bg-[#1F7A6E]/10 px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[15px]">sell</span>
                  <span>4 فئات نشطة</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* Category Item 1 */}
                <label className={`relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all select-none ${
                  categories.fashion ? 'border-[#1F7A6E] bg-[#1F7A6E]/5' : 'border-[#E1DACB] bg-white'
                }`}>
                  <input
                    type="checkbox"
                    checked={categories.fashion}
                    onChange={(e) => {
                      setCategories({ ...categories, fashion: e.target.checked });
                      setHasChanges(true);
                    }}
                    className="absolute top-3 left-3 text-[#1F7A6E] focus:ring-[#1F7A6E] rounded"
                  />
                  <span className="material-symbols-outlined text-[#1F7A6E] text-3xl mb-2">woman</span>
                  <span className="font-bold text-[#12302B] text-sm">فساتين وأزياء نسائية</span>
                  <span className="text-xs text-[#526661] mt-1">سهرة، يومي، كاجوال راقي</span>
                  <span className="mt-3 text-[11px] font-bold text-[#1F7A6E]">نشط (48 منتج معروض)</span>
                </label>

                {/* Category Item 2 */}
                <label className={`relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all select-none ${
                  categories.abaya ? 'border-[#1F7A6E] bg-[#1F7A6E]/5' : 'border-[#E1DACB] bg-white'
                }`}>
                  <input
                    type="checkbox"
                    checked={categories.abaya}
                    onChange={(e) => {
                      setCategories({ ...categories, abaya: e.target.checked });
                      setHasChanges(true);
                    }}
                    className="absolute top-3 left-3 text-[#1F7A6E] focus:ring-[#1F7A6E] rounded"
                  />
                  <span className="material-symbols-outlined text-[#1F7A6E] text-3xl mb-2">dry_cleaning</span>
                  <span className="font-bold text-[#12302B] text-sm">عبايات وشالات مطرزة</span>
                  <span className="text-xs text-[#526661] mt-1">تطريز فلسطيني وخليجي</span>
                  <span className="mt-3 text-[11px] font-bold text-[#1F7A6E]">نشط (26 منتج معروض)</span>
                </label>

                {/* Category Item 3 */}
                <label className={`relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all select-none ${
                  categories.shoes ? 'border-[#1F7A6E] bg-[#1F7A6E]/5' : 'border-[#E1DACB] bg-white'
                }`}>
                  <input
                    type="checkbox"
                    checked={categories.shoes}
                    onChange={(e) => {
                      setCategories({ ...categories, shoes: e.target.checked });
                      setHasChanges(true);
                    }}
                    className="absolute top-3 left-3 text-[#1F7A6E] focus:ring-[#1F7A6E] rounded"
                  />
                  <span className="material-symbols-outlined text-[#1F7A6E] text-3xl mb-2">roller_skating</span>
                  <span className="font-bold text-[#12302B] text-sm">أحذية وسنيكرز نسائية</span>
                  <span className="text-xs text-[#526661] mt-1">كعوب، سنيكرز، صنادل</span>
                  <span className="mt-3 text-[11px] font-bold text-[#1F7A6E]">نشط (32 منتج معروض)</span>
                </label>

                {/* Category Item 4 */}
                <label className={`relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all select-none ${
                  categories.kids ? 'border-[#1F7A6E] bg-[#1F7A6E]/5' : 'border-[#E1DACB] bg-white'
                }`}>
                  <input
                    type="checkbox"
                    checked={categories.kids}
                    onChange={(e) => {
                      setCategories({ ...categories, kids: e.target.checked });
                      setHasChanges(true);
                    }}
                    className="absolute top-3 left-3 text-[#1F7A6E] focus:ring-[#1F7A6E] rounded"
                  />
                  <span className="material-symbols-outlined text-[#1F7A6E] text-3xl mb-2">child_friendly</span>
                  <span className="font-bold text-[#12302B] text-sm">أزياء ومناسبات أطفال</span>
                  <span className="text-xs text-[#526661] mt-1">بناتي أنيق ومواليد</span>
                  <span className="mt-3 text-[11px] font-bold text-[#1F7A6E]">نشط (14 منتج معروض)</span>
                </label>
              </div>

              <div className="mt-4 p-3 bg-[#F6F3EC]/60 rounded-xl border border-[#E1DACB] flex items-center justify-between text-xs">
                <span className="text-[#526661] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#E9B44C]">info</span>
                  تذكر: منصة تبادل متخصصة حصرياً في منتجات الموضة والأزياء والجمال لضمان أعلى معايير التجربة التسوقية.
                </span>
                <button
                  onClick={() => showToast('تم إرسال طلب تصنيف أزياء جديد للمراجعة.')}
                  className="text-[#1F7A6E] hover:underline font-bold cursor-pointer"
                  type="button"
                >
                  طلب إضافة تصنيف جديد
                </button>
              </div>
            </section>

            {/* Card 4: سياسة ورسوم التوصيل ومناطق التغطية */}
            <section id="section-delivery" className="bg-white rounded-2xl border border-[#E1DACB] p-6 shadow-sm">
              <div className="border-b border-[#E1DACB] pb-4 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">local_shipping</span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#12302B]">4. سياسة ورسوم التوصيل ومناطق التغطية</h2>
                    <p className="text-xs text-[#526661]">حدد خيارات التوصيل المتاحة لزبائنك مع كود التحقق الرباعي عند الاستلام.</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#12302B] bg-[#F6F3EC] px-3 py-1 rounded-lg border border-[#E1DACB]">
                  نظام الكود الرباعي إلزامي
                </span>
              </div>

              <div className="space-y-5">
                {/* Delivery Mechanism Choice */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className={`p-4 rounded-xl border-2 flex items-start gap-3 cursor-pointer ${
                    deliveryType === 'self' ? 'border-[#1F7A6E] bg-[#1F7A6E]/5' : 'border-[#E1DACB] bg-white'
                  }`}>
                    <input
                      type="radio"
                      name="delivery_type"
                      checked={deliveryType === 'self'}
                      onChange={() => {
                        setDeliveryType('self');
                        setHasChanges(true);
                      }}
                      className="mt-1 text-[#1F7A6E] focus:ring-[#1F7A6E]"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#12302B] block">
                        توصيل ذاتي بواسطة البوتيك / مناديب المتجر
                      </span>
                      <p className="text-[11px] text-[#526661] mt-1 leading-relaxed">
                        يقوم مندوب البوتيك بتسليم الطلب وإدخال رمز التسليم المكون من 4 أرقام لتأكيد اكتمال الطلب وإيداع النقاط.
                      </p>
                    </div>
                  </label>

                  <label className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                    deliveryType === 'partner' ? 'border-[#1F7A6E] bg-[#1F7A6E]/5' : 'border-[#E1DACB] bg-white'
                  }`}>
                    <input
                      type="radio"
                      name="delivery_type"
                      checked={deliveryType === 'partner'}
                      onChange={() => {
                        setDeliveryType('partner');
                        setHasChanges(true);
                      }}
                      className="mt-1 text-[#1F7A6E] focus:ring-[#1F7A6E]"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#12302B] block">
                        شراكة مع شركات التوصيل المعتمدة لتبادل
                      </span>
                      <p className="text-[11px] text-[#526661] mt-1 leading-relaxed">
                        استلام الطلب من مقر البوتيك ونقله للزبون مباشرة مع تتبع حي عبر الخريطة ونظام الأكواد المشفرة.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Fees & Threshold Settings */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                      رسوم التوصيل داخل مدينة غزة
                    </label>
                    <div className="relative">
                      <input
                        value={gazaFee}
                        onChange={(e) => {
                          setGazaFee(Number(e.target.value));
                          setHasChanges(true);
                        }}
                        className="w-full h-11 pr-3 pl-12 rounded-xl border border-[#E1DACB] text-xs sm:text-sm font-bold text-[#12302B] focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all font-mono"
                        type="number"
                      />
                      <span className="absolute left-3 top-3 text-xs font-bold text-[#526661]">₪ شيكل</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                      رسوم التوصيل للمحافظات الوسطى والجنوب
                    </label>
                    <div className="relative">
                      <input
                        value={southFee}
                        onChange={(e) => {
                          setSouthFee(Number(e.target.value));
                          setHasChanges(true);
                        }}
                        className="w-full h-11 pr-3 pl-12 rounded-xl border border-[#E1DACB] text-xs sm:text-sm font-bold text-[#12302B] focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all font-mono"
                        type="number"
                      />
                      <span className="absolute left-3 top-3 text-xs font-bold text-[#526661]">₪ شيكل</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                      توصيل مجاني للطلبات التي تتجاوز
                    </label>
                    <div className="relative">
                      <input
                        value={freeShippingThreshold}
                        onChange={(e) => {
                          setFreeShippingThreshold(Number(e.target.value));
                          setHasChanges(true);
                        }}
                        className="w-full h-11 pr-3 pl-12 rounded-xl border border-[#E1DACB] text-xs sm:text-sm font-bold text-[#12302B] focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all font-mono"
                        type="number"
                      />
                      <span className="absolute left-3 top-3 text-xs font-bold text-[#2E9E6B]">₪ شيكل</span>
                    </div>
                  </div>
                </div>

                {/* Pickup From Store Toggle */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#F6F3EC]/50 border border-[#E1DACB]">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#1F7A6E]">hail</span>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#12302B] block">
                        إتاحة خيار الاستلام المجاني من فرع البوتيك
                      </span>
                      <span className="text-[11px] text-[#526661]">
                        يمكن للزبائن القدوم لفرع الرمال الجنوبي لتجربة الأزياء واستلام طلباتهم مباشرة.
                      </span>
                    </div>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={allowPickup}
                      onChange={(e) => {
                        setAllowPickup(e.target.checked);
                        setHasChanges(true);
                      }}
                      className="sr-only switch-checkbox"
                    />
                    <div className="switch-label w-11 h-6 bg-gray-300 rounded-full transition-colors relative">
                      <div className="switch-handle absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow" />
                    </div>
                  </label>
                </div>
              </div>
            </section>

            {/* Card 5: الحساب المالي المعتمد ومحفظة بال باي (PalPay) */}
            <section id="section-financial" className="bg-white rounded-2xl border border-[#E1DACB] p-6 shadow-sm">
              <div className="border-b border-[#E1DACB] pb-4 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">account_balance</span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#12302B]">5. الحساب المالي ومستحقات المبيعات (PalPay)</h2>
                    <p className="text-xs text-[#526661]">ربط المحفظة المعتمدة لتحويل أرباح المبيعات وقيمة النقاط المستبدلة دورياً.</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E9E6B]/10 text-[#2E9E6B] text-xs font-bold border border-[#2E9E6B]/20">
                  <span className="material-symbols-outlined text-[15px] icon-fill">verified</span>
                  <span>محفظة PalPay مربوطة وموثقة</span>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* PalPay Wallet / Account Number */}
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                      رقم محفظة بال باي (PalPay Wallet ID) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        value={palpayId}
                        onChange={(e) => {
                          setPalpayId(e.target.value);
                          setHasChanges(true);
                        }}
                        className="w-full h-11 pl-10 pr-3 text-left rounded-xl border border-[#E1DACB] text-xs sm:text-sm font-bold text-[#12302B] focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all font-mono"
                        dir="ltr"
                        type="text"
                      />
                      <span className="material-symbols-outlined absolute left-3 top-3 text-[18px] text-[#1F7A6E]">
                        wallet
                      </span>
                    </div>
                    <span className="text-[11px] text-[#526661] mt-1 block">باسم: شركة لمسة للأزياء والألبسة ذ.م.م</span>
                  </div>

                  {/* Settlement Cycle */}
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                      دورة التحويل المالي التلقائي
                    </label>
                    <select
                      value={settlementCycle}
                      onChange={(e) => {
                        setSettlementCycle(e.target.value);
                        setHasChanges(true);
                      }}
                      className="w-full h-11 px-3 rounded-xl border border-[#E1DACB] text-xs sm:text-sm font-bold text-[#12302B] focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all font-tajawal cursor-pointer"
                    >
                      <option value="daily">تحويل يومي (للأرصدة التي تزيد عن 500 ₪)</option>
                      <option value="weekly">تحويل أسبوعي (كل يوم خميس تلقائياً)</option>
                      <option value="monthly">تحويل شهري (نهاية كل شهر ميلادي)</option>
                    </select>
                    <span className="text-[11px] text-[#526661] mt-1 block">تصل إشعارات التحويل برسالة نصية وإشعار واتساب مفصل.</span>
                  </div>
                </div>

                {/* IBAN / Local Bank Fallback */}
                <div className="p-4 rounded-xl bg-[#F6F3EC]/40 border border-[#E1DACB] grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#12302B] block">البنك المحلي المعتمد (اختياري)</span>
                    <span className="text-xs text-[#526661] mt-0.5 block">بنك فلسطين - فرع الرمال الرئيسي</span>
                  </div>
                  <div className="text-left" dir="ltr">
                    <span className="text-xs font-mono font-bold text-[#12302B]">PS94 PALS 0000 0012 3456 7890 001</span>
                    <span className="text-[11px] text-[#1F7A6E] block">حساب جاري بالعملة المحلية (₪)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Card 6: إشعارات بوت واتساب ونظام الأكواد */}
            <section id="section-notifications" className="bg-white rounded-2xl border border-[#E1DACB] p-6 shadow-sm">
              <div className="border-b border-[#E1DACB] pb-4 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">chat</span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#12302B]">6. إشعارات بوت واتساب ونظام كود التسليم (4 أرقام)</h2>
                    <p className="text-xs text-[#526661]">الربط التلقائي مع خادم واتساب لإشعار البوتيك والزبائن بحالة كل طلب لحظة بلحظة.</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#2E9E6B] bg-[#2E9E6B]/10 px-2.5 py-1 rounded-full">
                  البوت متصل بالإنترنت
                </span>
              </div>

              <div className="space-y-4">
                {/* Notification Item 1 */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-[#E1DACB] bg-white hover:border-[#1F7A6E]/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2E9E6B]/10 text-[#2E9E6B] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#12302B] block">
                        إشعار فوري عند ورود طلب أزياء جديد
                      </span>
                      <span className="text-[11px] text-[#526661]">
                        يرسل تفاصيل المقاسات، الكميات، واسم الزبون ورقم هاتفه مباشرة لمجموعة متجرك.
                      </span>
                    </div>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifyNewOrder}
                      onChange={(e) => {
                        setNotifyNewOrder(e.target.checked);
                        setHasChanges(true);
                      }}
                      className="sr-only switch-checkbox"
                    />
                    <div className="switch-label w-11 h-6 bg-gray-300 rounded-full transition-colors relative">
                      <div className="switch-handle absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow" />
                    </div>
                  </label>
                </div>

                {/* Notification Item 2 */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-[#E1DACB] bg-white hover:border-[#1F7A6E]/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E9B44C]/15 text-[#E9B44C] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px] icon-fill">pin</span>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#12302B] block">
                        تأكيد كود التسليم الرباعي (Delivery PIN Confirmation)
                      </span>
                      <span className="text-[11px] text-[#526661]">
                        إرسال إشعار لحظي فور قيام مندوب التوصيل بإدخال الكود الرباعي لإيداع الأرباح في المحفظة.
                      </span>
                    </div>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifyPinConfirm}
                      onChange={(e) => {
                        setNotifyPinConfirm(e.target.checked);
                        setHasChanges(true);
                      }}
                      className="sr-only switch-checkbox"
                    />
                    <div className="switch-label w-11 h-6 bg-gray-300 rounded-full transition-colors relative">
                      <div className="switch-handle absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow" />
                    </div>
                  </label>
                </div>

                {/* Notification Item 3 */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-[#E1DACB] bg-white hover:border-[#1F7A6E]/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">warning</span>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#12302B] block">
                        تنبيهات نفاد مقاسات الفساتين والأحذية (Low Stock Alerts)
                      </span>
                      <span className="text-[11px] text-[#526661]">
                        تنبيه عندما يتبقى أقل من قطعتين من أي مقاس أو لون محدد لتحديث المخزون.
                      </span>
                    </div>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifyLowStock}
                      onChange={(e) => {
                        setNotifyLowStock(e.target.checked);
                        setHasChanges(true);
                      }}
                      className="sr-only switch-checkbox"
                    />
                    <div className="switch-label w-11 h-6 bg-gray-300 rounded-full transition-colors relative">
                      <div className="switch-handle absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow" />
                    </div>
                  </label>
                </div>
              </div>
            </section>

            {/* Card 7: برنامج الولاء والنقاط */}
            <section className="bg-gradient-to-br from-white to-[#F6F3EC]/60 rounded-2xl border border-[#E1DACB] p-6 shadow-sm">
              <div className="border-b border-[#E1DACB] pb-4 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#E9B44C] text-2xl icon-fill">stars</span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-[#12302B]">
                      برنامج نقاط الولاء ومكافآت الزبائن (Tabadul Rewards)
                    </h2>
                    <p className="text-xs text-[#526661]">تحفيز زبائن المتجر على إعادة الشراء من خلال نسبة استرداد النقاط.</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#12302B] bg-[#E9B44C]/30 px-3 py-1 rounded-full border border-[#E9B44C]/50">
                  اكسب 5% نقاط
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#12302B] block">نسبة منح النقاط على مشتريات الأزياء:</span>
                  <p className="text-xs text-[#526661] leading-relaxed">
                    لكل 100 ₪ ينفقها الزبون في بوتيك لمسة، يحصل على 50 نقطة مكافأة (تعادل 5 ₪) صالحة للاستبدال في طلباته القادمة. هذا النظام زاد معدل تكرار شراء الزبائن بنسبة 42% في قطاع غزة.
                  </p>
                </div>

                <div className="flex justify-end gap-3">
                  <div className="p-3 bg-white rounded-xl border border-[#E1DACB] text-center shadow-sm">
                    <span className="text-xs text-[#526661] block">النقاط الممنوحة هذا الشهر</span>
                    <span className="text-lg font-bold text-[#1F7A6E] font-mono">+18,450</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#E1DACB] text-center shadow-sm">
                    <span className="text-xs text-[#526661] block">الطلبات عبر النقاط</span>
                    <span className="text-lg font-bold text-[#E9B44C] font-mono">142 طلب</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Card 8: المنطقة الخطرة وإيقاف المتجر مؤقتاً */}
            <section id="section-security" className="bg-white rounded-2xl border border-red-200 p-6 shadow-sm">
              <div className="border-b border-red-100 pb-4 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3 text-red-600">
                  <span className="material-symbols-outlined text-2xl">dangerous</span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold">منطقة التحكم الحساسة (Danger Zone)</h2>
                    <p className="text-xs text-[#526661]">خيارات إيقاف استقبال الطلبات المؤقت عند الجرد أو إعادة تجديد المخزون.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-red-50/50 border border-red-200">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#12302B] block">
                    إيقاف استقبال طلبات الأزياء مؤقتاً (وضع الإجازة / الجرد)
                  </span>
                  <p className="text-[11px] text-[#526661] mt-0.5">
                    سيتم إخفاء خيار "إضافة إلى السلة" للزبائن مع إبقاء المنتجات متاحة للتصفح وحفظ المفضلة.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setVacationMode(!vacationMode);
                    showToast(
                      !vacationMode
                        ? 'تم تفعيل وضع الإجازة / الجرد المؤقت للمتجر.'
                        : 'تم استئناف استقبال الطلبات في المتجر بنجاح.'
                    );
                  }}
                  className={`px-4 py-2 rounded-xl border text-xs font-bold shrink-0 shadow-sm transition-all cursor-pointer ${
                    vacationMode
                      ? 'bg-red-600 text-white border-red-700'
                      : 'border-red-500 text-red-600 bg-white hover:bg-red-600 hover:text-white'
                  }`}
                  type="button"
                >
                  {vacationMode ? 'إلغاء وضع الإجازة واستئناف البيع' : 'تفعيل وضع الإيقاف المؤقت'}
                </button>
              </div>
            </section>

            {/* Sticky Bottom Action Tray for Changes Submission */}
            {hasChanges && (
              <div className="sticky bottom-6 z-40 bg-[#12302B] text-white rounded-2xl p-4 shadow-xl border border-[#12302B] flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#E9B44C] animate-pulse" />
                  <div>
                    <span className="text-xs sm:text-sm font-bold block">
                      لديك تعديلات غير محفوظة في الملف التجاري للبوتيك
                    </span>
                    <span className="text-[11px] text-white/70">
                      آخر مزامنة ناجحة لقاعدة البيانات كانت قبل 12 دقيقة.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold cursor-pointer"
                    type="button"
                  >
                    تراجع عن التعديلات
                  </button>

                  <button
                    onClick={handleSave}
                    className="px-6 py-2.5 rounded-xl bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] font-bold text-xs sm:text-sm transition-transform active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>حفظ وتطبيق التعديلات الآن</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      {/* 5. Footer: Platform Shared Component */}
      <footer className="w-full mt-auto bg-white border-t border-[#E1DACB]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#526661]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-lg text-[#1F7A6E]">storefront</span>
              <span>© 2026 منصة تبادل لولاء المتاجر والأزياء - غزة. جميع الحقوق محفوظة.</span>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link to="/merchant/help" className="hover:text-[#1F7A6E] transition-colors">
                مركز مساعدة المتاجر
              </Link>
              <Link to="/merchant/help" className="hover:text-[#1F7A6E] transition-colors">
                الشروط والأحكام
              </Link>
              <Link to="/merchant/help" className="hover:text-[#1F7A6E] transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="/merchant/landing" className="hover:text-[#1F7A6E] transition-colors">
                دليل الشركاء
              </Link>
              <a className="hover:text-[#1F7A6E] transition-colors font-bold text-[#1F7A6E]" href="https://wa.me/" target="_blank" rel="noreferrer">
                التواصل والدعم الفني
              </a>
            </nav>

            <div className="flex items-center gap-2 text-[11px] text-[#2E9E6B] font-bold bg-[#F6F3EC] px-2.5 py-1 rounded-full border border-[#E1DACB]">
              <span className="w-2 h-2 rounded-full bg-[#2E9E6B]" />
              <span>خوادم المتاجر وتكامل بال باي تعمل بكفاءة 100%</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
