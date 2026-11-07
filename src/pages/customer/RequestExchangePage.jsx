import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';

export default function RequestExchangePage() {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('40');
  const [selectedReason, setSelectedReason] = useState('tight_waist');
  const [customNotes, setCustomNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/customer/orders/TBD-2026-7841/exchange-approved');
  };

  return (
    <div className="bg-[#f6f3ec] min-h-screen flex flex-col antialiased selection:bg-[#1f7a6e]/20 selection:text-[#12302b] font-tajawal text-[#191c22]">
      <CustomerHeader />

      {/* Breadcrumb Strip */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#74777f]">
          <Link to="/" className="hover:text-[#12302b] transition-colors">
            الرئيسية
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <Link to="/customer/orders" className="hover:text-[#12302b] transition-colors">
            طلباتي
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <Link to="/customer/orders/TBD-2026-7841" className="text-[#12302b] font-medium">
            طلب #TBD-2026-7841
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <span className="text-[#1f7a6e] font-bold">طلب تبديل المقاس</span>
        </nav>
      </section>

      {/* Main Canvas */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-16 flex-1">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e5e7eb] mb-6 relative overflow-hidden">
          <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-[#12302b]/5 blur-2xl pointer-events-none"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#12302b]/10 text-[#12302b] px-3 py-1 rounded-full text-xs font-bold mb-3">
                <span className="material-symbols-outlined text-sm text-[#1f7a6e]">sync_alt</span>
                <span>تبديل فوري ومجاني</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12302b] tracking-tight">
                طلب تبديل المقاس مجاناً (خلال 24 ساعة)
              </h1>
              <p className="text-xs sm:text-sm text-[#576b66] mt-1.5 flex items-center gap-2 flex-wrap">
                <span>
                  رقم الطلب: <strong className="text-[#12302b] font-mono font-bold">#TBD-2026-7841</strong>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-medium text-[#12302b]">
                  <span className="material-symbols-outlined text-[16px] text-[#1f7a6e]">storefront</span>
                  بوتيك لمسة للأزياء الراقية (غزة)
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#f6f3ec] border border-[#e5e7eb] rounded-xl px-4 py-2.5 self-start md:self-auto">
              <span className="material-symbols-outlined text-[#1f7a6e] text-2xl">local_shipping</span>
              <div className="text-right">
                <div className="text-xs font-bold text-[#12302b]">توصيل البدل حتى بابك</div>
                <div className="text-[11px] text-[#576b66] font-medium">يسلّم المندوب البديل ويفحصه فوراً</div>
              </div>
            </div>
          </div>

          {/* Points Freezing Alert Card */}
          <div className="mt-6 bg-[#fff7e8] border border-[#e9b44c]/60 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#e9b44c]/20 text-[#835400] flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-2xl">lock_clock</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-bold text-[#714800]">
                  تنبيه هام لنظام نقاط الولاء والكاش باك
                </h3>
                <span className="bg-[#feb64e]/30 text-[#643f00] text-[11px] font-bold px-2 py-0.5 rounded-full">
                  تجميد مؤقت آمن
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#643f00] mt-1.5 leading-relaxed">
                عند تقديم طلب تبديل المقاس، سيتم <strong className="font-bold underline decoration-[#e9b44c]">تجميد نقاط الكاش باك المعلقة (+3,350 نقطة = 16.75 ₪)</strong> مؤقتاً في محفظتك لحين استلام ومعاينة المقاس البديل وتأكيده من قبلكم، دون أي خصم أو رسوم إضافية، لضمان أعلى مستويات الدقة والإنصاف في كسب النقاط.
              </p>
            </div>
          </div>
        </div>

        {/* Layout Grid: 2 Columns */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Form (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1 Card: Select Item & Choose New Size */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb]">
              <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#12302b] text-white flex items-center justify-center font-bold text-xs">
                    ١
                  </span>
                  <h2 className="text-base font-bold text-[#12302b]">
                    اختر القطعة المراد استبدال مقاسها
                  </h2>
                </div>
                <span className="text-xs text-[#576b66] font-medium">الطلب يحتوي على قطعتين</span>
              </div>

              {/* Product Item 1: Active Exchange Item */}
              <div className="border-2 border-[#1f7a6e] bg-[#1f7a6e]/[0.02] rounded-xl p-5 mb-5 relative transition-all">
                <div className="absolute -top-3.5 right-6 bg-[#1f7a6e] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                  <span>تم تحديدها للتبديل</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-[#f6f3ec] shrink-0 border border-[#e5e7eb]">
                      <img
                        className="w-full h-full object-cover"
                        alt="فستان حرير شامبين راقي"
                        src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&auto=format&fit=crop&q=80"
                      />
                    </div>
                    <div>
                      <div className="inline-block bg-[#12302b]/10 text-[#12302b] text-[11px] font-bold px-2 py-0.5 rounded mb-1">
                        أزياء سهرة وفساتين
                      </div>
                      <h3 className="text-base font-bold text-[#12302b]">
                        فستان حرير شامبين راقي
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-[#576b66]">
                        <span>السعر: <strong className="text-[#12302b] font-bold">190.00 ₪</strong></span>
                        <span>•</span>
                        <span>المقاس المستلم حالياً: <strong className="text-[#ba1a1a] font-bold">38 (M)</strong></span>
                      </div>
                    </div>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-[#1f7a6e] text-[#1f7a6e] text-xs font-bold select-none">
                    <input checked readOnly className="rounded text-[#1f7a6e] h-4 w-4" type="checkbox" />
                    <span>تبديل هذا المنتج</span>
                  </label>
                </div>

                {/* Size Selector Sub-card */}
                <div className="mt-6 pt-5 border-t border-[#e5e7eb] bg-white rounded-lg p-4 border border-[#e5e7eb]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <label className="text-xs font-bold text-[#12302b] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-[#1f7a6e]">straighten</span>
                      <span>اختر المقاس البديل المطلوب:</span>
                    </label>
                    <span className="text-xs text-[#004328] font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>المخزون محدث ومحجوز لصالحك فور الاختيار</span>
                    </span>
                  </div>

                  {/* Radio Options for Sizes */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Size 36 */}
                    <label
                      onClick={() => setSelectedSize('36')}
                      className={`relative flex flex-col p-3 rounded-xl border cursor-pointer transition-all ${
                        selectedSize === '36'
                          ? 'border-2 border-[#1f7a6e] bg-[#1f7a6e]/5 shadow-xs'
                          : 'border-[#e5e7eb] hover:border-[#1f7a6e] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#12302b]">36 - S</span>
                        <input
                          type="radio"
                          name="new_size"
                          value="36"
                          checked={selectedSize === '36'}
                          onChange={() => setSelectedSize('36')}
                          className="text-[#1f7a6e]"
                        />
                      </div>
                      <span className="text-[11px] text-emerald-600 font-bold mt-1.5 flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[13px]">check_circle</span>
                        <span>متوفر في مخزون المتجر</span>
                      </span>
                    </label>

                    {/* Size 40 (Recommended) */}
                    <label
                      onClick={() => setSelectedSize('40')}
                      className={`relative flex flex-col p-3 rounded-xl border cursor-pointer transition-all ${
                        selectedSize === '40'
                          ? 'border-2 border-[#1f7a6e] bg-[#1f7a6e]/5 shadow-xs'
                          : 'border-[#e5e7eb] hover:border-[#1f7a6e] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#1f7a6e] text-base">40 - L</span>
                        <input
                          type="radio"
                          name="new_size"
                          value="40"
                          checked={selectedSize === '40'}
                          onChange={() => setSelectedSize('40')}
                          className="text-[#1f7a6e]"
                        />
                      </div>
                      <span className="text-[11px] text-emerald-600 font-bold mt-1.5 flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[13px]">check_circle</span>
                        <span>متوفر (موصى به للراحة)</span>
                      </span>
                    </label>

                    {/* Size 42 */}
                    <label
                      onClick={() => setSelectedSize('42')}
                      className={`relative flex flex-col p-3 rounded-xl border cursor-pointer transition-all ${
                        selectedSize === '42'
                          ? 'border-2 border-[#1f7a6e] bg-[#1f7a6e]/5 shadow-xs'
                          : 'border-[#e5e7eb] hover:border-[#1f7a6e] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#12302b]">42 - XL</span>
                        <input
                          type="radio"
                          name="new_size"
                          value="42"
                          checked={selectedSize === '42'}
                          onChange={() => setSelectedSize('42')}
                          className="text-[#1f7a6e]"
                        />
                      </div>
                      <span className="text-[11px] text-emerald-600 font-bold mt-1.5 flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[13px]">check_circle</span>
                        <span>متوفر في مخزون المتجر</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Step 2: Reason for Exchange */}
              <div className="space-y-4 pt-4 border-t border-[#e5e7eb]">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#12302b] text-white flex items-center justify-center font-bold text-xs">
                    ٢
                  </span>
                  <h3 className="text-base font-bold text-[#12302b]">سبب طلب التبديل</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => setSelectedReason('tight_waist')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs font-bold ${
                      selectedReason === 'tight_waist'
                        ? 'border-2 border-[#1f7a6e] bg-[#1f7a6e]/5 text-[#1f7a6e]'
                        : 'border-[#e5e7eb] hover:border-[#1f7a6e] text-[#12302b]'
                    }`}
                  >
                    <span>المقاس ضيق عند الخصر والصدر</span>
                    <input
                      type="radio"
                      name="reason"
                      value="tight_waist"
                      checked={selectedReason === 'tight_waist'}
                      onChange={() => setSelectedReason('tight_waist')}
                      className="text-[#1f7a6e]"
                    />
                  </label>

                  <label
                    onClick={() => setSelectedReason('too_loose')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs font-bold ${
                      selectedReason === 'too_loose'
                        ? 'border-2 border-[#1f7a6e] bg-[#1f7a6e]/5 text-[#1f7a6e]'
                        : 'border-[#e5e7eb] hover:border-[#1f7a6e] text-[#12302b]'
                    }`}
                  >
                    <span>المقاس واسع وأرغب بمقاس أصغر</span>
                    <input
                      type="radio"
                      name="reason"
                      value="too_loose"
                      checked={selectedReason === 'too_loose'}
                      onChange={() => setSelectedReason('too_loose')}
                      className="text-[#1f7a6e]"
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#12302b] mb-1">
                    ملاحظات إضافية للمتجر والمندوب (اختياري):
                  </label>
                  <textarea
                    rows="3"
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    placeholder="أضيفي أي تعليمات خاصة بالتسليم أو المقاس..."
                    className="w-full rounded-xl border border-[#e5e7eb] bg-[#f6f3ec]/40 p-3 text-xs text-[#12302b] focus:border-[#1f7a6e] focus:outline-none"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Summary & Confirmation (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm space-y-4">
              <h3 className="text-base font-bold text-[#12302b] pb-3 border-b border-[#e5e7eb]">
                ملخص طلب التبديل
              </h3>

              <div className="space-y-3 text-xs text-[#576b66]">
                <div className="flex justify-between items-center">
                  <span>القطعة:</span>
                  <span className="font-bold text-[#12302b]">فستان حرير شامبين</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>المقاس الحالي:</span>
                  <span className="font-bold text-[#ba1a1a]">38 (M)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>المقاس الجديد المطلوب:</span>
                  <span className="font-bold text-[#1f7a6e] text-sm">{selectedSize}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>رسوم التبديل والتوصيل:</span>
                  <span className="font-bold text-[#005232] bg-[#71dba2]/20 px-2 py-0.5 rounded">
                    مجاناً 100%
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#e5e7eb]">
                  <span>تأكيد الموعد المتوقع:</span>
                  <span className="font-bold text-[#12302b]">خلال 24 ساعة</span>
                </div>
              </div>

              <div className="p-3 bg-[#fff7e8] rounded-xl border border-[#e9b44c]/50 text-right">
                <span className="text-[11px] text-[#714800] leading-relaxed block">
                  🔒 <strong>تجميد النقاط:</strong> ستظل نقاط الكاش باك (3,350 نقطة) مجمدة مؤقتاً لحين استلام ومعاينة المقاس البديل مع المندوب.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#12302b] to-[#1f7a6e] hover:from-[#1f7a6e] hover:to-[#12302b] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>اعتماد وإرسال طلب التبديل</span>
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </button>

              <Link
                to="/customer/orders/TBD-2026-7841"
                className="w-full py-2.5 rounded-xl border border-[#e5e7eb] hover:bg-[#f6f3ec] text-[#576b66] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>العودة لتفاصيل الطلب</span>
              </Link>
            </div>
          </aside>
        </form>
      </main>

      <Footer />
    </div>
  );
}
