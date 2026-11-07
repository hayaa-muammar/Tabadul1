import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function CreateTicketPage() {
  const navigate = useNavigate();

  // Form states
  const [category, setCategory] = useState('palpay_wallet');
  const [subject, setSubject] = useState('تأكيد حوالة سحب أرباح PalPay معلقة برقم عملية TRX-9901');
  const [priority, setPriority] = useState('urgent');
  const [refNumber, setRefNumber] = useState('TRX-9901-PALPAY');
  const [description, setDescription] = useState(
    'تم طلب تحويل أرباح مبيعات أسبوعية من محفظة تبادل إلى حساب PalPay التجاري المعتمد لبوتيك لمسة بقيمة 1,250 شيكل يوم أمس الساعة 02:30 ظهراً تحت رقم الحوالة TRX-9901. تم خصم المبلغ من رصيد تبادل المتاح ولكن لم يظهر الإشعار في تطبيق PalPay حتى الآن، ونحتاج لتأكيد سند القيد وتزويدنا برقم الإشعار البنكي الرسمي لإتمام التوريد.'
  );

  // Attached files
  const [attachments, setAttachments] = useState([
    {
      id: 1,
      name: 'receipt-palpay-trx9901.png',
      size: '1.2 MB',
      status: 'مكتمل الرفع والفحص الأمني',
    },
  ]);

  // Submission & toast
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachments((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: file.name,
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          status: 'مكتمل الرفع والفحص الأمني',
        },
      ]);
      showToast(`تم إرفاق الملف: ${file.name}`);
    }
  };

  const handleDeleteFile = (id) => {
    setAttachments((prev) => prev.filter((f) => f.id !== id));
    showToast('تم إزالة الملف المرفق.');
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast('تم إرسال تذكرة الدعم بنجاح تحت الرقم المرجعي TBD-2026-9921! جاري توجيهك لمركز المساعدة...');
      setTimeout(() => {
        navigate('/merchant/help');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      {/* Header */}
      <MerchantHeader />

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#12302B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#E9B44C]/50 text-sm font-bold animate-bounce">
          <span className="material-symbols-outlined text-[#E9B44C] text-xl">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ================= BREADCRUMBS & CONTEXT BAR ================= */}
      <div className="bg-white border-b border-[#E1DACB] py-2.5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between text-xs text-[#4A5B57]">
          <nav className="flex items-center gap-2">
            <Link to="/merchant/dashboard" className="hover:text-[#12302B] transition-colors">
              الرئيسية
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/merchant/dashboard" className="hover:text-[#12302B] transition-colors">
              لوحة التحكم
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/merchant/help" className="hover:text-[#12302B] transition-colors">
              مركز المساعدة والدعم
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#12302B] font-bold">إنشاء تذكرة دعم فني جديدة</span>
          </nav>
          <div className="hidden md:flex items-center gap-2 text-[11px] font-medium text-[#1F7A6E] bg-[#E3F2EF] px-2.5 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>فريق الدعم الفني متواجد الآن في غزة (استجابة فورية)</span>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-4 md:px-8 py-6">
        {/* HERO TITLE & TOP QUICK ACTIONS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E1DACB] mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E9B44C] text-[#12302B]">
                تذكرة جديدة #TBD-NEW
              </span>
              <span className="text-xs text-[#4A5B57]">تاريخ الإنشاء: اليوم، 12:45 م</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#12302B] mt-1">
              إنشاء تذكرة دعم فني وتدقيق رسمي
            </h1>
            <p className="text-xs md:text-sm text-[#4A5B57] mt-1 max-w-3xl leading-relaxed">
              فريق دعم منصة تبادل المالي والتقني جاهز لمساعدتك وحل النزاعات أو استفسارات المحفظة خلال أقل من ساعتين (باقة Pro).
            </p>
          </div>

          {/* Quick Action Buttons on Top */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/merchant/help"
              className="px-4 py-2.5 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] font-bold text-xs hover:bg-[#F6F3EC] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span className="material-symbols-outlined text-base">close</span>
              <span>إلغاء والعودة لمركز المساعدة</span>
            </Link>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              type="button"
              className="px-6 py-2.5 rounded-xl bg-[#E9B44C] text-[#12302B] font-black text-xs hover:bg-[#feb64e] active:scale-95 transition-all shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined text-base animate-spin">refresh</span>
                  <span>جاري الإرسال...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-base">send</span>
                  <span>إرسال التذكرة الآن</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* TWO-COLUMN WORKSPACE GRID (Desktop-First: ~65% Form / ~35% Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= RIGHT COLUMN: MAIN FORM (8 of 12 cols = 66.6%) ================= */}
          <div className="lg:col-span-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* SECTION 1: CATEGORY SELECTOR */}
              <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#E3F2EF] text-[#1F7A6E] flex items-center justify-center font-bold text-sm">
                      1
                    </span>
                    <h2 className="text-base font-bold text-[#12302B]">تصنيف المشكلة أو الاستفسار</h2>
                  </div>
                  <span className="text-xs text-[#4A5B57] font-medium">* حقل إلزامي لتوجيه الطلب للمختص</span>
                </div>

                {/* Category Radio Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3" role="radiogroup">
                  {/* Option 1: PalPay Wallet */}
                  <label
                    onClick={() => setCategory('palpay_wallet')}
                    className={`relative flex items-center justify-between gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      category === 'palpay_wallet'
                        ? 'border-[#1F7A6E] bg-[#F4F9F8]'
                        : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <input
                        checked={category === 'palpay_wallet'}
                        onChange={() => setCategory('palpay_wallet')}
                        className="w-4 h-4 text-[#1F7A6E] focus:ring-[#1F7A6E] shrink-0"
                        name="ticket_category"
                        type="radio"
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[#12302B] leading-tight">
                          المحفظة والتحويلات المالية (PalPay)
                        </div>
                        <p className="text-xs text-[#4A5B57] mt-1">
                          سحب الرصيد، جداول التسوية، سندات الصرف، ورسوم الكاش باك.
                        </p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#BCE1D9] flex items-center justify-center text-[#1F7A6E] shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                    </div>
                  </label>

                  {/* Option 2: Orders & PIN */}
                  <label
                    onClick={() => setCategory('orders_otp')}
                    className={`relative flex items-center justify-between gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      category === 'orders_otp'
                        ? 'border-2 border-[#1F7A6E] bg-[#F4F9F8]'
                        : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <input
                        checked={category === 'orders_otp'}
                        onChange={() => setCategory('orders_otp')}
                        className="w-4 h-4 text-[#1F7A6E] focus:ring-[#1F7A6E] shrink-0"
                        name="ticket_category"
                        type="radio"
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[#12302B] leading-tight">
                          الطلبات وكود التسليم 4 أرقام
                        </div>
                        <p className="text-xs text-[#4A5B57] mt-1">
                          تعذر إدخال الكود، مشاكل التوصيل، وتأكيد الاستلام الفوري.
                        </p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#F6F3EC] border border-[#E1DACB] flex items-center justify-center text-[#4A5B57] shrink-0">
                      <span className="material-symbols-outlined text-xl">local_shipping</span>
                    </div>
                  </label>

                  {/* Option 3: Returns & Dispute */}
                  <label
                    onClick={() => setCategory('returns_policy')}
                    className={`relative flex items-center justify-between gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      category === 'returns_policy'
                        ? 'border-2 border-[#1F7A6E] bg-[#F4F9F8]'
                        : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <input
                        checked={category === 'returns_policy'}
                        onChange={() => setCategory('returns_policy')}
                        className="w-4 h-4 text-[#1F7A6E] focus:ring-[#1F7A6E] shrink-0"
                        name="ticket_category"
                        type="radio"
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[#12302B] leading-tight">
                          سياسة التبديل والنزاعات 24 ساعة
                        </div>
                        <p className="text-xs text-[#4A5B57] mt-1">
                          مقاسات خاطئة، إرجاع بضاعة، وبطاقة السعر المفقودة من الزبون.
                        </p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#F6F3EC] border border-[#E1DACB] flex items-center justify-center text-[#4A5B57] shrink-0">
                      <span className="material-symbols-outlined text-xl">swap_horiz</span>
                    </div>
                  </label>

                  {/* Option 4: Products & Inventory */}
                  <label
                    onClick={() => setCategory('inventory_products')}
                    className={`relative flex items-center justify-between gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      category === 'inventory_products'
                        ? 'border-2 border-[#1F7A6E] bg-[#F4F9F8]'
                        : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <input
                        checked={category === 'inventory_products'}
                        onChange={() => setCategory('inventory_products')}
                        className="w-4 h-4 text-[#1F7A6E] focus:ring-[#1F7A6E] shrink-0"
                        name="ticket_category"
                        type="radio"
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[#12302B] leading-tight">
                          المنتجات والمخزون
                        </div>
                        <p className="text-xs text-[#4A5B57] mt-1">
                          إضافة المقاسات، تحديث الكميات الحرجة، وتفعيل نقاط المكافأة.
                        </p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#F6F3EC] border border-[#E1DACB] flex items-center justify-center text-[#4A5B57] shrink-0">
                      <span className="material-symbols-outlined text-xl">checkroom</span>
                    </div>
                  </label>

                  {/* Option 5: Store Settings */}
                  <label
                    onClick={() => setCategory('store_settings')}
                    className={`relative flex items-center justify-between gap-3 p-4 rounded-xl border cursor-pointer transition-all md:col-span-2 ${
                      category === 'store_settings'
                        ? 'border-2 border-[#1F7A6E] bg-[#F4F9F8]'
                        : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <input
                        checked={category === 'store_settings'}
                        onChange={() => setCategory('store_settings')}
                        className="w-4 h-4 text-[#1F7A6E] focus:ring-[#1F7A6E] shrink-0"
                        name="ticket_category"
                        type="radio"
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[#12302B] leading-tight">
                          إعدادات المتجر والحساب البنكي
                        </div>
                        <p className="text-xs text-[#4A5B57] mt-1">
                          توثيق السجل التجاري، ترقية الاشتراك، وتعديل بيانات الآيبان (IBAN).
                        </p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#F6F3EC] border border-[#E1DACB] flex items-center justify-center text-[#4A5B57] shrink-0">
                      <span className="material-symbols-outlined text-xl">storefront</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* SECTION 2: TICKET METADATA */}
              <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm space-y-5">
                <div className="flex items-center gap-3 pb-3 border-b border-[#E1DACB]">
                  <span className="w-8 h-8 rounded-xl bg-[#E3F2EF] text-[#1F7A6E] flex items-center justify-center font-bold text-base shrink-0">
                    2
                  </span>
                  <div>
                    <h2 className="text-base font-bold text-[#12302B] leading-tight">
                      بيانات التذكرة الأساسية
                    </h2>
                    <p className="text-xs text-[#4A5B57] mt-0.5">
                      يرجى تحديد الموضوع ومستوى الأولوية وتفاصيل المعاملة بدقة لتسهيل المعالجة.
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#12302B]">
                    موضوع التذكرة <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center rounded-xl border border-[#E1DACB] bg-white focus-within:border-[#1F7A6E] focus-within:ring-2 focus-within:ring-[#1F7A6E]/20 transition-all">
                    <span className="absolute right-3 pointer-events-none text-[#4A5B57]">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </span>
                    <input
                      className="w-full h-12 pr-10 pl-4 border-0 bg-transparent text-[#12302B] text-sm font-medium placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                      placeholder="اكتب عنواناً موجزاً يوضح جوهر المشكلة بدقة..."
                      required
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-[#4A5B57]">اكتب عنواناً واضحاً لمساعدة القسم المختص في فرز تذكرتك فوراً.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                      درجة الأولوية <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center rounded-xl border border-[#E1DACB] bg-white focus-within:border-[#1F7A6E] focus-within:ring-2 focus-within:ring-[#1F7A6E]/20 transition-all">
                      <span className="absolute right-3.5 pointer-events-none text-[#E07B2F]">
                        <span className="material-symbols-outlined text-lg">warning</span>
                      </span>
                      <select
                        className="w-full h-12 pr-11 pl-10 border-0 bg-transparent text-[#12302B] text-sm font-medium cursor-pointer appearance-none focus:ring-0 focus:outline-none"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                      >
                        <option value="urgent">عاجل جداً (نزاع مالي / كود تسليم متوقف)</option>
                        <option value="medium">متوسطة (تسوية أسبوعية / تعديل منتج)</option>
                        <option value="normal">عادية (استفسار عن الميزات / ترقية باقة)</option>
                      </select>
                      <span className="absolute left-3 pointer-events-none text-[#4A5B57]">
                        <span className="material-symbols-outlined text-base">expand_more</span>
                      </span>
                    </div>

                    {priority === 'urgent' && (
                      <div className="flex items-center gap-2 mt-2 p-2 rounded-lg bg-[#FBF1DC] border border-[#E9B44C]/30 text-xs text-[#8A6420]">
                        <span className="material-symbols-outlined text-sm text-[#E07B2F]">info</span>
                        <span className="font-medium leading-normal">
                          تم تحديد أولوية قصوى - يتم تفعيل تنبيه مباشر لمدير النزاعات.
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">
                      رقم الطلب أو الحوالة المرتبطة <span className="text-xs font-normal text-[#4A5B57]">(اختياري)</span>
                    </label>
                    <div className="relative flex items-center rounded-xl border border-[#E1DACB] bg-white focus-within:border-[#1F7A6E] focus-within:ring-2 focus-within:ring-[#1F7A6E]/20 transition-all">
                      <span className="pointer-events-none shrink-0 mr-3 text-[#4A5B57]">
                        <span className="material-symbols-outlined text-lg">receipt</span>
                      </span>
                      <input
                        className="w-full h-12 pr-2 pl-4 border-0 bg-transparent text-[#12302B] text-sm font-semibold dir-ltr text-right placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                        placeholder="مثال: TRX-9901-PALPAY"
                        type="text"
                        value={refNumber}
                        onChange={(e) => setRefNumber(e.target.value)}
                      />
                    </div>
                    <p className="text-xs text-[#4A5B57] mt-2">إدخال رقم العملية يقلل زمن المراجعة بنسبة 50%.</p>
                  </div>
                </div>
              </div>

              {/* SECTION 3: DESCRIPTION DETAILS */}
              <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#E3F2EF] text-[#1F7A6E] flex items-center justify-center font-bold text-sm">
                      3
                    </span>
                    <h2 className="text-base font-bold text-[#12302B]">تفاصيل التوضيح والمشكلة</h2>
                  </div>
                  <span className="text-xs text-[#4A5B57]">{description.length} / 500 حرف</span>
                </div>
                <p className="text-xs text-[#4A5B57]">
                  اشرح ما حدث بدقة لمساعدة فريق الدعم على الحل السريع، اذكر التوقيت وقيمة المبلغ ورقم هاتف الزبون في حال وجود نزاع تسليم:
                </p>
                <textarea
                  className="w-full p-4 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] text-sm leading-relaxed focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition-all placeholder:text-gray-400"
                  placeholder="اكتب تفاصيل المشكلة هنا بالكامل..."
                  required
                  rows="5"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* SECTION 4: FILE ATTACHMENTS & DROPZONE */}
              <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#E3F2EF] text-[#1F7A6E] flex items-center justify-center font-bold text-sm">
                      4
                    </span>
                    <h2 className="text-base font-bold text-[#12302B]">إرفاق المستندات والصور الداعمة</h2>
                  </div>
                  <span className="text-xs text-[#4A5B57] font-medium">صيغ PNG, JPG, PDF (بحد أقصى 5MB)</span>
                </div>

                {/* Drag & Drop Zone */}
                <div className="border-2 border-dashed border-[#BCE1D9] bg-[#F7FBFA] rounded-2xl p-6 text-center hover:bg-[#F0F8F6] transition-colors cursor-pointer group">
                  <input
                    className="hidden"
                    id="ticketFileUpload"
                    type="file"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="ticketFileUpload" className="cursor-pointer flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#E3F2EF] text-[#1F7A6E] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">cloud_upload</span>
                    </div>
                    <p className="text-sm font-bold text-[#12302B]">
                      اسحب وأفلت الملفات هنا، أو <span className="text-[#1F7A6E] underline">تصفح من جهازك</span>
                    </p>
                    <p className="text-xs text-[#4A5B57] mt-1">
                      يمكنك رفع صورة الفاتورة، لقطة شاشة لمحفظة PalPay، أو صورة فحص قطعة الأزياء/الحذاء.
                    </p>
                  </label>
                </div>

                {/* Attached Files Ledger */}
                {attachments.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-[#12302B] block">
                      المستندات المرفقة بالتذكرة ({attachments.length} ملف):
                    </span>
                    {attachments.map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F3EC] border border-[#E1DACB] gap-3"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="w-10 h-10 rounded-lg bg-white border border-[#E1DACB] flex items-center justify-center text-[#1F7A6E] shrink-0 shadow-sm">
                            <span className="material-symbols-outlined text-xl">description</span>
                          </div>
                          <div className="min-w-0 flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-[#12302B] truncate dir-ltr text-right">
                                {file.name}
                              </span>
                              <span className="material-symbols-outlined text-xs text-emerald-600 icon-fill">
                                check_circle
                              </span>
                            </div>
                            <span className="text-[11px] text-[#4A5B57] mt-0.5">
                              {file.size} • {file.status}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => showToast(`معاينة الملف: ${file.name}`)}
                            className="w-8 h-8 flex items-center justify-center text-[#4A5B57] hover:text-[#12302B] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-[#E1DACB]"
                            title="معاينة الملف"
                          >
                            <span className="material-symbols-outlined text-base">visibility</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteFile(file.id)}
                            className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="حذف الملف"
                          >
                            <span className="material-symbols-outlined text-base">delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* ================= LEFT COLUMN: SIDEBAR / SLA & INFO (~35% = 4 cols) ================= */}
          <div className="lg:col-span-4 space-y-6">
            {/* CARD 1: SLA GUARANTEE (Golden Response Policy) */}
            <div className="bg-gradient-to-br from-[#12302B] to-[#1C4740] text-white rounded-2xl p-6 shadow-md border border-[#2B5E55] relative overflow-hidden">
              <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-[#E9B44C]/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#E9B44C] text-[#12302B] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg icon-fill text-[#12302B]">workspace_premium</span>
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">ضمان زمن الاستجابة (SLA)</h3>
                    <span className="text-[11px] text-[#E9B44C] font-semibold">أولوية الاستجابة الذهبية (باقة Pro)</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-white/50 text-xl">bolt</span>
              </div>

              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/80 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-white/60">schedule</span>
                    الحد الأقصى للرد الأول:
                  </span>
                  <span className="text-sm font-bold text-[#E9B44C]">أقل من 120 دقيقة</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/80 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-white/60">calendar_month</span>
                    فترة العمل المباشر:
                  </span>
                  <span className="text-xs font-semibold text-white">طوال الأسبوع (08:00 ص - 10:00 م)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/80 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-white/60">location_on</span>
                    المكتب الإقليمي:
                  </span>
                  <span className="text-xs font-semibold text-white">غزة - شارع الرمال / دوار الميناء</span>
                </div>
              </div>

              {/* Systems Status Pill */}
              <div className="bg-white/10 rounded-xl p-3 border border-white/10 flex items-center gap-2.5 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
                <div className="text-[11px] leading-tight">
                  <span className="text-white font-bold block">الأنظمة المالية وأنظمة كود التسليم تعمل بكفاءة 100%</span>
                  <span className="text-white/60">بوابات PalPay وبنك فلسطين متصلة دون تأخير</span>
                </div>
              </div>
            </div>

            {/* CARD 2: TIPS BEFORE SUBMITTING */}
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E07B2F] text-xl">lightbulb</span>
                <h3 className="text-base font-bold text-[#12302B]">نصائح قبل فتح التذكرة لتسريع الحل</h3>
              </div>
              <ul className="space-y-3 text-xs text-[#4A5B57] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-sm text-[#1F7A6E] shrink-0 mt-0.5 icon-fill">
                    check_circle
                  </span>
                  <span>
                    <strong>التحويلات البنكية:</strong> تأكد من مرور 24 ساعة عمل على دورة التسوية التلقائية قبل طلب التدقيق اليدوي.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-sm text-[#1F7A6E] shrink-0 mt-0.5 icon-fill">
                    check_circle
                  </span>
                  <span>
                    <strong>كود التسليم 4 أرقام:</strong> تأكد من طلب الرمز الرباعي الذي يصل هاتف الزبون لحظة استلام قطعة الملابس أو الحذاء.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-sm text-[#1F7A6E] shrink-0 mt-0.5 icon-fill">
                    check_circle
                  </span>
                  <span>
                    <strong>سياسة التبديل 24 ساعة:</strong> يشترط بقاء بطاقة السعر والباركود الأصلية على القطعة لضمان حقوق التاجر.
                  </span>
                </li>
              </ul>
              <div className="pt-2 border-t border-[#E1DACB]">
                <Link to="/merchant/help" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F7A6E] hover:underline">
                  <span>تصفح الأسئلة الشائعة الخاصة بالتجار (FAQ)</span>
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                </Link>
              </div>
            </div>

            {/* CARD 3: DIRECT ESCALATION & EMERGENCY CHANNELS */}
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-xl">support_agent</span>
                  <h3 className="text-base font-bold text-[#12302B]">بدائل الدعم المباشر الفوري</h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#FBF1DC] text-[#8A6420] text-[10px] font-bold">طوارئ</span>
              </div>
              <p className="text-xs text-[#4A5B57]">
                في حالات إغلاق المتاجر أو المشاكل الميدانية العاجلة أثناء تسليم زبائن المحل مباشرة، تواصل عبر:
              </p>

              {/* WhatsApp Channel */}
              <a
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#12302B] transition-colors group"
                href="https://wa.me/970599000000"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base">chat</span>
                  </span>
                  <div>
                    <span className="text-xs font-bold block">الدعم الميداني المباشر عبر واتساب</span>
                    <span className="text-[10px] text-[#4A5B57]">فريق العمليات والتوزيع - قطاع غزة</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-sm text-[#25D366] group-hover:-translate-x-1 transition-transform">
                  arrow_back
                </span>
              </a>

              {/* Direct Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6F3EC] border border-[#E1DACB]">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#4A5B57]">call</span>
                  <div>
                    <span className="text-[11px] text-[#4A5B57] block">هاتف المبيعات والدعم الإداري:</span>
                    <span className="font-bold text-sm text-[#12302B] dir-ltr block text-right">
                      +970 8 282 4411
                    </span>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded bg-white text-[#1F7A6E] font-bold border border-[#E1DACB]">
                  متاح الآن
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ACTION CONFIRMATION BANNER ================= */}
        <div className="mt-8 bg-white rounded-2xl border border-[#E1DACB] p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Warning / Security Assurance Note */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E3F2EF] text-[#1F7A6E] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <div>
              <span className="text-sm font-bold text-[#12302B] block">توثيق رسمي وحماية لحقوق المتجر</span>
              <p className="text-xs text-[#4A5B57] mt-0.5">
                سيتم توثيق التذكرة برقم مرجعي رسمي وإرسال إشعار فوري بحالتها إلى جوالك وواتساب المعتمد (
                <span className="text-[#12302B] font-bold font-mono">059-XXXX-421</span>).
              </p>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
            <Link
              to="/merchant/help"
              className="px-4 py-2.5 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] text-xs font-bold hover:bg-[#F6F3EC] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span className="material-symbols-outlined text-base">close</span>
              <span>إلغاء والعودة لمركز المساعدة</span>
            </Link>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              type="button"
              className="px-6 py-2.5 rounded-xl bg-[#E9B44C] text-[#12302B] text-xs font-black hover:bg-[#feb64e] active:scale-95 transition-all shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined text-base animate-spin">refresh</span>
                  <span>جاري الإرسال...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-base">send</span>
                  <span>إرسال التذكرة ومتابعة الحالة</span>
                </>
              )}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
