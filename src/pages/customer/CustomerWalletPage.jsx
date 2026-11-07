import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';

export default function CustomerWalletPage() {
  const [filter, setFilter] = useState('all');
  const [showQrModal, setShowQrModal] = useState(false);

  const transactions = [
    {
      id: 1,
      type: 'deposit',
      title: 'مكافأة كاش باك (طلب #TBD-2026-7841)',
      store: 'بوتيك لمسة للأزياء الراقية',
      date: 'اليوم، 03:15 م',
      points: '+3,350',
      shekels: '+16.75 ₪',
      status: 'مكتمل',
    },
    {
      id: 2,
      type: 'redeem',
      title: 'استبدال قسيمة خصم مشتريات',
      store: 'دار الياقوت للأزياء',
      date: '12 مايو 2026',
      points: '-1,000',
      shekels: '-5.00 ₪',
      status: 'مستبدل',
    },
    {
      id: 3,
      type: 'deposit',
      title: 'مكافأة ترحيبية بالانضمام',
      store: 'منصة تبادل الرسمية',
      date: '1 مايو 2026',
      points: '+2,000',
      shekels: '+10.00 ₪',
      status: 'مكتمل',
    },
    {
      id: 4,
      type: 'deposit',
      title: 'كاش باك طلب فستان مخملي #TBD-2026-6210',
      store: 'بوتيك لمسة للأزياء الراقية',
      date: '28 أبريل 2026',
      points: '+1,400',
      shekels: '+7.00 ₪',
      status: 'مكتمل',
    },
  ];

  const filteredTransactions = transactions.filter((t) => {
    if (filter === 'all') return true;
    return t.type === filter;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#1F7A6E] selection:text-white">
      <CustomerHeader />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-[#74777f]">
          <Link to="/" className="hover:text-[#12302B] transition-colors">
            الرئيسية
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <Link to="/customer/dashboard" className="hover:text-[#12302B] transition-colors">
            لوحة التحكم
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <span className="text-[#1F7A6E] font-bold">المحفظة الرقمية الشاملة وسجل النقاط</span>
        </nav>

        {/* Hero Wallet Card */}
        <section className="bg-gradient-to-br from-[#12302B] via-[#1A423B] to-[#0E2622] rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden shadow-xl border border-[#214b43]">
          <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-[#1F7A6E]/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-[#E9B44C]/15 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#E9B44C] text-[#12302B] font-bold text-xs flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-sm">workspace_premium</span>
                  عضوية VIP الذهبية • 5% كاش باك دائم
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold">
                  حساب نشط ومحمي
                </span>
              </div>

              <div>
                <span className="text-xs text-white/70 block mb-1">الرصيد الإجمالي المتاح للاستبدال الفوري</span>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                    5,750
                  </h1>
                  <span className="text-lg sm:text-xl font-bold text-white/80">نقطة كاش باك</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#E9B44C]">
                    ≈ 28.75 ₪
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-white/85">
                <div className="bg-white/10 rounded-xl p-2.5 flex items-center gap-2 border border-white/10">
                  <span className="material-symbols-outlined text-[#E9B44C] text-base">swap_horiz</span>
                  <span>معادلة الاستبدال: <strong>200 نقطة = 1.00 ₪</strong></span>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5 flex items-center gap-2 border border-white/10">
                  <span className="material-symbols-outlined text-emerald-300 text-base">schedule</span>
                  <span>صلاحية الرصيد: <strong>6 أشهر</strong> من آخر عملية</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => setShowQrModal(true)}
                className="py-3.5 px-6 rounded-xl bg-[#E9B44C] hover:bg-[#d49a32] text-[#12302B] font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">qr_code_2</span>
                <span>إظهار باركود الاستبدال المباشر</span>
              </button>

              <Link
                to="/stores"
                className="py-3.5 px-6 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/20 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">storefront</span>
                <span>استكشاف المتاجر للاستبدال</span>
              </Link>
            </div>
          </div>
        </section>

        {/* QR / Barcode Modal */}
        {showQrModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-4 shadow-2xl relative border-2 border-[#E9B44C]">
              <button
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 left-4 p-2 text-[#74777f] hover:text-[#12302B] cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="w-12 h-12 rounded-2xl bg-[#12302B] text-[#E9B44C] flex items-center justify-center mx-auto text-2xl font-bold">
                ت
              </div>

              <h3 className="text-lg font-bold text-[#12302B]">رمز الاستبدال الشخصي</h3>
              <p className="text-xs text-[#576b66]">
                أظهري هذا الكود لكاشير المتجر لاستبدال نقاطك فورياً بخصم نقدي:
              </p>

              {/* Mock Barcode display */}
              <div className="bg-[#F6F3EC] p-4 rounded-2xl border border-[#E1DACB] space-y-2">
                <div className="h-20 bg-[repeating-linear-gradient(90deg,#12302b,#12302b_3px,transparent_3px,transparent_6px,#12302b_6px,#12302b_10px,transparent_10px,transparent_13px)] w-full rounded"></div>
                <span className="font-mono text-base font-black text-[#12302B] tracking-widest block">
                  #TBD-8821-5750
                </span>
              </div>

              <p className="text-[11px] text-[#005232] font-bold">
                الرصيد المتاح: 5,750 نقطة (28.75 ₪)
              </p>
            </div>
          </div>
        )}

        {/* Main 2-Column: Activity Ledger & Redemption Catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Activity Ledger (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h2 className="text-xl font-bold text-[#12302B]">سجل حركات المحفظة والنقاط</h2>
                <p className="text-xs text-[#576b66]">تتبع تفصيلي لجميع نقاط الكاش باك المكتسبة والمستبدلة</p>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#E1DACB] text-xs">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    filter === 'all' ? 'bg-[#12302B] text-white' : 'text-[#576b66] hover:text-[#12302B]'
                  }`}
                >
                  الكل
                </button>
                <button
                  onClick={() => setFilter('deposit')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    filter === 'deposit' ? 'bg-[#12302B] text-white' : 'text-[#576b66] hover:text-[#12302B]'
                  }`}
                >
                  مكتسبة (+)
                </button>
                <button
                  onClick={() => setFilter('redeem')}
                  className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    filter === 'redeem' ? 'bg-[#12302B] text-white' : 'text-[#576b66] hover:text-[#12302B]'
                  }`}
                >
                  مستبدلة (-)
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E1DACB] shadow-sm divide-y divide-[#E1DACB]">
              {filteredTransactions.map((tx) => (
                <div key={tx.id} className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        tx.type === 'deposit'
                          ? 'bg-[#71dba2]/20 text-[#005232]'
                          : 'bg-[#ffdad6] text-[#ba1a1a]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {tx.type === 'deposit' ? 'savings' : 'shopping_bag'}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#12302B]">{tx.title}</h4>
                      <p className="text-xs text-[#576b66]">{tx.store}</p>
                      <span className="text-[11px] text-[#74777f]">{tx.date}</span>
                    </div>
                  </div>
                  <div className="text-left shrink-0">
                    <span
                      className={`text-sm sm:text-base font-extrabold block ${
                        tx.type === 'deposit' ? 'text-[#005232]' : 'text-[#ba1a1a]'
                      }`}
                    >
                      {tx.points} نقطة
                    </span>
                    <span className="text-xs text-[#576b66] font-medium">{tx.shekels}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Catalog & Instant Redemption Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm space-y-4">
              <h3 className="text-base font-bold text-[#12302B] pb-3 border-b border-[#E1DACB]">
                تحويل النقاط لقسائم نقدية
              </h3>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl border border-[#E1DACB] hover:border-[#1F7A6E] transition-all bg-[#F6F3EC]/30 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-[#12302B] block">قسيمة بقيمة 10.00 ₪</span>
                    <span className="text-xs text-[#835400]">تكلفة: 2,000 نقطة</span>
                  </div>
                  <button
                    onClick={() => alert('تم استبدال 2,000 نقطة بنجاح بقسيمة 10 ₪!')}
                    className="px-3.5 py-1.5 rounded-lg bg-[#12302B] hover:bg-[#1F7A6E] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    استبدال
                  </button>
                </div>

                <div className="p-3.5 rounded-xl border-2 border-[#1F7A6E] bg-[#1F7A6E]/5 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-[#1F7A6E] block">قسيمة بقيمة 25.00 ₪</span>
                    <span className="text-xs text-[#835400] font-bold">تكلفة: 5,000 نقطة (متاح)</span>
                  </div>
                  <button
                    onClick={() => alert('تم استبدال 5,000 نقطة بنجاح بقسيمة 25 ₪!')}
                    className="px-3.5 py-1.5 rounded-lg bg-[#1F7A6E] hover:bg-[#17655B] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    استبدال
                  </button>
                </div>

                <div className="p-3.5 rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/30 opacity-60 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-[#12302B] block">قسيمة بقيمة 50.00 ₪</span>
                    <span className="text-xs text-[#74777f]">تكلفة: 10,000 نقطة</span>
                  </div>
                  <span className="text-xs font-bold text-[#74777f]">رصيد غير كافٍ</span>
                </div>
              </div>
            </div>

            <div className="bg-[#12302B] text-white rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E9B44C] text-xl">stars</span>
                <h4 className="text-sm font-bold text-[#E9B44C]">طريقة كسب المزيد من النقاط</h4>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                في كل مرة تتسوقين فيها من بوتيكات تبادل الشريكة، اطلبي إضافة كاش باك تبادل برقم جوالك لتحصلي على 5% نقاط نقدية مضاعفة فوراً.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
