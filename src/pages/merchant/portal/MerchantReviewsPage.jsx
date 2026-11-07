import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../../components/common/Footer';

export default function MerchantReviewsPage() {
  const navigate = useNavigate();

  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'pending' | 'answered'
  const [starFilter, setStarFilter] = useState('all'); // 'all' | 5 | 4 | 3 | 2 | 1
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'highest' | 'lowest' | 'interactive'
  const [currentPage, setCurrentPage] = useState(1);

  // Modal State
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportingReviewId, setReportingReviewId] = useState(null);
  const [reportReason, setReportReason] = useState('inappropriate');
  const [reportNote, setReportNote] = useState('');
  const [notification, setNotification] = useState(null);

  // Pro reply tips expansion
  const [showTips, setShowTips] = useState(false);

  // Review Draft / Reply State
  const [replyInputs, setReplyInputs] = useState({
    2: 'شكراً لكِ ريم على ثقتك بمنتجاتنا! نعتذر عن تأخر المندوب بسبب ظروف حركة السير، ونعدك بتجربة توصيل أسرع في المرة القادمة ✨',
  });

  // Edit response state for answered reviews
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [editedReplyText, setEditedReplyText] = useState('');

  // Initial Reviews Data matching design exactly
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: 'سارة أحمد',
      initials: 'س أ',
      rating: 5.0,
      verified: true,
      timeAgo: 'قبل 3 أيام',
      itemTitle: 'فستان سهرة مخملي ملكي',
      itemVariant: 'مقاس L، كحلي داكن',
      orderCode: '#TBL-8921',
      reviewText: 'الفستان تحفة فنية والمقاس زابط بالملي والخامة ممتازة جداً والتوصيل وصل بنفس اليوم، وفوق هيك رجعلي 24 ₪ كاش باك نقاط بمحفظتي واستفدت منهم في طلبيتي التالية!',
      pointsEarned: 48,
      location: 'تسليم الرمال، غزة',
      status: 'answered',
      storeReply: {
        text: 'أهلاً بكِ سارة! يسعدنا جداً أن الفستان نال إعجابك، ونتشرف دائماً بخدمتك في بوتيك لمسة عبر منصة تبادل ✨ دائماً في خدمتك في كل مناسباتك السعيدة.',
        timeAgo: 'قبل يومين',
      },
    },
    {
      id: 2,
      author: 'ريم محمد',
      initials: 'ر م',
      rating: 4.0,
      verified: true,
      timeAgo: 'قبل 5 أيام',
      itemTitle: 'سنيكرز كاجوال طبي مريح',
      itemVariant: 'مقاس 39، أبيض عاجي',
      orderCode: '#TBL-8840',
      reviewText: 'الحذاء خفيف ومريح بالمشي جداً، بس مندوب التوصيل اتأخر ساعتين عن الموعد المتفق عليه. بس البضاعة ممتازة!',
      pointsEarned: null,
      location: 'تسليم تل الهوا، غزة',
      status: 'pending',
      storeReply: null,
    },
    {
      id: 3,
      author: 'منى خليل',
      initials: 'م خ',
      rating: 1.0,
      verified: true,
      timeAgo: 'قبل أسبوع',
      itemTitle: 'عباءة حريرية مطرزة يدوياً',
      itemVariant: 'مقاس 58',
      orderCode: '#TBL-8710',
      reviewText: 'اللون طلع مختلف عن الصورة بالإنستغرام، وطلبت تبديل المقاس عبر التطبيق.',
      disputeResolved: true,
      pointsEarned: null,
      location: 'غزة',
      status: 'answered',
      storeReply: {
        text: 'نعتذر منكِ منى، تم إرسال المندوب وتبديل القطعة باللون المطلوب خلال 24 ساعة دون أي تكلفة إضافية، ورضاكِ أولويتنا دائماً.',
        timeAgo: 'قبل 6 أيام',
        customerConfirmed: true,
      },
    },
  ]);

  const showToast = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const handlePublishReply = (reviewId) => {
    const text = replyInputs[reviewId] || '';
    if (!text.trim()) {
      alert('يرجى كتابة نص الرد قبل النشر.');
      return;
    }

    setReviews((prev) =>
      prev.map((rev) => {
        if (rev.id === reviewId) {
          return {
            ...rev,
            status: 'answered',
            storeReply: {
              text: text.trim(),
              timeAgo: 'الآن',
            },
          };
        }
        return rev;
      })
    );

    showToast('تم نشر الرد العلني بنجاح! سيظهر لجميع زبائن المتجر.');
  };

  const handleSaveDraft = (reviewId) => {
    showToast('تم حفظ نص الرد كمسودة داخل لوحة التحكم.');
  };

  const handleStartEditReply = (review) => {
    setEditingReplyId(review.id);
    setEditedReplyText(review.storeReply?.text || '');
  };

  const handleSaveEditedReply = (reviewId) => {
    if (!editedReplyText.trim()) return;
    setReviews((prev) =>
      prev.map((rev) => {
        if (rev.id === reviewId && rev.storeReply) {
          return {
            ...rev,
            storeReply: {
              ...rev.storeReply,
              text: editedReplyText.trim(),
              timeAgo: 'معدل الآن',
            },
          };
        }
        return rev;
      })
    );
    setEditingReplyId(null);
    showToast('تم تحديث الرد العلني بنجاح.');
  };

  const handleSubmitReport = (e) => {
    e.preventDefault();
    setShowReportModal(false);
    showToast('تم رفع البلاغ لإدارة منصة تبادل بنجاح. سيتم التحقق ومراجعة الطلب خلال 24 ساعة.');
    setReportNote('');
  };

  // Filtered Reviews
  const filteredReviews = useMemo(() => {
    return reviews.filter((rev) => {
      // Search
      const matchesSearch =
        rev.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rev.reviewText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rev.itemTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rev.orderCode.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      // Status
      if (statusFilter === 'pending' && rev.status !== 'pending') return false;
      if (statusFilter === 'answered' && rev.status !== 'answered') return false;

      // Stars
      if (starFilter !== 'all' && Math.floor(rev.rating) !== Number(starFilter)) return false;

      return true;
    });
  }, [reviews, searchQuery, statusFilter, starFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#191c22] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]" dir="rtl">
      
      {/* TopNavBar (Shared Component) */}
      <header className="bg-white border-b border-[#E1DACB] shadow-sm sticky top-0 z-50">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 flex justify-between items-center h-16">
          
          {/* Right: Brand Logo & Store Badge */}
          <div className="flex items-center gap-4">
            <Link to="/merchant/dashboard" className="flex items-center gap-2">
              <div className="h-9 sm:h-10 w-auto flex items-center justify-center">
                <img
                  alt="شعار منصة تبادل"
                  className="h-full w-auto object-contain rounded-lg shadow-sm"
                  src="/logo.png"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black text-[#12302B] tracking-tight leading-none">تبادل للمتاجر</span>
                <span className="text-[10px] text-[#526661] font-medium mt-0.5">لوحة تحكم التاجر</span>
              </div>
            </Link>

            <div className="h-6 w-px bg-[#E1DACB] hidden md:block" />

            {/* Merchant Store Profile Pill (M-04 style) */}
            <div className="hidden md:flex items-center gap-2 bg-[#F6F3EC] border border-[#E1DACB] px-3 py-1.5 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-[#1F7A6E] flex items-center justify-center text-white font-bold text-[11px]">
                LB
              </div>
              <span className="text-xs font-bold text-[#12302B]">بوتيك لمسة (LB)</span>
              <span className="inline-flex items-center gap-0.5 text-xs text-[#1F7A6E] font-medium bg-[#1F7A6E]/10 px-1.5 py-0.5 rounded-full">
                <span className="material-symbols-outlined icon-fill text-[14px]">verified</span>
                <span>معتمد</span>
              </span>
            </div>
          </div>

          {/* Center: Navigation Links with active التقييمات */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-bold">
            <Link to="/merchant/dashboard" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1">
              الرئيسية
            </Link>
            <Link to="/merchant/orders" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1 flex items-center gap-1">
              <span>الطلبات</span>
              <span className="w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center">3</span>
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
            {/* ACTIVE TAB */}
            <Link to="/merchant/reviews" className="text-[#12302B] border-b-2 border-[#12302B] pb-1 font-extrabold">
              التقييمات
            </Link>
            <Link to="/merchant/reports" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1">
              التقارير
            </Link>
            <Link to="/merchant/subscription" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-[#E9B44C] icon-fill">stars</span>
              <span>الباقة</span>
            </Link>
          </nav>

          {/* Left: Status & Actions */}
          <div className="flex items-center gap-3">
            {/* Connection Status indicator */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#526661] bg-[#F6F3EC] px-2.5 py-1.5 rounded-lg border border-[#E1DACB]">
              <span className="w-2 h-2 rounded-full bg-[#2E9E6B]" />
              <span className="material-symbols-outlined text-[16px]">wifi</span>
              <span className="font-semibold">متصل بالنظام</span>
            </div>

            {/* Notification Bell */}
            <button
              className="relative p-2 text-[#526661] hover:bg-[#F6F3EC] rounded-lg transition-colors cursor-pointer"
              title="التنبيهات"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full ring-2 ring-white" />
            </button>

            {/* Help Action */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-[#526661] hover:text-[#12302B] px-3 py-1.5 text-xs font-bold transition-colors rounded-lg hover:bg-[#F6F3EC]"
            >
              <span className="material-symbols-outlined text-[18px]">help</span>
              <span>المساعدة</span>
            </a>

            {/* Recharge Balance Action */}
            <button
              onClick={() => navigate('/merchant/wallet')}
              className="bg-[#12302B] hover:bg-[#1a403a] text-white px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-[#E9B44C]">account_balance_wallet</span>
              <span>شحن الرصيد</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Canvas */}
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-6 py-6 space-y-6">
        
        {/* Toast Notification */}
        {notification && (
          <div className="fixed bottom-6 left-6 z-50 bg-[#12302B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#E9B44C]/40 animate-fadeIn">
            <span className="material-symbols-outlined text-[#E9B44C] text-xl icon-fill">info</span>
            <span className="text-xs font-bold">{notification}</span>
          </div>
        )}

        {/* Breadcrumbs & Heading Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs text-[#526661] mb-1">
              <Link to="/merchant/dashboard" className="hover:text-[#12302B] transition-colors">
                لوحة التحكم
              </Link>
              <span className="material-symbols-outlined text-[14px]">chevron_left</span>
              <span className="text-[#12302B] font-semibold">التقييمات وآراء الزبائن</span>
            </div>

            {/* Page Title */}
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-xl sm:text-2xl font-black text-[#12302B] tracking-tight">
                إدارة تقييمات المتجر وتجارب الزبائن
              </h1>
              <div className="inline-flex items-center gap-1.5 bg-[#E9B44C]/15 border border-[#E9B44C]/40 text-[#8A6420] px-3 py-1 rounded-full text-xs font-bold">
                <span className="material-symbols-outlined text-[16px] text-[#E9B44C] icon-fill">star</span>
                <span>متوسط التقييم العام 4.8 من 5 (128 تقييماً موثقاً)</span>
              </div>
            </div>
          </div>

          {/* Quick Export / Support Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => showToast('جاري تصدير سجل تقييمات المتجر بصيغة Excel / PDF...')}
              className="bg-white border border-[#E1DACB] text-[#12302B] hover:bg-[#F6F3EC] px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>تصدير السجل الشهري</span>
            </button>
          </div>
        </div>

        {/* Trust & Ranking Strategic Banner */}
        <section className="bg-gradient-to-l from-[#12302B] to-[#1F7A6E] text-white rounded-2xl p-5 shadow-sm border border-[#12302B]/20 relative overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-44 h-44 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute top-2 left-1/4 w-28 h-28 rounded-full bg-[#E9B44C]/10 pointer-events-none blur-xl" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
            <div className="flex items-start gap-3.5 max-w-4xl">
              <div className="w-11 h-11 rounded-xl bg-[#E9B44C]/20 border border-[#E9B44C]/40 flex items-center justify-center shrink-0 text-[#E9B44C]">
                <span className="material-symbols-outlined text-[24px] icon-fill">hotel_class</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-base font-bold text-white">تأثير التقييم على الظهور ومبيعات المتجر</h2>
                  <span className="text-xs bg-[#E9B44C] text-[#12302B] font-bold px-2 py-0.5 rounded-full">
                    معيار تبادل الذكي
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  ترتيب متجرك في <span className="text-[#E9B44C] font-semibold">دليل متاجر تبادل للأزياء</span> يعتمد بنسبة{' '}
                  <strong className="text-white underline decoration-[#E9B44C]">40% على تقييمات المتسوقات وسرعة التوصيل</strong>. التقييم العالي يمنحك أولوية الظهور في الصفحة الأولى للمتسوقين في محافظات غزة ومضاعفة رصيد نقاط الولاء الممنوحة.
                </p>
              </div>
            </div>

            <div className="shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 rounded-xl text-center self-stretch md:self-auto flex md:flex-col justify-between items-center">
              <span className="text-xs text-white/80 font-medium">مستوى متجرك الحالي</span>
              <span className="text-sm font-bold text-[#E9B44C] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                المستوى الذهبي المتقدم
              </span>
            </div>
          </div>
        </section>

        {/* Top Overview Cards (Bento Metric Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Card 1: Overall Satisfaction Score (Span 5 cols) */}
          <div className="md:col-span-5 bg-white border border-[#E1DACB] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#E1DACB]/60 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#E9B44C]/15 text-[#8A6420] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px] icon-fill">star_rate</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#12302B]">معدل الرضا العام</h3>
              </div>
              <span className="text-xs text-[#526661]">محدث لحظياً</span>
            </div>

            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Big Score */}
              <div className="col-span-5 text-center border-l border-[#E1DACB]/60 pl-2">
                <span className="text-4xl text-[#12302B] leading-none block font-black">4.8</span>
                <div className="flex justify-center text-[#E9B44C] my-1">
                  <span className="material-symbols-outlined text-[18px] icon-fill">star</span>
                  <span className="material-symbols-outlined text-[18px] icon-fill">star</span>
                  <span className="material-symbols-outlined text-[18px] icon-fill">star</span>
                  <span className="material-symbols-outlined text-[18px] icon-fill">star</span>
                  <span className="material-symbols-outlined text-[18px]">star_half</span>
                </div>
                <span className="text-xs text-[#526661] block">من إجمالي 128 تقييم</span>
              </div>

              {/* Star Distribution Bars */}
              <div className="col-span-7 space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-10 text-[#526661] shrink-0">5 نجوم</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1F7A6E] rounded-full" style={{ width: '78%' }} />
                  </div>
                  <span className="w-8 text-left font-bold text-[#12302B]">78%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-10 text-[#526661] shrink-0">4 نجوم</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1F7A6E]/70 rounded-full" style={{ width: '16%' }} />
                  </div>
                  <span className="w-8 text-left font-medium text-[#526661]">16%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-10 text-[#526661] shrink-0">3 نجوم</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E9B44C] rounded-full" style={{ width: '4%' }} />
                  </div>
                  <span className="w-8 text-left font-medium text-[#526661]">4%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-10 text-[#526661] shrink-0">نجمتان</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E07B2F] rounded-full" style={{ width: '1%' }} />
                  </div>
                  <span className="w-8 text-left font-medium text-[#526661]">1%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-10 text-[#526661] shrink-0">نجمة</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 rounded-full" style={{ width: '1%' }} />
                  </div>
                  <span className="w-8 text-left font-medium text-[#526661]">1%</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E1DACB]/60 flex items-center justify-between text-xs text-[#526661]">
              <span>98% من التقييمات إيجابية جداً (4-5 نجوم)</span>
              <span className="text-[#2E9E6B] font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                +0.3 هذا الشهر
              </span>
            </div>
          </div>

          {/* Card 2: Merchant Response Velocity (Span 3 cols) */}
          <div className="md:col-span-3 bg-white border border-[#E1DACB] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#E1DACB]/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1F7A6E]/15 text-[#1F7A6E] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">quickreply</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#12302B]">سرعة الرد</h3>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-4xl text-[#12302B] font-black leading-none block">94%</span>
                  <p className="text-xs text-[#526661] mt-1 font-medium">معدل رد المتجر العلني</p>
                </div>
                <div className="p-3 bg-[#F6F3EC] rounded-xl border border-[#E1DACB]">
                  <div className="flex items-center gap-1.5 text-xs text-[#12302B] font-bold mb-1">
                    <span className="material-symbols-outlined text-[16px] text-[#1F7A6E]">schedule</span>
                    <span>متوسط التفاعل: أقل من 12 ساعة</span>
                  </div>
                  <p className="text-[11px] text-[#526661] leading-relaxed">
                    متجرك يلتزم بمعيار الاستجابة السريعة، مما يعزز ثقة المتسوقين الجدد قبل تأكيد السلة.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E1DACB]/60 flex items-center gap-1.5 text-xs text-[#2E9E6B] font-bold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>شارة إشادة بالالتزام مستحقة</span>
            </div>
          </div>

          {/* Card 3: Repeat Purchase Loyalty Index (Span 4 cols) */}
          <div className="md:col-span-4 bg-white border border-[#E1DACB] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#E1DACB]/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#12302B]/10 text-[#12302B] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">repeat</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#12302B]">تكرار الشراء والولاء</h3>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-4xl text-[#12302B] font-black leading-none block">68%</span>
                  <p className="text-xs text-[#526661] mt-1 font-medium">مؤشر عودة الزبائن المقيمين</p>
                </div>
                <div className="p-3 bg-[#F6F3EC] rounded-xl border border-[#E1DACB]">
                  <div className="flex items-center gap-1.5 text-xs text-[#8A6420] font-bold mb-1">
                    <span className="material-symbols-outlined text-[16px] text-[#E9B44C] icon-fill">toll</span>
                    <span>كاش باك نقاط تبادل الفعال</span>
                  </div>
                  <p className="text-[11px] text-[#526661] leading-relaxed">
                    68% من الزبائن المقيمين عادوا للشراء مجدداً خلال 30 يوماً بفضل مكافأة تقييم الطلب بالنقاط.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E1DACB]/60 flex items-center justify-between text-xs text-[#526661]">
              <span>القيمة الشرائية المتكررة:</span>
              <span className="font-bold text-[#12302B]">14,280 ₪ هذا الربع</span>
            </div>
          </div>

        </div>

        {/* Filters & Search Toolbar */}
        <div className="bg-white border border-[#E1DACB] rounded-2xl p-4 shadow-sm space-y-3">
          {/* Top Row: Search & Status Filters */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pr-10 pl-4 rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/50 text-xs sm:text-sm focus:border-[#12302B] focus:bg-white focus:ring-2 focus:ring-[#12302B]/10 outline-none transition-all placeholder:text-gray-400 font-tajawal text-[#12302B]"
                placeholder="ابحث في كلمات التعليقات، اسم الزبونة، أو رمز القطعة..."
                type="text"
              />
              <span className="material-symbols-outlined absolute right-3 top-3 text-[20px] text-gray-400 pointer-events-none">
                search
              </span>
            </div>

            {/* Response Status Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              <span className="text-xs text-[#526661] ml-1 shrink-0 font-medium">حالة الرد:</span>
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 cursor-pointer ${
                  statusFilter === 'all'
                    ? 'bg-[#12302B] text-white'
                    : 'bg-[#F6F3EC] border border-[#E1DACB] text-[#526661] hover:bg-gray-100'
                }`}
              >
                كل التقييمات
              </button>
              
              <button
                onClick={() => setStatusFilter('pending')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 flex items-center gap-1 cursor-pointer ${
                  statusFilter === 'pending'
                    ? 'bg-[#E9B44C] text-[#12302B]'
                    : 'bg-[#F6F3EC] border border-[#E1DACB] text-[#8A6420] hover:bg-[#E9B44C]/15'
                }`}
              >
                <span>بانتظار رد المتجر</span>
                <span className="w-4 h-4 rounded-full bg-[#E9B44C] text-[#12302B] text-[10px] font-bold inline-flex items-center justify-center">
                  4
                </span>
              </button>

              <button
                onClick={() => setStatusFilter('answered')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 cursor-pointer ${
                  statusFilter === 'answered'
                    ? 'bg-[#12302B] text-white'
                    : 'bg-[#F6F3EC] border border-[#E1DACB] text-[#526661] hover:bg-gray-100'
                }`}
              >
                تم الرد عليها (124)
              </button>
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-[#526661] font-medium">فرز حسب:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-10 px-3 pr-8 rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/60 text-xs font-bold text-[#12302B] focus:border-[#12302B] outline-none font-tajawal cursor-pointer"
              >
                <option value="newest">الأحدث تاريخاً</option>
                <option value="highest">الأعلى تقييماً (5 نجوم)</option>
                <option value="lowest">الأقل تقييماً (تحتاج متابعة)</option>
                <option value="interactive">الأكثر تفاعلاً</option>
              </select>
            </div>
          </div>

          {/* Bottom Row: Star Level Rating Filter Chips */}
          <div className="flex items-center gap-2 pt-2 border-t border-[#E1DACB]/60 overflow-x-auto">
            <span className="text-xs text-[#526661] shrink-0 font-medium">تصفية بالنجوم:</span>
            
            <button
              onClick={() => setStarFilter('all')}
              className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shrink-0 cursor-pointer ${
                starFilter === 'all'
                  ? 'bg-[#1F7A6E] text-white'
                  : 'bg-[#F6F3EC] border border-[#E1DACB] text-[#12302B] hover:border-[#1F7A6E]'
              }`}
            >
              <span>الكل (128)</span>
            </button>

            <button
              onClick={() => setStarFilter(5)}
              className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shrink-0 cursor-pointer ${
                starFilter === 5
                  ? 'bg-[#1F7A6E] text-white'
                  : 'bg-[#F6F3EC] border border-[#E1DACB] text-[#12302B] hover:border-[#1F7A6E]'
              }`}
            >
              <span className="material-symbols-outlined text-[14px] text-[#E9B44C] icon-fill">star</span>
              <span>5 نجوم (98)</span>
            </button>

            <button
              onClick={() => setStarFilter(4)}
              className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shrink-0 cursor-pointer ${
                starFilter === 4
                  ? 'bg-[#1F7A6E] text-white'
                  : 'bg-[#F6F3EC] border border-[#E1DACB] text-[#12302B] hover:border-[#1F7A6E]'
              }`}
            >
              <span className="material-symbols-outlined text-[14px] text-[#E9B44C] icon-fill">star</span>
              <span>4 نجوم (20)</span>
            </button>

            <button
              onClick={() => setStarFilter(3)}
              className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shrink-0 cursor-pointer ${
                starFilter === 3
                  ? 'bg-[#1F7A6E] text-white'
                  : 'bg-[#F6F3EC] border border-[#E1DACB] text-[#12302B] hover:border-[#1F7A6E]'
              }`}
            >
              <span className="material-symbols-outlined text-[14px] text-[#E9B44C] icon-fill">star</span>
              <span>3 نجوم (6)</span>
            </button>

            <button
              onClick={() => setStarFilter(2)}
              className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shrink-0 cursor-pointer ${
                starFilter === 2
                  ? 'bg-[#1F7A6E] text-white'
                  : 'bg-[#F6F3EC] border border-[#E1DACB] text-[#12302B] hover:border-[#1F7A6E]'
              }`}
            >
              <span className="material-symbols-outlined text-[14px] text-[#E9B44C] icon-fill">star</span>
              <span>نجمتان (2)</span>
            </button>

            <button
              onClick={() => setStarFilter(1)}
              className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shrink-0 cursor-pointer ${
                starFilter === 1
                  ? 'bg-red-600 text-white'
                  : 'bg-[#F6F3EC] border border-[#E1DACB] text-[#12302B] hover:border-red-600'
              }`}
            >
              <span className="material-symbols-outlined text-[14px] text-red-500 icon-fill">star</span>
              <span>نجمة واحدة (2)</span>
            </button>
          </div>
        </div>

        {/* Review Items Ledger List */}
        <div className="space-y-4">
          
          {filteredReviews.length === 0 ? (
            <div className="bg-white border border-[#E1DACB] rounded-2xl p-8 text-center space-y-2">
              <span className="material-symbols-outlined text-4xl text-gray-400">find_in_page</span>
              <h4 className="font-bold text-[#12302B]">لا توجد تقييمات مطابقة لبحثك</h4>
              <p className="text-xs text-[#526661]">جرّب تغيير كلمات البحث أو إزالة بعض خيارات التصفية.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setStatusFilter('all');
                  setStarFilter('all');
                }}
                className="mt-2 text-xs font-bold text-[#1F7A6E] underline"
              >
                إعادة ضبط الفلاتر
              </button>
            </div>
          ) : (
            filteredReviews.map((rev) => (
              <article
                key={rev.id}
                className={`bg-white border rounded-2xl p-5 shadow-sm transition-all hover:shadow-md relative ${
                  rev.status === 'pending'
                    ? 'border-2 border-[#E9B44C]/50'
                    : 'border-[#E1DACB]'
                }`}
              >
                {/* Pending indicator pill */}
                {rev.status === 'pending' && (
                  <div className="absolute -top-3 left-6 bg-[#E9B44C] text-[#12302B] text-xs font-bold px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">hourglass_top</span>
                    <span>بانتظار رد المتجر</span>
                  </div>
                )}

                {/* Header: Customer Info & Rating */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#E1DACB]/60 pb-3.5">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm shrink-0 border ${
                        rev.rating === 1
                          ? 'bg-red-50 text-red-700 border-red-200'
                          : rev.rating >= 4.5
                          ? 'bg-[#12302B]/10 text-[#12302B] border-[#12302B]/20'
                          : 'bg-[#1F7A6E]/10 text-[#1F7A6E] border-[#1F7A6E]/20'
                      }`}
                    >
                      {rev.initials}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-sm sm:text-base font-bold text-[#12302B]">{rev.author}</h4>
                        {rev.verified && (
                          <span className="inline-flex items-center gap-1 bg-[#2E9E6B]/12 text-[#2E9E6B] text-[11px] font-semibold px-2 py-0.5 rounded-full">
                            <span className="material-symbols-outlined text-[12px] icon-fill">verified_user</span>
                            <span>مشترية موثقة برمز تسليم</span>
                          </span>
                        )}
                        <span className="text-xs text-[#526661]">{rev.timeAgo}</span>
                      </div>

                      <p className="text-xs text-[#526661] mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-[#1F7A6E]">checkroom</span>
                        <span>
                          القطعة المشتراة: <strong>{rev.itemTitle}</strong> ({rev.itemVariant}) - كود الطلب {rev.orderCode}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Stars & Report Trigger */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <div
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-bold ${
                        rev.rating === 1
                          ? 'bg-red-50 border-red-200 text-red-600'
                          : 'bg-[#E9B44C]/10 border-[#E9B44C]/30 text-[#8A6420]'
                      }`}
                    >
                      <div className="flex text-[#E9B44C]">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`material-symbols-outlined text-[16px] ${
                              i < rev.rating ? (rev.rating === 1 ? 'text-red-500 icon-fill' : 'icon-fill') : 'text-gray-300'
                            }`}
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <span>{rev.rating.toFixed(1)}</span>
                    </div>

                    {/* Report Button */}
                    <button
                      onClick={() => {
                        setReportingReviewId(rev.id);
                        setShowReportModal(true);
                      }}
                      className={`text-xs flex items-center gap-1 transition-colors px-2 py-1 rounded cursor-pointer ${
                        rev.rating === 1
                          ? 'text-red-600 hover:bg-red-50 border border-red-200 font-semibold'
                          : 'text-[#526661] hover:text-red-600 hover:bg-[#F6F3EC]'
                      }`}
                      title="أبلغ عن تقييم"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {rev.rating === 1 ? 'report_problem' : 'flag'}
                      </span>
                      <span className="hidden sm:inline">
                        {rev.rating === 1 ? 'أبلغ عن إساءة لإدارة المنصة' : 'أبلغ عن تقييم'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Review Body */}
                <div className="py-3">
                  <p className="text-sm sm:text-base text-[#12302B] leading-relaxed">
                    "{rev.reviewText}"
                  </p>

                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {rev.pointsEarned && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#2E9E6B]/10 text-[#2E9E6B] px-2 py-0.5 rounded">
                        <span className="material-symbols-outlined text-[12px]">monetization_on</span>
                        كاش باك مكتسب: +{rev.pointsEarned} نقطة ولاء
                      </span>
                    )}

                    {rev.disputeResolved && (
                      <div className="inline-flex items-center gap-1.5 bg-[#8A6420]/10 border border-[#8A6420]/30 text-[#8A6420] px-3 py-1 rounded-lg text-xs font-bold">
                        <span className="material-symbols-outlined text-[16px] text-[#2E9E6B]">task_alt</span>
                        <span>تم حل الطلب واستبدال القطعة بنجاح عبر مندوب تبادل</span>
                      </div>
                    )}

                    <span className="text-xs text-[#526661]">{rev.location}</span>
                  </div>
                </div>

                {/* Published Store Response Box */}
                {rev.storeReply && (
                  <div className="mt-2 bg-[#F6F3EC] border border-[#E1DACB] rounded-xl p-3.5 relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-[#12302B] text-white flex items-center justify-center text-xs">
                          <span className="material-symbols-outlined text-[14px]">storefront</span>
                        </div>
                        <span className="text-xs font-bold text-[#12302B]">رد المتجر العلني المنشور:</span>
                        <span className="text-[11px] text-[#526661]">{rev.storeReply.timeAgo}</span>
                      </div>

                      {rev.storeReply.customerConfirmed ? (
                        <span className="text-xs text-[#2E9E6B] font-semibold flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[14px]">check</span>
                          تم التأكيد من الزبونة
                        </span>
                      ) : editingReplyId === rev.id ? (
                        <button
                          onClick={() => setEditingReplyId(null)}
                          className="text-xs text-gray-500 hover:underline"
                        >
                          إلغاء التعديل
                        </button>
                      ) : (
                        <button
                          onClick={() => handleStartEditReply(rev)}
                          className="text-xs text-[#1F7A6E] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[14px]">edit</span>
                          <span>تعديل الرد</span>
                        </button>
                      )}
                    </div>

                    {editingReplyId === rev.id ? (
                      <div className="space-y-2 mt-2">
                        <textarea
                          value={editedReplyText}
                          onChange={(e) => setEditedReplyText(e.target.value)}
                          className="w-full rounded-xl border border-[#E1DACB] bg-white p-3 text-xs sm:text-sm focus:border-[#1F7A6E] outline-none"
                          rows="3"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setEditingReplyId(null)}
                            className="px-3 py-1.5 rounded-lg border text-xs font-bold text-gray-600 bg-white"
                          >
                            إلغاء
                          </button>
                          <button
                            onClick={() => handleSaveEditedReply(rev.id)}
                            className="px-4 py-1.5 rounded-lg bg-[#1F7A6E] text-white text-xs font-bold"
                          >
                            حفظ التعديل
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs sm:text-sm text-[#12302B] leading-relaxed pr-8">
                        "{rev.storeReply.text}"
                      </p>
                    )}
                  </div>
                )}

                {/* Store Response Input Box (Quick Reply for Pending) */}
                {rev.status === 'pending' && (
                  <div className="mt-3 bg-[#F6F3EC] border border-[#E9B44C]/60 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-[#12302B] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px] text-[#1F7A6E]">rate_review</span>
                        <span>اكتب رداً علنياً لـ {rev.author} يشاهده كافة زبائن المتجر...</span>
                      </label>

                      {/* Guide tips button */}
                      <button
                        onClick={() => setShowTips(!showTips)}
                        className="text-xs text-[#8A6420] hover:text-[#12302B] flex items-center gap-1 bg-[#E9B44C]/20 px-2 py-1 rounded-md font-semibold cursor-pointer"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[14px]">tips_and_updates</span>
                        <span>نصائح للرد الاحترافي</span>
                      </button>
                    </div>

                    {showTips && (
                      <div className="mb-3 p-3 bg-white rounded-xl border border-[#E9B44C]/40 text-xs text-[#526661] space-y-1">
                        <p className="font-bold text-[#12302B]">💡 نصائح تبادل لصياغة رد يزيد المبيعات:</p>
                        <p>• اشكر الزبونة باسمها أولاً لتشعر بالتقدير الشخصي.</p>
                        <p>• اعترف بأي ملاحظة بلباقة واعرض حلاً سريعاً (مثل الاعتذار عن التأخير بسبب السير).</p>
                        <p>• تجنب الجدال في العلن واطلب التواصل عبر واتساب إذا كانت المشكلة خاصة.</p>
                      </div>
                    )}

                    <textarea
                      value={replyInputs[rev.id] || ''}
                      onChange={(e) =>
                        setReplyInputs((prev) => ({ ...prev, [rev.id]: e.target.value }))
                      }
                      className="w-full rounded-xl border border-[#E1DACB] bg-white p-3 text-xs sm:text-sm focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/10 outline-none placeholder:text-gray-400 transition-all font-tajawal text-[#12302B]"
                      placeholder="اكتب ردك الودود هنا..."
                      rows="3"
                    />

                    <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
                      <span className="text-[11px] text-[#526661]">
                        الردود الودية ترفع نسبة الشراء بنسبة 35% حسب دراسات منصة تبادل.
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleSaveDraft(rev.id)}
                          className="px-4 py-2 rounded-lg text-xs font-bold bg-white border border-[#E1DACB] text-[#526661] hover:bg-gray-100 transition-colors cursor-pointer"
                          type="button"
                        >
                          حفظ كمسودة
                        </button>

                        <button
                          onClick={() => handlePublishReply(rev.id)}
                          className="px-5 py-2 rounded-lg text-xs font-bold bg-[#E9B44C] hover:bg-[#d69e38] text-[#12302B] shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px] icon-fill">send</span>
                          <span>نشر الرد العلني</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))
          )}

        </div>

        {/* Clean Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E1DACB]">
          <div className="text-xs text-[#526661]">
            عرض {filteredReviews.length} من أصل 128 تقييماً موثقاً
          </div>

          <nav aria-label="ترقيم الصفحات" className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-lg border border-[#E1DACB] bg-white text-xs font-bold text-[#526661] hover:bg-[#F6F3EC] disabled:opacity-50 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span>السابق</span>
            </button>

            {[1, 2, 3].map((pg) => (
              <button
                key={pg}
                onClick={() => setCurrentPage(pg)}
                className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-colors cursor-pointer ${
                  currentPage === pg
                    ? 'bg-[#12302B] text-white'
                    : 'bg-white border border-[#E1DACB] text-[#526661] hover:bg-[#F6F3EC]'
                }`}
              >
                {pg}
              </button>
            ))}

            <span className="px-1 text-gray-400">...</span>

            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1.5 rounded-lg border border-[#E1DACB] bg-white text-xs font-bold text-[#526661] hover:bg-[#F6F3EC] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>التالي</span>
              <span className="material-symbols-outlined text-[16px]">chevron_left</span>
            </button>
          </nav>
        </div>

      </main>

      {/* Interactive Report Review Modal (نافذة الإبلاغ عن تقييم) */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E1DACB] rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#E1DACB] pb-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">flag</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#12302B]">طلب مراجعة تقييم غير نزيه</h3>
                  <p className="text-xs text-[#526661]">فريق التحكيم التجاري في منصة تبادل</p>
                </div>
              </div>
              <button
                className="p-1 rounded-lg text-gray-500 hover:bg-gray-100"
                onClick={() => setShowReportModal(false)}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Policy Clarification */}
            <div className="bg-[#F6F3EC] p-3 rounded-xl border border-[#E1DACB] text-xs text-[#12302B] leading-relaxed">
              <strong>سياسة الشفافية في تبادل:</strong> لا يتم حذف التقييمات السلبية تلقائياً. تقوم إدارة المنصة بالتحقق من بيانات الطلب ومحادثات التسليم خلال 24 ساعة، ويتم اتخاذ الإجراء في حال ثبوت المخالفة.
            </div>

            {/* Report Reasons Form */}
            <form className="space-y-3" onSubmit={handleSubmitReport}>
              <label className="block text-xs font-bold text-[#12302B]">حدد سبب الإبلاغ:</label>

              <div className="space-y-2 text-xs text-[#12302B]">
                <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                  reportReason === 'inappropriate' ? 'border-[#12302B] bg-[#F6F3EC]' : 'border-[#E1DACB]'
                }`}>
                  <input
                    type="radio"
                    name="report_reason"
                    checked={reportReason === 'inappropriate'}
                    onChange={() => setReportReason('inappropriate')}
                    className="text-[#12302B]"
                  />
                  <span><strong>ألفاظ مسيئة أو غير لائقة:</strong> التعليق يتضمن شتائم أو تجريح شخصي.</span>
                </label>

                <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                  reportReason === 'not_product' ? 'border-[#12302B] bg-[#F6F3EC]' : 'border-[#E1DACB]'
                }`}>
                  <input
                    type="radio"
                    name="report_reason"
                    checked={reportReason === 'not_product'}
                    onChange={() => setReportReason('not_product')}
                    className="text-[#12302B]"
                  />
                  <span><strong>تعليق لا يخص المنتج:</strong> يتحدث عن بائع آخر أو خدمة غير مرتبطة بهذا الطلب.</span>
                </label>

                <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                  reportReason === 'misleading' ? 'border-[#12302B] bg-[#F6F3EC]' : 'border-[#E1DACB]'
                }`}>
                  <input
                    type="radio"
                    name="report_reason"
                    checked={reportReason === 'misleading'}
                    onChange={() => setReportReason('misleading')}
                    className="text-[#12302B]"
                  />
                  <span><strong>معلومات مضللة أو مغلوطة:</strong> ادعاءات تخالف سجل الفاتورة وإيصال الاستلام الموقع.</span>
                </label>

                <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                  reportReason === 'blackmail' ? 'border-[#12302B] bg-[#F6F3EC]' : 'border-[#E1DACB]'
                }`}>
                  <input
                    type="radio"
                    name="report_reason"
                    checked={reportReason === 'blackmail'}
                    onChange={() => setReportReason('blackmail')}
                    className="text-[#12302B]"
                  />
                  <span><strong>ابتزاز تجاري:</strong> تهديد بتقييم سلبي للحصول على منتجات مجانية مخالفة للشروط.</span>
                </label>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#12302B]">
                  توضيح إضافي وملاحظات للجنة التحكيم:
                </label>
                <textarea
                  value={reportNote}
                  onChange={(e) => setReportNote(e.target.value)}
                  className="w-full text-xs rounded-xl border border-[#E1DACB] p-2.5 focus:border-[#12302B] outline-none font-tajawal text-[#12302B]"
                  placeholder="أرفق أي تفاصيل تدعم مراجعة هذا التقييم..."
                  rows="2"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#E1DACB]">
                <button
                  className="px-4 py-2 rounded-lg text-xs font-bold border border-[#E1DACB] text-gray-600 hover:bg-[#F6F3EC] transition-colors"
                  onClick={() => setShowReportModal(false)}
                  type="button"
                >
                  إلغاء
                </button>
                <button
                  className="px-5 py-2 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-700 text-white transition-all shadow-sm cursor-pointer"
                  type="submit"
                >
                  إرسال البلاغ للتحقق
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Official Footer (Shared Component) */}
      <footer className="w-full mt-auto bg-white border-t border-[#E1DACB]">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#526661]">
          {/* Copyright Text */}
          <div className="flex items-center gap-2 text-center md:text-right">
            <span className="material-symbols-outlined text-[18px] text-[#1F7A6E]">storefront</span>
            <span>© 2026 منصة تبادل لولاء المتاجر والأزياء - غزة. جميع الحقوق محفوظة.</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
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
            <a
              className="hover:text-[#12302B] transition-colors font-bold text-[#12302B]"
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              التواصل والدعم الفني
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
