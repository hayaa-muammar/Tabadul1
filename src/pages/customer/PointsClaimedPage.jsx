import React from 'react';
import { Link } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';

export default function PointsClaimedPage() {
  return (
    <div className="bg-[#f6f3ec] text-[#191c22] antialiased min-h-screen flex flex-col justify-between font-tajawal selection:bg-[#e9b44c]/30 selection:text-[#12302b]">
      <CustomerHeader />

      {/* ==================== MAIN CONTENT AREA ==================== */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-8">
        {/* 1. CELEBRATION HERO BANNER */}
        <section
          className="relative overflow-hidden rounded-2xl p-6 md:p-8 shadow-md border border-[#c4e4d8] text-[#12302b]"
          style={{ background: 'linear-gradient(135deg, rgb(238, 247, 243) 0%, rgb(225, 241, 235) 100%)' }}
        >
          <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-[#71dba2]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute right-1/4 -top-12 w-48 h-48 bg-[#a8e6cf]/30 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d0ece1] border border-[#a2d8c3] backdrop-blur-md rounded-full text-[#0a352a] text-xs font-bold">
                <span className="material-symbols-outlined text-base">verified</span>
                <span>تأكيد استلام وفحص الطلب #TBD-2026-7841</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12302b] flex items-center gap-2 flex-wrap">
                <span>🎉 مبروووك سارة! تم إيداع نقاطك بنجاح في محفظتك</span>
              </h1>
              <p className="text-sm sm:text-base text-[#1f4e45] leading-relaxed">
                تم تحويل <span className="text-[#004328] font-bold text-lg sm:text-xl">+3,350 نقطة</span> كاش باك (
                <span className="text-[#12302b] font-bold">16.75 ₪</span>) لحسابك بعد إتمام فحص واستلام فستان الحرير وحذاء الكعب العالي من{' '}
                <span className="text-[#0a352a] font-bold underline decoration-[#feb64e] decoration-2 underline-offset-4">
                  بوتيك لمسة للأزياء الراقية
                </span>
                .
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs">
                <div className="flex items-center gap-1.5 text-[#004328] font-medium bg-[#d4ede3] px-3 py-1.5 rounded-lg border border-[#a5dcc7]">
                  <span className="material-symbols-outlined text-sm">published_with_changes</span>
                  <span>ضمان تبديل المقاس المجاني سارٍ لمدة 24 ساعة</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#2c5a50] font-medium">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>تاريخ الإيداع: اليوم، 03:15 مساءً</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <Link
                to="/stores"
                className="px-6 py-3.5 bg-[#feb64e] hover:bg-[#ffddb5] text-[#2a1800] font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group active:scale-95 cursor-pointer"
              >
                <span>استبدل نقاطك الآن في المتاجر</span>
                <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
              </Link>
              <Link
                to="/customer/orders/TBD-2026-7841"
                className="px-6 py-3.5 bg-white/80 hover:bg-white text-[#12302b] font-semibold text-sm rounded-xl border border-[#b8dfd0] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">receipt_long</span>
                <span>عرض تفاصيل الطلب</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. WALLET FINANCIAL BALANCE METRICS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Available Points Hero */}
          <div className="bg-white p-5 rounded-2xl border border-[#e1dacb] shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs text-[#576b66] block mb-1">الرصيد الإجمالي المتاح</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[#12302b]">5,750</span>
                  <span className="text-xs font-bold text-[#835400]">نقطة</span>
                </div>
                <p className="text-xs text-[#576b66] mt-0.5">
                  ما يعادل <strong className="text-[#12302b] font-bold">28.75 ₪</strong> نقداً في مشترياتك
                </p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#ffddb5]/50 flex items-center justify-center text-[#835400]">
                <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f2f3fc] flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#005232] bg-[#71dba2]/20 px-2.5 py-1 rounded-full">
                <span className="material-symbols-outlined text-xs">arrow_upward</span>
                <span>+3,350 نقطة اليوم</span>
              </span>
              <Link to="/customer/wallet" className="text-[#12302b] hover:text-[#835400] text-xs font-bold flex items-center gap-0.5">
                <span>استبدال</span>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Total Savings to Date */}
          <div className="bg-white p-5 rounded-2xl border border-[#e1dacb] shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs text-[#576b66] block mb-1">إجمالي وفر سارة حتى الآن</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[#12302b]">385.00</span>
                  <span className="text-xs font-bold text-[#005232]">₪</span>
                </div>
                <p className="text-xs text-[#576b66] mt-0.5">
                  أكثر من 77,000 نقطة مجمّعة ومستبدلة
                </p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#71dba2]/15 flex items-center justify-center text-[#005232]">
                <span className="material-symbols-outlined text-2xl">savings</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f2f3fc] flex items-center gap-1.5 text-xs text-[#576b66]">
              <span className="material-symbols-outlined text-sm text-[#004328]">check_circle</span>
              <span>وفّرتِ 14% من مشترياتك الإجمالية</span>
            </div>
          </div>

          {/* Card 3: Pending Points */}
          <div className="bg-white p-5 rounded-2xl border border-[#e1dacb] shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs text-[#576b66] block mb-1">النقاط المعلقة قيد المراجعة</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[#12302b]">0</span>
                  <span className="text-xs font-medium text-[#74777f]">نقطة</span>
                </div>
                <p className="text-xs text-[#576b66] mt-0.5">
                  تم تحرير كافة النقاط المستحقة بنجاح
                </p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#f2f3fc] flex items-center justify-center text-[#576b66]">
                <span className="material-symbols-outlined text-2xl">lock_open</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f2f3fc] flex items-center gap-1.5 text-xs text-[#005232] font-semibold">
              <span className="material-symbols-outlined text-sm">done_all</span>
              <span>لا توجد أي مبالغ أو نقاط معلقة</span>
            </div>
          </div>

          {/* Card 4: Expiration & Tier Status */}
          <div className="bg-white p-5 rounded-2xl border border-[#e1dacb] shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs text-[#576b66] block mb-1">صلاحية الرصيد</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#12302b]">6 أشهر</span>
                </div>
                <p className="text-xs text-[#576b66] mt-0.5">
                  تتجدد تلقائياً مع كل عملية شراء جديدة
                </p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#ffddb5]/40 flex items-center justify-center text-[#835400]">
                <span className="material-symbols-outlined text-2xl">event_repeat</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f2f3fc] flex items-center justify-between text-xs">
              <span className="text-[#576b66]">المستوى الحالي:</span>
              <span className="font-bold text-[#835400] flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">grade</span>
                <span>عضو ذهبي دائم</span>
              </span>
            </div>
          </div>
        </section>

        {/* 3. MAIN SECTION: LEDGER & RECENT ACTIVITY FEED */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Transactions Activity Feed (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#12302b]">سجل حركات المحفظة والنقاط</h2>
                <p className="text-xs text-[#576b66]">كشف حساب مفصل بعمليات الإيداع، الخصم، ومكافآت المشتريات</p>
              </div>
              <button className="text-[#576b66] hover:text-[#12302b] text-xs font-semibold flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#e1dacb]">
                <span className="material-symbols-outlined text-base">filter_list</span>
                <span>تصفية الحركات</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-[#e1dacb] shadow-sm divide-y divide-[#e1dacb]">
              {/* Transaction 1: Just Deposited */}
              <div className="p-4 flex items-center justify-between gap-4 bg-[#f2fdf7]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#71dba2]/30 text-[#005232] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#12302b]">مكافأة كاش باك (طلب #TBD-2026-7841)</h4>
                      <span className="px-2 py-0.5 rounded-full bg-[#71dba2]/20 text-[#005232] text-[10px] font-bold">
                        مكتمل الآن
                      </span>
                    </div>
                    <p className="text-xs text-[#576b66]">بوتيك لمسة للأزياء • فستان حرير وحذاء كعب سهرة</p>
                    <span className="text-[11px] text-[#74777f]">اليوم، 03:15 م</span>
                  </div>
                </div>
                <div className="text-left shrink-0">
                  <span className="text-base font-extrabold text-[#005232] block">+3,350 نقطة</span>
                  <span className="text-xs text-[#576b66] font-medium">(+16.75 ₪)</span>
                </div>
              </div>

              {/* Transaction 2: Past Redemption */}
              <div className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">remove_circle</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#12302b]">استبدال قسيمة خصم مشتريات</h4>
                      <span className="px-2 py-0.5 rounded-full bg-[#f2f3fc] text-[#576b66] text-[10px] font-medium">
                        دار الياقوت
                      </span>
                    </div>
                    <p className="text-xs text-[#576b66]">خصم نقدي مباشر عند كاونتر المتجر برقم الجوال</p>
                    <span className="text-[11px] text-[#74777f]">12 مايو 2026</span>
                  </div>
                </div>
                <div className="text-left shrink-0">
                  <span className="text-base font-extrabold text-[#ba1a1a] block">-1,000 نقطة</span>
                  <span className="text-xs text-[#576b66] font-medium">(-5.00 ₪)</span>
                </div>
              </div>

              {/* Transaction 3: Welcome Bonus */}
              <div className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ffddb5]/40 text-[#835400] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">card_giftcard</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#12302b]">مكافأة ترحيبية بالانضمام لمنصة تبادل</h4>
                      <span className="px-2 py-0.5 rounded-full bg-[#ffddb5]/30 text-[#835400] text-[10px] font-bold">
                        هدية التسجيل
                      </span>
                    </div>
                    <p className="text-xs text-[#576b66]">مكافأة توثيق رقم الجوال وتفعيل الحساب</p>
                    <span className="text-[11px] text-[#74777f]">1 مايو 2026</span>
                  </div>
                </div>
                <div className="text-left shrink-0">
                  <span className="text-base font-extrabold text-[#835400] block">+2,000 نقطة</span>
                  <span className="text-xs text-[#576b66] font-medium">(+10.00 ₪)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Instant Voucher / Redemption catalog sidebar (1 Col) */}
          <aside className="space-y-4">
            <h3 className="text-lg font-bold text-[#12302b]">خيارات الاستبدال الفوري</h3>
            <div className="bg-white rounded-2xl border border-[#e1dacb] p-5 shadow-sm space-y-4">
              <p className="text-xs text-[#576b66] leading-relaxed">
                استبدلي نقاطك مباشرة بكوبونات خصم نقدية تُطبّق فورياً عند الدفع في أي متجر شريك:
              </p>

              {/* Voucher 1 */}
              <div className="p-3 rounded-xl border border-[#e1dacb] hover:border-[#1f7a6e] transition-all bg-[#f6f3ec]/40 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-[#12302b] block">قسيمة خصم 10.00 ₪</span>
                  <span className="text-xs text-[#835400] font-medium">تكلفة: 2,000 نقطة</span>
                </div>
                <button
                  onClick={() => alert('تم توليد كود القسيمة: TAB-10-DISCOUNT وتم إرساله لجوالك!')}
                  className="px-3 py-1.5 rounded-lg bg-[#12302b] text-white text-xs font-bold hover:bg-[#1f7a6e] transition-colors cursor-pointer"
                >
                  استبدال
                </button>
              </div>

              {/* Voucher 2 */}
              <div className="p-3 rounded-xl border-2 border-[#1f7a6e] bg-[#1f7a6e]/5 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-[#1f7a6e] block">قسيمة خصم 25.00 ₪</span>
                  <span className="text-xs text-[#835400] font-bold">تكلفة: 5,000 نقطة (متاح)</span>
                </div>
                <button
                  onClick={() => alert('تم توليد كود القسيمة: TAB-25-DISCOUNT وتم إرساله لجوالك!')}
                  className="px-3 py-1.5 rounded-lg bg-[#1f7a6e] text-white text-xs font-bold hover:bg-[#18453e] transition-colors cursor-pointer"
                >
                  استبدال
                </button>
              </div>

              {/* Voucher 3 */}
              <div className="p-3 rounded-xl border border-[#e1dacb] opacity-60 bg-[#f6f3ec]/40 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-[#12302b] block">قسيمة خصم 50.00 ₪</span>
                  <span className="text-xs text-[#74777f] font-medium">تكلفة: 10,000 نقطة (ينقص 4,250)</span>
                </div>
                <span className="text-xs text-[#74777f] font-bold">غير متاح</span>
              </div>

              <div className="pt-2 border-t border-[#e1dacb]">
                <Link
                  to="/stores"
                  className="w-full py-2.5 rounded-xl bg-[#f6f3ec] hover:bg-[#ede8dd] text-[#12302b] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-[#e1dacb]"
                >
                  <span className="material-symbols-outlined text-base text-[#1f7a6e]">storefront</span>
                  <span>تصفح المتاجر الشريكة المتاحة</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
