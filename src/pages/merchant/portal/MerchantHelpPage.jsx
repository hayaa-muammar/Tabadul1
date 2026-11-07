import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function MerchantHelpPage() {
  const navigate = useNavigate();

  // Search & FAQ state
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0); // 0 open by default

  // New Ticket Modal State
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketCategory, setTicketCategory] = useState('');
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketOrderCode, setTicketOrderCode] = useState('');
  const [ticketPriority, setTicketPriority] = useState('normal');
  const [ticketDetails, setTicketDetails] = useState('');

  // Toast Notification
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Tickets List State
  const [tickets, setTickets] = useState([
    {
      id: '#TK-8942',
      title: 'تأكيد تحويل رصيد أرباح الأسبوع لمحفظة PalPay',
      subtitle: 'طلب سحب 3,420 ₪ رقم العملية #TRX-9901',
      category: 'المحفظة والتحويلات',
      categoryColor: 'bg-blue-50 text-blue-800',
      createdAt: 'اليوم، 10:15 ص',
      status: 'قيد المعالجة المالية',
      statusType: 'pending',
      lastUpdate: 'منذ 25 دقيقة (م. أحمد رضوان)',
    },
    {
      id: '#TK-8870',
      title: 'نزاع استبدال مقاس حذاء كلاسيكي كود #SH-421',
      subtitle: 'الزبونة طلبت استبدال مقاس 38 بـ 39 ونفذ المخزون',
      category: 'سياسة التبديل',
      categoryColor: 'bg-purple-50 text-purple-800',
      createdAt: 'أمس، 04:30 م',
      status: 'تم الحل ودياً',
      statusType: 'resolved',
      lastUpdate: 'أمس، 06:10 م (تم تعويض الزبونة بكوبون)',
    },
    {
      id: '#TK-8651',
      title: 'تحديث بيانات السجل التجاري ورقم ضريبة القيمة المضافة',
      subtitle: 'رفع مستندات الغرفة التجارية بغزة المحدثة',
      category: 'إعدادات الحساب',
      categoryColor: 'bg-gray-100 text-gray-800',
      createdAt: '12 يناير 2026',
      status: 'مغلقة وموثقة',
      statusType: 'closed',
      lastUpdate: '13 يناير 2026 (تمت المصادقة)',
    },
  ]);

  const faqs = [
    {
      id: '01',
      q: 'متى تتحرر أموال الطلب في محفظتي بالكامل؟',
      a: (
        <>
          <p className="leading-relaxed">
            تتحرر الأموال تلقائياً في رصيد محفظتك المتاح بمجرد استيفاء أحد الشرطين:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-on-surface">
            <li>
              مرور <strong>24 ساعة</strong> من تاريخ تأكيد تسليم القطعة بكود التسليم دون تقديم المشتري لأي طلب تبديل أو شكوى عيب مصنعي.
            </li>
            <li>أو قيام الزبون بالتقييم الإيجابي الفوري وتأكيد ملاءمة المقاس عبر تطبيقه.</li>
          </ul>
          <p className="mt-2 text-xs text-[#1F7A6E] font-medium">
            * بمجرد تحررها، يمكنك طلب تحويلها فوراً إلى حساب PalPay دون أي تأخير أو اقتطاع إضافي.
          </p>
        </>
      ),
    },
    {
      id: '02',
      q: 'كيف أتعامل إذا لم يملك الزبون كود التسليم المكون من 4 أرقام؟',
      a: (
        <>
          <p className="leading-relaxed">
            كود التسليم المكون من 4 أرقام هو الضمان المالي والقانوني الوحيد الذي يثبت تسليم البضاعة للمشتري الحقيقي. في حال قال الزبون إنه لم يصله:
          </p>
          <ol className="list-decimal list-inside mt-2 space-y-1 text-on-surface">
            <li>اطلب من الزبون فتح تطبيق "تبادل" والذهاب لصفحة <strong>"طلباتي النشطة"</strong> ليجد الكود بارزاً في أعلى تفاصيل الطلب.</li>
            <li>يمكنك الضغط على زر <strong>"إعادة إرسال كود الـ SMS"</strong> من لوحة تحكمك لإرساله مجدداً لرقم هاتفه المعتمد.</li>
            <li>في حال استمرار التعذر، تواصل مباشرة مع <strong>فريق الدعم الميداني عبر واتساب</strong> للتحقق اليدوي برقم الهوية دون تسليم القطعة بدونه لتفادي تعليق مستحقاتك.</li>
          </ol>
        </>
      ),
    },
    {
      id: '03',
      q: 'كيف يعمل نظام كاش باك 5% وما الذي أدفعه للمنصة بالضبط؟',
      a: (
        <>
          <p className="leading-relaxed">
            يقوم نظام الولاء على منح الزبون 5% رصيد ولاء مجزي يحفزه للعودة والشراء مجدداً:
          </p>
          <div className="p-3 rounded-lg bg-[#FBF5E8] border border-[#E9B44C]/30 my-2 text-xs text-[#12302B]">
            <strong>فترة البداية:</strong> تحظى كافة المتاجر المنضمة حديثاً بفترة تجربة مجانية مدتها <strong>14 يوماً</strong> كاملة (0% عمولة للمنصة، وتتحمل منصة تبادل نصف تكلفة كاش باك الولاء ترحيباً بك).
          </div>
          <p className="mt-1 leading-relaxed">
            بعد انقضاء الـ 14 يوماً التجريبية، تستقطع المنصة عمولة تشغيلية قدرها <strong>3% فقط</strong> عن العمليات الناجحة والمكتملة فقط، ولا توجد أي اشتراكات شهرية ثابتة أو رسوم خفية.
          </p>
        </>
      ),
    },
    {
      id: '04',
      q: 'ماذا يحدث لو طلب الزبون تبديل مقاس الفستان أو الحذاء؟',
      a: (
        <>
          <p className="leading-relaxed">
            يحق للزبون طلب تبديل المقاس لنفس الموديل خلال نافذة <strong>24 ساعة</strong> فقط، وتتم العملية وفق الخطوات التالية:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-on-surface">
            <li>يصلك إشعار فوري بحجز المقاس البديل المطلوب من مخزونك.</li>
            <li>يقوم مندوب الشحن الميداني باستلام القطعة القديمة وفحص سلامة التاغ والتغليف وعدم وجود أي آثار ارتداء.</li>
            <li>تسليم المقاس الجديد للزبون وإغلاق طلب التبديل دون أي خصومات أو غرامات على متجرك.</li>
            <li>في حال عدم توفر المقاس البديل في متجرك، يتم التنسيق ودياً مع الزبون أو إعادة قيمة القطعة مع تغطية مصاريف التوصيل عبر شبكة الدعم.</li>
          </ul>
        </>
      ),
    },
  ];

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqs;
    const q = searchQuery.toLowerCase();
    return faqs.filter(
      (f) =>
        f.q.toLowerCase().includes(q) ||
        (typeof f.a === 'string' && f.a.toLowerCase().includes(q))
    );
  }, [searchQuery, faqs]);

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    const newId = `#TK-${Math.floor(1000 + Math.random() * 9000)}`;
    const newTicket = {
      id: newId,
      title: ticketTitle,
      subtitle: ticketOrderCode ? `مرتبط بالطلب ${ticketOrderCode}` : 'طلب دعم من لوحة التاجر',
      category:
        ticketCategory === 'wallet'
          ? 'المحفظة والتحويلات'
          : ticketCategory === 'code'
          ? 'كود التسليم'
          : ticketCategory === 'exchange'
          ? 'سياسة التبديل'
          : 'دعم فني عام',
      categoryColor: 'bg-emerald-50 text-emerald-800',
      createdAt: 'الآن',
      status: 'قيد المعالجة الفورية',
      statusType: 'pending',
      lastUpdate: 'جاري التعيين لأقرب ممثل دعم بغزة',
    };

    setTickets([newTicket, ...tickets]);
    setShowTicketModal(false);
    setTicketTitle('');
    setTicketCategory('');
    setTicketOrderCode('');
    setTicketDetails('');

    showToast(`تم استلام تذكرتك بنجاح برقم ${newId}. تم إشعار فريق الدعم الفني في غزة وسيتم الرد خلال أقل من 15 دقيقة.`);
  };

  return (
    <div className="bg-[#F6F3EC] text-[#191c22] min-h-screen flex flex-col font-tajawal antialiased selection:bg-[#1F7A6E] selection:text-white" dir="rtl">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#12302B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#E9B44C]/40 animate-fadeIn">
          <span className="material-symbols-outlined text-[#E9B44C] text-xl icon-fill">info</span>
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* TopNavBar (Shared Component from JSON) */}
      <header className="bg-white border-b border-[#E1DACB] shadow-sm sticky top-0 z-50">
        <div className="w-full mx-auto px-4 md:px-6 flex justify-between items-center h-16 max-w-[1340px]">
          
          {/* Brand & Search cluster */}
          <div className="flex items-center gap-6">
            <Link to="/merchant/dashboard" className="flex items-center gap-2 group">
              <div className="h-10 sm:h-11 w-auto flex items-center justify-center">
                <img
                  alt="شعار منصة تبادل"
                  className="h-full w-auto object-contain rounded-lg shadow-sm transition-transform duration-200 group-hover:scale-95"
                  src="/logo.png"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-[#12302B]">تبادل للمتاجر</span>
                <span className="text-[11px] text-[#526661] -mt-1 font-medium">بوابة الشركاء المعتمدة • غزة</span>
              </div>
            </Link>

            {/* Quick search input */}
            <div className="hidden lg:flex items-center relative w-72">
              <span className="material-symbols-outlined absolute right-3 text-gray-400 text-lg pointer-events-none">search</span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-3 py-1.5 text-xs bg-[#F6F3EC]/70 border border-[#E1DACB] rounded-xl text-[#12302B] focus:outline-none focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all placeholder:text-gray-400"
                placeholder="ابحث في المشاكل، الطلبات أو المحفظة..."
                type="text"
              />
            </div>
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
            <Link to="/merchant/dashboard" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1">
              الرئيسية
            </Link>
            <Link to="/merchant/orders" className="text-[#526661] hover:text-[#12302B] transition-colors pb-1">
              الطلبات
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
            {/* Active link: المساعدة */}
            <Link to="/merchant/help" className="border-b-2 font-bold text-[#1F7A6E] border-[#1F7A6E] pb-1 flex items-center gap-1">
              <span>المساعدة</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F7A6E] inline-block" />
            </Link>
          </nav>

          {/* Trailing actions cluster */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-[#F6F3EC] px-2 py-1 rounded-xl border border-[#E1DACB]">
              <span className="p-1.5 text-emerald-600 rounded-lg flex items-center justify-center" title="الاتصال بالشبكة متصل ومستقر">
                <span className="material-symbols-outlined text-lg">wifi</span>
              </span>
              <span className="p-1.5 text-[#E9B44C] rounded-lg flex items-center justify-center" title="متجر موثق رسمياً">
                <span className="material-symbols-outlined icon-fill text-lg">verified</span>
              </span>
              <button className="p-1.5 text-[#526661] hover:text-[#12302B] relative rounded-lg flex items-center justify-center cursor-pointer" title="الإشعارات" type="button">
                <span className="material-symbols-outlined text-lg">notifications</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full ring-2 ring-white" />
              </button>
            </div>

            {/* Primary Action: شحن الرصيد */}
            <button
              onClick={() => navigate('/merchant/wallet')}
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#E9B44C] text-[#12302B] text-xs font-bold hover:bg-[#dfa637] transition-all active:scale-95 shadow-sm cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-base">account_balance_wallet</span>
              <span>شحن الرصيد</span>
            </button>

            {/* Profile snippet: بوتيك لمسة */}
            <Link to="/merchant/settings" className="flex items-center gap-2.5 pr-2 pl-1 py-1 rounded-xl bg-white border border-[#E1DACB] hover:border-[#1F7A6E] transition-colors">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#E1DACB] flex-shrink-0 bg-[#F6F3EC] flex items-center justify-center font-bold text-xs text-[#1F7A6E]">
                لمسة
              </div>
              <div className="hidden sm:flex flex-col text-right leading-none">
                <span className="text-xs font-bold text-[#12302B]">بوتيك لمسة للأزياء</span>
                <span className="text-[11px] text-[#1F7A6E] font-medium mt-0.5">شريك بريميوم (Pro)</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation Bar */}
      <nav className="bg-white/80 border-b border-[#E1DACB] backdrop-blur-sm py-2.5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 flex items-center justify-between text-xs">
          <ol className="flex items-center gap-2 text-[#526661]">
            <li className="flex items-center gap-1.5 hover:text-[#12302B] transition-colors">
              <span className="material-symbols-outlined text-base">home</span>
              <Link to="/merchant/dashboard">الرئيسية</Link>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-sm text-[#E1DACB]">chevron_left</span>
            </li>
            <li className="hover:text-[#12302B] transition-colors">
              <Link to="/merchant/dashboard">لوحة التحكم</Link>
            </li>
            <li className="flex items-center">
              <span className="material-symbols-outlined text-sm text-[#E1DACB]">chevron_left</span>
            </li>
            <li className="text-[#12302B] font-bold flex items-center gap-1 text-[#1F7A6E]">
              <span>مركز المساعدة والدعم الفني</span>
              <span className="px-2 py-0.5 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] text-[11px] font-bold mr-1.5">M-12</span>
            </li>
          </ol>

          <div className="hidden sm:flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              فريق دعم غزة اللوجستي متصل الآن
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="flex-grow max-w-[1280px] w-full mx-auto px-4 md:px-6 py-8 space-y-10">
        
        {/* 1. HERO HEADER SECTION */}
        <section className="relative rounded-2xl bg-white border border-[#E1DACB] p-6 md:p-12 overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBF5E8] border border-[#E9B44C]/30 text-[#12302B] text-xs font-bold">
              <span className="material-symbols-outlined icon-fill text-[#E9B44C] text-base">support_agent</span>
              <span>بوابة التاجر • حلول ميدانية وفنية فورية</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#12302B] font-black leading-tight">
              مركز مساعدة ودعم المتاجر الشريكة
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#526661] max-w-2xl leading-relaxed">
              نحن هنا لتمكين متجرك ودعمك في كل خطوة. ابحث عن إجابات فورية حول تأكيد الطلبات، سحب الأرباح عبر PalPay، تسويات الكاش باك، أو تواصل فوراً مع فريقنا الميداني في قطاع غزة.
            </p>

            {/* Smart Search Bar */}
            <div className="pt-3">
              <div className="relative max-w-2xl">
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#1F7A6E] text-2xl pointer-events-none">search</span>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-12 pl-32 py-3.5 rounded-xl bg-[#F6F3EC]/50 border-2 border-[#E1DACB] text-[#12302B] text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#1F7A6E] focus:bg-white focus:ring-4 focus:ring-[#1F7A6E]/15 transition-all shadow-sm font-tajawal"
                  placeholder="ابحث عن سؤال أو مشكلة: (مثال: كود التسليم 4 أرقام، سحب رصيدي عبر بال باي، إرجاع مقاس الحذاء...)"
                  type="text"
                />
                <button
                  onClick={() => {
                    const el = document.getElementById('faq-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 px-4 sm:px-5 py-2 rounded-lg bg-[#1F7A6E] text-white text-xs sm:text-sm hover:bg-[#12302B] transition-colors font-bold shadow-sm cursor-pointer"
                >
                  بحث سريع
                </button>
              </div>

              {/* Quick tag triggers */}
              <div className="flex flex-wrap items-center gap-2 mt-3.5 text-xs text-[#526661]">
                <span className="font-bold text-[#12302B]">شائع البحث:</span>
                {[
                  'كود التسليم 4 أرقام',
                  'سحب رصيد PalPay',
                  'كاش باك 5% والعمولة',
                  'مهلة تبديل 24 ساعة',
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-2.5 py-1 rounded-lg bg-white border border-[#E1DACB] hover:border-[#1F7A6E] text-[#12302B] hover:text-[#1F7A6E] transition-all text-xs cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -left-12 -bottom-12 opacity-5 pointer-events-none text-[#12302B] hidden md:block">
            <span className="material-symbols-outlined text-[320px]">handshake</span>
          </div>
        </section>

        {/* 2. QUICK DIRECT SUPPORT CHANNELS (3 CARDS) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#12302B]">قنوات الدعم المباشر السريعة</h2>
              <p className="text-xs text-[#526661]">اختر القناة الأنسب لموقفك التشغيلي والتجاري اليومي</p>
            </div>
            <span className="text-xs text-[#1F7A6E] font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              تغطية كاملة لكافة مناطق قطاع غزة
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Channel 1: WhatsApp Field Support (Gaza) */}
            <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-lg transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-emerald-600" />
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                  <span className="material-symbols-outlined icon-fill text-2xl">chat</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[#12302B]">الدعم الميداني عبر واتساب</h3>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">فوري</span>
                  </div>
                  <p className="text-xs text-[#526661] mt-2 leading-relaxed">
                    فريق ميداني مخصص في غزة متواجد على الأرض لمساعدتك في تسليم الطلبات، معالجة مشاكل التوصيل، والتأكد من استلام كود العميل مباشرة.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E1DACB]/60 text-xs text-[#526661] space-y-1">
                  <div className="flex items-center justify-between">
                    <span>متوسط الرد:</span>
                    <span className="text-emerald-700 font-bold">أقل من 5 دقائق</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>أوقات العمل:</span>
                    <span className="text-[#12302B]">8:00 ص - 10:00 م يومياً</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a
                  className="w-full py-3 px-4 rounded-xl bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-800 transition-colors shadow-sm cursor-pointer"
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-lg">forum</span>
                  <span>محادثة واتساب ميدانية</span>
                </a>
              </div>
            </div>

            {/* Channel 2: Open Ticket (Technical) */}
            <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 flex flex-col justify-between hover:border-[#1F7A6E] hover:shadow-lg transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-[#1F7A6E]" />
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#1F7A6E]">
                  <span className="material-symbols-outlined icon-fill text-2xl">confirmation_number</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[#12302B]">فتح تذكرة دعم فني جديدة</h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] text-[11px] font-bold">تتبع رسمي</span>
                  </div>
                  <p className="text-xs text-[#526661] mt-2 leading-relaxed">
                    ارفع طلباً رسمياً لمشاكل الحساب المالي، تعديل بيانات المحفظة، ربط المنظومة، أو النزاعات المالية المعقدة مع توثيق كامل للحلول.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E1DACB]/60 text-xs text-[#526661] space-y-1">
                  <div className="flex items-center justify-between">
                    <span>زمن الحل:</span>
                    <span className="text-[#1F7A6E] font-bold">أقل من ساعتين (لباقة Pro)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>تحديث الحالة:</span>
                    <span className="text-[#12302B]">إشعار SMS ولوحة التحكم</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  className="w-full py-3 px-4 rounded-xl bg-[#1F7A6E] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#12302B] transition-colors shadow-sm cursor-pointer"
                  onClick={() => navigate('/merchant/help/new-ticket')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-lg">add_task</span>
                  <span>إنشاء تذكرة دعم جديدة</span>
                </button>
              </div>
            </div>

            {/* Channel 3: Phone & Commercial Office */}
            <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 flex flex-col justify-between hover:border-[#E9B44C] hover:shadow-lg transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-[#E9B44C]" />
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#E9B44C]">
                  <span className="material-symbols-outlined icon-fill text-2xl">desk</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[#12302B]">المكتب التجاري والاتصال</h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#FBF5E8] text-[#12302B] text-[11px] font-bold">مكتب غزة</span>
                  </div>
                  <p className="text-xs text-[#526661] mt-2 leading-relaxed">
                    تفضل بزيارة مركز شركاء تبادل أو التواصل هاتفياً مع مدير حسابك المخصص لمناقشة العقود، نسب الكاش باك، وحملات العروض الكبرى.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E1DACB]/60 text-xs text-[#526661] space-y-1">
                  <div className="flex items-center justify-between">
                    <span>الهاتف المباشر:</span>
                    <span className="text-[#12302B] font-bold" dir="ltr">+970 (8) 282-4411</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>مواعيد الاستقبال:</span>
                    <span className="text-[#12302B]">السبت - الخميس: 9:00 ص - 4:00 م</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a
                  className="w-full py-3 px-4 rounded-xl bg-[#F6F3EC] border border-[#E1DACB] text-[#12302B] text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#E9B44C] hover:text-[#12302B] transition-colors cursor-pointer"
                  href="tel:+97082824411"
                >
                  <span className="material-symbols-outlined text-lg">call</span>
                  <span>اتصال بمدير الحسابات</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. KNOWLEDGE BASE CATEGORIES (5 Pillars Bento Grid) */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#12302B]">دليل المعرفة وتصنيفات المساعدة</h2>
              <p className="text-xs text-[#526661]">أدلة إرشادية مفصلة وخطوات مصورة لتشغيل متجرك بأعلى كفاءة</p>
            </div>
            <span className="text-xs text-[#526661]">إجمالي 48 مقال إرشادي</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Category 1: Delivery Code & Orders */}
            <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#12302B] text-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined icon-fill text-2xl">pin</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold">6 مقالات</span>
                </div>
                <h3 className="text-base font-bold text-[#12302B] group-hover:text-[#1F7A6E] transition-colors">
                  إدارة الطلبات وكود التسليم (4 أرقام)
                </h3>
                <p className="text-xs text-[#526661] leading-relaxed">
                  كيفية إدخال رمز الأمان المكون من 4 أرقام لتأكيد تسليم الملابس والأحذية للزبون، وحماية متجرك من أي نزاع تسليم غير مصدق.
                </p>
                <ul className="text-xs text-[#526661] space-y-1.5 pt-2">
                  <li className="flex items-center gap-2 hover:text-[#1F7A6E] cursor-pointer">
                    <span className="material-symbols-outlined text-xs text-[#1F7A6E]">arrow_left</span>
                    <span>خطوات إدخال الرمز من تطبيق التاجر</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-[#1F7A6E] cursor-pointer">
                    <span className="material-symbols-outlined text-xs text-[#1F7A6E]">arrow_left</span>
                    <span>ماذا تفعل في حال عدم وصول الكود لهاتف الزبون؟</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E1DACB]">
                <Link to="/merchant/orders" className="text-xs text-[#1F7A6E] font-bold flex items-center justify-between group-hover:translate-x-1 transition-transform">
                  <span>تصفح دليل الطلبات</span>
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                </Link>
              </div>
            </div>

            {/* Category 2: PalPay & Payouts */}
            <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#1F7A6E] text-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined icon-fill text-2xl">payments</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold">8 مقالات</span>
                </div>
                <h3 className="text-base font-bold text-[#12302B] group-hover:text-[#1F7A6E] transition-colors">
                  المحفظة وسحب الأرباح (PalPay)
                </h3>
                <p className="text-xs text-[#526661] leading-relaxed">
                  إجراءات تحويل المستحقات لمحفظة بال باي الإلكترونية أو الحساب البنكي المحلي في فلسطين، جداول التسوية، ورسوم السحب الصفرية.
                </p>
                <ul className="text-xs text-[#526661] space-y-1.5 pt-2">
                  <li className="flex items-center gap-2 hover:text-[#1F7A6E] cursor-pointer">
                    <span className="material-symbols-outlined text-xs text-[#1F7A6E]">arrow_left</span>
                    <span>ربط محفظة PalPay برقم الهوية التجارية</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-[#1F7A6E] cursor-pointer">
                    <span className="material-symbols-outlined text-xs text-[#1F7A6E]">arrow_left</span>
                    <span>مواعيد التسوية التلقائية كل يوم خميس</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E1DACB]">
                <Link to="/merchant/wallet" className="text-xs text-[#1F7A6E] font-bold flex items-center justify-between group-hover:translate-x-1 transition-transform">
                  <span>تصفح دليل المحفظة المالية</span>
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                </Link>
              </div>
            </div>

            {/* Category 3: Inventory & Sizing */}
            <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#E9B44C] text-[#12302B] flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined icon-fill text-2xl">checkroom</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 font-bold">11 مقال</span>
                </div>
                <h3 className="text-base font-bold text-[#12302B] group-hover:text-[#1F7A6E] transition-colors">
                  المنتجات والمقاسات والمخزون
                </h3>
                <p className="text-xs text-[#526661] leading-relaxed">
                  إدارة جداول المقاسات التركية والأوروبية للأزياء والأحذية، تحديث الألوان، وإعداد إشعارات نفاذ الكميات الحرجة قبل وقوع الإحراج.
                </p>
                <ul className="text-xs text-[#526661] space-y-1.5 pt-2">
                  <li className="flex items-center gap-2 hover:text-[#1F7A6E] cursor-pointer">
                    <span className="material-symbols-outlined text-xs text-[#1F7A6E]">arrow_left</span>
                    <span>إضافة المقاسات المركبة (EU 38 - 44 / S - XXL)</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-[#1F7A6E] cursor-pointer">
                    <span className="material-symbols-outlined text-xs text-[#1F7A6E]">arrow_left</span>
                    <span>إيقاف ظهور القطع النافذة مؤقتاً</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E1DACB]">
                <Link to="/merchant/products" className="text-xs text-[#1F7A6E] font-bold flex items-center justify-between group-hover:translate-x-1 transition-transform">
                  <span>تصفح دليل الكتالوج والمخزون</span>
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                </Link>
              </div>
            </div>

            {/* Category 4: Loyalty & 5% Cashback */}
            <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-purple-900 text-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined icon-fill text-2xl">loyalty</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 font-bold">7 مقالات</span>
                </div>
                <h3 className="text-base font-bold text-[#12302B] group-hover:text-[#1F7A6E] transition-colors">
                  برنامج الولاء وكاش باك 5%
                </h3>
                <p className="text-xs text-[#526661] leading-relaxed">
                  شرح معادلة توزيع نقاط المكافآت للزبائن عند كل شراء، مساهمة المنصة، وكيف يحفز هذا النظام الزبون لتكرار الطلب من متجرك تحديداً.
                </p>
                <ul className="text-xs text-[#526661] space-y-1.5 pt-2">
                  <li className="flex items-center gap-2 hover:text-[#1F7A6E] cursor-pointer">
                    <span className="material-symbols-outlined text-xs text-[#1F7A6E]">arrow_left</span>
                    <span>حساب نقاط المشتريات ورصيد الكاش باك الممنوح</span>
                  </li>
                  <li className="flex items-center gap-2 hover:text-[#1F7A6E] cursor-pointer">
                    <span className="material-symbols-outlined text-xs text-[#1F7A6E]">arrow_left</span>
                    <span>فترة التجربة المجانية (14 يوماً بدون عمولة منصة)</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E1DACB]">
                <Link to="/merchant/subscription" className="text-xs text-[#1F7A6E] font-bold flex items-center justify-between group-hover:translate-x-1 transition-transform">
                  <span>تصفح دليل الولاء والمكافآت</span>
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                </Link>
              </div>
            </div>

            {/* Category 5: Returns & Exchange (24h Window) */}
            <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 hover:shadow-md transition-all group flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#12302B] text-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined icon-fill text-2xl">sync_alt</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 font-bold">12 مقال ونموذج</span>
                </div>
                <h3 className="text-base font-bold text-[#12302B] group-hover:text-[#1F7A6E] transition-colors">
                  سياسة التبديل والنزاعات ومهلة الـ 24 ساعة
                </h3>
                <p className="text-xs text-[#526661] leading-relaxed max-w-2xl">
                  تنظيم حقوق التاجر والمشتري في قطاع الأزياء: شروط قبول استبدال المقاس، فحص سلامة بطاقة السعر (Tag) وعدم الاستخدام، وتدخل مندوب تبادل لحسم أي نزاع ميداني ودي خلال مهلة التبديل المحددة.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#F6F3EC]/50 border border-[#E1DACB] flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-lg mt-0.5">rule</span>
                    <div>
                      <h4 className="font-bold text-[#12302B] text-xs">شروط بقاء البطاقة الأصلية</h4>
                      <p className="text-[11px] text-[#526661] mt-0.5">رفض إرجاع أي قطعة تم نزع بطاقة السعر أو تلف تغليفها.</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F6F3EC]/50 border border-[#E1DACB] flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#E9B44C] text-lg mt-0.5">schedule</span>
                    <div>
                      <h4 className="font-bold text-[#12302B] text-xs">انتهاء مهلة الـ 24 ساعة</h4>
                      <p className="text-[11px] text-[#526661] mt-0.5">تحرير المبلغ تلقائياً لحساب التاجر بعد انقضاء المهلة بأمان.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E1DACB]">
                <button
                  onClick={() => showToast('جاري فتح وثيقة بروتوكول فض النزاعات وسياسة التبديل...')}
                  className="text-xs text-[#1F7A6E] font-bold flex items-center justify-between group-hover:translate-x-1 transition-transform w-full text-right cursor-pointer"
                >
                  <span>قراءة بروتوكول فض النزاعات وسياسة التبديل بالتفصيل</span>
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAQ ACCORDION SECTION */}
        <section id="faq-section" className="bg-white rounded-2xl border border-[#E1DACB] p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E1DACB] pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] text-xs font-bold mb-1">
                <span className="material-symbols-outlined text-sm">quiz</span>
                <span>إجابات معتمدة</span>
              </div>
              <h2 className="text-xl font-bold text-[#12302B]">الأسئلة الشائعة للتاجر (FAQ)</h2>
              <p className="text-xs text-[#526661]">أبرز الاستفسارات العملية التي تهم شركاء الأزياء والأحذية يومياً</p>
            </div>
            <button
              onClick={() => showToast('جاري تحضير وتحميل دليل التاجر المحدث بصيغة PDF...')}
              className="text-xs text-[#1F7A6E] font-bold hover:underline self-start md:self-auto flex items-center gap-1 cursor-pointer"
            >
              <span>تحميل دليل التاجر PDF</span>
              <span className="material-symbols-outlined text-base">download</span>
            </button>
          </div>

          {/* Accordion Items */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.id}
                  className="border border-[#E1DACB] rounded-xl overflow-hidden transition-all bg-[#F6F3EC]/30 hover:border-[#1F7A6E]/50"
                >
                  <button
                    className="w-full p-4 sm:p-5 text-right flex items-center justify-between gap-4 font-bold text-[#12302B] text-sm sm:text-base focus:outline-none cursor-pointer"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    type="button"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#1F7A6E]/10 text-[#1F7A6E] flex items-center justify-center text-xs font-bold">
                        {faq.id}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <span
                      className={`material-symbols-outlined text-[#1F7A6E] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#526661] border-t border-[#E1DACB]/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. PREVIOUS TICKETS & ACTIVE SUPPORT CASES */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-[#12302B]">تذاكر الدعم وحالات المتابعة السابقة</h2>
              <p className="text-xs text-[#526661]">متابعة دقيقة لكافة الطلبات المرفوعة من بوتيك لمسة</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-xl bg-white border border-[#E1DACB] flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[#526661]">زمن الاستجابة المضمون:</span>
                <span className="font-bold text-[#12302B]">أقل من ساعتين (باقة Pro)</span>
              </div>
              <button
                className="px-4 py-2 rounded-xl bg-[#12302B] text-white text-xs font-bold hover:bg-[#1F7A6E] transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                onClick={() => navigate('/merchant/help/new-ticket')}
                type="button"
              >
                <span className="material-symbols-outlined text-lg">add</span>
                <span>إنشاء تذكرة جديدة</span>
              </button>
            </div>
          </div>

          {/* Tickets Table Container */}
          <div className="bg-white rounded-2xl border border-[#E1DACB] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-[#F6F3EC]/60 border-b border-[#E1DACB] text-[#12302B] text-xs font-bold">
                    <th className="py-3.5 px-5">رقم التذكرة</th>
                    <th className="py-3.5 px-5">موضوع التذكرة</th>
                    <th className="py-3.5 px-5">التصنيف</th>
                    <th className="py-3.5 px-5">تاريخ الإنشاء</th>
                    <th className="py-3.5 px-5">الحالة الحالية</th>
                    <th className="py-3.5 px-5">آخر تحديث</th>
                    <th className="py-3.5 px-5 text-center">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1DACB] text-xs">
                  {tickets.map((t) => (
                    <tr key={t.id} className="hover:bg-[#F6F3EC]/20 transition-colors">
                      <td className="py-4 px-5 font-bold text-[#12302B] font-mono">
                        {t.id}
                      </td>
                      <td className="py-4 px-5">
                        <div className="font-bold text-[#12302B]">{t.title}</div>
                        <div className="text-[11px] text-[#526661] mt-0.5">{t.subtitle}</div>
                      </td>
                      <td className="py-4 px-5">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${t.categoryColor}`}>
                          {t.category}
                        </span>
                      </td>
                      <td className="py-4 px-5 text-[#526661]">
                        {t.createdAt}
                      </td>
                      <td className="py-4 px-5">
                        {t.statusType === 'pending' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                            {t.status}
                          </span>
                        ) : t.statusType === 'resolved' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                            <span className="material-symbols-outlined text-xs text-emerald-600">check_circle</span>
                            {t.status}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                            <span className="material-symbols-outlined text-xs text-slate-600">lock</span>
                            {t.status}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-5 text-[#526661] text-[11px]">
                        {t.lastUpdate}
                      </td>
                      <td className="py-4 px-5 text-center">
                        <button
                          onClick={() => showToast(`عرض تفاصيل وسجل محادثات التذكرة ${t.id}`)}
                          className="p-1.5 text-[#1F7A6E] hover:bg-[#1F7A6E]/10 rounded-lg transition-colors font-bold text-xs inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>عرض</span>
                          <span className="material-symbols-outlined text-sm">visibility</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-[#F6F3EC]/40 border-t border-[#E1DACB] flex items-center justify-between text-xs text-[#526661]">
              <span>عرض {tickets.length} من أصل 14 تذكرة دعم مسجلة</span>
              <button
                onClick={() => showToast('جاري تحميل سجل الأرشيف الكامل للتذاكر السابقة...')}
                className="font-bold text-[#1F7A6E] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>عرض سجل التذاكر الكامل</span>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* QUICK TICKET MODAL */}
      {showTicketModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full border border-[#E1DACB] shadow-2xl overflow-hidden animate-fadeIn">
            <div className="bg-[#12302B] p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E9B44C]">confirmation_number</span>
                <h3 className="text-base font-bold">إنشاء تذكرة دعم فني جديدة</h3>
              </div>
              <button
                className="text-white/70 hover:text-white p-1 rounded-lg cursor-pointer"
                onClick={() => setShowTicketModal(false)}
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form className="p-6 space-y-4" onSubmit={handleTicketSubmit}>
              <div>
                <label className="block text-xs font-bold text-[#12302B] mb-1.5">تصنيف المشكلة</label>
                <select
                  value={ticketCategory}
                  onChange={(e) => setTicketCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] focus:outline-none focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 text-xs sm:text-sm font-tajawal"
                  required
                >
                  <option value="">اختر القسم المختص...</option>
                  <option value="wallet">المحفظة وسحب الأرباح عبر PalPay</option>
                  <option value="code">مشاكل كود التسليم وتأكيد الطلبات</option>
                  <option value="exchange">تبديل المقاسات ونزاعات الزبائن (مهلة 24 ساعة)</option>
                  <option value="cashback">استفسارات كاش باك 5% والعمولات</option>
                  <option value="technical">مشكلة تقنية في بوابة التاجر أو التطبيق</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12302B] mb-1.5">عنوان التذكرة المختصر</label>
                <input
                  value={ticketTitle}
                  onChange={(e) => setTicketTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] focus:outline-none focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 text-xs sm:text-sm font-tajawal"
                  placeholder="مثال: تأخر وصول كود التسليم للطلب #4502"
                  required
                  type="text"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#12302B] mb-1.5">رقم الطلب / المعاملة (اختياري)</label>
                  <input
                    value={ticketOrderCode}
                    onChange={(e) => setTicketOrderCode(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] focus:outline-none focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 text-xs sm:text-sm font-tajawal"
                    placeholder="#ORD-9821"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#12302B] mb-1.5">درجة الأهمية</label>
                  <select
                    value={ticketPriority}
                    onChange={(e) => setTicketPriority(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] focus:outline-none focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 text-xs sm:text-sm font-tajawal"
                  >
                    <option value="normal">عادية (خلال ساعتين)</option>
                    <option value="urgent">طارئة - مندوب التوصيل في المتجر الآن</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12302B] mb-1.5">تفاصيل المشكلة والوصف</label>
                <textarea
                  value={ticketDetails}
                  onChange={(e) => setTicketDetails(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] focus:outline-none focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 text-xs sm:text-sm font-tajawal"
                  placeholder="اشرح لنا تفاصيل المشكلة وما الإجراء الذي قمت به حتى نتمكن من مساعدتك بسرعة..."
                  required
                  rows="3"
                />
              </div>

              <div className="p-3 bg-[#F6F3EC] rounded-xl border border-[#E1DACB] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#526661]">
                  <span className="material-symbols-outlined text-base">attach_file</span>
                  <span>إرفاق لقطة شاشة أو إشعار PalPay</span>
                </div>
                <button
                  onClick={() => showToast('تم اختيار الملف وإرفاقه بالتذكرة.')}
                  className="text-xs font-bold text-[#1F7A6E] hover:underline cursor-pointer"
                  type="button"
                >
                  اختيار ملف
                </button>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E1DACB]">
                <button
                  className="px-4 py-2.5 rounded-xl text-[#526661] hover:text-[#12302B] font-bold text-xs cursor-pointer"
                  onClick={() => setShowTicketModal(false)}
                  type="button"
                >
                  إلغاء
                </button>
                <button
                  className="px-6 py-2.5 rounded-xl bg-[#1F7A6E] text-white font-bold hover:bg-[#12302B] transition-all shadow-sm text-xs cursor-pointer"
                  type="submit"
                >
                  إرسال التذكرة الآن
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer Component (Shared Component from JSON) */}
      <footer className="bg-white w-full mt-auto border-t border-[#E1DACB]">
        <div className="w-full mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1340px] text-xs text-[#526661]">
          {/* Brand & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
            <div className="font-black text-sm text-[#12302B]">
              تبادل للمتاجر
            </div>
            <div>
              © 2026 منصة تبادل لولاء المتاجر والأزياء - غزة. جميع الحقوق محفوظة.
            </div>
          </div>

          {/* Links from JSON */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link to="/merchant/help" className="hover:text-[#1F7A6E] transition-colors font-bold text-[#1F7A6E]">
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
          </div>
        </div>
      </footer>

    </div>
  );
}
