import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function MerchantWalletPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const transactions = [
    {
      id: 'TRX-9481',
      date: '14 أكتوبر 2026',
      type: 'sale',
      typeLabel: 'مبيعات طلب #TB-8402 (كود PIN)',
      amount: '+180.00 ₪',
      status: 'completed',
      statusLabel: 'مكتمل ومودع',
      fee: '-5.40 ₪ (3%)',
      net: '174.60 ₪'
    },
    {
      id: 'TRX-9475',
      date: '12 أكتوبر 2026',
      type: 'payout',
      typeLabel: 'تحويل أسبوعي إلى بنك فلسطين',
      amount: '-2,500.00 ₪',
      status: 'completed',
      statusLabel: 'تم التحويل',
      fee: '0.00 ₪',
      net: '2,500.00 ₪'
    },
    {
      id: 'TRX-9460',
      date: '10 أكتوبر 2026',
      type: 'sale',
      typeLabel: 'مبيعات طلب #TB-8390',
      amount: '+320.00 ₪',
      status: 'completed',
      statusLabel: 'مكتمل ومودع',
      fee: '-9.60 ₪ (3%)',
      net: '310.40 ₪'
    },
    {
      id: 'TRX-9442',
      date: '08 أكتوبر 2026',
      type: 'escrow',
      typeLabel: 'حجز أمانة مؤقت لطلب #TB-8380',
      amount: '+240.00 ₪',
      status: 'pending',
      statusLabel: 'معلّق (Escrow)',
      fee: 'معلّقة',
      net: 'قيد التسليم'
    }
  ];

  const filteredTransactions = transactions.filter((t) => {
    if (filter === 'all') return true;
    if (filter === 'sales') return t.type === 'sale';
    if (filter === 'payouts') return t.type === 'payout';
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8">
        {/* Page Title & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl sm:text-2xl font-bold text-[#12302B]">المحفظة والتحويلات المالية</h1>
              <span className="bg-[#1F7A6E]/10 text-[#1F7A6E] text-xs font-bold px-3 py-0.5 rounded-full border border-[#1F7A6E]/20">
                حساب تجاري فعال
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              متابعة الأرصدة المتاحة، الحجوزات المالية المؤقتة (ضمان الأمان)، ودورات السداد الآلية لحسابك البنكي.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/merchant/wallet/transfers"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E1DACB] text-[#12302B] hover:bg-[#F6F3EC] text-xs font-bold shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">history</span>
              <span>سجل التحويلات السابقة</span>
            </Link>

            <button
              onClick={() => navigate('/merchant/wallet/withdraw')}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#12302B] text-white hover:bg-[#1F7A6E] text-xs font-bold shadow-sm active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">send_money</span>
              <span>طلب سحب رصيد فوري</span>
            </button>
          </div>
        </div>

        {/* 1. FINANCIAL SUMMARY HERO CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Card 1: Ready to Transfer */}
          <div className="bg-gradient-to-br from-[#12302B] to-[#1F7A6E] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden flex flex-col justify-between border border-[#12302B]">
            <div className="flex items-center justify-between mb-3 relative z-10">
              <span className="text-xs text-white/80">الرصيد الجاهز للتحويل الفوري</span>
              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#E9B44C]">
                <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
              </span>
            </div>
            <div className="relative z-10 mb-4">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-white">4,850.00</span>
                <span className="text-base text-[#E9B44C] font-bold">₪</span>
              </div>
              <span className="text-xs text-white/70 block mt-1">متاح للصرف والتحويل الآن بدون قيود</span>
            </div>
            <button
              onClick={() => navigate('/merchant/wallet/withdraw')}
              className="w-full py-2.5 px-4 rounded-xl bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] text-xs font-black flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 relative z-10"
            >
              <span className="material-symbols-outlined text-[18px]">payments</span>
              <span>تحويل الرصيد الآن</span>
            </button>
          </div>

          {/* Card 2: Escrow / Pending */}
          <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500">الرصيد المعلّق (أمانة Escrow)</span>
              <span className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-[#835400] border border-amber-200">
                <span className="material-symbols-outlined text-[18px]">lock_clock</span>
              </span>
            </div>
            <div className="mb-3">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-[#12302B]">1,320.00</span>
                <span className="text-base font-bold text-[#12302B]">₪</span>
              </div>
              <div className="flex items-center gap-1.5 mt-2 bg-[#F6F3EC] px-2.5 py-1.5 rounded-lg border border-[#E1DACB] text-xs text-gray-600">
                <span className="material-symbols-outlined text-sm text-[#835400]">hourglass_top</span>
                <span>بانتظار تأكيد الاستلام لـ 5 طلبات جارية</span>
              </div>
            </div>
            <div className="text-[11px] text-gray-500 border-t border-gray-100 pt-2 flex items-center justify-between">
              <span>يتحرر تلقائياً بكود PIN</span>
              <span className="material-symbols-outlined text-xs">info</span>
            </div>
          </div>

          {/* Card 3: Collected Sales */}
          <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500">مبيعات هذا الشهر المحصلة</span>
              <span className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 border border-emerald-200">
                <span className="material-symbols-outlined text-[18px]">trending_up</span>
              </span>
            </div>
            <div className="mb-3">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-[#12302B]">14,920.00</span>
                <span className="text-base font-bold text-[#12302B]">₪</span>
              </div>
              <div className="flex items-center gap-1 text-[#1F7A6E] text-xs font-bold mt-2">
                <span className="material-symbols-outlined text-sm">north_east</span>
                <span>+18.4% نمو مقارنة بالشهر السابق</span>
              </div>
            </div>
            <div className="text-[11px] text-gray-500 border-t border-gray-100 pt-2 flex items-center justify-between">
              <span>إجمالي 64 معاملة ناجحة</span>
              <span className="font-bold text-[#12302B]">شهر أكتوبر</span>
            </div>
          </div>

          {/* Card 4: Platform Commission */}
          <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500">عمولة المنصة التراكمية (3%)</span>
              <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 border border-blue-200">
                <span className="material-symbols-outlined text-[18px]">percent</span>
              </span>
            </div>
            <div className="mb-3">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-[#12302B]">447.60</span>
                <span className="text-base font-bold text-[#12302B]">₪</span>
              </div>
              <div className="flex items-center gap-1.5 mt-2 bg-emerald-50 text-emerald-800 px-2 py-1 rounded text-xs font-semibold">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>مخصومة تلقائياً عند التسوية</span>
              </div>
            </div>
            <div className="text-[11px] text-gray-500 border-t border-gray-100 pt-2 flex items-center justify-between">
              <span>رسوم التشغيل والربط</span>
              <span className="text-[#1F7A6E] font-bold">لا رسوم خفية</span>
            </div>
          </div>
        </section>

        {/* Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Column (8 cols): Payout Cycle & Transactions Ledger */}
          <div className="lg:col-span-8 space-y-6">
            {/* Linked Bank / Wallet Account Card */}
            <section className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A6E]">sync_alt</span>
                  <h2 className="text-base font-bold text-[#12302B]">حساب التحويل المالي المعتمد</h2>
                </div>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full">
                  موثق ومطابق
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#F6F3EC] border border-[#E1DACB]">
                  <span className="text-gray-500 block mb-1">الحساب البنكي (الأساسي):</span>
                  <span className="font-bold text-[#12302B] block text-sm">بنك فلسطين (Bank of Palestine)</span>
                  <span className="font-mono text-gray-600 block mt-1 dir-ltr text-right">PS04PALS00001234567890123456</span>
                  <span className="text-[11px] text-gray-400 mt-1 block">باسم: شركة لمسة للأزياء ذ.م.م</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F6F3EC] border border-[#E1DACB]">
                  <span className="text-gray-500 block mb-1">المحفظة الإلكترونية السريعة:</span>
                  <span className="font-bold text-[#12302B] block text-sm">جوال باي (Jawwal Pay)</span>
                  <span className="font-mono text-gray-600 block mt-1 dir-ltr text-right">0599-876543</span>
                  <span className="text-[11px] text-emerald-700 font-bold mt-1 block">تحويل فوري متاح 24/7</span>
                </div>
              </div>
            </section>

            {/* Transactions Ledger */}
            <section className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#12302B]">receipt_long</span>
                  <h2 className="text-base font-bold text-[#12302B]">سجل الحركات المالية والمبيعات</h2>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      filter === 'all' ? 'bg-[#12302B] text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    الكل
                  </button>
                  <button
                    onClick={() => setFilter('sales')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      filter === 'sales' ? 'bg-[#12302B] text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    المبيعات
                  </button>
                  <button
                    onClick={() => setFilter('payouts')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      filter === 'payouts' ? 'bg-[#12302B] text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    التحويلات
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {filteredTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#1F7A6E] transition-all bg-[#F6F3EC]/40 gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-[#12302B]">{tx.id}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500">{tx.date}</span>
                      </div>
                      <p className="font-bold text-[#12302B] text-sm">{tx.typeLabel}</p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 text-left">
                      <div>
                        <span className="text-sm font-bold block text-[#12302B]">{tx.amount}</span>
                        <span className="text-[11px] text-gray-400 block">الصافي: {tx.net}</span>
                      </div>
                      <Link
                        to="/merchant/wallet/disbursement-voucher"
                        className="px-3 py-1.5 bg-white border border-[#E1DACB] text-[#12302B] hover:bg-[#F6F3EC] rounded-lg text-xs font-bold transition-colors"
                      >
                        سند صرف
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm space-y-4 text-xs">
              <h3 className="text-sm font-bold text-[#12302B] pb-3 border-b border-gray-100">
                دورة السداد المجدولة القادمة
              </h3>

              <div className="p-4 rounded-xl bg-gradient-to-br from-[#F6F3EC] to-amber-50/40 border border-[#E1DACB] space-y-2">
                <div className="flex items-center justify-between text-gray-600">
                  <span>تاريخ التحويل القادم:</span>
                  <span className="font-bold text-[#12302B]">الخميس، 16 أكتوبر 2026</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>المبلغ المقدر تحويله:</span>
                  <span className="text-base font-extrabold text-[#1F7A6E]">₪ 4,850.00</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>الجهة المستلمة:</span>
                  <span className="font-bold">بنك فلسطين - فرع الرمال</span>
                </div>
              </div>

              <p className="text-gray-500 leading-relaxed text-[11px]">
                تتم التحويلات البنكية آلياً صباح كل خميس وتصل لحسابكم دون الحاجة لطلب يدوي طالما الرصيد تجاوز 100 شيكل.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm space-y-3 text-xs">
              <h3 className="text-sm font-bold text-[#12302B] pb-2 border-b border-gray-100">
                السندات والأرشيف المالي
              </h3>
              <div className="space-y-2">
                <Link
                  to="/merchant/wallet/transfers"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#F6F3EC] hover:bg-[#E1DACB]/40 text-[#12302B] font-bold text-xs transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#1F7A6E]">history</span>
                    <span>أرشيف التحويلات السابقة (65code)</span>
                  </span>
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </Link>
                <Link
                  to="/merchant/wallet/disbursement-voucher"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#F6F3EC] hover:bg-[#E1DACB]/40 text-[#12302B] font-bold text-xs transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#1F7A6E]">receipt</span>
                    <span>سند الصرف المالي المعتمد (66code)</span>
                  </span>
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </Link>
              </div>
            </div>

            <div className="bg-[#12302B] text-white rounded-2xl p-5 shadow-md space-y-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E9B44C]">security</span>
                <h4 className="text-sm font-bold text-white">ضمان تسوية نقاط الزبائن</h4>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                تقوم منصة تبادل بتعويض متجرك نقدياً عن أي قسائم خصم استبدلها الزبائن بنقاط ولائهم، ويظهر التعويض ضمن بند المبيعات في تقريرك الأسبوعي.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
