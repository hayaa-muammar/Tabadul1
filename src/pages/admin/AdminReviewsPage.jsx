import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminReviewsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Tabs & Filters
  const [activeTab, setActiveTab] = useState('reported'); // 'reported' | 'all' | 'hidden'
  const [searchQuery, setSearchQuery] = useState('');

  // Hide Review Modal
  const [isHideModalOpen, setIsHideModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [hideReason, setHideReason] = useState('abusive_language');
  const [hideNotes, setHideNotes] = useState('');
  const [formError, setFormError] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  // Initial Reviews Data
  const [reviews, setReviews] = useState([
    {
      id: 'REV-901',
      customerName: 'محمود نصر',
      customerPhone: '059-9812401',
      storeName: 'بوتيك لمسة فاشون',
      orderId: 'ORD-10482',
      rating: 1,
      date: '28 أكتوبر 2026',
      comment: 'متجر سيء للغاية ونصّابين، البضاعة وصلت مقطوعة ولا أنصح أي شخص بالتعامل معهم إطلاقاً!',
      flagReason: 'ألفاظ مسيئة واتهام صريح بالنصب بدون حكم تحكيمي',
      status: 'reported',
      statusLabel: 'مبلّغ عنه',
    },
    {
      id: 'REV-902',
      customerName: 'فاطمة الكرد',
      customerPhone: '059-7123982',
      storeName: 'دار الأناقة للأزياء',
      orderId: 'ORD-10460',
      rating: 2,
      date: '27 أكتوبر 2026',
      comment: 'القماش مختلف عن الصورة المعروضة في التطبيق واللون باهت وغير مطابق.',
      flagReason: 'ادعاء عدم مطابقة المواصفات (قيد التحقق)',
      status: 'reported',
      statusLabel: 'مبلّغ عنه',
    },
    {
      id: 'REV-903',
      customerName: 'أحمد شاهين',
      customerPhone: '059-3321455',
      storeName: 'سنيكرز فوتوير',
      orderId: 'ORD-10412',
      rating: 1,
      date: '26 أكتوبر 2026',
      comment: 'الحذاء مقلد وليس أصلي، تواصلت مع التاجر وشتم المندوب على الواتساب.',
      flagReason: 'تعدي لفظي وادعاء تقليد علامة تجارية',
      status: 'reported',
      statusLabel: 'مبلّغ عنه',
    },
    {
      id: 'REV-904',
      customerName: 'سارة شبير',
      customerPhone: '059-9182341',
      storeName: 'دار شال وشيلة للعبايات',
      orderId: 'ORD-9184',
      rating: 5,
      date: '25 أكتوبر 2026',
      comment: 'تعامل راقي جداً والعباية ممتازة ونقاط الكاش باك نزلت فوراً بمجرد إدخال PIN.',
      status: 'active',
      statusLabel: 'معتمد وظاهر',
    },
    {
      id: 'REV-905',
      customerName: 'خالد حمدان',
      customerPhone: '059-8812904',
      storeName: 'أحذية النصر كلاسيك',
      orderId: 'ORD-9011',
      rating: 1,
      date: '20 أكتوبر 2026',
      comment: '*** تم حجب التعليق لاحتوائه على سباب وقذف مباشر ***',
      status: 'hidden',
      statusLabel: 'مخفي إدارياً',
      hiddenReason: 'مخالفة معايير الآداب العامة والسب الصريح',
    },
  ]);

  // Keep Review (Dismiss flag)
  const handleKeepReview = (revId) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === revId
          ? { ...r, status: 'active', statusLabel: 'معتمد وظاهر', flagReason: null }
          : r
      )
    );
    showToast('تم اعتماد التقييم والإبقاء عليه بعد التأكد من نزاهته وعدم مخالفته.');
  };

  // Open Hide Modal
  const openHideModal = (rev) => {
    setSelectedReview(rev);
    setHideReason('abusive_language');
    setHideNotes('');
    setFormError('');
    setIsHideModalOpen(true);
  };

  // Confirm Hide Review
  const handleConfirmHide = (e) => {
    e.preventDefault();
    setFormError('');

    if (!hideNotes.trim() || hideNotes.trim().length < 8) {
      setFormError('يرجى تدوين المبرر التدقيقي لحجب التقييم (8 أحرف على الأقل).');
      return;
    }

    setReviews((prev) =>
      prev.map((r) =>
        r.id === selectedReview.id
          ? {
              ...r,
              status: 'hidden',
              statusLabel: 'مخفي إدارياً',
              hiddenReason: `سبب الحجب: ${hideReason} • ملاحظة المشرف: ${hideNotes}`,
            }
          : r
      )
    );

    setIsHideModalOpen(false);
    showToast(`تم حجب التقييم #${selectedReview.id} وتوثيق القرار في سجل التدقيق A-18 بنجاح!`);
  };

  const filteredReviews = reviews.filter((r) => {
    if (activeTab === 'reported' && r.status !== 'reported') return false;
    if (activeTab === 'hidden' && r.status !== 'hidden') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        r.customerName.toLowerCase().includes(q) ||
        r.storeName.toLowerCase().includes(q) ||
        r.comment.toLowerCase().includes(q) ||
        r.orderId.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

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
      <AdminSidebar activeItem="reviews" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      {/* Main Workspace */}
      <main className="flex-1 lg:mr-64 flex flex-col min-w-0 pb-16">
        {/* Sticky Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 lg:px-8 py-3.5 border-b border-[#e6e2d8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-2 text-xs bg-[#faf8f4] border border-[#ded9cd] rounded-xl text-gray-800 placeholder:text-gray-400 focus:bg-white focus:border-[#12302b] outline-none transition-all shadow-sm"
                placeholder="بحث باسم المتجر، كود الطلب، أو نص التقييم..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/admin/audit-log"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#12302b] hover:bg-[#183d37] text-white rounded-xl text-xs font-bold shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base text-[#e9b44c]">history_edu</span>
              <span>سجل التدقيق A-18</span>
            </Link>
          </div>
        </header>

        {/* Canvas Body */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1200px] mx-auto w-full">
          {/* Breadcrumb & Title */}
          <div>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <Link to="/admin/dashboard" className="hover:text-[#12302b]">الإدارة العامة</Link>
              <span className="material-symbols-outlined text-xs">chevron_left</span>
              <span className="text-gray-400">الرقابة والجودة</span>
              <span className="material-symbols-outlined text-xs">chevron_left</span>
              <span className="text-[#12302b] font-bold">إدارة التقييمات (A-19)</span>
            </nav>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#12302b] tracking-tight">
                  سجل إدارة التقييمات والنزاهة (A-19)
                </h1>
                <p className="text-xs text-gray-500 mt-0.5">
                  مراجعة تقييمات المشترين المُبلّغ عنها وضمان مصداقية آراء العملاء في قطاع غزة.
                </p>
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                <span>موديراتور معتمد</span>
              </span>
            </div>
          </div>

          {/* Strict Integrity Policy Banner */}
          <section className="bg-white rounded-2xl border-r-4 border-[#12302b] border border-[#e4dfd3] p-4 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#12302b]/10 text-[#12302b] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">policy</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#12302b]">
                نظام حماية نزاهة التقييمات والشفافية التجارية
              </h3>
              <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                يُمنع تعديل أو تحريف نص العميل مطلقاً بموجب ميثاق منصة تبادل، ويقتصر الإجراء الإداري حصراً على{' '}
                <strong className="text-emerald-700 font-bold">الإبقاء</strong> أو{' '}
                <strong className="text-red-600 font-bold">الإخفاء</strong> مع تسجيل سبب إلزامي موثق غير قابل للمحو في سجل التدقيق والامتثال (A-18).
              </p>
            </div>
          </section>

          {/* Moderation Tabs */}
          <div className="flex items-center gap-2 border-b border-[#e6e2d8] pb-3 text-xs font-bold">
            <button
              onClick={() => setActiveTab('reported')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'reported'
                  ? 'bg-[#12302b] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#12302b] hover:bg-white'
              }`}
            >
              <span>مبلّغ عنها ({reviews.filter((r) => r.status === 'reported').length})</span>
            </button>

            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'all'
                  ? 'bg-[#12302b] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#12302b] hover:bg-white'
              }`}
            >
              <span>كافة التقييمات ({reviews.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('hidden')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'hidden'
                  ? 'bg-[#12302b] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#12302b] hover:bg-white'
              }`}
            >
              <span>مخفية إدارياً ({reviews.filter((r) => r.status === 'hidden').length})</span>
            </button>
          </div>

          {/* REVIEWS CARDS LIST */}
          <div className="space-y-4">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className={`bg-white rounded-2xl border p-5 shadow-sm space-y-3 transition-all ${
                  rev.status === 'reported' ? 'border-red-300 bg-red-50/15' : 'border-[#e4dfd3]'
                }`}
              >
                {/* Review Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#12302b] text-[#e9b44c] flex items-center justify-center font-bold text-xs shrink-0">
                      {rev.customerName.slice(0, 2)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-[#12302b]">{rev.customerName}</span>
                        <span className="text-[11px] text-gray-400 font-mono dir-ltr">{rev.customerPhone}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="flex items-center text-[#e9b44c]">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className="material-symbols-outlined text-sm"
                              style={{ fontVariationSettings: i < rev.rating ? "'FILL' 1" : "'FILL' 0" }}
                            >
                              star
                            </span>
                          ))}
                        </div>
                        <span className="text-[11px] text-gray-400 font-mono">• {rev.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto text-xs">
                    <span className="text-gray-500">المتجر:</span>
                    <strong className="text-[#12302b]">{rev.storeName}</strong>
                    <span className="text-gray-400 font-mono">#{rev.orderId}</span>
                  </div>
                </div>

                {/* Flag Alert if Reported */}
                {rev.flagReason && (
                  <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl text-red-800 text-xs flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-red-600">flag</span>
                    <span>سبب البلاغ المسجل: <strong>{rev.flagReason}</strong></span>
                  </div>
                )}

                {/* Review Comment */}
                <p className="text-xs text-gray-800 leading-relaxed bg-[#f6f3ec]/60 p-3 rounded-xl border border-gray-100">
                  "{rev.comment}"
                </p>

                {/* Hidden Notice if Hidden */}
                {rev.hiddenReason && (
                  <div className="text-[11px] text-gray-500 bg-gray-100 p-2 rounded-lg">
                    🔒 {rev.hiddenReason}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                  <span className="text-gray-400 font-mono">معرف التقييم: #{rev.id}</span>
                  <div className="flex items-center gap-2">
                    {rev.status === 'reported' ? (
                      <>
                        <button
                          onClick={() => handleKeepReview(rev.id)}
                          className="px-3.5 py-1.5 rounded-xl border border-emerald-600 text-emerald-800 hover:bg-emerald-50 font-bold transition-colors flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-sm">check</span>
                          <span>إبقاء التقييم (رفض البلاغ)</span>
                        </button>
                        <button
                          onClick={() => openHideModal(rev)}
                          className="px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition-colors flex items-center gap-1 shadow-sm"
                        >
                          <span className="material-symbols-outlined text-sm">visibility_off</span>
                          <span>إخفاء التقييم</span>
                        </button>
                      </>
                    ) : rev.status === 'hidden' ? (
                      <button
                        onClick={() => handleKeepReview(rev.id)}
                        className="px-3 py-1.5 rounded-xl bg-gray-700 hover:bg-gray-800 text-white font-bold flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        <span>إعادة إظهار التقييم</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => openHideModal(rev)}
                        className="px-3 py-1.5 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-sm">block</span>
                        <span>إخفاء إداري</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* HIDE REVIEW MODAL */}
      {isHideModalOpen && selectedReview && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-5 bg-red-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-2xl">visibility_off</span>
                <h3 className="font-bold text-base">إخفاء تقييم العميل</h3>
              </div>
              <button onClick={() => setIsHideModalOpen(false)} className="text-white/80 hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleConfirmHide} className="p-6 space-y-4 text-xs">
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 leading-relaxed">
                سيتم إخفاء نص تقييم العميل <strong>"{selectedReview.customerName}"</strong> عن الصفحة العامة للمتجر، مع تثبيت نسخة غير معدلة منه في سجل التدقيق والامتثال <strong>A-18</strong>.
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">
                  سبب الحجب الإلزامي <span className="text-red-500">*</span>
                </label>
                <select
                  value={hideReason}
                  onChange={(e) => setHideReason(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-gray-300 bg-[#faf8f4] font-bold text-[#12302b] outline-none"
                >
                  <option value="abusive_language">سب وقذف أو ألفاظ منافية للآداب العامة</option>
                  <option value="false_allegation">ادعاءات كاذبة ومضللة دون وجود طلب شراء</option>
                  <option value="personal_info_leak">نشر معلومات شخصية أو أرقام هواتف خاصة</option>
                  <option value="commercial_defamation">تشهير تجاري متعمد لصالح متجر منافس</option>
                  <option value="other">مخالفة أخرى لميثاق المنصة</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">
                  المذكرة التدقيقية لتوثيق القرار <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={hideNotes}
                  onChange={(e) => setHideNotes(e.target.value)}
                  rows="3"
                  placeholder="دوّن حيثيات قرار الحجب لإثباته في سجل الامتثال..."
                  className={`w-full p-3 rounded-xl border ${
                    formError ? 'border-red-500' : 'border-gray-300'
                  } outline-none bg-[#faf8f4] resize-none`}
                />
                {formError && <span className="text-[11px] text-red-500">{formError}</span>}
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsHideModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-sm"
                >
                  تأكيد الحجب
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
