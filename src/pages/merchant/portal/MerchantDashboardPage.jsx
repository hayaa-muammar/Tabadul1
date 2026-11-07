import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../../components/common/Footer';

export default function MerchantDashboardPage() {
  const navigate = useNavigate();

  // PIN Verification Modal State
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinInputs, setPinInputs] = useState(['', '', '', '']);
  const [pinVerified, setPinVerified] = useState(false);

  // Review reply modal state
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const [activeReviewForReply, setActiveReviewForReply] = useState(null);
  const [replyText, setReplyText] = useState('');

  // Toast feedback
  const [toastMessage, setToastMessage] = useState(null);

  // Orders list state for live acceptance
  const [orders, setOrders] = useState([
    {
      id: '#TB-8419',
      item: 'عباءة حريرية مطرزة (مقاس L)',
      category: 'أزياء نسائية • كود اللون: زيتوني',
      customer: 'ريم خليل',
      location: 'غزة - الرمال الشمالي',
      price: '220 ₪',
      points: '+22 نقطة ولاء',
      status: 'pending', // pending approval
      statusLabel: 'بانتظار الموافقة',
    },
    {
      id: '#TB-8415',
      item: 'حذاء كلاسيكي فلات (مقاس 39)',
      category: 'أحذية • جلد طبيعي أسود',
      customer: 'د. سناء يوسف',
      location: 'دير البلح - شارع السلام',
      price: '120 ₪',
      points: '+12 نقطة ولاء',
      status: 'with_courier', // with courier
      statusLabel: 'مع مندوب التوصيل',
    },
  ]);

  // Reviews state
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'منى حسونة',
      initials: 'من',
      location: 'حي النصر، غزة • طلب #TB-8390',
      rating: 5,
      time: 'منذ 3 ساعات • مشتري موثق',
      content:
        'العباءة الحريرية قماشها وتطريزها راقي جداً والتوصيل كان أسرع مما توقعت رغم الظروف. شكراً لبوتيك لمسة وللمنصة على نقاط الكاش باك!',
      reply: null,
    },
    {
      id: 2,
      name: 'أية البيطار',
      initials: 'أي',
      location: 'الرمال الجنوبي • طلب #TB-8362',
      rating: 4,
      time: 'أمس • مشتري موثق',
      content:
        'الحذاء مقاسه مظبوط ومريح جداً. المندوب سلمني بالموعد ورمز الـ 4 أرقام كان سريع. أنصح بالتعامل معهم.',
      reply: null,
    },
  ]);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handlePinChange = (index, value) => {
    if (value.length > 1) return;
    const newInputs = [...pinInputs];
    newInputs[index] = value;
    setPinInputs(newInputs);
    if (value && index < 3) {
      const nextInput = document.getElementById(`modal-pin-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleConfirmPin = () => {
    if (pinInputs.join('').length === 4) {
      setPinVerified(true);
      setTimeout(() => {
        setShowPinModal(false);
        setPinVerified(false);
        setPinInputs(['', '', '', '']);
        triggerToast('تم التحقق من كود التسليم بنجاح! تم تحرير مبلغ 490 ₪ ونقله لمحفظتك.');
      }, 1200);
    } else {
      alert('يرجى إدخال رمز PIN المكون من 4 أرقام كاملاً.');
    }
  };

  const handleAcceptOrder = (orderId) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId
          ? { ...o, status: 'accepted', statusLabel: 'تم القبول وجاري التجهيز' }
          : o
      )
    );
    triggerToast(`تم قبول وتأكيد تجهيز الطلب ${orderId} بنجاح!`);
  };

  const handleOpenReplyModal = (review) => {
    setActiveReviewForReply(review);
    setReplyText(review.reply || '');
    setReplyModalOpen(true);
  };

  const handleSaveReply = () => {
    if (!replyText.trim()) return;
    setReviews((prev) =>
      prev.map((r) =>
        r.id === activeReviewForReply.id ? { ...r, reply: replyText } : r
      )
    );
    setReplyModalOpen(false);
    triggerToast('تم نشر رد المتجر على تقييم الزبونة بنجاح!');
  };

  return (
    <div className="bg-[#F6F3EC] text-[#12302B] min-h-screen flex flex-col font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#12302B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#E9B44C]/50 text-sm font-bold animate-bounce">
          <span className="material-symbols-outlined text-[#E9B44C] text-xl">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation Bar Anchor (JSON Shared Component Integration) */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-[#E1DACB]/60 font-tajawal">
        <div className="flex justify-between items-center w-full px-4 sm:px-6 py-3 max-w-7xl mx-auto">
          {/* Brand & Store Info Group */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex items-center gap-3">
              <Link to="/merchant/dashboard" className="flex items-center gap-2 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="منصة تبادل"
                  className="h-10 md:h-11 w-auto object-contain rounded-lg"
                />
              </Link>
              <div className="h-7 w-px bg-[#E1DACB] mx-1 hidden sm:block"></div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm md:text-base font-bold text-[#12302B]">بوتيك لمسة</span>
                <span className="inline-flex items-center gap-1 text-[11px] bg-[#1F7A6E]/10 text-[#1F7A6E] px-2 py-0.5 rounded-full font-semibold">
                  متجر معتمد
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-bold">
            <Link
              to="/merchant/dashboard"
              className="border-b-2 border-[#12302B] text-[#12302B] pb-1 transition-all"
            >
              الرئيسية
            </Link>
            <Link
              to="/merchant/orders"
              className="relative text-[#4A5B57] hover:text-[#12302B] pb-1 transition-colors flex items-center gap-1.5"
            >
              <span>الطلبات</span>
              <span className="bg-[#ba1a1a] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full h-4 min-w-[16px] inline-flex items-center justify-center">
                3
              </span>
            </Link>
            <Link
              to="/merchant/products"
              className="text-[#4A5B57] hover:text-[#12302B] pb-1 transition-colors"
            >
              المنتجات
            </Link>
            <Link
              to="/merchant/offers"
              className="text-[#4A5B57] hover:text-[#12302B] pb-1 transition-colors"
            >
              العروض
            </Link>
            <Link
              to="/merchant/wallet"
              className="text-[#4A5B57] hover:text-[#12302B] pb-1 transition-colors"
            >
              المال والتحويلات
            </Link>
            <Link
              to="/merchant/reports"
              className="text-[#4A5B57] hover:text-[#12302B] pb-1 transition-colors"
            >
              التقارير
            </Link>

            {/* More Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="text-[#4A5B57] hover:text-[#12302B] pb-1 transition-colors flex items-center gap-1 focus:outline-none"
              >
                <span>المزيد</span>
                <span className="material-symbols-outlined text-base">expand_more</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-lg border border-[#E1DACB] p-1.5 hidden group-hover:block group-focus-within:block z-50 transition-all">
                <Link
                  to="/merchant/reviews"
                  className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#12302B] hover:bg-[#F6F3EC] rounded-lg transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#835400] icon-fill">star</span>
                    التقييمات
                  </span>
                  <span className="inline-flex items-center gap-0.5 bg-amber-50 text-amber-900 border border-amber-200/60 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    4.8★
                  </span>
                </Link>
                <Link
                  to="/merchant/subscription"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#12302B] hover:bg-[#F6F3EC] rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-sm text-[#E9B44C] icon-fill">verified</span>
                  الباقة والاشتراك
                </Link>
                <Link
                  to="/merchant/settings"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#12302B] hover:bg-[#F6F3EC] rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-sm text-[#4A5B57]">settings</span>
                  إعدادات المتجر
                </Link>
                <div className="h-px bg-[#E1DACB]/60 my-1"></div>
                <Link
                  to="/merchant/help"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#12302B] hover:bg-[#F6F3EC] rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-sm text-[#4A5B57]">help_outline</span>
                  المساعدة والدعم
                </Link>
              </div>
            </div>
          </nav>

          {/* Trailing Actions Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Trial Remaining Badge */}
            <Link
              to="/merchant/subscription"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-sm hover:bg-amber-100 transition-colors"
            >
              <span className="material-symbols-outlined text-sm text-[#835400] icon-fill">timer</span>
              <span>التجربة: 12 يوماً متبقياً</span>
            </Link>

            {/* Notifications Button */}
            <button
              onClick={() => triggerToast('لا توجد تنبيهات جديدة في الوقت الحالي.')}
              type="button"
              className="relative p-2 rounded-xl text-[#4A5B57] hover:text-[#12302B] hover:bg-[#F6F3EC] transition-colors focus:outline-none"
              title="التنبيهات"
            >
              <span className="material-symbols-outlined text-2xl">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#E9B44C] rounded-full border-2 border-white"></span>
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-[#E1DACB] mx-0.5"></div>

            {/* Profile Avatar & Integrated Menu Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1.5 p-1 rounded-full hover:ring-2 hover:ring-[#1F7A6E]/30 transition-all focus:outline-none"
                title="الملف الشخصي"
              >
                <div className="w-9 h-9 rounded-full bg-[#1F7A6E]/15 border border-[#1F7A6E]/30 flex items-center justify-center font-bold text-[#1F7A6E] text-xs shadow-sm">
                  LB
                </div>
                <span className="material-symbols-outlined text-sm text-[#4A5B57]">arrow_drop_down</span>
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#E1DACB] p-1.5 hidden group-hover:block group-focus-within:block z-50 transition-all">
                <div className="px-3 py-2 border-b border-[#E1DACB]/60">
                  <div className="text-xs font-bold text-[#12302B]">بوتيك لمسة</div>
                  <div className="text-[10px] text-[#4A5B57] truncate">lamsa.boutique@tabadul.ps</div>
                </div>
                <Link
                  to="/merchant/profile"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#12302B] hover:bg-[#F6F3EC] rounded-lg transition-colors mt-1"
                >
                  <span className="material-symbols-outlined text-sm text-[#4A5B57]">person</span>
                  الملف الشخصي
                </Link>
                <Link
                  to="/merchant/settings"
                  className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#12302B] hover:bg-[#F6F3EC] rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-sm text-[#4A5B57]">storefront</span>
                  بيانات المتجر
                </Link>
                <div className="h-px bg-[#E1DACB]/60 my-1"></div>
                <Link
                  to="/merchant/logout"
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-[#ba1a1a] hover:bg-red-50 rounded-lg transition-colors text-right"
                >
                  <span className="material-symbols-outlined text-sm">logout</span>
                  تسجيل الخروج
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Canvas */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Top Alert / Urgency Banner (Action Required: 3 Structured Priority Cards) */}
        <section>
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E9B44C] animate-ping"></div>
              <h2 className="text-lg font-bold text-[#12302B]">إجراءات تحتاج انتباهك الفوري</h2>
            </div>
            <span className="text-xs font-semibold text-[#4A5B57] bg-white/70 px-3 py-1 rounded-full border border-[#E1DACB]">
              3 مهام حرجة معلقة
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Action Card 1: New Orders Waiting */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 left-0 h-1 bg-[#E9B44C]"></div>
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E9B44C]/15 text-[#12302B] text-xs font-bold">
                    <span className="material-symbols-outlined text-sm text-[#835400] icon-fill">timer</span>
                    أولوية قصوى
                  </span>
                  <span className="text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">schedule</span>
                    متبقي 18 ساعة
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#12302B] mb-1">طلبات جديدة تنتظر القبول</h3>
                <p className="text-xs text-[#4A5B57] leading-relaxed mb-4">
                  لديك <strong className="text-[#12302B] font-bold">طلبين جديدين</strong> جاهزين للتجهيز. مهلة الـ 48 ساعة تنتهي تلقائياً بعد 18 ساعة.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E1DACB]/40 flex items-center justify-between">
                <span className="text-[11px] text-[#4A5B57] font-semibold">إجمالي: 340 ₪</span>
                <button
                  onClick={() => navigate('/merchant/orders')}
                  type="button"
                  className="px-4 py-2 rounded-xl bg-[#12302B] text-white hover:bg-[#1F7A6E] transition-all text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                >
                  <span>مراجعة وقبول الطلبات</span>
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                </button>
              </div>
            </div>

            {/* Action Card 2: Delivery Verification (4-digit Code PIN) */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 left-0 h-1 bg-[#1F7A6E]"></div>
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1F7A6E]/15 text-[#1F7A6E] text-xs font-bold">
                    <span className="material-symbols-outlined text-sm icon-fill">local_shipping</span>
                    تسليم المندوب
                  </span>
                  <span className="text-xs font-bold text-[#1F7A6E] bg-emerald-50 px-2 py-0.5 rounded-md">
                    3 طلبات بالشحن
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#12302B] mb-1">تسليمات تنتظر تأكيدك</h3>
                <p className="text-xs text-[#4A5B57] leading-relaxed mb-4">
                  أدخل رمز الاستلام المكون من 4 أرقام المقدم من الزبون عند استلام الحذاء/الفستان لتحرير الرصيد في المحفظة فوراً.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E1DACB]/40 flex items-center justify-between">
                <span className="text-[11px] text-[#4A5B57] font-semibold">تحرير 490 ₪</span>
                <button
                  onClick={() => setShowPinModal(true)}
                  type="button"
                  className="px-3.5 py-2 rounded-xl bg-[#E9B44C] text-[#12302B] hover:bg-[#feb64e] transition-all text-xs font-black flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">pin</span>
                  <span>تأكيد التسليم برمز 4 أرقام</span>
                </button>
              </div>
            </div>

            {/* Action Card 3: Complaints / Size Exchange */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 left-0 h-1 bg-amber-500"></div>
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                    <span className="material-symbols-outlined text-sm">swap_horiz</span>
                    خدمة الزبائن
                  </span>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md">
                    مهلة رد 48 ساعة
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#12302B] mb-1">شكاوى وطلبات تبديل مفتوحة</h3>
                <p className="text-xs text-[#4A5B57] leading-relaxed mb-4">
                  طلب استبدال مقاس فستان سهرة (طلب #9402) قيد انتظار مراجعتك، الرد يمنع تحرير النقاط التعويضية تلقائياً للزبونة.
                </p>
              </div>
              <div className="pt-2 border-t border-[#E1DACB]/40 flex items-center justify-between">
                <span className="text-[11px] text-[#4A5B57] font-semibold">طلب تبديل #9402</span>
                <button
                  onClick={() => navigate('/merchant/orders')}
                  type="button"
                  className="px-4 py-2 rounded-xl bg-white border border-[#12302B] text-[#12302B] hover:bg-[#12302B] hover:text-white transition-all text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>معالجة الطلب</span>
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics Grid (Exactly 5 Core Indicators) */}
        <section>
          <div className="flex items-center justify-between mb-3.5">
            <h2 className="text-lg font-bold text-[#12302B]">المؤشرات الرئيسية للأداء</h2>
            <span className="text-xs text-[#4A5B57]">محدث لحظياً: اليوم، غزة</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Metric 1: Today's Sales */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm relative flex flex-col justify-between">
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-bold text-[#4A5B57]">مبيعات اليوم</span>
                <div className="w-8 h-8 rounded-xl bg-[#1F7A6E]/10 flex items-center justify-center text-[#1F7A6E]">
                  <span className="material-symbols-outlined text-lg">point_of_sale</span>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-extrabold text-[#12302B] tracking-tight">840</span>
                  <span className="text-base font-bold text-[#4A5B57]">₪</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center text-xs font-bold text-[#1F7A6E] bg-emerald-50 px-2 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-xs">trending_up</span>
                    +15% مقارنة بأمس
                  </span>
                  <span className="text-[11px] text-[#4A5B57]">• 4 طلبات مؤكدة</span>
                </div>
              </div>
            </div>

            {/* Metric 2: Active Orders in Pipeline */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm relative flex flex-col justify-between">
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-bold text-[#4A5B57]">طلبات قيد التنفيذ</span>
                <div className="w-8 h-8 rounded-xl bg-[#12302B]/10 flex items-center justify-center text-[#12302B]">
                  <span className="material-symbols-outlined text-lg">inventory_2</span>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-extrabold text-[#12302B]">5</span>
                  <span className="text-base font-bold text-[#4A5B57]">طلبات نشطة</span>
                </div>
                <div className="text-[11px] text-[#4A5B57] flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 rounded bg-[#F6F3EC] text-[#12302B] font-semibold">2 للتجهيز</span>
                  <span>+</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-[#1F7A6E] font-semibold">3 مع المندوب</span>
                </div>
              </div>
            </div>

            {/* Metric 3: Payout Balance & Schedule */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm relative flex flex-col justify-between">
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-bold text-[#4A5B57]">الرصيد المستحق تحويله</span>
                <div className="w-8 h-8 rounded-xl bg-[#E9B44C]/20 flex items-center justify-center text-[#835400]">
                  <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-extrabold text-[#12302B]">1,420</span>
                  <span className="text-base font-bold text-[#4A5B57]">₪</span>
                </div>
                <p className="text-[11px] text-[#4A5B57] leading-tight">
                  التحويل القادم: <span className="text-[#12302B] font-bold">الخميس (جوال باي)</span> • عمولة 3% فقط
                </p>
              </div>
            </div>

            {/* Metric 4: Customer Satisfaction & Rating KPI Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#4A5B57]">تقييم المتجر ورضا الزبائن</span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#835400] flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg icon-fill">star</span>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl font-extrabold text-[#12302B]">4.8</span>
                  <span className="text-sm text-[#4A5B57] font-semibold">/ 5</span>
                  <span className="inline-flex items-center gap-1 mr-auto px-2 py-0.5 rounded-full bg-[#E9B44C]/20 text-[#835400] text-[10px] font-bold">
                    <span className="material-symbols-outlined text-xs icon-fill">military_tech</span>
                    المستوى الذهبي
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#4A5B57] mt-1">
                  <span>
                    128 تقييماً موثقاً <span className="text-emerald-700 font-bold">(+14 هذا الأسبوع)</span>
                  </span>
                  <Link
                    to="/merchant/reviews"
                    className="text-xs font-bold text-[#1F7A6E] hover:underline flex items-center gap-0.5"
                  >
                    <span>M-13</span>
                    <span className="material-symbols-outlined text-[13px]">arrow_back</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Metric 5: Trial Status & Tier Upgrade */}
            <div className="bg-gradient-to-br from-[#12302B] to-[#1F7A6E] rounded-2xl p-5 text-white shadow-sm relative flex flex-col justify-between">
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-bold text-[#E9B44C]">باقة المتجر والتجربة</span>
                <span className="material-symbols-outlined text-[#E9B44C] text-lg icon-fill">star</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-1">باقي 12 يوماً تجربة مجانية</div>
                <p className="text-[11px] text-white/80 leading-relaxed mb-3">
                  0% عمولة منصة حالياً. رقّ لباقة التاجر المميز (79 ₪/شهرياً) واستمتع بظهور في صدارة البحث.
                </p>
                <button
                  onClick={() => navigate('/merchant/subscription')}
                  type="button"
                  className="w-full py-1.5 px-3 rounded-xl bg-[#E9B44C] text-[#12302B] font-black text-xs hover:bg-[#feb64e] transition-colors flex items-center justify-center gap-1 shadow-sm active:scale-95 cursor-pointer"
                >
                  <span>ترقية المتجر الآن</span>
                  <span className="material-symbols-outlined text-xs">upgrade</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Column Section: Quick Access Shortcuts & Onboarding Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Right: Quick Access Shortcuts (8 cols) */}
          <section className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#12302B]">الاختصارات السريعة والإدارة</h2>
              <span className="text-xs text-[#4A5B57]">إدارة التشكيلات والعروض الموسمية</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Shortcut 1: Inventory & Catalog */}
              <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F6F3EC] text-[#12302B] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-2xl">checkroom</span>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-bold text-[#12302B]">المنتجات والأصناف</h3>
                    <span className="text-xs font-bold text-[#1F7A6E] bg-emerald-50 px-2 py-0.5 rounded-full">
                      28 نشط
                    </span>
                  </div>
                  <p className="text-xs text-[#4A5B57] mb-3">تشكيلة أزياء وأحذية ربيع 2026 في بوتيك لمسة.</p>
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/60 mb-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-900">
                      <span className="material-symbols-outlined text-sm text-amber-700">warning</span>
                      <span>حذاء جلد كلاسيكي (مقاس 38) أوشك على النفاد!</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => navigate('/merchant/products/add')}
                    type="button"
                    className="w-full py-2 px-3 rounded-xl bg-[#12302B] text-white text-xs font-bold hover:bg-[#1F7A6E] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                    <span>إضافة منتج جديد</span>
                  </button>
                  <button
                    onClick={() => navigate('/merchant/products')}
                    type="button"
                    className="w-full py-1.5 px-3 rounded-xl border border-[#E1DACB] text-[#4A5B57] text-xs font-semibold hover:text-[#12302B] hover:bg-[#F6F3EC] transition-colors cursor-pointer"
                  >
                    تعديل المقاسات والمخزون
                  </button>
                </div>
              </div>

              {/* Shortcut 2: Rewards & Double Points Campaign */}
              <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E9B44C]/20 text-[#835400] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-2xl icon-fill">loyalty</span>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-bold text-[#12302B]">العروض والمكافآت</h3>
                    <span className="text-xs font-bold text-[#835400] bg-amber-50 px-2 py-0.5 rounded-full">
                      حملة نشطة
                    </span>
                  </div>
                  <p className="text-xs text-[#4A5B57] mb-3">مضاعفة ولاء زبائن غزة ببرنامج النقاط التبادلي.</p>
                  <div className="p-2.5 rounded-xl bg-[#F6F3EC] border border-[#E1DACB] mb-4">
                    <div className="text-[11px] font-bold text-[#12302B] flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#1F7A6E]">redeem</span>
                      <span>كاش باك 10% نقاط (موسم الأعياد)</span>
                    </div>
                    <div className="text-[10px] text-[#4A5B57] mt-1">تشارك المنصة بنصف قيمة النقاط الموزعة.</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => navigate('/merchant/offers/create')}
                    type="button"
                    className="w-full py-2 px-3 rounded-xl bg-[#E9B44C] text-[#12302B] text-xs font-bold hover:bg-[#feb64e] transition-colors flex items-center justify-center gap-1 shadow-sm cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">percent</span>
                    <span>إنشاء كود خصم خاص</span>
                  </button>
                  <button
                    onClick={() => navigate('/merchant/offers')}
                    type="button"
                    className="w-full py-1.5 px-3 rounded-xl border border-[#E1DACB] text-[#4A5B57] text-xs font-semibold hover:text-[#12302B] hover:bg-[#F6F3EC] transition-colors cursor-pointer"
                  >
                    إدارة قواعد كسب النقاط
                  </button>
                </div>
              </div>

              {/* Shortcut 3: Financial Transparency & Settlements */}
              <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1F7A6E]/15 text-[#1F7A6E] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-2xl">receipt_long</span>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-bold text-[#12302B]">التقارير المالية</h3>
                    <span className="text-xs font-bold text-[#12302B] bg-[#F6F3EC] px-2 py-0.5 rounded-full">
                      أسبوعي
                    </span>
                  </div>
                  <p className="text-xs text-[#4A5B57] mb-3">شفافية الحوالات وتسويات نقاط الزبائن المستبدلة.</p>
                  <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-[#1F7A6E]/20 mb-4">
                    <div className="flex justify-between items-center text-[11px] mb-1">
                      <span className="text-[#4A5B57]">آخر حوالة مستلمة:</span>
                      <span className="font-bold text-[#12302B]">2,180 ₪</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-[#1F7A6E]">
                      <span>مطابقة النقاط:</span>
                      <span className="font-semibold">+310 ₪ تم تعويضها</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => triggerToast('جاري تجهيز كشف حساب الشفافية بصيغة PDF...')}
                    type="button"
                    className="w-full py-2 px-3 rounded-xl bg-[#12302B] text-white text-xs font-bold hover:bg-[#1F7A6E] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">download</span>
                    <span>كشف حساب الشفافية (PDF)</span>
                  </button>
                  <button
                    onClick={() => navigate('/merchant/wallet')}
                    type="button"
                    className="w-full py-1.5 px-3 rounded-xl border border-[#E1DACB] text-[#4A5B57] text-xs font-semibold hover:text-[#12302B] hover:bg-[#F6F3EC] transition-colors cursor-pointer"
                  >
                    سجل الحوالات الأسبوعية
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Order Stream Teaser (Bento Strip) */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A6E]">local_mall</span>
                  <h3 className="text-base font-bold text-[#12302B]">أحدث طلبات الزبائن عبر المنصة</h3>
                </div>
                <Link
                  to="/merchant/orders"
                  className="text-xs font-bold text-[#1F7A6E] hover:underline flex items-center gap-1"
                >
                  <span>عرض كل الطلبات</span>
                  <span className="material-symbols-outlined text-xs">arrow_back</span>
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="text-[#4A5B57] border-b border-[#E1DACB]/60">
                      <th className="py-2.5 font-bold">رقم الطلب</th>
                      <th className="py-2.5 font-bold">المنتج والتفاصيل</th>
                      <th className="py-2.5 font-bold">الزبونة والمنطقة</th>
                      <th className="py-2.5 font-bold">القيمة ونقاط المكافأة</th>
                      <th className="py-2.5 font-bold">الحالة</th>
                      <th className="py-2.5 font-bold text-center">الإجراء</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E1DACB]/40">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-[#F6F3EC]/50 transition-colors">
                        <td className="py-3 font-bold text-[#12302B]">{order.id}</td>
                        <td className="py-3">
                          <div className="font-bold text-[#12302B]">{order.item}</div>
                          <div className="text-[10px] text-[#4A5B57]">{order.category}</div>
                        </td>
                        <td className="py-3">
                          <div>{order.customer}</div>
                          <div className="text-[10px] text-[#4A5B57]">{order.location}</div>
                        </td>
                        <td className="py-3">
                          <div className="font-bold text-[#12302B]">{order.price}</div>
                          <div className="text-[10px] text-[#1F7A6E] font-semibold">{order.points}</div>
                        </td>
                        <td className="py-3">
                          {order.status === 'pending' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 font-bold text-[10px] border border-amber-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                              {order.statusLabel}
                            </span>
                          ) : order.status === 'accepted' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-900 font-bold text-[10px] border border-emerald-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              {order.statusLabel}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-900 font-bold text-[10px] border border-blue-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              {order.statusLabel}
                            </span>
                          )}
                        </td>
                        <td className="py-3 text-center">
                          {order.status === 'pending' ? (
                            <button
                              onClick={() => handleAcceptOrder(order.id)}
                              type="button"
                              className="px-2.5 py-1 bg-[#12302B] text-white rounded-lg text-[11px] font-bold hover:bg-[#1F7A6E] transition-colors cursor-pointer"
                            >
                              قبول وتجهيز
                            </button>
                          ) : order.status === 'accepted' ? (
                            <span className="text-[11px] text-emerald-700 font-bold">جاهز للشحن</span>
                          ) : (
                            <button
                              onClick={() => setShowPinModal(true)}
                              type="button"
                              className="px-2.5 py-1 bg-[#E9B44C] text-[#12302B] rounded-lg text-[11px] font-black hover:bg-[#feb64e] transition-colors cursor-pointer"
                            >
                              رمز 4 أرقام
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Customer Reviews Bento Box */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#E9B44C]/20 text-[#835400] flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg icon-fill">reviews</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#12302B]">أحدث تقييمات وتجارب الزبائن</h3>
                    <p className="text-[11px] text-[#4A5B57]">تقييمات موثقة من زبائن استلموا طلباتهم بنجاح عبر منصة تبادل</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200/60 rounded-full text-xs font-bold">
                    <span className="material-symbols-outlined text-sm text-[#835400] icon-fill">star</span>
                    <span>4.8 / 5.0 (98% إيجابي)</span>
                  </span>
                  <Link
                    to="/merchant/reviews"
                    className="text-xs font-bold text-[#1F7A6E] hover:underline flex items-center gap-1"
                  >
                    <span>عرض كل التقييمات (M-13)</span>
                    <span className="material-symbols-outlined text-xs">arrow_back</span>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-3.5 rounded-xl bg-[#F6F3EC]/70 border border-[#E1DACB]/60 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#1F7A6E]/15 text-[#1F7A6E] flex items-center justify-center text-xs font-bold">
                            {rev.initials}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#12302B]">{rev.name}</div>
                            <div className="text-[10px] text-[#4A5B57]">{rev.location}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 text-[#E9B44C]">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`material-symbols-outlined text-sm icon-fill ${
                                i < rev.rating ? 'text-[#E9B44C]' : 'text-gray-300'
                              }`}
                            >
                              star
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-[#12302B] leading-relaxed mb-3">"{rev.content}"</p>

                      {rev.reply && (
                        <div className="p-2 mb-3 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900">
                          <span className="font-bold block">رد المتجر:</span>
                          {rev.reply}
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t border-[#E1DACB]/40 flex items-center justify-between">
                      <span className="text-[10px] text-[#4A5B57]">{rev.time}</span>
                      <button
                        onClick={() => handleOpenReplyModal(rev)}
                        type="button"
                        className="px-3 py-1 bg-white border border-[#12302B] text-[#12302B] hover:bg-[#12302B] hover:text-white rounded-lg text-[11px] font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-xs">reply</span>
                        <span>{rev.reply ? 'تعديل الرد' : 'رد المتجر على التقييم'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Left: Onboarding Checklist & Store Verification (4 cols) */}
          <aside className="lg:col-span-4 space-y-4">
            {/* Checklist Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A6E] icon-fill">task_alt</span>
                  <h3 className="text-base font-bold text-[#12302B]">حالة إعداد المتجر</h3>
                </div>
                <span className="text-xs font-bold text-[#1F7A6E] bg-emerald-50 px-2 py-0.5 rounded-full">
                  100% مكتمل
                </span>
              </div>
              <p className="text-xs text-[#4A5B57] leading-relaxed mb-4">
                أكملت جميع المتطلبات التنظيمية للظهور المباشر أمام متسوقي الأزياء في قطاع غزة:
              </p>

              <div className="space-y-3">
                {/* Step 1 */}
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-[#F6F3EC]/70 border border-[#E1DACB]/40">
                  <span className="material-symbols-outlined text-emerald-600 text-lg icon-fill">check_circle</span>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[#12302B]">1. أضف منتجك الأول</div>
                    <div className="text-[10px] text-[#4A5B57]">تم رفع 28 صنف أزياء وأحذية بنجاح</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-[#F6F3EC]/70 border border-[#E1DACB]/40">
                  <span className="material-symbols-outlined text-emerald-600 text-lg icon-fill">check_circle</span>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[#12302B]">2. حدد رسوم ومناطق التوصيل</div>
                    <div className="text-[10px] text-[#4A5B57]">تم ضبط مناطق غزة والوسطى وخانيونس</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-[#F6F3EC]/70 border border-[#E1DACB]/40">
                  <span className="material-symbols-outlined text-emerald-600 text-lg icon-fill">check_circle</span>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[#12302B]">3. اربط حساب ومحفظة الاستلام</div>
                    <div className="text-[10px] text-[#4A5B57]">محفظة جوال باي نشطة برقم البوتيك</div>
                  </div>
                </div>

                {/* Step 4: Physical QR Code Stand */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#12302B]/5 to-[#1F7A6E]/10 border border-[#1F7A6E]/30">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-xl">qr_code_scanner</span>
                    <div>
                      <div className="text-xs font-bold text-[#12302B]">4. ملصق رمز QR الخاص بالمتجر</div>
                      <div className="text-[11px] text-[#4A5B57]">لمسح النقاط المباشر لزبائن المحل الفعلي</div>
                    </div>
                  </div>
                  <button
                    onClick={() => triggerToast('جاري تنزيل ملف ملصق QR الخاص بمتجرك (PDF) للطباعة والتوزيع.')}
                    type="button"
                    className="w-full mt-2 py-2 px-3 bg-white border border-[#12302B] text-[#12302B] hover:bg-[#12302B] hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">file_download</span>
                    <span>جاهز للتحميل والتوزيع (PDF)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Emergency & Ground Logistics Support Widget (Gaza Specific) */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">support_agent</span>
                </div>
                <h4 className="text-xs font-bold text-[#12302B]">دعم الطوارئ اللوجستي في غزة</h4>
              </div>
              <p className="text-[11px] text-[#4A5B57] leading-relaxed mb-3">
                في حال تأخر مناديب الاستلام أو انقطاع شبكة الاتصال أثناء تسليم الطلبيات، فريقنا الميداني متاح مباشرة عبر واتساب للمساعدة الفورية.
              </p>
              <a
                className="w-full py-2 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                href="https://wa.me/970599000000"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>تواصل مع الدعم الميداني عبر واتساب</span>
              </a>
            </div>
          </aside>
        </div>
      </main>

      {/* 4-Digit Handover PIN Verification Modal */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">pin</span>
                <h3 className="font-bold text-[#12302B] text-base">تحرير الأرباح بكود الاستلام (PIN)</h3>
              </div>
              <button
                onClick={() => setShowPinModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
              أدخل الرمز السري المكون من 4 أرقام الموجود لدى الزبونة عند استلام طرد الأزياء أو الأحذية لتحرير المبلغ فوراً ونقله إلى محفظتك.
            </p>

            {pinVerified ? (
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center gap-2 text-emerald-800 text-xs font-bold">
                <span className="material-symbols-outlined text-lg">check_circle</span>
                تم التحقق بنجاح! جاري تحرير مبلغ 490 ₪...
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-center gap-2 dir-ltr py-2">
                  {[0, 1, 2, 3].map((idx) => (
                    <input
                      key={idx}
                      id={`modal-pin-${idx}`}
                      className="w-12 h-14 text-center text-2xl font-mono font-bold rounded-xl border border-gray-300 focus:border-[#1F7A6E]"
                      maxLength="1"
                      placeholder="•"
                      type="text"
                      value={pinInputs[idx]}
                      onChange={(e) => handlePinChange(idx, e.target.value)}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    onClick={() => setShowPinModal(false)}
                    type="button"
                    className="px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50"
                  >
                    إلغاء
                  </button>
                  <button
                    onClick={handleConfirmPin}
                    type="button"
                    className="px-6 py-2.5 rounded-xl bg-[#E9B44C] hover:bg-[#feb64e] text-[#12302B] text-xs font-black shadow-sm"
                  >
                    تأكيد وتحرير المبلغ
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Review Reply Modal */}
      {replyModalOpen && activeReviewForReply && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1F7A6E]">reply</span>
                <h3 className="font-bold text-[#12302B] text-base">
                  الرد على تقييم {activeReviewForReply.name}
                </h3>
              </div>
              <button
                onClick={() => setReplyModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500"
              >
                ✕
              </button>
            </div>

            <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700">
              <span className="font-bold text-[#12302B] block mb-1">نص التقييم:</span>
              "{activeReviewForReply.content}"
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#12302B]">
                اكتب رد المتجر الرسمي (يظهر للزبائن والزوار):
              </label>
              <textarea
                className="w-full p-3 rounded-xl border border-gray-300 text-xs leading-relaxed focus:border-[#1F7A6E]"
                rows="4"
                placeholder="أهلاً بكِ، نسعد دائماً بخدمتك ونتمنى لكِ دوام الأناقة والتألق مع بوتيك لمسة..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setReplyModalOpen(false)}
                type="button"
                className="px-4 py-2 rounded-xl border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-50"
              >
                إلغاء
              </button>
              <button
                onClick={handleSaveReply}
                type="button"
                className="px-5 py-2 rounded-xl bg-[#12302B] text-white text-xs font-bold hover:bg-[#1F7A6E] transition-colors"
              >
                نشر الرد الآن
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer (JSON Shared Component Integration) */}
      <footer className="bg-white mt-auto border-t border-[#E1DACB]/60 font-tajawal">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-6 max-w-7xl mx-auto gap-4">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-[#12302B]">تبادل للمتاجر</span>
            <span className="text-gray-500 text-xs">
              جميع الحقوق محفوظة © 2026 منصة تبادل للمكافآت والأزياء - غزة
            </span>
          </div>

          {/* Links Cluster */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-600">
            <Link to="/merchant/help" className="hover:text-[#12302B] transition-colors">
              مركز المساعدة والدعم الفني
            </Link>
            <Link to="/privacy" className="hover:text-[#12302B] transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="hover:text-[#12302B] transition-colors">
              شروط انضمام التجار
            </Link>
            <Link to="/contact" className="hover:text-[#12302B] transition-colors">
              اتصل بنا
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
