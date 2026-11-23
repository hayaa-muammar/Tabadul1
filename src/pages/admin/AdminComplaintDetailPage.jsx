import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminComplaintDetailPage() {
  const { id = 'DS-3029' } = useParams();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Lightbox preview for evidence images
  const [previewImage, setPreviewImage] = useState(null);

  // Arbitration Decision Form
  const [decision, setDecision] = useState('full_refund_customer');
  const [justification, setJustification] = useState('');
  const [formError, setFormError] = useState('');
  const [isResolved, setIsResolved] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  // 4 Evidence Photos
  const evidencePhotos = [
    {
      title: 'تلف القماش (الحاشية)',
      desc: 'صورة توضح تمزقاً في الخياطة السفلية للنسيج المخملي',
      url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'ملصق المقاس المستلم (M)',
      desc: 'ملصق الياقة يظهر مقاس M بدلاً من L المطلوب بالفاتورة',
      url: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'حالة الطرد الخارجي',
      desc: 'تلف وضغط في زوايا كرتونة الشحن',
      url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'محادثة الواتساب والتسليم',
      desc: 'تأكيد السائق تسليم الطرد دون طلب رمز التحقق PIN',
      url: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const handleSubmitVerdict = (e) => {
    e.preventDefault();
    setFormError('');

    if (!justification.trim() || justification.trim().length < 8) {
      setFormError('يرجى تدوين حيثيات القرار والمبرر التحكيمي (8 أحرف على الأقل).');
      return;
    }

    setIsResolved(true);
    showToast(`تم إصدار الحكم النهائي في الشكوى #${id} وترحيل قيد التسوية إلى الدفتر المالي A-09 وسجل التدقيق A-18.`);
  };

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
      <AdminSidebar activeItem="complaints" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

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
            <Link
              to="/admin/complaints"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-300 hover:bg-gray-50 text-xs font-bold text-gray-700 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
              <span>العودة لقائمة الشكاوى (A-12)</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/admin/ledger"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-50"
            >
              <span className="material-symbols-outlined text-sm text-[#1f7a6e]">account_balance_wallet</span>
              <span>الدفتر المالي (A-09)</span>
            </Link>
            <Link
              to="/admin/audit-log"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#12302b] text-white text-xs font-bold shadow-sm"
            >
              <span className="material-symbols-outlined text-sm text-[#e9b44c]">verified_user</span>
              <span>سجل التدقيق (A-18)</span>
            </Link>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1200px] mx-auto w-full">
          {/* Breadcrumb & Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <nav className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <Link to="/admin/dashboard" className="hover:text-[#12302b]">الإدارة</Link>
                <span className="material-symbols-outlined text-xs">chevron_left</span>
                <Link to="/admin/complaints" className="hover:text-[#12302b]">الشكاوى (A-12)</Link>
                <span className="material-symbols-outlined text-xs">chevron_left</span>
                <span className="text-[#12302b] font-bold">شكوى #{id}</span>
              </nav>
              <h1 className="text-xl sm:text-2xl font-bold text-[#12302b] tracking-tight">
                تفاصيل الشكوى والتحكيم: شكوى #{id}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-red-100 text-red-800 border border-red-300 rounded-full text-xs font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                <span>حرجة جداً: تجاوزت مهلة 48 ساعة</span>
              </span>
            </div>
          </div>

          {/* 1. CASE OVERVIEW DOSSIER */}
          <section className="bg-white rounded-2xl border border-[#e4dfd3] shadow-sm p-6 space-y-5">
            {/* Header Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center font-bold text-lg border border-red-200">
                  <span className="material-symbols-outlined text-2xl">warning</span>
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#12302b]">
                    تلف في قماش الفستان الحريري ومقاس خاطئ
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    تاريخ التسجيل: 25 أكتوبر 2026 - 17:00 • الطلب المرتبط: <strong className="text-[#1f7a6e] font-mono">#ORD-10482</strong>
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold text-gray-500 bg-[#f6f3ec] px-3 py-1 rounded-lg border border-[#e4dfd3] w-fit">
                فئة: الأزياء والسهرة الراقية
              </span>
            </div>

            {/* Customer vs Merchant Header Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#faf8f5] border border-[#e4dfd3]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-[#1f7a6e]">
                  <span className="material-symbols-outlined text-xl">person</span>
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 block font-medium">الطرف الشاكي (العميل):</span>
                  <span className="text-xs font-bold text-[#12302b]">سارة شبير (059-9182341)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:border-r sm:border-[#e4dfd3] sm:pr-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#8a6420]">
                  <span className="material-symbols-outlined text-xl">storefront</span>
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 block font-medium">المتجر المشكو بحقه:</span>
                  <span className="text-xs font-bold text-[#12302b]">بوتيك لمسة فاشون (غزة - الرمال)</span>
                </div>
              </div>
            </div>

            {/* Statements Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {/* Customer Statement */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#12302b] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#1f7a6e]">chat_bubble</span>
                    إفادة العميل الرسمية:
                  </span>
                  <span className="text-gray-400 text-[11px]">25 أكتوبر - 17:00</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-teal-200 text-xs leading-relaxed text-[#191c22]">
                  "تم استلام الطلب مساء أمس، وعند فتح الغلاف وجدنا أن الفستان بمقاس (M) بينما طلبي المسجل بالفاتورة مقاس (L). بالإضافة إلى ذلك، توجد تمزقات واضحة في نسيج المخمل بالحاشية السفلية للفستان، ومندوب التوصيل سلّم الطرد وغادر مسرعاً دون طلب كود التحقق (PIN)."
                </div>
              </div>

              {/* Merchant Response */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#12302b] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#8a6420]">reply</span>
                    مقتطف رد المتجر:
                  </span>
                  <span className="text-gray-400 text-[11px]">27 أكتوبر - 11:15</span>
                </div>
                <div className="p-3.5 bg-[#fdfbf7] rounded-xl border border-amber-200 text-xs leading-relaxed text-[#8a6420]">
                  "المتجر يؤكد فحص القطعة قبل التوصيل وتغليفها بحالة سليمة، وأن التسليم تم بدون إدخال رمز PIN من قبل المندوب نظراً لضغط الشحنات في منطقة الرمال. نطلب الفحص الإداري وعدم خصم المبلغ من الرصيد المعلق."
                </div>
              </div>
            </div>

            {/* Evidence Gallery (4 Photos) */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#12302b] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">attach_file</span>
                  أدلة الإثبات والمرفقات (4 صور توثيقية)
                </span>
                <span className="text-[11px] text-[#1f7a6e] hover:underline cursor-pointer font-bold">
                  تحميل الحزمة كاملة (ZIP)
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {evidencePhotos.map((photo, i) => (
                  <div
                    key={i}
                    onClick={() => setPreviewImage(photo)}
                    className="group relative rounded-xl overflow-hidden border border-[#e4dfd3] bg-[#f6f3ec] aspect-square flex flex-col justify-end p-2.5 cursor-pointer hover:border-[#12302b] hover:shadow-md transition-all"
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="relative z-10 bg-black/70 backdrop-blur-xs rounded-md px-2 py-1 text-[11px] text-white font-medium truncate">
                      {photo.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. LINKED ORDER & FINANCIAL RECORD */}
          <section className="bg-white rounded-2xl border border-[#e4dfd3] shadow-sm p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#f6f3ec] flex items-center justify-center text-[#12302b]">
                  <span className="material-symbols-outlined text-base">receipt</span>
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#12302b]">بيانات الطلب المرتبط: #ORD-10482</h3>
                  <p className="text-[11px] text-gray-500">أمانة محتجزة في محفظة التبادل الضامنة</p>
                </div>
              </div>
              <Link
                to="/admin/ledger"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-50 text-[#1f7a6e] hover:bg-teal-100 text-xs font-bold transition-colors w-fit"
              >
                <span className="material-symbols-outlined text-sm">link</span>
                <span>عرض القيد بالدفتر المالي (A-09)</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-[#f6f3ec] rounded-xl border border-gray-200">
                <span className="text-gray-500 block text-[11px]">قيمة الطلب الإجمالية</span>
                <span className="text-base font-extrabold text-[#12302b] font-mono">340.00 ₪</span>
              </div>
              <div className="p-3 bg-[#f6f3ec] rounded-xl border border-gray-200">
                <span className="text-gray-500 block text-[11px]">الرصيد المحتجز (Escrow)</span>
                <span className="text-base font-extrabold text-amber-700 font-mono">340.00 ₪</span>
              </div>
              <div className="p-3 bg-[#f6f3ec] rounded-xl border border-gray-200">
                <span className="text-gray-500 block text-[11px]">عمولة المنصة المعلقة (3%)</span>
                <span className="text-base font-extrabold text-gray-700 font-mono">10.20 ₪</span>
              </div>
              <div className="p-3 bg-[#f6f3ec] rounded-xl border border-gray-200">
                <span className="text-gray-500 block text-[11px]">حالة رمز التسليم (PIN)</span>
                <span className="text-xs font-bold text-red-600 block mt-1">غير مدخل (مخالفة)</span>
              </div>
            </div>
          </section>

          {/* 3. CHRONOLOGICAL TIMELINE */}
          <section className="bg-white rounded-2xl border border-[#e4dfd3] shadow-sm p-6 space-y-4">
            <h3 className="text-sm font-bold text-[#12302b] flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-[#1f7a6e]">history</span>
              <span>التسلسل الزمني للنزاع (Timeline)</span>
            </h3>

            <div className="relative pr-6 space-y-4 border-r-2 border-gray-200 mr-2 text-xs">
              {/* Event 1 */}
              <div className="relative">
                <span className="absolute -right-[31px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-white"></span>
                <div className="font-bold text-[#12302b]">إنشاء الطلب ودفع الأمانة (340 ₪)</div>
                <div className="text-[11px] text-gray-400">24 أكتوبر 2026 - 15:30 • تم احتجاز المبلغ في حساب الضمان</div>
              </div>

              {/* Event 2 */}
              <div className="relative">
                <span className="absolute -right-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-white"></span>
                <div className="font-bold text-[#12302b]">تسليم الطرد الميداني بدون كود PIN</div>
                <div className="text-[11px] text-gray-400">25 أكتوبر 2026 - 16:10 • المندوب تجاوز إدخال الرمز</div>
              </div>

              {/* Event 3 */}
              <div className="relative">
                <span className="absolute -right-[31px] top-1 w-3.5 h-3.5 rounded-full bg-red-500 ring-4 ring-white"></span>
                <div className="font-bold text-red-700">تسجيل الشكوى من قبل العميل (#DS-3029)</div>
                <div className="text-[11px] text-gray-400">25 أكتوبر 2026 - 17:00 • تم تجميد الحوالة فوراً</div>
              </div>

              {/* Event 4 */}
              <div className="relative">
                <span className="absolute -right-[31px] top-1 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-white"></span>
                <div className="font-bold text-[#12302b]">رد المتجر والمطالبة بالتحكيم</div>
                <div className="text-[11px] text-gray-400">27 أكتوبر 2026 - 11:15 • المتجر يرفض استلام المرتجع</div>
              </div>

              {/* Event 5 */}
              <div className="relative">
                <span className="absolute -right-[31px] top-1 w-3.5 h-3.5 rounded-full bg-red-600 ring-4 ring-white animate-pulse"></span>
                <div className="font-bold text-red-700">تجاوز مهلة الرد 48 ساعة والتصعيد التلقائي للمشرف العام</div>
                <div className="text-[11px] text-red-500 font-bold">27 أكتوبر 2026 - 17:00 • يستوجب حكماً نهائياً ملزماً</div>
              </div>
            </div>
          </section>

          {/* 4. FINAL ARBITRATION VERDICT FORM */}
          <section className="bg-white rounded-2xl border-2 border-[#12302b] shadow-md p-6 space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-gray-200">
              <span className="material-symbols-outlined text-2xl text-[#e9b44c]">gavel</span>
              <h3 className="text-base font-bold text-[#12302b]">القرار التحكيمي النهائي الملزم</h3>
            </div>

            {isResolved ? (
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300 text-emerald-950 text-xs space-y-1">
                <div className="font-bold text-sm text-emerald-900 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  تم إصدار الحكم النهائي وإغلاق ملف الشكوى
                </div>
                <p>القرار المعتمد: {decision === 'full_refund_customer' ? 'استرجاع كامل المبلغ (340 ₪) للعميل' : 'حسم النزاع بالتسوية المعتمدة'}</p>
                <p className="text-gray-600">حيثيات القرار: {justification}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitVerdict} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#12302b] mb-2">
                    حدد منطوق الحكم النهائي:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`p-3.5 rounded-xl border-2 cursor-pointer flex items-center gap-3 ${
                        decision === 'full_refund_customer'
                          ? 'border-emerald-600 bg-emerald-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="decision"
                        value="full_refund_customer"
                        checked={decision === 'full_refund_customer'}
                        onChange={(e) => setDecision(e.target.value)}
                        className="text-emerald-600"
                      />
                      <div>
                        <div className="font-bold text-emerald-950">استرجاع كامل المبلغ للعميل (340 ₪)</div>
                        <span className="text-[11px] text-gray-500">إلغاء استحقاق المتجر لمخالفة تسليم PIN</span>
                      </div>
                    </label>

                    <label
                      className={`p-3.5 rounded-xl border-2 cursor-pointer flex items-center gap-3 ${
                        decision === 'release_to_merchant'
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="decision"
                        value="release_to_merchant"
                        checked={decision === 'release_to_merchant'}
                        onChange={(e) => setDecision(e.target.value)}
                        className="text-blue-600"
                      />
                      <div>
                        <div className="font-bold text-blue-950">الإفراج عن المبلغ لصالح المتجر</div>
                        <span className="text-[11px] text-gray-500">رفض شكوى العميل وتأكيد استحقاق المتجر</span>
                      </div>
                    </label>

                    <label
                      className={`p-3.5 rounded-xl border-2 cursor-pointer flex items-center gap-3 ${
                        decision === 'replace_item'
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="decision"
                        value="replace_item"
                        checked={decision === 'replace_item'}
                        onChange={(e) => setDecision(e.target.value)}
                        className="text-purple-600"
                      />
                      <div>
                        <div className="font-bold text-purple-950">استبدال المنتج وإعادة التوصيل مجاناً</div>
                        <span className="text-[11px] text-gray-500">إلزام المتجر بتبديل القطعة بمقاس L وتوصيلها مجاناً</span>
                      </div>
                    </label>

                    <label
                      className={`p-3.5 rounded-xl border-2 cursor-pointer flex items-center gap-3 ${
                        decision === 'custom_settlement'
                          ? 'border-amber-600 bg-amber-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="decision"
                        value="custom_settlement"
                        checked={decision === 'custom_settlement'}
                        onChange={(e) => setDecision(e.target.value)}
                        className="text-amber-600"
                      />
                      <div>
                        <div className="font-bold text-amber-950">تسوية مناصفة بالتراضي (170 ₪ / 170 ₪)</div>
                        <span className="text-[11px] text-gray-500">اقتسام الضرر بين الطرفين وفق المعايير</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Justification Textarea */}
                <div className="space-y-1.5">
                  <label className="block font-bold text-[#12302b]">
                    حيثيات القرار ومسوغات التحكيم <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={justification}
                    onChange={(e) => setJustification(e.target.value)}
                    rows="3"
                    placeholder="دوّن المبررات القانونية والميدانية للحكم (مثل: ثبوت عدم إدخال رمز PIN وتطابق صورة تلف القماش)..."
                    className={`w-full p-3 rounded-xl border ${
                      formError ? 'border-red-500' : 'border-gray-300'
                    } text-xs outline-none focus:border-[#12302b] bg-[#faf8f4] resize-none`}
                  />
                  {formError && <span className="text-[11px] text-red-500">{formError}</span>}
                </div>

                {/* Submit Action */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#12302b] hover:bg-[#183d37] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base text-[#e9b44c]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified
                    </span>
                    <span>اعتماد الحكم وإغلاق الشكوى</span>
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      </main>

      {/* LIGHTBOX MODAL */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
          >
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-[#12302b]">{previewImage.title}</h3>
                <p className="text-xs text-gray-500">{previewImage.desc}</p>
              </div>
              <button
                onClick={() => setPreviewImage(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <div className="p-2 bg-black flex items-center justify-center">
              <img src={previewImage.url} alt={previewImage.title} className="max-h-[60vh] object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
