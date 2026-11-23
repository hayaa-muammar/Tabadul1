import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';

export default function CancelOrderPage() {
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason] = useState('courier_delay');
  const [notes, setNotes] = useState('');

  const handleCancelSubmit = (e) => {
    e.preventDefault();
    navigate('/customer/orders/TBD-2026-7841/cancel-success');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#191c22] antialiased selection:bg-[#ffdad6] selection:text-[#ba1a1a] font-tajawal">
      <CustomerHeader />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-[#576b66] overflow-x-auto whitespace-nowrap pb-1">
          <Link to="/shopper" className="hover:text-[#12302b] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>الرئيسية</span>
          </Link>
          <span className="material-symbols-outlined text-[14px] text-[#c4c6cf]">chevron_left</span>
          <Link to="/customer/profile" className="hover:text-[#12302b] transition-colors">
            حسابي
          </Link>
          <span className="material-symbols-outlined text-[14px] text-[#c4c6cf]">chevron_left</span>
          <Link to="/customer/orders" className="hover:text-[#12302b] transition-colors">
            طلباتي
          </Link>
          <span className="material-symbols-outlined text-[14px] text-[#c4c6cf]">chevron_left</span>
          <Link to="/customer/orders/TBD-2026-7841" className="hover:text-[#12302b] transition-colors font-medium">
            طلب #TBD-2026-7841
          </Link>
          <span className="material-symbols-outlined text-[14px] text-[#c4c6cf]">chevron_left</span>
          <span className="text-[#ba1a1a] font-bold bg-[#ffdad6]/60 px-2.5 py-0.5 rounded-full">
            إلغاء الطلب واسترداد المبلغ
          </span>
        </nav>

        {/* Header Banner: Context & Warning */}
        <div className="mb-8 bg-gradient-to-l from-white via-white to-[#fff9f8] p-6 rounded-2xl border border-[#ba1a1a]/20 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#ba1a1a]/10 text-[#ba1a1a] flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[28px]">assignment_return</span>
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-xl sm:text-2xl text-[#12302b] font-bold">طلب إلغاء الشحنة واسترداد المحفظة</h1>
                <span className="bg-[#e6e8f0] text-[#43474e] text-xs font-semibold px-2.5 py-1 rounded-md">
                  رقم الشحنة: TBD-2026-7841
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#576b66] mt-1 max-w-2xl leading-relaxed">
                يرجى تحديد سبب الإلغاء لمساعدتنا في تحسين التجربة. سيتم إيداع كامل ثمن المشتريات مباشرة في محفظة تبادل بمجرد إرجاع الطرد.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#1f7a6e]/10 text-[#1f7a6e] px-4 py-2.5 rounded-xl border border-[#1f7a6e]/20 shrink-0 self-stretch md:self-auto justify-center">
            <span className="material-symbols-outlined text-[20px]">verified_user</span>
            <span className="text-xs sm:text-sm font-bold">حماية تبادل Escrow مفعّلة</span>
          </div>
        </div>

        {/* MAIN TWO-COLUMN WORKFLOW LAYOUT */}
        <form onSubmit={handleCancelSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Cancellation Content (7 cols) */}
          <section className="lg:col-span-7 flex flex-col gap-6">
            {/* Step 1: Cancellation Reason Selector */}
            <div className="bg-white rounded-2xl p-6 border border-[#e1dacb] shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#f2f3fc]">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#12302b] text-white flex items-center justify-center font-bold text-xs">
                    ١
                  </span>
                  <h2 className="text-base font-bold text-[#12302b]">ما هو سبب رغبتك في إلغاء هذا الطلب؟</h2>
                </div>
                <span className="text-xs text-[#ba1a1a] font-medium">* مطلوب</span>
              </div>

              <div className="space-y-3">
                {/* Reason Option 1 */}
                <label
                  onClick={() => setSelectedReason('courier_delay')}
                  className={`group relative flex items-start p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    selectedReason === 'courier_delay'
                      ? 'border-[#12302b] bg-[#12302b]/5'
                      : 'border-[#e6e8f0] hover:border-[#12302b]/40 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="cancel_reason"
                    value="courier_delay"
                    checked={selectedReason === 'courier_delay'}
                    onChange={() => setSelectedReason('courier_delay')}
                    className="mt-1 h-4 w-4 text-[#12302b]"
                  />
                  <div className="mr-3 flex-1">
                    <span className="text-sm font-bold text-[#191c22] block">
                      تأخر المندوب عن الموعد المتفق عليه
                    </span>
                    <span className="text-xs text-[#576b66] mt-0.5 block">
                      انقضت المهلة الزمنية للتوصيل دون تحديث دقيق لموقع الشحنة من السائق.
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-[#576b66] mt-0.5">schedule</span>
                </label>

                {/* Reason Option 2 */}
                <label
                  onClick={() => setSelectedReason('changed_mind')}
                  className={`group relative flex items-start p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    selectedReason === 'changed_mind'
                      ? 'border-[#12302b] bg-[#12302b]/5'
                      : 'border-[#e6e8f0] hover:border-[#12302b]/40 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="cancel_reason"
                    value="changed_mind"
                    checked={selectedReason === 'changed_mind'}
                    onChange={() => setSelectedReason('changed_mind')}
                    className="mt-1 h-4 w-4 text-[#12302b]"
                  />
                  <div className="mr-3 flex-1">
                    <span className="text-sm font-bold text-[#191c22] block">
                      تغيرت رغبتي في شراء القطع
                    </span>
                    <span className="text-xs text-[#576b66] mt-0.5 block">
                      لم أعد بحاجة للطلب أو وجدت بديلاً مفضلاً قبل فتح الطرد واستلامه.
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-[#576b66] mt-0.5">change_circle</span>
                </label>

                {/* Reason Option 3 */}
                <label
                  onClick={() => setSelectedReason('wrong_choice')}
                  className={`group relative flex items-start p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    selectedReason === 'wrong_choice'
                      ? 'border-[#12302b] bg-[#12302b]/5'
                      : 'border-[#e6e8f0] hover:border-[#12302b]/40 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="cancel_reason"
                    value="wrong_choice"
                    checked={selectedReason === 'wrong_choice'}
                    onChange={() => setSelectedReason('wrong_choice')}
                    className="mt-1 h-4 w-4 text-[#12302b]"
                  />
                  <div className="mr-3 flex-1">
                    <span className="text-sm font-bold text-[#191c22] block">
                      طلبت عن طريق الخطأ / مقاس غير مناسب
                    </span>
                    <span className="text-xs text-[#576b66] mt-0.5 block">
                      تم إدخال تفاصيل المقاس أو اللون بالخطأ أثناء إتمام عملية الشراء.
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-[#576b66] mt-0.5">straighten</span>
                </label>

                {/* Reason Option 4 */}
                <label
                  onClick={() => setSelectedReason('other')}
                  className={`group relative flex items-start p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    selectedReason === 'other'
                      ? 'border-[#12302b] bg-[#12302b]/5'
                      : 'border-[#e6e8f0] hover:border-[#12302b]/40 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="cancel_reason"
                    value="other"
                    checked={selectedReason === 'other'}
                    onChange={() => setSelectedReason('other')}
                    className="mt-1 h-4 w-4 text-[#12302b]"
                  />
                  <div className="mr-3 flex-1">
                    <span className="text-sm font-bold text-[#191c22] block">
                      سبب آخر مخصص
                    </span>
                    <span className="text-xs text-[#576b66] mt-0.5 block">
                      يرجى توضيح الملاحظات لمساعدتنا في معالجة طلبك بدقة وسرعة.
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-[#576b66] mt-0.5">edit_note</span>
                </label>

                <div className="pt-2">
                  <label className="block text-xs font-semibold text-[#12302b] mb-1.5" htmlFor="cancellation-notes">
                    ملاحظات إضافية للفريق والمندوب (اختياري):
                  </label>
                  <textarea
                    id="cancellation-notes"
                    rows="3"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="اكتبي تفاصيل إضافية إن أردت توضيح أي نقطة للمتجر أو السائق..."
                    className="w-full rounded-xl border border-[#e1dacb] bg-[#f6f3ec]/40 p-3 text-xs text-[#12302b] focus:border-[#12302b] focus:outline-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Step 2: Financial Calculation Breakdown */}
            <div className="bg-white rounded-2xl p-6 border border-[#e1dacb] shadow-sm">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#f2f3fc]">
                <span className="w-7 h-7 rounded-full bg-[#12302b] text-white flex items-center justify-center font-bold text-xs">
                  ٢
                </span>
                <h2 className="text-base font-bold text-[#12302b]">الحسبة المالية الشفافة للإلغاء والاسترداد</h2>
              </div>

              <div className="space-y-3.5">
                {/* Item 1 */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#1f7a6e]/5 border border-[#1f7a6e]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1f7a6e]/15 text-[#1f7a6e] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">payments</span>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#191c22] block">المبلغ المسترد للمحفظة</span>
                      <span className="text-xs text-[#1f7a6e] font-medium">استرداد كامل لقيمة البضاعة (100%)</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-base font-bold text-[#1f7a6e] block">335.00 ₪</span>
                    <span className="text-[11px] text-[#576b66]">كامل قيمة الفاتورة</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#f2f3fc] border border-[#e6e8f0]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#e1dacb] text-[#43474e] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#191c22] block">رسوم التوصيل والخدمة اللوجستية</span>
                      <span className="text-xs text-[#576b66]">تعويض مباشر لمشوار المندوب عند باب المنزل</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-bold text-[#191c22] block">15.00 ₪</span>
                    <span className="text-[11px] text-[#576b66]">تُدفع نقداً للمندوب أو تُخصم</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#ffdad6]/40 border border-[#ba1a1a]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#ba1a1a]/15 text-[#ba1a1a] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">stars</span>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#191c22] block">نقاط الكاش باك المعلقة</span>
                      <span className="text-xs text-[#ba1a1a] font-medium">إلغاء نقاط المكافآت المرتبطة بالطلب</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-bold text-[#ba1a1a] block">-3,350 نقطة</span>
                    <span className="text-[11px] text-[#ba1a1a]">تُلغى من السجل</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar Summary (5 cols) */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#e1dacb] shadow-sm space-y-4">
              <h3 className="text-base font-bold text-[#12302b] pb-3 border-b border-[#e1dacb]">
                بيانات الطلب المراد إلغاؤه
              </h3>

              <div className="space-y-3 text-xs text-[#576b66]">
                <div className="flex justify-between items-center">
                  <span>المتجر:</span>
                  <span className="font-bold text-[#12302b]">بوتيك لمسة للأزياء</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>القطع:</span>
                  <span className="font-bold text-[#12302b]">فستان حرير (190 ₪) + كعب سهرة (145 ₪)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>مندوب التوصيل الميداني:</span>
                  <span className="font-bold text-[#12302b]">محمود الناجي (0599-000000)</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#e1dacb]">
                  <span className="text-sm font-bold text-[#12302b]">صافي المسترد لمحفظتك:</span>
                  <span className="text-lg font-black text-[#1f7a6e]">335.00 ₪</span>
                </div>
              </div>

              <div className="p-3 bg-[#ffdad6]/40 rounded-xl border border-[#ba1a1a]/30 text-right">
                <span className="text-[11px] text-[#ba1a1a] leading-relaxed block font-medium">
                  ⚠️ <strong>تنبيه:</strong> عند تأكيد الإلغاء، يرجى تسليم الطرد سليماً للمندوب وتسليمه رسوم المشوار (15 ₪) نقداً، وسيُودع المبلغ المسترد (335 ₪) فوراً في محفظتك الإلكترونية.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#ba1a1a] hover:bg-[#93000a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">cancel</span>
                <span>تأكيد إلغاء الطلب واسترداد الرصيد</span>
              </button>

              <Link
                to="/customer/orders/TBD-2026-7841"
                className="w-full py-2.5 rounded-xl border border-[#e1dacb] hover:bg-[#f6f3ec] text-[#576b66] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>التراجع والاحتفاظ بالطلب</span>
              </Link>
            </div>
          </aside>
        </form>
      </main>

      <Footer />
    </div>
  );
}
