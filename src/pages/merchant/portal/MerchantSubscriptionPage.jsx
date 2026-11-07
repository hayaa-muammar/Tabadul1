import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../../components/common/Footer';

export default function MerchantSubscriptionPage() {
  const navigate = useNavigate();

  // Subscription state
  const [currentTier, setCurrentTier] = useState('trial'); // 'trial' | 'pro'
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('wallet'); // 'wallet' | 'palpay'
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [upgradeSuccess, setUpgradeSuccess] = useState(false);

  const handleConfirmUpgrade = () => {
    setIsUpgrading(true);
    setTimeout(() => {
      setIsUpgrading(false);
      setCurrentTier('pro');
      setUpgradeSuccess(true);
      setShowUpgradeModal(false);
    }, 1200);
  };

  const scrollToProCard = () => {
    const el = document.getElementById('pro-tier-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#191c22] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]" dir="rtl">
      
      {/* TOP APP BAR (Shared Merchant Navigation Header) */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-[#E1DACB]">
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6 flex justify-between items-center h-20">
          
          {/* Brand Logo & Store Identity Cluster */}
          <div className="flex items-center gap-4">
            <Link to="/merchant/dashboard" className="flex items-center gap-2 group">
              <div className="h-10 sm:h-11 w-auto flex items-center justify-center">
                <img
                  alt="شعار منصة تبادل"
                  className="h-full w-auto object-contain rounded-lg shadow-sm transition-transform duration-200 group-hover:scale-105"
                  src="/logo.png"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black text-[#12302B] tracking-tight">تبادل</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] font-bold">للمتاجر</span>
                </div>
                <span className="text-[11px] text-[#526661] font-medium -mt-1">منظومة الولاء والأزياء بغزة</span>
              </div>
            </Link>

            {/* Store Context Badge (بوتيك لمسة) */}
            <div className="hidden xl:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-[#F6F3EC] border border-[#E1DACB]">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#12302B] text-[#E9B44C] flex items-center justify-center text-xs font-bold ring-2 ring-[#1F7A6E]/40">
                  لمسة
                </div>
                <span className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center text-[10px]" title="متجر موثق">
                  <span className="material-symbols-outlined text-[10px] icon-fill">verified</span>
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-[#12302B] font-bold">بوتيك لمسة</span>
                  <span className="text-[10px] text-[#1F7A6E] bg-[#1F7A6E]/10 px-1.5 py-0.2 rounded font-semibold">موثق</span>
                </div>
                <span className="text-[10px] text-[#526661] font-medium">غزة - حي الرمال الجنوبي</span>
              </div>
              <div className="h-6 w-px bg-[#E1DACB] mx-0.5" />
              <div className="flex items-center gap-1 text-[11px] text-[#8A6420] font-semibold bg-[#E9B44C]/10 px-2 py-0.5 rounded-full">
                <span className="material-symbols-outlined text-xs icon-fill">schedule</span>
                <span>{currentTier === 'pro' ? 'باقة Pro نشطة ⭐' : 'متبقي 12 يوماً مجاناً'}</span>
              </div>
            </div>
          </div>

          {/* Center Navigation Links (Exact Shared Component Logic with "الباقات والاشتراك" Active) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-bold">
            <Link to="/merchant/dashboard" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1">
              الرئيسية
            </Link>
            <Link to="/merchant/orders" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1 flex items-center gap-1">
              <span>الطلبات</span>
              <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center">3</span>
            </Link>
            <Link to="/merchant/products" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1">
              المنتجات
            </Link>
            <Link to="/merchant/wallet" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1">
              المحفظة
            </Link>
            <Link to="/merchant/offers" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1">
              العروض
            </Link>
            <Link to="/merchant/reviews" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1">
              التقييمات
            </Link>
            <Link to="/merchant/reports" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1">
              التقارير
            </Link>
            {/* ACTIVE TAB */}
            <Link to="/merchant/subscription" className="text-[#12302B] font-bold border-b-2 border-[#12302B] pb-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-base text-[#E9B44C] icon-fill">stars</span>
              <span>الباقات والاشتراك</span>
            </Link>
          </nav>

          {/* Trailing Action Clustered Controls */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 bg-[#1F7A6E]/10 text-[#1F7A6E] px-3 py-1.5 rounded-xl text-xs font-bold border border-[#1F7A6E]/20">
              <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
              <span>الرصيد: 340.50 ₪</span>
            </div>
            
            <button
              aria-label="الإشعارات"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#526661] hover:bg-[#F6F3EC] transition-colors relative"
              type="button"
            >
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-red-600 ring-2 ring-white" />
            </button>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#526661] hover:bg-[#F6F3EC] transition-colors border border-[#E1DACB]"
            >
              <span className="material-symbols-outlined text-base">support_agent</span>
              <span>المساعدة</span>
            </a>

            <button
              onClick={() => navigate('/merchant/wallet')}
              className="h-10 px-4 rounded-xl bg-[#12302B] text-white hover:bg-[#1F7A6E] transition-all duration-200 active:scale-95 text-xs font-bold flex items-center gap-1.5 shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-sm text-[#E9B44C]">add_card</span>
              <span>شحن الرصيد</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CANVAS */}
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-6 py-8">
        
        {/* Navigation Breadcrumb */}
        <nav aria-label="مسار التنقل" className="mb-6 flex items-center flex-wrap gap-2 text-xs font-medium bg-white border border-[#E1DACB] px-4 py-2.5 rounded-xl shadow-sm text-[#526661]">
          <Link to="/merchant/dashboard" className="inline-flex items-center gap-1.5 hover:text-[#1F7A6E] transition-colors py-0.5 px-1 rounded-lg">
            <span className="material-symbols-outlined text-lg text-[#526661]">home</span>
            <span className="font-medium">الرئيسية</span>
          </Link>
          <span className="material-symbols-outlined text-sm text-[#E1DACB]">chevron_left</span>
          <span className="inline-flex items-center gap-1.5 hover:text-[#1F7A6E] transition-colors py-0.5 px-1 rounded-lg cursor-default">
            <span className="material-symbols-outlined text-base text-[#526661]">manage_accounts</span>
            <span className="font-medium">إعدادات الحساب والمتجر</span>
          </span>
          <span className="material-symbols-outlined text-sm text-[#E1DACB]">chevron_left</span>
          <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-[#1F7A6E]/10 text-[#12302B] font-bold border border-[#1F7A6E]/20">
            <span className="material-symbols-outlined text-sm text-[#E9B44C] icon-fill">stars</span>
            <span>باقات الاشتراك وترقية المتجر</span>
          </span>
        </nav>

        {/* Upgrade Success Alert Banner */}
        {upgradeSuccess && (
          <div className="mb-6 bg-emerald-50 border-2 border-emerald-400 text-emerald-950 p-4 rounded-2xl flex items-center justify-between shadow-sm animate-fadeIn">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xl font-black">
                ✓
              </span>
              <div>
                <h4 className="font-extrabold text-sm">تهانينا! تم تفعيل باقة التاجر المميّز Pro بنجاح ⭐</h4>
                <p className="text-xs text-emerald-800">
                  متجرك الآن يتمتع بأولوية الظهور في صدارة دليل المتاجر، مبيعات ومنتجات غير محدودة، وسحب فوري يومي عبر PalPay.
                </p>
              </div>
            </div>
            <button
              onClick={() => setUpgradeSuccess(false)}
              className="text-emerald-700 hover:text-emerald-900 text-xs font-bold underline px-2 py-1"
            >
              إغلاق
            </button>
          </div>
        )}

        {/* PAGE HERO HEADER */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] text-xs font-bold mb-2">
              <span className="material-symbols-outlined text-xs icon-fill">loyalty</span>
              <span>إدارة حساب التاجر وباقات الترقية الذكية</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#12302B] tracking-tight">
              باقات الاشتراك وترقية المتجر
            </h1>
            <p className="text-sm md:text-base text-[#526661] mt-1 max-w-2xl">
              عزز مبيعاتك في قطاع غزة واستفد من شبكة ولاء «تبادل» لجذب المتسوقين، بناء قاعدة زبائن دائمة، وتحقيق نمو تجاري مستدام.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-[#E1DACB] shadow-sm self-start md:self-auto">
            <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">security</span>
            <div className="text-right">
              <div className="text-xs font-bold text-[#12302B]">ضمان الشفافية الكاملة</div>
              <div className="text-[11px] text-[#526661]">إلغاء الاشتراك متاح في أي لحظة بنقرة واحدة</div>
            </div>
          </div>
        </div>

        {/* 1. ALERT / CURRENT SUBSCRIPTION STATUS HERO CARD */}
        <section className="luxury-mesh rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-xl shadow-[#12302B]/15 mb-12 border border-[#1F7A6E]/40">
          {/* Ambient Decorative Circles */}
          <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-[#E9B44C]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-16 w-64 h-64 rounded-full bg-[#1F7A6E]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8">
            
            {/* Right Column: Status & Trial Progress */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#E9B44C] text-[#12302B] text-xs font-bold flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-sm icon-fill">
                    {currentTier === 'pro' ? 'verified' : 'hourglass_top'}
                  </span>
                  <span>
                    {currentTier === 'pro' ? 'أنت حالياً مشترك في باقة التاجر المميّز Pro VIP' : 'أنت حالياً في باقة التجربة المجانية التأسيسية'}
                  </span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-[11px] backdrop-blur-sm border border-white/10">
                  متجر بوتيك لمسة
                </span>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {currentTier === 'pro'
                    ? 'اشتراكك نشط ومدعوم بأعلى أولوية ظهور ومبيعات غير محدودة'
                    : 'متبقي 12 يوماً من أصل 14 يوماً مجانية كاملة'}
                </h2>
                <p className="text-xs sm:text-sm text-white/80">
                  {currentTier === 'pro'
                    ? 'التجديد القادم في 18 يونيو 2026 عبر رصيد المحفظة أو PalPay بدون انقطاع.'
                    : 'تتمتع حالياً بكل المزايا الأساسية مجاناً بلا أي عمولات أو رسوم تأسيسية حتى 18 مايو 2026.'}
                </p>
              </div>

              {/* Progress Bar & Indicator */}
              <div className="space-y-1.5 max-w-xl">
                <div className="flex justify-between text-xs text-white/70 font-medium">
                  <span>اليوم 2 (بداية الانطلاق)</span>
                  <span className="text-[#E9B44C] font-bold">
                    {currentTier === 'pro' ? 'تمت الترقية إلى Pro بنجاح ✨' : 'متبقي 12 يوماً للإطلاق التجاري'}
                  </span>
                  <span>اليوم 14</span>
                </div>
                <div className="w-full h-3 rounded-full bg-black/30 p-0.5 overflow-hidden border border-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-l from-[#E9B44C] to-[#1F7A6E] transition-all duration-500"
                    style={{ width: currentTier === 'pro' ? '100%' : '15%' }}
                  />
                </div>
              </div>
            </div>

            {/* Left Column: Trial Performance Metrics & Quick Action */}
            <div className="flex flex-col sm:flex-row lg:flex-col justify-between gap-4 lg:w-80 lg:border-r lg:border-white/15 lg:pr-8">
              {/* Quick Stat Capsules */}
              <div className="grid grid-cols-3 gap-2 bg-black/25 p-3 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-center p-1.5">
                  <div className="text-xs text-white/70">عمولات موفرة</div>
                  <div className="text-lg font-bold text-[#E9B44C] mt-0.5">42 ₪</div>
                  <div className="text-[10px] text-white/50">توفير 100%</div>
                </div>
                <div className="text-center p-1.5 border-x border-white/10">
                  <div className="text-xs text-white/70">مبيعات تمت</div>
                  <div className="text-lg font-bold text-white mt-0.5">4</div>
                  <div className="text-[10px] text-[#71dba2]">برمز التسليم</div>
                </div>
                <div className="text-center p-1.5">
                  <div className="text-xs text-white/70">نقاط للزبائن</div>
                  <div className="text-lg font-bold text-white mt-0.5">28</div>
                  <div className="text-[10px] text-white/50">نقطة ولاء</div>
                </div>
              </div>

              {/* Direct Upgrade Action Button */}
              {currentTier === 'pro' ? (
                <div className="h-12 w-full rounded-xl bg-white/15 border border-white/20 text-[#E9B44C] font-bold flex items-center justify-center gap-2 text-xs">
                  <span className="material-symbols-outlined icon-fill text-lg">verified</span>
                  <span>أنت مشترك في باقة Pro المتقدمة</span>
                </div>
              ) : (
                <button
                  onClick={() => navigate('/merchant/subscription/checkout')}
                  className="h-12 w-full rounded-xl bg-[#E9B44C] hover:bg-[#d8a136] text-[#12302B] font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#E9B44C]/30 transition-all duration-200 active:scale-95 text-xs sm:text-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined icon-fill text-lg">workspace_premium</span>
                  <span>ترقية المتجر للباقة المتقدمة الآن</span>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* SECTION TITLE: PRICING COMPARISON */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#12302B]">
            اختر الباقة المناسبة لتوسيع نشاطك التجاري
          </h2>
          <p className="text-xs sm:text-sm text-[#526661] mt-2">
            باقات مرنة مصممة خصيصاً لمتاجر الأزياء والتجميل المحلية لدعم التحول الرقمي وتمكين حركة الشراء اليومية في غزة.
          </p>
        </div>

        {/* 2. PRICING CARDS (2-Column Desktop Grid Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* CARD 1: الباقة التأسيسية (المجانية) */}
          <div className="bg-white rounded-3xl p-8 border border-[#E1DACB] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative">
            <div>
              {/* Header Area */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#F6F3EC] text-[#526661] text-xs font-semibold">
                    بداية بدون التزامات
                  </span>
                  <h3 className="text-2xl font-bold text-[#12302B] mt-2">
                    الباقة التأسيسية (المجانية)
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#F6F3EC] flex items-center justify-center text-[#12302B]">
                  <span className="material-symbols-outlined text-2xl">storefront</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#526661] mb-6 leading-relaxed">
                مثالية للمتاجر الناشئة والحرفيين المحليين الراغبين بتجربة بيع الأزياء عبر شبكة تبادل وتفعيل برامج الولاء.
              </p>

              {/* Pricing Block */}
              <div className="p-4 rounded-2xl bg-[#F6F3EC]/70 border border-[#E1DACB] mb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-[#12302B]">0</span>
                  <span className="text-xl font-bold text-[#12302B]">₪</span>
                  <span className="text-xs text-[#526661] font-medium">/ شهرياً (بدون رسوم اشتراك)</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#1F7A6E] font-medium mt-1">
                  <span className="material-symbols-outlined text-sm">percent</span>
                  <span>عمولة 3% فقط على الطلبات المكتملة بعد انتهاء الـ 14 يوماً</span>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-3.5 mb-8">
                <div className="text-xs font-bold text-[#12302B] uppercase tracking-wider">ميزات الباقة التأسيسية:</div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#12302B]">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl mt-0.5">check_circle</span>
                  <span>إدارة حتى <strong>30 منتجاً</strong> مع دعم المقاسات والألوان</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#12302B]">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl mt-0.5">check_circle</span>
                  <span>كاش باك موحد 5% نقاط ولاء لزبائن المتجر</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#12302B]">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl mt-0.5">check_circle</span>
                  <span>استلام المستحقات أسبوعياً أو شهرياً عبر محفظة بال باي (PalPay)</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#12302B]">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl mt-0.5">check_circle</span>
                  <span>إشعارات فورية للطلبات مع نظام كود تسليم الزبون المكون من 4 أرقام</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#12302B]">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl mt-0.5">check_circle</span>
                  <span>تقارير مبيعات أساسية ومتابعة الأرباح الشهرية</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#526661]/70 line-through">
                  <span className="material-symbols-outlined text-gray-400 text-xl mt-0.5">cancel</span>
                  <span>أولوية تصدر نتائج البحث في دليل المتاجر</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#526661]/70 line-through">
                  <span className="material-symbols-outlined text-gray-400 text-xl mt-0.5">cancel</span>
                  <span>إنشاء حملات نقاط مضاعفة وقسائم خصم خاصة</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <button
              className="w-full h-12 rounded-xl bg-gray-100 text-[#526661] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-default"
              disabled
              type="button"
            >
              <span className="material-symbols-outlined text-base">verified</span>
              <span>{currentTier === 'trial' ? 'باقتك الحالية (نشطة حتى 18 مايو)' : 'الباقة الأساسية'}</span>
            </button>
          </div>

          {/* CARD 2: باقة التاجر المميّز Pro (الأكثر طلباً وتفضيلاً) */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#E9B44C] shadow-xl relative flex flex-col justify-between overflow-hidden" id="pro-tier-card">
            {/* Distinctive Top Ribbon */}
            <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-[#12302B] via-[#1F7A6E] to-[#12302B] py-1.5 px-4 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#E9B44C]">
                <span className="material-symbols-outlined text-sm icon-fill">stars</span>
                <span>الأكثر اختياراً لنمو المبيعات ومضاعفة الزبائن</span>
                <span className="material-symbols-outlined text-sm icon-fill">stars</span>
              </div>
            </div>

            <div className="pt-4">
              {/* Header Area */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#E9B44C]/15 text-[#8A6420] text-xs font-bold inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs icon-fill">diamond</span>
                    <span>ترقية كاملة للمحترفين</span>
                  </span>
                  <h3 className="text-2xl font-bold text-[#12302B] mt-2 flex items-center gap-2">
                    <span>باقة التاجر المميّز Pro</span>
                    <span className="text-xs bg-[#1F7A6E] text-white px-2 py-0.5 rounded-md font-medium">VIP</span>
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#E9B44C]/20 text-[#8A6420] flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-2xl icon-fill">workspace_premium</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#526661] mb-6 leading-relaxed">
                حل متكامل للمتاجر الطموحة التي تسعى للظهور كخيار أول أمام آلاف المتسوقين في قطاع غزة مع تسهيلات مالية فورية.
              </p>

              {/* Pricing Block with PalPay integration mention */}
              <div className="p-4 rounded-2xl gold-shimmer border border-[#E9B44C]/40 mb-6">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-[#12302B]">79</span>
                    <span className="text-xl font-bold text-[#12302B]">₪</span>
                    <span className="text-xs text-[#526661] font-medium">/ شهرياً (بالشيكل الفلسطيني)</span>
                  </div>
                  <span className="text-xs font-bold text-[#1F7A6E] bg-white/80 px-2 py-1 rounded-lg border border-[#1F7A6E]/20">
                    خصم تلقائي مرن
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#526661] mt-2 pt-2 border-t border-[#E9B44C]/30">
                  <span className="flex items-center gap-1 text-[#12302B] font-semibold">
                    <span className="material-symbols-outlined text-sm text-[#1F7A6E]">check_circle</span>
                    <span>عمولة المنصة 3% فقط دون أي زيادة</span>
                  </span>
                  <span className="text-[11px] text-[#526661]">تُخصم من المحفظة أو عبر PalPay</span>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-3.5 mb-8">
                <div className="text-xs font-bold text-[#12302B] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#8A6420]">auto_awesome</span>
                  <span>الميزات الحصرية لباقة التاجر المميّز:</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#12302B]">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl mt-0.5 icon-fill">recommend</span>
                  <span><strong>أولوية الظهور في صدارة دليل المتاجر</strong> والصفحة الرئيسية لآلاف المتسوقين بغزة</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#12302B]">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl mt-0.5 icon-fill">all_inclusive</span>
                  <span><strong>منتجات غير محدودة</strong> مع تحكم متقدم بالمخزون والألوان والمقاسات</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#12302B]">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl mt-0.5 icon-fill">insights</span>
                  <span><strong>تقارير وتحليلات متقدمة</strong> لسلوك العملاء ومعدل تكرار الشراء ومؤشر الولاء</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#12302B]">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl mt-0.5 icon-fill">campaign</span>
                  <span>إطلاق <strong>عروض ترويجية غير محدودة</strong> (قسائم خاصة، نقاط مضاعفة، وهدايا مجانية)</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#12302B]">
                  <span className="material-symbols-outlined text-[#E9B44C] text-xl mt-0.5 icon-fill">verified</span>
                  <span><strong>شارة «متجر مميّز معتمد» الذهبية</strong> على واجهة المتجر لرفع ثقة المتسوقين بنسبة 40%</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#12302B]">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl mt-0.5 icon-fill">payments</span>
                  <span><strong>سحب رصيد فوري ويومي</strong> عبر بال باي (PalPay) دون الانتظار للدورة الأسبوعية</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#12302B]">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl mt-0.5 icon-fill">support_agent</span>
                  <span><strong>دعم فني مخصص وأولوية قصوى</strong> لمعالجة أي استفسارات أو تسويات خلال ساعتين فقط</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            {currentTier === 'pro' ? (
              <div className="w-full h-12 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 font-extrabold text-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined icon-fill">verified</span>
                <span>باقتك الحالية مفعلة ونشطة ✓</span>
              </div>
            ) : (
              <button
                onClick={() => navigate('/merchant/subscription/checkout')}
                className="w-full h-12 rounded-xl bg-[#E9B44C] hover:bg-[#d8a136] text-[#12302B] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#E9B44C]/30 transition-all duration-200 active:scale-95 cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined icon-fill text-lg">bolt</span>
                <span>الاشتراك في باقة Pro بـ 79 ₪ شهرياً</span>
              </button>
            )}
          </div>
        </div>

        {/* 3. FEATURE MATRIX COMPARISON TABLE */}
        <section className="bg-white rounded-3xl p-6 md:p-8 border border-[#E1DACB] shadow-sm mb-16">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#E1DACB]/60 pb-4">
            <div>
              <h3 className="text-xl font-bold text-[#12302B]">
                جدول المقارنة التفصيلي للميزات
              </h3>
              <p className="text-xs text-[#526661] mt-0.5">
                نظرة دقيقة لجميع الخصائص التقنية والخدمات المشمولة في باقات تجار منصة تبادل
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#1F7A6E] font-medium bg-[#1F7A6E]/10 px-3 py-1.5 rounded-full self-start">
              <span className="material-symbols-outlined text-sm">tune</span>
              <span>كل الأسعار تشمل الدعم المحلي الفوري</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-[#E1DACB]">
                  <th className="py-4 px-4 text-xs font-bold text-[#12302B] w-2/5">الميزة والخدمة</th>
                  <th className="py-4 px-4 text-center text-xs font-bold text-[#12302B] w-3/10 bg-[#F6F3EC]/70 rounded-t-xl">
                    الباقة التأسيسية
                    <div className="text-[11px] font-normal text-[#526661]">0 ₪ / مجانية</div>
                  </th>
                  <th className="py-4 px-4 text-center text-xs font-bold text-[#12302B] w-3/10 bg-[#E9B44C]/10 rounded-t-xl border-t-2 border-[#E9B44C]">
                    باقة التاجر المميّز Pro
                    <div className="text-[11px] font-bold text-[#8A6420]">79 ₪ / شهرياً</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E1DACB]/60 text-xs sm:text-sm">
                
                {/* Row 1: عدد المنتجات */}
                <tr className="hover:bg-[#F6F3EC]/40 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-[#12302B]">عدد المنتجات المعروضة</div>
                    <div className="text-[11px] text-[#526661]">الحد الأقصى لرفع تشكيلات الملابس والأزياء</div>
                  </td>
                  <td className="py-4 px-4 text-center text-[#526661] bg-[#F6F3EC]/30">
                    حتى 30 منتجاً
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#1F7A6E] bg-[#E9B44C]/5">
                    <div className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">all_inclusive</span>
                      <span>غير محدود كلياً</span>
                    </div>
                  </td>
                </tr>

                {/* Row 2: نسبة العمولة */}
                <tr className="hover:bg-[#F6F3EC]/40 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-[#12302B]">نسبة عمولة المنصة على المبيعات</div>
                    <div className="text-[11px] text-[#526661]">تُحتسب فقط بعد تأكيد التسليم بالرمز المكون من 4 أرقام</div>
                  </td>
                  <td className="py-4 px-4 text-center text-[#526661] bg-[#F6F3EC]/30">
                    3% (بعد الـ 14 يوماً)
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#12302B] bg-[#E9B44C]/5">
                    3% ثابتة
                  </td>
                </tr>

                {/* Row 3: أولوية الظهور */}
                <tr className="hover:bg-[#F6F3EC]/40 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-[#12302B]">أولوية الظهور في دليل المتاجر والبحث</div>
                    <div className="text-[11px] text-[#526661]">التواجد في صدارة التصنيفات والصفحة الأولى للمستهلكين</div>
                  </td>
                  <td className="py-4 px-4 text-center text-[#526661] bg-[#F6F3EC]/30">
                    ظهور اعتيادي بحسب التقييم
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#1F7A6E] bg-[#E9B44C]/5">
                    <span className="inline-flex items-center gap-1 text-xs bg-[#1F7A6E]/10 px-2 py-0.5 rounded-full text-[#1F7A6E]">
                      <span className="material-symbols-outlined text-xs icon-fill">bolt</span>
                      <span>صدارة متقدمة مضمونة</span>
                    </span>
                  </td>
                </tr>

                {/* Row 4: دورة سحب الأرباح */}
                <tr className="hover:bg-[#F6F3EC]/40 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-[#12302B]">دورة سحب الأرباح والتحويل المالي</div>
                    <div className="text-[11px] text-[#526661]">تحويل المستحقات عبر الحساب البنكي أو بال باي (PalPay)</div>
                  </td>
                  <td className="py-4 px-4 text-center text-[#526661] bg-[#F6F3EC]/30">
                    أسبوعي / شهري
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#12302B] bg-[#E9B44C]/5">
                    <div className="inline-flex items-center gap-1 text-[#1F7A6E]">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      <span>سحب فوري ويومي</span>
                    </div>
                  </td>
                </tr>

                {/* Row 5: العروض الترويجية */}
                <tr className="hover:bg-[#F6F3EC]/40 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-[#12302B]">حملات الخصم والنقاط المضاعفة</div>
                    <div className="text-[11px] text-[#526661]">أدوات تسويقية لإنشاء كوبونات خاصة ورفع المبيعات بالمواسم</div>
                  </td>
                  <td className="py-4 px-4 text-center text-[#526661] bg-[#F6F3EC]/30">
                    كاش باك ثابت 5% فقط
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#12302B] bg-[#E9B44C]/5">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-xl icon-fill inline-block">check_circle</span>
                    <span className="block text-xs text-[#1F7A6E]">حملات وكوبونات غير محدودة</span>
                  </td>
                </tr>

                {/* Row 6: شارة التوثيق الذهبية */}
                <tr className="hover:bg-[#F6F3EC]/40 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-[#12302B]">شارة «متجر مميّز معتمد» الذهبية</div>
                    <div className="text-[11px] text-[#526661]">رمز موثوقية بجانب اسم المتجر في واجهة التطبيق والويب</div>
                  </td>
                  <td className="py-4 px-4 text-center text-[#526661] bg-[#F6F3EC]/30">
                    شارة خضراء قياسية
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#8A6420] bg-[#E9B44C]/5">
                    <div className="inline-flex items-center gap-1 bg-[#E9B44C]/20 px-2 py-0.5 rounded-full text-xs">
                      <span className="material-symbols-outlined text-sm icon-fill text-[#8A6420]">stars</span>
                      <span>شارة التاجر الذهبي VIP</span>
                    </div>
                  </td>
                </tr>

                {/* Row 7: التقارير والتحليلات */}
                <tr className="hover:bg-[#F6F3EC]/40 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-[#12302B]">التقارير وسلوك المستهلكين</div>
                    <div className="text-[11px] text-[#526661]">تتبع المنتجات الأكثر طلباً ومعدلات إعادة الشراء</div>
                  </td>
                  <td className="py-4 px-4 text-center text-[#526661] bg-[#F6F3EC]/30">
                    تقرير المبيعات الأساسي
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#12302B] bg-[#E9B44C]/5">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-xl icon-fill inline-block">check_circle</span>
                    <span className="block text-xs text-[#1F7A6E]">تحليلات متقدمة ورؤى ذكية</span>
                  </td>
                </tr>

                {/* Row 8: الدعم الفني */}
                <tr className="hover:bg-[#F6F3EC]/40 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-[#12302B]">الدعم الفني وسرعة الاستجابة</div>
                    <div className="text-[11px] text-[#526661]">مساعدة التاجر عند مواجهة أي مشاكل تقنية أو استفسارات تسليم</div>
                  </td>
                  <td className="py-4 px-4 text-center text-[#526661] bg-[#F6F3EC]/30">
                    خلال 24 ساعة عمل
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-[#12302B] bg-[#E9B44C]/5">
                    <span className="inline-flex items-center gap-1 text-xs text-[#1F7A6E] font-bold">
                      <span className="material-symbols-outlined text-sm">speed</span>
                      <span>أولوية قصوى خلال ساعتين</span>
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* 4. TRANSPARENCY & FAQ SECTION */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#1F7A6E]/10 text-[#1F7A6E] flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">help_outline</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#12302B]">
                ضمان الشفافية والأسئلة الشائعة حول الباقات
              </h3>
              <p className="text-xs sm:text-sm text-[#526661]">
                إجابات واضحة ومباشرة حول آلية الترقية والدفع وإلغاء الاشتراك
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FAQ 1 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E1DACB] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#E9B44C]/15 text-[#8A6420] flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-lg">calendar_month</span>
                </div>
                <h4 className="text-base font-bold text-[#12302B] mb-2">
                  متى يبدأ خصم الـ 79 ₪؟
                </h4>
                <p className="text-xs text-[#526661] leading-relaxed">
                  إذا قمت بالترقية الآن، لن يُخصم أي مبلغ حتى انقضاء الـ 12 يوماً المتبقية من تجربتك المجانية. الترقية تضمن استمرار متجرك بالظهور المميز دون انقطاع. ويمكنك إلغاء الاشتراك في أي وقت بدون التزامات.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E1DACB]/60 flex items-center gap-1.5 text-xs text-[#1F7A6E] font-semibold">
                <span className="material-symbols-outlined text-sm">lock_clock</span>
                <span>فترة سماح آمنة</span>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E1DACB] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#1F7A6E]/15 text-[#1F7A6E] flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-lg">visibility</span>
                </div>
                <h4 className="text-base font-bold text-[#12302B] mb-2">
                  هل توجد رسوم خفية أو بنود غير معلنة؟
                </h4>
                <p className="text-xs text-[#526661] leading-relaxed">
                  نهائياً. في منصة تبادل نلتزم بمبدأ الشفافية التامة؛ لا توجد أي رسوم تسجيل أو فتح متجر. الالتزام الوحيد هو 3% عمولة على المبيعات المكتملة فعلياً وقيمة الاشتراك الشهري للباقة المختارة فقط.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E1DACB]/60 flex items-center gap-1.5 text-xs text-[#1F7A6E] font-semibold">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                <span>شفافية بنسبة 100%</span>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-6 rounded-2xl border border-[#E1DACB] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#12302B]/10 text-[#12302B] flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-lg">payments</span>
                </div>
                <h4 className="text-base font-bold text-[#12302B] mb-2">
                  كيف يتم الدفع والخصم الشهري؟
                </h4>
                <p className="text-xs text-[#526661] leading-relaxed">
                  يمكنك الدفع بمرونة تامة عبر رصيد مبيعاتك المتوفر في محفظة التاجر على منصة تبادل، أو ربط حسابك في بال باي (PalPay)، أو الإيداع المباشر في حساباتنا المعتمدة داخل قطاع غزة.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E1DACB]/60 flex items-center gap-1.5 text-xs text-[#1F7A6E] font-semibold">
                <span className="material-symbols-outlined text-sm">account_balance</span>
                <span>دعم كامل لشبكة PalPay</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. LOCAL MERCHANT ASSURANCE BANNER */}
        <div className="bg-gradient-to-r from-[#12302B] to-[#1F7A6E] rounded-3xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#E9B44C] shrink-0 border border-white/15">
              <span className="material-symbols-outlined text-3xl">store</span>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold">هل تحتاج باقة خاصة لسلسلة فروع أو استشارة مخصصة؟</h4>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                فريق شركاء تجار تبادل في غزة جاهز لزيارة متجرك وتقديم تدريب شامل لفريق عملك بدون أي تكلفة إضافية.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              className="h-11 px-6 rounded-xl bg-white text-[#12302B] font-bold text-xs sm:text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2 w-full md:w-auto shadow-sm"
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-lg text-[#1F7A6E]">chat</span>
              <span>تواصل مع مستشار التجار</span>
            </a>
          </div>
        </div>

      </main>

      {/* Upgrade Confirmation Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E1DACB] space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#E1DACB]/60 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#E9B44C]/20 text-[#8A6420] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl icon-fill">stars</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-[#12302B]">ترقية المتجر إلى باقة Pro</h3>
                  <p className="text-xs text-[#526661]">قيمة الاشتراك: 79 ₪ شهرياً</p>
                </div>
              </div>
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="text-[#526661] hover:text-[#12302B] p-1"
              >
                ✕
              </button>
            </div>

            <div className="bg-[#F6F3EC] p-3.5 rounded-2xl border border-[#E1DACB] text-xs text-[#12302B] space-y-2">
              <div className="flex items-center justify-between font-bold">
                <span>المبلغ المستحق الآن:</span>
                <span className="text-[#1F7A6E] font-black">0.00 ₪ (سيبدأ الخصم بعد 12 يوماً)</span>
              </div>
              <p className="text-[11px] text-[#526661] leading-relaxed">
                ستستفيد فوراً من مزايا باقة Pro (أولوية الصدارة، منتجات غير محدودة، وسحب فوري) دون انقطاع، وسيتم الخصم التلقائي بعد انتهاء الأيام الـ 12 المتبقية.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#12302B] mb-2">اختر طريقة السداد التلقائي:</label>
              <div className="space-y-2 text-xs">
                <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                  paymentMethod === 'wallet' ? 'border-[#1F7A6E] bg-[#1F7A6E]/5 font-bold' : 'border-[#E1DACB]'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'wallet'}
                      onChange={() => setPaymentMethod('wallet')}
                      className="text-[#1F7A6E]"
                    />
                    <span>الخصم من رصيد محفظة تبادل المتوفر (340.50 ₪)</span>
                  </div>
                  <span className="text-[#1F7A6E] font-bold">متاح</span>
                </label>

                <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                  paymentMethod === 'palpay' ? 'border-[#1F7A6E] bg-[#1F7A6E]/5 font-bold' : 'border-[#E1DACB]'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'palpay'}
                      onChange={() => setPaymentMethod('palpay')}
                      className="text-[#1F7A6E]"
                    />
                    <span>محفظة بال باي (PalPay) الإلكترونية</span>
                  </div>
                  <span className="text-[#526661]">معتمد</span>
                </label>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="px-4 py-2.5 rounded-xl border border-[#E1DACB] text-xs font-bold text-[#526661] hover:bg-gray-100 transition-colors"
                disabled={isUpgrading}
              >
                إلغاء
              </button>
              <button
                onClick={handleConfirmUpgrade}
                disabled={isUpgrading}
                className="px-6 py-2.5 rounded-xl bg-[#E9B44C] hover:bg-[#d8a136] text-[#12302B] font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                {isUpgrading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-[#12302B] border-t-transparent rounded-full animate-spin" />
                    <span>جاري التفعيل...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-sm icon-fill">check_circle</span>
                    <span>تأكيد الترقية إلى Pro</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER (Shared Components JSON Anchor) */}
      <footer className="bg-white border-t border-[#E1DACB] w-full mt-auto">
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#526661]">
          {/* Logo & Copyright Section */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-right">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#12302B] text-[#E9B44C] flex items-center justify-center">
                <span className="material-symbols-outlined text-base icon-fill">shopping_bag</span>
              </div>
              <span className="font-extrabold text-sm text-[#12302B]">تبادل</span>
            </div>
            <span className="hidden sm:inline text-gray-300">|</span>
            <p>
              © 2026 منصة تبادل لولاء المتاجر والأزياء - غزة. جميع الحقوق محفوظة.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <Link to="/merchant/dashboard" className="hover:text-[#12302B] transition-colors">
              مركز مساعدة المتاجر
            </Link>
            <Link to="/merchant/help" className="hover:text-[#12302B] transition-colors">
              الشروط والأحكام
            </Link>
            <Link to="/merchant/help" className="hover:text-[#12302B] transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to="/merchant/landing" className="hover:text-[#12302B] transition-colors">
              دليل الشركاء
            </Link>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-[#12302B] transition-colors font-bold text-[#1F7A6E]">
              التواصل والدعم الفني
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
